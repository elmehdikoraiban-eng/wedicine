// Pictogramme pour chaque conseil ou examen, choisi d'après le texte français de la fiche.
// Objectif : qu'un lecteur pressé (ou qui lit mal) comprenne l'idée d'un coup d'œil.
// Première règle qui correspond gagne ; l'ordre est donc important.

export type Picto = { icon: string; tone: "blue" | "green" | "red" | "purple" | "teal" | "yellow" };

const STEP_RULES: [RegExp, Picto][] = [
  [/15 immédiatement|appelez le 15|urgences/i, { icon: "Siren", tone: "red" }],
  [/rendez-vous|prenez rendez|consultez|laboratoire|allez au|le jour même/i, { icon: "CalendarCheck", tone: "blue" }],
  [/paracétamol|ibuprofène|antidouleur|comprimé|antihistaminique|laxatif|médicament|somnifère|antibiotique|sirop|collyre|larmes artificielles|aspirine|vaccin/i, { icon: "Pill", tone: "purple" }],
  [/température|thermomètre/i, { icon: "Thermometer", tone: "red" }],
  [/tension|automesure|brassard|tensiomètre|3-3-3/i, { icon: "Gauge", tone: "blue" }],
  [/pesez|tour de taille/i, { icon: "Scale", tone: "blue" }],
  [/notez|carnet|journal|agenda|photographiez|liste de|dossier|résultats|surlignez|emballage/i, { icon: "NotebookPen", tone: "blue" }],
  [/lavez|savon|douche|lavage|sérum|plaie|pansement|compresse|rincer/i, { icon: "Droplets", tone: "teal" }],
  [/tabac|fumer|fumée|alcool|pas d'antibiotique|pas de collier|évitez|supprimez|ne reprenez pas|ne commencez pas|méfiez/i, { icon: "Ban", tone: "red" }],
  [/buvez|eau|boisson|hydrat|sro|gorgée|tisane|bouillon/i, { icon: "GlassWater", tone: "teal" }],
  [/repos|dormez|couchez|au lit|sieste|allongez|tête du lit|dormir/i, { icon: "Bed", tone: "purple" }],
  [/marchez|bougez|marche|activité|étirez|mouvements|reprenez/i, { icon: "Footprints", tone: "green" }],
  [/mangez|repas|dînez|aliment|fibres|riz|sel|sucre|friture|huile|poisson|miel|gingembre|protéine|fer |mou /i, { icon: "Utensils", tone: "yellow" }],
  [/écran|téléphone|réveil|luminosité|rappel/i, { icon: "Smartphone", tone: "blue" }],
  [/froid|glace|frais/i, { icon: "Snowflake", tone: "teal" }],
  [/chaleur|bouillotte|chaude/i, { icon: "Flame", tone: "yellow" }],
  [/voix|parlez|chuchotez|criez/i, { icon: "Speech", tone: "purple" }],
  [/aérez|humidifiez|air |fenêtres|pollens|acariens|nez/i, { icon: "Wind", tone: "teal" }],
  [/vêtements|coton|lunettes|masque|contention|ongles|grattage/i, { icon: "Shirt", tone: "blue" }],
  [/entourage|conjoint|proche|accompagnez|personne de confiance|contact|seul/i, { icon: "Users", tone: "purple" }],
  [/lumière du jour|soleil|matin/i, { icon: "Sun", tone: "yellow" }],
  [/yeux|regardez|vue|6 mètres/i, { icon: "Eye", tone: "blue" }],
  [/genoux|dos droit|position|assis|levez-vous|côté|surélevez/i, { icon: "PersonStanding", tone: "green" }],
  [/pieds|ampoule/i, { icon: "Footprints", tone: "blue" }],
  [/gardez|apportez|rassemblez|retrouvez/i, { icon: "ClipboardList", tone: "blue" }],
];

const EXAM_RULES: [RegExp, Picto][] = [
  [/^(souvent |le plus souvent |en général )?aucun|^rarement|pas de scanner|le carnet suffit|diagnostic se fait/i, { icon: "ShieldCheck", tone: "green" }],
  [/électrocardiogramme|ecg|holter|cardiaque/i, { icon: "HeartPulse", tone: "red" }],
  [/radio|irm|scanner|échographie|fibroscopie|coloscopie|endoscopie|laryngoscopie|lampe à fente|fond d'œil/i, { icon: "ScanLine", tone: "purple" }],
  [/urine|urinaire|ecbu|bandelette|selles|coproculture|prélèvement|respiratoire|helicobacter/i, { icon: "TestTube", tone: "teal" }],
  [/prise de sang|sanguin|sérologie|glycémie|hba1c|numération|ferritine|cholestérol|lipidique|dosage|ige|créatinine|potassium|hémoglobine|vitamine/i, { icon: "Syringe", tone: "red" }],
  [/sommeil|polygraphie|enregistrement|epworth|somnolence/i, { icon: "Moon", tone: "purple" }],
  [/test rapide|tdr|test covid|test grippe|prick|cutané|allergique|provocation|test de grossesse/i, { icon: "Microscope", tone: "teal" }],
  [/tension|poids|tour de taille|taille/i, { icon: "Gauge", tone: "blue" }],
  [/spirométrie|souffle|poumons/i, { icon: "Wind", tone: "teal" }],
  [/vue|ophtalmo|œil|yeux|équilibre/i, { icon: "Eye", tone: "blue" }],
  [/vaccin/i, { icon: "Syringe", tone: "purple" }],
  [/questionnaire|interrogatoire|agenda|examen|auscultation|stéthoscope|neurologique|contrôle|dépistage/i, { icon: "Stethoscope", tone: "blue" }],
];

const pick = (rules: [RegExp, Picto][], text: string, fallback: Picto) => rules.find(([re]) => re.test(text))?.[1] ?? fallback;
export const stepPicto = (fr: string): Picto => pick(STEP_RULES, fr, { icon: "ListChecks", tone: "blue" });
export const examPicto = (fr: string): Picto => pick(EXAM_RULES, fr, { icon: "Microscope", tone: "teal" });

export const TONES: Record<Picto["tone"], { bg: string; fg: string }> = {
  blue: { bg: "#D7EEE8", fg: "#0B5F53" },
  green: { bg: "#E3F4EA", fg: "#1E6B49" },
  red: { bg: "#FCEBE6", fg: "#B5351F" },
  purple: { bg: "#EDEAFA", fg: "#5A4BB5" },
  teal: { bg: "#E4F0FB", fg: "#1F6FAE" },
  yellow: { bg: "#FBF1DE", fg: "#9A5F0E" },
};
