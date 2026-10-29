import { NextResponse } from "next/server";
import { isLang, type Lang } from "@/lib/i18n";
import { currentUser } from "@/lib/auth";
import { insertQuestion } from "@/lib/db";
import { fiche } from "@/lib/content/fiches";
import { pageTitle, symptom, theme } from "@/lib/content/themes";
import { isUrgent, validate } from "@/lib/triage";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const a = validate(body);
  const lang: Lang = body && typeof body.lang === "string" && isLang(body.lang) ? body.lang : "fr";
  if (!a) return NextResponse.json({ error: "invalid" }, { status: 400 });

  const th = theme(a.theme)!;
  const sy = symptom(th, a.symptom)!;
  const f = fiche(th.id, sy.id);
  if (!f) return NextResponse.json({ error: "no-content" }, { status: 404 });

  const urgent = isUrgent(a);
  const user = await currentUser();
  const id = await insertQuestion(
    { ...a, lang, intensity: a.intensity == null ? null : Number(a.intensity), urgent },
    user?.id ?? null,
    false,
  );

  return NextResponse.json({
    id,
    urgent,
    title: pageTitle(lang, th, sy, a.intent),
    summary: f.summary[lang],
    next: user && !urgent ? `/${lang}/compte/q/${id}` : null,
  });
}
