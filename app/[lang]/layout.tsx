import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { dir, isLang, LANGS, t } from "@/lib/i18n";
import { currentUser } from "@/lib/auth";
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
      <body>
        <Nav lang={lang} user={user ? { firstName: user.first_name } : null} />
        <main>
          <div className="wrap">{children}</div>
        </main>
        <footer>
          <div className="wrap">
            <span>{t(lang, "footer")}</span>
            <span>© {new Date().getFullYear()} Wedicine</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
