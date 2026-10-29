import { isLang, type Lang } from "./i18n";

// Lit le paramètre [lang] d'une page ; renvoie null si la langue n'existe pas (→ 404).
export const langParam = (p: Record<string, string | undefined>): Lang | null => {
  const l = p.lang ?? "";
  return isLang(l) ? l : null;
};
