import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { t, type Lang } from "@/lib/i18n";
import { currentUser } from "@/lib/auth";
import { questionsForUser } from "@/lib/db";
import { pageTitle, symptom, theme } from "@/lib/content/themes";
import { formatDate } from "@/lib/site";
import { Icon } from "@/components/Icon";

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: t(lang, "myQuestions"), robots: { index: false } };
}

export default async function Account({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const user = await currentUser();
  if (!user) redirect(`/${lang}/connexion`);
  const qs = await questionsForUser(user.id);
  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <div className="step-head">
        <h1>{t(lang, "myQuestions")}</h1>
        <form action="/api/logout" method="post">
          <input type="hidden" name="lang" value={lang} />
          <button type="submit" className="btn btn-text"><Icon name="LogOut" size={16} /> {t(lang, "logout")}</button>
        </form>
      </div>
      <p className="muted">{user.first_name} {user.last_name}</p>
      {qs.length === 0 && <p className="card">{t(lang, "noQuestions")}</p>}
      <div className="qlist">
        {qs.map((q) => {
          const th = theme(q.theme); const sy = th && symptom(th, q.symptom);
          if (!th || !sy) return null;
          return (
            <Link key={q.id} href={`/${lang}/compte/q/${q.id}`}>
              <span className="ico"><Icon name={th.icon} size={20} /></span>
              <span>
                <b>{pageTitle(lang, th, sy, q.intent)}</b>
                <br /><span className="muted small">{formatDate(q.created_at, lang)}</span>
              </span>
              <span className="meta">
                {q.urgent ? <span className="badge" style={{ background: "var(--danger-soft)", color: "var(--danger)" }}>!</span>
                  : <span className={`badge ${q.is_public ? "badge-ok" : "badge-muted"}`}><Icon name={q.is_public ? "Globe" : "Lock"} size={12} /> {q.is_public ? t(lang, "published") : t(lang, "private")}</span>}
              </span>
            </Link>
          );
        })}
      </div>
      <p style={{ marginTop: 24 }}>
        <Link href={`/${lang}/question`} className="btn btn-primary">{t(lang, "newQuestion")}</Link>
      </p>
    </div>
  );
}
