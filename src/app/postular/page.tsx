"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { Send, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";

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

interface FormData {
  nombrePostulante: string;
  emailPostulante: string;
  telefonoPostulante: string;
  nombreCandidata: string;
  ciudadCandidata: string;
  ambito: string;
  descripcion: string;
  logros: string;
  instagram: string;
  linkReferencia: string;
}

const initial: FormData = {
  nombrePostulante: "",
  emailPostulante: "",
  telefonoPostulante: "",
  nombreCandidata: "",
  ciudadCandidata: "",
  ambito: "",
  descripcion: "",
  logros: "",
  instagram: "",
  linkReferencia: "",
};

export default function PostularPage() {
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/xlgvwgyl", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _subject: "Nueva postulación Ellas Lideran 2027" }),
      });
      if (res.ok) setSubmitted(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-white border border-gold/20 rounded-xl px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/10 transition-all text-sm";
  const labelClass = "block text-charcoal/70 text-xs font-semibold mb-1.5 tracking-wide uppercase";

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse at 80% 10%, rgba(196,151,42,0.1) 0%, transparent 50%), #FAF7F0",
      }}
    >
      {/* Header */}
      <div className="bg-charcoal px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm">
          <ArrowLeft size={16} />
          Volver
        </a>
        <Image
          src="/logo-ellas-lideran-white.png"
          alt="Ellas Lideran Santa Fe"
          width={120}
          height={48}
          className="h-8 w-auto"
        />
        <div className="w-16" />
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Edición 2027
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            Postulá a una <span className="italic text-gold">líder</span>
          </h1>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px w-20 bg-gold/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-20 bg-gold/30" />
          </div>
          <p className="text-charcoal/60 max-w-md mx-auto">
            Nominá a una mujer santafesina que inspire, transforme y lidere en su ámbito.
            Completá el formulario con la mayor información posible.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gold/15">
            <CheckCircle size={52} className="text-gold mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-charcoal mb-2">
              ¡Postulación enviada!
            </h2>
            <p className="text-charcoal/60 mb-6">
              Gracias por nominar a <strong>{form.nombreCandidata}</strong>. La organización
              revisará su perfil en la etapa de preselección.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-colors text-sm"
            >
              Volver al inicio
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Datos del postulante */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gold/15">
              <h2 className="font-display text-lg font-bold text-charcoal mb-6 pb-3 border-b border-gold/10">
                Tus datos
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Tu nombre completo *</label>
                  <input type="text" required placeholder="Nombre y apellido" value={form.nombrePostulante} onChange={set("nombrePostulante")} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Tu email *</label>
                  <input type="email" required placeholder="tu@email.com" value={form.emailPostulante} onChange={set("emailPostulante")} className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Tu teléfono</label>
                  <input type="tel" placeholder="+54 341..." value={form.telefonoPostulante} onChange={set("telefonoPostulante")} className={inputClass} />
                </div>
              </div>
            </div>

            {/* Datos de la candidata */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gold/15">
              <h2 className="font-display text-lg font-bold text-charcoal mb-6 pb-3 border-b border-gold/10">
                Datos de la candidata
              </h2>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Nombre completo *</label>
                    <input type="text" required placeholder="Nombre y apellido" value={form.nombreCandidata} onChange={set("nombreCandidata")} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Ciudad *</label>
                    <input type="text" required placeholder="Ciudad de Santa Fe" value={form.ciudadCandidata} onChange={set("ciudadCandidata")} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Ámbito de liderazgo *</label>
                  <select required value={form.ambito} onChange={set("ambito")} className={`${inputClass} appearance-none`}>
                    <option value="" disabled>Seleccioná un ámbito</option>
                    {ambitos.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>¿Por qué la postulás? *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Contanos quién es, qué hace y por qué merece ser reconocida..."
                    value={form.descripcion}
                    onChange={set("descripcion")}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className={labelClass}>Principales logros o proyectos</label>
                  <textarea
                    rows={3}
                    placeholder="Mencioná logros concretos, proyectos destacados, impacto en la comunidad..."
                    value={form.logros}
                    onChange={set("logros")}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Instagram de la candidata</label>
                    <input type="text" placeholder="@usuario" value={form.instagram} onChange={set("instagram")} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Link de referencia</label>
                    <input type="url" placeholder="Web, nota, LinkedIn..." value={form.linkReferencia} onChange={set("linkReferencia")} className={inputClass} />
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                <AlertCircle size={15} />
                Hubo un error al enviar. Intentá de nuevo.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-white font-bold rounded-2xl hover:bg-gold-dark disabled:opacity-70 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-gold/20 text-sm"
            >
              {loading ? (
                <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={16} />
                  Enviar postulación
                </>
              )}
            </button>
            <p className="text-charcoal/40 text-xs text-center">
              Al enviar aceptás que la organización use esta información en el proceso de selección.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
