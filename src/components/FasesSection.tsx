import { ClipboardList, Search, Vote } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const fases = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Postulación",
    description:
      "El proceso comienza con un formulario público donde cualquier persona puede postular a una mujer que admire. Una etapa totalmente abierta y participativa para sugerir, recomendar o presentar su historia.",
  },
  {
    num: "02",
    icon: Search,
    title: "Preselección",
    description:
      "Con toda la información enviada por el público, la organización analiza cada perfil y selecciona a las 100 mujeres destacadas, evaluando su impacto, trayectoria, aporte a su comunidad y el motivo de su nominación.",
  },
  {
    num: "03",
    icon: Vote,
    title: "Votación",
    description:
      "Las 100 preseleccionadas pasan a la etapa de votación. El público elige a 25 mujeres y el jurado especializado selecciona a 25 más, formando a las 50 líderes finales del reconocimiento.",
  },
];

export default function FasesSection() {
  return (
    <section id="fases" className="bg-cream py-24 px-6 relative overflow-hidden">
      {/* Plant shadow silhouette — top left */}
      <svg aria-hidden="true" className="absolute -top-8 -left-8 w-56 h-80 sm:w-72 sm:h-96 pointer-events-none opacity-[0.07]" viewBox="0 0 220 320" fill="#3E2F52">
        <path d="M70 320 C75 255 90 185 115 120 C140 55 175 15 210 0 C180 20 145 62 120 128 C95 194 78 258 72 320 Z"/>
        <path d="M115 195 C128 162 150 130 178 98 C166 134 144 167 118 200 Z"/>
        <path d="M88 250 C72 220 62 186 74 158 C78 188 86 222 91 252 Z"/>
        <ellipse cx="204" cy="14" rx="20" ry="8" transform="rotate(-38 204 14)"/>
        <ellipse cx="186" cy="30" rx="17" ry="7" transform="rotate(-30 186 30)"/>
        <ellipse cx="215" cy="5" rx="15" ry="6" transform="rotate(-52 215 5)"/>
      </svg>

      {/* Gold curves — bottom right */}
      <svg aria-hidden="true" className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none opacity-[0.16]" viewBox="0 0 280 280" fill="none">
        <path d="M280 280 C210 210 155 165 110 90 C65 15 40 0 0 0" stroke="#C6A24C" strokeWidth="1.5"/>
        <path d="M280 230 C218 170 168 130 128 62 C88 -6 60 0 20 0" stroke="#C6A24C" strokeWidth="1"/>
        <path d="M280 180 C226 130 182 98 148 38 C114 -22 88 0 50 0" stroke="#DAA925" strokeWidth="0.7"/>
      </svg>

      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              El proceso
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
              Fases de{" "}
              <span className="italic text-gold">elección</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-20 bg-gold/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="h-px w-20 bg-gold/30" />
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-px bg-gold/30" />
          {fases.map(({ num, icon: Icon, title, description }, i) => (
            <FadeIn key={title} delay={i * 120} direction="up">
              <div className="relative bg-white rounded-3xl p-8 shadow-sm border border-gold/10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-display text-5xl font-bold text-gold/20">{num}</span>
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Icon size={20} className="text-gold" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-charcoal mb-4">{title}</h3>
                <div className="w-8 h-0.5 bg-gold mb-4" />
                <p className="text-charcoal/60 leading-relaxed text-sm">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-12 text-center">
            <p className="text-charcoal/60 mb-4">¿Querés postular a una mujer que admiras?</p>
            <a
              href="/postular"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-gold/20"
            >
              Postular ahora
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
