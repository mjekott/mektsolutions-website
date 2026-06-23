"use client";

import { useState } from "react";

type ShotProps = {
  src: string;
  placeholder: string;
  fit?: "cover" | "contain";
  light?: boolean;
  className?: string;
  /** Extra classes applied to the <img> itself (e.g. object-position, filters). */
  imgClassName?: string;
};

/**
 * Screenshot slot that renders the image and falls back to a styled
 * placeholder if the file is missing or fails to load.
 */
export function Shot({ src, placeholder, fit = "cover", light = false, className, imgClassName }: ShotProps) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden ${light ? "bg-[#f4f4f3]" : "bg-[#121e17]"} ${className ?? ""}`}>
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={placeholder}
          onError={() => setFailed(true)}
          className={`block w-full h-full ${fit === "cover" ? "object-cover" : "object-contain"} ${imgClassName ?? ""}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <span className={`text-[11px] font-semibold tracking-[0.14em] uppercase ${light ? "text-[#07110c]/45" : "text-white/40"}`}>
            Preview
          </span>
          <span className={`text-sm leading-normal max-w-[280px] ${light ? "text-[#07110c]/60" : "text-white/55"}`}>
            {placeholder}
          </span>
        </div>
      )}
    </div>
  );
}
