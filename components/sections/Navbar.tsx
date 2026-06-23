"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { navLinks } from "@/lib/data";

export function Navbar() {
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
          <a href="#" aria-label="MEKT — home" className="flex items-center">
            <Image src="/logo-mekt.png" alt="MEKT" width={192} height={96} priority className="h-6 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="text-white/[0.62] text-[14.5px] font-medium hover:text-white transition-colors">
                {label}
              </a>
            ))}
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
