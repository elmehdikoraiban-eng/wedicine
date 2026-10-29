/** @type {import('next').NextConfig} */
export default {
  // PGlite charge un wasm à l'exécution : on le laisse hors du bundle.
  serverExternalPackages: ["@electric-sql/pglite"],
};
