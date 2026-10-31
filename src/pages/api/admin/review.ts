import type { APIRoute } from "astro";
import { adminUser, logAction, setReview } from "@/lib/admin";
import { fiche } from "@/lib/content/fiches";
import { theme as getTheme } from "@/lib/content/themes";
import { json, readJson } from "@/lib/api";

// Relecture médecin d'une fiche : { theme, symptom, doctor } valide, { doctor: null } annule. Noté au journal.
export const POST: APIRoute = async ({ request, cookies }) => {
  const u = await adminUser(cookies);
  if (!u) return json({ error: "forbidden" }, 403);
  const b = await readJson(request);
  const theme = String(b.theme ?? ""), symptom = String(b.symptom ?? "");
  const doctor = b.doctor === null ? null : String(b.doctor ?? "").trim().slice(0, 80);
  if (!fiche(theme, symptom) || doctor === "") return json({ error: "invalid" }, 400);
  await setReview(theme, symptom, doctor);
  const th = getTheme(theme), sy = th?.symptoms.find((s) => s.id === symptom);
  await logAction(u, doctor ? `A validé la fiche (${doctor})` : "A annulé la validation", `${th?.label.fr ?? theme} · ${sy?.label.fr ?? symptom}`);
  return json({ ok: true });
};
