import { NextResponse } from "next/server";
import { CITIES, type City } from "@/lib/doctors";
import { findAnswer, findDoctor, saveRequest } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { question, age, sex, city, consentShare, consentInfo } = await req.json();

  // Le consentement est vérifié côté serveur, pas seulement dans le formulaire.
  if (consentShare !== true || consentInfo !== true) {
    return NextResponse.json({ error: "Consentement requis." }, { status: 400 });
  }
  if (typeof question !== "string" || question.trim().length < 10 || question.length > 2000) {
    return NextResponse.json({ error: "Question trop courte ou trop longue." }, { status: 400 });
  }
  const safeCity: City = (CITIES as readonly string[]).includes(city) ? city : "Casablanca";

  const answer = findAnswer(question);
  const doctor = findDoctor(safeCity, answer.specialty);
  saveRequest({
    question, age: String(age ?? ""), sex: String(sex ?? ""), city: safeCity,
    answerId: answer.id, doctorId: doctor.id, urgent: answer.urgent,
  });

  return NextResponse.json({ answer, doctor });
}
