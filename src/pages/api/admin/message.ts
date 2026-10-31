import type { APIRoute } from "astro";
import { adminUser, logAction } from "@/lib/admin";
import { setHandled } from "@/lib/contact";
import { json, readJson } from "@/lib/api";

// Message de contact traité (ou remis à traiter) : { id, handled }. Admin seulement, noté au journal.
export const POST: APIRoute = async ({ request, cookies }) => {
  const u = await adminUser(cookies);
  if (!u) return json({ error: "forbidden" }, 403);
  const b = await readJson(request);
  const id = Number(b.id);
  if (!Number.isInteger(id) || typeof b.handled !== "boolean") return json({ error: "invalid" }, 400);
  await setHandled(id, b.handled);
  await logAction(u, b.handled ? "A traité le message" : "A remis le message à traiter", `Message n° ${id}`);
  return json({ ok: true });
};
