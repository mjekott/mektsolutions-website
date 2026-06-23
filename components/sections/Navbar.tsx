"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { navLinks } from "@/lib/data";

const EASE_CLASS = "ease-[cubic-bezier(0.22,1,0.36,1)] duration-[450ms]";

export function Navbar() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    // The sentinel sits 80px down the page; once it scrolls above the viewport
    // top, condense the nav into a floating pill (and expand again on scroll-up).
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-[padding] ${EASE_CLASS} ${scrolled ? "py-3.5 px-4" : "py-0 px-0"}`}
      >
        {/* full-width bar at top → floating pill once scrolled */}
        <div
          className={`mx-auto backdrop-blur-[14px] border transition-all ${EASE_CLASS} ${
            scrolled
              ? "max-w-[760px] rounded-full bg-[rgba(9,16,12,0.86)] border-white/10 shadow-[0_18px_50px_-22px_rgba(0,0,0,0.8)]"
              : "max-w-full rounded-none bg-[rgba(8,8,8,0.72)] border-transparent border-b-white/[0.06] shadow-none"
          }`}
        >
          <div
            className={`mx-auto flex items-center justify-between transition-all ${EASE_CLASS} ${
              scrolled ? "max-w-full pl-[22px] pr-3 py-[9px]" : "max-w-[1240px] px-6 md:px-10 py-4"
            }`}
          >
            <a href="#" aria-label="MEKT — home" className="flex items-center">
            <Image
              src="/logo-mekt.png"
              alt="MEKT"
              width={192}
              height={96}
              priority
              className={`w-auto transition-all ${EASE_CLASS} ${scrolled ? "h-6" : "h-7"}`}
            />
          </a>

          <div className={`hidden md:flex items-center transition-[gap] ${EASE_CLASS} ${scrolled ? "gap-6" : "gap-[38px]"}`}>
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="text-white/[0.62] text-[14.5px] font-medium hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className={`bg-accent text-[#07110c] font-semibold rounded-[10px] hover:opacity-90 transition-all ${EASE_CLASS} ${
              scrolled ? "text-[13px] px-4 py-2" : "text-sm px-[22px] py-2.5"
            }`}
          >
            Contact Us
          </a>
          </div>
        </div>
      </motion.nav>

      {/* trigger marker for the condense effect (80px down the page) */}
      <div ref={sentinelRef} aria-hidden className="absolute top-20 left-0 w-px h-px pointer-events-none" />
    </>
  );
}
