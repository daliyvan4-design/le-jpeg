"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

type Swatch = { hex: string; text: string };

// Row 1 then row 2, exactly as the reference palette board.
const SWATCHES: Swatch[] = [
  { hex: "#fbc904", text: "#000000" },
  { hex: "#fd6b04", text: "#000000" },
  { hex: "#fcedd5", text: "#af2a16" },
  { hex: "#155dd5", text: "#fff9ee" },
  { hex: "#af2a16", text: "#fff9ee" },
  { hex: "#fca1d3", text: "#000000" },
  { hex: "#039c4b", text: "#fff9ee" },
  { hex: "#000000", text: "#fff9ee" },
];

export default function Couleurs() {
  const [copied, setCopied] = useState<number | null>(null);

  const copy = async (hex: string, i: number) => {
    try {
      await navigator.clipboard.writeText(hex);
    } catch {
      /* clipboard may be unavailable; still flash feedback */
    }
    setCopied(i);
    window.setTimeout(() => setCopied((c) => (c === i ? null : c)), 1100);
  };

  return (
    <section
      id="couleurs"
      data-theme="cream"
      className="relative flex min-h-screen flex-col bg-cream px-5 py-[clamp(90px,12vh,140px)] sm:px-8 md:px-[clamp(20px,6vw,90px)]"
    >
      <div className="mb-[clamp(30px,6vh,56px)] flex flex-wrap items-baseline justify-between gap-4">
        <Reveal
          as="h2"
          className="m-0 font-soft text-[clamp(40px,8vw,110px)] font-extrabold lowercase leading-[0.9] tracking-[-0.03em] text-ink"
        >
          nos couleurs
        </Reveal>
        <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-brick">
          06 / Palette · 8 tons
        </span>
      </div>

      <div className="grid min-h-[clamp(340px,52vh,560px)] flex-1 grid-cols-2 gap-[2px] border-2 border-black bg-black md:grid-cols-4">
        {SWATCHES.map((s, i) => (
          <button
            key={s.hex}
            type="button"
            onClick={() => copy(s.hex, i)}
            style={{ background: s.hex, color: s.text }}
            className="group relative flex items-center justify-center font-mono text-[clamp(15px,1.7vw,22px)] font-bold outline-none focus-visible:z-10 focus-visible:ring-4 focus-visible:ring-brick"
            aria-label={`Copier ${s.hex}`}
          >
            <span className="transition-[text-shadow,transform] duration-150 group-hover:[text-shadow:3px_0_#155dd5,-3px_0_#af2a16] group-active:translate-x-[1px]">
              {copied === i ? "copié !" : s.hex}
            </span>
            <span
              style={{ color: s.text }}
              className="pointer-events-none absolute bottom-2 right-3 font-mono text-[9px] uppercase tracking-[0.12em] opacity-0 transition-opacity duration-200 group-hover:opacity-60"
            >
              cliquer pour copier
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
