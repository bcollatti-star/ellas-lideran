import { MapPin, Mail } from "lucide-react";
import Image from "next/image";
import InstagramIcon from "@/components/InstagramIcon";

const navLinks = [
  { label: "Sobre el evento", href: "#sobre" },
  { label: "Ámbitos", href: "#ambitos" },
  { label: "Proceso", href: "#fases" },
  { label: "Agenda", href: "#agenda" },
  { label: "Jurado", href: "#jurado" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Inscripción", href: "#inscripcion" },
];

export default function FooterSection() {
  return (
    <footer className="bg-charcoal text-white px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo-ellas-lideran-white.png"
                alt="Ellas Lideran Santa Fe"
                width={160}
                height={64}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              El reconocimiento provincial a mujeres santafesinas que transforman la provincia con
              su compromiso, impacto y liderazgo.
            </p>
            <a
              href="https://instagram.com/ellaslideransantafe"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-gold/70 text-sm hover:text-gold transition-colors"
            >
              <InstagramIcon size={16} />
              @ellaslideransantafe
            </a>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-5">Secciones</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 text-sm hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event info */}
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-5">El evento</p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm font-medium">Salón Metropolitano</p>
                  <p className="text-white/40 text-sm">Rosario, Santa Fe</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">09 de Marzo · 2027</p>
                  <p className="text-white/40 text-sm">18:00 hs</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/40 text-sm">ellaslideransantafe@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Organizers credit */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/30 text-xs mb-2">Creado y organizado por</p>
              <p className="text-white/60 text-sm">
                Roxana Wolojviansky · Roxana Di Carlo
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-white/30 text-xs">
          <p>© 2027 Ellas Lideran Santa Fe. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            50 mujeres · 1 provincia · Un legado
          </p>
        </div>
      </div>
    </footer>
  );
}
