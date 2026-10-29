import type { Lang, T } from "../i18n";
import { INTENTS } from "./options";

// Structure du formulaire (sans le texte des réponses, qui reste côté serveur).

export type Symptom = { id: string; label: T };
export type Sign = { id: string; label: T };
export type Theme = {
  id: string;
  icon: string;
  label: T;
  symptoms: Symptom[];
  signs: Sign[];      // signes associés sans gravité (écran 7)
  alerts: string[];   // ids de ALERTS proposés à l'écran 7
  zones?: string[];   // écran 4, seulement pour les thèmes avec douleur
  intensity: boolean; // écran 5
  duration: boolean;  // écran 6
  consultAfter: number; // index de DURATIONS à partir duquel on conseille de consulter
};

const COMMON_ALERTS = ["poitrine", "respiration", "malaise"];

export const THEMES: Theme[] = [
  {
    id: "fievre", icon: "Thermometer", intensity: false, duration: true, consultAfter: 2,
    label: { fr: "Fièvre", ar: "الحمى", en: "Fever" },
    symptoms: [
      { id: "seule", label: { fr: "Fièvre sans autre symptôme", ar: "حمى بدون أعراض أخرى", en: "Fever with no other symptom" } },
      { id: "toux", label: { fr: "Fièvre avec toux", ar: "حمى مع سعال", en: "Fever with cough" } },
      { id: "gorge", label: { fr: "Fièvre avec mal de gorge", ar: "حمى مع ألم في الحلق", en: "Fever with sore throat" } },
      { id: "urines", label: { fr: "Fièvre avec brûlures en urinant", ar: "حمى مع حرقة أثناء التبول", en: "Fever with burning when urinating" } },
      { id: "boutons", label: { fr: "Fièvre avec boutons sur la peau", ar: "حمى مع حبوب على الجلد", en: "Fever with a skin rash" } },
      { id: "diarrhee", label: { fr: "Fièvre avec diarrhée", ar: "حمى مع إسهال", en: "Fever with diarrhoea" } },
    ],
    signs: [
      { id: "frissons", label: { fr: "Frissons", ar: "قشعريرة", en: "Chills" } },
      { id: "courbatures", label: { fr: "Courbatures", ar: "آلام في الجسم", en: "Body aches" } },
      { id: "tete", label: { fr: "Mal de tête", ar: "صداع", en: "Headache" } },
    ],
    alerts: [...COMMON_ALERTS, "nuque-raide"],
  },
  {
    id: "rhume", icon: "Wind", intensity: false, duration: true, consultAfter: 3,
    label: { fr: "Rhume, grippe et toux", ar: "الزكام والأنفلونزا والسعال", en: "Cold, flu and cough" },
    symptoms: [
      { id: "nez", label: { fr: "Nez qui coule ou bouché", ar: "سيلان أو انسداد الأنف", en: "Runny or blocked nose" } },
      { id: "toux-seche", label: { fr: "Toux sèche", ar: "سعال جاف", en: "Dry cough" } },
      { id: "toux-grasse", label: { fr: "Toux grasse avec crachats", ar: "سعال مع بلغم", en: "Chesty cough with phlegm" } },
      { id: "grippe", label: { fr: "Courbatures et fièvre (grippe)", ar: "آلام في الجسم وحمى (أنفلونزا)", en: "Aches and fever (flu)" } },
      { id: "gout", label: { fr: "Perte du goût ou de l'odorat", ar: "فقدان حاسة الذوق أو الشم", en: "Loss of taste or smell" } },
    ],
    signs: [
      { id: "fievre", label: { fr: "Fièvre", ar: "حمى", en: "Fever" } },
      { id: "gorge", label: { fr: "Mal de gorge", ar: "ألم في الحلق", en: "Sore throat" } },
      { id: "fatigue", label: { fr: "Grande fatigue", ar: "تعب شديد", en: "Strong tiredness" } },
    ],
    alerts: [...COMMON_ALERTS, "sang"],
  },
  {
    id: "gorge", icon: "Speech", intensity: true, duration: true, consultAfter: 2,
    label: { fr: "Mal de gorge", ar: "ألم الحلق", en: "Sore throat" },
    symptoms: [
      { id: "avaler", label: { fr: "Douleur en avalant", ar: "ألم عند البلع", en: "Pain when swallowing" } },
      { id: "voix", label: { fr: "Voix enrouée ou cassée", ar: "بحّة في الصوت", en: "Hoarse voice" } },
      { id: "ganglions", label: { fr: "Ganglions gonflés au cou", ar: "انتفاخ الغدد في الرقبة", en: "Swollen glands in the neck" } },
      { id: "gratte", label: { fr: "Gorge qui gratte", ar: "حكة في الحلق", en: "Scratchy throat" } },
    ],
    signs: [
      { id: "fievre", label: { fr: "Fièvre", ar: "حمى", en: "Fever" } },
      { id: "oreille", label: { fr: "Mal d'oreille", ar: "ألم في الأذن", en: "Earache" } },
      { id: "nez", label: { fr: "Nez qui coule", ar: "سيلان الأنف", en: "Runny nose" } },
    ],
    alerts: [...COMMON_ALERTS, "gonflement"],
  },
  {
    id: "tete", icon: "Brain", intensity: true, duration: true, consultAfter: 3,
    label: { fr: "Maux de tête", ar: "الصداع", en: "Headache" },
    symptoms: [
      { id: "serre", label: { fr: "Mal de tête qui serre", ar: "صداع ضاغط", en: "Tight, pressing headache" } },
      { id: "migraine", label: { fr: "Mal de tête d'un côté qui tape", ar: "صداع نابض في جهة واحدة", en: "Throbbing headache on one side" } },
      { id: "ecrans", label: { fr: "Mal de tête après les écrans", ar: "صداع بعد استعمال الشاشات", en: "Headache after screens" } },
      { id: "matin", label: { fr: "Mal de tête au réveil", ar: "صداع عند الاستيقاظ", en: "Headache on waking up" } },
      { id: "vertiges", label: { fr: "Mal de tête avec vertiges", ar: "صداع مع دوخة", en: "Headache with dizziness" } },
    ],
    signs: [
      { id: "nausees", label: { fr: "Nausées", ar: "غثيان", en: "Nausea" } },
      { id: "lumiere", label: { fr: "Gêne à la lumière", ar: "انزعاج من الضوء", en: "Bothered by light" } },
      { id: "fatigue", label: { fr: "Fatigue", ar: "تعب", en: "Tiredness" } },
    ],
    alerts: ["tete-brutale", "paralysie", "nuque-raide", "malaise"],
  },
  {
    id: "tension", icon: "Gauge", intensity: false, duration: true, consultAfter: 1,
    label: { fr: "Tension artérielle", ar: "ضغط الدم", en: "Blood pressure" },
    symptoms: [
      { id: "elevee", label: { fr: "Tension élevée au tensiomètre", ar: "ضغط دم مرتفع في جهاز القياس", en: "High reading on the monitor" } },
      { id: "basse", label: { fr: "Tension basse et vertiges", ar: "ضغط دم منخفض ودوخة", en: "Low pressure and dizziness" } },
      { id: "controle", label: { fr: "Contrôle de ma tension", ar: "مراقبة ضغط الدم", en: "Checking my blood pressure" } },
      { id: "traitement", label: { fr: "Traitement contre la tension", ar: "علاج ضغط الدم", en: "Blood pressure treatment" } },
    ],
    signs: [
      { id: "bourdonnements", label: { fr: "Bourdonnements d'oreille", ar: "طنين في الأذن", en: "Ringing in the ears" } },
      { id: "vertiges", label: { fr: "Vertiges", ar: "دوخة", en: "Dizziness" } },
      { id: "tete", label: { fr: "Mal de tête", ar: "صداع", en: "Headache" } },
    ],
    alerts: [...COMMON_ALERTS, "paralysie"],
  },
  {
    id: "diabete", icon: "Droplet", intensity: false, duration: true, consultAfter: 1,
    label: { fr: "Diabète et sucre", ar: "السكري", en: "Diabetes and sugar" },
    symptoms: [
      { id: "soif", label: { fr: "Soif et envies d'uriner fréquentes", ar: "عطش وكثرة التبول", en: "Thirst and frequent urination" } },
      { id: "glycemie", label: { fr: "Glycémie élevée à l'analyse", ar: "ارتفاع السكر في التحليل", en: "High blood sugar on a test" } },
      { id: "depistage", label: { fr: "Diabète dans la famille", ar: "السكري في العائلة", en: "Diabetes in the family" } },
      { id: "suivi", label: { fr: "Suivi de mon diabète", ar: "متابعة مرض السكري", en: "Managing my diabetes" } },
      { id: "plaie", label: { fr: "Plaie qui guérit mal", ar: "جرح يلتئم ببطء", en: "A wound that heals badly" } },
    ],
    signs: [
      { id: "fatigue", label: { fr: "Fatigue", ar: "تعب", en: "Tiredness" } },
      { id: "vision", label: { fr: "Vision floue", ar: "رؤية ضبابية", en: "Blurred vision" } },
      { id: "poids", label: { fr: "Perte de poids", ar: "فقدان الوزن", en: "Weight loss" } },
    ],
    alerts: [...COMMON_ALERTS, "sang"],
  },
  {
    id: "digestion", icon: "Soup", intensity: true, duration: true, consultAfter: 2,
    label: { fr: "Estomac et digestion", ar: "المعدة والهضم", en: "Stomach and digestion" },
    zones: ["haut-ventre", "bas-ventre"],
    symptoms: [
      { id: "brulures", label: { fr: "Brûlures d'estomac", ar: "حرقة المعدة", en: "Heartburn" } },
      { id: "ballonnements", label: { fr: "Ballonnements", ar: "انتفاخ البطن", en: "Bloating" } },
      { id: "diarrhee", label: { fr: "Diarrhée", ar: "إسهال", en: "Diarrhoea" } },
      { id: "constipation", label: { fr: "Constipation", ar: "إمساك", en: "Constipation" } },
      { id: "nausees", label: { fr: "Nausées ou vomissements", ar: "غثيان أو قيء", en: "Nausea or vomiting" } },
      { id: "douleur", label: { fr: "Douleur au ventre", ar: "ألم في البطن", en: "Tummy pain" } },
    ],
    signs: [
      { id: "appetit", label: { fr: "Perte d'appétit", ar: "فقدان الشهية", en: "Loss of appetite" } },
      { id: "fievre", label: { fr: "Fièvre", ar: "حمى", en: "Fever" } },
      { id: "fatigue", label: { fr: "Fatigue", ar: "تعب", en: "Tiredness" } },
    ],
    alerts: ["sang", "poitrine", "malaise"],
  },
  {
    id: "fatigue", icon: "BatteryLow", intensity: true, duration: true, consultAfter: 3,
    label: { fr: "Fatigue", ar: "التعب", en: "Tiredness" },
    symptoms: [
      { id: "reveil", label: { fr: "Fatigué dès le réveil", ar: "تعب منذ الاستيقاظ", en: "Tired from waking up" } },
      { id: "energie", label: { fr: "Manque d'énergie toute la journée", ar: "نقص الطاقة طوال اليوم", en: "Low energy all day" } },
      { id: "moral", label: { fr: "Fatigue avec moral bas", ar: "تعب مع معنويات منخفضة", en: "Tiredness with low mood" } },
      { id: "paleur", label: { fr: "Fatigue avec pâleur", ar: "تعب مع شحوب", en: "Tiredness with paleness" } },
      { id: "apres-maladie", label: { fr: "Fatigue après une maladie", ar: "تعب بعد مرض", en: "Tiredness after an illness" } },
    ],
    signs: [
      { id: "sommeil", label: { fr: "Mauvais sommeil", ar: "نوم سيئ", en: "Poor sleep" } },
      { id: "poids", label: { fr: "Perte de poids", ar: "فقدان الوزن", en: "Weight loss" } },
      { id: "effort", label: { fr: "Essoufflement à l'effort", ar: "ضيق التنفس عند المجهود", en: "Breathless on exertion" } },
    ],
    alerts: [...COMMON_ALERTS, "suicide"],
  },
  {
    id: "dos", icon: "Bone", intensity: true, duration: true, consultAfter: 3,
    label: { fr: "Mal au dos", ar: "ألم الظهر", en: "Back pain" },
    zones: ["nuque", "haut-dos", "bas-dos", "jambe"],
    symptoms: [
      { id: "lombaires", label: { fr: "Douleur dans le bas du dos", ar: "ألم في أسفل الظهر", en: "Lower back pain" } },
      { id: "cervicales", label: { fr: "Douleur au cou et à la nuque", ar: "ألم في العنق والرقبة", en: "Neck pain" } },
      { id: "sciatique", label: { fr: "Douleur qui descend dans la jambe", ar: "ألم ينزل إلى الساق", en: "Pain going down the leg" } },
      { id: "effort", label: { fr: "Mal au dos après un effort", ar: "ألم الظهر بعد مجهود", en: "Back pain after an effort" } },
    ],
    signs: [
      { id: "raideur", label: { fr: "Raideur le matin", ar: "تيبّس في الصباح", en: "Morning stiffness" } },
      { id: "fourmis", label: { fr: "Fourmillements", ar: "تنميل", en: "Pins and needles" } },
      { id: "nuit", label: { fr: "Douleur la nuit", ar: "ألم في الليل", en: "Pain at night" } },
    ],
    alerts: ["jambe-force", "nuque-raide", "poitrine"],
  },
  {
    id: "sommeil", icon: "Moon", intensity: false, duration: true, consultAfter: 3,
    label: { fr: "Sommeil", ar: "النوم", en: "Sleep" },
    symptoms: [
      { id: "endormissement", label: { fr: "Difficulté à s'endormir", ar: "صعوبة في النوم", en: "Trouble falling asleep" } },
      { id: "reveils", label: { fr: "Réveils la nuit", ar: "الاستيقاظ أثناء الليل", en: "Waking up at night" } },
      { id: "ronflement", label: { fr: "Ronflements forts", ar: "شخير قوي", en: "Loud snoring" } },
      { id: "somnolence", label: { fr: "Somnolence dans la journée", ar: "نعاس خلال النهار", en: "Sleepiness during the day" } },
    ],
    signs: [
      { id: "stress", label: { fr: "Stress", ar: "توتر", en: "Stress" } },
      { id: "ecrans", label: { fr: "Écrans tard le soir", ar: "الشاشات في وقت متأخر", en: "Screens late at night" } },
      { id: "cafe", label: { fr: "Café ou thé l'après-midi", ar: "قهوة أو شاي بعد الظهر", en: "Coffee or tea in the afternoon" } },
    ],
    alerts: ["suicide", "respiration"],
  },
  {
    id: "allergie", icon: "Flower2", intensity: false, duration: true, consultAfter: 3,
    label: { fr: "Allergies", ar: "الحساسية", en: "Allergies" },
    symptoms: [
      { id: "nez", label: { fr: "Éternuements et nez qui coule", ar: "عطس وسيلان الأنف", en: "Sneezing and runny nose" } },
      { id: "yeux", label: { fr: "Yeux qui grattent et pleurent", ar: "حكة ودموع في العينين", en: "Itchy, watery eyes" } },
      { id: "peau", label: { fr: "Plaques rouges qui grattent", ar: "بقع حمراء مع حكة", en: "Itchy red patches" } },
      { id: "aliment", label: { fr: "Réaction après un aliment", ar: "رد فعل بعد تناول طعام", en: "Reaction after a food" } },
    ],
    signs: [
      { id: "toux", label: { fr: "Toux", ar: "سعال", en: "Cough" } },
      { id: "nez-bouche", label: { fr: "Nez bouché", ar: "انسداد الأنف", en: "Blocked nose" } },
      { id: "fatigue", label: { fr: "Fatigue", ar: "تعب", en: "Tiredness" } },
    ],
    alerts: ["gonflement", "respiration", "malaise"],
  },
  {
    id: "bilan", icon: "TestTube", intensity: false, duration: false, consultAfter: 9,
    label: { fr: "Bilan et analyses", ar: "الفحوصات والتحاليل", en: "Check-ups and tests" },
    symptoms: [
      { id: "checkup", label: { fr: "Bilan de santé de routine", ar: "فحص صحي روتيني", en: "Routine check-up" } },
      { id: "resultat", label: { fr: "Comprendre un résultat d'analyse", ar: "فهم نتيجة تحليل", en: "Understanding a test result" } },
      { id: "cholesterol", label: { fr: "Cholestérol élevé", ar: "ارتفاع الكوليسترول", en: "High cholesterol" } },
      { id: "vaccins", label: { fr: "Mes vaccins", ar: "تلقيحاتي", en: "My vaccines" } },
    ],
    signs: [],
    alerts: [],
  },
];

export const theme = (id: string) => THEMES.find((x) => x.id === id);
export const symptom = (th: Theme, id: string) => th.symptoms.find((s) => s.id === id);

// Adresses publiques : une page par symptôme et intention, dans chaque langue.
export function slugify(s: string, l: Lang) {
  if (l === "ar") return s.replace(/[؟?،,:.()«»]/g, "").trim().replace(/\s+/g, "-");
  return s
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/['’]/g, "-").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function pageTitle(l: Lang, th: Theme, sy: Symptom, intentId: string) {
  const it = INTENTS.find((i) => i.id === intentId)!;
  return `${sy.label[l]}${l === "fr" ? " : " : l === "ar" ? "، " : ": "}${it.title[l]}`;
}

export function pageSlug(l: Lang, th: Theme, sy: Symptom, intentId: string) {
  return slugify(pageTitle(l, th, sy, intentId), l);
}

export type PageKey = { theme: Theme; symptom: Symptom; intent: string };

export function allPages(): PageKey[] {
  return THEMES.flatMap((th) => th.symptoms.flatMap((sy) => INTENTS.map((i) => ({ theme: th, symptom: sy, intent: i.id }))));
}

export function findPage(l: Lang, slug: string): PageKey | undefined {
  return allPages().find((p) => pageSlug(l, p.theme, p.symptom, p.intent) === slug);
}
