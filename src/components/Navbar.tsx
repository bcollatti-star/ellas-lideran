"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre el Evento", href: "#sobre" },
  { label: "Ámbitos", href: "#ambitos" },
  { label: "Proceso", href: "#fases" },
  { label: "Agenda", href: "#agenda" },
  { label: "Jurado", href: "#jurado" },
  { label: "Sponsors", href: "#sponsors" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span
            className={`font-display text-xl font-bold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            Ellas <span className="text-gold">Lideran</span>
          </span>
          <span
            className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
              scrolled ? "text-gold" : "text-gold-light"
            }`}
          >
            Santa Fe
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-charcoal/80" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#inscripcion"
            className="ml-2 px-5 py-2 bg-gold text-white text-sm font-semibold rounded-full hover:bg-gold-dark transition-colors duration-200"
          >
            Inscribirte
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? "text-charcoal" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gold/20 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-charcoal/80 font-medium py-1 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#inscripcion"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2 bg-gold text-white text-sm font-semibold rounded-full text-center hover:bg-gold-dark transition-colors"
          >
            Inscribirte
          </a>
        </div>
      )}
    </nav>
  );
}
