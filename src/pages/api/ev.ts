import type { APIRoute } from "astro";
import { logEvent } from "@/lib/track";
import { readJson } from "@/lib/api";

// Étape vue côté navigateur : seulement « start » (première réponse au questionnaire).
export const POST: APIRoute = async ({ request, cookies }) => {
  const b = await readJson(request);
  if (b.name === "start") await logEvent(cookies, "start");
  return new Response(null, { status: 204 });
};
