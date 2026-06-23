"use client";

import { TAG } from "@/lib/ui";
import { projects } from "@/lib/data";
import { Shot } from "@/components/Shot";
import { HGallery, GalleryCard } from "@/components/gallery/HGallery";

export function SelectedWorks() {
  return (
    <HGallery
      id="works"
      eyebrow="Projects"
      title="Selected Works"
      widths={projects.map(() => 760)}
      cards={({ x, vw, enabled, offsets }) =>
        projects.map((p, i) => (
          <GalleryCard key={p.slotId} x={x} vw={vw} enabled={enabled} dim={false} offset={offsets[i]} widthClass="w-full">
            <div className="p-[22px] grid grid-cols-1 md:grid-cols-2 gap-7 h-full">
              <Shot src={p.src} placeholder={p.shot} fit="cover" className="w-full h-full min-h-[240px] md:min-h-[440px] rounded-2xl" />
              <div className="py-3.5 md:pl-1.5 flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold tracking-[-0.02em]">{p.brand}</span>
                  <span className="text-xs text-white/40 border border-white/10 rounded-full px-2.5 py-[3px]">{p.year}</span>
                </div>
                <h3 className="text-[22px] md:text-[25px] leading-[1.18] tracking-[-0.025em] font-semibold mt-3.5">{p.headline}</h3>
                <p className="text-[14.5px] leading-[1.55] text-white/50 mt-3.5">{p.overview}</p>
                <div className="flex flex-col gap-[11px] mt-5">
                  {p.bullets.map((b, bi) => (
                    <div key={bi} className="flex items-start gap-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[7px] flex-none" />
                      <span className="text-sm leading-[1.45] text-white/[0.66]">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-[22px]">
                  {p.tags.map((t) => (
                    <span key={t} className={TAG}>{t}</span>
                  ))}
                </div>
                <a
                  href={p.url ?? "#contact"}
                  {...(p.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-[22px] self-start inline-flex items-center gap-2 bg-[#142018] border border-white/[0.12] text-[#f4f4f3] text-[13.5px] font-semibold px-[22px] py-[11px] rounded-[10px] hover:bg-[#1a2a20] transition-colors"
                >
                  View Project
                  <span aria-hidden className="text-[15px] -mt-px">&#8599;</span>
                </a>
              </div>
            </div>
          </GalleryCard>
        ))
      }
    />
  );
}
