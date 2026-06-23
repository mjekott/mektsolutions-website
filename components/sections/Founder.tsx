"use client";

import { motion } from "motion/react";
import { CONTAINER } from "@/lib/ui";
import { EASE } from "@/lib/motion";
import { founder } from "@/lib/data";
import { Eyebrow } from "@/components/Eyebrow";
import { Shot } from "@/components/Shot";
import { CalendlyButton } from "@/components/CalendlyButton";

export function Founder() {
  return (
    <section id="founder" className={`${CONTAINER} pt-[70px] pb-[60px]`}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="group relative overflow-hidden bg-[#0c150f] border border-white/[0.07] rounded-[28px] p-5 grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-11 items-stretch"
      >
        {/* accent glow */}
        <div className="pointer-events-none absolute -top-20 -left-16 w-[380px] h-[380px] bg-[radial-gradient(circle_at_30%_30%,color-mix(in_srgb,var(--accent)_24%,transparent),transparent_64%)]" />

        <Shot
          src={founder.photo}
          placeholder="Founder photo"
          fit="cover"
          className="relative z-[1] w-full min-h-[320px] lg:min-h-[440px] rounded-[22px]"
          imgClassName="object-top [filter:grayscale(1)_contrast(1.04)_brightness(0.97)] transition-[filter] duration-500 group-hover:[filter:none]"
        />

        <div className="relative z-[1] py-6 lg:pr-8 flex flex-col justify-center">
          <Eyebrow>Meet the founder</Eyebrow>
          <h2 className="text-[34px] md:text-[42px] leading-[1.08] tracking-[-0.035em] font-semibold mt-[22px]">
            {founder.name}
          </h2>

          <div className="flex flex-wrap gap-2.5 mt-4">
            {founder.roles.map((r) =>
              r.accent ? (
                <span
                  key={r.label}
                  className="text-[13px] font-semibold text-accent rounded-full px-3.5 py-1.5 bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] border border-[color-mix(in_srgb,var(--accent)_32%,transparent)]"
                >
                  {r.label}
                </span>
              ) : (
                <span
                  key={r.label}
                  className="text-[13px] font-medium text-white/70 bg-[#142018] border border-white/[0.08] rounded-full px-3.5 py-1.5"
                >
                  {r.label}
                </span>
              )
            )}
          </div>

          <p className="text-base leading-[1.6] text-white/60 mt-[22px] max-w-[520px]">{founder.bio}</p>

          <div className="mt-[26px]">
            <div className="text-xs uppercase tracking-[0.08em] text-white/35 mb-3.5">Lead Engineer on</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-[520px]">
              {founder.ledProjects.map((name) => (
                <div key={name} className="flex items-center gap-[11px] bg-[#0e1710] border border-white/[0.07] rounded-xl px-4 py-3">
                  <span className="w-[7px] h-[7px] rounded-full bg-accent flex-none" />
                  <span className="text-[14.5px] font-semibold">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-[30px]">
            <CalendlyButton className="bg-accent text-[#07110c] text-sm font-semibold px-[26px] py-3 rounded-[11px] hover:opacity-90 transition-opacity cursor-pointer">
              Work with me
            </CalendlyButton>
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 text-sm font-semibold inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              LinkedIn <span className="text-[15px]">&rarr;</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
