"use client";

import { TAG } from "@/lib/ui";
import { uiDesigns } from "@/lib/data";
import { Shot } from "@/components/Shot";
import { HGallery, GalleryCard } from "@/components/gallery/HGallery";

export function UiDesigns() {
  return (
    <HGallery
      eyebrow="UI Designs"
      title={
        <>
          Interface &amp; <span className="text-white/40">visual design</span>
        </>
      }
      widths={uiDesigns.map((u) => u.width)}
      cards={({ x, vw, enabled, offsets }) =>
        uiDesigns.map((u, i) => (
          <GalleryCard key={u.id} x={x} vw={vw} enabled={enabled} offset={offsets[i]} widthClass={u.widthClass}>
            <div className="p-[26px] flex flex-col h-full">
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
              <Shot src={u.src} placeholder={u.placeholder} fit="contain" light className="w-full flex-1 min-h-[340px] md:min-h-[480px] rounded-[14px]" />
            </div>
          </GalleryCard>
        ))
      }
    />
  );
}
