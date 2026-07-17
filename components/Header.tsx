"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Theme = "cream" | "brick";

const NAV = [
  { href: "#manifeste", label: "Pourquoi ?" },
  { href: "#faisons", label: "Quoi ?" },
  { href: "#qui", label: "Qui ?" },
  { href: "#rubriques", label: "Comment ?" },
  { href: "#couleurs", label: "Identité ?" },
];

/**
 * Fixed header. Detects the section passing under the header and swaps
 * between the red logo (over cream sections) and the cream logo (over
 * brick sections) with a crossfade + brief glitch flash on switch.
 */
export default function Header() {
  const [theme, setTheme] = useState<Theme>("cream");
  const [glitching, setGlitching] = useState(false);
  const themeRef = useRef<Theme>("cream");
  const glitchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const header = document.getElementById("site-header");
    let ticking = false;

    const update = () => {
      ticking = false;
      const headerBottom = header
        ? header.getBoundingClientRect().bottom
        : 66;
      const sections =
        document.querySelectorAll<HTMLElement>("section[data-theme]");
      let next: Theme = "cream";
      for (const s of Array.from(sections)) {
        const r = s.getBoundingClientRect();
        if (r.top <= headerBottom && r.bottom > headerBottom) {
          next = (s.dataset.theme as Theme) ?? "cream";
          break;
        }
      }
      if (next !== themeRef.current) {
        themeRef.current = next;
        setTheme(next);
        setGlitching(true);
        if (glitchTimer.current) clearTimeout(glitchTimer.current);
        glitchTimer.current = setTimeout(() => setGlitching(false), 420);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (glitchTimer.current) clearTimeout(glitchTimer.current);
    };
  }, []);

  const onBrick = theme === "brick";
  const inkColor = onBrick ? "#fff9ee" : "#141414";

  return (
    <header
      id="site-header"
      style={{ color: inkColor }}
      className="fixed inset-x-0 top-0 z-[60] flex h-[66px] items-center justify-between px-4 sm:px-6 md:px-[clamp(16px,4vw,46px)]"
    >
      {/* Logo — crossfade between the two states */}
      <a
        href="#hero"
        aria-label="LE JPEG · retour en haut"
        className="relative flex h-[66px] items-center"
      >
        <span
          className="relative block h-[26px] w-[52px] sm:h-[30px] sm:w-[60px]"
          style={{
            filter: glitching
              ? "drop-shadow(3px 0 #155dd5) drop-shadow(-3px 0 #af2a16)"
              : "none",
            transition: "filter .18s ease",
          }}
        >
          <LogoImg
            src="/logo-rouge.png"
            alt="LE JPEG"
            visible={!onBrick}
          />
          <LogoImg
            src="/logo-creme.png"
            alt="LE JPEG"
            visible={onBrick}
          />
        </span>
      </a>

      {/* Full nav — desktop */}
      <nav className="hidden items-center gap-[clamp(12px,2vw,30px)] font-mono text-[12px] uppercase tracking-[0.06em] md:flex">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{ color: "inherit" }}
            className="transition-opacity hover:opacity-60"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          style={{ borderColor: "currentColor", color: "inherit" }}
          className="border-[1.5px] px-3 py-1.5 transition-colors hover:bg-black/5"
        >
          Yakoi ?
        </a>
      </nav>

      {/* Compact CTA — mobile */}
      <a
        href="#contact"
        style={{ borderColor: "currentColor", color: "inherit" }}
        className="border-[1.5px] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] md:hidden"
      >
        Yakoi ?
      </a>

      <span
        aria-hidden
        style={{
          background: onBrick ? "rgba(255,249,238,.28)" : "rgba(20,20,20,.18)",
        }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px transition-colors"
      />
    </header>
  );
}

function LogoImg({
  src,
  alt,
  visible,
}: {
  src: string;
  alt: string;
  visible: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes="60px"
      style={{
        objectFit: "contain",
        objectPosition: "left center",
        opacity: visible ? 1 : 0,
        transition: "opacity .32s ease",
      }}
    />
  );
}
