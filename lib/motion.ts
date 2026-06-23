import type { Variants } from "motion/react";

/* ------------------------------------------------------------------ */
/* Shared Motion easing + variants for hero and scroll-reveal.        */
/* ------------------------------------------------------------------ */

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Parent that staggers the hero items in on first paint. */
export const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.14 } },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/** Parent that staggers children in as the section scrolls into view. */
export const revealContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Default `whileInView` viewport config — animate once, ~20% visible. */
export const viewport = { once: true, amount: 0.2 } as const;
