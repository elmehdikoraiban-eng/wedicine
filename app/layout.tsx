import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedicine — Préparez votre consultation",
  description:
    "Posez votre question santé, recevez une information claire et les bonnes questions à poser à votre médecin.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="nav">
          <a href="/" className="logo">
            <span className="logo-mark">+</span> Wedicine
          </a>
          <nav>
            <a href="/#comment">Comment ça marche</a>
            <a href="/#faq">Questions</a>
            <a href="/question" className="btn btn-sm">Poser ma question</a>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <p>
            <strong>Wedicine</strong> fournit une information générale. Elle ne remplace pas une consultation
            médicale. En cas d&apos;urgence, appelez le <strong>15</strong> (SAMU) ou le <strong>141</strong>.
          </p>
          <p className="muted">Prototype — médecins et avis fictifs. © 2026 Wedicine</p>
        </footer>
      </body>
    </html>
  );
}
