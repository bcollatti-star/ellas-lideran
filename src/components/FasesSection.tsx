import { ClipboardList, Search, Vote } from "lucide-react";

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
    <section id="fases" className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-px bg-gold/30" />

          {fases.map(({ num, icon: Icon, title, description }) => (
            <div key={title} className="relative bg-white rounded-3xl p-8 shadow-sm border border-gold/10">
              {/* Number */}
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
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-charcoal/60 mb-4">¿Querés postular a una mujer que admiras?</p>
          <a
            href="#inscripcion"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-gold/20"
          >
            Postular ahora
          </a>
        </div>
      </div>
    </section>
  );
}
