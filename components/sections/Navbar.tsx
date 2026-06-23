"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CONTAINER } from "@/lib/ui";
import { navLinks } from "@/lib/data";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-[14px] bg-[rgba(8,8,8,0.72)] border-b border-white/[0.06]"
    >
      <div className={`${CONTAINER} py-4 flex items-center justify-between`}>
        <a href="#" aria-label="MEKT — home" className="flex items-center">
          <Image src="/logo-mekt.png" alt="MEKT" width={192} height={96} priority className="h-7 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-[38px]">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="text-white/[0.62] text-[14.5px] font-medium hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </div>
        <a href="#contact" className="bg-accent text-[#07110c] text-sm font-semibold px-[22px] py-2.5 rounded-[10px] hover:opacity-90 transition-opacity">
          Contact Us
        </a>
      </div>
    </motion.nav>
  );
}
