import type { Lang } from "./i18n";
import { LANGS } from "./i18n";
import { pageSlug, type Symptom, type Theme } from "./content/themes";

export const SITE_URL = ((import.meta.env.PUBLIC_SITE_URL as string | undefined) ?? "https://wedicine.vercel.app").replace(/\/$/, "");

// Tant qu'un médecin n'a pas relu le contenu, les pages restent hors des moteurs.
export const CONTENT_REVIEWED = process.env.CONTENT_REVIEWED === "1";

export const qPath = (l: Lang, th: Theme, sy: Symptom, intent: string) => `/${l}/q/${pageSlug(l, th, sy, intent)}`;

export function alternates(th: Theme, sy: Symptom, intent: string) {
  const languages: Record<string, string> = {};
  for (const l of LANGS) languages[l] = `${SITE_URL}${qPath(l, th, sy, intent)}`;
  languages["x-default"] = languages.fr;
  return languages;
}

export const LOCALE: Record<Lang, string> = { fr: "fr-MA", ar: "ar-MA", en: "en" };

export function formatDate(d: string | Date, l: Lang) {
  return new Intl.DateTimeFormat(LOCALE[l], { day: "numeric", month: "long", year: "numeric" }).format(new Date(d));
}
