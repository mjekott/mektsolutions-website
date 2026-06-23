import Image from "next/image";
import { CONTAINER } from "@/lib/ui";
import { navLinks, contact } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className={`${CONTAINER} py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6`}>
        <div className="flex items-center gap-5">
          <Image src="/logo-mekt.png" alt="MEKT" width={192} height={96} className="h-7 w-auto" />
          <span className="hidden sm:flex items-center gap-4 text-sm text-white/55">
            <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">{contact.email}</a>
            <span className="text-white/20">|</span>
            <a href={contact.phoneHref} className="hover:text-white transition-colors">{contact.phoneLabel}</a>
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[14.5px] text-white/65">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className={`${CONTAINER} pb-8 flex flex-col sm:flex-row gap-2 justify-between text-white/30 text-[13px] border-t border-white/[0.05] pt-6`}>
        <span>&copy; 2026 MEKT Solutions</span>
        <span className="sm:hidden flex flex-col gap-1">
          <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">{contact.email}</a>
          <a href={contact.phoneHref} className="hover:text-white transition-colors">{contact.phoneLabel}</a>
        </span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}
