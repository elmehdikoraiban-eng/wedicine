// Données de l'espace patient, partagées par toutes les pages /compte/*.
import type { AstroGlobal } from "astro";
import { t, type Lang } from "@/lib/i18n";
import { currentUser, publicName } from "@/lib/auth";
import { accountById, avatarOf, helpedCount, matchAvatarToSex, questionsForUser, type QuestionRow } from "@/lib/db";
import { symptom, theme, type Theme } from "@/lib/content/themes";
import { AGES, CITIES, DURATIONS, WHO } from "@/lib/content/options";

// Rubriques de l'espace patient (ordre du menu). L'id sert aussi de chemin : /compte/<id>.
export const ACCOUNT_PAGES = [
  { id: "", icon: "House", key: "accHome" },
  { id: "questions", icon: "MessageCircleQuestion", key: "myQuestions" },
  { id: "infos", icon: "IdCard", key: "accIdentity" },
  { id: "sante", icon: "HeartPulse", key: "accHealth" },
  { id: "confidentialite", icon: "ShieldCheck", key: "accPrivacyTitle" },
] as const;
export type AccountPage = (typeof ACCOUNT_PAGES)[number]["id"];

// Titre court d'une question, pour la barre latérale : « Fièvre, 1 à 3 jours », « Maux de tête, mon enfant ».
export function shortTitle(lang: Lang, q: QuestionRow, th: Theme) {
  const low = (x: string) => (lang === "ar" ? x : x.toLowerCase());
  const extra = q.who !== "moi" ? WHO.find((w) => w.id === q.who)?.label[lang] : DURATIONS.find((d) => d.id === q.duration)?.label[lang];
  return extra ? `${th.label[lang]}, ${low(extra)}` : th.label[lang];
}

export async function loadAccount(Astro: AstroGlobal, lang: Lang) {
  const user = await currentUser(Astro.cookies);
  if (!user) return null;
  await matchAvatarToSex(user.id).catch(() => {}); // rattrape les comptes créés avant cette règle
  const acc = await accountById(user.id);
  if (!acc) return null;
  const all = await questionsForUser(user.id);
  const qs = all.map((q) => {
    const th = theme(q.theme); const sy = th && symptom(th, q.symptom);
    return th && sy ? { q, th, sy } : null;
  }).filter((x) => x != null);

  // Profil santé : la dernière question posée pour soi-même (questions triées de la plus récente à la plus ancienne).
  const me = all.find((q) => q.who === "moi" && !q.urgent);
  const label = (list: { id: string; label: Record<string, string> }[], id: string | null | undefined) => list.find((o) => o.id === id)?.label[lang];
  const health = me ? [
    { icon: "UserRound", k: t(lang, "sex"), v: me.sex === "f" ? t(lang, "female") : me.sex === "m" ? t(lang, "male") : null },
    { icon: "CalendarCheck", k: t(lang, "age"), v: label(AGES, me.age) },
    { icon: "MapPin", k: t(lang, "city"), v: label(CITIES, me.city) },
    ...(me.sex === "f" && me.pregnant != null ? [{ icon: "Baby", k: t(lang, "pregnant").replace(/\s*[?؟]$/, ""), v: me.pregnant ? t(lang, "yes") : t(lang, "no") }] : []),
  ].filter((x) => x.v) as { icon: string; k: string; v: string }[] : [];
  const topics = [...new Map(qs.map(({ th }) => [th.id, th])).values()];
  const nPub = qs.filter(({ q }) => q.is_public).length;
  const stats = [
    { n: qs.length, k: t(lang, qs.length === 1 ? "accStatQuestion" : "accStatQuestions"), href: "questions" },
    { n: nPub, k: t(lang, nPub === 1 ? "accStatPublishedOne" : "accStatPublished"), href: "confidentialite" },
    { n: qs.filter(({ q }) => q.who !== "moi").length, k: t(lang, "accStatRelatives"), href: "questions" },
  ];
  const helped = nPub ? await helpedCount(user.id).catch(() => 0) : 0;
  const recent = qs.slice(0, 5).map(({ q, th }) => ({ id: q.id, title: shortTitle(lang, q, th) }));
  return { helped, acc, avatar: String(avatarOf(acc)).padStart(2, "0"), qs, health, topics, stats, nPub, recent, shortName: publicName(acc.first_name, acc.last_name) };
}
