import { defineMiddleware } from "astro:middleware";
import { isLang } from "./lib/i18n";
import { pickLang } from "./lib/lang";

// Toute adresse sans préfixe de langue est redirigée vers la langue du navigateur (FR par défaut).
const PASS = /^\/(api\/|admin(\/|$)|_astro\/|_image|robots\.txt$|sitemap\.xml$|favicon)/;

export const onRequest = defineMiddleware(async ({ request, url, cookies, redirect }, next) => {
  const { pathname } = url;
  if (PASS.test(pathname) || /\.[a-z0-9]+$/i.test(pathname)) return next();
  const first = pathname.split("/")[1] ?? "";
  if (isLang(first)) {
    if (cookies.get("wd_lang")?.value !== first) cookies.set("wd_lang", first, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    return next();
  }
  const lang = pickLang(request, cookies.get("wd_lang")?.value);
  return redirect(`/${lang}${pathname === "/" ? "" : pathname}${url.search}`, 302);
});
