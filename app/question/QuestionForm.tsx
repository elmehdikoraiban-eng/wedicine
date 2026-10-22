"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CITIES, averageRating, type Doctor } from "@/lib/doctors";
import { hasRedFlag, type Answer } from "@/lib/answer";

type Result = { answer: Answer; doctor: Doctor };

function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  return <span className="stars" aria-label={`${value} sur 5`}>{"★".repeat(full)}{"☆".repeat(5 - full)}</span>;
}

function UrgentNotice() {
  return (
    <div className="notice notice-danger" role="alert">
      <strong>Vos symptômes peuvent nécessiter une prise en charge urgente.</strong> N&apos;attendez pas :
      appelez le <a href="tel:15"><strong>15</strong></a> (SAMU) ou le <a href="tel:141"><strong>141</strong></a>,
      ou rendez-vous aux urgences les plus proches.
    </div>
  );
}

export default function QuestionForm() {
  const params = useSearchParams();
  const topic = params.get("sujet");
  const [question, setQuestion] = useState(topic ? `${topic} : ` : "");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [city, setCity] = useState<string>("Casablanca");
  const [consentInfo, setConsentInfo] = useState(false);
  const [consentShare, setConsentShare] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const redFlag = hasRedFlag(question);
  const canSubmit = question.trim().length >= 10 && consentInfo && consentShare && !loading;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, age, sex, city, consentInfo, consentShare }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erreur");
      setResult(data);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  }

  if (result) {
    const { answer, doctor } = result;
    const avg = averageRating(doctor);
    return (
      <>
        <div style={{ marginTop: 24 }}>
          {answer.urgent && <UrgentNotice />}
        </div>
        <div className="result">
          <div style={{ display: "grid", gap: 20 }}>
            <div className="notice notice-warn">
              <strong>Réponse informative uniquement.</strong> Elle ne constitue ni un diagnostic ni une
              prescription. Consultez un médecin pour un avis adapté à votre situation.
            </div>
            <div className="card">
              <p className="muted" style={{ fontSize: 14, marginBottom: 6 }}>Votre question</p>
              <p style={{ color: "var(--text)" }}>{question}</p>
            </div>
            <div className="card">
              <p className="muted" style={{ fontSize: 13, marginBottom: 4 }}>{answer.topic}</p>
              <h2>Ce qu&apos;il faut savoir</h2>
              <p style={{ color: "var(--text)", marginBottom: 12 }}>{answer.summary}</p>
              {answer.explanation.map((p, i) => (
                <p key={i} style={{ marginBottom: 10 }}>{p}</p>
              ))}
              {answer.warning && (
                <div className="notice notice-danger" style={{ marginTop: 12 }}>
                  <strong>Consultez rapidement si :</strong> {answer.warning}
                </div>
              )}
            </div>
            <div className="card">
              <h2>Questions à poser à votre médecin</h2>
              <ol className="qlist">
                {answer.questionsForDoctor.map((q, i) => <li key={i}>{q}</li>)}
              </ol>
              <button className="btn btn-ghost btn-sm" style={{ marginTop: 14 }} onClick={() => window.print()}>
                Imprimer ma liste
              </button>
            </div>
          </div>

          <aside className="card sticky">
            <p className="muted" style={{ fontSize: 13, marginBottom: 10 }}>
              Médecin généraliste proche de chez vous
            </p>
            <div className="doctor-head">
              <div className="avatar">{doctor.initials}</div>
              <div>
                <h3 style={{ margin: 0 }}>{doctor.name}</h3>
                <div style={{ fontSize: 14 }}>
                  <Stars value={avg} /> <strong>{avg}</strong>{" "}
                  <span className="muted">({doctor.reviews.length} avis)</span>
                </div>
              </div>
            </div>
            <div className="meta">
              <span>📍 {doctor.address} · {doctor.distanceKm} km</span>
              <span>🗣️ {doctor.languages.join(", ")}</span>
              <span>💳 Consultation : {doctor.priceMad} MAD</span>
              <span>📅 Prochain créneau : {doctor.nextSlot}</span>
            </div>
            <a className="btn" style={{ width: "100%", textAlign: "center" }} href="#" onClick={(e) => e.preventDefault()}>
              Prendre rendez-vous
            </a>
            <div className="notice notice-info" style={{ marginTop: 14, fontSize: 13 }}>
              Avec votre accord, votre question a été transmise à {doctor.name} pour préparer votre consultation.
            </div>
            <h3 style={{ marginTop: 18, fontSize: 15 }}>Avis des patients</h3>
            {doctor.reviews.map((r, i) => (
              <div className="review" key={i}>
                <Stars value={r.rating} /> <strong>{r.author}</strong> <span className="muted">· {r.date}</span>
                <p>{r.text}</p>
              </div>
            ))}
          </aside>
        </div>
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <button className="btn btn-ghost" onClick={() => { setResult(null); setQuestion(""); }}>
            Poser une autre question
          </button>
        </div>
      </>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <div>
        <h1 style={{ margin: "20px 0 6px", fontSize: 30 }}>Votre question santé</h1>
        <p className="muted" style={{ margin: 0 }}>
          Décrivez ce qui vous préoccupe. Ne donnez pas votre nom ni votre numéro de CIN.
        </p>
      </div>

      <label className="field">
        Votre question
        <textarea
          value={question}
          maxLength={2000}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ex. : J'ai souvent des brûlures d'estomac après les repas depuis un mois. Est-ce grave ?"
          required
        />
        <span className="counter">{question.length}/2000</span>
      </label>

      {redFlag && <UrgentNotice />}

      <div className="row">
        <label className="field">
          Âge
          <select value={age} onChange={(e) => setAge(e.target.value)}>
            <option value="">Non précisé</option>
            {["Moins de 18 ans", "18-30 ans", "31-45 ans", "46-60 ans", "Plus de 60 ans"].map((a) => <option key={a}>{a}</option>)}
          </select>
        </label>
        <label className="field">
          Sexe
          <select value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="">Non précisé</option>
            <option>Femme</option>
            <option>Homme</option>
          </select>
        </label>
        <label className="field">
          Ville
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            {CITIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
      </div>

      <label className="consent">
        <input type="checkbox" checked={consentInfo} onChange={(e) => setConsentInfo(e.target.checked)} />
        <span>
          Je comprends que la réponse est <strong>uniquement informative</strong>, qu&apos;elle ne remplace pas une
          consultation et que je dois consulter un médecin.
        </span>
      </label>
      <label className="consent">
        <input type="checkbox" checked={consentShare} onChange={(e) => setConsentShare(e.target.checked)} />
        <span>
          J&apos;accepte que ma question, mon âge, mon sexe et ma ville soient <strong>partagés avec un médecin
          proche de chez moi</strong> pour préparer ma consultation. Je peux retirer mon accord et demander la
          suppression de mes données à tout moment (loi 09-08).
        </span>
      </label>

      {error && <div className="notice notice-danger">{error}</div>}

      <button className="btn" type="submit" disabled={!canSubmit}>
        {loading ? "Préparation de votre réponse…" : "Obtenir ma réponse"}
      </button>
    </form>
  );
}
