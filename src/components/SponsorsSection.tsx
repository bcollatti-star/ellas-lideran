import { Mail } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const placeholders = [
  { label: "Sponsor Oro", spots: 2 },
  { label: "Sponsor Plata", spots: 3 },
  { label: "Sponsor Bronce", spots: 4 },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Auspiciantes y aliados
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
            Nuestros <span className="italic text-gold">sponsors</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20 bg-gold/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-20 bg-gold/30" />
          </div>
          <p className="text-charcoal/60 mt-6 max-w-lg mx-auto">
            Empresas y organizaciones que hacen posible celebrar el liderazgo femenino en Santa Fe.
          </p>
        </div>

        {/* Sponsors 2026 */}
        <FadeIn direction="up">
          <div className="mb-16">
            <p className="text-center text-charcoal/40 text-xs tracking-[0.25em] uppercase font-semibold mb-8">
              Quienes nos acompañaron en 2026
            </p>
            <div className="max-w-sm mx-auto rounded-3xl overflow-hidden shadow-md border border-gold/15">
              <Image
                src="/sponsors26.png"
                alt="Sponsors Ellas Lideran 2026"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </FadeIn>

        {/* Sponsor tiers */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {placeholders.map(({ label, spots }) => (
            <div key={label} className="border border-dashed border-gold/30 rounded-3xl p-6">
              <p className="text-gold/60 text-xs tracking-widest uppercase mb-4 text-center">
                {label}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: spots }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-video rounded-xl bg-cream border border-gold/10 flex items-center justify-center"
                  >
                    <span className="text-charcoal/20 text-xs">Tu marca</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-charcoal rounded-3xl px-8 py-12">
          <p className="font-display text-2xl font-bold text-white mb-2">
            ¿Querés ser parte de{" "}
            <span className="italic text-gold">Ellas Lideran?</span>
          </p>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            Sumá tu marca a un evento que celebra el liderazgo femenino y el impacto social en Santa Fe.
          </p>
          <a
            href="mailto:ellaslideransantafe@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-gold/20"
          >
            <Mail size={16} />
            Contactanos para sponsorear
          </a>
        </div>
      </div>
    </section>
  );
}
