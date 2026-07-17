"use client";

import { useEffect, useRef } from "react";

type Tag = "h1" | "h2" | "h3" | "span" | "div";

/**
 * A heading that fires a short RGB-split "compression" glitch burst when it
 * scrolls into view and again on interaction. On desktop that's hover; on
 * touch it fires on tap (pointerdown) so the effect is never hover-locked.
 * The `animate-glitchBurst` literal keeps the keyframes in the Tailwind build.
 */
export default function GlitchText({
  as = "h2",
  children,
  className = "",
}: {
  as?: Tag;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  const fire = () => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("animate-glitchBurst");
    // Force reflow so the animation can be re-triggered.
    void el.offsetWidth;
    el.classList.add("animate-glitchBurst");
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            fire();
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      onPointerEnter={fire}
      onPointerDown={fire}
      className={`[will-change:transform] ${className}`}
    >
      {children}
    </Tag>
  );
}
