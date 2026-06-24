"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { CONTAINER, TAG } from "@/lib/ui";
import { uiDesigns, type UiDesign } from "@/lib/data";
import { Shot } from "@/components/Shot";
import { Eyebrow } from "@/components/Eyebrow";
import { HGallery, GalleryCard } from "@/components/gallery/HGallery";

/** Inner content of a UI-design card — shared by the desktop gallery + mobile stack. */
function DesignBody({ u, compact = false }: { u: UiDesign; compact?: boolean }) {
  return (
    <div className="p-[18px] sm:p-[26px] flex flex-col h-full">
      <div className="flex items-baseline justify-between flex-wrap gap-3 mb-5">
        <div>
          <span className="text-xl font-bold tracking-[-0.02em]">{u.brand}</span>
          <span className="text-[14.5px] text-white/50 ml-3">{u.caption}</span>
        </div>
        <div className="flex gap-2">
          {u.tags.map((t) => (
            <span key={t} className={TAG}>{t}</span>
          ))}
        </div>
      </div>
      <Shot
        src={u.src}
        placeholder={u.placeholder}
        fit="contain"
        light
        className={
          compact
            ? "w-full min-h-[280px] rounded-[14px]"
            : "w-full flex-1 min-h-[340px] md:min-h-[480px] rounded-[14px]"
        }
      />
    </div>
  );
}

/** One card in the mobile stack — sticks under the previous one and scales back as it's covered. */
function StackCard({
  u,
  i,
  total,
  progress,
}: {
  u: UiDesign;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - i) * 0.04;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  return (
    <div className="sticky pb-6" style={{ top: `${64 + i * 12}px` }}>
      <motion.div
        style={{ scale, transformOrigin: "top center" }}
        className="bg-[#211f1d] border border-white/[0.07] rounded-3xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.4)]"
      >
        <DesignBody u={u} compact />
      </motion.div>
    </div>
  );
}

/** Mobile-only sticky stacked-card layout. */
function StackedDesigns() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });
  return (
    <div className="md:hidden py-[70px]">
      <div className={`${CONTAINER} mb-9`}>
        <Eyebrow>UI Designs</Eyebrow>
        <h2 className="text-[34px] tracking-[-0.04em] font-semibold mt-[22px]">
          Interface &amp; <span className="text-accent">visual design</span>
        </h2>
      </div>
      <div ref={stackRef} className={CONTAINER}>
        {uiDesigns.map((u, i) => (
          <StackCard key={u.id} u={u} i={i} total={uiDesigns.length} progress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}

export function UiDesigns() {
  return (
    <section>
      {/* Tablet / desktop: pinned horizontal gallery */}
      <div className="hidden md:block">
        <HGallery
          eyebrow="UI Designs"
          title={
            <>
              Interface &amp; <span className="text-accent">visual design</span>
            </>
          }
          widths={uiDesigns.map((u) => u.width)}
          cards={({ x, vw, enabled, offsets }) =>
            uiDesigns.map((u, i) => (
              <GalleryCard key={u.id} x={x} vw={vw} enabled={enabled} offset={offsets[i]} widthClass={u.widthClass}>
                <DesignBody u={u} />
              </GalleryCard>
            ))
          }
        />
      </div>

      {/* Mobile: sticky stacked cards */}
      <StackedDesigns />
    </section>
  );
}
