import type { APIRoute } from "astro";
import { endSession } from "@/lib/auth";
import { isLang } from "@/lib/i18n";

// Déconnexion : formulaire (POST) ou simple lien (GET). Les deux suppriment la session puis renvoient à l'accueil.
const out: APIRoute = async ({ request, cookies, redirect, url }) => {
  await endSession(cookies);
  const fd = request.method === "POST" ? await request.formData().catch(() => null) : null;
  const lang = fd?.get("lang") ?? url.searchParams.get("lang");
  const res = redirect(`/${typeof lang === "string" && isLang(lang) ? lang : "fr"}`, 303);
  res.headers.set("Cache-Control", "no-store");
  return res;
};
export const POST = out;
export const GET = out;
