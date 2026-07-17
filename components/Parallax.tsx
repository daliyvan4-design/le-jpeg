"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Moves its children vertically at a different rate than the page scroll.
 * `speed` is the peak travel in px across the element's viewport transit;
 * positive = drifts up on scroll. Uses transform only (GPU-friendly) and
 * disables itself under prefers-reduced-motion.
 */
export default function Parallax({
  children,
  speed = 60,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ y: reduced ? 0 : y }}
        className="[will-change:transform]"
      >
        {children}
      </motion.div>
    </div>
  );
}
