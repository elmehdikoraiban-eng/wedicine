// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// Tout est rendu côté serveur : la barre de navigation dépend de la session
// et la liste des patients change sur les pages publiques.
export default defineConfig({
  output: "server",
  adapter: vercel({
    // PGlite (base locale de secours) charge son WASM depuis node_modules.
    includeFiles: ["node_modules/@electric-sql/pglite/dist/pglite.wasm", "node_modules/@electric-sql/pglite/dist/pglite.data"],
  }),
  integrations: [react()],
  vite: { ssr: { external: ["@electric-sql/pglite", "pg"] } },
});
