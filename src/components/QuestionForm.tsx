import { useMemo, useState } from "react";
import { t, type Lang } from "@/lib/i18n";
import { ADULT_AGES, AGES, ALERTS, CHILD_AGES, CITIES, DURATIONS, INTENSITIES, INTENTS, WHO, ZONES, type Option } from "@/lib/content/options";
import { THEMES, theme as getTheme } from "@/lib/content/themes";
import { isUrgent, type Answers } from "@/lib/triage";
import { Icon } from "./Icon";

type Step = "who" | "theme" | "symptom" | "zone" | "intensity" | "duration" | "signs" | "profile" | "intent";
type Result = { id: number; urgent: boolean; next: string | null };

const EMPTY: Answers = {
  who: "", theme: "", symptom: "", zone: null, intensity: null, duration: null, signs: [],
  age: null, sex: null, pregnant: null, city: null, intent: "",
};

export function QuestionForm({ lang, initialTheme }: { lang: Lang; initialTheme?: string }) {
  const [a, setA] = useState<Answers>({ ...EMPTY, theme: getTheme(initialTheme ?? "") ? initialTheme! : "" });
  const [i, setI] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const th = getTheme(a.theme);
  const steps = useMemo<Step[]>(() => {
    const s: Step[] = ["who", "theme", "symptom"];
    if (th?.zones) s.push("zone");
    if (th?.intensity) s.push("intensity");
    if (th?.duration) s.push("duration");
    if (th && (th.signs.length || th.alerts.length)) s.push("signs");
    s.push("profile", "intent");
    return s;
  }, [th]);
  const step = steps[Math.min(i, steps.length - 1)];
  const set = (patch: Partial<Answers>) => setA((x) => ({ ...x, ...patch }));
  const next = () => setI((x) => Math.min(x + 1, steps.length - 1));
  const back = () => { setError(null); setI((x) => Math.max(x - 1, 0)); };

  async function submit(answers: Answers) {
    setBusy(true); setError(null);
    try {
      const r = await fetch("/api/questions", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...answers, lang }),
      });
      if (!r.ok) throw new Error(String(r.status));
      const data: Result = await r.json();
      if (!data.urgent && data.next) { window.location.assign(data.next); return; }
      setResult(data);
      window.scrollTo({ top: 0 });
    } catch {
      setError(t(lang, "error"));
    } finally {
      setBusy(false);
    }
  }

  // Dès qu'une réponse révèle une urgence, on envoie tout de suite sans finir le formulaire.
  function continueOrTriage(patch: Partial<Answers> = {}) {
    const merged = { ...a, ...patch, intent: a.intent || "grave" };
    if (isUrgent(merged)) { setA(merged); void submit(merged); return; }
    next();
  }

  if (result?.urgent) return <Urgent lang={lang} onBack={() => { setResult(null); setI(steps.indexOf("signs") >= 0 ? steps.indexOf("signs") : 0); }} />;

  const label = (o: Option) => o.label[lang];
  const choose = (patch: Partial<Answers>, auto = true) => { set(patch); if (auto) setTimeout(next, 120); };

  return (
    <div className="form">
      <div className="progress" aria-hidden="true"><div style={{ width: `${((i + 1) / steps.length) * 100}%` }} /></div>
      <div className="step-head">
        <h1 style={{ fontSize: "1.6rem" }}>{title(lang, step, a)}</h1>
        <span className="muted small">{t(lang, "step")} {i + 1} {t(lang, "of")} {steps.length} · {Math.round(((i + 1) / steps.length) * 100)} %</span>
      </div>
      <p className="hint">{hint(lang, step)}</p>

      <div key={step} className="step-in">
      {step === "who" && (
        <div className="grid">
          {WHO.map((o) => <Tile key={o.id} icon={o.icon} label={label(o)} on={a.who === o.id} onClick={() => choose({ who: o.id, age: null, pregnant: null })} />)}
        </div>
      )}

      {step === "theme" && (
        <div className="grid">
          {THEMES.map((x) => <Tile key={x.id} icon={x.icon} label={x.label[lang]} on={a.theme === x.id}
            onClick={() => choose({ theme: x.id, symptom: "", zone: null, intensity: null, duration: null, signs: [] })} />)}
        </div>
      )}

      {step === "symptom" && th && (
        <div className="grid choices-wide" style={{ gridTemplateColumns: "1fr" }}>
          {th.symptoms.map((s) => <Tile key={s.id} icon={th.icon} label={s.label[lang]} on={a.symptom === s.id} onClick={() => choose({ symptom: s.id })} />)}
        </div>
      )}

      {step === "zone" && th?.zones && (
        <div className="grid">
          {ZONES.filter((z) => th.zones!.includes(z.id)).map((z) => <Tile key={z.id} icon="MapPin" label={label(z)} on={a.zone === z.id} onClick={() => choose({ zone: z.id })} />)}
        </div>
      )}

      {step === "intensity" && (
        <div className="grid">
          {INTENSITIES.map((o) => <Tile key={o.id} icon={o.icon} label={label(o)} on={a.intensity === o.id} alert={o.id === "4"}
            onClick={() => { set({ intensity: o.id }); setTimeout(() => continueOrTriage({ intensity: o.id }), 120); }} />)}
        </div>
      )}

      {step === "duration" && (
        <div className="grid">
          {DURATIONS.map((o) => <Tile key={o.id} icon="Clock" label={label(o)} on={a.duration === o.id} onClick={() => choose({ duration: o.id })} />)}
        </div>
      )}

      {step === "signs" && th && (
        <>
          <p className="muted">{t(lang, "qSignsHint")}</p>
          <div className="grid">
            {th.signs.map((s) => <Tile key={s.id} icon="Check" label={s.label[lang]} on={a.signs.includes(s.id)} onClick={() => toggle(s.id)} />)}
            <Tile icon="Smile" label={t(lang, "nothingElse")} on={a.signs.length === 0 && i > 0 && false} onClick={() => { set({ signs: [] }); next(); }} />
          </div>
          {th.alerts.length > 0 && (
            <>
              <h2 style={{ marginTop: 24, fontSize: "1.1rem" }}>{t(lang, "alertGroup")}</h2>
              <div className="grid choices-wide" style={{ gridTemplateColumns: "1fr" }}>
                {ALERTS.filter((al) => th.alerts.includes(al.id)).map((al) => (
                  <Tile key={al.id} icon={al.icon} label={label(al)} alert on={a.signs.includes(al.id)} onClick={() => toggle(al.id)} />
                ))}
              </div>
            </>
          )}
        </>
      )}

      {step === "profile" && <Profile lang={lang} a={a} set={set} />}

      {step === "intent" && (
        <div className="grid choices-wide" style={{ gridTemplateColumns: "1fr" }}>
          {INTENTS.map((o) => <Tile key={o.id} icon={o.icon} label={label(o)} on={a.intent === o.id}
            onClick={() => { const merged = { ...a, intent: o.id }; setA(merged); void submit(merged); }} />)}
        </div>
      )}

      </div>

      {error && <p className="error" role="alert" style={{ marginTop: 16 }}>{error}</p>}

      <div className="form-nav no-print">
        <button type="button" className="btn btn-text" onClick={back} disabled={i === 0 || busy}>
          <Icon name={lang === "ar" ? "ArrowRight" : "ArrowLeft"} size={18} /> {t(lang, "back")}
        </button>
        {(step === "signs" || step === "profile") && (
          <button type="button" className="btn btn-primary" disabled={busy || (step === "profile" && !profileDone(a))} onClick={() => continueOrTriage()}>
            {busy ? "…" : t(lang, "next")} <Icon name={lang === "ar" ? "ArrowLeft" : "ArrowRight"} size={18} />
          </button>
        )}
        {busy && step === "intent" && <span className="muted">…</span>}
      </div>
    </div>
  );

  function toggle(id: string) {
    set({ signs: a.signs.includes(id) ? a.signs.filter((x) => x !== id) : [...a.signs, id] });
  }
}

function profileDone(a: Answers) {
  if (!a.age || !a.city) return false;
  if (a.who !== "enfant" && !a.sex) return false;
  return true;
}

function title(l: Lang, step: Step, a: Answers) {
  switch (step) {
    case "who": return t(l, "qWho");
    case "theme": return t(l, "qTheme");
    case "symptom": return t(l, "qSymptom");
    case "zone": return t(l, "qZone");
    case "intensity": return t(l, "qIntensity");
    case "duration": return t(l, "qDuration");
    case "signs": return t(l, "qSigns");
    case "profile": return a.who === "moi" ? t(l, "qProfile") : t(l, "qProfileOther");
    case "intent": return t(l, "qIntent");
  }
}

// Pourquoi on pose la question : une ligne sous chaque titre, comme un conseiller qui explique.
function hint(l: Lang, step: Step) {
  switch (step) {
    case "who": return t(l, "hintWho");
    case "theme": return t(l, "hintTheme");
    case "symptom": return t(l, "hintSymptom");
    case "zone": return t(l, "hintZone");
    case "intensity": return t(l, "hintIntensity");
    case "duration": return t(l, "hintDuration");
    case "signs": return t(l, "hintSigns");
    case "profile": return t(l, "hintProfile");
    case "intent": return t(l, "hintIntent");
  }
}

function Tile({ icon, label, on, onClick, alert }: { icon?: string; label: string; on: boolean; onClick: () => void; alert?: boolean }) {
  return (
    <button type="button" className={`tile${alert ? " alert" : ""}`} aria-pressed={on} onClick={onClick}>
      <span className="ico"><Icon name={icon ?? "Check"} size={24} /></span>
      <span>{label}</span>
      {on && <Icon name="Check" size={20} className="count" />}
    </button>
  );
}

function Profile({ lang, a, set }: { lang: Lang; a: Answers; set: (p: Partial<Answers>) => void }) {
  const ages = a.who === "enfant" ? AGES.filter((x) => CHILD_AGES.includes(x.id)) : a.who === "moi" ? AGES.filter((x) => ADULT_AGES.includes(x.id)) : AGES;
  const askSex = a.who !== "enfant";
  const askPregnant = askSex && a.sex === "f" && a.age && !["a0", "a1", "a2", "a7"].includes(a.age);
  return (
    <>
      <div className="field">
        <span className="label">{t(lang, "age")}</span>
        <div className="row">{ages.map((o) => <Chip key={o.id} on={a.age === o.id} label={o.label[lang]} onClick={() => set({ age: o.id })} />)}</div>
      </div>
      {askSex && (
        <div className="field">
          <span className="label">{t(lang, "sex")}</span>
          <div className="row">
            <Chip on={a.sex === "f"} label={t(lang, "female")} onClick={() => set({ sex: "f" })} />
            <Chip on={a.sex === "m"} label={t(lang, "male")} onClick={() => set({ sex: "m", pregnant: null })} />
          </div>
        </div>
      )}
      {askPregnant && (
        <div className="field">
          <span className="label">{t(lang, "pregnant")}</span>
          <div className="row">
            <Chip on={a.pregnant === true} label={t(lang, "yes")} onClick={() => set({ pregnant: true })} />
            <Chip on={a.pregnant === false} label={t(lang, "no")} onClick={() => set({ pregnant: false })} />
          </div>
        </div>
      )}
      <div className="field">
        <span className="label">{t(lang, "city")}</span>
        <div className="row">{CITIES.map((o) => <Chip key={o.id} on={a.city === o.id} label={o.label[lang]} onClick={() => set({ city: o.id })} />)}</div>
      </div>
    </>
  );
}

function Chip({ on, label, onClick }: { on: boolean; label: string; onClick: () => void }) {
  return <button type="button" className="chip" aria-pressed={on} onClick={onClick}>{label}</button>;
}

function Urgent({ lang, onBack }: { lang: Lang; onBack: () => void }) {
  return (
    <div className="urgent">
      <div className="big"><Icon name="Siren" size={44} /></div>
      <h1>{t(lang, "urgentTitle")}</h1>
      <p className="muted" style={{ fontSize: "1.1rem" }}>{t(lang, "urgentText")}</p>
      <div className="calls">
        <a href="tel:141" className="btn btn-danger btn-lg"><Icon name="Phone" size={22} /> {t(lang, "callSamu")}</a>
        <a href="tel:15" className="btn btn-danger btn-lg"><Icon name="Phone" size={22} /> {t(lang, "callCivil")}</a>
      </div>
      <button type="button" className="btn btn-text" onClick={onBack}>{t(lang, "urgentBack")}</button>
    </div>
  );
}
