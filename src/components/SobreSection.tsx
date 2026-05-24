import { Star, Eye, Network, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";

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
          <FadeIn direction="left">
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
          </FadeIn>

          <div>
            <FadeIn delay={100}>
              <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-6">
                Propósito
              </p>
            </FadeIn>
            <div className="space-y-5">
              {propósitos.map(({ icon: Icon, text }, i) => (
                <FadeIn key={text} delay={150 + i * 80} direction="right">
                  <div className="flex gap-4 items-start bg-white rounded-2xl px-5 py-4 shadow-sm border border-gold/10">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <p className="text-charcoal/80 leading-relaxed">{text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
