import { AGES, ALERTS, CITIES, DURATIONS, INTENSITIES, INTENTS, WHO, ZONES } from "./content/options";
import { symptom, theme } from "./content/themes";

// Réponses du formulaire. Partagé entre le client (formulaire) et le serveur (API).
export type Answers = {
  who: string;
  theme: string;
  symptom: string;
  zone: string | null;
  intensity: string | null;
  duration: string | null;
  signs: string[];
  age: string | null;
  sex: string | null;
  pregnant: boolean | null;
  city: string | null;
  intent: string;
};

const has = (list: { id: string }[], id: string | null | undefined) => id == null || list.some((o) => o.id === id);

// Vérifie que chaque valeur est bien l'un des choix proposés (aucun texte libre n'est accepté).
export function validate(a: unknown): Answers | null {
  if (!a || typeof a !== "object") return null;
  const x = a as Record<string, unknown>;
  const th = typeof x.theme === "string" ? theme(x.theme) : undefined;
  if (!th) return null;
  const sy = typeof x.symptom === "string" ? symptom(th, x.symptom) : undefined;
  if (!sy) return null;
  const str = (v: unknown) => (typeof v === "string" && v ? v : null);
  const out: Answers = {
    who: str(x.who) ?? "moi",
    theme: th.id,
    symptom: sy.id,
    zone: str(x.zone),
    intensity: str(x.intensity),
    duration: str(x.duration),
    signs: Array.isArray(x.signs) ? x.signs.filter((s): s is string => typeof s === "string").slice(0, 20) : [],
    age: str(x.age),
    sex: str(x.sex),
    pregnant: typeof x.pregnant === "boolean" ? x.pregnant : null,
    city: str(x.city),
    intent: str(x.intent) ?? "grave",
  };
  if (!has(WHO, out.who) || !has(ZONES, out.zone) || !has(INTENSITIES, out.intensity) || !has(DURATIONS, out.duration)) return null;
  if (!has(AGES, out.age) || !has(CITIES, out.city) || !INTENTS.some((i) => i.id === out.intent)) return null;
  if (out.sex && out.sex !== "f" && out.sex !== "m") return null;
  const knownSigns = new Set([...th.signs.map((s) => s.id), ...ALERTS.map((s) => s.id)]);
  out.signs = out.signs.filter((s) => knownSigns.has(s));
  return out;
}

// Un seul signe d'alerte suffit. Les règles sont volontairement simples et prudentes.
export function isUrgent(a: Answers) {
  if (a.signs.some((s) => ALERTS.some((al) => al.id === s))) return true;
  if (a.intensity === "4") return true;
  if (a.theme === "fievre" && a.age === "a0") return true; // fièvre chez un bébé de moins de 3 mois
  return false;
}
