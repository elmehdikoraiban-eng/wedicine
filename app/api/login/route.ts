import { NextResponse } from "next/server";
import { isLang } from "@/lib/i18n";
import { checkPassword, startSession } from "@/lib/auth";
import { claimQuestion, userByContact } from "@/lib/db";

export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const lang = isLang(b.lang) ? b.lang : "fr";
  const contact = typeof b.contact === "string" ? b.contact.trim().toLowerCase() : "";
  const password = typeof b.password === "string" ? b.password : "";
  const user = contact ? await userByContact(contact) : undefined;
  if (!user || !checkPassword(password, user.password_hash)) {
    return NextResponse.json({ error: "login" }, { status: 401 });
  }
  await startSession(user.id);

  const qid = Number(b.questionId);
  if (Number.isInteger(qid) && qid > 0) {
    await claimQuestion(qid, user.id, !!b.consentPublish);
    return NextResponse.json({ url: `/${lang}/compte/q/${qid}` });
  }
  return NextResponse.json({ url: typeof b.redirectTo === "string" && b.redirectTo.startsWith("/") ? b.redirectTo : `/${lang}/compte` });
}
