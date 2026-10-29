import type { ReactNode } from "react";
import { t, type Lang } from "@/lib/i18n";
import type { Fiche } from "@/lib/content/types";
import type { Symptom, Theme } from "@/lib/content/themes";
import { AGES, CITIES, DURATIONS, INTENSITIES, INTENTS, WHO } from "@/lib/content/options";
import { pageTitle } from "@/lib/content/themes";
import { qPath } from "@/lib/site";
import { Icon } from "./Icon";
import type { Personal } from "@/lib/personalize";
import { ArtDoctor, ArtExams, ArtGrave, ArtKnow, ArtMeanwhile, ArtQuestions, DurationTimeline, IntensityGauge, ThemeArt } from "./Illustrations";

type Key = "whatToKnow" | "meanwhile" | "whichDoctor" | "exams" | "askDoctor";
const SECTIONS: { key: Key; icon: string; intent: string; art: () => ReactNode }[] = [
  { key: "whatToKnow", icon: "FileText", intent: "grave", art: ArtKnow },
  { key: "meanwhile", icon: "Hourglass", intent: "attente", art: ArtMeanwhile },
  { key: "whichDoctor", icon: "Stethoscope", intent: "medecin", art: ArtDoctor },
  { key: "exams", icon: "Microscope", intent: "examens", art: ArtExams },
  { key: "askDoctor", icon: "MessageCircleQuestion", intent: "questions", art: ArtQuestions },
];

// Choix du patient utilisés pour les illustrations « Dans votre cas ».
export type CaseData = { who: string; duration: string | null; intensity: string | null; age: string | null; sex: string | null; city: string | null; signs: string[] };

// La fiche complète, illustrée. L'intention choisie remonte sa section en premier.
const LEVEL_ICON = ["House", "CalendarCheck", "Clock"] as const;

export function Answer({ lang, fiche, th, sy, intent, personal, caseData, children }: {
  lang: Lang; fiche: Fiche; th: Theme; sy: Symptom; intent: string; personal?: Personal; caseData?: CaseData; children?: ReactNode;
}) {
  const rtl = lang === "ar";
  const ordered = [...SECTIONS].sort((a, b) => Number(b.intent === intent) - Number(a.intent === intent));
  const dur = caseData?.duration ? DURATIONS.findIndex((d) => d.id === caseData.duration) : -1;
  const inten = caseData?.intensity != null ? INTENSITIES.findIndex((d) => d.id === caseData.intensity) : -1;
  const who = caseData && WHO.find((w) => w.id === caseData.who);
  const age = caseData?.age && AGES.find((a) => a.id === caseData.age);
  const city = caseData?.city && caseData.city !== "autre" && CITIES.find((c) => c.id === caseData.city);
  const signs = caseData ? th.signs.filter((s) => caseData.signs.includes(s.id)) : [];

  return (
    <article className="answer-page">
      <header className="card answer-head">
        <div>
          <p className="muted small" style={{ marginBottom: 6 }}>{th.label[lang]}</p>
          <h1>{pageTitle(lang, th, sy, intent)}</h1>
          <p className="summary">{fiche.summary[lang]}</p>
          {personal && (
            <div className={`verdict lv${personal.level}`} data-level={personal.level}>
              <span className="lvl"><Icon name={LEVEL_ICON[personal.level]} size={18} />{t(lang, `level${personal.level}` as "level0")}</span>
              <p>{personal.verdict}</p>
              {personal.reasons.length > 0 && (
                <div className="reasons"><span className="reason muted">{t(lang, "basedOn")}</span>{personal.reasons.map((r, i) => <span key={i} className="reason">{r}</span>)}</div>
              )}
            </div>
          )}
          <p className="notice notice-info small" style={{ marginBottom: 0 }}><Icon name="CircleAlert" size={18} />{t(lang, "answerInfo")}</p>
        </div>
        <ThemeArt icon={th.icon} />
      </header>

      {caseData && (dur >= 0 || inten >= 0 || who) ? (
        <section className="card sec case-sec">
          <h2><Icon name="UserRound" size={22} />{t(lang, "yourCase")}</h2>
          <div className="case-grid">
            {dur >= 0 && th.duration && (
              <div className="case-block">
                <h3>{t(lang, "timelineTitle")}</h3>
                <DurationTimeline labels={DURATIONS.map((d) => d.label[lang])} current={dur} threshold={th.consultAfter}
                  youAreHere={t(lang, "youAreHere")} consultFrom={t(lang, "consultFrom")} rtl={rtl} />
              </div>
            )}
            {inten >= 0 && (
              <div className="case-block">
                <h3>{t(lang, "intensityTitle")}</h3>
                <IntensityGauge labels={INTENSITIES.map((d) => d.label[lang])} current={inten} rtl={rtl} />
              </div>
            )}
            <div className="case-block profile-block">
              <h3>{t(lang, "profileTitle")}</h3>
              <div className="pictos">
                {who && <span className="picto"><Icon name={who.icon ?? "UserRound"} size={18} />{who.label[lang]}</span>}
                {age && <span className="picto"><Icon name="Clock" size={18} />{age.label[lang]}</span>}
                {city && <span className="picto"><Icon name="MapPin" size={18} />{city.label[lang]}</span>}
                {signs.map((s) => <span key={s.id} className="picto on"><Icon name="Check" size={18} />{s.label[lang]}</span>)}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="card sec sec-danger">
        <div className="sec-art"><ArtGrave /></div>
        <div>
          <h2><Icon name="Siren" size={22} />{t(lang, "whenToSee")}</h2>
          <p><b>{t(lang, "seeQuickly")}</b> {fiche.warning[lang]}</p>
          {personal && personal.warning.length > 0 && (
            <>
              <p style={{ margin: "8px 0 0" }}><b>{t(lang, "alsoForYou")}</b></p>
              <ul className="extra-warn">{personal.warning.map((w, i) => <li key={i}>{w}</li>)}</ul>
            </>
          )}
          <div className="row">
            <a href="tel:15" className="btn btn-danger btn-sm"><Icon name="Phone" size={16} /> {t(lang, "call15")}</a>
            <a href="tel:141" className="btn btn-ghost btn-sm"><Icon name="Phone" size={16} /> {t(lang, "call141")}</a>
          </div>
        </div>
      </section>

      {ordered.map((s) => (
        <section key={s.key} className={`card sec sec-illustrated${s.intent === intent ? " focus" : ""}`} id={s.key}>
          <div className="sec-art">{s.art()}</div>
          <div className="sec-body">
            <h2><Icon name={s.icon} size={22} />{t(lang, s.key)}</h2>
            {s.key === "whatToKnow" && (
              <>
                {personal && personal.know.length > 0 && (
                  <div className="for-you"><span className="tag-you"><Icon name="UserRound" size={12} />{t(lang, "forYou")}</span>{personal.know.map((p, i) => <p key={i}>{p}</p>)}</div>
                )}
                {fiche.explanation.map((p, i) => <p key={i}>{p[lang]}</p>)}
              </>
            )}
            {s.key === "meanwhile" && (
              <ol className="steps-list">
                {(personal ? personal.meanwhile : fiche.meanwhile.map((p) => ({ text: p[lang], personal: false }))).map((p, i) => (
                  <li key={i} className={p.personal ? "personal" : undefined}><span className="num">{i + 1}</span><span>{p.text}</span></li>
                ))}
              </ol>
            )}
            {s.key === "whichDoctor" && (
              <div className="doctor-card">
                <span className="ico"><Icon name="Stethoscope" size={26} /></span>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 2 }}>{personal?.doctor ? t(lang, "forYou") : t(lang, "firstContact")}</p>
                  <p style={{ margin: 0 }}>{personal?.doctor ? <><b>{personal.doctor.who}.</b> {personal.doctor.why}</> : fiche.whichDoctor[lang]}</p>
                </div>
              </div>
            )}
            {s.key === "exams" && personal?.exams && <p className="for-you" style={{ margin: "0 0 12px" }}>{personal.exams}</p>}
            {s.key === "exams" && (
              <ul className="exam-list">
                {fiche.exams.map((p, i) => <li key={i}><Icon name={i % 2 ? "Microscope" : "TestTube"} size={20} />{p[lang]}</li>)}
              </ul>
            )}
            {s.key === "askDoctor" && (
              <>
                <p className="muted small">{t(lang, "checklistHint")}</p>
                <ul className="checklist">
                  {(personal ? personal.questions : fiche.questions.map((p) => ({ text: p[lang], personal: false }))).map((p, i) => (
                    <li key={i} className={p.personal ? "personal" : undefined}><span className="box" aria-hidden="true" />{p.text}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      ))}

      {children}

      <section className="sec" style={{ marginTop: 24 }}>
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
