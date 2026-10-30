import type { APIRoute } from "astro";
import { isLang } from "@/lib/i18n";
import { hashPassword, startSession } from "@/lib/auth";
import { claimQuestion, matchAvatarToSex, createUser, userByContact } from "@/lib/db";
import { json, readJson, safePath } from "@/lib/api";

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export const POST: APIRoute = async ({ request, cookies }) => {
  const b = await readJson(request);
  const lang = typeof b.lang === "string" && isLang(b.lang) ? b.lang : "fr";
  const firstName = clean(b.firstName, 40);
  const lastName = clean(b.lastName, 40);
  const contact = clean(b.contact, 80).toLowerCase();
  const password = typeof b.password === "string" ? b.password : "";
  // Depuis la conversation, une seule case couvre les deux consentements et le nom de famille n'est pas demandé.
  const consentInfo = !!b.consentInfo || !!b.consent, consentTerms = !!b.consentTerms || !!b.consent;
  if (!firstName || !contact || password.length < 6 || !consentInfo || !consentTerms) {
    return json({ error: "invalid" }, 400);
  }
  if (await userByContact(contact)) return json({ error: "taken" }, 409);

  const userId = await createUser({ firstName, lastName, contact, passwordHash: hashPassword(password), lang });
  await startSession(cookies, userId);

  const qid = Number(b.questionId);
  if (Number.isInteger(qid) && qid > 0) {
    await claimQuestion(qid, userId, !!b.consentPublish);
    await matchAvatarToSex(userId);
    return json({ url: `/${lang}/compte/q/${qid}` });
  }
  return json({ url: safePath(b.redirectTo, `/${lang}/compte`) });
};
