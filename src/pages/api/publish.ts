import type { APIRoute } from "astro";
import { currentUser } from "@/lib/auth";
import { setPublic } from "@/lib/db";
import { json, readJson } from "@/lib/api";

export const POST: APIRoute = async ({ request, cookies }) => {
  const user = await currentUser(cookies);
  if (!user) return json({ error: "auth" }, 401);
  const b = await readJson(request);
  const id = Number(b.id);
  if (!Number.isInteger(id) || typeof b.isPublic !== "boolean") return json({ error: "invalid" }, 400);
  await setPublic(id, user.id, b.isPublic);
  return json({ ok: true });
};
