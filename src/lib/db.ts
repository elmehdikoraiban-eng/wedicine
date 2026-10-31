
// Postgres (Supabase, Neon ou autre) via DATABASE_URL en production, PGlite (fichier local) sinon.
// Les deux exposent query(sql, params) avec le même format de résultat.

type Row = Record<string, unknown>;
type Q = { query: (sql: string, params?: unknown[]) => Promise<{ rows: Row[] }> };

// Toutes les tables vivent dans le schéma « wedicine » : une base partagée avec un autre projet ne crée aucun conflit.
const SCHEMA = `
CREATE SCHEMA IF NOT EXISTS wedicine;
CREATE TABLE IF NOT EXISTS wedicine.users (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  contact TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  lang TEXT NOT NULL DEFAULT 'fr',
  consent_info_at TIMESTAMPTZ NOT NULL,
  consent_terms_at TIMESTAMPTZ NOT NULL
);
CREATE TABLE IF NOT EXISTS wedicine.sessions (
  token TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES wedicine.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS wedicine.questions (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  user_id INTEGER REFERENCES wedicine.users(id),
  lang TEXT NOT NULL,
  who TEXT NOT NULL,
  theme TEXT NOT NULL,
  symptom TEXT NOT NULL,
  zone TEXT,
  intensity INTEGER,
  duration TEXT,
  signs TEXT[] NOT NULL DEFAULT '{}',
  age TEXT,
  sex TEXT,
  pregnant BOOLEAN,
  city TEXT,
  intent TEXT NOT NULL,
  urgent BOOLEAN NOT NULL DEFAULT false,
  is_public BOOLEAN NOT NULL DEFAULT false,
  consent_publish_at TIMESTAMPTZ
);
ALTER TABLE wedicine.users ADD COLUMN IF NOT EXISTS avatar INTEGER;
ALTER TABLE wedicine.users ADD COLUMN IF NOT EXISTS avatar_chosen BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE wedicine.users ADD COLUMN IF NOT EXISTS sex TEXT;
ALTER TABLE wedicine.questions ADD COLUMN IF NOT EXISTS anonymous BOOLEAN NOT NULL DEFAULT false;
CREATE TABLE IF NOT EXISTS wedicine.page_views (
  theme TEXT NOT NULL, symptom TEXT NOT NULL, intent TEXT NOT NULL,
  views INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (theme, symptom, intent)
);
CREATE TABLE IF NOT EXISTS wedicine.page_feedback (
  theme TEXT NOT NULL, symptom TEXT NOT NULL, intent TEXT NOT NULL,
  yes INTEGER NOT NULL DEFAULT 0, no INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (theme, symptom, intent)
);
-- Rattrapage : un avatar qui ne correspond pas au sexe déclaré (dernière question « pour moi ») est remplacé.
-- Impairs = femmes, pairs = hommes. Ne touche jamais un avatar choisi par le patient.
UPDATE wedicine.users u SET sex = s.sex
FROM (SELECT DISTINCT ON (user_id) user_id, sex FROM wedicine.questions WHERE who = 'moi' AND sex IN ('f','m') ORDER BY user_id, id DESC) s
WHERE s.user_id = u.id AND u.sex IS NULL;
UPDATE wedicine.users u SET avatar = CASE u.sex WHEN 'f' THEN 1 + 2 * (u.id % 25) ELSE 2 + 2 * (u.id % 25) END
WHERE u.sex IN ('f','m') AND NOT u.avatar_chosen AND (u.avatar IS NULL OR (u.sex = 'f') <> (u.avatar % 2 = 1));
-- Admin : question retirée des pages publiques (compteurs compris), relecture médecin par fiche, journal.
ALTER TABLE wedicine.questions ADD COLUMN IF NOT EXISTS hidden BOOLEAN NOT NULL DEFAULT false;
CREATE TABLE IF NOT EXISTS wedicine.fiche_reviews (
  theme TEXT NOT NULL, symptom TEXT NOT NULL, doctor TEXT NOT NULL,
  reviewed_at TIMESTAMPTZ NOT NULL DEFAULT now(), content_hash TEXT NOT NULL,
  PRIMARY KEY (theme, symptom)
);
CREATE TABLE IF NOT EXISTS wedicine.admin_log (
  id SERIAL PRIMARY KEY, at TIMESTAMPTZ NOT NULL DEFAULT now(),
  user_id INTEGER, who TEXT NOT NULL, action TEXT NOT NULL, target TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS wedicine.visits (
  sid TEXT PRIMARY KEY, vid TEXT NOT NULL, at TIMESTAMPTZ NOT NULL DEFAULT now(), last_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  source TEXT NOT NULL, channel TEXT NOT NULL, landing TEXT NOT NULL, seconds INTEGER NOT NULL DEFAULT 0, user_id INTEGER
);
CREATE INDEX IF NOT EXISTS visits_at ON wedicine.visits (at);
CREATE TABLE IF NOT EXISTS wedicine.events (
  id SERIAL PRIMARY KEY, at TIMESTAMPTZ NOT NULL DEFAULT now(), sid TEXT, name TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS events_at ON wedicine.events (at);
CREATE TABLE IF NOT EXISTS wedicine.contact_messages (
  id SERIAL PRIMARY KEY, at TIMESTAMPTZ NOT NULL DEFAULT now(), user_id INTEGER, lang TEXT NOT NULL,
  name TEXT NOT NULL, contact TEXT NOT NULL, subject TEXT NOT NULL, message TEXT NOT NULL,
  handled BOOLEAN NOT NULL DEFAULT false
);
CREATE INDEX IF NOT EXISTS questions_page ON wedicine.questions (theme, symptom, intent) WHERE is_public;
`;

let ready: Promise<Q> | undefined;

// Supabase : utiliser la chaîne « Transaction pooler » (port 6543), adaptée au serverless.
// L'intégration Vercel de Supabase fournit POSTGRES_URL ; une variable DATABASE_URL marche aussi.
// Le TLS suit les paramètres de la chaîne (sslmode=...), rien n'est désactivé ici.
const connectionString = () => process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL;

async function open(): Promise<Q> {
  const url = connectionString();
  if (url) {
    const { default: pg } = await import("pg");
    const pool = new pg.Pool({ connectionString: url, max: 3 });
    await pool.query(SCHEMA);
    return pool;
  }
  const { PGlite } = await import("@electric-sql/pglite");
  const path = await import("node:path");
  const dataDir = process.env.VERCEL ? "memory://" : path.join(process.cwd(), "data", "pglite");
  if (dataDir !== "memory://") (await import("node:fs")).mkdirSync(dataDir, { recursive: true });
  const db = new PGlite(dataDir);
  await db.exec(SCHEMA);
  return db;
}

export const db = () => (ready ??= open());

export type UserRow = { id: number; first_name: string; last_name: string; contact: string; lang: string; avatar: number | null };
export type AccountRow = UserRow & { sex: "f" | "m" | null; created_at: string | Date; consent_info_at: string | Date; consent_terms_at: string | Date };

// Stock de 50 avatars illustrés (public/avatars/01.svg … 50.svg), femmes et hommes mélangés.
export const AVATAR_COUNT = 50;
// Numéros impairs = femmes, pairs = hommes (voir scripts/avatars.mjs).
export type AvatarSex = "f" | "m";
export const avatarSex = (n: number): AvatarSex => (n % 2 === 1 ? "f" : "m");
export const randomAvatar = (sex?: AvatarSex | null) => {
  const pool = Array.from({ length: AVATAR_COUNT }, (_, i) => i + 1).filter((n) => !sex || avatarSex(n) === sex);
  return pool[Math.floor(Math.random() * pool.length)];
};
// Comptes créés avant les avatars : un avatar stable dérivé de l'id.
export const avatarOf = (u: { id: number; avatar: number | null }) => u.avatar ?? ((u.id - 1) % AVATAR_COUNT) + 1;

export type QuestionInput = {
  lang: string; who: string; theme: string; symptom: string; zone: string | null; intensity: number | null;
  duration: string | null; signs: string[]; age: string | null; sex: string | null; pregnant: boolean | null;
  city: string | null; intent: string; urgent: boolean;
};

export async function insertQuestion(q: QuestionInput, userId: number | null, consentPublish: boolean) {
  const d = await db();
  const r = await d.query(
    `INSERT INTO wedicine.questions (user_id, lang, who, theme, symptom, zone, intensity, duration, signs, age, sex, pregnant, city, intent, urgent, is_public, consent_publish_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17) RETURNING id`,
    [userId, q.lang, q.who, q.theme, q.symptom, q.zone, q.intensity, q.duration, q.signs, q.age, q.sex, q.pregnant,
      q.city, q.intent, q.urgent, consentPublish && !q.urgent, consentPublish ? new Date() : null]
  );
  return Number(r.rows[0].id);
}

export type QuestionRow = QuestionInput & {
  id: number; created_at: string | Date; user_id: number | null; is_public: boolean; anonymous?: boolean;
  first_name?: string; last_name?: string;
};

export async function questionById(id: number): Promise<QuestionRow | undefined> {
  const d = await db();
  const r = await d.query("SELECT * FROM wedicine.questions WHERE id = $1", [id]);
  return r.rows[0] as QuestionRow | undefined;
}

export async function questionsForUser(userId: number): Promise<QuestionRow[]> {
  const d = await db();
  const r = await d.query("SELECT * FROM wedicine.questions WHERE user_id = $1 ORDER BY id DESC", [userId]);
  return r.rows as QuestionRow[];
}

// Publication choisie par le patient : "named" (prénom + initiale), "anonymous" (sans prénom) ou "private".
export type PublishMode = "named" | "anonymous" | "private";
export async function setPublic(id: number, userId: number, mode: PublishMode) {
  const d = await db();
  const pub = mode !== "private";
  await d.query(
    `UPDATE wedicine.questions SET is_public = $3, anonymous = $4,
       consent_publish_at = CASE WHEN $3 THEN now() ELSE consent_publish_at END
     WHERE id = $1 AND user_id = $2 AND NOT urgent`,
    [id, userId, pub, mode === "anonymous"]
  );
}

// Les patients qui ont posé cette question et accepté la publication (prénom + initiale seulement).
export async function publicAskers(theme: string, symptom: string, intent: string) {
  const d = await db();
  const r = await d.query(
    `SELECT q.id, q.created_at, q.age, q.city, q.sex, q.who, q.anonymous, u.first_name, u.last_name
     FROM wedicine.questions q JOIN wedicine.users u ON u.id = q.user_id
     WHERE q.theme = $1 AND q.symptom = $2 AND q.intent = $3 AND q.is_public AND NOT q.hidden
     ORDER BY q.id DESC LIMIT 20`,
    [theme, symptom, intent]
  );
  // Mode anonyme : le prénom et le nom ne quittent jamais la base.
  return (r.rows as { id: number; created_at: string | Date; age: string | null; city: string | null; sex: string | null; who: string; anonymous: boolean; first_name: string; last_name: string }[])
    .map((x) => (x.anonymous ? { ...x, first_name: "", last_name: "" } : x));
}

// Nombre de questions posées (compteur de l'accueil).
export async function countQuestions() {
  const d = await db();
  const r = await d.query("SELECT count(*)::int AS n FROM wedicine.questions WHERE NOT urgent");
  return Number(r.rows[0].n);
}

export async function createUser(u: { firstName: string; lastName: string; contact: string; passwordHash: string; lang: string }) {
  const d = await db();
  const r = await d.query(
    `INSERT INTO wedicine.users (first_name, last_name, contact, password_hash, lang, consent_info_at, consent_terms_at, avatar)
     VALUES ($1,$2,$3,$4,$5,now(),now(),$6) RETURNING id`,
    [u.firstName, u.lastName, u.contact, u.passwordHash, u.lang, randomAvatar()]
  );
  return Number(r.rows[0].id);
}

export async function userByContact(contact: string) {
  const d = await db();
  const r = await d.query("SELECT * FROM wedicine.users WHERE contact = $1", [contact]);
  return r.rows[0] as (UserRow & { password_hash: string }) | undefined;
}

export async function createSession(userId: number, token: string) {
  const d = await db();
  await d.query("INSERT INTO wedicine.sessions (token, user_id) VALUES ($1, $2)", [token, userId]);
}

export async function userBySession(token: string): Promise<UserRow | undefined> {
  const d = await db();
  const r = await d.query(
    "SELECT u.id, u.first_name, u.last_name, u.contact, u.lang, u.avatar FROM wedicine.sessions s JOIN wedicine.users u ON u.id = s.user_id WHERE s.token = $1",
    [token]
  );
  return r.rows[0] as UserRow | undefined;
}

export async function deleteSession(token: string) {
  const d = await db();
  await d.query("DELETE FROM wedicine.sessions WHERE token = $1", [token]);
}

export async function claimQuestion(id: number, userId: number, consentPublish: boolean) {
  const d = await db();
  await d.query(
    "UPDATE wedicine.questions SET user_id = $2, is_public = ($3 AND NOT urgent), consent_publish_at = CASE WHEN $3 THEN now() ELSE NULL END WHERE id = $1 AND user_id IS NULL",
    [id, userId, consentPublish]
  );
}

// Toutes les infos du compte pour la page « Mon compte » (jamais le mot de passe).
export async function accountById(id: number): Promise<AccountRow | undefined> {
  const d = await db();
  const r = await d.query(
    "SELECT id, first_name, last_name, contact, lang, avatar, sex, created_at, consent_info_at, consent_terms_at FROM wedicine.users WHERE id = $1",
    [id]
  );
  return r.rows[0] as AccountRow | undefined;
}

// Le sexe du compte : celui que le patient a indiqué, sinon celui de sa dernière question « pour moi ».
// L'avatar suit ce sexe, sauf si le patient l'a choisi lui-même.
export async function matchAvatarToSex(userId: number) {
  const d = await db();
  const r = await d.query(
    `SELECT u.avatar, u.avatar_chosen, COALESCE(u.sex,
       (SELECT q.sex FROM wedicine.questions q WHERE q.user_id = u.id AND q.who = 'moi' AND q.sex IN ('f','m') ORDER BY q.id DESC LIMIT 1)) AS sex, u.sex AS own
     FROM wedicine.users u WHERE u.id = $1`,
    [userId]
  );
  const row = r.rows[0] as { avatar: number | null; avatar_chosen: boolean; sex: AvatarSex | null; own: string | null } | undefined;
  if (!row) return;
  if (!row.own && row.sex) await d.query("UPDATE wedicine.users SET sex = $2 WHERE id = $1", [userId, row.sex]);
  if (row.avatar_chosen) return;
  if (row.avatar != null && (!row.sex || avatarSex(row.avatar) === row.sex)) return;
  await d.query("UPDATE wedicine.users SET avatar = $2 WHERE id = $1", [userId, randomAvatar(row.sex)]);
}

// Le patient indique son sexe : l'avatar (s'il ne l'a pas choisi) est remplacé par un avatar du même sexe.
export async function setSex(userId: number, sex: string) {
  if (sex !== "f" && sex !== "m") return false;
  const d = await db();
  await d.query("UPDATE wedicine.users SET sex = $2 WHERE id = $1", [userId, sex]);
  await matchAvatarToSex(userId);
  return true;
}

// Le patient choisit son avatar dans le stock.
export async function chooseAvatar(userId: number, n: number) {
  if (!Number.isInteger(n) || n < 1 || n > AVATAR_COUNT) return false;
  const d = await db();
  await d.query("UPDATE wedicine.users SET avatar = $2, avatar_chosen = true WHERE id = $1", [userId, n]);
  return true;
}

// « Mes informations » : prénom, nom, contact et langue modifiables. Renvoie "taken" si le contact est déjà pris.
export async function updateIdentity(userId: number, f: { firstName: string; lastName: string; contact: string; lang: string }) {
  const d = await db();
  const other = await d.query("SELECT id FROM wedicine.users WHERE contact = $1 AND id <> $2", [f.contact, userId]);
  if (other.rows.length) return "taken" as const;
  await d.query("UPDATE wedicine.users SET first_name = $2, last_name = $3, contact = $4, lang = $5 WHERE id = $1",
    [userId, f.firstName, f.lastName, f.contact, f.lang]);
  return "ok" as const;
}

// Statistiques anonymes d'une page publique, calculées sur TOUTES les questions du symptôme (publiées ou non).
// Aucune donnée individuelle ne sort : seulement des totaux, et une part n'est montrée que si au moins
// MIN_GROUP personnes la partagent, pour qu'on ne puisse reconnaître personne.
export const MIN_GROUP = 3;
export type PageStats = {
  total: number; lastAt: string | Date | null;
  durations: { id: string; n: number }[]; ages: { id: string; n: number }[]; cities: { id: string; n: number }[];
};
export async function pageStats(theme: string, symptom: string): Promise<PageStats> {
  const d = await db();
  const base = "FROM wedicine.questions WHERE theme = $1 AND symptom = $2 AND NOT urgent AND NOT hidden";
  const t = await d.query(`SELECT count(*)::int AS n, max(created_at) AS last ${base}`, [theme, symptom]);
  const group = async (col: string) => {
    const r = await d.query(
      `SELECT ${col} AS id, count(*)::int AS n ${base} AND ${col} IS NOT NULL AND ${col} <> 'autre' GROUP BY ${col} HAVING count(*) >= ${MIN_GROUP} ORDER BY n DESC`,
      [theme, symptom]
    );
    return r.rows.map((x) => ({ id: String(x.id), n: Number(x.n) }));
  };
  const total = Number(t.rows[0].n);
  return {
    total, lastAt: (t.rows[0].last as string | Date | null) ?? null,
    durations: await group("duration"), ages: await group("age"), cities: await group("city"),
  };
}

// Vues d'une page publique (sert à « votre question a aidé N personnes »).
// « Cette page vous a aidé ? » : simple compteur oui / non par page, sans donnée personnelle.
export async function addFeedback(theme: string, symptom: string, intent: string, helpful: boolean) {
  const d = await db();
  const col = helpful ? "yes" : "no";
  await d.query(
    `INSERT INTO wedicine.page_feedback (theme, symptom, intent, ${col}) VALUES ($1,$2,$3,1)
     ON CONFLICT (theme, symptom, intent) DO UPDATE SET ${col} = wedicine.page_feedback.${col} + 1`,
    [theme, symptom, intent]
  );
}

export async function countView(theme: string, symptom: string, intent: string) {
  const d = await db();
  await d.query(
    `INSERT INTO wedicine.page_views (theme, symptom, intent, views) VALUES ($1,$2,$3,1)
     ON CONFLICT (theme, symptom, intent) DO UPDATE SET views = wedicine.page_views.views + 1`,
    [theme, symptom, intent]
  );
}

// Personnes aidées : vues des pages où le patient a publié une question (signée ou anonyme).
export async function helpedCount(userId: number) {
  const d = await db();
  const r = await d.query(
    `SELECT COALESCE(sum(v.views), 0)::int AS n FROM wedicine.page_views v
     WHERE EXISTS (SELECT 1 FROM wedicine.questions q WHERE q.user_id = $1 AND q.is_public
       AND q.theme = v.theme AND q.symptom = v.symptom AND q.intent = v.intent)`,
    [userId]
  );
  return Number(r.rows[0].n);
}

// Le patient efface une de ses questions : elle disparaît aussi des chiffres publics (droit à l'effacement, loi 09-08).
export async function deleteQuestion(id: number, userId: number) {
  const d = await db();
  const r = await d.query("DELETE FROM wedicine.questions WHERE id = $1 AND user_id = $2 RETURNING id", [id, userId]);
  return r.rows.length > 0;
}

// Droit d'accès (loi 09-08) : tout ce que Wedicine garde sur le patient, sans le mot de passe.
export async function exportUser(userId: number) {
  const d = await db();
  const u = await d.query("SELECT id, first_name, last_name, contact, lang, sex, avatar, created_at, consent_info_at, consent_terms_at FROM wedicine.users WHERE id = $1", [userId]);
  const q = await d.query("SELECT * FROM wedicine.questions WHERE user_id = $1 ORDER BY id", [userId]);
  return { account: u.rows[0] ?? null, questions: q.rows.map(({ user_id, ...x }) => x) };
}

// Droit à l'effacement : le compte, ses sessions et toutes ses questions (publiées comprises).
export async function deleteUser(userId: number) {
  const d = await db();
  await d.query("DELETE FROM wedicine.sessions WHERE user_id = $1", [userId]);
  await d.query("DELETE FROM wedicine.questions WHERE user_id = $1", [userId]);
  await d.query("DELETE FROM wedicine.users WHERE id = $1", [userId]);
}
