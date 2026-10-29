import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../globals.css";
import { dir, isLang, LANG_NAMES, LANGS, t } from "@/lib/i18n";
import { currentUser } from "@/lib/auth";
import { THEMES } from "@/lib/content/themes";
import { Nav } from "@/components/Nav";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = isLang(lang) ? lang : "fr";
  return {
    title: { default: `Wedicine, ${t(l, "tagline")}`, template: "%s | Wedicine" },
    description: t(l, "heroSub"),
  };
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const user = await currentUser();
  return (
    <html lang={lang} dir={dir(lang)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+Arabic:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav lang={lang} user={user ? { firstName: user.first_name } : null} />
        <main>{children}</main>
        <footer>
          <div className="wrap">
            <div className="foot-cols">
              <div>
                <h4>Wedicine</h4>
                <p style={{ margin: 0 }}>{t(lang, "footer")}</p>
              </div>
              <div>
                <h4>{t(lang, "footerTopics")}</h4>
                {THEMES.slice(0, 6).map((th) => <Link key={th.id} href={`/${lang}/question?theme=${th.id}`}>{th.label[lang]}</Link>)}
              </div>
              <div>
                <h4>{t(lang, "footerAbout")}</h4>
                <Link href={`/${lang}/question`}>{t(lang, "start")}</Link>
                <Link href={`/${lang}/connexion`}>{t(lang, "login")}</Link>
                <Link href={`/${lang}/compte`}>{t(lang, "myQuestions")}</Link>
              </div>
              <div>
                <h4>{t(lang, "footerLang")}</h4>
                {LANGS.map((l) => <Link key={l} href={`/${l}`} lang={l}>{LANG_NAMES[l]}</Link>)}
              </div>
            </div>
            <div className="foot-legal">
              <span>{t(lang, "footerLegal")}</span>
              <span>© {new Date().getFullYear()} Wedicine</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
