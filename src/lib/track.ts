// Mesure d'audience maison, sans donnée personnelle : un identifiant de visiteur au hasard (cookie wd_vid),
// une visite = 30 min d'activité (cookie wd_sid), sa source (pub, réseau social, moteur, IA, direct) et le
// temps passé (signal toutes les 15 s quand la page est visible). Ni IP, ni navigateur, ni nom.
import type { AstroCookies } from "astro";
import { randomBytes } from "node:crypto";
import { db } from "./db";

export type Channel = "pub" | "social" | "search" | "ai" | "direct" | "other";
export const CHANNELS: { id: Channel; label: string }[] = [
  { id: "pub", label: "Publicité" }, { id: "social", label: "Réseaux sociaux (gratuit)" }, { id: "search", label: "Moteurs de recherche" },
  { id: "ai", label: "Assistants IA" }, { id: "direct", label: "Direct ou inconnu" }, { id: "other", label: "Autres sites" },
];

const SOCIAL: [RegExp, string][] = [
  [/(^|\.)instagram\.com$/, "Instagram"], [/(^|\.)facebook\.com$|(^|\.)fb\.com$|^fb\.me$/, "Facebook"], [/(^|\.)tiktok\.com$/, "TikTok"],
  [/(^|\.)youtube\.com$|^youtu\.be$/, "YouTube"], [/(^|\.)linkedin\.com$|^lnkd\.in$/, "LinkedIn"], [/^t\.co$|(^|\.)twitter\.com$|(^|\.)x\.com$/, "X (Twitter)"],
  [/(^|\.)snapchat\.com$/, "Snapchat"], [/(^|\.)whatsapp\.com$|^wa\.me$/, "WhatsApp"], [/(^|\.)pinterest\./, "Pinterest"], [/(^|\.)reddit\.com$/, "Reddit"],
];
const AI: [RegExp, string][] = [
  [/(^|\.)chatgpt\.com$|^chat\.openai\.com$/, "ChatGPT"], [/(^|\.)perplexity\.ai$/, "Perplexity"], [/^gemini\.google\.com$/, "Gemini"],
  [/(^|\.)claude\.ai$/, "Claude"], [/^copilot\.microsoft\.com$/, "Copilot"], [/(^|\.)deepseek\.com$/, "DeepSeek"], [/(^|\.)mistral\.ai$/, "Mistral"],
];
const SEARCH: [RegExp, string][] = [
  [/(^|\.)google\.[a-z.]+$/, "Google"], [/(^|\.)bing\.com$/, "Bing"], [/(^|\.)duckduckgo\.com$/, "DuckDuckGo"], [/(^|\.)yahoo\.[a-z.]+$/, "Yahoo"],
  [/(^|\.)ecosia\.org$/, "Ecosia"], [/(^|\.)yandex\.[a-z.]+$/, "Yandex"], [/(^|\.)qwant\.com$/, "Qwant"], [/(^|\.)brave\.com$/, "Brave"],
];
const PAID = /^(cpc|ppc|paid|paidsocial|paid_social|paid-social|ads?|display|cpm|sponsored)$/i;
const name = (src: string) => {
  const s = src.toLowerCase();
  if (/^(fb|facebook|meta)$/.test(s)) return "Facebook";
  if (/^(ig|instagram)$/.test(s)) return "Instagram";
  if (/^(an|audience_network)$/.test(s)) return "Audience Network";
  if (/^google/.test(s)) return "Google";
  if (/chatgpt|openai/.test(s)) return "ChatGPT";
  return src.slice(0, 40);
};

// Source d'une arrivée : paramètres utm d'abord (les pubs Meta les ajoutent), puis le site d'où vient le clic.
export function classify(url: URL, referrer: string | null): { source: string; channel: Channel } {
  const p = url.searchParams;
  const us = p.get("utm_source"), um = p.get("utm_medium") ?? "";
  if (p.get("gclid") || p.get("gbraid") || p.get("wbraid")) return { source: "Google (pub)", channel: "pub" };
  if (us && PAID.test(um)) return { source: `${name(us)} (pub)`, channel: "pub" };
  let host = "";
  try { host = referrer ? new URL(referrer).hostname.replace(/^www\./, "") : ""; } catch { host = ""; }
  if (host && host === url.hostname.replace(/^www\./, "")) host = "";
  for (const [re, n] of AI) if (re.test(host)) return { source: n, channel: "ai" };
  if (us) {
    const n = name(us);
    if (AI.some(([, a]) => a === n)) return { source: n, channel: "ai" };
    if (/newsletter|mail|substack/i.test(us + um)) return { source: `Newsletter (${n})`, channel: "other" };
    if (SOCIAL.some(([, a]) => a === n)) return { source: n, channel: "social" };
    if (SEARCH.some(([, a]) => a === n)) return { source: n, channel: "search" };
  }
  for (const [re, n] of SOCIAL) if (re.test(host)) return { source: n, channel: "social" };
  for (const [re, n] of SEARCH) if (re.test(host)) return { source: n, channel: "search" };
  if (p.get("fbclid")) return { source: "Facebook ou Instagram", channel: "social" };
  if (us) return { source: name(us), channel: "other" };
  if (host) return { source: host, channel: "other" };
  return { source: "Direct ou inconnu", channel: "direct" };
}

const BOT = /bot|crawl|spider|slurp|preview|facebookexternalhit|embedly|lighthouse|pingdom|monitor|curl|wget|python|headless/i;
const id = () => randomBytes(12).toString("base64url");

// Appelé par le middleware pour chaque page : ouvre une visite si besoin, la prolonge sinon.
export async function trackPage(request: Request, url: URL, cookies: AstroCookies) {
  const ua = request.headers.get("user-agent") ?? "";
  if (!ua || (BOT.test(ua) && !(process.env.TRACK_HEADLESS === "1" && /HeadlessChrome/.test(ua)))) return;
  if (request.headers.get("purpose") === "prefetch" || request.headers.get("sec-purpose")?.includes("prefetch")) return;
  let vid = cookies.get("wd_vid")?.value;
  if (!vid || vid.length > 40) { vid = id(); }
  cookies.set("wd_vid", vid, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax", httpOnly: true, secure: url.protocol === "https:" });
  let sid = cookies.get("wd_sid")?.value;
  if (!sid || sid.length > 40) {
    sid = id();
    const { source, channel } = classify(url, request.headers.get("referer"));
    const d = await db();
    await d.query("INSERT INTO wedicine.visits (sid, vid, source, channel, landing) VALUES ($1,$2,$3,$4,$5) ON CONFLICT DO NOTHING", [sid, vid, source, channel, url.pathname.slice(0, 200)]);
  }
  cookies.set("wd_sid", sid, { path: "/", maxAge: 30 * 60, sameSite: "lax", httpOnly: true, secure: url.protocol === "https:" });
}

// Temps passé : +15 s par signal, plafonné à 4 h par visite.
export async function tick(cookies: AstroCookies, userId: number | null) {
  const sid = cookies.get("wd_sid")?.value;
  if (!sid) return;
  const d = await db();
  await d.query("UPDATE wedicine.visits SET seconds = seconds + 15, last_at = now(), user_id = COALESCE(user_id, $2) WHERE sid = $1 AND seconds < 14400", [sid, userId]);
}

// Étapes du parcours : start (première réponse), done (questionnaire fini), signup_step (formulaire de compte affiché),
// result (réponse affichée), signup (compte créé), signup_flow (compte créé depuis le questionnaire).
export const EVENTS = ["start", "done", "signup_step", "result", "signup", "signup_flow"] as const;
export async function logEvent(cookies: AstroCookies, name: (typeof EVENTS)[number]) {
  const d = await db();
  await d.query("INSERT INTO wedicine.events (sid, name) VALUES ($1, $2)", [cookies.get("wd_sid")?.value ?? null, name]).catch(() => {});
}
