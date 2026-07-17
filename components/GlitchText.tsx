"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

type Tag = "h1" | "h2" | "h3" | "span" | "div";

/**
 * A heading that fires a short RGB-split "compression" glitch burst when it
 * scrolls into view and again on hover. Kept subtle and editorial — one
 * pass, never looping. The `animate-glitchBurst` class below is a literal so
 * Tailwind keeps the keyframes in the build.
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
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const firedOnView = useRef(false);

  const fire = () => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("animate-glitchBurst");
    // Force reflow so the animation can be re-triggered.
    void el.offsetWidth;
    el.classList.add("animate-glitchBurst");
  };

  // Fire once when it enters the viewport.
  if (inView && !firedOnView.current) {
    firedOnView.current = true;
    // Defer to the next frame so the node is painted first.
    requestAnimationFrame(fire);
  }

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      onMouseEnter={fire}
      className={`[will-change:transform] ${className}`}
    >
      {children}
    </Tag>
  );
}
