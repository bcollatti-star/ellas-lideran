"use client";

import FadeIn from "@/components/FadeIn";

export default function PrensaSection() {
  return (
    <section id="prensa" className="py-24 px-6" style={{
      background: "radial-gradient(ellipse at 70% 50%, rgba(196,151,42,0.07) 0%, transparent 60%), #FAF7F0",
    }}>
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Cobertura
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
              En los <span className="italic text-gold">medios</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-20 bg-gold/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="h-px w-20 bg-gold/30" />
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={100}>
          <div className="max-w-lg mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gold/15 bg-white">
              <iframe
                src="https://www.instagram.com/reel/DVHXaArkSH-/embed/"
                width="100%"
                style={{ border: 0, display: "block", aspectRatio: "9/16", maxHeight: "600px" }}
                allowFullScreen
                loading="lazy"
                title="Cobertura mediática Ellas Lideran 2026"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
