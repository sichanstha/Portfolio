"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type Props = { children: ReactNode; delay?: number; y?: number; className?: string };

/** Fades and slides its children in once, when they scroll into view. */
export default function Reveal({ children, delay = 0, y = 28, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}