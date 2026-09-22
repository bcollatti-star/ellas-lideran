import FadeIn from "@/components/FadeIn";

const ambitos = [
  "Educación",
  "Salud",
  "Ciencia",
  "Tecnología e innovación",
  "Producción",
  "Comunicación",
  "Deporte",
  "Economía",
  "Ruralidad",
  "Comunidad y territorio",
  "Justicia y Derechos Humanos",
  "Liderazgo empresarial",
];

export default function AmbitosSection() {
  return (
    <section id="ambitos" className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Gold organic curves — top right */}
      <svg aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none opacity-[0.18]" viewBox="0 0 320 320" fill="none">
        <path d="M320 0 C260 65 190 105 145 195 C100 285 50 310 0 320" stroke="#C6A24C" strokeWidth="1.5"/>
        <path d="M320 50 C268 108 205 145 165 228 C125 311 78 335 22 320" stroke="#C6A24C" strokeWidth="1"/>
        <path d="M320 100 C276 150 220 188 185 262 C150 336 108 355 55 320" stroke="#DAA925" strokeWidth="0.7"/>
      </svg>

      {/* Lavender botanical — bottom left */}
      <svg aria-hidden="true" className="absolute bottom-0 left-0 w-28 h-56 sm:w-36 sm:h-64 pointer-events-none" viewBox="0 0 90 200" fill="none">
        <line x1="18" y1="200" x2="16" y2="75" stroke="#C7AD79" strokeWidth="1" opacity="0.45"/>
        <line x1="45" y1="200" x2="45" y2="80" stroke="#C7AD79" strokeWidth="1" opacity="0.38"/>
        <line x1="72" y1="200" x2="74" y2="85" stroke="#C7AD79" strokeWidth="1" opacity="0.40"/>
        <ellipse cx="16" cy="67" rx="3" ry="5.5" fill="#3E2F52" opacity="0.28"/>
        <ellipse cx="12" cy="77" rx="2.5" ry="4" fill="#3E2F52" opacity="0.22"/>
        <ellipse cx="20" cy="81" rx="2.5" ry="4" fill="#3E2F52" opacity="0.18"/>
        <ellipse cx="14" cy="90" rx="2" ry="3" fill="#3E2F52" opacity="0.14"/>
        <ellipse cx="45" cy="72" rx="3" ry="5.5" fill="#3E2F52" opacity="0.28"/>
        <ellipse cx="41" cy="82" rx="2.5" ry="4" fill="#3E2F52" opacity="0.22"/>
        <ellipse cx="49" cy="86" rx="2.5" ry="4" fill="#3E2F52" opacity="0.18"/>
        <ellipse cx="74" cy="77" rx="3" ry="5.5" fill="#3E2F52" opacity="0.25"/>
        <ellipse cx="70" cy="87" rx="2.5" ry="4" fill="#3E2F52" opacity="0.18"/>
        <ellipse cx="78" cy="91" rx="2.5" ry="4" fill="#3E2F52" opacity="0.16"/>
        <path d="M16 135 C9 126 7 112 14 105 C15 112 16 126 16 135 Z" fill="#C7AD79" opacity="0.22"/>
        <path d="M16 135 C23 126 25 112 18 105 C17 112 16 126 16 135 Z" fill="#C7AD79" opacity="0.18"/>
        <path d="M45 140 C38 131 36 117 43 110 C44 117 45 131 45 140 Z" fill="#C7AD79" opacity="0.22"/>
        <path d="M45 140 C52 131 54 117 47 110 C46 117 45 131 45 140 Z" fill="#C7AD79" opacity="0.18"/>
      </svg>

      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Categorías
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
              Ámbitos de{" "}
              <span className="italic text-gold">liderazgo</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-20 bg-gold/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="h-px w-20 bg-gold/30" />
            </div>
            <p className="text-charcoal/60 mt-6 max-w-xl mx-auto">
              Reconocemos el liderazgo en doce ámbitos que reflejan la diversidad y la riqueza de la
              provincia de Santa Fe.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {ambitos.map((ambito, i) => (
            <FadeIn key={ambito} delay={i * 50} direction="up">
              <div className="group relative border border-gold/20 rounded-2xl px-5 py-6 text-center hover:border-gold hover:bg-gold/5 transition-all duration-200 cursor-default">
                <div className="w-6 h-0.5 bg-gold/30 mx-auto mb-3 group-hover:bg-gold group-hover:w-8 transition-all duration-200" />
                <span className="text-charcoal/80 font-medium text-sm leading-snug group-hover:text-charcoal transition-colors">
                  {ambito}
                </span>
                <span className="absolute top-3 right-3 text-gold/20 font-display text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
