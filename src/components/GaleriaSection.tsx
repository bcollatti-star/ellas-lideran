"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const generales = Array.from({ length: 8 }, (_, i) => `/general_${i + 1}.jpeg`);
const ganadoras = Array.from({ length: 11 }, (_, i) => `/ganadoras_${i + 1}.jpeg`);

const lideres: { categoria: string; nombres: string[] }[] = [
  {
    categoria: "Educación y formación",
    nombres: ["Inés Risso", "María Cecilia Ribecco", "María Cecilia Sas", "Estela Vallebella"],
  },
  {
    categoria: "Salud y bienestar",
    nombres: ["Carolina Chacón", "Gisela Pavé", "Marcela Ré", "Liliana Drovetta de España"],
  },
  {
    categoria: "Innovación, ciencia y tecnología",
    nombres: ["Leticia Mesa", "Paula Durán", "Milagros Rossler", "Carla Borini Etichetti"],
  },
  {
    categoria: "Producción, industria y trabajo",
    nombres: ["Patricia Iraola", "Paula Rodeles", "Marisabel Pelossi", "Fabiana Trobbiani", "Veronica Martinengo"],
  },
  {
    categoria: "Economía social y cooperativismo",
    nombres: ["María Eva Juncos", "Leticia Solari", "Viviana Imperiale", "Raquel Dominguez"],
  },
  {
    categoria: "Cultura y comunicación",
    nombres: ["Virginia Tola", "Adriana Imhoff", "Giselle Bilesio", "Natalí Otero", "Karina Vimonte"],
  },
  {
    categoria: "Deporte y vida saludable",
    nombres: ["Cecilia Carranza", "Erica Yenssen", "Mia Tatiana Silva", "Yanina Martínez"],
  },
  {
    categoria: "Comunidad y territorio",
    nombres: ["Ana Clara Dalla Valle", "Viviana Gorosito", "Vilma Ludueña", "Nélida Lidia Fontán", "Liliana Alberto", "María Fernanda Balbo"],
  },
  {
    categoria: "Seguridad, justicia y derechos humanos",
    nombres: ["María Cecilia Vranicich", "Ana María Arce", "María Soledad Martinez", "Araceli Díaz", "Mariana Ferreghini"],
  },
  {
    categoria: "Agroindustria y ruralidad",
    nombres: ["María Soledad Aramendi", "Mónica Mansilla", "Pilu Giraudo", "Nora Badalotti", "Gina Bentivoglio"],
  },
  {
    categoria: "Liderazgo empresarial y corporativo",
    nombres: ["Erika Pasero Proske", "Vanina Procopio", "Sandra Yachelini", "Clara Altamirano"],
  },
];

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
    <section id="galeria" className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Plant shadow silhouette — top right */}
      <svg aria-hidden="true" className="absolute -top-2 right-0 w-24 h-36 sm:w-48 sm:h-72 pointer-events-none opacity-[0.06] z-0" viewBox="0 0 200 300" fill="#3E2F52">
        <path d="M60 300 C65 238 82 172 108 108 C134 44 168 10 200 0 C172 22 138 58 112 124 C86 190 68 252 63 300 Z"/>
        <path d="M108 185 C122 152 145 120 172 90 C160 126 136 160 112 190 Z"/>
        <ellipse cx="195" cy="12" rx="18" ry="7" transform="rotate(-38 195 12)"/>
        <ellipse cx="178" cy="28" rx="16" ry="6" transform="rotate(-30 178 28)"/>
      </svg>

      {/* Lavender botanical — bottom right */}
      <svg aria-hidden="true" className="absolute bottom-0 right-4 w-12 h-20 sm:w-20 sm:h-40 pointer-events-none z-0" viewBox="0 0 65 150" fill="none">
        <line x1="12" y1="150" x2="10" y2="55" stroke="#C7AD79" strokeWidth="1" opacity="0.38"/>
        <line x1="33" y1="150" x2="33" y2="60" stroke="#C7AD79" strokeWidth="1" opacity="0.32"/>
        <line x1="53" y1="150" x2="55" y2="65" stroke="#C7AD79" strokeWidth="1" opacity="0.35"/>
        <ellipse cx="10" cy="47" rx="2.5" ry="4.5" fill="#3E2F52" opacity="0.22"/>
        <ellipse cx="7" cy="56" rx="2" ry="3.5" fill="#3E2F52" opacity="0.16"/>
        <ellipse cx="14" cy="60" rx="2" ry="3.5" fill="#3E2F52" opacity="0.14"/>
        <ellipse cx="33" cy="52" rx="2.5" ry="4.5" fill="#3E2F52" opacity="0.22"/>
        <ellipse cx="30" cy="62" rx="2" ry="3.5" fill="#3E2F52" opacity="0.16"/>
        <ellipse cx="37" cy="66" rx="2" ry="3.5" fill="#3E2F52" opacity="0.14"/>
        <ellipse cx="55" cy="57" rx="2.5" ry="4.5" fill="#3E2F52" opacity="0.2"/>
        <ellipse cx="52" cy="67" rx="2" ry="3.5" fill="#3E2F52" opacity="0.15"/>
        <path d="M10 102 C4 95 2 84 9 78 C10 84 10 95 10 102 Z" fill="#C7AD79" opacity="0.18"/>
        <path d="M10 102 C16 95 18 84 11 78 C10 84 10 95 10 102 Z" fill="#C7AD79" opacity="0.15"/>
        <path d="M33 107 C27 100 25 89 32 83 C33 89 33 100 33 107 Z" fill="#C7AD79" opacity="0.18"/>
        <path d="M33 107 C39 100 41 89 34 83 C33 89 33 100 33 107 Z" fill="#C7AD79" opacity="0.15"/>
      </svg>

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
            <p className="text-charcoal/50 mt-4 text-sm">
              9 de marzo 2026 · Salón Metropolitano Rosario
            </p>
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

        {/* Territorio */}
        <FadeIn direction="up">
          <div className="mb-24">
            <div className="text-center mb-10">
              <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">
                Representación territorial
              </p>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
                30 lugares <span className="italic text-gold">santafesinos</span>
              </h3>
              <div className="flex items-center justify-center gap-4 mt-5">
                <div className="h-px w-16 bg-gold/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <div className="h-px w-16 bg-gold/30" />
              </div>
            </div>
            <div className="max-w-sm mx-auto rounded-3xl overflow-hidden shadow-md border border-gold/15">
              <Image
                src="/territorio26.png"
                alt="Representación territorial Ellas Lideran 2026 — 30 lugares santafesinos"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </FadeIn>

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
          <div className="mb-12">
            <Carousel images={ganadoras} label="Líder reconocida — Ellas Lideran 2026" />
          </div>
        </FadeIn>

        {/* Líderes por categoría */}
        <FadeIn direction="up" delay={80}>
          <div className="mb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {lideres.map(({ categoria, nombres }) => (
              <div key={categoria} className="rounded-2xl border border-gold/15 bg-charcoal/[0.02] px-5 py-5">
                <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-semibold mb-3">{categoria}</p>
                <ul className="space-y-1.5">
                  {nombres.map((nombre) => (
                    <li key={nombre} className="flex items-center gap-2 text-charcoal/75 text-sm">
                      <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                      {nombre}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
          <div className="max-w-2xl mx-auto mb-10">
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

        <FadeIn direction="up" delay={80}>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="rounded-2xl border border-gold/15 bg-charcoal/[0.02] px-6 py-6 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
              {[
                "María Eugenia Schmuck",
                "Cristina Cuvertino",
                "Mime Mascaró",
                "Rita Larrañaga",
                "Graciela Altomonte Alabarce",
                'Silvia "Pita" Klingler',
                "Rogelia Epelbaum",
                "Marisa Gallina",
                "Patricia García",
                "Gisela Scaglia",
                "Margarita Zabalza",
              ].map((nombre) => (
                <div key={nombre} className="flex items-center gap-2 text-charcoal/75 text-sm">
                  <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                  {nombre}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
