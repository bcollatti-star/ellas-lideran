import FadeIn from "@/components/FadeIn";

const jurado = [
  "Alejandro Darío Distefano",
  "Carolina Rovetto",
  "Flor Milano",
  "Laura Mustapich",
  "Leila Sosa",
  "Maria Alejandra Gayoso",
  "Maria Cristina Gomez",
  "Melina Zamboni",
  "Melisa Costa",
  "Viko Sanso de la Madrid",
];

export default function OrganizadorasSection() {
  return (
    <>
      {/* Jurado */}
      <section id="jurado" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Especialistas
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
              Jurado <span className="italic text-gold">2026</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-20 bg-gold/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="h-px w-20 bg-gold/30" />
            </div>
            <p className="text-charcoal/60 mt-6 max-w-lg mx-auto">
              Un jurado especializado que seleccionó a 25 de las 50 mujeres líderes del reconocimiento.
            </p>
            <p className="text-gold mt-4 text-base font-semibold italic">
              Muy pronto conoceremos al comité de la nueva edición.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {jurado.map((name, i) => (
              <div
                key={name}
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gold/10 hover:border-gold/40 hover:bg-gold/5 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3">
                  <span className="font-display text-sm font-bold text-gold">
                    {name.split(" ").slice(0, 2).map((n) => n[0]).join("")}
                  </span>
                </div>
                <p className="text-charcoal font-medium text-sm leading-snug">{name}</p>
                <span className="text-gold/30 text-xs mt-1 font-display">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
