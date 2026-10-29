import type { APIRoute } from "astro";
import { db } from "@/lib/db";
import { json } from "@/lib/api";

// État de la base : type de connexion et nombre de comptes. Aucune donnée personnelle, aucun secret.
export const GET: APIRoute = async () => {
  const kind = process.env.DATABASE_URL || process.env.POSTGRES_URL ? "postgres" : "pglite";
  try {
    const r = await (await db()).query("SELECT count(*)::int AS n FROM wedicine.users");
    return json({ ok: true, db: kind, users: Number(r.rows[0].n) });
  } catch (e) {
    console.error("health", e);
    return json({ ok: false, db: kind }, 503);
  }
};
