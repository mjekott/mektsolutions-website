"use client";

import { motion } from "motion/react";
import { CONTAINER } from "@/lib/ui";
import { revealContainer, revealItem } from "@/lib/motion";
import { Eyebrow } from "@/components/Eyebrow";
import { CalendlyButton } from "@/components/CalendlyButton";

export function Cta() {
  return (
    <section id="contact" className={`relative ${CONTAINER} pt-[110px] md:pt-[130px] pb-[120px] md:pb-[140px] text-center`}>
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[720px] max-w-full h-[460px] bg-[radial-gradient(80%_100%_at_50%_100%,color-mix(in_srgb,var(--accent)_32%,transparent),transparent_66%)]" />
      <motion.div variants={revealContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="relative z-[1] flex flex-col items-center">
        <motion.div variants={revealItem}>
          <Eyebrow center>Let&apos;s talk</Eyebrow>
        </motion.div>
        <motion.h2 variants={revealItem} className="text-[42px] md:text-[64px] leading-[1.05] tracking-[-0.045em] font-semibold mt-[26px]">
          Have a product in mind?
          <br />
          <span className="text-accent">Let&apos;s ship it.</span>
        </motion.h2>
        <motion.p variants={revealItem} className="text-[17px] text-white/50 mt-6 max-w-[480px]">
          Tell us what you&apos;re building. Book a free 30-minute call and we&apos;ll come back with a plan.
        </motion.p>
        <motion.div variants={revealItem} className="mt-9">
          <CalendlyButton className="inline-block bg-accent text-[#1b1a18] text-[15px] font-semibold px-9 py-[15px] rounded-xl hover:opacity-90 transition-opacity cursor-pointer">
            Book a call
          </CalendlyButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
