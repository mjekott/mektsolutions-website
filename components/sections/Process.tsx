"use client";

import { motion } from "motion/react";
import { CONTAINER } from "@/lib/ui";
import { revealContainer, revealItem } from "@/lib/motion";
import { steps } from "@/lib/data";
import { Eyebrow } from "@/components/Eyebrow";

export function Process() {
  return (
    <section id="process" className={`${CONTAINER} pt-[70px] md:pt-[90px] pb-[70px] grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-20 items-start`}>
      <div className="lg:sticky lg:top-24">
        <Eyebrow>Process</Eyebrow>
        <h2 className="text-[36px] md:text-[46px] leading-[1.08] tracking-[-0.04em] font-semibold mt-6">
          How We
          <br />
          Deliver
        </h2>
        <p className="text-base leading-[1.6] text-white/[0.52] mt-[22px] max-w-[340px]">
          From first call to launch — a clear, repeatable path. You always know what&apos;s shipping and what&apos;s next.
        </p>
        <div className="flex items-center gap-3.5 mt-[30px]">
          <span className="text-[40px] font-semibold tracking-[-0.04em] leading-none">~10</span>
          <span className="text-sm leading-[1.4] text-white/50">
            weeks, typical
            <br />
            concept to go-live
          </span>
        </div>
        <a href="#contact" className="inline-block mt-[34px] bg-[#f4f4f3] text-[#1b1a18] text-sm font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
          Start a project
        </a>
      </div>

      <div className="relative">
        <div className="absolute left-[21px] top-6 bottom-9 w-0.5 rounded-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))]" />
        <motion.div variants={revealContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }}>
          {steps.map((st) => (
            <motion.div key={st.no} variants={revealItem} className="flex gap-6 pb-[30px] relative">
              <div className="w-11 h-11 rounded-full bg-[#211f1d] border border-white/[0.14] flex-none flex items-center justify-center text-sm font-semibold text-white/70 tabular-nums relative z-[1]">
                {st.no}
              </div>
              <div className="pt-0.5">
                <h3 className="text-[19px] font-semibold tracking-[-0.02em]">{st.title}</h3>
                <p className="text-[14.5px] leading-[1.55] text-white/50 mt-[7px] max-w-[520px]">{st.desc}</p>
              </div>
            </motion.div>
          ))}
          <motion.div variants={revealItem} className="flex gap-6 relative">
            <div className="w-11 h-11 rounded-full bg-accent flex-none flex items-center justify-center text-sm font-bold text-[#1b1a18] tabular-nums relative z-[1]">
              10
            </div>
            <div className="bg-[#211f1d] border border-white/[0.08] rounded-[18px] px-[26px] py-[22px] flex-1">
              <h3 className="text-[26px] font-semibold tracking-[-0.03em]">
                Go-Live <span className="italic text-white/50">&amp; iterate</span>
              </h3>
              <p className="text-[14.5px] leading-[1.55] text-white/50 mt-2 max-w-[520px]">
                Ship to production, monitor in the wild, and keep improving with you — long after launch day.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
