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

// « il y a 2 heures », « hier »… dans la langue de la page.
export function timeAgo(d: string | Date, l: Lang, now = Date.now()) {
  const sec = Math.round((new Date(d).getTime() - now) / 1000);
  const rtf = new Intl.RelativeTimeFormat(LOCALE[l], { numeric: "auto" });
  const steps: [Intl.RelativeTimeFormatUnit, number][] = [["minute", 60], ["hour", 3600], ["day", 86400], ["week", 604800], ["month", 2592000], ["year", 31536000]];
  if (Math.abs(sec) < 60) return rtf.format(0, "second");
  let unit: Intl.RelativeTimeFormatUnit = "minute", size = 60;
  for (const [u, s] of steps) { if (Math.abs(sec) >= s) { unit = u; size = s; } }
  return rtf.format(Math.round(sec / size), unit);
}

const TZ = "Africa/Casablanca";
// « Aujourd'hui, 20:52 » ou « 30 octobre 2026, 20:52 », à l'heure du Maroc.
export function whenLabel(d: string | Date, l: Lang, today: string, now = new Date()) {
  const day = (x: Date) => new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(x);
  const date = new Date(d);
  const time = new Intl.DateTimeFormat(LOCALE[l], { timeZone: TZ, hour: "2-digit", minute: "2-digit", hour12: false }).format(date);
  const when = day(date) === day(now) ? today : new Intl.DateTimeFormat(LOCALE[l], { timeZone: TZ, day: "numeric", month: "long", year: "numeric" }).format(date);
  return `${when}, ${time}`;
}

// Soir à partir de 18 h (pour « Bonsoir »).
export function isEvening(now = new Date()) {
  const h = Number(new Intl.DateTimeFormat("en", { timeZone: TZ, hour: "numeric", hour12: false }).format(now));
  return h >= 18 || h < 5;
}
