import { MapPin, Clock, Calendar } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function MapSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Dónde y cuándo
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
              El <span className="italic text-gold">lugar</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-20 bg-gold/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="h-px w-20 bg-gold/30" />
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Map */}
          <FadeIn direction="left">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gold/15 h-80 md:h-full min-h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-60.6351!3d-32.9442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab7b0b7b0b0b%3A0x0!2sSal%C3%B3n+Metropolitano%2C+Rosario%2C+Santa+Fe!5e0!3m2!1ses!2sar!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Salón Metropolitano Rosario"
              />
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn direction="right" delay={100}>
            <div className="flex flex-col justify-center gap-6">
              <div className="flex gap-4 items-start p-6 bg-cream rounded-2xl border border-gold/15">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal mb-1">Salón Metropolitano</p>
                  <p className="text-charcoal/60 text-sm">Rosario, Santa Fe, Argentina</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 bg-cream rounded-2xl border border-gold/15">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Calendar size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal mb-1">9 de Marzo · 2027</p>
                  <p className="text-charcoal/60 text-sm">Segunda edición de Ellas Lideran Santa Fe</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 bg-cream rounded-2xl border border-gold/15">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal mb-1">18:00 hs</p>
                  <p className="text-charcoal/60 text-sm">Apertura de puertas y bienvenida</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/Salón+Metropolitano+Rosario+Santa+Fe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-white transition-all duration-200 text-sm w-fit"
              >
                <MapPin size={15} />
                Abrir en Google Maps
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
