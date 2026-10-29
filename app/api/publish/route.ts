import { NextResponse } from "next/server";
import { currentUser } from "@/lib/auth";
import { setPublic } from "@/lib/db";

export async function POST(req: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "auth" }, { status: 401 });
  const b = await req.json().catch(() => ({}));
  const id = Number(b.id);
  if (!Number.isInteger(id) || typeof b.isPublic !== "boolean") return NextResponse.json({ error: "invalid" }, { status: 400 });
  await setPublic(id, user.id, b.isPublic);
  return NextResponse.json({ ok: true });
}
