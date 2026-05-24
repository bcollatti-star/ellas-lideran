"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

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
        <a href="#hero" className="flex items-center">
          <Image
            src={scrolled ? "/logo-ellas-lideran-gold.png" : "/logo-ellas-lideran-white.png"}
            alt="Ellas Lideran Santa Fe"
            width={140}
            height={56}
            className="h-9 w-auto"
            priority
          />
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
            href="/postular"
            className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
              scrolled ? "text-charcoal/80" : "text-white/90"
            }`}
          >
            Postular
          </a>
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
          <span className={`block transition-all duration-300 ${open ? "rotate-90 opacity-0 absolute" : "rotate-0 opacity-100"}`}>
            <Menu size={24} />
          </span>
          <span className={`block transition-all duration-300 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0 absolute"}`}>
            <X size={24} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gold/20 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-charcoal/80 font-medium py-2 hover:text-gold transition-colors border-b border-gold/10 last:border-0"
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-8px)",
                transition: "color 0.2s, opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/postular"
            onClick={() => setOpen(false)}
            className="text-charcoal/80 font-medium py-2 hover:text-gold transition-colors border-b border-gold/10"
            style={{
              transitionDelay: open ? `${links.length * 40}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateX(0)" : "translateX(-8px)",
              transition: "color 0.2s, opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            Postular
          </a>
          <a
            href="#inscripcion"
            onClick={() => setOpen(false)}
            className="mt-3 px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded-full text-center hover:bg-gold-dark transition-colors"
            style={{
              transitionDelay: open ? `${(links.length + 1) * 40}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(8px)",
              transition: "background-color 0.2s, opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            Inscribirte
          </a>
        </div>
      </div>
    </nav>
  );
}
