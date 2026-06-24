"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";
import { CONTAINER } from "@/lib/ui";
import { revealContainer, revealItem, viewport } from "@/lib/motion";
import { services, type ServiceIcon } from "@/lib/data";

/** Inner paths for each service icon, drawn on a shared 24×24 stroke grid. */
const ICONS: Record<ServiceIcon, ReactNode> = {
  design: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <line x1="4" y1="10" x2="20" y2="10" />
      <line x1="10" y1="10" x2="10" y2="19" />
    </>
  ),
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="8.5" x2="21" y2="8.5" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <line x1="10.5" y1="18" x2="13.5" y2="18" />
    </>
  ),
  backend: (
    <>
      <rect x="4" y="4" width="16" height="7" rx="2" />
      <rect x="4" y="13" width="16" height="7" rx="2" />
      <circle cx="8" cy="7.5" r="0.9" />
      <circle cx="8" cy="16.5" r="0.9" />
    </>
  ),
  fintech: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <line x1="3" y1="10.5" x2="21" y2="10.5" />
      <line x1="6.5" y1="15" x2="11" y2="15" />
    </>
  ),
  strategy: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
};

export function Services() {
  return (
    <section id="services" className="relative pt-[104px] pb-24 border-t border-white/[0.06]">
      {/* centered top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[760px] max-w-[80vw] h-[520px] z-0 blur-[8px] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_srgb,var(--accent)_15%,transparent),transparent_62%)]"
      />
      <div className={`relative z-[1] ${CONTAINER}`}>
        <div className="text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#262423] border border-white/[0.09] rounded-full px-4 py-[7px] text-[13px] font-medium text-white/70">
            <span className="w-[5px] h-[5px] rounded-full bg-accent inline-block shrink-0" />
            Services
          </div>
          <h2 className="text-[34px] md:text-[44px] leading-[1.1] tracking-[-0.04em] font-semibold mt-[22px]">
            Full-stack capability,
            <br />
            <span className="text-accent">one delivery team</span>
          </h2>
          <p className="text-base text-white/[0.52] mt-[18px] max-w-[560px]">
            From research and design to payments infrastructure and production ops — covered end-to-end by one senior, in-house team.
          </p>
        </div>

        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-[54px]"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={revealItem}>
              <div
                style={{ "--c": s.color } as CSSProperties}
                className="group h-full bg-[#1d1c1a] border border-white/[0.07] rounded-[20px] p-[30px] md:px-[30px] md:py-[34px] transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--c)_55%,transparent)]"
              >
                <div className="w-[54px] h-[54px] rounded-[14px] flex items-center justify-center text-[var(--c)] bg-[color-mix(in_srgb,var(--c)_14%,transparent)] border border-[color-mix(in_srgb,var(--c)_32%,transparent)]">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {ICONS[s.icon]}
                  </svg>
                </div>
                <h3 className="text-[21px] font-semibold tracking-[-0.02em] mt-[22px]">{s.title}</h3>
                <p className="text-[14.5px] leading-[1.55] text-white/[0.52] mt-3">{s.desc}</p>
                <ul className="flex flex-col gap-3 mt-6 pt-[22px] border-t border-white/[0.06]">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent flex-none mt-0.5"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <polyline points="8.4 12.3 11 14.7 15.7 9.6" />
                      </svg>
                      <span className="text-sm leading-[1.4] text-white/[0.62]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
