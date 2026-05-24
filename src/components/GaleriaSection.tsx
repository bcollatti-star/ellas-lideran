import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const generales = Array.from({ length: 8 }, (_, i) => `/general_${i + 1}.jpeg`);
const ganadoras = Array.from({ length: 11 }, (_, i) => `/ganadoras_${i + 1}.jpeg`);

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

        {/* Fotos generales */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-20">
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

        {/* Ganadoras */}
        <FadeIn>
          <div className="text-center mb-12">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-20">
          {ganadoras.map((src, i) => (
            <FadeIn key={src} delay={i * 50} direction="up">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`Líder reconocida ${i + 1} — Ellas Lideran 2026`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Menciones especiales */}
        <FadeIn>
          <div className="text-center mb-12">
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
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border border-gold/15">
              <Image
                src="/menciones.jpeg"
                alt="Menciones especiales Ellas Lideran 2026"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
