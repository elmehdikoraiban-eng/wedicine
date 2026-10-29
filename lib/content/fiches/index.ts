import "server-only";
import type { Fiche, ThemeFiches } from "../types";
import { fievre } from "./fievre";
import { rhume } from "./rhume";
import { gorge } from "./gorge";
import { tete } from "./tete";
import { tension } from "./tension";
import { diabete } from "./diabete";
import { digestion } from "./digestion";
import { fatigue } from "./fatigue";
import { dos } from "./dos";
import { sommeil } from "./sommeil";
import { allergie } from "./allergie";
import { bilan } from "./bilan";

// Le texte des réponses reste côté serveur : il n'est jamais envoyé au client
// avant la création du compte (sauf le résumé, affiché dans l'aperçu).
export const FICHES: Record<string, ThemeFiches> = {
  fievre, rhume, gorge, tete, tension, diabete, digestion, fatigue, dos, sommeil, allergie, bilan,
};

export const fiche = (theme: string, symptom: string): Fiche | undefined => FICHES[theme]?.[symptom];
