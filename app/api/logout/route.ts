import { NextResponse } from "next/server";
import { endSession } from "@/lib/auth";
import { isLang } from "@/lib/i18n";

export async function POST(req: Request) {
  await endSession();
  const fd = await req.formData().catch(() => null);
  const lang = fd?.get("lang");
  const l = typeof lang === "string" && isLang(lang) ? lang : "fr";
  return NextResponse.redirect(new URL(`/${l}`, req.url), 303);
}
