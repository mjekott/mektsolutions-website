"use client";

import { useEffect, type ReactNode } from "react";
import { contact } from "@/lib/data";

const SCRIPT = "https://assets.calendly.com/assets/external/widget.js";
const STYLES = "https://assets.calendly.com/assets/external/widget.css";

// Brand-themed booking URL (Calendly accepts hex colors without the leading #).
const url =
  `${contact.calendly}?hide_gdpr_banner=1` +
  `&background_color=0c150f&text_color=f4f4f3&primary_color=16b57f`;

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

/** Button that opens Calendly in a modal popup (falls back to a new tab). */
export function CalendlyButton({ className, children }: { className?: string; children: ReactNode }) {
  // Preload Calendly's assets on mount so the first click opens instantly.
  useEffect(() => {
    if (!document.querySelector(`link[href="${STYLES}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = STYLES;
      document.head.appendChild(link);
    }
    if (!document.querySelector(`script[src="${SCRIPT}"]`)) {
      const s = document.createElement("script");
      s.src = SCRIPT;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  const open = () => {
    if (window.Calendly) window.Calendly.initPopupWidget({ url });
    else window.open(contact.calendly, "_blank", "noopener,noreferrer");
  };

  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
