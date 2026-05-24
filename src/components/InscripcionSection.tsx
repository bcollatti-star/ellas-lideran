"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const categorias = [
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

type Tipo = "asistente" | "postulante";

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  organizacion: string;
  categoria: string;
  tipo: Tipo;
}

const initial: FormData = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  organizacion: "",
  categoria: "",
  tipo: "asistente",
};

export default function InscripcionSection() {
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/xlgvwgyl", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          apellido: form.apellido,
          email: form.email,
          telefono: form.telefono,
          organizacion: form.organizacion,
          tipo: form.tipo,
          categoria: form.categoria,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all text-sm";

  const labelClass = "block text-white/70 text-xs font-semibold mb-1.5 tracking-wide";

  return (
    <section
      id="inscripcion"
      className="py-24 px-6"
      style={{
        background:
          "radial-gradient(ellipse at 70% 30%, rgba(196,151,42,0.25) 0%, transparent 60%), #C4972A",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-white/70 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Sumate al evento
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            Inscripción
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20 bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <div className="h-px w-20 bg-white/30" />
          </div>
          <p className="text-white/70 mt-6">
            9 de Marzo 2027 · Salón Metropolitano, Rosario
          </p>
        </div>

        {submitted ? (
          <div className="bg-white/10 border border-white/20 rounded-3xl p-12 text-center">
            <CheckCircle size={48} className="text-white mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              ¡Muchas gracias, {form.nombre}!
            </h3>
            <p className="text-white/70">
              Recibimos tu inscripción. Te contactaremos pronto con más información.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-10"
          >
            {/* Tipo */}
            <div className="mb-6">
              <p className={labelClass}>Tipo de inscripción</p>
              <div className="flex gap-4">
                {(["asistente", "postulante"] as Tipo[]).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, tipo: t }))}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all ${
                      form.tipo === t
                        ? "bg-white text-gold shadow-md"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    {t === "asistente" ? "Quiero asistir" : "Postular candidata"}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>Nombre *</label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={set("nombre")}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Apellido *</label>
                <input
                  type="text"
                  required
                  placeholder="Tu apellido"
                  value={form.apellido}
                  onChange={set("apellido")}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={set("email")}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Teléfono</label>
                <input
                  type="tel"
                  placeholder="+54 341..."
                  value={form.telefono}
                  onChange={set("telefono")}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className={labelClass}>Organización / Empresa</label>
              <input
                type="text"
                placeholder="¿Dónde trabajás o tu organización?"
                value={form.organizacion}
                onChange={set("organizacion")}
                className={inputClass}
              />
            </div>

            {form.tipo === "postulante" && (
              <div className="mb-4">
                <label className={labelClass}>Ámbito de liderazgo *</label>
                <select
                  required={form.tipo === "postulante"}
                  value={form.categoria}
                  onChange={set("categoria")}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled className="text-charcoal">
                    Seleccioná un ámbito
                  </option>
                  {categorias.map((c) => (
                    <option key={c} value={c} className="text-charcoal">
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 bg-white text-gold font-bold rounded-xl hover:bg-white/90 disabled:opacity-70 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
            >
              {loading ? (
                <span className="inline-block w-4 h-4 border-2 border-gold/40 border-t-gold rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={16} />
                  {form.tipo === "asistente" ? "Confirmar inscripción" : "Enviar postulación"}
                </>
              )}
            </button>

            {error && (
              <div className="flex items-center justify-center gap-2 mt-4 text-white/80 text-sm">
                <AlertCircle size={15} />
                Hubo un error al enviar. Intentá de nuevo.
              </div>
            )}
            <p className="text-white/40 text-xs text-center mt-4">
              Al enviar aceptás recibir información sobre el evento.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
