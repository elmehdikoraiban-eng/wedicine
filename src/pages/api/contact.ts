import type { APIRoute } from "astro";
import { isLang } from "@/lib/i18n";
import { currentUser } from "@/lib/auth";
import { addMessage, SUBJECTS } from "@/lib/contact";
import { json, readJson } from "@/lib/api";

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

// Formulaire « Nous contacter » : { lang, name, contact, subject, message, consent, website (piège à robots) }.
export const POST: APIRoute = async ({ request, cookies }) => {
  const b = await readJson(request);
  if (clean(b.website, 200)) return json({ ok: true }); // robot : on fait semblant
  const lang = typeof b.lang === "string" && isLang(b.lang) ? b.lang : "fr";
  const name = clean(b.name, 40), contact = clean(b.contact, 80), message = clean(b.message, 2000);
  const subject = SUBJECTS.some((s) => s.id === b.subject) ? String(b.subject) : "";
  if (!name || contact.length < 5 || !subject || message.length < 5 || b.consent !== true) return json({ error: "invalid" }, 400);
  const user = await currentUser(cookies);
  if (!(await addMessage({ userId: user?.id ?? null, lang, name, contact, subject, message }))) return json({ error: "limit" }, 429);
  return json({ ok: true });
};
