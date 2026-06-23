/* ------------------------------------------------------------------ */
/* Reusable Tailwind class fragments shared across components.         */
/* ------------------------------------------------------------------ */

/** Centered, max-width page gutter applied to every section. */
export const CONTAINER = "w-full max-w-[1240px] mx-auto px-6 md:px-10";

/** Small section eyebrow chip (e.g. "Who Are We"). */
export const PILL =
  "inline-flex items-center gap-2 bg-[#121e17] border border-white/[0.09] rounded-full px-4 py-[7px] text-[13px] font-medium text-white/70";

/** The accent dot inside an eyebrow chip. */
export const DOT = "w-[5px] h-[5px] rounded-full bg-[#f4f4f3] inline-block shrink-0";

/** Pill-shaped tag used for skills, categories, etc. */
export const TAG =
  "text-[12.5px] text-white/60 bg-[#142018] border border-white/[0.08] rounded-full px-[13px] py-[5px] whitespace-nowrap";
