"use client";

import { motion } from "motion/react";

/** Slow-drifting accent glow anchored to the top-right of the hero. */
export function AmbientGlow() {
  return (
    <motion.div
      aria-hidden
      animate={{ x: [0, -26, 0], y: [0, 22, 0], scale: [1, 1.06, 1] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute -top-[120px] right-[-160px] w-[60vw] max-w-[1100px] h-[780px] blur-[8px] z-0
        bg-[radial-gradient(115%_90%_at_80%_0%,color-mix(in_srgb,var(--accent)_36%,transparent),color-mix(in_srgb,var(--accent)_9%,transparent)_42%,transparent_66%)]"
    />
  );
}
