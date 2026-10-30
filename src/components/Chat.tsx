import { Fragment, useEffect, useRef, useState } from "react";
import { LANG_NAMES, LANGS, UI, t, type Lang, type UIKey } from "@/lib/i18n";
import { ADULT_AGES, AGES, ALERTS, CHILD_AGES, CITIES, DURATIONS, INTENSITIES, INTENTS, WHO, ZONES, type Option } from "@/lib/content/options";
import { THEMES, theme as getTheme } from "@/lib/content/themes";
import { isUrgent, type Answers } from "@/lib/triage";
import { Icon } from "./Icon";

// Le questionnaire est une conversation : Wedicine pose une question, le patient touche une réponse.
// Aucun champ libre. L'historique se déduit des réponses : revenir en arrière, c'est effacer la dernière.

type Step = "who" | "theme" | "symptom" | "zone" | "intensity" | "duration" | "signs" | "age" | "sex" | "pregnant" | "city" | "intent";
type Result = { id: number; urgent: boolean; next: string | null };
type Choice = { id: string; label: string; icon?: string; alert?: boolean };

const EMPTY: Answers = {
  who: "", theme: "", symptom: "", zone: null, intensity: null, duration: null, signs: [],
  age: null, sex: null, pregnant: null, city: null, intent: "",
};
const ORDER: Step[] = ["who", "theme", "symptom", "zone", "intensity", "duration", "signs", "age", "sex", "pregnant", "city", "intent"];
const NO_PREGNANCY_AGES = ["a0", "a1", "a2", "a7"];
const QUESTION: Record<Step, UIKey> = {
  who: "cWho", theme: "cTheme", symptom: "cSymptom", zone: "cZone", intensity: "cIntensity", duration: "cDuration",
  signs: "cSigns", age: "cAge", sex: "cSex", pregnant: "cPregnant", city: "cCity", intent: "cIntent",
};

// Les questions posées, dans l'ordre. Celles qui dépendent du sujet sont estimées tant qu'il n'est pas choisi.
function stepsFor(a: Answers, themeFirst: boolean): Step[] {
  const th = getTheme(a.theme);
  const s: Step[] = themeFirst ? ["theme", "who", "symptom"] : ["who", "theme", "symptom"];
  if (th) {
    if (th.zones) s.push("zone");
    if (th.intensity) s.push("intensity");
    if (th.duration) s.push("duration");
    if (th.signs.length || th.alerts.length) s.push("signs");
  } else s.push("duration", "signs");
  s.push("age");
  if (a.who !== "enfant") s.push("sex");
  if (a.who !== "enfant" && a.sex === "f" && a.age && !NO_PREGNANCY_AGES.includes(a.age)) s.push("pregnant");
  s.push("city", "intent");
  return s;
}

// Efface tout ce qui vient après une question (les réponses suivantes ne valent plus rien).
function cleared(a: Answers, step: Step, themeFirst: boolean): Answers {
  let keys = ORDER.slice(ORDER.indexOf(step) + 1);
  if (themeFirst && step === "who") keys = keys.filter((k) => k !== "theme");
  if (themeFirst && step === "theme") keys = ["who", ...keys];
  const out = { ...a };
  for (const k of keys) (out as Record<Step, unknown>)[k] = EMPTY[k];
  return out;
}

export function Chat({ lang, initialTheme }: { lang: Lang; initialTheme?: string }) {
  const start = getTheme(initialTheme ?? "") ? initialTheme! : "";
  const [themeFirst, setThemeFirst] = useState(!!start);
  const [a, setA] = useState<Answers>({ ...EMPTY, theme: start });
  const [i, setI] = useState(start ? 1 : 0);
  const [busy, setBusy] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const footRef = useRef<HTMLDivElement>(null);

  const th = getTheme(a.theme);
  const steps = stepsFor(a, themeFirst);
  const step = steps[Math.min(i, steps.length - 1)];
  const intro = i === 0;
  const sep = lang === "ar" ? "، " : ", ";
  const variant = a.who === "enfant" ? "Child" : a.who === "proche" ? "Other" : "";

  useEffect(() => {
    if (intro) return;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: smooth ? "smooth" : "auto" });
  }, [i, urgent, busy, intro]);

  const lbl = (list: { id: string; label: Record<Lang, string> }[], id: string | null) => list.find((o) => o.id === id)?.label[lang] ?? "";
  const question = (s: Step) => { const k = `${QUESTION[s]}${variant}`; return t(lang, (k in UI ? k : QUESTION[s]) as UIKey); };

  function answerText(s: Step): string {
    switch (s) {
      case "who": return lbl(WHO, a.who);
      case "theme": return lbl(THEMES, a.theme);
      case "symptom": return lbl(th?.symptoms ?? [], a.symptom);
      case "zone": return lbl(ZONES, a.zone);
      case "intensity": return lbl(INTENSITIES, a.intensity);
      case "duration": return lbl(DURATIONS, a.duration);
      case "signs": return a.signs.length ? a.signs.map((id) => lbl([...(th?.signs ?? []), ...ALERTS], id)).join(sep) : t(lang, "noneSigns");
      case "age": return lbl(AGES, a.age);
      case "sex": return a.sex === "f" ? t(lang, "female") : t(lang, "male");
      case "pregnant": return a.pregnant ? t(lang, "yes") : t(lang, "no");
      case "city": return lbl(CITIES, a.city);
      case "intent": return lbl(INTENTS, a.intent);
    }
  }

  function choices(): Choice[] {
    const of = (list: Option[]) => list.map((o) => ({ id: o.id, label: o.label[lang], icon: o.icon }));
    switch (step) {
      case "who": return of(WHO);
      case "theme": return of(THEMES);
      case "symptom": return of(th?.symptoms ?? []);
      case "zone": return of(ZONES.filter((z) => th?.zones?.includes(z.id)));
      case "intensity": return of(INTENSITIES);
      case "duration": return of(DURATIONS);
      case "signs": return [...of(th?.signs ?? []), ...of(ALERTS.filter((al) => th?.alerts.includes(al.id))).map((c) => ({ ...c, alert: true }))];
      case "age": return of(AGES.filter((x) => (a.who === "enfant" ? CHILD_AGES : a.who === "moi" ? ADULT_AGES : AGES.map((y) => y.id)).includes(x.id)));
      case "sex": return [{ id: "f", label: t(lang, "female") }, { id: "m", label: t(lang, "male") }];
      case "pregnant": return [{ id: "yes", label: t(lang, "yes") }, { id: "no", label: t(lang, "no") }];
      case "city": return of(CITIES);
      case "intent": return of(INTENTS);
    }
  }

  async function send(answers: Answers, follow: boolean) {
    setBusy(true); setError(null);
    try {
      const r = await fetch("/api/questions", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...answers, lang }),
      });
      if (!r.ok) throw new Error(String(r.status));
      const data: Result = await r.json();
      if (data.urgent) { setUrgent(true); setBusy(false); return; }
      if (follow && data.next) { window.location.assign(data.next); return; }  // on reste « occupé » jusqu'à la nouvelle page
      setBusy(false);
    } catch {
      setBusy(false);
      if (follow) setError(t(lang, "error"));
    }
  }

  // Une réponse qui révèle une urgence arrête tout : les numéros s'affichent, la question est enregistrée en arrière-plan.
  function advance(next: Answers) {
    setA(next);
    if (isUrgent(next)) { setUrgent(true); void send({ ...next, intent: next.intent || "grave" }, false); return; }
    if (step === "intent") { void send(next, true); return; }
    setI(i + 1);
  }

  function pick(id: string) {
    if (busy) return;
    if (step === "signs") { setA({ ...a, signs: a.signs.includes(id) ? a.signs.filter((x) => x !== id) : [...a.signs, id] }); return; }
    const value: Partial<Answers> = step === "pregnant" ? { pregnant: id === "yes" } : { [step]: id };
    advance({ ...cleared(a, step, themeFirst), ...value });
  }

  function back() {
    if (busy || i === 0) return;
    const prev = steps[i - 1];
    setError(null);
    setA(cleared({ ...a, [prev]: EMPTY[prev] }, prev, themeFirst));
    setI(i - 1);
  }

  function undoUrgent() {
    setUrgent(false);
    setA(cleared({ ...a, [step]: EMPTY[step] }, step, themeFirst));
  }

  function startWith(themeId: string) {
    setThemeFirst(true);
    setA({ ...EMPTY, theme: themeId });
    setI(1);
  }

  const sym = <img src="/brand/symbole.svg" alt="" width={22} height={22} className="wd-sym" />;
  const counter = t(lang, "questionN").replace("{n}", String(i + 1)).replace("{total}", String(steps.length));
  const finishing = busy && step === "intent";

  const composer = (
    <div className="composer">
      {intro && <p className="composer-q">{question(step)}</p>}
      <div className="opts">
        {choices().map((c) => (
          <button key={c.id} type="button" className={`opt${c.alert ? " alert" : ""}`} disabled={busy}
            aria-pressed={step === "signs" ? a.signs.includes(c.id) : undefined} onClick={() => pick(c.id)}>
            {c.icon && <Icon name={c.icon} size={16} />}{c.label}
          </button>
        ))}
        {step === "signs" && <button type="button" className="opt" disabled={busy} onClick={() => advance({ ...cleared(a, "signs", themeFirst), signs: [] })}>{t(lang, "noneSigns")}</button>}
      </div>
      {error && <p className="error" role="alert" style={{ margin: 0, fontSize: 14 }}>{error}</p>}
      <div className="composer-foot">
        {intro ? <span>{counter}</span> : <button type="button" className="link" onClick={back} disabled={busy}>{t(lang, "editPrev")}</button>}
        {step === "signs" && a.signs.length > 0
          ? <button type="button" className="btn btn-primary btn-xs" disabled={busy} onClick={() => advance(cleared(a, "signs", themeFirst))}>{t(lang, "next")}</button>
          : <span>{intro ? t(lang, "freeNoAccount") : counter}</span>}
      </div>
    </div>
  );

  const legal = (
    <div className="chat-legal">
      <span>{t(lang, "emergencyLine")} {t(lang, "notDoctor")}</span>
      {intro && <nav>{LANGS.map((l) => <a key={l} href={`/${l}`} lang={l} aria-current={l === lang ? "true" : undefined}>{LANG_NAMES[l]}</a>)}</nav>}
    </div>
  );

  if (intro) {
    return (
      <div className="chat intro">
        <div className="chat-main">
          <div className="chat-hero">
            <img src="/brand/symbole.svg" alt="" width={44} height={44} />
            <h1>{t(lang, "chatTitle")}</h1>
            <p>{t(lang, "chatSub")}</p>
          </div>
          {composer}
          <nav className="topics" aria-label={t(lang, "themesTitle")}>
            {THEMES.map((x) => <a key={x.id} className="topic" href={`/${lang}?theme=${x.id}`} onClick={(e) => { e.preventDefault(); startWith(x.id); }}>{x.label[lang]}</a>)}
          </nav>
        </div>
        {legal}
      </div>
    );
  }

  return (
    <div className="chat conv">
      <div className="chat-log">
        {steps.slice(0, i).map((s, k) => (
          <Fragment key={s}>
            <div className="msg-wd">{k === 0 ? sym : <span className="wd-sp" aria-hidden="true" />}<p>{question(s)}</p></div>
            <div className="msg-me">{answerText(s)}</div>
          </Fragment>
        ))}
        <div className="msg-wd"><span className="wd-sp" aria-hidden="true" /><p>{question(step)}</p></div>
        {(urgent || finishing) && <div className="msg-me">{answerText(step)}</div>}
        {finishing && <div className="msg-wd"><span className="wd-sp" aria-hidden="true" /><p className="typing" aria-label="…">•••</p></div>}
        {urgent && (
          <div className="msg-wd urgent-msg" role="alert">
            {sym}
            <div>
              <p className="u-title">{t(lang, "urgentTitle")}</p>
              <p>{t(lang, "urgentText")}</p>
              <div className="calls">
                <a href="tel:141" className="btn btn-danger"><Icon name="Phone" size={16} /> {t(lang, "callSamu")}</a>
                <a href="tel:15" className="btn btn-danger"><Icon name="Phone" size={16} /> {t(lang, "callCivil")}</a>
              </div>
              <button type="button" className="link" onClick={undoUrgent}>{t(lang, "urgentBack")}</button>
            </div>
          </div>
        )}
      </div>
      <div className="chat-foot" ref={footRef}>
        {!urgent && !finishing && composer}
        {legal}
      </div>
    </div>
  );
}
