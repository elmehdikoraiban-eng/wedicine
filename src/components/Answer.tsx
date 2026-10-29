import { t, type Lang } from "@/lib/i18n";
import type { Fiche } from "@/lib/content/types";
import type { Symptom, Theme } from "@/lib/content/themes";
import { INTENTS } from "@/lib/content/options";
import { pageTitle } from "@/lib/content/themes";
import type { ReactNode } from "react";
import { qPath } from "@/lib/site";
import { Icon } from "./Icon";

type Section = { key: "whatToKnow" | "meanwhile" | "whichDoctor" | "exams" | "askDoctor"; icon: string; intent: string };
const SECTIONS: Section[] = [
  { key: "whatToKnow", icon: "FileText", intent: "grave" },
  { key: "meanwhile", icon: "Hourglass", intent: "attente" },
  { key: "whichDoctor", icon: "Stethoscope", intent: "medecin" },
  { key: "exams", icon: "Microscope", intent: "examens" },
  { key: "askDoctor", icon: "MessageCircleQuestion", intent: "questions" },
];

// La fiche complète. L'intention choisie remonte sa section en premier.
export function Answer({ lang, fiche, th, sy, intent, caseLines, children }: {
  lang: Lang; fiche: Fiche; th: Theme; sy: Symptom; intent: string; caseLines?: string[]; children?: ReactNode;
}) {
  const ordered = [...SECTIONS].sort((a, b) => Number(b.intent === intent) - Number(a.intent === intent));
  return (
    <article>
      <div className="card answer-head">
        <p className="muted small" style={{ marginBottom: 6 }}>{th.label[lang]}</p>
        <h1>{pageTitle(lang, th, sy, intent)}</h1>
        <p className="summary">{fiche.summary[lang]}</p>
        <p className="notice notice-info small" style={{ marginBottom: 0 }}><Icon name="CircleAlert" size={18} />{t(lang, "answerInfo")}</p>
      </div>

      {caseLines && caseLines.length > 0 && (
        <section className="card sec" style={{ marginTop: 16 }}>
          <h2><Icon name="UserRound" size={22} />{t(lang, "yourCase")}</h2>
          <ul className="case">{caseLines.map((x, i) => <li key={i}>{x}</li>)}</ul>
        </section>
      )}

      <section className="notice notice-danger" style={{ marginTop: 16 }}>
        <Icon name="Siren" size={22} />
        <div><b>{t(lang, "seeQuickly")}</b> {fiche.warning[lang]}</div>
      </section>

      {ordered.map((s) => (
        <section key={s.key} className={`card sec${s.intent === intent ? " focus" : ""}`} style={{ marginTop: 16 }} id={s.key}>
          <h2><Icon name={s.icon} size={22} />{t(lang, s.key)}</h2>
          {s.key === "whatToKnow" && fiche.explanation.map((p, i) => <p key={i}>{p[lang]}</p>)}
          {s.key === "meanwhile" && <ul>{fiche.meanwhile.map((p, i) => <li key={i}>{p[lang]}</li>)}</ul>}
          {s.key === "whichDoctor" && <p>{fiche.whichDoctor[lang]}</p>}
          {s.key === "exams" && <ul>{fiche.exams.map((p, i) => <li key={i}>{p[lang]}</li>)}</ul>}
          {s.key === "askDoctor" && <ol style={{ margin: 0, paddingInlineStart: "1.25rem" }}>{fiche.questions.map((p, i) => <li key={i}>{p[lang]}</li>)}</ol>}
        </section>
      ))}

      {children}

      <section className="sec" style={{ marginTop: 16 }}>
        <h3>{t(lang, "related")}</h3>
        <div className="list-links">
          {INTENTS.filter((i) => i.id !== intent).map((i) => (
            <a key={i.id} href={qPath(lang, th, sy, i.id)}><Icon name={i.icon ?? "ChevronRight"} size={18} />{pageTitle(lang, th, sy, i.id)}</a>
          ))}
          {th.symptoms.filter((s) => s.id !== sy.id).slice(0, 4).map((s) => (
            <a key={s.id} href={qPath(lang, th, s, intent)}><Icon name={th.icon} size={18} />{pageTitle(lang, th, s, intent)}</a>
          ))}
        </div>
      </section>

      <p className="muted small" style={{ marginTop: 20 }}>
        {t(lang, "sources")} : {fiche.sources.map((s, i) => (
          <span key={s.url}>{i > 0 && " · "}<a href={s.url} rel="noopener nofollow" target="_blank">{s.label}</a></span>
        ))}
        <br />{t(lang, "reviewPending")}
      </p>
    </article>
  );
}
