import type { APIRoute } from "astro";
import { isLang } from "@/lib/i18n";
import { checkPassword, startSession } from "@/lib/auth";
import { claimQuestion, matchAvatarToSex, userByContact } from "@/lib/db";
import { json, readJson, safePath } from "@/lib/api";

export const POST: APIRoute = async ({ request, cookies }) => {
  const b = await readJson(request);
  const lang = typeof b.lang === "string" && isLang(b.lang) ? b.lang : "fr";
  const contact = typeof b.contact === "string" ? b.contact.trim().toLowerCase() : "";
  const password = typeof b.password === "string" ? b.password : "";
  const user = contact ? await userByContact(contact) : undefined;
  if (!user || !checkPassword(password, user.password_hash)) return json({ error: "login" }, 401);
  await startSession(cookies, user.id);

  const qid = Number(b.questionId);
  if (Number.isInteger(qid) && qid > 0) {
    await claimQuestion(qid, user.id, !!b.consentPublish);
    await matchAvatarToSex(user.id);
    return json({ url: `/${lang}/compte/q/${qid}` });
  }
  return json({ url: safePath(b.redirectTo, `/${lang}/compte`) });
};
