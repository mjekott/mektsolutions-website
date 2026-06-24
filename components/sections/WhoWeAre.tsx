"use client";

import { motion } from "motion/react";
import { CONTAINER } from "@/lib/ui";
import { revealContainer, revealItem, viewport } from "@/lib/motion";
import { Eyebrow } from "@/components/Eyebrow";

const stats = [
  { v: "50", s: "+", label: "products shipped", solid: true },
  { v: "7", s: "+", label: "industries served", solid: false },
  { v: "3", s: "", label: "countries delivered in", solid: false },
  { v: "100", s: "%", label: "in-house team", solid: true },
];

export function WhoWeAre() {
  return (
    <section className={`${CONTAINER} pt-10 pb-[90px] md:pb-[110px] grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center`}>
      <div>
        <Eyebrow>Who Are We</Eyebrow>
        <h2 className="text-[32px] md:text-[40px] leading-[1.12] tracking-[-0.035em] font-semibold mt-[26px]">
          A product studio <span className="text-accent">for ambitious teams</span>
        </h2>
        <p className="text-base leading-[1.6] text-white/[0.52] mt-[22px] max-w-[440px]">
          MEKT is a multidisciplinary studio of designers and engineers. We turn complex problems into clean, dependable products — from first concept through launch and beyond.
        </p>
        <p className="text-base leading-[1.6] text-white/[0.52] mt-4 max-w-[440px]">
          Lean teams, senior people, and zero hand-offs. The people who scope your product are the ones who ship it.
        </p>
      </div>
      <motion.div
        variants={revealContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid grid-cols-2 gap-4 border border-white/[0.09] rounded-[22px] p-4 bg-[#211f1d]"
      >
        {stats.map((st, i) => (
          <motion.div
            key={i}
            variants={revealItem}
            className={`rounded-2xl px-6 py-9 md:px-9 md:py-10 min-h-[160px] md:min-h-[200px] flex flex-col justify-center items-center text-center ${
              st.solid ? "bg-[#2b2927]" : "bg-[#232120] border border-white/[0.04]"
            }`}
          >
            <div className="text-[44px] md:text-[56px] font-semibold tracking-[-0.04em] leading-none">
              {st.v}
              <span className="text-white/45">{st.s}</span>
            </div>
            <div className="text-[15px] text-white/50 mt-3">{st.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
