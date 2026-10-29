import { isLang, type Lang } from "./i18n";

// Lit le paramètre [lang] d'une page ; renvoie null si la langue n'existe pas (→ 404).
export const langParam = (p: Record<string, string | undefined>): Lang | null => {
  const l = p.lang ?? "";
  return isLang(l) ? l : null;
};

// Langue à proposer quand l'adresse n'en précise pas : cookie, puis en-tête Accept-Language, puis FR.
export function pickLang(request: Request, saved: string | undefined): Lang {
  if (saved && isLang(saved)) return saved;
  const header = request.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const code = part.trim().slice(0, 2).toLowerCase();
    if (isLang(code)) return code;
  }
  return "fr";
}
