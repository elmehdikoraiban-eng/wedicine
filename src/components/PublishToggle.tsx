import { useState } from "react";
import { t, type Lang } from "@/lib/i18n";
import { Icon } from "./Icon";

type Mode = "named" | "anonymous" | "private";

// Fin de réponse : le patient choisit comment sa question apparaît sur la page publique.
// Chaque option montre exactement ce que les autres verront. Rien n'est coché d'avance.
export function PublishToggle({ lang, id, mode, previewNamed, previewAnon }: {
  lang: Lang; id: number; mode: Mode; previewNamed: string; previewAnon: string;
}) {
  const [busy, setBusy] = useState<Mode | null>(null);
  async function choose(m: Mode) {
    if (m === mode) return;
    setBusy(m);
    const r = await fetch("/api/publish", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ id, mode: m }) }).catch(() => null);
    if (r?.ok) window.location.reload(); else setBusy(null);
  }
  const options: { m: Mode; icon: string; title: string; preview: string }[] = [
    { m: "named", icon: "UserRound", title: t(lang, "pubNamed"), preview: previewNamed },
    { m: "anonymous", icon: "EyeOff", title: t(lang, "pubAnon"), preview: previewAnon },
    { m: "private", icon: "Lock", title: t(lang, "pubPrivate"), preview: t(lang, "pubPrivatePreview") },
  ];
  return (
    <div className="help-card">
      <div className="help-head">
        <span className="ico"><Icon name="HeartHandshake" size={28} /></span>
        <div>
          <h2>{t(lang, "pubTitle")}</h2>
          <p className="muted">{t(lang, "pubLead")}</p>
        </div>
      </div>
      <div className="pub-options" role="radiogroup" aria-label={t(lang, "pubTitle")}>
        {options.map((o) => (
          <button key={o.m} type="button" role="radio" aria-checked={mode === o.m} className="pub-option" onClick={() => choose(o.m)} disabled={busy != null}>
            <span className="pub-ico"><Icon name={o.icon} size={20} /></span>
            <span className="pub-txt"><b>{o.title}</b><span className="pub-preview">{o.preview}</span></span>
            <span className="pub-check">{mode === o.m ? <Icon name="Check" size={18} /> : busy === o.m ? "…" : null}</span>
          </button>
        ))}
      </div>
      <p className="muted small" style={{ margin: "12px 0 0" }}>{t(lang, "pubNote")}</p>
    </div>
  );
}
