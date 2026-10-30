import type { APIRoute } from "astro";
import { addFeedback } from "@/lib/db";
import { fiche } from "@/lib/content/fiches";
import { INTENTS } from "@/lib/content/options";
import { json, readJson } from "@/lib/api";

// Vote « Cette page vous a aidé ? » : { theme, symptom, intent, helpful }. Ouvert à tous, aucune donnée personnelle.
export const POST: APIRoute = async ({ request }) => {
  const b = await readJson(request);
  const theme = String(b.theme ?? ""), symptom = String(b.symptom ?? ""), intent = String(b.intent ?? "");
  if (!fiche(theme, symptom) || !INTENTS.some((i) => i.id === intent) || typeof b.helpful !== "boolean") return json({ error: "invalid" }, 400);
  await addFeedback(theme, symptom, intent, b.helpful);
  return json({ ok: true });
};
