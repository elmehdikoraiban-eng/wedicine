import Link from "next/link";
import type { Metadata } from "next";
import { isLang, t, type Lang } from "@/lib/i18n";
import { pageTitle, THEMES } from "@/lib/content/themes";
import { qPath, SITE_URL, CONTENT_REVIEWED } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { Account, AnswerSheet, Choose, Community, PhoneForm, Urgent } from "@/components/Illustrations";

// Quelques questions mises en avant sur l'accueil (thème, symptôme, intention).
const POPULAR: [string, string, string][] = [
  ["fievre", "seule", "grave"], ["tete", "migraine", "medecin"], ["digestion", "brulures", "attente"],
  ["tension", "elevee", "grave"], ["dos", "lombaires", "attente"], ["sommeil", "endormissement", "medecin"],
  ["allergie", "nez", "attente"], ["bilan", "checkup", "examens"], ["diabete", "soif", "examens"],
];
const EXAMPLE: [string, string, string] = ["fievre", "seule", "grave"];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l: Lang = isLang(lang) ? lang : "fr";
  return {
    alternates: { canonical: `${SITE_URL}/${l}`, languages: { fr: `${SITE_URL}/fr`, ar: `${SITE_URL}/ar`, en: `${SITE_URL}/en`, "x-default": `${SITE_URL}/fr` } },
    robots: CONTENT_REVIEWED ? undefined : { index: false, follow: true },
  };
}

function page([thId, syId, intent]: [string, string, string], lang: Lang) {
  const th = THEMES.find((x) => x.id === thId)!;
  const sy = th.symptoms.find((x) => x.id === syId)!;
  return { th, sy, intent, href: qPath(lang, th, sy, intent), title: pageTitle(lang, th, sy, intent) };
}

export default async function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const example = page(EXAMPLE, lang);
  const arrow = lang === "ar" ? "ArrowLeft" : "ArrowRight";
  return (
    <>
      {/* Héros : titre à gauche, maquette téléphone à droite, fond blanc. */}
      <section className="wrap hero">
        <div>
          <p className="eyebrow">{t(lang, "heroEyebrow")}</p>
          <h1>{t(lang, "tagline")}</h1>
          <p className="lead">{t(lang, "heroSub")}</p>
          <div className="actions">
            <Link href={`/${lang}/question`} className="btn btn-primary btn-lg">{t(lang, "startFree")}</Link>
            <Link href={example.href} className="btn btn-ghost btn-lg">{t(lang, "seeExample")}</Link>
          </div>
        </div>
        <PhoneForm className="art" />
      </section>

      {/* Comment ça marche : trois étapes illustrées sur bande neutre. */}
      <section className="band band-neutral" id="comment">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{t(lang, "howEyebrow")}</p>
            <h2>{t(lang, "howTitle")}</h2>
          </div>
          <div className="steps">
            <article className="step"><Choose /><h3>{t(lang, "step1Title")}</h3><p className="muted">{t(lang, "step1Text")}</p></article>
            <article className="step"><Account /><h3>{t(lang, "step2Title")}</h3><p className="muted">{t(lang, "step2Text")}</p></article>
            <article className="step"><AnswerSheet /><h3>{t(lang, "step3Title")}</h3><p className="muted">{t(lang, "step3Text")}</p></article>
          </div>
        </div>
      </section>

      {/* Bande bleue : contenu d'une réponse. */}
      <section className="band band-blue">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{t(lang, "receiveEyebrow")}</p>
            <h2>{t(lang, "receiveTitle")}</h2>
          </div>
          <div className="features">
            <div className="feature"><span className="ico"><Icon name="CircleAlert" size={22} /></span><h4 style={{ color: "#fff" }}>{t(lang, "seeQuickly")}</h4><p>{t(lang, "receiveGrave")}</p></div>
            <div className="feature"><span className="ico"><Icon name="UserRound" size={22} /></span><h4 style={{ color: "#fff" }}>{t(lang, "yourCase")}</h4><p>{t(lang, "receiveCase")}</p></div>
            <div className="feature"><span className="ico"><Icon name="Stethoscope" size={22} /></span><h4 style={{ color: "#fff" }}>{t(lang, "whichDoctor")}</h4><p>{t(lang, "receiveDoctor")}</p></div>
            <div className="feature"><span className="ico"><Icon name="MessageCircleQuestion" size={22} /></span><h4 style={{ color: "#fff" }}>{t(lang, "askDoctor")}</h4><p>{t(lang, "receiveQuestions")}</p></div>
          </div>
        </div>
      </section>

      {/* Sujets */}
      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <h2>{t(lang, "themesTitle")}</h2>
          </div>
          <div className="grid">
            {THEMES.map((th) => (
              <Link key={th.id} href={`/${lang}/question?theme=${th.id}`} className="tile">
                <span className="ico"><Icon name={th.icon} size={24} /></span>
                {th.label[lang]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Urgence et entraide : deux blocs illustrés. */}
      <section className="band band-neutral">
        <div className="wrap" style={{ display: "grid", gap: 48 }}>
          <div className="split">
            <div>
              <p className="eyebrow">{t(lang, "urgentHomeEyebrow")}</p>
              <h2>{t(lang, "urgentHomeTitle")}</h2>
              <p className="lead">{t(lang, "urgentHomeText")}</p>
            </div>
            <Urgent />
          </div>
          <div className="split flip">
            <div>
              <p className="eyebrow">{t(lang, "publicEyebrow")}</p>
              <h2>{t(lang, "publicTitle")}</h2>
              <p className="lead">{t(lang, "publicText")}</p>
            </div>
            <Community />
          </div>
        </div>
      </section>

      {/* Questions fréquentes */}
      <section className="band">
        <div className="wrap">
          <div className="section-head"><h2>{t(lang, "popular")}</h2></div>
          <div className="list-links">
            {POPULAR.map((p) => { const x = page(p, lang); return <Link key={x.href} href={x.href}><Icon name={x.th.icon} size={20} />{x.title}</Link>; })}
          </div>
        </div>
      </section>

      {/* Confiance */}
      <section className="band band-neutral">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 760 }}>
          <h2>{t(lang, "trustTitle")}</h2>
          <p className="lead">{t(lang, "trustText")}</p>
          <Link href={`/${lang}/question`} className="btn btn-primary btn-lg" style={{ marginTop: 8 }}>{t(lang, "start")} <Icon name={arrow} size={20} /></Link>
        </div>
      </section>
    </>
  );
}
