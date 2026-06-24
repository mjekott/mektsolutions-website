"use client";

import { CalendlyButton } from "@/components/CalendlyButton";
import { heroWords } from "@/lib/data";
import { heroContainer, heroItem } from "@/lib/motion";
import { AnimatePresence, motion } from "motion/react";
import { Fragment, useEffect, useState } from "react";

const heroStats = [
  { v: "50", s: "+", label: "products shipped" },
  { v: "7", s: "+", label: "industries served" },
  { v: "3", s: "", label: "countries" },
];

/** Cycles through heroWords with a fade/slide swap. */
function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % heroWords.length), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block align-bottom text-accent">
      <AnimatePresence mode="wait">
        <motion.span
          key={heroWords[i]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="inline-block"
        >
          {heroWords[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <motion.header
      variants={heroContainer}
      initial="hidden"
      animate="show"
      className="relative w-full max-w-[1180px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-20 md:pb-24 flex flex-col items-center text-center"
    >
      {/* centered ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[980px] max-w-[90vw] h-[620px] z-0 blur-[8px] bg-[radial-gradient(60%_70%_at_50%_30%,color-mix(in_srgb,var(--accent)_20%,transparent),transparent_64%)]"
      />

      <motion.div
        variants={heroItem}
        className="relative z-[1] inline-flex items-center gap-2.5 bg-[#262423] border border-white/[0.09] rounded-full pl-1.5 pr-3.5 py-1.5 text-[13px] font-medium"
      >
        <span className="bg-accent text-[#1b1a18] font-bold text-[11px] tracking-[0.04em] px-[9px] py-[3px] rounded-full">
          BEST
        </span>
        <span className="text-white/[0.78]">
          Product Design &amp; Engineering Agency
        </span>
      </motion.div>

      <motion.h1
        variants={heroItem}
        className="relative z-[1] text-[46px] sm:text-[68px] lg:text-[88px] xl:text-[104px] leading-[0.94] tracking-[-0.052em] font-bold mt-[30px] max-w-[1000px]"
      >
        Products that move <RotatingWord />
      </motion.h1>

      <motion.p
        variants={heroItem}
        className="relative z-[1] text-[17px] md:text-[19px] leading-[1.55] text-white/[0.58] max-w-[580px] mt-[30px]"
      >
        We partner with founders and teams across Africa to design, build, and
        ship digital products people actually use.
      </motion.p>

      <motion.div
        variants={heroItem}
        className="relative z-[1] flex flex-wrap justify-center items-center gap-[18px] mt-10"
      >
        <CalendlyButton className="bg-accent text-[#1b1a18] text-[15px] font-semibold px-8 py-[15px] rounded-xl hover:opacity-90 transition-opacity cursor-pointer">
          Book a call
        </CalendlyButton>
        <a
          href="#works"
          className="text-white/70 text-[15px] font-semibold inline-flex items-center gap-2 hover:text-white transition-colors"
        >
          View Projects <span className="text-base">&rarr;</span>
        </a>
      </motion.div>

      {/* stat-bar pill */}
      <motion.div
        variants={heroItem}
        className="relative z-[1] flex items-stretch mt-12 md:mt-16 border border-white/[0.08] rounded-[18px] bg-[rgba(33,31,29,0.55)] backdrop-blur-[6px] overflow-hidden"
      >
        {heroStats.map((st, i) => (
          <Fragment key={st.label}>
            {i > 0 && <span className="w-px bg-white/[0.09]" aria-hidden />}
            <div className="px-6 sm:px-10 py-5 sm:py-6">
              <div className="text-[32px] sm:text-[38px] font-bold tracking-[-0.035em] leading-none">
                {st.v}
                <span className="text-accent">{st.s}</span>
              </div>
              <div className="text-[13px] text-white/50 mt-[7px]">{st.label}</div>
            </div>
          </Fragment>
        ))}
      </motion.div>
    </motion.header>
  );
}
