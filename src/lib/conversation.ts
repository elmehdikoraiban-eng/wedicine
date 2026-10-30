import { UI, t, type Lang, type UIKey } from "./i18n";
import { AGES, ALERTS, CITIES, DURATIONS, INTENSITIES, INTENTS, WHO, ZONES, type Option } from "./content/options";
import { THEMES, type Theme } from "./content/themes";
import type { QuestionRow } from "./db";

// Rejoue la conversation à partir d'une question enregistrée : chaque question de Wedicine,
// dans sa formulation (pour soi, un enfant, un proche), et la réponse touchée par le patient.
// Une réponse enregistrée vaut question posée : le questionnaire efface ce qui suit un retour en arrière.
const QUESTION = {
  who: "cWho", theme: "cTheme", symptom: "cSymptom", zone: "cZone", intensity: "cIntensity", duration: "cDuration",
  signs: "cSigns", age: "cAge", sex: "cSex", pregnant: "cPregnant", city: "cCity", intent: "cIntent",
} as const;
export type Step = keyof typeof QUESTION;

export function questionText(lang: Lang, step: Step, who: string) {
  const variant = who === "enfant" ? "Child" : who === "proche" ? "Other" : "";
  const k = `${QUESTION[step]}${variant}`;
  return t(lang, (k in UI ? k : QUESTION[step]) as UIKey);
}

export function exchange(lang: Lang, q: QuestionRow, th: Theme): { q: string; a: string }[] {
  const lbl = (list: Option[], id: string | null | undefined) => list.find((o) => o.id === id)?.label[lang] ?? "";
  const sep = lang === "ar" ? "، " : ", ";
  const intensity = q.intensity == null ? null : String(q.intensity);
  const rows: [Step, string | null][] = [
    ["who", lbl(WHO, q.who)],
    ["theme", lbl(THEMES, q.theme)],
    ["symptom", lbl(th.symptoms, q.symptom)],
    ["zone", q.zone ? lbl(ZONES, q.zone) : null],
    ["intensity", intensity ? lbl(INTENSITIES, intensity) : null],
    ["duration", q.duration ? lbl(DURATIONS, q.duration) : null],
    ["signs", th.signs.length || th.alerts.length ? (q.signs?.length ? q.signs.map((id) => lbl([...th.signs, ...ALERTS], id)).filter(Boolean).join(sep) : t(lang, "noneSigns")) : null],
    ["age", q.age ? lbl(AGES, q.age) : null],
    ["sex", q.sex ? t(lang, q.sex === "f" ? "female" : "male") : null],
    ["pregnant", q.pregnant == null ? null : t(lang, q.pregnant ? "yes" : "no")],
    ["city", q.city ? lbl(CITIES, q.city) : null],
    ["intent", lbl(INTENTS, q.intent)],
  ];
  return rows.filter((r): r is [Step, string] => !!r[1]).map(([s, a]) => ({ q: questionText(lang, s, q.who), a }));
}
