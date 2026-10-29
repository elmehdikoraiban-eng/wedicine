"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { t, type Lang } from "@/lib/i18n";
import { Icon } from "./Icon";

type Mode = "signup" | "login";

export function AuthForm({ lang, questionId, initialMode = "signup", redirectTo }: { lang: Lang; questionId?: number; initialMode?: Mode; redirectTo?: string }) {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>(initialMode);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPw, setShowPw] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
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
      if (!r.ok) { setError(data.error === "taken" ? t(lang, "contactTaken") : data.error === "login" ? t(lang, "wrongLogin") : t(lang, "error")); return; }
      router.push(data.url);
      router.refresh();
    } catch {
      setError(t(lang, "error"));
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} autoComplete="on">
      <h2 style={{ fontSize: "1.2rem" }}>{mode === "signup" ? t(lang, "noAccount") : t(lang, "login")}</h2>
      {mode === "signup" && (
        <div className="row" style={{ gap: 10 }}>
          <div className="field" style={{ flex: 1, minWidth: 120 }}>
            <label htmlFor="firstName">{t(lang, "firstName")}</label>
            <input id="firstName" name="firstName" className="input" required maxLength={40} autoComplete="given-name" />
          </div>
          <div className="field" style={{ flex: 1, minWidth: 120 }}>
            <label htmlFor="lastName">{t(lang, "lastName")}</label>
            <input id="lastName" name="lastName" className="input" required maxLength={40} autoComplete="family-name" />
          </div>
        </div>
      )}
      <div className="field">
        <label htmlFor="contact">{t(lang, "contact")}</label>
        <input id="contact" name="contact" className="input" required maxLength={80} autoComplete="username" inputMode="email" dir="ltr" />
      </div>
      <div className="field">
        <label htmlFor="password">{t(lang, "password")}</label>
        <div style={{ position: "relative" }}>
          <input id="password" name="password" type={showPw ? "text" : "password"} className="input" required minLength={6} maxLength={100}
            autoComplete={mode === "signup" ? "new-password" : "current-password"} dir="ltr" />
          <button type="button" className="btn btn-text" onClick={() => setShowPw((s) => !s)} aria-label="Afficher"
            style={{ position: "absolute", insetInlineEnd: 4, top: 4, minHeight: 40 }}>
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
      <button type="button" className="btn btn-text" style={{ width: "100%", marginTop: 6 }} onClick={() => { setMode(mode === "signup" ? "login" : "signup"); setError(null); }}>
        {mode === "signup" ? t(lang, "haveAccount") : t(lang, "noAccount")}
      </button>
    </form>
  );
}
