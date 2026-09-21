"use client";

import Image from "next/image";
import { ArrowLeft, Clock } from "lucide-react";

// FORMULARIO DESHABILITADO TEMPORALMENTE — habilitar cuando abran las postulaciones
// El código completo del formulario está guardado en git history (commit anterior a este)

export default function PostularPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse at 80% 10%, rgba(196,151,42,0.1) 0%, transparent 50%), #FAF7F0",
      }}
    >
      {/* Header */}
      <div className="bg-charcoal px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm">
          <ArrowLeft size={16} />
          Volver
        </a>
        <Image
          src="/logo-ellas-lideran-white.png"
          alt="Ellas Lideran Santa Fe"
          width={120}
          height={48}
          className="h-8 w-auto"
        />
        <div className="w-16" />
      </div>

      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="mb-10">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Edición 2027
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            Postulá a una <span className="italic text-gold">líder</span>
          </h1>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px w-20 bg-gold/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-20 bg-gold/30" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-sm border border-gold/15">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
            <Clock size={28} className="text-gold" />
          </div>
          <h2 className="font-display text-2xl font-bold text-charcoal mb-3">
            Muy pronto podrás postular a tus líderes
          </h2>
          <p className="text-charcoal/60 max-w-sm mx-auto leading-relaxed">
            Las postulaciones para la edición 2027 abren próximamente.
            Seguinos en Instagram para enterarte cuando estén disponibles.
          </p>
          <a
            href="https://instagram.com/ellaslideransantafe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-colors text-sm"
          >
            @ellaslideransantafe
          </a>
        </div>
      </div>
    </div>
  );
}
