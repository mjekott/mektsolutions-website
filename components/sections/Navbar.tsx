"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

/** Tracks which section is currently in view so the matching nav link can light up. */
function useActiveSection(): string {
  const [active, setActive] = useState("");
  useEffect(() => {
    const ids = navLinks
      .map((l) => l.href)
      .filter((h) => h.startsWith("#") && h.length > 1)
      .map((h) => h.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    const visible = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting);
        // first section (in nav order) crossing the centre band is the active one
        const current = ids.find((id) => visible.get(id));
        if (current) setActive("#" + current);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

export function Navbar() {
  const active = useActiveSection();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-0 z-50 px-4 py-3.5"
    >
      {/* always a centered floating pill */}
      <div className="mx-auto max-w-[760px] rounded-full backdrop-blur-[14px] bg-[rgba(33,31,29,0.86)] border border-white/10 shadow-[0_18px_50px_-22px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between pl-[22px] pr-3 py-[9px]">
          <Link href="/" aria-label="MEKT — home" className="flex items-center">
            <Image src="/logo-mekt.png" alt="MEKT" width={192} height={96} priority className="h-6 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => {
              const isActive = active === href;
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-[14.5px] font-medium transition-colors ${
                    isActive ? "text-accent" : "text-white/[0.62] hover:text-white"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="bg-accent text-[#1b1a18] text-[13px] font-semibold px-4 py-2 rounded-[10px] hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
