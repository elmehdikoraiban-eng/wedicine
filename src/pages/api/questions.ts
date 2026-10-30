import type { APIRoute } from "astro";
import { isLang, type Lang } from "@/lib/i18n";
import { currentUser } from "@/lib/auth";
import { insertQuestion, matchAvatarToSex } from "@/lib/db";
import { fiche } from "@/lib/content/fiches";
import { symptom, theme } from "@/lib/content/themes";
import { isUrgent, validate } from "@/lib/triage";
import { json, readJson } from "@/lib/api";

export const POST: APIRoute = async ({ request, cookies }) => {
  const body = await readJson(request);
  const a = validate(body);
  const lang: Lang = typeof body.lang === "string" && isLang(body.lang) ? body.lang : "fr";
  if (!a) return json({ error: "invalid" }, 400);

  const th = theme(a.theme)!;
  const sy = symptom(th, a.symptom)!;
  if (!fiche(th.id, sy.id)) return json({ error: "no-content" }, 404);

  const urgent = isUrgent(a);
  const user = await currentUser(cookies);
  const id = await insertQuestion(
    { ...a, lang, intensity: a.intensity == null ? null : Number(a.intensity), urgent },
    user?.id ?? null,
    false,
  );

  // Urgence : écran d'urgence, jamais de compte. Connecté : la réponse directement.
  // Sinon : pas d'adresse, la conversation affiche le formulaire de compte qui débloque la réponse.
  if (user) await matchAvatarToSex(user.id).catch(() => {});
  const next = urgent || !user ? null : `/${lang}/compte/q/${id}`;
  return json({ id, urgent, next });
};
