import type { APIRoute } from "astro";
import { currentUser } from "@/lib/auth";
import { deleteQuestion } from "@/lib/db";
import { json, readJson } from "@/lib/api";

// Suppression d'une question par son auteur : { id }.
export const POST: APIRoute = async ({ request, cookies }) => {
  const user = await currentUser(cookies);
  if (!user) return json({ error: "auth" }, 401);
  const id = Number((await readJson(request)).id);
  if (!Number.isInteger(id)) return json({ error: "invalid" }, 400);
  return (await deleteQuestion(id, user.id)) ? json({ ok: true }) : json({ error: "notfound" }, 404);
};
