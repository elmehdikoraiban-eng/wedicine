import type { Lang } from "./i18n";

// Mots médicaux expliqués au survol ou au toucher (pages d'information).
// Définitions courtes, sans conseil de traitement personnalisé.
type Entry = { terms: Record<Lang, string[]>; def: Record<Lang, string> };
const ENTRIES: Entry[] = [
  { terms: { fr: ["viral", "virale", "virales", "viraux", "virus"], ar: ["فيروس", "فيروسية"], en: ["virus", "viral"] },
    def: { fr: "Microbe très petit. Les antibiotiques n'ont aucun effet sur les virus.", ar: "ميكروب صغير جداً. المضادات الحيوية لا تؤثر على الفيروسات.", en: "A very small germ. Antibiotics have no effect on viruses." } },
  { terms: { fr: ["bactérie", "bactéries", "bactérienne", "bactérien"], ar: ["بكتيريا", "بكتيرية"], en: ["bacteria", "bacterial"] },
    def: { fr: "Microbe qu'un antibiotique peut soigner, sur prescription du médecin.", ar: "ميكروب يمكن علاجه بمضاد حيوي بوصفة الطبيب.", en: "A germ that antibiotics can treat, when a doctor prescribes them." } },
  { terms: { fr: ["antibiotique", "antibiotiques"], ar: ["مضاد حيوي", "المضادات الحيوية"], en: ["antibiotic", "antibiotics"] },
    def: { fr: "Médicament contre les bactéries, inutile contre les virus. Uniquement sur ordonnance.", ar: "دواء ضد البكتيريا، غير مفيد ضد الفيروسات. بوصفة طبية فقط.", en: "A medicine against bacteria, useless against viruses. Prescription only." } },
  { terms: { fr: ["angine", "angines"], ar: ["التهاب اللوزتين"], en: ["strep throat", "tonsillitis"] },
    def: { fr: "Inflammation des amygdales, au fond de la gorge. Le plus souvent due à un virus.", ar: "التهاب اللوزتين في عمق الحلق، غالباً بسبب فيروس.", en: "Inflamed tonsils at the back of the throat, most often caused by a virus." } },
  { terms: { fr: ["streptocoque"], ar: ["العقديات"], en: ["streptococcus", "strep"] },
    def: { fr: "Bactérie qui peut causer une angine. Un test rapide en cabinet la détecte.", ar: "بكتيريا قد تسبب التهاب اللوزتين، يكشفها اختبار سريع في العيادة.", en: "A bacterium that can cause a sore throat. A quick test at the clinic detects it." } },
  { terms: { fr: ["LDL"], ar: ["LDL"], en: ["LDL"] },
    def: { fr: "Le « mauvais » cholestérol, qui se dépose dans les artères.", ar: "الكوليسترول « الضار » الذي يترسب في الشرايين.", en: "The \"bad\" cholesterol, which builds up in the arteries." } },
  { terms: { fr: ["cholestérol"], ar: ["الكوليسترول"], en: ["cholesterol"] },
    def: { fr: "Graisse présente dans le sang. En excès, elle abîme les artères.", ar: "دهون في الدم، الزائد منها يضر الشرايين.", en: "A fat in the blood. Too much of it damages the arteries." } },
  { terms: { fr: ["glycémie"], ar: ["نسبة السكر في الدم"], en: ["blood sugar", "blood glucose"] },
    def: { fr: "Taux de sucre dans le sang, mesuré par une prise de sang ou au bout du doigt.", ar: "نسبة السكر في الدم، تقاس بتحليل دم أو من طرف الإصبع.", en: "The sugar level in the blood, measured by a blood test or a finger prick." } },
  { terms: { fr: ["hypertension"], ar: ["ارتفاع ضغط الدم"], en: ["hypertension", "high blood pressure"] },
    def: { fr: "Tension trop haute de façon durable. Souvent sans aucun symptôme.", ar: "ضغط دم مرتفع بشكل دائم، غالباً بدون أي أعراض.", en: "Blood pressure that stays too high. Often causes no symptoms at all." } },
  { terms: { fr: ["paracétamol"], ar: ["باراسيتامول"], en: ["paracetamol", "acetaminophen"] },
    def: { fr: "Médicament contre la douleur et la fièvre. Respectez la dose de la notice.", ar: "دواء ضد الألم والحمى. احترم الجرعة المذكورة في النشرة.", en: "A medicine for pain and fever. Follow the dose on the leaflet." } },
  { terms: { fr: ["anti-inflammatoire", "anti-inflammatoires"], ar: ["مضاد للالتهاب", "مضادات الالتهاب"], en: ["anti-inflammatory", "anti-inflammatories"] },
    def: { fr: "Médicament comme l'ibuprofène. Demandez avis avant d'en prendre si vous êtes enceinte ou avez un problème d'estomac ou de reins.", ar: "دواء مثل الإيبوبروفين. اطلب رأياً طبياً قبل تناوله في حالة الحمل أو مشاكل المعدة أو الكلى.", en: "A medicine like ibuprofen. Ask for advice first if you are pregnant or have stomach or kidney problems." } },
  { terms: { fr: ["reflux"], ar: ["الارتجاع"], en: ["reflux"] },
    def: { fr: "Remontée d'acide de l'estomac vers la gorge, qui brûle.", ar: "صعود حمض المعدة نحو الحلق مسبباً حرقة.", en: "Stomach acid coming back up towards the throat, causing a burning feeling." } },
  { terms: { fr: ["asthme"], ar: ["الربو"], en: ["asthma"] },
    def: { fr: "Maladie où les bronches se resserrent et gênent la respiration.", ar: "مرض تضيق فيه القصبات ويصعب التنفس.", en: "A condition where the airways narrow and make breathing hard." } },
  { terms: { fr: ["migraine", "migraines"], ar: ["الشقيقة"], en: ["migraine", "migraines"] },
    def: { fr: "Mal de tête qui revient par crises, souvent d'un côté, parfois avec nausées.", ar: "صداع يعود على شكل نوبات، غالباً في جهة واحدة، أحياناً مع غثيان.", en: "A headache that comes in attacks, often on one side, sometimes with nausea." } },
  { terms: { fr: ["anémie"], ar: ["فقر الدم"], en: ["anaemia", "anemia"] },
    def: { fr: "Manque de globules rouges. Donne fatigue, pâleur et essoufflement.", ar: "نقص في كريات الدم الحمراء، يسبب التعب والشحوب وضيق التنفس.", en: "A lack of red blood cells, causing tiredness, paleness and breathlessness." } },
  { terms: { fr: ["IRM"], ar: ["الرنين المغناطيسي"], en: ["MRI"] },
    def: { fr: "Examen d'imagerie avec un aimant, sans rayons X.", ar: "فحص بالتصوير بواسطة مغناطيس، بدون أشعة.", en: "An imaging scan that uses a magnet, without X-rays." } },
  { terms: { fr: ["NFS"], ar: ["تعداد الدم"], en: ["blood count", "FBC"] },
    def: { fr: "Prise de sang qui compte les globules rouges, les globules blancs et les plaquettes.", ar: "تحليل دم يحسب الكريات الحمراء والبيضاء والصفائح.", en: "A blood test that counts red cells, white cells and platelets." } },
  { terms: { fr: ["déshydratation"], ar: ["الجفاف"], en: ["dehydration"] },
    def: { fr: "Manque d'eau dans le corps : bouche sèche, urines foncées, fatigue.", ar: "نقص الماء في الجسم: جفاف الفم، بول داكن، تعب.", en: "Not enough water in the body: dry mouth, dark urine, tiredness." } },
];

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const cache = new Map<Lang, { re: RegExp; defs: Map<string, { key: number; def: string }> }>();

// Une expression pour toutes les entrées d'une langue (termes les plus longs d'abord).
export function glossaryFor(lang: Lang) {
  let c = cache.get(lang);
  if (!c) {
    const defs = new Map<string, { key: number; def: string }>();
    ENTRIES.forEach((e, key) => e.terms[lang].forEach((term) => defs.set(term.toLowerCase(), { key, def: e.def[lang] })));
    const all = [...defs.keys()].sort((a, b) => b.length - a.length).map(esc);
    c = { re: new RegExp(`(?<![\\p{L}\\p{N}])(${all.join("|")})(?![\\p{L}\\p{N}])`, "giu"), defs };
    cache.set(lang, c);
  }
  return c;
}
