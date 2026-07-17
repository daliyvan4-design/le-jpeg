"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

/**
 * Fades + lifts its children into place when they scroll into view.
 * Thin wrapper around Framer Motion's whileInView for consistent editorial
 * reveals across sections.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 34,
  as = "div",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: keyof typeof motion;
} & Omit<HTMLMotionProps<"div">, "ref">) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
