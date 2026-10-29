import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { t, type Lang } from "@/lib/i18n";
import { fiche } from "@/lib/content/fiches";
import { findPage, pageTitle } from "@/lib/content/themes";
import { AGES, CITIES, INTENTS } from "@/lib/content/options";
import { publicAskers } from "@/lib/db";
import { publicName } from "@/lib/auth";
import { alternates, CONTENT_REVIEWED, formatDate, qPath, SITE_URL } from "@/lib/site";
import { Answer } from "@/components/Answer";
import { Icon } from "@/components/Icon";

// La liste des patients change : la page est rendue à la demande.
export const dynamic = "force-dynamic";

type P = { params: Promise<{ lang: Lang; slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, slug } = await params;
  const page = findPage(lang, decodeURIComponent(slug));
  if (!page) return {};
  const f = fiche(page.theme.id, page.symptom.id);
  return {
    title: pageTitle(lang, page.theme, page.symptom, page.intent),
    description: f?.summary[lang].slice(0, 160),
    alternates: { canonical: `${SITE_URL}${qPath(lang, page.theme, page.symptom, page.intent)}`, languages: alternates(page.theme, page.symptom, page.intent) },
    // Pas d'indexation avant relecture médicale.
    robots: CONTENT_REVIEWED ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: { title: pageTitle(lang, page.theme, page.symptom, page.intent), description: f?.summary[lang], type: "article", locale: lang },
  };
}

export default async function PublicPage({ params }: P) {
  const { lang, slug } = await params;
  const page = findPage(lang, decodeURIComponent(slug));
  if (!page) notFound();
  const { theme: th, symptom: sy, intent } = page;
  const f = fiche(th.id, sy.id);
  if (!f) notFound();
  const askers = await publicAskers(th.id, sy.id, intent).catch(() => []);
  const title = pageTitle(lang, th, sy, intent);
  const it = INTENTS.find((i) => i.id === intent)!;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    inLanguage: lang,
    url: `${SITE_URL}${qPath(lang, th, sy, intent)}`,
    about: { "@type": "MedicalSymptom", name: sy.label[lang] },
    audience: { "@type": "Patient" },
    lastReviewed: undefined,
    mainEntity: {
      "@type": "Question",
      name: title,
      acceptedAnswer: { "@type": "Answer", text: f.summary[lang] },
    },
    publisher: { "@type": "Organization", name: "Wedicine", url: SITE_URL },
  };

  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Answer lang={lang} fiche={f} th={th} sy={sy} intent={intent}>
        <section className="card sec" style={{ marginTop: 16 }}>
          <h2><Icon name="Users" size={22} />{t(lang, "othersAsked")}</h2>
          {askers.length === 0 ? (
            <p className="muted">—</p>
          ) : (
            <div className="askers">
              {askers.map((p) => (
                <span key={p.id} className="asker">
                  <b>{publicName(p.first_name, p.last_name)}</b>
                  {p.age && <>, {AGES.find((x) => x.id === p.age)?.label[lang]}</>}
                  {p.city && p.city !== "autre" && <>, {CITIES.find((x) => x.id === p.city)?.label[lang]}</>}
                  <span className="muted"> · {formatDate(p.created_at, lang)}</span>
                </span>
              ))}
            </div>
          )}
          <p style={{ marginTop: 16, marginBottom: 0 }}>
            <Link href={`/${lang}/question?theme=${th.id}`} className="btn btn-primary">
              <Icon name={it.icon ?? "ArrowRight"} size={18} /> {t(lang, "start")}
            </Link>
          </p>
        </section>
      </Answer>
    </div>
  );
}
