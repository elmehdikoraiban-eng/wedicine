export type Answer = {
  id: number;
  topic: string;
  urgent: boolean;
  summary: string;
  explanation: string[];
  questionsForDoctor: string[];
  warning: string | null;
  specialty: string;
};

// Signes d'alerte : on renvoie vers les urgences avant toute réponse.
const RED_FLAGS = [
  "douleur thoracique", "douleur dans la poitrine", "mal à la poitrine", "oppression",
  "difficulté à respirer", "essoufflement brutal", "ne respire", "étouffe",
  "perte de connaissance", "évanoui", "convulsion", "paralysie", "visage paralysé",
  "trouble de la parole", "saignement abondant", "hémorragie", "vomit du sang",
  "idées suicidaires", "suicide", "me tuer", "overdose", "intoxication",
  "fièvre bébé", "nourrisson fièvre", "brûlure grave",
];

export function hasRedFlag(text: string) {
  const t = text.toLowerCase();
  return RED_FLAGS.some((k) => t.includes(k));
}
