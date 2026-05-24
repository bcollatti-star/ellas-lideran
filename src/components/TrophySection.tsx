"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const lines = [
  "50 mujeres.",
  "1 provincia.",
  "Un legado que inspira a miles.",
];

export default function TrophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -rect.top / scrollable));
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 0.35 + progress * 0.65;
  const blur = (1 - progress) * 6;
  const trophyOpacity = 0.2 + progress * 0.8;

  // Text lines appear sequentially in the last 40% of scroll
  const textProgress = Math.max(0, (progress - 0.55) / 0.45);

  return (
    <div ref={containerRef} className="relative h-[280vh]">
      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(196,151,42,0.12) 0%, transparent 65%), #1C1C1C",
        }}
      >
        {/* Trophy */}
        <div
          className="relative z-10"
          style={{
            transform: `scale(${scale})`,
            opacity: trophyOpacity,
            filter: `blur(${blur}px)`,
            willChange: "transform, opacity, filter",
          }}
        >
          <Image
            src="/trofeo.png"
            alt="Trofeo Ellas Lideran"
            width={380}
            height={380}
            className="w-48 sm:w-64 md:w-80 h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Text lines */}
        <div className="absolute inset-x-0 bottom-[18%] flex flex-col items-center gap-2 px-6 text-center">
          {lines.map((line, i) => {
            const lineProgress = Math.max(0, Math.min(1, (textProgress - i * 0.28) / 0.35));
            return (
              <p
                key={line}
                className={`font-display font-bold text-white ${
                  i === lines.length - 1
                    ? "text-lg sm:text-xl text-gold italic"
                    : "text-3xl sm:text-5xl"
                }`}
                style={{
                  opacity: lineProgress,
                  transform: `translateY(${(1 - lineProgress) * 20}px)`,
                  willChange: "opacity, transform",
                }}
              >
                {line}
              </p>
            );
          })}
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 flex flex-col items-center gap-2"
          style={{ opacity: Math.max(0, 1 - progress * 4) }}
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Deslizá</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}
