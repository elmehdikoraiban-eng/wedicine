import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { t, type Lang } from "@/lib/i18n";
import { currentUser } from "@/lib/auth";
import { questionById } from "@/lib/db";
import { fiche } from "@/lib/content/fiches";
import { pageTitle, symptom, theme } from "@/lib/content/themes";
import { caseLines } from "@/lib/case";
import { qPath } from "@/lib/site";
import { Answer } from "@/components/Answer";
import { PublishToggle } from "@/components/PublishToggle";
import { Icon } from "@/components/Icon";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: t(lang, "myQuestions"), robots: { index: false } };
}

export default async function MyAnswer({ params }: { params: Promise<{ lang: Lang; id: string }> }) {
  const { lang, id } = await params;
  const user = await currentUser();
  if (!user) redirect(`/${lang}/connexion?next=/${lang}/compte/q/${id}`);
  const q = await questionById(Number(id));
  if (!q || q.user_id !== user.id) notFound();
  const th = theme(q.theme); const sy = th && symptom(th, q.symptom); const f = th && sy && fiche(th.id, sy.id);
  if (!th || !sy || !f) notFound();

  if (q.urgent) {
    return (
      <div className="urgent">
        <div className="big"><Icon name="Siren" size={44} /></div>
        <h1>{t(lang, "urgentTitle")}</h1>
        <p className="muted">{t(lang, "urgentText")}</p>
        <div className="calls">
          <a href="tel:15" className="btn btn-danger btn-lg"><Icon name="Phone" size={22} /> {t(lang, "call15")}</a>
          <a href="tel:141" className="btn btn-danger btn-lg"><Icon name="Phone" size={22} /> {t(lang, "call141")}</a>
        </div>
      </div>
    );
  }

  const lines = caseLines({ ...q, intensity: q.intensity == null ? null : String(q.intensity) }, lang);
  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <p className="no-print"><Link href={`/${lang}/compte`}>← {t(lang, "myQuestions")}</Link></p>
      <Answer lang={lang} fiche={f} th={th} sy={sy} intent={q.intent} caseLines={lines}>
        <section className="card no-print" style={{ marginTop: 16 }}>
          <PublishToggle lang={lang} id={q.id} isPublic={q.is_public} />
          <p className="muted small" style={{ margin: "10px 0 0" }}>{t(lang, "consentPublish")}</p>
          <div className="row" style={{ marginTop: 12 }}>
            <Link href={qPath(lang, th, sy, q.intent)} className="btn btn-ghost" style={{ minHeight: 40 }}><Icon name="Globe" size={16} /> {t(lang, "publicPage")}</Link>
            <Link href={`/${lang}/question`} className="btn btn-ghost" style={{ minHeight: 40 }}>{t(lang, "newQuestion")}</Link>
          </div>
        </section>
      </Answer>
      <p className="visually-hidden">{pageTitle(lang, th, sy, q.intent)}</p>
    </div>
  );
}
