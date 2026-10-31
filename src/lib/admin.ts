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
export async function adminQuestions(f: { filter?: string; theme?: string; city?: string; user?: number }) {
  const d = await db();
  const where: string[] = [];
  const p: unknown[] = [];
  if (f.filter === "urgent") where.push("urgent");
  if (f.filter === "named") where.push("is_public AND NOT anonymous AND NOT hidden");
  if (f.filter === "hidden") where.push("hidden");
  if (f.theme) { p.push(f.theme); where.push(`theme = $${p.length}`); }
  if (f.city) { p.push(f.city); where.push(`city = $${p.length}`); }
  if (f.user) { p.push(f.user); where.push(`user_id = $${p.length}`); }
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

// ---- Statistiques d'audience et de parcours (mesurées depuis le 31/10/2026, voir src/lib/track.ts) ----
export async function analytics(days: number) {
  const d = await db();
  const P = [days];
  const since = days > 0 ? "now() - make_interval(days => $1::int)" : "'-infinity'::timestamptz";
  const q = async <T = Record<string, unknown>>(sql: string) => (await d.query(sql, P)).rows as T[];
  const n = (x: unknown) => Number(x ?? 0);
  const t = (await q(`SELECT
      count(DISTINCT vid)::int AS visitors, count(*)::int AS visits,
      count(DISTINCT vid) FILTER (WHERE seconds > 0)::int AS measured,
      COALESCE(sum(seconds), 0)::int AS secs,
      count(DISTINCT user_id)::int AS members, COALESCE(sum(seconds) FILTER (WHERE user_id IS NOT NULL), 0)::int AS member_secs
    FROM wedicine.visits WHERE at >= ${since}`))[0];
  const days_v = n((await q(`SELECT count(*)::int AS n FROM (SELECT vid, date_trunc('day', at) FROM wedicine.visits WHERE at >= ${since} AND seconds > 0 GROUP BY 1, 2) x`))[0].n);
  const ev = Object.fromEntries((await q<{ name: string; n: number }>(`SELECT name, count(*)::int AS n FROM wedicine.events WHERE at >= ${since} GROUP BY 1`)).map((r) => [r.name, n(r.n)]));
  const e = (k: string) => ev[k] ?? 0;
  const flow = (await q(`SELECT
      count(*) FILTER (WHERE s AND NOT f AND last < now() - interval '24 hours')::int AS abandoned,
      count(*) FILTER (WHERE s AND NOT f AND last >= now() - interval '24 hours')::int AS ongoing
    FROM (SELECT sid, bool_or(name = 'start') AS s, bool_or(name = 'done') AS f, max(at) AS last FROM wedicine.events WHERE at >= ${since} AND sid IS NOT NULL GROUP BY sid) x`))[0];
  const users = (await q(`SELECT (SELECT count(*)::int FROM wedicine.users) AS total, (SELECT count(*)::int FROM wedicine.users WHERE created_at >= ${since}) AS fresh`))[0];
  const urgent = n((await q(`SELECT count(*)::int AS n FROM wedicine.questions WHERE urgent AND created_at >= ${since}`))[0].n);
  const fb = (await d.query("SELECT COALESCE(sum(yes), 0)::int AS y, COALESCE(sum(no), 0)::int AS n FROM wedicine.page_feedback")).rows[0];
  const series = await q<{ day: string; name: string; n: number }>(`SELECT to_char(date_trunc('day', at AT TIME ZONE 'Africa/Casablanca'), 'YYYY-MM-DD') AS day, name, count(*)::int AS n
    FROM wedicine.events WHERE at >= ${since} AND name IN ('start', 'done', 'result', 'signup') GROUP BY 1, 2 ORDER BY 1`);
  const sources = await q<{ source: string; channel: string; n: number }>(`SELECT source, channel, count(*)::int AS n FROM wedicine.visits WHERE at >= ${since} GROUP BY 1, 2 ORDER BY n DESC, source LIMIT 20`);
  const first = (await d.query("SELECT min(at) AS at FROM wedicine.visits")).rows[0].at as string | Date | null;
  const pct = (a: number, b: number) => (b ? Math.round((1000 * a) / b) / 10 : null);
  const fy = n(fb.y), fn = n(fb.n);
  return {
    visitors: n(t.visitors), visits: n(t.visits), measured: n(t.measured),
    perPerson: n(t.measured) ? n(t.secs) / n(t.measured) : null, perDay: days_v ? n(t.secs) / days_v : null,
    members: n(t.members), perMember: n(t.members) ? n(t.member_secs) / n(t.members) : null,
    usersTotal: n(users.total), usersNew: n(users.fresh), urgent,
    started: e("start"), done: e("done"), results: e("result"), signupStep: e("signup_step"), signupFlow: e("signup_flow"),
    completion: pct(e("done"), e("start")), conversion: pct(e("signup_flow"), e("signup_step")), resultRate: pct(e("result"), e("done")),
    helpful: pct(fy, fy + fn), votes: fy + fn,
    abandoned: n(flow.abandoned), ongoing: n(flow.ongoing),
    series, sources, since: first,
  };
}

// ---- Utilisateurs (comptes) : jamais le mot de passe ; le contact sert à répondre au patient. ----
export type AdminUserRow = { id: number; created_at: string | Date; first_name: string; last_name: string; contact: string; lang: string; avatar: number | null; nq: number; npub: number; last_seen: string | Date | null };
export async function adminUsers(search = "") {
  const d = await db();
  const s = search.trim().toLowerCase().slice(0, 80);
  const r = await d.query(
    `SELECT u.id, u.created_at, u.first_name, u.last_name, u.contact, u.lang, u.avatar,
       (SELECT count(*)::int FROM wedicine.questions q WHERE q.user_id = u.id) AS nq,
       (SELECT count(*)::int FROM wedicine.questions q WHERE q.user_id = u.id AND q.is_public AND NOT q.hidden) AS npub,
       GREATEST((SELECT max(v.last_at) FROM wedicine.visits v WHERE v.user_id = u.id), (SELECT max(s.created_at) FROM wedicine.sessions s WHERE s.user_id = u.id)) AS last_seen
     FROM wedicine.users u
     ${s ? "WHERE lower(u.first_name || ' ' || u.last_name) LIKE $1 OR lower(u.contact) LIKE $1" : ""}
     ORDER BY u.id DESC LIMIT 300`, s ? [`%${s}%`] : []);
  return r.rows as AdminUserRow[];
}
export async function countUsers() {
  const d = await db();
  return Number((await d.query("SELECT count(*)::int AS n FROM wedicine.users")).rows[0].n);
}
