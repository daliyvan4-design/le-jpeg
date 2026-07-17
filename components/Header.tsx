"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";

type Theme = "cream" | "brick";

const NAV = [
  { href: "#manifeste", label: "Pourquoi ?", n: "02" },
  { href: "#faisons", label: "Quoi ?", n: "03" },
  { href: "#qui", label: "Qui ?", n: "04" },
  { href: "#rubriques", label: "Comment ?", n: "05" },
  { href: "#couleurs", label: "Identité ?", n: "06" },
  { href: "#contact", label: "Yakoi ?", n: "08" },
];

const BLOCKS = [
  "#fbc904", "#fd6b04", "#af2a16", "#fca1d3",
  "#155dd5", "#039c4b", "#000000", "#fcedd5",
];

/**
 * Fixed header. Detects the section under the header and swaps between the red
 * logo (over cream) and cream logo (over brick) with a crossfade + glitch
 * flash. On mobile the JPEG logo is the menu trigger: tapping it makes a
 * full-screen sidebar glitch open from the logo's top-left corner.
 */
export default function Header() {
  const [theme, setTheme] = useState<Theme>("cream");
  const [glitching, setGlitching] = useState(false);
  const [open, setOpen] = useState(false);
  const themeRef = useRef<Theme>("cream");
  const glitchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // --- section theme detection ---------------------------------------------
  useEffect(() => {
    const header = document.getElementById("site-header");
    let ticking = false;

    const update = () => {
      ticking = false;
      const headerBottom = header ? header.getBoundingClientRect().bottom : 66;
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

  // --- lock scroll + escape while the mobile menu is open ------------------
  useEffect(() => {
    if (open) {
      window.__lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      window.__lenis?.start();
      document.body.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const onBrick = theme === "brick";
  const inkColor = onBrick ? "#fff9ee" : "#141414";

  // Menu link tap: close, resume scroll, then glide to the section.
  const go = (href: string) => {
    setOpen(false);
    requestAnimationFrame(() => {
      window.__lenis?.start();
      const el = document.querySelector(href);
      if (!el) return;
      if (window.__lenis?.scrollTo) window.__lenis.scrollTo(el as HTMLElement);
      else el.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <>
      <header
        id="site-header"
        style={{ color: open ? "#fff9ee" : inkColor }}
        className="fixed inset-x-0 top-0 z-[70] flex h-[66px] items-center justify-between px-4 sm:px-6 md:px-[clamp(16px,4vw,46px)]"
      >
        {/* Logo — desktop: home link · mobile: menu trigger */}
        <div className="relative flex h-[66px] items-center gap-3">
          {/* Desktop: link home */}
          <a
            href="#hero"
            aria-label="LE JPEG · retour en haut"
            className="hidden h-[66px] items-center md:flex"
          >
            <LogoStack onBrick={onBrick} glitching={glitching} />
          </a>

          {/* Mobile: tap the logo to open the sidebar */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="flex h-[66px] items-center gap-2 md:hidden"
          >
            <LogoStack onBrick={onBrick || open} glitching={glitching || open} />
            <span className="animate-flick font-mono text-[10px] uppercase tracking-[0.18em]">
              · {open ? "fermer" : "menu"}
            </span>
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-[clamp(12px,2vw,30px)] font-mono text-[12px] uppercase tracking-[0.06em] md:flex">
          {NAV.slice(0, 5).map((item) => (
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

        <span
          aria-hidden
          style={{
            background: open
              ? "rgba(255,249,238,.28)"
              : onBrick
                ? "rgba(255,249,238,.28)"
                : "rgba(20,20,20,.18)",
          }}
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px transition-colors"
        />
      </header>

      {/* Mobile sidebar — glitches open from the logo corner */}
      <MobileMenu open={open} onClose={() => setOpen(false)} onGo={go} />
    </>
  );
}

/** The crossfading two-state logo, shared by desktop + mobile triggers. */
function LogoStack({
  onBrick,
  glitching,
}: {
  onBrick: boolean;
  glitching: boolean;
}) {
  return (
    <span
      className="relative block h-[26px] w-[52px] sm:h-[30px] sm:w-[60px]"
      style={{
        filter: glitching
          ? "drop-shadow(3px 0 #155dd5) drop-shadow(-3px 0 #af2a16)"
          : "none",
        transition: "filter .18s ease",
      }}
    >
      <Image
        src="/logo-rouge.png"
        alt="LE JPEG"
        fill
        priority
        sizes="60px"
        style={{
          objectFit: "contain",
          objectPosition: "left center",
          opacity: onBrick ? 0 : 1,
          transition: "opacity .32s ease",
        }}
      />
      <Image
        src="/logo-creme.png"
        alt="LE JPEG"
        fill
        priority
        sizes="60px"
        style={{
          objectFit: "contain",
          objectPosition: "left center",
          opacity: onBrick ? 1 : 0,
          transition: "opacity .32s ease",
        }}
      />
    </span>
  );
}

const panelV: Variants = {
  hidden: { clipPath: "inset(0 100% 100% 0)", opacity: 0.5 },
  show: {
    clipPath: "inset(0 0% 0% 0)",
    opacity: 1,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  },
  exit: {
    clipPath: "inset(0 100% 100% 0)",
    opacity: 0,
    transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] },
  },
};

const listV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.14 } },
  exit: {},
};

const itemV: Variants = {
  hidden: { opacity: 0, x: -44 },
  show: {
    opacity: 1,
    x: 0,
    textShadow: [
      "5px 0 #155dd5, -5px 0 #fbc904",
      "-3px 0 #fd6b04, 3px 0 #039c4b",
      "0px 0 rgba(0,0,0,0)",
    ],
    transition: { duration: 0.42, ease: [0.2, 0.8, 0.2, 1] },
  },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

function MobileMenu({
  open,
  onClose,
  onGo,
}: {
  open: boolean;
  onClose: () => void;
  onGo: (href: string) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[65] md:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Fermer le menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 h-full w-full bg-black/40"
          />

          {/* Panel — grows out of the logo's top-left corner */}
          <motion.nav
            variants={panelV}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ transformOrigin: "top left" }}
            className="absolute inset-0 flex h-[100dvh] w-full flex-col overflow-hidden bg-brick px-6 pb-8 pt-[78px] text-cream"
          >
            {/* Datamosh strip echoing the compression motif */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex">
                {BLOCKS.map((c, i) => (
                  <span
                    key={i}
                    style={{ background: c }}
                    className="h-[10px] w-[10px]"
                  />
                ))}
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-80">
                Menu · N°01
              </span>
            </div>

            {/* Nav links */}
            <motion.ul
              variants={listV}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex flex-1 flex-col justify-center gap-1"
            >
              {NAV.map((item) => (
                <motion.li key={item.href} variants={itemV}>
                  <button
                    type="button"
                    onClick={() => onGo(item.href)}
                    className="flex w-full items-baseline gap-3 py-2 text-left [will-change:transform]"
                  >
                    <span className="font-mono text-[13px] text-cream/60">
                      {item.n}
                    </span>
                    <span className="font-display text-[clamp(34px,11vw,60px)] uppercase leading-[0.95] tracking-[-0.01em]">
                      {item.label}
                    </span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>

            {/* Footer of the menu */}
            <motion.div
              variants={itemV}
              className="mt-6 flex items-center justify-between border-t-[1.5px] border-cream/30 pt-4 font-mono text-[11px] uppercase tracking-[0.1em]"
            >
              <a href="mailto:hello@lejpeg.art" className="text-cream underline decoration-yellow decoration-2 underline-offset-4">
                hello@lejpeg.art
              </a>
              <span className="opacity-70">Le média d&apos;art · 2026</span>
            </motion.div>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  );
}
