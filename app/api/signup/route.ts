import { NextResponse } from "next/server";
import { isLang } from "@/lib/i18n";
import { hashPassword, startSession } from "@/lib/auth";
import { claimQuestion, createUser, userByContact } from "@/lib/db";

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const lang = isLang(b.lang) ? b.lang : "fr";
  const firstName = clean(b.firstName, 40);
  const lastName = clean(b.lastName, 40);
  const contact = clean(b.contact, 80).toLowerCase();
  const password = typeof b.password === "string" ? b.password : "";
  if (!firstName || !lastName || !contact || password.length < 6 || !b.consentInfo || !b.consentTerms) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  if (await userByContact(contact)) return NextResponse.json({ error: "taken" }, { status: 409 });

  const userId = await createUser({ firstName, lastName, contact, passwordHash: hashPassword(password), lang });
  await startSession(userId);

  const qid = Number(b.questionId);
  if (Number.isInteger(qid) && qid > 0) {
    await claimQuestion(qid, userId, !!b.consentPublish);
    return NextResponse.json({ url: `/${lang}/compte/q/${qid}` });
  }
  return NextResponse.json({ url: typeof b.redirectTo === "string" && b.redirectTo.startsWith("/") ? b.redirectTo : `/${lang}/compte` });
}
