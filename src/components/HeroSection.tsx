import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import Countdown from "@/components/Countdown";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 80% 20%, rgba(218,169,37,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(62,47,82,0.25) 0%, transparent 55%), #1C1C1C",
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

      {/* Gold organic curves — top right (hidden on mobile to avoid overlapping logo) */}
      <svg
        aria-hidden="true"
        className="absolute top-0 right-0 w-28 h-28 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] pointer-events-none opacity-[0.28] z-0"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path d="M400 0 C330 75 250 115 195 210 C140 305 75 345 0 400" stroke="#C6A24C" strokeWidth="1.5"/>
        <path d="M400 55 C340 120 265 158 215 245 C165 332 100 365 30 400" stroke="#C6A24C" strokeWidth="1"/>
        <path d="M400 110 C348 168 280 205 238 282 C196 359 135 385 65 400" stroke="#DAA925" strokeWidth="0.7"/>
        <path d="M400 170 C358 220 300 258 265 320 C230 382 175 397 105 400" stroke="#C6A24C" strokeWidth="0.5"/>
      </svg>

      {/* Plum geometric panel — bottom left */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-44 h-52 sm:w-56 sm:h-64 pointer-events-none"
        viewBox="0 0 220 270"
        fill="none"
      >
        <path d="M0 270 L0 65 C55 42 118 82 158 148 C198 214 210 270 210 270 Z" fill="#3E2F52" opacity="0.5"/>
        <path d="M0 270 L0 128 C38 110 75 138 100 185 C125 232 142 270 142 270 Z" fill="#3E2F52" opacity="0.32"/>
        <path d="M0 78 C55 42 118 82 158 148" stroke="#C6A24C" strokeWidth="1.2" opacity="0.65"/>
        <path d="M0 138 C38 110 75 138 100 185" stroke="#C6A24C" strokeWidth="0.9" opacity="0.45"/>
      </svg>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Date badge */}
        <div className="inline-flex items-center gap-2 border border-gold/60 text-gold text-xs tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-8">
          <Calendar size={13} />
          19 de Marzo · 2027
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
          El reconocimiento a mujeres santafesinas
          <br className="hidden sm:block" /> que transforman la provincia.
        </p>

        <div className="flex items-center justify-center gap-1.5 text-white/50 text-sm mb-8">
          <MapPin size={14} className="text-gold/70" />
          <span>La Fluvial · Rosario, Santa Fe</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-sm sm:max-w-none mb-10">
          <a
            href="/postular"
            className="px-8 py-3.5 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5 text-center"
          >
            Postular una líder
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

        {/* Countdown */}
        <div className="w-full border-t border-white/10 pt-8 pb-8">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.25em] mb-4">Faltan</p>
          <Countdown />
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
