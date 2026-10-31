import { questionById } from "./db";

// Contexte commun aux pages connexion et inscription : question à débloquer (?q=ID) et retour (?next=).
export async function authContext(sp: URLSearchParams) {
  const qid = Number(sp.get("q"));
  const next = sp.get("next");
  const safeNext = next && next.startsWith("/") && !next.startsWith("//") ? next : undefined;
  let unlock = false;
  if (Number.isInteger(qid) && qid > 0) {
    const q = await questionById(qid).catch(() => undefined);
    unlock = !!(q && q.user_id == null && !q.urgent);
  }
  // On garde q et next en passant d'une page à l'autre.
  const keep = new URLSearchParams();
  if (unlock) keep.set("q", String(qid));
  if (safeNext) keep.set("next", safeNext);
  return { qid, unlock, next: safeNext, query: keep.size ? `?${keep}` : "" };
}
