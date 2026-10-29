import type { APIRoute } from "astro";
import { endSession } from "@/lib/auth";
import { isLang } from "@/lib/i18n";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  await endSession(cookies);
  const fd = await request.formData().catch(() => null);
  const lang = fd?.get("lang");
  return redirect(`/${typeof lang === "string" && isLang(lang) ? lang : "fr"}`, 303);
};
