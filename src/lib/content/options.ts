import type { T } from "../i18n";

// Options communes à tous les thèmes. Les ids sont stockés en base, ne pas les renommer.

export type Option = { id: string; label: T; icon?: string };

export const WHO: Option[] = [
  { id: "moi", icon: "UserRound", label: { fr: "Moi", ar: "أنا", en: "Me" } },
  { id: "enfant", icon: "Baby", label: { fr: "Mon enfant", ar: "طفلي", en: "My child" } },
  { id: "proche", icon: "Users", label: { fr: "Un proche", ar: "أحد أقاربي", en: "A relative" } },
];

export const INTENSITIES: Option[] = [
  { id: "0", icon: "Smile", label: { fr: "Léger", ar: "خفيف", en: "Mild" } },
  { id: "1", icon: "Meh", label: { fr: "Gênant", ar: "مزعج", en: "Bothersome" } },
  { id: "2", icon: "Frown", label: { fr: "Fort", ar: "قوي", en: "Strong" } },
  { id: "3", icon: "Annoyed", label: { fr: "Très fort", ar: "قوي جداً", en: "Very strong" } },
  { id: "4", icon: "Angry", label: { fr: "Insupportable", ar: "لا يُحتمل", en: "Unbearable" } },
];

export const DURATIONS: Option[] = [
  { id: "d0", label: { fr: "Moins de 24 h", ar: "أقل من 24 ساعة", en: "Less than 24 h" } },
  { id: "d1", label: { fr: "1 à 3 jours", ar: "من يوم إلى 3 أيام", en: "1 to 3 days" } },
  { id: "d2", label: { fr: "4 à 7 jours", ar: "من 4 إلى 7 أيام", en: "4 to 7 days" } },
  { id: "d3", label: { fr: "1 à 4 semaines", ar: "من أسبوع إلى 4 أسابيع", en: "1 to 4 weeks" } },
  { id: "d4", label: { fr: "Plus d'un mois", ar: "أكثر من شهر", en: "More than a month" } },
];

export const AGES: Option[] = [
  { id: "a0", label: { fr: "Moins de 3 mois", ar: "أقل من 3 أشهر", en: "Under 3 months" } },
  { id: "a1", label: { fr: "3 mois à 2 ans", ar: "من 3 أشهر إلى سنتين", en: "3 months to 2 years" } },
  { id: "a2", label: { fr: "2 à 11 ans", ar: "من 2 إلى 11 سنة", en: "2 to 11 years" } },
  { id: "a3", label: { fr: "12 à 17 ans", ar: "من 12 إلى 17 سنة", en: "12 to 17 years" } },
  { id: "a4", label: { fr: "18 à 30 ans", ar: "من 18 إلى 30 سنة", en: "18 to 30 years" } },
  { id: "a5", label: { fr: "31 à 45 ans", ar: "من 31 إلى 45 سنة", en: "31 to 45 years" } },
  { id: "a6", label: { fr: "46 à 60 ans", ar: "من 46 إلى 60 سنة", en: "46 to 60 years" } },
  { id: "a7", label: { fr: "Plus de 60 ans", ar: "أكثر من 60 سنة", en: "Over 60" } },
];
export const CHILD_AGES = ["a0", "a1", "a2", "a3"];
export const ADULT_AGES = ["a3", "a4", "a5", "a6", "a7"];

export const CITIES: Option[] = [
  { id: "casablanca", label: { fr: "Casablanca", ar: "الدار البيضاء", en: "Casablanca" } },
  { id: "rabat", label: { fr: "Rabat", ar: "الرباط", en: "Rabat" } },
  { id: "marrakech", label: { fr: "Marrakech", ar: "مراكش", en: "Marrakesh" } },
  { id: "fes", label: { fr: "Fès", ar: "فاس", en: "Fez" } },
  { id: "tanger", label: { fr: "Tanger", ar: "طنجة", en: "Tangier" } },
  { id: "agadir", label: { fr: "Agadir", ar: "أكادير", en: "Agadir" } },
  { id: "meknes", label: { fr: "Meknès", ar: "مكناس", en: "Meknes" } },
  { id: "oujda", label: { fr: "Oujda", ar: "وجدة", en: "Oujda" } },
  { id: "kenitra", label: { fr: "Kénitra", ar: "القنيطرة", en: "Kenitra" } },
  { id: "tetouan", label: { fr: "Tétouan", ar: "تطوان", en: "Tetouan" } },
  { id: "autre", label: { fr: "Autre ville", ar: "مدينة أخرى", en: "Other city" } },
];

// L'intention transforme la description en vraie question (et en page SEO).
export const INTENTS: (Option & { title: T })[] = [
  { id: "grave", icon: "CircleAlert", label: { fr: "Est-ce grave ?", ar: "هل هذا خطير؟", en: "Is it serious?" },
    title: { fr: "est-ce grave ?", ar: "هل هذا خطير؟", en: "is it serious?" } },
  { id: "attente", icon: "Hourglass", label: { fr: "Que faire en attendant ?", ar: "ماذا أفعل في الانتظار؟", en: "What to do meanwhile?" },
    title: { fr: "que faire en attendant ?", ar: "ماذا أفعل في الانتظار؟", en: "what to do in the meantime?" } },
  { id: "medecin", icon: "Stethoscope", label: { fr: "Quel médecin voir ?", ar: "أي طبيب أستشير؟", en: "Which doctor to see?" },
    title: { fr: "quel médecin consulter ?", ar: "أي طبيب أستشير؟", en: "which doctor to see?" } },
  { id: "examens", icon: "Microscope", label: { fr: "Quels examens ?", ar: "ما هي الفحوصات؟", en: "Which tests?" },
    title: { fr: "quels examens faire ?", ar: "ما هي الفحوصات اللازمة؟", en: "which tests to do?" } },
  { id: "questions", icon: "MessageCircleQuestion", label: { fr: "Que demander au médecin ?", ar: "ماذا أسأل الطبيب؟", en: "What to ask the doctor?" },
    title: { fr: "que demander au médecin ?", ar: "ماذا أسأل الطبيب؟", en: "what to ask the doctor?" } },
];

export const ZONES: Option[] = [
  { id: "tete", label: { fr: "Tête", ar: "الرأس", en: "Head" } },
  { id: "nuque", label: { fr: "Nuque", ar: "الرقبة", en: "Neck" } },
  { id: "haut-dos", label: { fr: "Haut du dos", ar: "أعلى الظهر", en: "Upper back" } },
  { id: "bas-dos", label: { fr: "Bas du dos", ar: "أسفل الظهر", en: "Lower back" } },
  { id: "haut-ventre", label: { fr: "Haut du ventre", ar: "أعلى البطن", en: "Upper belly" } },
  { id: "bas-ventre", label: { fr: "Bas du ventre", ar: "أسفل البطن", en: "Lower belly" } },
  { id: "jambe", label: { fr: "Jambe", ar: "الساق", en: "Leg" } },
];

// Signes d'alerte : un seul coché suffit à afficher l'écran urgence.
export const ALERTS: Option[] = [
  { id: "poitrine", icon: "HeartPulse", label: { fr: "Douleur ou serrement dans la poitrine", ar: "ألم أو ضيق في الصدر", en: "Chest pain or tightness" } },
  { id: "respiration", icon: "Wind", label: { fr: "Difficulté à respirer", ar: "صعوبة في التنفس", en: "Difficulty breathing" } },
  { id: "malaise", icon: "Zap", label: { fr: "Malaise ou perte de connaissance", ar: "إغماء أو فقدان الوعي", en: "Fainting or passing out" } },
  { id: "paralysie", icon: "PersonStanding", label: { fr: "Faiblesse d'un côté, bouche déviée ou trouble de la parole", ar: "ضعف في جهة واحدة أو انحراف الفم أو صعوبة في الكلام", en: "Weakness on one side, drooping mouth or trouble speaking" } },
  { id: "sang", icon: "Droplets", label: { fr: "Sang dans les vomissements ou les selles", ar: "دم في القيء أو البراز", en: "Blood in vomit or stool" } },
  { id: "nuque-raide", icon: "Thermometer", label: { fr: "Fièvre avec nuque raide ou taches sur la peau", ar: "حمى مع تصلب الرقبة أو بقع على الجلد", en: "Fever with stiff neck or skin spots" } },
  { id: "tete-brutale", icon: "Brain", label: { fr: "Mal de tête brutal et très violent", ar: "صداع مفاجئ وعنيف جداً", en: "Sudden, very violent headache" } },
  { id: "gonflement", icon: "CircleAlert", label: { fr: "Gonflement des lèvres, de la langue ou de la gorge", ar: "تورّم الشفتين أو اللسان أو الحلق", en: "Swelling of lips, tongue or throat" } },
  { id: "jambe-force", icon: "Footprints", label: { fr: "Perte de force dans une jambe ou troubles pour uriner", ar: "فقدان القوة في الساق أو صعوبة في التبول", en: "Loss of strength in a leg or trouble passing urine" } },
  { id: "suicide", icon: "ShieldAlert", label: { fr: "Idées noires ou envie de se faire du mal", ar: "أفكار سوداوية أو رغبة في إيذاء النفس", en: "Dark thoughts or wanting to harm yourself" } },
];
