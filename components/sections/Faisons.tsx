"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Band = { label: string; bg: string };

const BANDS: Band[] = [
  { label: "Design", bg: "#fca1d3" },
  { label: "Musique", bg: "#155dd5" },
  { label: "Culture / Info", bg: "#fbc904" },
  { label: "Cinéma", bg: "#fd6b04" },
  { label: "Production", bg: "#af2a16" },
  { label: "Architecture", bg: "#155dd5" },
  { label: "Danse", bg: "#fbc904" },
  { label: "Spectacle", bg: "#fca1d3" },
];

const CYCLE_MS = 1700;

export default function Faisons() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const paused = useRef(false);

  useEffect(() => {
    const start = () => {
      stop();
      timer.current = setInterval(() => {
        if (!paused.current) setActive((a) => (a + 1) % BANDS.length);
      }, CYCLE_MS);
    };
    const stop = () => {
      if (timer.current) clearInterval(timer.current);
      timer.current = null;
    };
    start();
    return () => {
      stop();
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  // Pause the auto-cycle on interaction. On touch there's no mouseleave, so
  // schedule an automatic resume so the bands keep breathing.
  const select = (i: number) => {
    paused.current = true;
    setActive(i);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      paused.current = false;
    }, 2600);
  };
  const resume = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    paused.current = false;
  };

  return (
    <section
      id="faisons"
      data-theme="cream"
      className="relative flex min-h-screen bg-cream"
    >
      {/* Bands */}
      <div
        onMouseLeave={resume}
        className="flex flex-1 flex-col pt-[66px]"
      >
        {BANDS.map((band, i) => {
          const on = i === active;
          return (
            <motion.div
              key={band.label + i}
              onMouseEnter={() => select(i)}
              onPointerDown={() => select(i)}
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: i * 0.07,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              style={{ background: band.bg }}
              className="relative flex flex-1 cursor-pointer items-center px-[clamp(18px,4vw,60px)]"
            >
              <span
                aria-hidden
                style={{ transform: on ? "scale(1.5)" : "scale(1)" }}
                className="mr-[clamp(16px,2vw,30px)] block h-[clamp(14px,1.6vw,22px)] w-[clamp(14px,1.6vw,22px)] flex-none rounded-full bg-black transition-transform duration-[350ms] ease-[cubic-bezier(.2,.8,.2,1)] [will-change:transform]"
              />
              <span
                style={{ transform: on ? "translateX(20px)" : "translateX(0)" }}
                className="font-display text-[clamp(22px,4.6vw,58px)] uppercase leading-none tracking-[-0.01em] text-black transition-transform duration-[350ms] ease-[cubic-bezier(.2,.8,.2,1)] [will-change:transform]"
              >
                {band.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Right index column (desktop) */}
      <div className="relative hidden w-[clamp(150px,15vw,220px)] border-l-2 border-black bg-cream md:block">
        {/* Rotated masthead line */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-[66px] z-[2] flex w-10 items-center justify-center">
          <div className="rotate-90 whitespace-nowrap font-grotesque text-[clamp(10px,1.05vw,13px)] font-bold uppercase tracking-[0.14em] text-black/45">
            Le média d&apos;art&nbsp;&nbsp;·&nbsp;&nbsp;
            <span className="text-brick">Le JPEG</span>
            &nbsp;&nbsp;·&nbsp;&nbsp;2026
          </div>
        </div>

        {/* Sliding marker + rotated labels */}
        <div className="absolute inset-y-0 bottom-0 left-10 right-0 top-[66px] flex flex-col">
          <div
            aria-hidden
            style={{
              transform: `translateY(${active * 100}%)`,
              borderLeftColor: BANDS[active].bg,
            }}
            className="pointer-events-none absolute left-0 top-0 z-0 h-[12.5%] w-full border-l-8 bg-black/5 transition-[transform,border-color] duration-[450ms] ease-[cubic-bezier(.7,0,.2,1)]"
          />
          {BANDS.map((band, i) => {
            const on = i === active;
            return (
              <div
                key={band.label + i}
                className="relative z-[1] flex flex-1 items-center justify-center"
              >
                <span
                  style={{
                    color: on ? "#141414" : "rgba(20,20,20,.3)",
                    transform: on
                      ? "rotate(90deg) scale(1.16)"
                      : "rotate(90deg) scale(1)",
                  }}
                  className="whitespace-nowrap font-grotesque text-[clamp(9px,1vw,13px)] font-extrabold uppercase tracking-[0.005em] transition-[color,transform] duration-[350ms] ease-[cubic-bezier(.2,.8,.2,1)]"
                >
                  {band.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
