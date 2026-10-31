import { createHash } from "node:crypto";
import type { AstroCookies } from "astro";
import { currentUser, publicName } from "./auth";
import { db, type UserRow } from "./db";
import { THEMES } from "./content/themes";
import { fiche } from "./content/fiches";

// Admin réservé aux comptes listés ici (El Mehdi, 2026-10-31). ADMIN_CONTACTS (séparés par des virgules) peut en ajouter.
const ADMINS = ["mehdikouraybane@gmail.com", ...(process.env.ADMIN_CONTACTS ?? "").split(",")]
  .map((c) => c.trim().toLowerCase()).filter(Boolean);

export const isAdmin = (u: { contact: string } | undefined | null) => !!u && ADMINS.includes(u.contact.trim().toLowerCase());

export async function adminUser(cookies: AstroCookies): Promise<UserRow | undefined> {
  const u = await currentUser(cookies);
  return isAdmin(u) ? u : undefined;
}

// Journal : chaque action de l'admin (CNDP, données de santé). Jamais modifié ni effacé depuis l'admin.
export async function logAction(u: UserRow, action: string, target: string) {
  const d = await db();
  await d.query("INSERT INTO wedicine.admin_log (user_id, who, action, target) VALUES ($1, $2, $3, $4)", [u.id, publicName(u.first_name, u.last_name), action, target]);
}

export async function journal(limit = 200) {
  const d = await db();
  const r = await d.query("SELECT id, at, who, action, target FROM wedicine.admin_log ORDER BY id DESC LIMIT $1", [limit]);
  return r.rows as { id: number; at: string | Date; who: string; action: string; target: string }[];
}

// Empreinte du texte d'une fiche : une validation s'annule toute seule si le texte change.
export const ficheHash = (theme: string, symptom: string) => {
  const f = fiche(theme, symptom);
  return f ? createHash("sha256").update(JSON.stringify(f)).digest("hex").slice(0, 16) : "";
};

export type Review = { doctor: string; reviewed_at: string | Date; valid: boolean };
export async function reviews(): Promise<Map<string, Review>> {
  const d = await db();
  const r = await d.query("SELECT theme, symptom, doctor, reviewed_at, content_hash FROM wedicine.fiche_reviews");
  const m = new Map<string, Review>();
  for (const x of r.rows as { theme: string; symptom: string; doctor: string; reviewed_at: string | Date; content_hash: string }[]) {
    m.set(`${x.theme}/${x.symptom}`, { doctor: x.doctor, reviewed_at: x.reviewed_at, valid: x.content_hash === ficheHash(x.theme, x.symptom) });
  }
  return m;
}

// Une fiche relue (et inchangée depuis) peut être indexée par Google.
export async function isReviewed(theme: string, symptom: string) {
  const d = await db();
  const r = await d.query("SELECT content_hash FROM wedicine.fiche_reviews WHERE theme = $1 AND symptom = $2", [theme, symptom]);
  return r.rows.length > 0 && r.rows[0].content_hash === ficheHash(theme, symptom);
}

export async function reviewedKeys() {
  return new Set([...(await reviews()).entries()].filter(([, v]) => v.valid).map(([k]) => k));
}

export async function setReview(theme: string, symptom: string, doctor: string | null) {
  const d = await db();
  if (doctor) {
    await d.query(
      `INSERT INTO wedicine.fiche_reviews (theme, symptom, doctor, content_hash) VALUES ($1, $2, $3, $4)
       ON CONFLICT (theme, symptom) DO UPDATE SET doctor = $3, content_hash = $4, reviewed_at = now()`,
      [theme, symptom, doctor, ficheHash(theme, symptom)]
    );
  } else {
    await d.query("DELETE FROM wedicine.fiche_reviews WHERE theme = $1 AND symptom = $2", [theme, symptom]);
  }
}

// Toutes les fiches existantes (un sujet × un symptôme).
export const allFiches = () => THEMES.flatMap((th) => th.symptoms.filter((sy) => fiche(th.id, sy.id)).map((sy) => ({ th, sy })));

// ---- Chiffres du tableau de bord (période en jours) ----
export async function dashboard(days: number) {
  const d = await db();
  const one = async (sql: string, p: unknown[] = []) => Number((await d.query(sql, p)).rows[0].n);
  const since = `now() - make_interval(days => $1::int)`;
  const before = `now() - make_interval(days => 2 * $1::int)`;
  const questions = await one(`SELECT count(*)::int AS n FROM wedicine.questions WHERE created_at >= ${since}`, [days]);
  const prev = await one(`SELECT count(*)::int AS n FROM wedicine.questions WHERE created_at >= ${before} AND created_at < ${since}`, [days]);
  const withAccount = await one(`SELECT count(*)::int AS n FROM wedicine.questions WHERE created_at >= ${since} AND user_id IS NOT NULL`, [days]);
  const users = await one(`SELECT count(*)::int AS n FROM wedicine.users WHERE created_at >= ${since}`, [days]);
  const urgent = await one(`SELECT count(*)::int AS n FROM wedicine.questions WHERE created_at >= ${since} AND urgent`, [days]);
  const views = await one("SELECT COALESCE(sum(views), 0)::int AS n FROM wedicine.page_views");
  const fb = (await d.query("SELECT COALESCE(sum(yes), 0)::int AS y, COALESCE(sum(no), 0)::int AS n FROM wedicine.page_feedback")).rows[0];
  const perDay = (await d.query(
    `SELECT to_char(date_trunc('day', created_at), 'YYYY-MM-DD') AS day, count(*)::int AS n, count(*) FILTER (WHERE urgent)::int AS u
     FROM wedicine.questions WHERE created_at >= ${since} GROUP BY 1 ORDER BY 1`, [days])).rows as { day: string; n: number; u: number }[];
  const top = async (col: string) => (await d.query(
    `SELECT ${col} AS id, count(*)::int AS n FROM wedicine.questions WHERE created_at >= ${since} AND ${col} IS NOT NULL GROUP BY 1 ORDER BY n DESC LIMIT 6`, [days])).rows as { id: string; n: number }[];
  const totals = (await d.query("SELECT (SELECT count(*)::int FROM wedicine.questions) AS q, (SELECT count(*)::int FROM wedicine.users) AS u")).rows[0];
  return {
    questions, prev, users, urgent, withAccount, views,
    helpful: Number(fb.y) + Number(fb.n) ? Math.round((100 * Number(fb.y)) / (Number(fb.y) + Number(fb.n))) : null,
    perDay, themes: await top("theme"), cities: await top("city"),
    totalQuestions: Number(totals.q), totalUsers: Number(totals.u),
  };
}

// ---- Questions ----
export type AdminQ = {
  id: number; created_at: string | Date; user_id: number | null; theme: string; symptom: string; duration: string | null;
  who: string; age: string | null; sex: string | null; city: string | null; intent: string; urgent: boolean;
  is_public: boolean; anonymous: boolean; hidden: boolean; lang: string;
};
export async function adminQuestions(f: { filter?: string; theme?: string; city?: string }) {
  const d = await db();
  const where: string[] = [];
  const p: unknown[] = [];
  if (f.filter === "urgent") where.push("urgent");
  if (f.filter === "named") where.push("is_public AND NOT anonymous AND NOT hidden");
  if (f.filter === "hidden") where.push("hidden");
  if (f.theme) { p.push(f.theme); where.push(`theme = $${p.length}`); }
  if (f.city) { p.push(f.city); where.push(`city = $${p.length}`); }
  const r = await d.query(
    `SELECT id, created_at, user_id, theme, symptom, duration, who, age, sex, city, intent, urgent, is_public, anonymous, hidden, lang
     FROM wedicine.questions ${where.length ? `WHERE ${where.join(" AND ")}` : ""} ORDER BY id DESC LIMIT 150`, p);
  return r.rows as AdminQ[];
}

export async function countHidden() {
  const d = await db();
  return Number((await d.query("SELECT count(*)::int AS n FROM wedicine.questions WHERE hidden")).rows[0].n);
}

// Retirer une question des pages publiques : plus de signature ni de compteurs. Le patient garde sa réponse.
export async function setHidden(id: number, hidden: boolean) {
  const d = await db();
  await d.query("UPDATE wedicine.questions SET hidden = $2, is_public = CASE WHEN $2 THEN false ELSE is_public END WHERE id = $1", [id, hidden]);
}

// Vues et avis « utile » par fiche (toutes intentions confondues, depuis le lancement).
export async function ficheStats() {
  const d = await db();
  const v = (await d.query("SELECT theme, symptom, sum(views)::int AS n FROM wedicine.page_views GROUP BY 1, 2")).rows as { theme: string; symptom: string; n: number }[];
  const f = (await d.query("SELECT theme, symptom, sum(yes)::int AS y, sum(no)::int AS n FROM wedicine.page_feedback GROUP BY 1, 2")).rows as { theme: string; symptom: string; y: number; n: number }[];
  const m = new Map<string, { views: number; helpful: number | null }>();
  for (const x of v) m.set(`${x.theme}/${x.symptom}`, { views: Number(x.n), helpful: null });
  for (const x of f) {
    const k = `${x.theme}/${x.symptom}`, t = Number(x.y) + Number(x.n);
    m.set(k, { views: m.get(k)?.views ?? 0, helpful: t ? Math.round((100 * Number(x.y)) / t) : null });
  }
  return m;
}

// Où renvoyer un visiteur qui n'est pas admin : la connexion s'il n'a pas de session, sinon l'accueil (pas de boucle).
export async function notAdminUrl(cookies: AstroCookies, next: string) {
  return (await currentUser(cookies)) ? "/fr" : `/fr/connexion?next=${encodeURIComponent(next)}`;
}
