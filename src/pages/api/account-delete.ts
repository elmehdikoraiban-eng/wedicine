import type { APIRoute } from "astro";
import { currentUser, endSession } from "@/lib/auth";
import { deleteUser } from "@/lib/db";
import { json, readJson } from "@/lib/api";

// Droit à l'effacement (loi 09-08) : { confirm: true } efface le compte, ses sessions et toutes ses questions.
export const POST: APIRoute = async ({ request, cookies }) => {
  const user = await currentUser(cookies);
  if (!user) return json({ error: "auth" }, 401);
  if ((await readJson(request)).confirm !== true) return json({ error: "invalid" }, 400);
  await endSession(cookies);
  await deleteUser(user.id);
  return json({ ok: true });
};
