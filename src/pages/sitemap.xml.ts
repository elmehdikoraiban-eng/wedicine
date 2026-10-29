import type { APIRoute } from "astro";
import { LANGS } from "@/lib/i18n";
import { allPages } from "@/lib/content/themes";
import { alternates, CONTENT_REVIEWED, qPath, SITE_URL } from "@/lib/site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

// Tant que le contenu n'est pas relu par un médecin, le sitemap ne liste que les accueils.
export const GET: APIRoute = () => {
  const urls: string[] = LANGS.map((l) => `<url><loc>${SITE_URL}/${l}</loc><changefreq>weekly</changefreq><priority>1</priority></url>`);
  if (CONTENT_REVIEWED) {
    for (const p of allPages()) {
      const alt = alternates(p.theme, p.symptom, p.intent);
      const links = Object.entries(alt).map(([l, href]) => `<xhtml:link rel="alternate" hreflang="${l}" href="${esc(href)}"/>`).join("");
      for (const l of LANGS) urls.push(`<url><loc>${esc(`${SITE_URL}${qPath(l, p.theme, p.symptom, p.intent)}`)}</loc>${links}<changefreq>monthly</changefreq><priority>0.7</priority></url>`);
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join("")}</urlset>`;
  return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8" } });
};
