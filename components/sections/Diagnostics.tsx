"use client";

import { motion } from "motion/react";
import { CONTAINER } from "@/lib/ui";
import { revealContainer, revealItem, viewport } from "@/lib/motion";
import { diagnostics } from "@/lib/data";
import { Eyebrow } from "@/components/Eyebrow";
import { CalendlyButton } from "@/components/CalendlyButton";

export function Diagnostics() {
  return (
    <section className={`${CONTAINER} pt-[70px] pb-10`}>
      <div className="text-center flex flex-col items-center">
        <Eyebrow center>Start small</Eyebrow>
        <h2 className="text-[34px] md:text-[44px] leading-[1.1] tracking-[-0.04em] font-semibold mt-[22px]">
          Not ready to commit? <span className="text-accent">Start with a question.</span>
        </h2>
        <p className="text-base text-white/50 mt-[18px] max-w-[540px]">
          Low-commitment ways to get real answers about your product before a full build.
        </p>
      </div>
      <motion.div
        variants={revealContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-[46px]"
      >
        {diagnostics.map((d) => (
          <motion.div key={d.title} variants={revealItem}>
            <CalendlyButton className="group h-full w-full text-left bg-[#211f1d] border border-white/[0.07] rounded-[20px] p-[30px] flex flex-col cursor-pointer transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_50%,transparent)]">
              <span className="text-xs font-semibold tracking-[0.04em] text-accent uppercase">{d.kicker}</span>
              <h3 className="text-[21px] font-semibold tracking-[-0.02em] mt-3.5">{d.title}</h3>
              <p className="text-sm leading-[1.55] text-white/50 mt-3 flex-1">{d.desc}</p>
              <span className="mt-[22px] text-sm font-semibold text-[#f4f4f3] inline-flex items-center gap-2">
                {d.cta} <span className="text-[15px] text-accent transition-transform group-hover:translate-x-1">&rarr;</span>
              </span>
            </CalendlyButton>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
