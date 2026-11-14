import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = await req.json();
  const { error } = await getSupabaseAdmin().from("postulaciones").insert([{
    nombre_postulante: body.nombrePostulante,
    email_postulante: body.emailPostulante,
    telefono_postulante: body.telefonoPostulante,
    nombre_candidata: body.nombreCandidata,
    ciudad_candidata: body.ciudadCandidata,
    ambito: body.ambito,
    descripcion: body.descripcion,
    logros: body.logros,
    instagram: body.instagram,
    link_referencia: body.linkReferencia,
    estado: "sin_revisar",
  }]);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
