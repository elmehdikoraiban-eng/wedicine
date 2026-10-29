import { NextResponse, type NextRequest } from "next/server";
import { isLang, LANGS, type Lang } from "./lib/i18n";

// Toute adresse sans préfixe de langue est redirigée vers la langue du navigateur (FR par défaut).
function pickLang(req: NextRequest): Lang {
  const saved = req.cookies.get("wd_lang")?.value;
  if (saved && isLang(saved)) return saved;
  const header = req.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const code = part.trim().slice(0, 2).toLowerCase();
    if (isLang(code)) return code;
  }
  return "fr";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (isLang(first)) {
    const res = NextResponse.next();
    if (req.cookies.get("wd_lang")?.value !== first) res.cookies.set("wd_lang", first, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }
  const url = req.nextUrl.clone();
  url.pathname = `/${pickLang(req)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|icon|robots.txt|sitemap.xml|.*\\..*).*)"],
};

export { LANGS };
