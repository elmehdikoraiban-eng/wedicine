import type { APIRoute } from "astro";
import { currentUser } from "@/lib/auth";
import { chooseAvatar, setSex, updateIdentity } from "@/lib/db";
import { isLang } from "@/lib/i18n";
import { json, readJson } from "@/lib/api";

// Modifications de « Mes informations » : { sex } , { avatar } ou { identity: { firstName, lastName, contact, lang } }.
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
export const POST: APIRoute = async ({ request, cookies }) => {
  const user = await currentUser(cookies);
  if (!user) return json({ error: "auth" }, 401);
  const b = await readJson(request);
  let done = false;
  if (b.identity && typeof b.identity === "object") {
    const i = b.identity as Record<string, unknown>;
    const f = { firstName: clean(i.firstName, 40), lastName: clean(i.lastName, 40), contact: clean(i.contact, 80).toLowerCase(), lang: clean(i.lang, 2) };
    if (!f.firstName || !f.lastName || !f.contact || !isLang(f.lang)) return json({ error: "invalid" }, 400);
    if ((await updateIdentity(user.id, f)) === "taken") return json({ error: "taken" }, 409);
    done = true;
  }
  if (typeof b.sex === "string") done = await setSex(user.id, b.sex);
  if (b.avatar != null) done = await chooseAvatar(user.id, Number(b.avatar));
  return done ? json({ ok: true }) : json({ error: "invalid" }, 400);
};
