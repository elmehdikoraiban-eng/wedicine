import type { APIRoute } from "astro";
import { SITE_URL } from "@/lib/site";

export const GET: APIRoute = () =>
  new Response(
    ["User-agent: *", "Allow: /", "Disallow: /api/", "Disallow: /*/compte", "Disallow: /*/connexion", "Disallow: /*/inscription", "Disallow: /*/question", "Disallow: /*/contact", "", `Sitemap: ${SITE_URL}/sitemap.xml`, ""].join("\n"),
    { headers: { "content-type": "text/plain; charset=utf-8" } },
  );
