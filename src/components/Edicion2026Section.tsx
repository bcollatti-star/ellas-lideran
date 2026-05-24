"use client";

export default function Edicion2026Section() {
  return (
    <section
      id="edicion2026"
      className="py-24 px-6"
      style={{
        background:
          "radial-gradient(ellipse at 20% 60%, rgba(196,151,42,0.15) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, rgba(123,94,167,0.08) 0%, transparent 55%), #FAF7F0",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Historia
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
            Edición <span className="italic text-gold">2026</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20 bg-gold/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-20 bg-gold/30" />
          </div>
          <p className="text-charcoal/60 mt-6 max-w-2xl mx-auto text-lg">
            Revivimos la primera edición de Ellas Lideran, donde 50 mujeres santafesinas fueron
            reconocidas por transformar la provincia con su liderazgo, compromiso y visión.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-gold/20">
              <iframe
                src="https://www.instagram.com/reel/DV8xVndAKp9/embed/"
                className="w-full"
                style={{ height: "560px", border: "none" }}
                scrolling="no"
                allowTransparency={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Ellas Lideran 2026 - Reel"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">
                09 de Marzo · 2026
              </p>
              <h3 className="font-display text-3xl font-bold text-charcoal mb-4">
                Una noche que marcó historia
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                En la primera edición de Ellas Lideran, la provincia de Santa Fe celebró a 50 mujeres
                extraordinarias que, desde sus distintos ámbitos, trabajan cada día para construir
                una comunidad más justa, inclusiva y próspera.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                La ceremonia reunió a líderes, referentes, medios y familias en un encuentro único
                que inspiró a miles y demostró que el liderazgo femenino transforma realidades.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { value: "100", label: "Mujeres reconocidas" },
                { value: "+1000", label: "Postuladas recibidas" },
                { value: "12", label: "Ámbitos de liderazgo" },
                { value: "1", label: "Noche histórica" },
                { value: "11", label: "Menciones especiales" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl px-5 py-4 border border-gold/15 shadow-sm text-center"
                >
                  <p className="font-display text-3xl font-bold text-gold">{value}</p>
                  <p className="text-charcoal/60 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>

            <a
              href="https://instagram.com/ellaslideransantafe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-gold/20 text-sm"
            >
              Ver más en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
