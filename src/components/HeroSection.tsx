import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 80% 20%, rgba(196,151,42,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(123,94,167,0.12) 0%, transparent 55%), #1C1C1C",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(196,151,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,151,42,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Date badge */}
        <div className="inline-flex items-center gap-2 border border-gold/60 text-gold text-xs tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-8">
          <Calendar size={13} />
          09 de Marzo · 2027
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo-ellas-lideran-white.png"
            alt="Ellas Lideran Santa Fe"
            width={480}
            height={220}
            className="w-auto max-w-[280px] sm:max-w-md md:max-w-lg"
            priority
          />
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gold/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <div className="h-px w-16 bg-gold/40" />
        </div>

        <p className="text-white/80 text-base sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed font-light">
          El reconocimiento provincial a mujeres santafesinas
          <br className="hidden sm:block" /> que transforman la provincia.
        </p>

        <div className="flex items-center justify-center gap-1.5 text-white/50 text-sm mb-8">
          <MapPin size={14} className="text-gold/70" />
          <span>Salón Metropolitano · Rosario, Santa Fe</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-sm sm:max-w-none mb-10">
          <a
            href="#inscripcion"
            className="px-8 py-3.5 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5 text-center"
          >
            Inscribirte al evento
          </a>
          <a
            href="#sobre"
            className="px-8 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:border-gold hover:text-gold transition-all duration-200 hover:-translate-y-0.5 text-center"
          >
            Conocé más
          </a>
        </div>

        {/* Stats */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto border-t border-white/10 pt-8 mb-8">
          {[
            { value: "50", label: "Mujeres líderes" },
            { value: "100", label: "Preseleccionadas" },
            { value: "+1000", label: "Postuladas" },
            { value: "12", label: "Ámbitos" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-3xl font-bold text-gold">{value}</p>
              <p className="text-white/50 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Instagram */}
        <a
          href="https://instagram.com/ellaslideransantafe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/40 text-xs hover:text-gold transition-colors"
        >
          <InstagramIcon size={14} />
          @ellaslideransantafe
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
