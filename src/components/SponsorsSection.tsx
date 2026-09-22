import { Mail } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Plum geometric panel — top left */}
      <svg aria-hidden="true" className="absolute top-0 left-0 w-24 h-28 sm:w-40 sm:h-48 pointer-events-none z-0" viewBox="0 0 170 210" fill="none">
        <path d="M0 0 L170 0 Q150 60 110 100 Q70 140 0 160 Z" fill="#3E2F52" opacity="0.06"/>
        <path d="M0 0 L110 0 Q95 45 65 75 Q35 105 0 115 Z" fill="#3E2F52" opacity="0.05"/>
        <path d="M0 0 L170 0 Q150 60 110 100 Q70 140 0 160" stroke="#C6A24C" strokeWidth="0.8" opacity="0.25"/>
        <path d="M0 0 L110 0 Q95 45 65 75 Q35 105 0 115" stroke="#C6A24C" strokeWidth="0.6" opacity="0.18"/>
      </svg>

      {/* Gold curves — bottom right */}
      <svg aria-hidden="true" className="absolute bottom-0 right-0 w-24 h-24 sm:w-56 sm:h-56 pointer-events-none opacity-[0.15] z-0" viewBox="0 0 240 240" fill="none">
        <path d="M240 240 C180 175 130 140 90 75 C50 10 25 0 0 0" stroke="#C6A24C" strokeWidth="1.5"/>
        <path d="M240 195 C186 138 140 108 104 50 C68 -8 44 0 12 0" stroke="#C6A24C" strokeWidth="1"/>
        <path d="M240 150 C194 102 155 76 124 26 C93 -24 72 0 38 0" stroke="#DAA925" strokeWidth="0.7"/>
      </svg>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Auspiciantes y aliados
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
            Nuestros <span className="italic text-gold">sponsors</span> 2026
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
              Quienes nos acompañaron en la primer edición
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

        {/* CTA */}
        <div className="text-center bg-charcoal rounded-3xl px-8 py-12">
          <p className="font-display text-2xl font-bold text-white mb-2">
            ¿Querés ser parte de{" "}
            <span className="italic text-gold">Ellas Lideran 2027?</span>
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
