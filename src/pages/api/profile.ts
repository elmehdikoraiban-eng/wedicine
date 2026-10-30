import type { APIRoute } from "astro";
import { currentUser } from "@/lib/auth";
import { chooseAvatar, setSex } from "@/lib/db";
import { json, readJson } from "@/lib/api";

// Modifications de « Mes informations » : { sex: "f" | "m" } ou { avatar: 1..50 }.
export const POST: APIRoute = async ({ request, cookies }) => {
  const user = await currentUser(cookies);
  if (!user) return json({ error: "auth" }, 401);
  const b = await readJson(request);
  let done = false;
  if (typeof b.sex === "string") done = await setSex(user.id, b.sex);
  if (b.avatar != null) done = await chooseAvatar(user.id, Number(b.avatar));
  return done ? json({ ok: true }) : json({ error: "invalid" }, 400);
};
