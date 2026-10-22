/** @type {import('next').NextConfig} */
export default {
  // Embarque la base SQLite avec la fonction serveur sur Vercel.
  outputFileTracingIncludes: { "/api/answer": ["./data/wedicine.db"] },
  serverExternalPackages: [],
};
