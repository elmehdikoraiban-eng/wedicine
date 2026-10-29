import { useState, type FormEvent } from "react";
import { t, type Lang } from "@/lib/i18n";
import { Icon } from "./Icon";

type Mode = "signup" | "login";

// Formulaire de compte. Avec questionId, il débloque la réponse après inscription ou connexion.
export function AuthForm({ lang, questionId, initialMode = "signup", redirectTo }: { lang: Lang; questionId?: number; initialMode?: Mode; redirectTo?: string }) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPw, setShowPw] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true); setError(null);
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries()) as Record<string, string>;
    try {
      const r = await fetch(`/api/${mode}`, {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...body, lang, questionId: questionId ?? null, redirectTo: redirectTo ?? null,
          consentInfo: body.consentInfo === "on", consentTerms: body.consentTerms === "on", consentPublish: body.consentPublish === "on",
        }),
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) { setError(data.error === "taken" ? t(lang, "contactTaken") : data.error === "login" ? t(lang, "wrongLogin") : t(lang, "error")); setBusy(false); return; }
      window.location.assign(data.url);
    } catch {
      setError(t(lang, "error"));
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} autoComplete="on" className="auth-form">
      <div className="tabs" role="tablist">
        <button type="button" role="tab" aria-selected={mode === "signup"} onClick={() => { setMode("signup"); setError(null); }}>{t(lang, "noAccount")}</button>
        <button type="button" role="tab" aria-selected={mode === "login"} onClick={() => { setMode("login"); setError(null); }}>{t(lang, "login")}</button>
      </div>
      {mode === "signup" && (
        <div className="row" style={{ gap: 12 }}>
          <div className="field" style={{ flex: 1, minWidth: 140 }}>
            <label htmlFor="firstName">{t(lang, "firstName")}</label>
            <input id="firstName" name="firstName" className="input" required maxLength={40} autoComplete="given-name" />
          </div>
          <div className="field" style={{ flex: 1, minWidth: 140 }}>
            <label htmlFor="lastName">{t(lang, "lastName")}</label>
            <input id="lastName" name="lastName" className="input" required maxLength={40} autoComplete="family-name" />
          </div>
        </div>
      )}
      <div className="field">
        <label htmlFor="contact">{t(lang, "contact")}</label>
        <input id="contact" name="contact" className="input" required maxLength={80} autoComplete="username" inputMode="email" dir="ltr" placeholder="nom@exemple.com" />
      </div>
      <div className="field">
        <label htmlFor="password">{t(lang, "password")}</label>
        <div className="input-wrap">
          <input id="password" name="password" type={showPw ? "text" : "password"} className="input" required minLength={6} maxLength={100}
            autoComplete={mode === "signup" ? "new-password" : "current-password"} dir="ltr" />
          <button type="button" className="eye" onClick={() => setShowPw((s) => !s)} aria-label={showPw ? "Masquer" : "Afficher"}>
            <Icon name={showPw ? "EyeOff" : "Eye"} size={18} />
          </button>
        </div>
      </div>
      {mode === "signup" && (
        <>
          <label className="check small"><input type="checkbox" name="consentInfo" required /> <span>{t(lang, "consentInfo")}</span></label>
          <label className="check small"><input type="checkbox" name="consentTerms" required /> <span>{t(lang, "consentTerms")}</span></label>
        </>
      )}
      {questionId != null && (
        <label className="check small"><input type="checkbox" name="consentPublish" /> <span>{t(lang, "consentPublish")}</span></label>
      )}
      {error && <p className="error" role="alert">{error}</p>}
      <button type="submit" className="btn btn-primary" disabled={busy} style={{ width: "100%", marginTop: 8 }}>
        {busy ? "…" : mode === "signup" ? (questionId != null ? t(lang, "createAccount") : t(lang, "noAccount")) : (questionId != null ? t(lang, "loginAndRead") : t(lang, "login"))}
      </button>
    </form>
  );
}
