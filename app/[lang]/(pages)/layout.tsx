// Toutes les pages sauf l'accueil : contenu centré dans la largeur de lecture.
export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return <div className="wrap">{children}</div>;
}
