import { Star, Eye, Network, TrendingUp } from "lucide-react";

const propósitos = [
  { icon: Star, text: "Inspirar a nuevas generaciones de mujeres líderes." },
  { icon: Eye, text: "Visibilizar historias y proyectos que impulsan el desarrollo santafesino." },
  { icon: Network, text: "Consolidar una red provincial de mujeres que son motor de futuro y crecimiento." },
  { icon: TrendingUp, text: "Fortalecer la participación y el liderazgo femenino en todos los sectores." },
];

export default function SobreSection() {
  return (
    <section id="sobre" className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Sobre el Evento
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-6">
              ¿Qué es<br />
              <span className="italic text-gold">Ellas Lideran?</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
              Es un reconocimiento provincial que celebra a{" "}
              <strong className="text-charcoal font-semibold">50 mujeres líderes santafesinas</strong>{" "}
              que se destacan por su compromiso, impacto y trayectoria en diversos ámbitos del
              desarrollo social, productivo y comunitario.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Este reconocimiento se construye bajo criterios de transparencia, representatividad y
              diversidad, visibilizando el talento y la fuerza transformadora de mujeres en todo el
              territorio provincial.
            </p>
          </div>

          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-6">
              Propósito
            </p>
            <div className="space-y-5">
              {propósitos.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex gap-4 items-start bg-white rounded-2xl px-5 py-4 shadow-sm border border-gold/10"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <p className="text-charcoal/80 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar — 4 columns */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-gold/20 rounded-3xl overflow-hidden shadow-sm">
          {[
            { value: "50", label: "Mujeres reconocidas", sub: "líderes de la provincia" },
            { value: "100", label: "Preseleccionadas", sub: "elegidas por la organización" },
            { value: "+1000", label: "Postuladas", sub: "en la edición 2026" },
            { value: "12", label: "Ámbitos de liderazgo", sub: "sectores de la sociedad" },
          ].map(({ value, label, sub }) => (
            <div key={label} className="bg-white px-6 py-10 text-center">
              <p className="font-display text-4xl font-bold text-gold">{value}</p>
              <p className="font-semibold text-charcoal mt-2 text-sm">{label}</p>
              <p className="text-charcoal/50 text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
