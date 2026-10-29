import Link from "next/link";
import type { Metadata } from "next";
import { isLang, t, type Lang } from "@/lib/i18n";
import { THEMES } from "@/lib/content/themes";
import { qPath, SITE_URL, CONTENT_REVIEWED } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { pageTitle } from "@/lib/content/themes";

// Quelques questions mises en avant sur l'accueil (thème, symptôme, intention).
const POPULAR: [string, string, string][] = [
  ["fievre", "seule", "grave"], ["tete", "migraine", "medecin"], ["digestion", "brulures", "attente"],
  ["tension", "elevee", "grave"], ["dos", "lombaires", "attente"], ["sommeil", "endormissement", "medecin"],
  ["allergie", "nez", "attente"], ["bilan", "checkup", "examens"], ["diabete", "soif", "examens"],
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l: Lang = isLang(lang) ? lang : "fr";
  return {
    alternates: { canonical: `${SITE_URL}/${l}`, languages: { fr: `${SITE_URL}/fr`, ar: `${SITE_URL}/ar`, en: `${SITE_URL}/en`, "x-default": `${SITE_URL}/fr` } },
    robots: CONTENT_REVIEWED ? undefined : { index: false, follow: true },
  };
}

export default async function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return (
    <>
      <section className="hero">
        <h1>{t(lang, "tagline")}</h1>
        <p className="lead">{t(lang, "heroSub")}</p>
        <Link href={`/${lang}/question`} className="btn btn-primary btn-lg">
          {t(lang, "start")} <Icon name={lang === "ar" ? "ArrowLeft" : "ArrowRight"} size={20} />
        </Link>
        <div className="pills">
          <span className="pill"><Icon name="Check" size={16} />{t(lang, "free")}</span>
          <span className="pill"><Icon name="Clock" size={16} />{t(lang, "oneMinute")}</span>
          <span className="pill"><Icon name="Sparkles" size={16} />{t(lang, "noTyping")}</span>
        </div>
      </section>

      <section className="section">
        <h2>{t(lang, "themesTitle")}</h2>
        <div className="grid">
          {THEMES.map((th) => (
            <Link key={th.id} href={`/${lang}/question?theme=${th.id}`} className="tile">
              <span className="ico"><Icon name={th.icon} size={24} /></span>
              {th.label[lang]}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{t(lang, "popular")}</h2>
        <div className="list-links">
          {POPULAR.map(([thId, syId, intent]) => {
            const th = THEMES.find((x) => x.id === thId)!;
            const sy = th.symptoms.find((x) => x.id === syId)!;
            return (
              <Link key={thId + syId + intent} href={qPath(lang, th, sy, intent)}>
                <Icon name={th.icon} size={20} />
                {pageTitle(lang, th, sy, intent)}
              </Link>
            );
          })}
        </div>
      </section>

      <p className="notice notice-info section"><Icon name="CircleAlert" size={20} />{t(lang, "disclaimerShort")}</p>
    </>
  );
}
