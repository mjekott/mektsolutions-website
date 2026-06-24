"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { CONTAINER, TAG } from "@/lib/ui";
import { projects, type Project } from "@/lib/data";
import { Shot } from "@/components/Shot";
import { Eyebrow } from "@/components/Eyebrow";
import { HGallery, GalleryCard } from "@/components/gallery/HGallery";

/**
 * Inner content of a project card — shared by the desktop gallery + mobile stack.
 * `compact` trims the body (no bullets, clamped overview) so a stacked mobile card
 * fits within the viewport and can be read fully before the next card covers it.
 */
function ProjectBody({ p, compact = false }: { p: Project; compact?: boolean }) {
  return (
    <div className="h-full p-[18px] sm:p-[22px] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 items-center">
      <Shot src={p.src} placeholder={p.shot} fit="cover" className="w-full aspect-[16/10] rounded-2xl" />
      <div className="py-1 md:py-3.5 md:pl-1.5 flex flex-col">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-[-0.02em]">{p.brand}</span>
          <span className="text-xs text-white/40 border border-white/10 rounded-full px-2.5 py-[3px]">{p.year}</span>
        </div>
        <h3 className="text-[22px] md:text-[25px] leading-[1.18] tracking-[-0.025em] font-semibold mt-3.5">{p.headline}</h3>
        <p className={`text-[14.5px] leading-[1.55] text-white/50 mt-3.5 ${compact ? "line-clamp-2" : ""}`}>{p.overview}</p>
        <div className="flex items-baseline gap-3 mt-[18px] px-4 py-3.5 bg-[#252322] border border-white/[0.07] rounded-[14px]">
          <span className="text-[30px] font-bold tracking-[-0.04em] text-accent leading-none">{p.metric}</span>
          <span className="text-[13px] leading-[1.35] text-white/55">{p.metricLabel}</span>
        </div>
        {!compact && (
          <div className="flex flex-col gap-[11px] mt-5">
            {p.bullets.map((b, bi) => (
              <div key={bi} className="flex items-start gap-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[7px] flex-none" />
                <span className="text-sm leading-[1.45] text-white/[0.66]">{b}</span>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-auto pt-[18px] md:pt-[22px]">
          {p.tags.map((t) => (
            <span key={t} className={TAG}>{t}</span>
          ))}
        </div>
        <a
          href={p.url ?? "#contact"}
          {...(p.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-[18px] md:mt-[22px] self-start inline-flex items-center gap-2 bg-[#2b2927] border border-white/[0.12] text-[#f4f4f3] text-[13.5px] font-semibold px-[22px] py-[11px] rounded-[10px] hover:bg-[#2b2927] transition-colors"
        >
          View Project
          <span aria-hidden className="text-[15px] -mt-px">&#8599;</span>
        </a>
      </div>
    </div>
  );
}

/** One card in the mobile stack — sticks under the previous one and scales back as it's covered. */
function StackCard({
  p,
  i,
  total,
  progress,
}: {
  p: Project;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Earlier cards settle to a smaller scale so the covered stack reads as depth.
  const targetScale = 1 - (total - 1 - i) * 0.04;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  return (
    <div className="sticky pb-6" style={{ top: `${64 + i * 12}px` }}>
      <motion.div
        style={{ scale, transformOrigin: "top center" }}
        className="bg-[#211f1d] border border-white/[0.07] rounded-3xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.4)]"
      >
        <ProjectBody p={p} compact />
      </motion.div>
    </div>
  );
}

/** Mobile-only sticky stacked-card layout. */
function StackedWorks() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });
  return (
    <div className="md:hidden py-[70px]">
      <div className={`${CONTAINER} mb-9`}>
        <Eyebrow>Projects</Eyebrow>
        <h2 className="text-[34px] tracking-[-0.04em] font-semibold mt-[22px]">Selected Works</h2>
      </div>
      <div ref={stackRef} className={CONTAINER}>
        {projects.map((p, i) => (
          <StackCard key={p.slotId} p={p} i={i} total={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}

export function SelectedWorks() {
  return (
    <section id="works">
      {/* Tablet / desktop: pinned horizontal gallery */}
      <div className="hidden md:block">
        <HGallery
          eyebrow="Projects"
          title="Selected Works"
          stretch
          widths={projects.map(() => 760)}
          cards={({ x, vw, enabled, offsets }) =>
            projects.map((p, i) => (
              <GalleryCard key={p.slotId} x={x} vw={vw} enabled={enabled} dim={false} offset={offsets[i]} widthClass="w-full">
                <ProjectBody p={p} />
              </GalleryCard>
            ))
          }
        />
      </div>

      {/* Mobile: sticky stacked cards */}
      <StackedWorks />
    </section>
  );
}
