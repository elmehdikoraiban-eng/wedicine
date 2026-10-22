import "server-only";
import { DatabaseSync } from "node:sqlite";
import { copyFileSync, existsSync } from "node:fs";
import path from "node:path";
import type { Answer } from "./answer";
import { hasRedFlag } from "./answer";
import type { Doctor } from "./doctors";

const SOURCE = path.join(process.cwd(), "data", "wedicine.db");

// Sur Vercel le système de fichiers est en lecture seule, sauf /tmp (données éphémères).
function open() {
  if (!process.env.VERCEL) return new DatabaseSync(SOURCE);
  const tmp = "/tmp/wedicine.db";
  if (!existsSync(tmp)) copyFileSync(SOURCE, tmp);
  return new DatabaseSync(tmp);
}

let db: DatabaseSync | undefined;
const get = () => (db ??= open());

type AnswerRow = {
  id: number; topic: string; specialty: string; keywords: string;
  summary: string; explanation: string; questions: string; warning: string | null;
};

export function findAnswer(question: string): Answer {
  const rows = get().prepare("SELECT * FROM answers ORDER BY id").all() as AnswerRow[];
  const q = question.toLowerCase();
  let best = rows[0]; // la première ligne est la réponse générale par défaut
  let bestScore = 0;
  for (const r of rows) {
    const score = r.keywords.split(",").filter((k) => k && q.includes(k.trim())).length;
    if (score > bestScore) [best, bestScore] = [r, score];
  }
  return {
    id: best.id,
    topic: best.topic,
    urgent: hasRedFlag(question),
    summary: best.summary,
    explanation: JSON.parse(best.explanation),
    questionsForDoctor: JSON.parse(best.questions),
    warning: best.warning,
    specialty: best.specialty,
  };
}

type DoctorRow = {
  id: number; name: string; specialty: string; city: string; address: string;
  distance_km: number; languages: string; price_mad: number; next_slot: string;
};

export function findDoctor(city: string, specialty: string): Doctor {
  const d = get();
  const row = (d.prepare("SELECT * FROM doctors WHERE city = ? AND specialty = ? ORDER BY distance_km LIMIT 1").get(city, specialty) ??
    d.prepare("SELECT * FROM doctors WHERE city = ? ORDER BY distance_km LIMIT 1").get(city) ??
    d.prepare("SELECT * FROM doctors ORDER BY id LIMIT 1").get()) as DoctorRow;
  const reviews = d
    .prepare("SELECT author, rating, date, text FROM reviews WHERE doctor_id = ? ORDER BY id")
    .all(row.id) as Doctor["reviews"];
  const parts = row.name.replace(/^Dr /, "").split(" ");
  return {
    id: row.id,
    name: row.name,
    specialty: row.specialty,
    city: row.city,
    address: row.address,
    distanceKm: row.distance_km,
    languages: row.languages.split(",").map((s) => s.trim()),
    priceMad: row.price_mad,
    nextSlot: row.next_slot,
    initials: `${parts[0][0]}${parts[parts.length - 1][0]}`,
    reviews,
  };
}

export function saveRequest(r: {
  question: string; age: string; sex: string; city: string;
  answerId: number; doctorId: number; urgent: boolean;
}) {
  get()
    .prepare(
      `INSERT INTO consultation_requests
       (question, age, sex, city, answer_id, doctor_id, consent_info, consent_share, consent_at, urgent)
       VALUES (?, ?, ?, ?, ?, ?, 1, 1, ?, ?)`
    )
    .run(r.question, r.age || null, r.sex || null, r.city, r.answerId, r.doctorId, new Date().toISOString(), r.urgent ? 1 : 0);
}
