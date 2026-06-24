"use client";

import { motion } from "motion/react";
import { CONTAINER } from "@/lib/ui";
import { revealContainer, revealItem, viewport } from "@/lib/motion";
import { testimonials } from "@/lib/data";
import { Eyebrow } from "@/components/Eyebrow";

export function Testimonials() {
  return (
    <section className={`${CONTAINER} pt-[70px] pb-[30px]`}>
      <div className="text-center flex flex-col items-center">
        <Eyebrow center>Testimonials</Eyebrow>
        <h2 className="text-[34px] md:text-[44px] tracking-[-0.04em] font-semibold mt-[22px]">What our <span className="text-accent">clients say</span></h2>
      </div>
      <motion.div
        variants={revealContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-[46px]"
      >
        {testimonials.map((t) => (
          <motion.figure
            key={t.name}
            variants={revealItem}
            className="bg-[#211f1d] border border-white/[0.07] rounded-[20px] p-[30px] flex flex-col"
          >
            <div className="text-[34px] leading-none text-accent font-bold" aria-hidden>
              &ldquo;
            </div>
            <blockquote className="text-[15.5px] leading-[1.6] text-white/[0.78] mt-2 flex-1">{t.quote}</blockquote>
            <figcaption className="flex items-center gap-3 mt-6 pt-[22px] border-t border-white/[0.07]">
              <span className="w-[42px] h-[42px] rounded-full bg-[#2b2927] border border-white/10 flex items-center justify-center text-[15px] font-bold text-accent flex-none">
                {t.initials}
              </span>
              <span>
                <span className="block text-[14.5px] font-semibold">{t.name}</span>
                <span className="block text-[13px] text-white/45 mt-0.5">{t.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
