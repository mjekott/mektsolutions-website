"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import { CONTAINER } from "@/lib/ui";
import { Eyebrow } from "@/components/Eyebrow";

const GAP = 24; // matches gap-6 on the track
const PAD = 40; // matches md:px-10 on the track wrapper

/** Args handed to a gallery's `cards` render function. */
export type GalleryRenderArgs = {
  x: MotionValue<number>;
  vw: number;
  enabled: boolean;
  offsets: number[];
};

type GalleryCardProps = {
  x: MotionValue<number>;
  offset: number;
  vw: number;
  enabled: boolean;
  dim?: boolean;
  widthClass: string;
  children: ReactNode;
};

/** A single card in a horizontal gallery, with optional desktop depth-dimming. */
export function GalleryCard({
  x,
  offset,
  vw,
  enabled,
  dim = true,
  widthClass,
  children,
}: GalleryCardProps) {
  const vis = (xv: number) => {
    const screenLeft = PAD + offset + xv;
    if (vw && screenLeft > vw * 0.6) {
      return Math.max(0, 1 - (screenLeft - vw * 0.6) / (vw * 0.45));
    }
    return 1;
  };
  // Depth dimming is driven by the desktop pin's `x`. On mobile the track scrolls
  // natively (x stays 0), so it must be disabled or every card past the first
  // would be stuck dimmed. It's also disabled for full-width cards (one per view).
  const opacity = useTransform(x, (xv) => 0.3 + 0.7 * vis(xv));
  const scale = useTransform(x, (xv) => 0.95 + 0.05 * vis(xv));
  return (
    <motion.div
      style={enabled && dim ? { opacity, scale, transformOrigin: "left center" } : undefined}
      className={`snap-start flex-none ${widthClass} bg-[#0c150f] border border-white/[0.07] rounded-3xl`}
    >
      {children}
    </motion.div>
  );
}

type HGalleryProps = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  /** Card widths in px — used to compute per-card offsets for depth-dimming. */
  widths: number[];
  cards: (args: GalleryRenderArgs) => ReactNode;
};

/**
 * Pinned horizontal gallery: on desktop the section pins and vertical scroll
 * drives the track sideways; on mobile it degrades to a native swipe scroller
 * with carousel dots.
 */
export function HGallery({ id, eyebrow, title, widths, cards }: HGalleryProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);
  const [vw, setVw] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const [mobileIdx, setMobileIdx] = useState(0);
  const n = widths.length;

  const onMobileScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setMobileIdx(Math.round(p * (n - 1)));
  };
  const scrollToCard = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: (max * i) / Math.max(1, n - 1), behavior: "smooth" });
  };

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const wide = window.matchMedia("(min-width: 768px)").matches;
      setEnabled(wide);
      setVw(window.innerWidth);
      setMaxX(wide ? Math.max(0, track.scrollWidth - track.clientWidth) : 0);
    };
    measure();
    const t = setTimeout(measure, 120);
    window.addEventListener("resize", measure);
    // Re-measure when the track's size changes — e.g. images finishing loading
    // shift the layout, which otherwise leaves the last card unreachable.
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);
  const barWidth = useTransform(scrollYProgress, (p) =>
    (100 / n + p * (100 - 100 / n)).toFixed(1) + "%"
  );
  const [idx, setIdx] = useState(1);
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setIdx(Math.min(n, Math.round(p * (n - 1)) + 1));
  });

  const offsets: number[] = [];
  let acc = 0;
  for (let i = 0; i < n; i++) {
    offsets.push(acc);
    acc += widths[i] + GAP;
  }

  return (
    <div
      id={id}
      ref={wrapRef}
      className="relative"
      style={enabled && maxX ? { height: `calc(100vh + ${maxX}px)` } : undefined}
    >
      <div
        className={
          enabled
            ? "sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-[70px]"
            : "py-[70px]"
        }
      >
        <div className={`${CONTAINER} flex items-end justify-between gap-6 mb-[34px]`}>
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-[34px] md:text-[46px] tracking-[-0.04em] font-semibold mt-[22px]">{title}</h2>
          </div>
          <div className="hidden md:flex items-center gap-[18px] pb-1.5">
            <span className="text-[13px] tabular-nums text-white/45 tracking-[0.04em]">
              {String(idx).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </span>
            <div className="w-40 h-[3px] bg-white/[0.12] rounded-full overflow-hidden">
              <motion.div className="h-full bg-[#f4f4f3] rounded-full" style={{ width: barWidth }} />
            </div>
            <span className="text-xs text-white/35 inline-flex items-center gap-1.5">
              scroll <span className="text-sm">&darr;</span>
            </span>
          </div>
          {/* mobile swipe affordance */}
          <div className="md:hidden flex items-center gap-2 pb-1 text-xs font-medium text-accent">
            <span className="tabular-nums text-white/40">{String(n).padStart(2, "0")} cards</span>
            <span className="inline-flex items-center gap-1.5 bg-[#142018] border border-white/[0.1] rounded-full px-3 py-1.5">
              Swipe
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
                className="text-sm"
              >
                &rarr;
              </motion.span>
            </span>
          </div>
        </div>
        <div
          ref={scrollerRef}
          onScroll={enabled ? undefined : onMobileScroll}
          className={
            enabled
              ? `${CONTAINER} overflow-hidden`
              : `${CONTAINER} overflow-x-auto pb-5 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`
          }
        >
          <motion.div
            ref={trackRef}
            style={enabled ? { x } : undefined}
            className="flex gap-6 items-stretch will-change-transform"
          >
            {cards({ x, vw, enabled, offsets })}
          </motion.div>
        </div>

        {/* mobile carousel dots */}
        {!enabled && (
          <div className="md:hidden mt-5 flex justify-center gap-2">
            {widths.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                aria-label={`Go to card ${i + 1}`}
                aria-current={i === mobileIdx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === mobileIdx ? "w-6 bg-accent" : "w-2 bg-white/25"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
