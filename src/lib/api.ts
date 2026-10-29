// Petits utilitaires partagés par les points d'entrée /api.
export const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8" } });

export const readJson = async (req: Request): Promise<Record<string, unknown>> => {
  const b = await req.json().catch(() => null);
  return b && typeof b === "object" ? (b as Record<string, unknown>) : {};
};

export const safePath = (v: unknown, fallback: string) =>
  typeof v === "string" && v.startsWith("/") && !v.startsWith("//") ? v : fallback;
