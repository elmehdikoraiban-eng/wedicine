import type { MetadataRoute } from "next";
import { LANGS } from "@/lib/i18n";
import { allPages } from "@/lib/content/themes";
import { alternates, CONTENT_REVIEWED, qPath, SITE_URL } from "@/lib/site";

// Tant que le contenu n'est pas relu par un médecin, le sitemap ne liste que les accueils.
export default function sitemap(): MetadataRoute.Sitemap {
  const homes = LANGS.map((l) => ({ url: `${SITE_URL}/${l}`, changeFrequency: "weekly" as const, priority: 1 }));
  if (!CONTENT_REVIEWED) return homes;
  const pages = allPages().flatMap((p) =>
    LANGS.map((l) => ({
      url: `${SITE_URL}${qPath(l, p.theme, p.symptom, p.intent)}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages: alternates(p.theme, p.symptom, p.intent) },
    })),
  );
  return [...homes, ...pages];
}
