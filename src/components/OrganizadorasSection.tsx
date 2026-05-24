import Image from "next/image";
import InstagramIcon from "@/components/InstagramIcon";
import FadeIn from "@/components/FadeIn";

const organizadoras = [
  {
    name: "Roxana Wolojviansky",
    handle: "@roxytips.ok",
    role: "Co-creadora y organizadora",
    photo: "/roxana-wolojviansky.png",
    initials: "RW",
  },
  {
    name: "Roxana Di Carlo",
    handle: "@roxana.dicarlo",
    role: "Co-creadora y organizadora",
    photo: "/roxana-dicarlo.png",
    initials: "RD",
  },
];

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
      {/* Organizadoras */}
      <section
        id="organizadoras"
        className="py-24 px-6"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(196,151,42,0.12) 0%, transparent 60%), #1C1C1C",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Creación y organización
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Las <span className="italic text-gold">organizadoras</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-20 bg-gold/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="h-px w-20 bg-gold/30" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {organizadoras.map(({ name, handle, role, photo, initials }, i) => (
              <FadeIn key={name} delay={i * 120} direction="up">
              <div
                className="group flex flex-col items-center text-center bg-white/5 border border-white/10 hover:border-gold/40 rounded-3xl overflow-hidden transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={photo}
                    alt={name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal/80 to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-1">{name}</h3>
                  <p className="text-white/40 text-sm mb-4">{role}</p>
                  <a
                    href={`https://instagram.com/${handle.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-gold/70 text-sm hover:text-gold transition-colors"
                  >
                    <InstagramIcon size={14} />
                    {handle}
                  </a>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>

          {/* Fundación Pensar */}
          <FadeIn delay={250}>
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl px-8 py-5">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src="/logo-fp.png"
                  alt="Fundación Pensar Santa Fe"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full p-1 mix-blend-screen"
                />
              </div>
              <div>
                <p className="text-white font-semibold">Equipo Fundación Pensar</p>
                <p className="text-white/40 text-sm mb-3">Santa Fe</p>
                <a
                  href="https://instagram.com/fpsantafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gold/70 text-sm hover:text-gold transition-colors"
                >
                  <InstagramIcon size={14} />
                  @fpsantafe
                </a>
              </div>
            </div>
          </div>
          </FadeIn>

          {/* Tagline */}
          <FadeIn delay={100}>
          <div className="text-center mt-16 border-t border-white/10 pt-12">
            <p className="font-display text-2xl sm:text-3xl text-white/80 italic">
              "50 mujeres. 1 provincia.
            </p>
            <p className="font-display text-2xl sm:text-3xl text-gold italic mb-2">
              Un legado que inspira a miles."
            </p>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Jurado */}
      <section id="jurado" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Especialistas
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
              El <span className="italic text-gold">Jurado</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-20 bg-gold/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="h-px w-20 bg-gold/30" />
            </div>
            <p className="text-charcoal/60 mt-6 max-w-lg mx-auto">
              Un jurado especializado que selecciona a 25 de las 50 mujeres líderes del reconocimiento.
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
