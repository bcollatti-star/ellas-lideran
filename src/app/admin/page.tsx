"use client";

import { useState, useEffect, useCallback } from "react";
import { LogOut, Search, Filter, Download, ChevronDown, ChevronUp, Trash2, CheckCircle, XCircle, Clock } from "lucide-react";
import Image from "next/image";

const AMBITOS = [
  "Todos",
  "Educación y formación",
  "Salud y bienestar",
  "Deporte y vida saludable",
  "Innovación, ciencia y tecnología",
  "Producción, industria y trabajo",
  "Cultura y comunicación",
  "Economía social y cooperativismo",
  "Comunidad y territorio",
  "Seguridad, justicia y derechos humanos",
  "Agroindustria y ruralidad",
  "Liderazgo empresarial y corporativo",
];

const ESTADOS = ["Todos", "sin_revisar", "preseleccionada", "descartada"];

type Postulacion = {
  id: string;
  created_at: string;
  nombre_postulante: string;
  email_postulante: string;
  telefono_postulante: string;
  nombre_candidata: string;
  ciudad_candidata: string;
  ambito: string;
  descripcion: string;
  logros: string;
  instagram: string;
  link_referencia: string;
  estado: string;
  notas: string;
};

const estadoLabel: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  sin_revisar: { label: "Sin revisar", color: "bg-yellow-100 text-yellow-800", icon: <Clock size={12} /> },
  preseleccionada: { label: "Preseleccionada", color: "bg-green-100 text-green-800", icon: <CheckCircle size={12} /> },
  descartada: { label: "Descartada", color: "bg-red-100 text-red-800", icon: <XCircle size={12} /> },
};

// ── Login ──────────────────────────────────────────────────────────────────
function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: pass }),
    });
    setLoading(false);
    if (res.ok) onLogin();
    else setError("Usuario o contraseña incorrectos");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Image src="/logo-ellas-lideran-white.png" alt="Ellas Lideran" width={160} height={64} className="h-12 w-auto mx-auto mb-4" />
          <p className="text-white/40 text-sm">Panel de administración</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
          <div>
            <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">Usuario</label>
            <input
              type="text"
              value={user}
              onChange={e => setUser(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/60 text-sm"
              placeholder="admin"
              required
            />
          </div>
          <div>
            <label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5">Contraseña</label>
            <input
              type="password"
              value={pass}
              onChange={e => setPass(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/60 text-sm"
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p className="text-red-400 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gold text-white font-semibold rounded-xl hover:bg-gold-dark transition-colors disabled:opacity-60 text-sm"
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Main Panel ─────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [data, setData] = useState<Postulacion[]>([]);
  const [search, setSearch] = useState("");
  const [ambitoFilter, setAmbitoFilter] = useState("Todos");
  const [estadoFilter, setEstadoFilter] = useState("Todos");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin-data");
    if (res.status === 401) { setAuthed(false); setLoading(false); return; }
    const json = await res.json();
    setData(json.data || []);
    setAuthed(true);
    setLoading(false);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleLogin = () => { setAuthed(true); fetchData(); };

  const handleLogout = async () => {
    await fetch("/api/admin-logout", { method: "POST" });
    setAuthed(false);
  };

  const updateEstado = async (id: string, estado: string) => {
    await fetch(`/api/postulaciones/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado }),
    });
    setData(d => d.map(p => p.id === id ? { ...p, estado } : p));
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar esta postulación?")) return;
    await fetch(`/api/postulaciones/${id}`, { method: "DELETE" });
    setData(d => d.filter(p => p.id !== id));
  };

  const exportCSV = () => {
    const rows = filtered.map(p => [
      p.nombre_candidata, p.ciudad_candidata, p.ambito, p.estado,
      p.nombre_postulante, p.email_postulante, p.telefono_postulante,
      p.descripcion, p.logros, p.instagram, p.link_referencia,
      new Date(p.created_at).toLocaleDateString("es-AR"),
    ]);
    const header = ["Candidata","Ciudad","Ámbito","Estado","Postulante","Email","Teléfono","Descripción","Logros","Instagram","Link","Fecha"];
    const csv = [header, ...rows].map(r => r.map(c => `"${(c||"").replace(/"/g,'""')}"`).join(",")).join("\n");
    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "postulaciones.csv"; a.click();
  };

  if (authed === null) return <div className="min-h-screen bg-charcoal flex items-center justify-center"><div className="w-6 h-6 border-2 border-gold/40 border-t-gold rounded-full animate-spin" /></div>;
  if (authed === false) return <LoginForm onLogin={handleLogin} />;

  const filtered = data.filter(p => {
    const q = search.toLowerCase();
    const matchSearch = !q || p.nombre_candidata?.toLowerCase().includes(q) || p.nombre_postulante?.toLowerCase().includes(q) || p.ciudad_candidata?.toLowerCase().includes(q);
    const matchAmbito = ambitoFilter === "Todos" || p.ambito === ambitoFilter;
    const matchEstado = estadoFilter === "Todos" || p.estado === estadoFilter;
    return matchSearch && matchAmbito && matchEstado;
  });

  const countByAmbito = AMBITOS.slice(1).map(a => ({ ambito: a, count: data.filter(p => p.ambito === a).length })).filter(x => x.count > 0);
  const countByEstado = { sin_revisar: data.filter(p => p.estado === "sin_revisar").length, preseleccionada: data.filter(p => p.estado === "preseleccionada").length, descartada: data.filter(p => p.estado === "descartada").length };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-charcoal px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logo-ellas-lideran-white.png" alt="Ellas Lideran" width={120} height={48} className="h-8 w-auto" />
          <span className="text-white/30 text-sm hidden sm:block">Panel de administración</span>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
          <LogOut size={15} /> Salir
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <p className="text-3xl font-bold text-charcoal">{data.length}</p>
            <p className="text-gray-400 text-xs mt-1 uppercase tracking-wide">Total</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <p className="text-3xl font-bold text-yellow-600">{countByEstado.sin_revisar}</p>
            <p className="text-gray-400 text-xs mt-1 uppercase tracking-wide">Sin revisar</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <p className="text-3xl font-bold text-green-600">{countByEstado.preseleccionada}</p>
            <p className="text-gray-400 text-xs mt-1 uppercase tracking-wide">Preseleccionadas</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <p className="text-3xl font-bold text-red-500">{countByEstado.descartada}</p>
            <p className="text-gray-400 text-xs mt-1 uppercase tracking-wide">Descartadas</p>
          </div>
        </div>

        {/* Por ámbito */}
        {countByAmbito.length > 0 && (
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Postulaciones por ámbito</p>
            <div className="flex flex-wrap gap-2">
              {countByAmbito.sort((a,b) => b.count - a.count).map(({ ambito, count }) => (
                <button key={ambito} onClick={() => setAmbitoFilter(ambito === ambitoFilter ? "Todos" : ambito)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${ambitoFilter === ambito ? "bg-gold text-white" : "bg-gray-100 text-gray-600 hover:bg-gold/10"}`}>
                  {ambito} <span className="font-bold">{count}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar por nombre, ciudad..."
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gold/50"
            />
          </div>
          <select value={estadoFilter} onChange={e => setEstadoFilter(e.target.value)}
            className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-gold/50 bg-white">
            {ESTADOS.map(e => <option key={e} value={e}>{e === "Todos" ? "Todos los estados" : estadoLabel[e]?.label}</option>)}
          </select>
          <button onClick={exportCSV} className="flex items-center gap-2 px-4 py-2.5 bg-charcoal text-white text-sm rounded-xl hover:bg-charcoal/80 transition-colors whitespace-nowrap">
            <Download size={14} /> Exportar CSV
          </button>
        </div>

        <p className="text-gray-400 text-xs mb-3">{filtered.length} postulación{filtered.length !== 1 ? "es" : ""}</p>

        {/* List */}
        {loading ? (
          <div className="text-center py-16 text-gray-400">Cargando...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">No hay postulaciones que coincidan.</div>
        ) : (
          <div className="space-y-3">
            {filtered.map(p => {
              const est = estadoLabel[p.estado] || estadoLabel.sin_revisar;
              const isOpen = expanded === p.id;
              return (
                <div key={p.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-4 cursor-pointer" onClick={() => setExpanded(isOpen ? null : p.id)}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-semibold text-charcoal text-sm">{p.nombre_candidata}</p>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${est.color}`}>{est.icon}{est.label}</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-0.5">{p.ambito} · {p.ciudad_candidata} · {new Date(p.created_at).toLocaleDateString("es-AR")}</p>
                    </div>
                    {isOpen ? <ChevronUp size={16} className="text-gray-400 flex-shrink-0" /> : <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />}
                  </div>

                  {isOpen && (
                    <div className="border-t border-gray-100 px-5 py-5 space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Postulada por</p>
                          <p className="text-charcoal font-medium">{p.nombre_postulante}</p>
                          <p className="text-gray-500">{p.email_postulante}</p>
                          {p.telefono_postulante && <p className="text-gray-500">{p.telefono_postulante}</p>}
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Candidata</p>
                          {p.instagram && <p className="text-gray-500">{p.instagram}</p>}
                          {p.link_referencia && <a href={p.link_referencia} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline text-xs break-all">{p.link_referencia}</a>}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">¿Por qué la postula?</p>
                        <p className="text-sm text-charcoal/80 leading-relaxed">{p.descripcion}</p>
                      </div>
                      {p.logros && (
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Logros</p>
                          <p className="text-sm text-charcoal/80 leading-relaxed">{p.logros}</p>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                        <button onClick={() => updateEstado(p.id, "preseleccionada")} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${p.estado === "preseleccionada" ? "bg-green-500 text-white" : "bg-green-100 text-green-700 hover:bg-green-200"}`}>
                          <CheckCircle size={12} /> Preseleccionada
                        </button>
                        <button onClick={() => updateEstado(p.id, "sin_revisar")} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${p.estado === "sin_revisar" ? "bg-yellow-500 text-white" : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"}`}>
                          <Clock size={12} /> Sin revisar
                        </button>
                        <button onClick={() => updateEstado(p.id, "descartada")} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${p.estado === "descartada" ? "bg-red-500 text-white" : "bg-red-100 text-red-700 hover:bg-red-200"}`}>
                          <XCircle size={12} /> Descartada
                        </button>
                        <button onClick={() => handleDelete(p.id)} className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-600 transition-colors">
                          <Trash2 size={12} /> Eliminar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
