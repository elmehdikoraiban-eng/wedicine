import type { APIRoute } from "astro";
import { currentUser } from "@/lib/auth";
import { exportUser } from "@/lib/db";
import { json } from "@/lib/api";

// Droit d'accès (loi 09-08) : le patient télécharge tout ce que Wedicine garde sur lui, en JSON.
export const GET: APIRoute = async ({ cookies }) => {
  const user = await currentUser(cookies);
  if (!user) return json({ error: "auth" }, 401);
  const data = await exportUser(user.id);
  return new Response(JSON.stringify({ exportedAt: new Date().toISOString(), ...data }, null, 2), {
    headers: { "content-type": "application/json; charset=utf-8", "content-disposition": 'attachment; filename="wedicine-mes-donnees.json"', "cache-control": "no-store" },
  });
};
