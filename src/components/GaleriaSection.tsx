"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const generales = Array.from({ length: 8 }, (_, i) => `/general_${i + 1}.jpeg`);
const ganadoras = Array.from({ length: 11 }, (_, i) => `/ganadoras_${i + 1}.jpeg`);

function Carousel({ images, label }: { images: string[]; label: string }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      className="relative max-w-2xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image area */}
      <div className="relative rounded-3xl overflow-hidden bg-charcoal/5 border border-gold/15 shadow-lg">
        <div className="relative aspect-[4/3]">
          {images.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <Image
                src={src}
                alt={`${label} ${i + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 672px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => { prev(); setPaused(true); }}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors"
        >
          <ChevronLeft size={18} className="text-charcoal" />
        </button>
        <button
          onClick={() => { next(); setPaused(true); }}
          aria-label="Siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors"
        >
          <ChevronRight size={18} className="text-charcoal" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-4 text-xs text-charcoal/40 font-semibold tabular-nums bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded-full">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setPaused(true); }}
            aria-label={`Foto ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-4 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-gold/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function GaleriaSection() {
  return (
    <section id="galeria" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Edición 2026
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
              La <span className="italic text-gold">noche</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-20 bg-gold/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="h-px w-20 bg-gold/30" />
            </div>
          </div>
        </FadeIn>

        {/* Fotos generales — grilla está bien */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-24">
          {generales.map((src, i) => (
            <FadeIn key={src} delay={i * 60} direction="up">
              <div className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`Ellas Lideran 2026 — foto ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Ganadoras — carrusel */}
        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">
              Reconocidas
            </p>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
              Las <span className="italic text-gold">50 líderes</span>
            </h3>
            <div className="flex items-center justify-center gap-4 mt-5">
              <div className="h-px w-16 bg-gold/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="h-px w-16 bg-gold/30" />
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={100}>
          <div className="mb-24">
            <Carousel images={ganadoras} label="Líder reconocida — Ellas Lideran 2026" />
          </div>
        </FadeIn>

        {/* Menciones especiales */}
        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">
              Edición 2026
            </p>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
              Menciones <span className="italic text-gold">especiales</span>
            </h3>
            <div className="flex items-center justify-center gap-4 mt-5">
              <div className="h-px w-16 bg-gold/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="h-px w-16 bg-gold/30" />
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={100}>
          <div className="max-w-2xl mx-auto">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-charcoal/5 border border-gold/15 shadow-lg">
              <Image
                src="/menciones.jpeg"
                alt="Menciones especiales Ellas Lideran 2026"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
