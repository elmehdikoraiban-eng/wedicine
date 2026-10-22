// Crée data/wedicine.db à partir de data/schema.sql et data/seed.mjs.
import { DatabaseSync } from "node:sqlite";
import { readFileSync, rmSync } from "node:fs";
import { ANSWERS, DOCTORS, FALLBACK, REVIEWS } from "../data/seed.mjs";

const path = new URL("../data/wedicine.db", import.meta.url).pathname;
rmSync(path, { force: true });
const db = new DatabaseSync(path);
db.exec(readFileSync(new URL("../data/schema.sql", import.meta.url), "utf8"));

const insDoctor = db.prepare(
  "INSERT INTO doctors (name, city, address, distance_km, languages, price_mad, next_slot) VALUES (?, ?, ?, ?, ?, ?, ?)"
);
const ids = DOCTORS.map((d) =>
  insDoctor.run(d.name, d.city, d.address, d.distance_km, d.languages, d.price_mad, d.next_slot).lastInsertRowid
);

const insReview = db.prepare("INSERT INTO reviews (doctor_id, author, rating, date, text) VALUES (?, ?, ?, ?, ?)");
for (const r of REVIEWS) insReview.run(ids[r.doctor_index], r.author, r.rating, r.date, r.text);

const insAnswer = db.prepare(
  "INSERT INTO answers (topic, keywords, summary, explanation, questions, warning) VALUES (?, ?, ?, ?, ?, ?)"
);
for (const a of [{ ...FALLBACK, keywords: "" }, ...ANSWERS]) {
  insAnswer.run(a.topic, a.keywords, a.summary, JSON.stringify(a.explanation), JSON.stringify(a.questions), a.warning);
}

console.log(`OK : ${ids.length} médecins, ${REVIEWS.length} avis, ${ANSWERS.length + 1} réponses → ${path}`);
db.close();
