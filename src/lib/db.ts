
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

export type UserRow = { id: number; first_name: string; last_name: string; contact: string; lang: string };

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
  id: number; created_at: string | Date; user_id: number | null; is_public: boolean;
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

export async function setPublic(id: number, userId: number, isPublic: boolean) {
  const d = await db();
  await d.query(
    "UPDATE wedicine.questions SET is_public = $3, consent_publish_at = CASE WHEN $3 THEN now() ELSE consent_publish_at END WHERE id = $1 AND user_id = $2 AND NOT urgent",
    [id, userId, isPublic]
  );
}

// Les patients qui ont posé cette question et accepté la publication (prénom + initiale seulement).
export async function publicAskers(theme: string, symptom: string, intent: string) {
  const d = await db();
  const r = await d.query(
    `SELECT q.id, q.created_at, q.age, q.city, u.first_name, u.last_name
     FROM wedicine.questions q JOIN wedicine.users u ON u.id = q.user_id
     WHERE q.theme = $1 AND q.symptom = $2 AND q.intent = $3 AND q.is_public
     ORDER BY q.id DESC LIMIT 20`,
    [theme, symptom, intent]
  );
  return r.rows as { id: number; created_at: string | Date; age: string | null; city: string | null; first_name: string; last_name: string }[];
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
    `INSERT INTO wedicine.users (first_name, last_name, contact, password_hash, lang, consent_info_at, consent_terms_at)
     VALUES ($1,$2,$3,$4,$5,now(),now()) RETURNING id`,
    [u.firstName, u.lastName, u.contact, u.passwordHash, u.lang]
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
    "SELECT u.id, u.first_name, u.last_name, u.contact, u.lang FROM wedicine.sessions s JOIN wedicine.users u ON u.id = s.user_id WHERE s.token = $1",
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
