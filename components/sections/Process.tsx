"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { CONTAINER } from "@/lib/ui";
import { steps } from "@/lib/data";
import { Eyebrow } from "@/components/Eyebrow";

// total points on the timeline = every step + the final "Go-Live" card
const TOTAL = steps.length + 1;

/** A timeline dot that fills with accent + glows as scroll reaches its point. */
function Dot({ progress, point, big }: { progress: MotionValue<number>; point: number; big?: boolean }) {
  const range = [point - 0.05, point];
  const background = useTransform(progress, range, ["#211f1d", "#16b57f"]);
  const scale = useTransform(progress, range, [0.7, 1]);
  const boxShadow = useTransform(progress, range, [
    "0 0 0 4px rgba(22,181,127,0.04), 0 0 0px rgba(22,181,127,0)",
    big
      ? "0 0 0 6px rgba(22,181,127,0.16), 0 0 30px rgba(22,181,127,0.7)"
      : "0 0 0 5px rgba(22,181,127,0.14), 0 0 22px rgba(22,181,127,0.55)",
  ]);
  return (
    <motion.span
      style={{ background, scale, boxShadow }}
      className={`${big ? "w-[17px] h-[17px]" : "w-[15px] h-[15px]"} rounded-full border-2 border-accent relative z-[1]`}
    />
  );
}

/** A step row whose text brightens + settles as scroll reaches its point. */
function StepRow({
  progress,
  index,
  no,
  phase,
  title,
  desc,
}: {
  progress: MotionValue<number>;
  index: number;
  no: string;
  phase: string;
  title: string;
  desc: string;
}) {
  const point = (index + 0.6) / TOTAL;
  const opacity = useTransform(progress, [point - 0.08, point], [0.4, 1]);
  const x = useTransform(progress, [point - 0.08, point], [12, 0]);
  return (
    <motion.div style={{ opacity, x }} className="flex gap-[30px] pb-9 relative">
      <div className="flex-none w-11 flex justify-center pt-[5px]">
        <Dot progress={progress} point={point} />
      </div>
      <div>
        <div className="text-xs font-bold tracking-[0.1em] uppercase">
          <span className="text-accent">Phase {no}</span>
          <span className="text-white/[0.38] ml-2.5">{phase}</span>
        </div>
        <h3 className="text-2xl font-semibold tracking-[-0.025em] mt-[11px]">{title}</h3>
        <p className="text-[15px] leading-[1.55] text-white/50 mt-2 max-w-[520px]">{desc}</p>
      </div>
    </motion.div>
  );
}

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  // progress 0 → 1 as the timeline travels through the viewport
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 85%", "end 55%"],
  });

  const finalPoint = (steps.length + 0.6) / TOTAL;
  const finalOpacity = useTransform(scrollYProgress, [finalPoint - 0.08, finalPoint], [0.4, 1]);
  const finalX = useTransform(scrollYProgress, [finalPoint - 0.08, finalPoint], [12, 0]);

  return (
    <section id="process" className={`${CONTAINER} pt-[70px] md:pt-[90px] pb-[70px] grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-20 items-start`}>
      <div className="lg:sticky lg:top-24">
        <Eyebrow>Process</Eyebrow>
        <h2 className="text-[36px] md:text-[46px] leading-[1.08] tracking-[-0.04em] font-semibold mt-6">
          How We
          <br />
          <span className="text-accent">Deliver</span>
        </h2>
        <p className="text-base leading-[1.6] text-white/[0.52] mt-[22px] max-w-[340px]">
          From first call to launch — a clear, repeatable path. You always know what&apos;s shipping and what&apos;s next.
        </p>
        <div className="flex items-center gap-3.5 mt-[30px]">
          <span className="text-[40px] font-semibold tracking-[-0.04em] leading-none">~10</span>
          <span className="text-sm leading-[1.4] text-white/50">
            weeks, typical
            <br />
            concept to go-live
          </span>
        </div>
        <a href="#contact" className="inline-block mt-[34px] bg-[#f4f4f3] text-[#1b1a18] text-sm font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
          Start a project
        </a>
      </div>

      <div ref={trackRef} className="relative">
        {/* dim base rail */}
        <div className="absolute left-[21px] top-2.5 bottom-16 w-0.5 rounded-sm bg-white/[0.07]" />
        {/* accent fill that grows with scroll */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[21px] top-2.5 bottom-16 w-0.5 origin-top rounded-sm bg-[linear-gradient(180deg,color-mix(in_srgb,var(--accent)_85%,transparent),color-mix(in_srgb,var(--accent)_35%,transparent))]"
        />

        {steps.map((st, i) => (
          <StepRow
            key={st.no}
            progress={scrollYProgress}
            index={i}
            no={st.no}
            phase={st.phase}
            title={st.title}
            desc={st.desc}
          />
        ))}

        <motion.div style={{ opacity: finalOpacity, x: finalX }} className="flex gap-[30px] relative">
          <div className="flex-none w-11 flex justify-center pt-[5px]">
            <Dot progress={scrollYProgress} point={finalPoint} big />
          </div>
          <div className="bg-[#211f1d] border border-white/[0.08] rounded-[18px] px-[26px] py-[22px] flex-1">
            <div className="text-xs font-bold tracking-[0.1em] uppercase">
              <span className="text-accent">Phase 10</span>
              <span className="text-white/[0.38] ml-2.5">Launch</span>
            </div>
            <h3 className="text-[26px] font-semibold tracking-[-0.03em] mt-[11px]">
              Go-Live <span className="italic text-accent">&amp; iterate</span>
            </h3>
            <p className="text-[14.5px] leading-[1.55] text-white/50 mt-2 max-w-[520px]">
              Ship to production, monitor in the wild, and keep improving with you — long after launch day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
