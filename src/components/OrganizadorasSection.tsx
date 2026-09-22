import FadeIn from "@/components/FadeIn";

const jurado = [
  "Alejandro Darío Distefano",
  "Carolina Rovetto",
  "Flor Milano",
  "Laura Mustapich",
  "Leila Sosa",
  "Maria Alejandra Gayoso",
  "Maria Cristina Gomez",
  "Melina Zamboni",
  "Melisa Costa",
  "Viko Sanso de la Madrid",
];

export default function OrganizadorasSection() {
  return (
    <>
      {/* Jurado */}
      <section id="jurado" className="bg-white py-24 px-6 relative overflow-hidden">
        {/* Gold curves — top right */}
        <svg aria-hidden="true" className="absolute top-0 right-0 w-24 h-24 sm:w-72 sm:h-72 pointer-events-none opacity-[0.15] z-0" viewBox="0 0 300 300" fill="none">
          <path d="M300 0 C240 60 175 100 135 185 C95 270 55 295 0 300" stroke="#C6A24C" strokeWidth="1.5"/>
          <path d="M300 55 C248 108 190 145 155 222 C120 299 82 320 28 300" stroke="#C6A24C" strokeWidth="1"/>
          <path d="M300 110 C255 158 205 195 175 262 C145 329 110 344 58 300" stroke="#DAA925" strokeWidth="0.7"/>
        </svg>

        {/* Lavender botanical — bottom left */}
        <svg aria-hidden="true" className="absolute bottom-0 left-4 w-14 h-24 sm:w-24 sm:h-44 pointer-events-none z-0" viewBox="0 0 75 170" fill="none">
          <line x1="15" y1="170" x2="13" y2="65" stroke="#C7AD79" strokeWidth="1" opacity="0.4"/>
          <line x1="38" y1="170" x2="38" y2="70" stroke="#C7AD79" strokeWidth="1" opacity="0.35"/>
          <line x1="60" y1="170" x2="62" y2="75" stroke="#C7AD79" strokeWidth="1" opacity="0.38"/>
          <ellipse cx="13" cy="57" rx="3" ry="5" fill="#3E2F52" opacity="0.25"/>
          <ellipse cx="9" cy="67" rx="2.5" ry="4" fill="#3E2F52" opacity="0.18"/>
          <ellipse cx="17" cy="71" rx="2.5" ry="4" fill="#3E2F52" opacity="0.16"/>
          <ellipse cx="38" cy="62" rx="3" ry="5" fill="#3E2F52" opacity="0.25"/>
          <ellipse cx="34" cy="72" rx="2.5" ry="4" fill="#3E2F52" opacity="0.18"/>
          <ellipse cx="42" cy="76" rx="2.5" ry="4" fill="#3E2F52" opacity="0.15"/>
          <ellipse cx="62" cy="67" rx="3" ry="5" fill="#3E2F52" opacity="0.22"/>
          <ellipse cx="58" cy="77" rx="2.5" ry="4" fill="#3E2F52" opacity="0.16"/>
          <path d="M13 115 C6 107 4 94 11 88 C12 94 13 107 13 115 Z" fill="#C7AD79" opacity="0.2"/>
          <path d="M13 115 C20 107 22 94 15 88 C14 94 13 107 13 115 Z" fill="#C7AD79" opacity="0.16"/>
          <path d="M38 120 C31 112 29 99 36 93 C37 99 38 112 38 120 Z" fill="#C7AD79" opacity="0.2"/>
          <path d="M38 120 C45 112 47 99 40 93 C39 99 38 112 38 120 Z" fill="#C7AD79" opacity="0.16"/>
        </svg>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Especialistas
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
              Jurado <span className="italic text-gold">2026</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-20 bg-gold/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="h-px w-20 bg-gold/30" />
            </div>
            <p className="text-charcoal/60 mt-6 max-w-lg mx-auto">
              Un jurado especializado que seleccionó a 25 de las 50 mujeres líderes del reconocimiento.
            </p>
            <p className="text-gold mt-4 text-base font-semibold italic">
              Muy pronto conoceremos al comité de la nueva edición.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {jurado.map((name, i) => (
              <div
                key={name}
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gold/10 hover:border-gold/40 hover:bg-gold/5 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3">
                  <span className="font-display text-sm font-bold text-gold">
                    {name.split(" ").slice(0, 2).map((n) => n[0]).join("")}
                  </span>
                </div>
                <p className="text-charcoal font-medium text-sm leading-snug">{name}</p>
                <span className="text-gold/30 text-xs mt-1 font-display">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
