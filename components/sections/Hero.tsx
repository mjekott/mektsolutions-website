"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import { CONTAINER } from "@/lib/ui";
import { heroContainer, heroItem } from "@/lib/motion";
import { Shot } from "@/components/Shot";
import { CalendlyButton } from "@/components/CalendlyButton";

const heroStats = [
  { v: "15", s: "+", label: "products shipped" },
  { v: "7", s: "+", label: "industries served" },
  { v: "3", s: "", label: "countries" },
];

/** Slow float loop for a hero card; keeps a fixed rotation while bobbing. */
function float(rotate: number, dy: number, duration: number) {
  return {
    animate: { rotate, y: [0, dy, 0] },
    transition: { duration, repeat: Infinity, ease: "easeInOut" as const },
  };
}

export function Hero() {
  return (
    <motion.header
      variants={heroContainer}
      initial="hidden"
      animate="show"
      className={`relative ${CONTAINER} pt-[140px] md:pt-[150px] pb-[80px] md:pb-24 grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center`}
    >
      {/* ---- left: copy ---- */}
      <div className="relative z-[1] max-w-[600px]">
        <motion.div variants={heroItem} className="inline-flex items-center gap-2.5 bg-[#121e17] border border-white/[0.09] rounded-full pl-1.5 pr-3.5 py-1.5 text-[13px] font-medium">
          <span className="bg-accent text-[#07110c] font-bold text-[11px] tracking-[0.04em] px-[9px] py-[3px] rounded-full">BEST</span>
          <span className="text-white/[0.78]">Product Design &amp; Engineering Agency</span>
        </motion.div>
        <motion.h1 variants={heroItem} className="text-[42px] sm:text-[54px] lg:text-[66px] leading-[1.02] tracking-[-0.045em] font-semibold mt-7">
          Products that move money, people, and businesses
        </motion.h1>
        <motion.p variants={heroItem} className="text-[17px] md:text-[18px] leading-[1.55] text-white/55 max-w-[500px] mt-[26px]">
          We partner with founders and teams across Africa to design, build, and ship digital products people actually use.
        </motion.p>
        <motion.div variants={heroItem} className="flex flex-wrap items-center gap-[18px] mt-9">
          <CalendlyButton className="bg-accent text-[#07110c] text-[15px] font-semibold px-[30px] py-3.5 rounded-xl hover:opacity-90 transition-opacity cursor-pointer">
            Book a call
          </CalendlyButton>
          <a href="#works" className="text-white/70 text-[15px] font-semibold inline-flex items-center gap-2 hover:text-white transition-colors">
            View Projects <span className="text-base">&rarr;</span>
          </a>
        </motion.div>
        <motion.div variants={heroItem} className="flex items-center gap-[34px] mt-11">
          {heroStats.map((st, i) => (
            <Fragment key={st.label}>
              {i > 0 && <span className="w-px h-10 bg-white/10" aria-hidden />}
              <div>
                <div className="text-[32px] font-semibold tracking-[-0.03em] leading-none">
                  {st.v}
                  <span className="text-accent">{st.s}</span>
                </div>
                <div className="text-[13px] text-white/45 mt-1.5">{st.label}</div>
              </div>
            </Fragment>
          ))}
        </motion.div>
      </div>

      {/* ---- right: floating screenshot cluster (desktop only) ---- */}
      <motion.div variants={heroItem} className="relative z-[1] h-[540px] hidden lg:block">
        {/* back dashboard card */}
        <motion.div
          {...float(3, -14, 9)}
          className="absolute top-[18px] right-0 w-[430px] rounded-[18px] overflow-hidden bg-[#0c150f] border border-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.7)]"
        >
          <div className="flex items-center gap-1.5 px-3.5 py-[11px] bg-[#0e1710] border-b border-white/[0.07]">
            <span className="w-[9px] h-[9px] rounded-full bg-white/[0.18]" />
            <span className="w-[9px] h-[9px] rounded-full bg-white/[0.18]" />
            <span className="w-[9px] h-[9px] rounded-full bg-white/[0.18]" />
            <span className="ml-2 text-[11px] text-white/40">bonivo.app</span>
          </div>
          <Shot src="/shots/bonivo.webp" placeholder="dashboard" fit="cover" light className="w-full h-[264px]" imgClassName="object-top" />
        </motion.div>

        {/* front payments card */}
        <motion.div
          {...float(-4, -10, 11)}
          className="absolute bottom-1.5 left-0 w-[340px] rounded-[16px] overflow-hidden bg-[#0c150f] border border-white/[0.12] shadow-[0_40px_80px_-28px_rgba(0,0,0,0.75)]"
        >
          <Shot src="/shots/tranzypay.webp" placeholder="payments" fit="cover" className="w-full h-[220px]" imgClassName="object-top" />
          <div className="px-[15px] py-[13px] flex items-center justify-between">
            <div>
              <div className="text-[13px] font-bold tracking-[-0.02em]">TranzyPay</div>
              <div className="text-[11px] text-white/45 mt-0.5">Global payments</div>
            </div>
            <span className="text-[10.5px] font-semibold text-accent rounded-full px-2.5 py-1 bg-[color-mix(in_srgb,var(--accent)_14%,transparent)]">Live</span>
          </div>
        </motion.div>

        {/* floating phone */}
        <motion.div
          {...float(6, -18, 8)}
          className="absolute top-[54px] right-[46px] w-32 h-[268px] rounded-[24px] overflow-hidden bg-[#07110c] border-[5px] border-[#1a241d] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] z-[2]"
        >
          <Shot src="/shots/rockbalm.webp" placeholder="app" fit="cover" className="w-full h-full" imgClassName="object-top" />
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
