import type { APIRoute } from "astro";
import { currentUser } from "@/lib/auth";
import { setPublic } from "@/lib/db";
import { json, readJson } from "@/lib/api";

export const POST: APIRoute = async ({ request, cookies }) => {
  const user = await currentUser(cookies);
  if (!user) return json({ error: "auth" }, 401);
  const b = await readJson(request);
  const id = Number(b.id);
  // { mode: "named" | "anonymous" | "private" } ; l'ancien { isPublic } reste accepté.
  const mode = b.mode === "named" || b.mode === "anonymous" || b.mode === "private" ? b.mode
    : typeof b.isPublic === "boolean" ? (b.isPublic ? "named" : "private") : null;
  if (!Number.isInteger(id) || !mode) return json({ error: "invalid" }, 400);
  await setPublic(id, user.id, mode);
  return json({ ok: true });
};
