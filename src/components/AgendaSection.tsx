import { Clock } from "lucide-react";

const agenda = [
  {
    time: "18:00",
    title: "Apertura y bienvenida",
    description: "Recepción de asistentes e invitadas. Palabras de apertura de las organizadoras.",
    highlight: false,
  },
  {
    time: "18:30",
    title: "Presentación del proyecto",
    description: "Historia, misión y visión de Ellas Lideran Santa Fe. Presentación del proceso de elección.",
    highlight: false,
  },
  {
    time: "19:00",
    title: "Ceremonia de reconocimiento · Primera parte",
    description: "Reconocimiento a líderes en los ámbitos de Educación, Salud, Ciencia, Tecnología, Producción y Comunicación.",
    highlight: true,
  },
  {
    time: "20:00",
    title: "Pausa · Cocktail y networking",
    description: "Momento de encuentro, conexión y celebración entre las líderes y asistentes.",
    highlight: false,
  },
  {
    time: "20:30",
    title: "Ceremonia de reconocimiento · Segunda parte",
    description: "Reconocimiento en los ámbitos de Deporte, Economía, Ruralidad, Comunidad, Justicia y Liderazgo empresarial.",
    highlight: true,
  },
  {
    time: "21:30",
    title: "Premios especiales del jurado",
    description: "Reconocimientos especiales otorgados por el jurado especializado a trayectorias destacadas.",
    highlight: true,
  },
  {
    time: "22:00",
    title: "Palabras de las líderes",
    description: "Mensaje de las 50 mujeres reconocidas. Reflexiones sobre el liderazgo femenino en Santa Fe.",
    highlight: false,
  },
  {
    time: "22:30",
    title: "Cierre y brindis",
    description: "Brindis final para celebrar a las 50 mujeres que transforman la provincia.",
    highlight: false,
  },
];

export default function AgendaSection() {
  return (
    <section id="agenda" className="bg-cream py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            9 de marzo 2027
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
            Agenda del <span className="italic text-gold">evento</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20 bg-gold/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-20 bg-gold/30" />
          </div>
          <p className="text-charcoal/60 mt-6">
            Conducción: <span className="font-semibold text-charcoal">Juan Junco</span> &{" "}
            <span className="font-semibold text-charcoal">Analía Bocassi</span>
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[52px] sm:left-[72px] top-0 bottom-0 w-px bg-gold/20" />

          <div className="space-y-4">
            {agenda.map(({ time, title, description, highlight }) => (
              <div key={time} className="relative flex gap-6 sm:gap-10">
                {/* Time */}
                <div className="flex-shrink-0 w-24 sm:w-28 text-right">
                  <span className="font-display text-sm font-semibold text-gold">{time}</span>
                </div>

                {/* Dot */}
                <div
                  className={`absolute left-[48px] sm:left-[68px] top-1.5 w-2 h-2 rounded-full border-2 ${
                    highlight
                      ? "bg-gold border-gold"
                      : "bg-cream border-gold/40"
                  }`}
                />

                {/* Content */}
                <div
                  className={`flex-1 pb-6 ${
                    highlight
                      ? "bg-white rounded-2xl px-5 py-4 border border-gold/20 shadow-sm"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {highlight && <Clock size={14} className="text-gold flex-shrink-0" />}
                    <h3
                      className={`font-semibold text-sm ${
                        highlight ? "text-charcoal" : "text-charcoal/80"
                      }`}
                    >
                      {title}
                    </h3>
                  </div>
                  <p className="text-charcoal/50 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
