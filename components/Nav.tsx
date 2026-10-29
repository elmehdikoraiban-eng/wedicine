import Link from "next/link";
import { LANG_NAMES, LANGS, t, type Lang } from "@/lib/i18n";
import { Icon } from "./Icon";

export function Nav({ lang, user }: { lang: Lang; user: { firstName: string } | null }) {
  return (
    <header className="nav">
      <div className="wrap">
        <Link href={`/${lang}`} className="logo">
          <span className="mark"><Icon name="HeartPulse" size={18} /></span>
          Wedicine
        </Link>
        <nav className="nav-links" aria-label="Navigation">
          <div className="lang" aria-label="Langue">
            {LANGS.map((l) => (
              <Link key={l} href={`/${l}`} aria-current={l === lang ? "true" : undefined} lang={l}><span className="full">{LANG_NAMES[l]}</span><span className="short">{l.toUpperCase()}</span></Link>
            ))}
          </div>
          {user ? (
            <Link href={`/${lang}/compte`} className="btn btn-ghost" style={{ minHeight: 40, padding: "6px 14px" }}>
              <Icon name="User" size={18} />
              <span className="hide-sm">{user.firstName}</span>
            </Link>
          ) : (
            <Link href={`/${lang}/connexion`} className="btn btn-ghost" style={{ minHeight: 40, padding: "6px 14px" }}>
              {t(lang, "login")}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
