const ambitos = [
  "Educación",
  "Salud",
  "Ciencia",
  "Tecnología e innovación",
  "Producción",
  "Comunicación",
  "Deporte",
  "Economía",
  "Ruralidad",
  "Comunidad y territorio",
  "Justicia y Derechos Humanos",
  "Liderazgo empresarial",
];

export default function AmbitosSection() {
  return (
    <section id="ambitos" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Categorías
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
            Ámbitos de{" "}
            <span className="italic text-gold">liderazgo</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20 bg-gold/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-20 bg-gold/30" />
          </div>
          <p className="text-charcoal/60 mt-6 max-w-xl mx-auto">
            Reconocemos el liderazgo en doce ámbitos que reflejan la diversidad y la riqueza de la
            provincia de Santa Fe.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {ambitos.map((ambito, i) => (
            <div
              key={ambito}
              className="group relative border border-gold/20 rounded-2xl px-5 py-6 text-center hover:border-gold hover:bg-gold/5 transition-all duration-200 cursor-default"
            >
              <div className="w-6 h-0.5 bg-gold/30 mx-auto mb-3 group-hover:bg-gold group-hover:w-8 transition-all duration-200" />
              <span className="text-charcoal/80 font-medium text-sm leading-snug group-hover:text-charcoal transition-colors">
                {ambito}
              </span>
              <span className="absolute top-3 right-3 text-gold/20 font-display text-xs font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
