import type { T } from "../i18n";

// Une fiche par symptôme. Le texte est le même pour toutes les intentions ;
// l'intention choisit seulement la section mise en avant et le titre de la page.
export type Fiche = {
  summary: T;          // une phrase qui répond d'abord à « est-ce grave ? »
  explanation: T[];    // 2 à 4 paragraphes courts
  meanwhile: T[];      // que faire en attendant la consultation
  whichDoctor: T;      // quel médecin consulter
  exams: T[];          // examens que le médecin peut proposer
  questions: T[];      // questions à poser au médecin
  warning: T;          // signes qui doivent faire consulter vite
  sources: { label: string; url: string }[];
};

export type ThemeFiches = Record<string, Fiche>;
