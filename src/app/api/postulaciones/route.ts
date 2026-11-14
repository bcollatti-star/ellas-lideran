import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
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
      contacto_candidata: body.contactoCandidata || null,
      estado: "sin_revisar",
    }]);
    if (error) {
      console.error("[postulaciones] Supabase error:", error.message, error.code);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[postulaciones] Unexpected error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
