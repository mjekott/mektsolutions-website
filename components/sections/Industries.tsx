"use client";

import { motion } from "motion/react";
import { CONTAINER } from "@/lib/ui";
import { revealContainer, revealItem, viewport } from "@/lib/motion";
import { industries } from "@/lib/data";
import { Eyebrow } from "@/components/Eyebrow";

export function Industries() {
  return (
    <section id="industries" className={`${CONTAINER} pt-[70px] md:pt-[90px] pb-[60px] text-center flex flex-col items-center`}>
      <Eyebrow center>Industries</Eyebrow>
      <h2 className="text-[34px] md:text-[44px] leading-[1.1] tracking-[-0.04em] font-semibold mt-[22px]">
        Industries we serve <span className="text-white/40">across Africa</span>
      </h2>
      <p className="text-base text-white/50 mt-[18px] max-w-[520px]">
        We deliver across sectors and across regions — from fintech to government, Lagos to London.
      </p>
      <motion.div variants={revealContainer} initial="hidden" whileInView="show" viewport={viewport} className="flex flex-wrap gap-3 justify-center max-w-[760px] mt-10">
        {industries.map((ind) => (
          <motion.span
            key={ind}
            variants={revealItem}
            className="text-[15px] font-medium text-white/[0.78] bg-[#252322] border border-white/[0.09] rounded-full px-[22px] py-[11px]"
          >
            {ind}
          </motion.span>
        ))}
      </motion.div>
      <a href="#contact" className="inline-block mt-9 bg-[#2b2927] border border-white/[0.12] text-[#f4f4f3] text-sm font-semibold px-7 py-3 rounded-xl hover:bg-[#2b2927] transition-colors">
        View all
      </a>
    </section>
  );
}
