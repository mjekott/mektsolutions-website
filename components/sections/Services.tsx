"use client";

import { motion } from "motion/react";
import { CONTAINER } from "@/lib/ui";
import { revealContainer, revealItem, viewport } from "@/lib/motion";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="bg-[#f1efe9] pt-24 pb-[100px]">
      <div className={CONTAINER}>
        <div className="text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white border border-black/10 rounded-full px-4 py-[7px] text-[13px] font-medium text-black/60">
            <span className="w-[5px] h-[5px] rounded-full bg-accent inline-block shrink-0" />
            Services
          </div>
          <h2 className="text-[34px] md:text-[44px] leading-[1.1] tracking-[-0.04em] font-semibold mt-[22px] text-[#1b1a18]">
            Four practices,
            <br />
            <span className="text-black/[0.32]">one delivery team</span>
          </h2>
          <p className="text-base text-black/[0.52] mt-[18px] max-w-[520px]">
            We cover the full lifecycle — from user research and design systems to production infrastructure.
          </p>
        </div>
        <motion.div variants={revealContainer} initial="hidden" whileInView="show" viewport={viewport} className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mt-12">
          {services.map((s) => (
            <motion.div
              key={s.no}
              variants={revealItem}
              className="bg-white border border-black/[0.07] rounded-[20px] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-[#1b1a18]">{s.title}</h3>
                <span className="text-[13px] text-black/30 tabular-nums">{s.no}</span>
              </div>
              <p className="text-[14.5px] leading-[1.55] text-black/55 mt-3.5 max-w-[440px]">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-[22px]">
                {s.skills.map((sk) => (
                  <span key={sk} className="text-[12.5px] text-black/60 bg-[#f1efe9] border border-black/[0.08] rounded-full px-[13px] py-[5px] whitespace-nowrap">
                    {sk}
                  </span>
                ))}
              </div>
              <a href="#contact" className="inline-block mt-[26px] text-[#1b1a18] text-[13.5px] font-semibold border border-black/[0.15] rounded-[10px] px-5 py-2.5 hover:border-black/30 transition-colors">
                Get in touch
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
