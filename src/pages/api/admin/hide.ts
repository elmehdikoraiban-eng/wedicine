import type { APIRoute } from "astro";
import { adminUser, logAction, setHidden } from "@/lib/admin";
import { json, readJson } from "@/lib/api";

// Retirer (ou remettre) une question des pages publiques : { id, hidden }. Admin seulement, noté au journal.
export const POST: APIRoute = async ({ request, cookies }) => {
  const u = await adminUser(cookies);
  if (!u) return json({ error: "forbidden" }, 403);
  const b = await readJson(request);
  const id = Number(b.id);
  if (!Number.isInteger(id) || typeof b.hidden !== "boolean") return json({ error: "invalid" }, 400);
  await setHidden(id, b.hidden);
  await logAction(u, b.hidden ? "A retiré de la page publique" : "A remis sur la page publique", `Question n° ${id}`);
  return json({ ok: true });
};
