import type { ReactNode } from "react";
import { t, type Lang } from "@/lib/i18n";
import type { Fiche } from "@/lib/content/types";
import type { Symptom, Theme } from "@/lib/content/themes";
import { AGES, CITIES, DURATIONS, INTENSITIES, INTENTS, WHO } from "@/lib/content/options";
import { pageTitle } from "@/lib/content/themes";
import { qPath } from "@/lib/site";
import { Icon } from "./Icon";
import type { Personal, Step } from "@/lib/personalize";
import { examPicto, stepPicto, TONES, type Picto } from "@/lib/pictos";
import { ArtAppointment, ArtDoctor, ArtExams, ArtGrave, ArtKnow, ArtMeanwhile, ArtQuestions, ArtSoon, ArtWatchHome, DurationSteps, IntensityFaces, ThemeArt } from "./Illustrations";

type Key = "whatToKnow" | "meanwhile" | "whichDoctor" | "exams" | "askDoctor";
const SECTIONS: { key: Key; icon: string; intent: string; art: () => ReactNode }[] = [
  { key: "whatToKnow", icon: "FileText", intent: "grave", art: ArtKnow },
  { key: "meanwhile", icon: "Hourglass", intent: "attente", art: ArtMeanwhile },
  { key: "whichDoctor", icon: "Stethoscope", intent: "medecin", art: ArtDoctor },
  { key: "exams", icon: "Microscope", intent: "examens", art: ArtExams },
  { key: "askDoctor", icon: "MessageCircleQuestion", intent: "questions", art: ArtQuestions },
];
const VERDICT_ART = [ArtWatchHome, ArtAppointment, ArtSoon] as const;
const LEVEL_ICON = ["House", "CalendarCheck", "Clock"] as const;
const VISIBLE_QUESTIONS = 3;

// Choix du patient utilisés pour les illustrations « Dans votre cas ».
export type CaseData = { who: string; duration: string | null; intensity: string | null; age: string | null; sex: string | null; city: string | null; signs: string[] };

// Pastille illustrée : un pictogramme coloré, lisible sans le texte.
function Pic({ p, size = 26 }: { p: Picto; size?: number }) {
  const c = TONES[p.tone];
  return <span className="pic" style={{ background: c.bg, color: c.fg }} aria-hidden="true"><Icon name={p.icon} size={size} /></span>;
}

// Bloc repliable « Lire la suite » pour le texte générique.
function More({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <details className="more">
      <summary><span className="when-closed"><Icon name="ChevronRight" size={16} />{t(lang, "readMore")}</span><span className="when-open"><Icon name="ChevronRight" size={16} />{t(lang, "showLess")}</span></summary>
      <div className="more-body">{children}</div>
    </details>
  );
}

// La fiche complète, illustrée. L'intention choisie remonte sa section en premier.
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
  const steps: Step[] = personal ? personal.meanwhile : fiche.meanwhile.map((p) => ({ text: p[lang], personal: false, picto: stepPicto(p.fr) }));
  const questions: Step[] = personal ? personal.questions : fiche.questions.map((p) => ({ text: p[lang], personal: false }));
  const visibleQ = questions.filter((q, i) => q.personal || i < VISIBLE_QUESTIONS);
  const hiddenQ = questions.filter((q, i) => !q.personal && i >= VISIBLE_QUESTIONS);
  const [firstPara, ...restParas] = fiche.explanation;
  const VerdictArt = personal ? VERDICT_ART[personal.level] : null;

  return (
    <article className="answer-page">
      {/* En-tête : titre, verdict et grande scène qui dit quoi faire. */}
      <header className={`card answer-head${personal ? " has-verdict" : ""}`}>
        <div>
          <p className="muted small" style={{ marginBottom: 6 }}>{th.label[lang]}</p>
          <h1>{pageTitle(lang, th, sy, intent)}</h1>
          {personal ? (
            <div className={`verdict lv${personal.level}`} data-level={personal.level}>
              <span className="lvl"><Icon name={LEVEL_ICON[personal.level]} size={20} />{t(lang, `level${personal.level}` as "level0")}</span>
              <p>{personal.verdict}</p>
              {personal.reasons.length > 0 && (
                <div className="reasons"><span className="reason muted">{t(lang, "basedOn")}</span>{personal.reasons.map((r, i) => <span key={i} className="reason">{r}</span>)}</div>
              )}
            </div>
          ) : (
            <p className="summary">{fiche.summary[lang]}</p>
          )}
        </div>
        {VerdictArt ? <div className="verdict-scene"><VerdictArt /></div> : <ThemeArt icon={th.icon} />}
      </header>

      {/* Quand consulter : toujours deuxième, visible sans défiler. */}
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

      {caseData && (dur >= 0 || inten >= 0 || who) ? (
        <section className="card sec case-sec">
          <h2><Icon name="UserRound" size={22} />{t(lang, "yourCase")}</h2>
          <div className="case-tiles">
            {dur >= 0 && th.duration && (
              <div className="ctile wide">
                <span className="ctile-lbl"><Icon name="Clock" size={16} />{t(lang, "timelineTitle")}</span>
                <strong className="ctile-val">{DURATIONS[dur].label[lang]}</strong>
                <DurationSteps labels={DURATIONS.map((d) => d.label[lang])} current={dur} threshold={th.consultAfter}
                  youAreHere={t(lang, "youAreHere")} consultFrom={t(lang, "consultFrom")} />
              </div>
            )}
            {inten >= 0 && (
              <div className="ctile wide">
                <span className="ctile-lbl"><Icon name="Activity" size={16} />{t(lang, "intensityTitle")}</span>
                <strong className="ctile-val">{INTENSITIES[inten].label[lang]}</strong>
                <IntensityFaces labels={INTENSITIES.map((d) => d.label[lang])} current={inten} />
              </div>
            )}
            {who && (
              <div className="ctile">
                <span className="ctile-ico"><Icon name={who.icon ?? "UserRound"} size={26} /></span>
                <span className="ctile-lbl">{t(lang, "forWhom")}</span>
                <strong className="ctile-val">{who.label[lang]}</strong>
              </div>
            )}
            {age && (
              <div className="ctile">
                <span className="ctile-ico"><Icon name="Clock" size={26} /></span>
                <span className="ctile-lbl">{t(lang, "age")}</span>
                <strong className="ctile-val">{age.label[lang]}</strong>
              </div>
            )}
            {city && (
              <div className="ctile">
                <span className="ctile-ico"><Icon name="MapPin" size={26} /></span>
                <span className="ctile-lbl">{t(lang, "city")}</span>
                <strong className="ctile-val">{city.label[lang]}</strong>
              </div>
            )}
            <div className="ctile">
              <span className="ctile-ico" style={{ background: signs.length ? "#E3FCEF" : undefined, color: signs.length ? "#006644" : undefined }}><Icon name={signs.length ? "ListChecks" : "Smile"} size={26} /></span>
              <span className="ctile-lbl">{t(lang, "signsChecked")}</span>
              {signs.length ? (
                <span className="ctile-signs">{signs.map((s) => <span key={s.id} className="picto on"><Icon name="Check" size={16} />{s.label[lang]}</span>)}</span>
              ) : <strong className="ctile-val small">{t(lang, "noSigns")}</strong>}
            </div>
          </div>
        </section>
      ) : null}

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
                {personal ? (
                  <More lang={lang}>{fiche.explanation.map((p, i) => <p key={i}>{p[lang]}</p>)}</More>
                ) : (
                  <>
                    <p>{firstPara[lang]}</p>
                    {restParas.length > 0 && <More lang={lang}>{restParas.map((p, i) => <p key={i}>{p[lang]}</p>)}</More>}
                  </>
                )}
              </>
            )}

            {s.key === "meanwhile" && (
              <ol className="steps-grid">
                {steps.map((p, i) => (
                  <li key={i} className={p.personal ? "personal" : undefined}>
                    <Pic p={p.picto ?? stepPicto("")} />
                    <span className="num" aria-hidden="true">{i + 1}</span>
                    <span className="txt">{p.text}</span>
                  </li>
                ))}
              </ol>
            )}

            {s.key === "whichDoctor" && (
              <div className="doctor-card">
                <span className="ico"><Icon name="Stethoscope" size={30} /></span>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 2 }}>{personal?.doctor ? t(lang, "forYou") : t(lang, "firstContact")}</p>
                  <p style={{ margin: 0 }}>{personal?.doctor ? <><b>{personal.doctor.who}.</b> {personal.doctor.why}</> : fiche.whichDoctor[lang]}</p>
                </div>
              </div>
            )}

            {s.key === "exams" && personal?.exams && <p className="for-you" style={{ margin: "0 0 12px" }}>{personal.exams}</p>}
            {s.key === "exams" && (
              <ul className="exam-grid">
                {fiche.exams.map((p, i) => <li key={i}><Pic p={examPicto(p.fr)} /><span className="txt">{p[lang]}</span></li>)}
              </ul>
            )}

            {s.key === "askDoctor" && (
              <>
                <p className="muted small">{t(lang, "checklistHint")}</p>
                <ul className="checklist">
                  {visibleQ.map((p, i) => <li key={i} className={p.personal ? "personal" : undefined}><span className="box" aria-hidden="true" />{p.text}</li>)}
                </ul>
                {hiddenQ.length > 0 && (
                  <More lang={lang}>
                    <ul className="checklist">{hiddenQ.map((p, i) => <li key={i}><span className="box" aria-hidden="true" />{p.text}</li>)}</ul>
                  </More>
                )}
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
