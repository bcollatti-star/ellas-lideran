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

  const scale = 0.3 + progress * 0.7;
  const blur = (1 - progress) * 5;
  const trophyOpacity = 0.15 + progress * 0.85;

  // 3D rotation: starts tilted, straightens as progress increases
  const rotateY = (1 - progress) * -35;
  const rotateX = (1 - progress) * 18;
  const rotateZ = (1 - progress) * 8;

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
          style={{ perspective: "900px" }}
          className="relative z-10"
        >
          <div
            style={{
              transform: `scale(${scale}) rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`,
              opacity: trophyOpacity,
              filter: `blur(${blur}px)`,
              willChange: "transform, opacity, filter",
            }}
          >
            <Image
              src="/trofeo.png"
              alt="Trofeo Ellas Lideran"
              width={500}
              height={500}
              className="w-64 sm:w-80 md:w-[420px] h-auto drop-shadow-2xl"
              priority
            />
          </div>
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
