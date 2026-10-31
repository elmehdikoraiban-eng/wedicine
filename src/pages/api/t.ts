import type { APIRoute } from "astro";
import { currentUser } from "@/lib/auth";
import { tick } from "@/lib/track";

// Signal de temps passé (toutes les 15 s, page visible). Rien d'autre n'est envoyé.
export const POST: APIRoute = async ({ cookies }) => {
  const u = await currentUser(cookies).catch(() => undefined);
  await tick(cookies, u?.id ?? null).catch(() => {});
  return new Response(null, { status: 204 });
};
