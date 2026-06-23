"use client";

import { CalendlyButton } from "@/components/CalendlyButton";
import { heroWords } from "@/lib/data";
import { heroContainer, heroItem } from "@/lib/motion";
import { CONTAINER } from "@/lib/ui";
import { AnimatePresence, motion } from "motion/react";
import { Fragment, useEffect, useState } from "react";

const heroStats = [
  { v: "15", s: "+", label: "products shipped" },
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

const shimmer =
  "border-radius:6px;background:linear-gradient(90deg,#1f1e1c 25%,#2b2927 50%,#1f1e1c 75%);background-size:300px 100%;animation:meShimmer 1.3s linear infinite";
const slot =
  "flex:1;text-align:center;font-size:9px;font-weight:600;color:rgba(255,255,255,0.55);background:#211f1d;border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:8px 0";

/* Self-contained animated illustration: a Bonivo dashboard that "loads",
   plus a RockBalm phone running through a booking → success flow. */
const HERO_ART = `
<div style="position:absolute;top:22px;right:-26px;width:540px;border-radius:16px;overflow:hidden;background:#0f0f0e;border:1px solid rgba(255,255,255,0.1);box-shadow:0 50px 100px -35px rgba(0,0,0,0.75);animation:meFloatA 9s ease-in-out infinite">
  <div style="display:flex;align-items:center;gap:7px;padding:11px 14px;background:#1b1a18;border-bottom:1px solid rgba(255,255,255,0.06)">
    <span style="width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,0.16)"></span>
    <span style="width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,0.16)"></span>
    <span style="width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,0.16)"></span>
    <span style="margin-left:9px;font-size:11px;color:rgba(255,255,255,0.4)">bonivo.app</span>
  </div>
  <div style="display:flex;height:330px">
    <div style="width:128px;background:#141413;border-right:1px solid rgba(255,255,255,0.05);padding:15px 13px;display:flex;flex-direction:column;gap:2px">
      <div style="font-weight:700;font-size:15px;letter-spacing:-0.03em;margin-bottom:14px;color:#f4f4f3">Bonivo</div>
      <div style="display:flex;align-items:center;gap:8px;font-size:11px;font-weight:600;color:#0f0f0e;background:var(--accent);border-radius:8px;padding:8px 10px">Overview</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.5);padding:8px 10px">Invoice</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.5);padding:8px 10px">Contracts</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.5);padding:8px 10px">Projects</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.5);padding:8px 10px">Clients</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.5);padding:8px 10px">Financials</div>
      <div style="margin-top:auto;font-size:11px;color:rgba(255,255,255,0.5);padding:8px 10px">Profile</div>
    </div>
    <div style="flex:1;position:relative;overflow:hidden;color:#f4f4f3">
      <div style="position:absolute;inset:0;padding:17px 19px;animation:meReveal 11s ease-in-out infinite">
        <div style="font-size:10px;color:rgba(255,255,255,0.4)">Wednesday, December 7th</div>
        <div style="font-size:18px;font-weight:700;letter-spacing:-0.03em;margin-top:3px">Good Morning, Eloho!</div>
        <div style="display:flex;gap:11px;margin-top:15px">
          <div style="flex:1;background:#1b1a18;border:1px solid rgba(255,255,255,0.07);border-radius:11px;padding:12px 14px"><div style="font-size:9.5px;color:rgba(255,255,255,0.4)">Total Invoices</div><div style="display:flex;align-items:baseline;gap:6px;margin-top:4px"><span style="font-size:22px;font-weight:700;letter-spacing:-0.03em">25</span><span style="font-size:9px;color:var(--accent);font-weight:600">+5 this week</span></div></div>
          <div style="flex:1;background:#1b1a18;border:1px solid rgba(255,255,255,0.07);border-radius:11px;padding:12px 14px"><div style="font-size:9.5px;color:rgba(255,255,255,0.4)">Total Contracts</div><div style="display:flex;align-items:baseline;gap:6px;margin-top:4px"><span style="font-size:22px;font-weight:700;letter-spacing:-0.03em">45</span><span style="font-size:9px;color:var(--accent);font-weight:600">+5 this week</span></div></div>
        </div>
        <div style="background:#1b1a18;border:1px solid rgba(255,255,255,0.07);border-radius:11px;padding:13px 14px;margin-top:11px">
          <div style="display:flex;align-items:center;justify-content:space-between"><div style="font-size:11px;font-weight:600">Earned in 30 days</div><div style="font-size:10px;color:var(--accent);font-weight:700">$7,341</div></div>
          <svg viewBox="0 0 320 96" preserveAspectRatio="none" style="width:100%;height:84px;margin-top:8px;overflow:visible">
            <defs><linearGradient id="meArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--accent)" stop-opacity="0.32"></stop><stop offset="100%" stop-color="var(--accent)" stop-opacity="0"></stop></linearGradient></defs>
            <path d="M0,70 C40,66 60,40 90,44 C120,48 130,72 165,58 C200,44 205,18 245,26 C280,33 295,52 320,30 L320,96 L0,96 Z" fill="url(#meArea)" style="opacity:0;animation:meAreaIn 11s ease-in-out infinite"></path>
            <path d="M0,70 C40,66 60,40 90,44 C120,48 130,72 165,58 C200,44 205,18 245,26 C280,33 295,52 320,30" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" style="stroke-dasharray:560;stroke-dashoffset:560;animation:meDraw 11s ease-in-out infinite"></path>
          </svg>
        </div>
      </div>
      <div style="position:absolute;inset:0;padding:17px 19px;background:#0f0f0e;animation:meSkel 11s ease-in-out infinite">
        <div style="height:10px;width:40%;${shimmer}"></div>
        <div style="height:16px;width:62%;margin-top:8px;${shimmer}"></div>
        <div style="display:flex;gap:11px;margin-top:16px"><div style="flex:1;height:56px;${shimmer}"></div><div style="flex:1;height:56px;${shimmer}"></div></div>
        <div style="height:118px;margin-top:11px;${shimmer}"></div>
      </div>
    </div>
  </div>
</div>

<div style="position:absolute;bottom:0;right:-10px;width:168px;height:346px;border-radius:28px;overflow:hidden;background:#0f0f0e;border:5px solid #32302d;box-shadow:0 36px 70px -22px rgba(0,0,0,0.85);z-index:3;animation:meFloatC 8s ease-in-out infinite">
  <div style="position:relative;width:100%;height:100%;background:linear-gradient(180deg,#1b1a18,#141413);color:#f4f4f3;overflow:hidden">
    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 15px 0;font-size:8px;color:rgba(255,255,255,0.55);font-weight:600"><span>9:41</span><span style="letter-spacing:1px">RockBalm</span></div>
    <div style="position:absolute;inset:0;padding:26px 14px 14px;animation:meBookA 10s ease-in-out infinite">
      <div style="display:flex;align-items:center;gap:9px">
        <div style="width:34px;height:34px;border-radius:50%;background:color-mix(in srgb,var(--accent) 24%,transparent);display:flex;align-items:center;justify-content:center;color:var(--accent);font-size:13px;font-weight:700">AB</div>
        <div><div style="font-size:11px;font-weight:700">Dr. Aisha Bello</div><div style="font-size:8px;color:rgba(255,255,255,0.45);margin-top:2px">Cardiologist · ★ 4.9</div></div>
      </div>
      <div style="font-size:9px;color:rgba(255,255,255,0.45);margin-top:16px">Select a time · Wed 14</div>
      <div style="display:flex;gap:7px;margin-top:9px">
        <div style="${slot}">9:00</div>
        <div style="flex:1;text-align:center;font-size:9px;font-weight:700;color:var(--accent);background:color-mix(in srgb,var(--accent) 15%,transparent);border:1.5px solid var(--accent);border-radius:8px;padding:8px 0;animation:mePulse 1.8s ease-in-out infinite">11:30</div>
        <div style="${slot}">14:00</div>
      </div>
      <div style="display:flex;gap:7px;margin-top:7px">
        <div style="${slot}">15:30</div>
        <div style="${slot}">17:00</div>
        <div style="flex:1;text-align:center;font-size:9px;font-weight:600;color:rgba(255,255,255,0.3);background:#1b1a18;border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:8px 0">—</div>
      </div>
      <div style="margin-top:14px;background:var(--accent);color:#0f0f0e;text-align:center;font-weight:700;font-size:10px;padding:11px;border-radius:10px;animation:meTapB 10s ease-in-out infinite">Confirm booking</div>
    </div>
    <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:11px;opacity:0;animation:meBookB 10s ease-in-out infinite">
      <div style="width:46px;height:46px;border-radius:50%;background:color-mix(in srgb,var(--accent) 18%,transparent);border:1.5px solid var(--accent);display:flex;align-items:center;justify-content:center">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" style="stroke-dasharray:24;stroke-dashoffset:24;animation:meCheckB 10s ease-in-out infinite"></polyline></svg>
      </div>
      <div style="font-size:12px;font-weight:700">Booked!</div>
      <div style="font-size:8px;color:rgba(255,255,255,0.45);text-align:center;line-height:1.5">Wed 14 · 11:30<br>with Dr. Aisha Bello</div>
    </div>
  </div>
</div>
`;

export function Hero() {
  return (
    <motion.header
      variants={heroContainer}
      initial="hidden"
      animate="show"
      className={`relative ${CONTAINER} pt-15 md:pt-37.5 pb-20 md:pb-24 grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center`}
    >
      {/* ---- left: copy ---- */}
      <div className="relative z-[1] max-w-150">
        <motion.div
          variants={heroItem}
          className="inline-flex items-center gap-2.5 bg-[#262423] border border-white/[0.09] rounded-full pl-1.5 pr-3.5 py-1.5 text-[13px] font-medium"
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
          className="text-[42px] sm:text-[54px] lg:text-[66px] leading-[1.02] tracking-[-0.045em] font-semibold mt-7"
        >
          Products that move <RotatingWord />
        </motion.h1>
        <motion.p
          variants={heroItem}
          className="text-[17px] md:text-[18px] leading-[1.55] text-white/55 max-w-[500px] mt-[26px]"
        >
          We partner with founders and teams across Africa to design, build, and
          ship digital products people actually use.
        </motion.p>
        <motion.div
          variants={heroItem}
          className="flex flex-wrap items-center gap-[18px] mt-9"
        >
          <CalendlyButton className="bg-accent text-[#1b1a18] text-[15px] font-semibold px-[30px] py-3.5 rounded-xl hover:opacity-90 transition-opacity cursor-pointer">
            Book a call
          </CalendlyButton>
          <a
            href="#works"
            className="text-white/70 text-[15px] font-semibold inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            View Projects <span className="text-base">&rarr;</span>
          </a>
        </motion.div>
        <motion.div
          variants={heroItem}
          className="flex items-center gap-[34px] mt-11"
        >
          {heroStats.map((st, i) => (
            <Fragment key={st.label}>
              {i > 0 && <span className="w-px h-10 bg-white/10" aria-hidden />}
              <div>
                <div className="text-[32px] font-semibold tracking-[-0.03em] leading-none">
                  {st.v}
                  <span className="text-accent">{st.s}</span>
                </div>
                <div className="text-[13px] text-white/45 mt-1.5">
                  {st.label}
                </div>
              </div>
            </Fragment>
          ))}
        </motion.div>
      </div>

      {/* ---- right: animated dashboard + phone illustration (desktop only) ---- */}
      <motion.div
        variants={heroItem}
        aria-hidden
        className="relative z-[1] h-[560px] hidden lg:block"
        dangerouslySetInnerHTML={{ __html: HERO_ART }}
      />
    </motion.header>
  );
}
