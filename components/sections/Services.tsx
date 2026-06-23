"use client";

import { motion } from "motion/react";
import { CONTAINER, TAG } from "@/lib/ui";
import { revealContainer, revealItem, viewport } from "@/lib/motion";
import { services } from "@/lib/data";
import { Eyebrow } from "@/components/Eyebrow";

export function Services() {
  return (
    <section id="services" className={`${CONTAINER} pt-[70px] md:pt-[90px] pb-[60px]`}>
      <div className="text-center flex flex-col items-center">
        <Eyebrow center>Services</Eyebrow>
        <h2 className="text-[34px] md:text-[44px] leading-[1.1] tracking-[-0.04em] font-semibold mt-[22px]">
          Four practices,
          <br />
          <span className="text-white/40">one delivery team</span>
        </h2>
        <p className="text-base text-white/50 mt-[18px] max-w-[520px]">
          We cover the full lifecycle — from user research and design systems to production infrastructure.
        </p>
      </div>
      <motion.div variants={revealContainer} initial="hidden" whileInView="show" viewport={viewport} className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mt-12">
        {services.map((s) => (
          <motion.div key={s.no} variants={revealItem} className="bg-[#0c150f] border border-white/[0.07] rounded-[20px] p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{s.title}</h3>
              <span className="text-[13px] text-white/[0.32] tabular-nums">{s.no}</span>
            </div>
            <p className="text-[14.5px] leading-[1.55] text-white/50 mt-3.5 max-w-[440px]">{s.desc}</p>
            <div className="flex flex-wrap gap-2 mt-[22px]">
              {s.skills.map((sk) => (
                <span key={sk} className={`${TAG} text-white/[0.62]`}>{sk}</span>
              ))}
            </div>
            <a href="#contact" className="inline-block mt-[26px] text-white/[0.72] text-[13.5px] font-semibold border border-white/[0.12] rounded-[10px] px-5 py-2.5 hover:text-white hover:border-white/25 transition-colors">
              Get in touch
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
