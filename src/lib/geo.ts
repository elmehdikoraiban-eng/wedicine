// Ville du visiteur d'après son IP (en-têtes ajoutés par Vercel), pour le titre de l'accueil.
// Hors Maroc ou sans en-tête : on affiche « Maroc ». ?ville=casablanca permet de tester en local.
import type { Lang } from "@/lib/i18n";
import { CITIES } from "@/lib/content/options";

const ALIASES: Record<string, string> = {
  casablanca: "casablanca", "dar el beida": "casablanca", rabat: "rabat", marrakech: "marrakech", marrakesh: "marrakech",
  fes: "fes", fez: "fes", tanger: "tanger", tangier: "tanger", tangiers: "tanger", agadir: "agadir", meknes: "meknes",
  oujda: "oujda", kenitra: "kenitra", tetouan: "tetouan", tetuan: "tetouan",
};
const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
const COUNTRY = { fr: "Maroc", ar: "المغرب", en: "Morocco" } as const;

export function visitorCity(request: Request, url: URL, lang: Lang): string {
  const forced = url.searchParams.get("ville");
  const country = forced ? "MA" : request.headers.get("x-vercel-ip-country") ?? "";
  let raw = forced ?? request.headers.get("x-vercel-ip-city") ?? "";
  try { raw = decodeURIComponent(raw); } catch { /* en-tête mal encodé : on garde tel quel */ }
  if (country !== "MA" || !raw) return COUNTRY[lang];
  const id = ALIASES[fold(raw)];
  const known = id && CITIES.find((c) => c.id === id);
  if (known) return known.label[lang];
  // Ville marocaine hors liste : nom latin tel quel, sauf en arabe où l'on reste sur le pays.
  return lang === "ar" ? COUNTRY[lang] : raw.replace(/\b\p{L}/gu, (m) => m.toUpperCase());
}
