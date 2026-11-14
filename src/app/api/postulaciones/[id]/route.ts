import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabaseAdmin } from "@/lib/supabase";

async function isAdmin() {
  const store = await cookies();
  return store.get("admin_session")?.value === "authenticated";
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdmin()) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  const { id } = await params;
  const body = await req.json();
  const { error } = await supabaseAdmin
    .from("postulaciones")
    .update({ estado: body.estado, notas: body.notas })
    .eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdmin()) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  const { id } = await params;
  const { error } = await supabaseAdmin.from("postulaciones").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
