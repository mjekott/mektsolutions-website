"use client";

import { useEffect, useRef, useState } from "react";

const SRC = "/audio/afrobeats.wav";
const BARS = [40, 80, 55, 90]; // resting bar heights (%)

/**
 * Floating background-music toggle. Tries to autoplay on load, falls back to
 * the first user gesture (browsers block autoplay with sound), persists the
 * visitor's choice, and resumes unless they explicitly paused it.
 */
export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const stopped = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.45;

    try {
      stopped.current = localStorage.getItem("mekt_bgm") === "0";
    } catch {
      stopped.current = false;
    }

    const play = () =>
      audio
        .play()
        .then(() => {
          try {
            localStorage.setItem("mekt_bgm", "1");
          } catch {}
        })
        .catch(() => {});

    const onPlay = () => setPlaying(true);
    const onPause = () => {
      setPlaying(false);
      // watchdog: resume only if the visitor did NOT deliberately stop it
      if (!stopped.current) {
        setTimeout(() => {
          if (audio.paused && !stopped.current) play();
        }, 120);
      }
    };
    const onEnded = () => {
      if (!stopped.current) play();
    };
    const onVisible = () => {
      if (!document.hidden && !stopped.current && audio.paused) play();
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    document.addEventListener("visibilitychange", onVisible);

    if (!stopped.current) {
      play(); // immediate attempt (often blocked) …
      const tryStart = () => {
        if (audio.paused) play();
        window.removeEventListener("pointerdown", tryStart);
        window.removeEventListener("keydown", tryStart);
        window.removeEventListener("scroll", tryStart);
      };
      window.addEventListener("pointerdown", tryStart, { once: true });
      window.addEventListener("keydown", tryStart, { once: true });
      window.addEventListener("scroll", tryStart, { once: true, passive: true });
    }

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      stopped.current = false;
      audio.play().catch(() => {});
    } else {
      stopped.current = true;
      audio.pause();
      try {
        localStorage.setItem("mekt_bgm", "0");
      } catch {}
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="none">
        <source src={SRC} type="audio/wav" />
      </audio>
      <button
        type="button"
        onClick={toggle}
        aria-label="Toggle background music"
        aria-pressed={playing}
        className="fixed bottom-6 right-6 z-[80] flex items-center gap-2.5 bg-[rgba(27,26,24,0.82)] backdrop-blur-[12px] border border-white/[0.12] text-[#f4f4f3] rounded-full pl-3.5 pr-[18px] py-[11px] text-[13px] font-semibold cursor-pointer shadow-[0_14px_40px_-16px_rgba(0,0,0,0.7)] transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent)_55%,transparent)]"
      >
        <span className="flex items-end justify-center gap-[2.5px] h-[15px] w-[18px]">
          {BARS.map((h, i) => (
            <span
              key={i}
              className="w-[2.5px] bg-accent rounded-[2px] origin-bottom"
              style={{
                height: `${h}%`,
                transform: playing ? undefined : "scaleY(0.4)",
                animation: playing ? `meEq ${(0.7 + i * 0.12).toFixed(2)}s ease-in-out infinite` : "none",
              }}
            />
          ))}
        </span>
        <span>{playing ? "Pause music" : "Play music"}</span>
      </button>
    </>
  );
}
