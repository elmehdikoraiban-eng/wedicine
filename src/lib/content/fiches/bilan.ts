import type { ThemeFiches } from "../types";

const AMELI_BILAN = { label: "Ameli, Examen de prévention en santé", url: "https://www.ameli.fr/assure/sante/assurance-maladie/examen-prevention-sante" };
const AMELI_CHOLESTEROL = { label: "Ameli, Cholestérol", url: "https://www.ameli.fr/assure/sante/themes/cholesterol" };
const OMS_VACCINS = { label: "OMS, Vaccins et vaccination", url: "https://www.who.int/fr/health-topics/vaccines-and-immunization" };
const MS_VACCINATION = { label: "Ministère de la Santé (Maroc), Programme national d'immunisation", url: "https://www.sante.gov.ma" };

const RED_BILAN = {
  fr: "un résultat marqué comme critique par le laboratoire, ou des symptômes nouveaux (douleur dans la poitrine, essoufflement, perte de poids rapide, sang dans les urines ou les selles) : ne restez pas avec vos résultats, consultez vite.",
  ar: "نتيجة يصنّفها المختبر على أنها حرجة، أو أعراض جديدة (ألم في الصدر، ضيق تنفس، فقدان وزن سريع، دم في البول أو البراز): لا تبقَ مع نتائجك، استشر بسرعة.",
  en: "a result flagged as critical by the laboratory, or new symptoms (chest pain, breathlessness, rapid weight loss, blood in urine or stools): don't sit on your results, see a doctor quickly.",
};

export const bilan: ThemeFiches = {
  checkup: {
    summary: {
      fr: "Un bilan de santé n'est pas une longue liste d'analyses : c'est surtout une consultation où le médecin mesure tension, poids et tour de taille, fait le point sur vos antécédents, vos habitudes et vos vaccins, puis prescrit les quelques examens utiles à votre âge. La plupart des gens en bonne santé n'ont besoin que de 3 ou 4 dosages.",
      ar: "الفحص الصحي ليس قائمة طويلة من التحاليل، بل هو أساساً استشارة يقيس فيها الطبيب الضغط والوزن ومحيط الخصر، ويراجع سوابقك وعاداتك وتلقيحاتك، ثم يصف الفحوصات القليلة المفيدة لعمرك. معظم الأصحاء لا يحتاجون إلا 3 أو 4 تحاليل.",
      en: "A check-up is not a long list of tests: it is mainly a consultation where the doctor measures blood pressure, weight and waist, reviews your history, habits and vaccines, then prescribes the few tests useful for your age. Most healthy people need only 3 or 4 measurements.",
    },
    explanation: [
      { fr: "Les examens qui ont prouvé leur utilité chez l'adulte sans symptôme : tension artérielle (chaque année), glycémie à jeun (dès 40 ans, plus tôt si surpoids ou diabète dans la famille), cholestérol (vers 40 ans puis tous les 5 ans), et dépistage des cancers du sein, du col de l'utérus et du côlon selon l'âge.", ar: "الفحوصات التي أثبتت فائدتها عند البالغ بدون أعراض: ضغط الدم (كل سنة)، سكر الدم صائماً (من 40 سنة، وأبكر عند زيادة الوزن أو وجود سكري في العائلة)، الكوليسترول (حوالي 40 سنة ثم كل 5 سنوات)، والكشف عن سرطان الثدي وعنق الرحم والقولون حسب العمر.", en: "Tests proven useful in adults without symptoms: blood pressure (yearly), fasting blood sugar (from 40, earlier if overweight or diabetes in the family), cholesterol (around 40 then every 5 years), and screening for breast, cervical and bowel cancer depending on age." },
      { fr: "Les « bilans complets » avec des dizaines de dosages trouvent souvent de petites anomalies sans importance qui inquiètent et entraînent d'autres examens inutiles. Plus n'est pas mieux.", ar: "«الفحوصات الشاملة» بعشرات التحاليل تجد غالباً شذوذات صغيرة غير مهمة تقلق وتؤدي إلى فحوصات أخرى غير ضرورية. الأكثر ليس الأفضل.", en: "\"Complete\" panels with dozens of tests often find small, meaningless abnormalities that worry you and lead to more unnecessary tests. More is not better." },
      { fr: "Ce qui pèse le plus sur votre santé à long terme se mesure sans analyse : tabac, activité physique, alimentation, alcool, sommeil et poids. C'est le cœur de la consultation de prévention.", ar: "ما يؤثر أكثر على صحتك على المدى الطويل يُقاس بدون تحليل: التدخين، النشاط البدني، التغذية، الكحول، النوم والوزن. هذا هو جوهر استشارة الوقاية.", en: "What weighs most on your long-term health is measured without any test: smoking, physical activity, diet, alcohol, sleep and weight. That is the heart of the prevention visit." },
    ],
    meanwhile: [
      { fr: "Rassemblez vos anciens résultats, votre carnet de vaccination et la liste de vos traitements.", ar: "اجمع نتائجك القديمة ودفتر التلقيح وقائمة أدويتك.", en: "Gather your old results, vaccination record and list of medicines." },
      { fr: "Notez les maladies de vos parents, frères et sœurs (diabète, infarctus, cancers) et à quel âge.", ar: "سجّل أمراض والديك وإخوتك (السكري، الذبحة القلبية، السرطانات) وفي أي عمر.", en: "Note the illnesses of your parents and siblings (diabetes, heart attack, cancers) and at what age." },
      { fr: "Si une prise de sang est prévue : à jeun depuis 12 heures (eau autorisée), le matin.", ar: "إذا كان تحليل الدم مقرراً: صائماً منذ 12 ساعة (الماء مسموح)، في الصباح.", en: "If a blood test is planned: fasting for 12 hours (water allowed), in the morning." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste. Il coordonne les dépistages et vous oriente vers un spécialiste seulement si nécessaire.", ar: "طبيبك العام. ينسّق الفحوصات ويوجهك إلى الاختصاصي فقط عند الضرورة.", en: "Your GP. They coordinate screenings and refer you to a specialist only if needed." },
    exams: [
      { fr: "Tension artérielle, poids, taille, tour de taille.", ar: "ضغط الدم، الوزن، الطول، محيط الخصر.", en: "Blood pressure, weight, height, waist circumference." },
      { fr: "Glycémie à jeun et bilan lipidique (cholestérol, triglycérides) selon l'âge.", ar: "سكر الدم صائماً وتحليل الدهون (الكوليسترول، الدهون الثلاثية) حسب العمر.", en: "Fasting blood sugar and lipid panel (cholesterol, triglycerides) depending on age." },
      { fr: "Dépistages des cancers selon âge et sexe : frottis du col, mammographie, recherche de sang dans les selles.", ar: "الكشف عن السرطانات حسب العمر والجنس: مسحة عنق الرحم، تصوير الثدي، البحث عن الدم في البراز.", en: "Cancer screenings by age and sex: cervical smear, mammogram, stool blood test." },
      { fr: "Mise à jour des vaccins (tétanos, grippe, hépatite B…).", ar: "تحديث التلقيحات (الكزاز، الأنفلونزا، التهاب الكبد ب...).", en: "Vaccine update (tetanus, flu, hepatitis B…)." },
    ],
    questions: [
      { fr: "Quels examens sont vraiment utiles pour mon âge et mes antécédents ?", ar: "ما الفحوصات المفيدة فعلاً لعمري وسوابقي؟", en: "Which tests are really useful for my age and history?" },
      { fr: "Quels dépistages de cancer me concernent, et à quelle fréquence ?", ar: "ما فحوصات الكشف عن السرطان التي تهمني، وبأي وتيرة؟", en: "Which cancer screenings apply to me, and how often?" },
      { fr: "Mes vaccins sont-ils à jour ?", ar: "هل تلقيحاتي محدَّثة؟", en: "Are my vaccines up to date?" },
      { fr: "Quelle est la chose la plus importante à changer dans mes habitudes ?", ar: "ما أهم شيء يجب تغييره في عاداتي؟", en: "What is the single most important thing to change in my habits?" },
    ],
    warning: RED_BILAN,
    sources: [AMELI_BILAN],
  },
  resultat: {
    summary: {
      fr: "Un résultat en dehors des « valeurs de référence » n'est pas forcément anormal : ces bornes couvrent 95 % des gens en bonne santé, donc 1 dosage sur 20 sort légèrement de la norme sans aucune maladie. Un chiffre isolé ne s'interprète jamais seul : il se lit avec vos symptômes, vos antécédents et vos résultats précédents.",
      ar: "نتيجة خارج «القيم المرجعية» ليست بالضرورة غير طبيعية: هذه الحدود تغطي 95٪ من الأصحاء، فتحليل واحد من 20 يخرج قليلاً عن المعيار دون أي مرض. الرقم المعزول لا يُفسَّر أبداً وحده، بل يُقرأ مع أعراضك وسوابقك ونتائجك السابقة.",
      en: "A result outside the \"reference range\" is not necessarily abnormal: these limits cover 95% of healthy people, so 1 test in 20 falls slightly outside the range with no disease at all. An isolated figure is never interpreted alone: it is read with your symptoms, history and previous results.",
    },
    explanation: [
      { fr: "Les astérisques ou les chiffres en gras signalent seulement un écart avec la norme du laboratoire, pas une gravité. Une anomalie légère est souvent recontrôlée quelques semaines plus tard avant toute conclusion.", ar: "العلامات أو الأرقام الغليظة تشير فقط إلى انحراف عن معيار المختبر، لا إلى خطورة. غالباً يُعاد التحقق من الشذوذ الخفيف بعد بضعة أسابيع قبل أي استنتاج.", en: "Asterisks or bold figures only flag a deviation from the lab's norm, not severity. A mild abnormality is often rechecked a few weeks later before any conclusion." },
      { fr: "Beaucoup de facteurs modifient un résultat : repas, sport la veille, déshydratation, règles, infection récente, heure du prélèvement, médicaments. Le médecin en tient compte.", ar: "عوامل كثيرة تغيّر النتيجة: الوجبة، الرياضة في اليوم السابق، الجفاف، الدورة الشهرية، عدوى حديثة، وقت أخذ العينة، الأدوية. يأخذ الطبيب ذلك بعين الاعتبار.", en: "Many factors alter a result: meals, exercise the day before, dehydration, periods, a recent infection, time of sampling, medicines. The doctor takes these into account." },
      { fr: "Évitez de chercher chaque ligne sur internet : les listes de maladies associées à une valeur anormale sont anxiogènes et presque toujours hors sujet pour votre situation.", ar: "تجنب البحث عن كل سطر على الإنترنت: قوائم الأمراض المرتبطة بقيمة غير طبيعية مقلقة وغالباً لا تمت لحالتك بصلة.", en: "Avoid looking up every line online: lists of diseases linked to an abnormal value are anxiety-provoking and almost always irrelevant to your situation." },
    ],
    meanwhile: [
      { fr: "Gardez tous vos résultats dans un même dossier : l'évolution dans le temps est plus parlante qu'un chiffre isolé.", ar: "احتفظ بكل نتائجك في ملف واحد، فالتطور عبر الزمن أبلغ من رقم معزول.", en: "Keep all your results in one folder: the trend over time says more than a single figure." },
      { fr: "Surlignez les lignes qui vous inquiètent pour en parler au médecin.", ar: "ضع خطاً تحت السطور التي تقلقك للحديث عنها مع الطبيب.", en: "Highlight the lines that worry you to discuss them with the doctor." },
      { fr: "Si le laboratoire vous a appelé pour un résultat urgent, suivez ses consignes le jour même.", ar: "إذا اتصل بك المختبر بشأن نتيجة عاجلة، اتبع تعليماته في اليوم نفسه.", en: "If the laboratory called you about an urgent result, follow their instructions the same day." },
    ],
    whichDoctor: { fr: "Le médecin qui a prescrit l'analyse, ou votre médecin généraliste. Ne demandez pas l'interprétation au laboratoire : il ne connaît pas votre dossier.", ar: "الطبيب الذي وصف التحليل، أو طبيبك العام. لا تطلب التفسير من المختبر فهو لا يعرف ملفك.", en: "The doctor who ordered the test, or your GP. Don't ask the laboratory to interpret it: they don't know your file." },
    exams: [
      { fr: "Souvent un simple contrôle du même dosage à distance.", ar: "غالباً إعادة بسيطة للتحليل نفسه بعد مدة.", en: "Often a simple recheck of the same test later." },
      { fr: "Examens complémentaires ciblés seulement si l'anomalie se confirme.", ar: "فحوصات تكميلية موجهة فقط إذا تأكد الشذوذ.", en: "Targeted further tests only if the abnormality is confirmed." },
    ],
    questions: [
      { fr: "Ce résultat est-il vraiment anormal pour moi ?", ar: "هل هذه النتيجة غير طبيعية فعلاً بالنسبة لي؟", en: "Is this result really abnormal for me?" },
      { fr: "Faut-il le recontrôler, et quand ?", ar: "هل يجب إعادة التحقق منها، ومتى؟", en: "Should it be rechecked, and when?" },
      { fr: "Dois-je changer quelque chose en attendant ?", ar: "هل يجب أن أغيّر شيئاً في الانتظار؟", en: "Should I change anything in the meantime?" },
      { fr: "Pouvez-vous m'écrire ce que signifie chaque ligne anormale ?", ar: "هل يمكنك أن تكتب لي ما يعنيه كل سطر غير طبيعي؟", en: "Can you write down what each abnormal line means?" },
    ],
    warning: RED_BILAN,
    sources: [AMELI_BILAN],
  },
  cholesterol: {
    summary: {
      fr: "Un cholestérol élevé ne se sent pas et n'est pas une maladie en soi : c'est un facteur de risque pour les artères, parmi d'autres (tabac, tension, diabète, âge, hérédité). La décision de traiter dépend de votre risque global, pas d'un seul chiffre. Dans la plupart des cas, on commence par l'alimentation et l'activité physique.",
      ar: "ارتفاع الكوليسترول لا يُحَس وليس مرضاً في حد ذاته، بل عامل خطر على الشرايين ضمن عوامل أخرى (التدخين، الضغط، السكري، العمر، الوراثة). قرار العلاج يعتمد على خطرك الإجمالي لا على رقم واحد. في معظم الحالات نبدأ بالتغذية والنشاط البدني.",
      en: "High cholesterol cannot be felt and is not a disease in itself: it is a risk factor for the arteries, among others (smoking, blood pressure, diabetes, age, heredity). The decision to treat depends on your overall risk, not on a single number. In most cases, diet and physical activity come first.",
    },
    explanation: [
      { fr: "Le « mauvais » cholestérol (LDL) se dépose dans les artères ; le « bon » (HDL) les nettoie. C'est surtout le LDL qui compte, et l'objectif visé dépend de vos autres facteurs de risque : plus bas chez un diabétique ou après un infarctus.", ar: "الكوليسترول «الضار» (LDL) يترسب في الشرايين، و«النافع» (HDL) ينظفها. ما يهم أساساً هو LDL، والهدف المنشود يعتمد على عوامل الخطر الأخرى: أقل عند مريض السكري أو بعد ذبحة قلبية.", en: "\"Bad\" cholesterol (LDL) deposits in the arteries; \"good\" (HDL) clears them. LDL is what matters most, and the target depends on your other risk factors: lower in a diabetic or after a heart attack." },
      { fr: "L'alimentation méditerranéenne (huile d'olive, légumes, légumineuses, poisson, peu de viande rouge et de charcuterie, peu de produits industriels) baisse le LDL de 10 à 15 % et protège le cœur indépendamment du chiffre.", ar: "النظام الغذائي المتوسطي (زيت الزيتون، الخضر، البقوليات، السمك، قليل من اللحم الأحمر والمصنعات، قليل من المنتجات الصناعية) يخفض LDL بنسبة 10 إلى 15٪ ويحمي القلب بغض النظر عن الرقم.", en: "The Mediterranean diet (olive oil, vegetables, legumes, fish, little red or processed meat, few industrial products) lowers LDL by 10 to 15% and protects the heart regardless of the number." },
      { fr: "Un cholestérol très élevé dès le jeune âge, avec des cas d'infarctus précoce dans la famille, évoque une forme héréditaire qui justifie un traitement précoce et un dépistage des proches.", ar: "كوليسترول مرتفع جداً منذ سن مبكرة، مع حالات ذبحة قلبية مبكرة في العائلة، يوحي بشكل وراثي يستوجب علاجاً مبكراً وفحص الأقارب.", en: "Very high cholesterol from a young age, with early heart attacks in the family, suggests an inherited form that warrants early treatment and screening of relatives." },
    ],
    meanwhile: [
      { fr: "Remplacez beurre et graisses animales par de l'huile d'olive ; poisson deux fois par semaine ; une poignée de fruits à coque nature par jour.", ar: "استبدل الزبدة والدهون الحيوانية بزيت الزيتون؛ سمك مرتين في الأسبوع؛ حفنة من المكسرات غير المملحة يومياً.", en: "Replace butter and animal fats with olive oil; fish twice a week; a handful of plain nuts a day." },
      { fr: "30 minutes de marche rapide par jour : l'activité physique monte le bon cholestérol.", ar: "30 دقيقة من المشي السريع يومياً، فالنشاط البدني يرفع الكوليسترول النافع.", en: "30 minutes of brisk walking a day: exercise raises good cholesterol." },
      { fr: "Arrêter de fumer compte plus que n'importe quel régime pour vos artères.", ar: "الإقلاع عن التدخين أهم من أي حمية لشرايينك.", en: "Stopping smoking matters more than any diet for your arteries." },
      { fr: "Méfiez-vous des compléments « anti-cholestérol » en vente libre : efficacité faible, effets secondaires possibles.", ar: "احذر مكملات «خفض الكوليسترول» المتاحة دون وصفة: فعاليتها ضعيفة وقد تسبب آثاراً جانبية.", en: "Beware of over-the-counter \"cholesterol\" supplements: weak efficacy, possible side effects." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste, qui calcule votre risque cardiovasculaire global et décide avec vous d'un traitement ; un cardiologue si le risque est élevé.", ar: "طبيبك العام الذي يحسب خطرك القلبي الوعائي الإجمالي ويقرر معك العلاج؛ وطبيب القلب إذا كان الخطر مرتفعاً.", en: "Your GP, who calculates your overall cardiovascular risk and decides on treatment with you; a cardiologist if the risk is high." },
    exams: [
      { fr: "Bilan lipidique complet à jeun : cholestérol total, LDL, HDL, triglycérides.", ar: "تحليل دهون كامل صائماً: الكوليسترول الكلي، LDL، HDL، الدهون الثلاثية.", en: "Full fasting lipid panel: total cholesterol, LDL, HDL, triglycerides." },
      { fr: "Glycémie, tension artérielle, créatinine pour évaluer le risque global.", ar: "سكر الدم، ضغط الدم، الكرياتينين لتقييم الخطر الإجمالي.", en: "Blood sugar, blood pressure, creatinine to assess overall risk." },
      { fr: "Contrôle du bilan après 3 mois de changements d'habitudes.", ar: "إعادة التحليل بعد 3 أشهر من تغيير العادات.", en: "Repeat panel after 3 months of lifestyle changes." },
    ],
    questions: [
      { fr: "Quel est mon risque cardiovasculaire global ?", ar: "ما خطري القلبي الوعائي الإجمالي؟", en: "What is my overall cardiovascular risk?" },
      { fr: "Quel LDL dois-je viser dans mon cas ?", ar: "ما مستوى LDL الذي يجب أن أستهدفه في حالتي؟", en: "What LDL should I aim for in my case?" },
      { fr: "Ai-je besoin d'un médicament, ou l'alimentation suffit-elle ?", ar: "هل أحتاج إلى دواء أم تكفي التغذية؟", en: "Do I need medication, or is diet enough?" },
      { fr: "Mes enfants doivent-ils être dépistés ?", ar: "هل يجب فحص أطفالي؟", en: "Should my children be screened?" },
    ],
    warning: {
      fr: "douleur ou serrement dans la poitrine, essoufflement inhabituel, douleur dans un mollet à la marche qui oblige à s'arrêter, faiblesse d'un côté du corps ou trouble de la parole : appelez le 15.",
      ar: "ألم أو ضيق في الصدر، ضيق تنفس غير معتاد، ألم في ربلة الساق عند المشي يضطرك للتوقف، ضعف في جهة من الجسم أو صعوبة في الكلام: اتصل بـ 15.",
      en: "chest pain or tightness, unusual breathlessness, calf pain when walking that forces you to stop, weakness on one side of the body or trouble speaking: call 15.",
    },
    sources: [AMELI_CHOLESTEROL],
  },
  vaccins: {
    summary: {
      fr: "Les vaccins ne concernent pas que les enfants. Chez l'adulte, il faut un rappel de tétanos-diphtérie-polio tous les 10 à 20 ans, le vaccin contre la grippe chaque année après 65 ans ou en cas de maladie chronique, et parfois hépatite B, pneumocoque ou coqueluche selon la situation. Les vaccins du calendrier national marocain sont gratuits dans les centres de santé.",
      ar: "التلقيحات لا تخص الأطفال فقط. عند البالغ، يلزم تذكير الكزاز-الخناق-شلل الأطفال كل 10 إلى 20 سنة، ولقاح الأنفلونزا كل سنة بعد 65 سنة أو عند وجود مرض مزمن، وأحياناً التهاب الكبد ب أو المكورات الرئوية أو السعال الديكي حسب الحالة. لقاحات الجدول الوطني المغربي مجانية في المراكز الصحية.",
      en: "Vaccines are not just for children. Adults need a tetanus-diphtheria-polio booster every 10 to 20 years, the flu vaccine every year after 65 or with a chronic disease, and sometimes hepatitis B, pneumococcus or whooping cough depending on the situation. Vaccines on the Moroccan national schedule are free in health centres.",
    },
    explanation: [
      { fr: "Un vaccin présente au système immunitaire un fragment inoffensif du microbe pour qu'il apprenne à le reconnaître. Les effets secondaires habituels (douleur au bras, fatigue, fièvre légère pendant 1 à 2 jours) sont le signe que cet apprentissage a lieu.", ar: "يعرض اللقاح على الجهاز المناعي جزءاً غير ضار من الميكروب ليتعلم التعرف عليه. الآثار الجانبية المعتادة (ألم في الذراع، تعب، حمى خفيفة ليوم أو يومين) علامة على أن هذا التعلم يحدث.", en: "A vaccine shows the immune system a harmless fragment of the germ so it learns to recognise it. The usual side effects (sore arm, tiredness, mild fever for 1 to 2 days) are a sign that this learning is happening." },
      { fr: "Pour l'enfant, le calendrier marocain protège notamment contre la tuberculose (BCG), l'hépatite B, la polio, la diphtérie, le tétanos, la coqueluche, le pneumocoque, le rotavirus, la rougeole et la rubéole. Un retard se rattrape : on ne recommence jamais à zéro.", ar: "بالنسبة للطفل، يحمي الجدول المغربي خصوصاً من السل (BCG) والتهاب الكبد ب وشلل الأطفال والخناق والكزاز والسعال الديكي والمكورات الرئوية والفيروس العجلي والحصبة والحصبة الألمانية. التأخر يُستدرك ولا نبدأ أبداً من الصفر.", en: "For children, the Moroccan schedule protects notably against tuberculosis (BCG), hepatitis B, polio, diphtheria, tetanus, whooping cough, pneumococcus, rotavirus, measles and rubella. A delay can be caught up: you never start again from scratch." },
      { fr: "Femmes enceintes : le vaccin contre la grippe et contre la coqueluche protègent la mère et le nouveau-né. Voyage : certaines destinations exigent fièvre jaune, hépatite A ou typhoïde, à prévoir 4 à 6 semaines avant le départ.", ar: "الحوامل: لقاح الأنفلونزا والسعال الديكي يحميان الأم والمولود. السفر: بعض الوجهات تشترط الحمى الصفراء أو التهاب الكبد أ أو التيفوئيد، ويجب التخطيط لها 4 إلى 6 أسابيع قبل المغادرة.", en: "Pregnant women: flu and whooping cough vaccines protect mother and newborn. Travel: some destinations require yellow fever, hepatitis A or typhoid, to be planned 4 to 6 weeks before departure." },
    ],
    meanwhile: [
      { fr: "Retrouvez votre carnet de vaccination ou celui de l'enfant ; sans carnet, le médecin peut vérifier certaines protections par une prise de sang ou simplement revacciner.", ar: "ابحث عن دفتر التلقيح الخاص بك أو بالطفل؛ وبدون دفتر يمكن للطبيب التحقق من بعض المناعات بتحليل دم أو إعادة التلقيح ببساطة.", en: "Find your or your child's vaccination record; without it, the doctor can check some protections with a blood test or simply revaccinate." },
      { fr: "Après un vaccin : paracétamol si fièvre ou douleur, pas d'ibuprofène préventif.", ar: "بعد اللقاح: باراسيتامول عند الحمى أو الألم، ولا إيبوبروفين وقائياً.", en: "After a vaccine: paracetamol if fever or pain, no preventive ibuprofen." },
      { fr: "Une plaie souillée et un dernier rappel de tétanos de plus de 10 ans : consultez dans les 48 heures.", ar: "جرح متسخ وآخر تذكير للكزاز منذ أكثر من 10 سنوات: استشر خلال 48 ساعة.", en: "A dirty wound and a last tetanus booster more than 10 years ago: see a doctor within 48 hours." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste ou le centre de santé le plus proche (vaccins du programme national gratuits) ; un centre de vaccination internationale pour les voyages.", ar: "طبيبك العام أو أقرب مركز صحي (لقاحات البرنامج الوطني مجانية)؛ ومركز التلقيح الدولي للسفر.", en: "Your GP or the nearest health centre (national programme vaccines are free); an international vaccination centre for travel." },
    exams: [
      { fr: "Aucun en général : le carnet suffit.", ar: "لا شيء عادةً، فالدفتر كافٍ.", en: "Usually none: the record is enough." },
      { fr: "Sérologie (hépatite B, rubéole) dans certaines situations : grossesse, profession de santé, carnet perdu.", ar: "تحليل المصل (التهاب الكبد ب، الحصبة الألمانية) في حالات معينة: الحمل، مهن الصحة، فقدان الدفتر.", en: "Serology (hepatitis B, rubella) in some situations: pregnancy, healthcare work, lost record." },
    ],
    questions: [
      { fr: "Quels vaccins me manquent, à moi ou à mon enfant ?", ar: "ما اللقاحات التي تنقصني أنا أو طفلي؟", en: "Which vaccines am I or my child missing?" },
      { fr: "Puis-je être vacciné si je suis enrhumé, enceinte ou sous traitement ?", ar: "هل يمكن تلقيحي إذا كنت مصاباً بالزكام أو حاملاً أو تحت علاج؟", en: "Can I be vaccinated if I have a cold, am pregnant or on treatment?" },
      { fr: "Quels vaccins pour mon prochain voyage ?", ar: "ما اللقاحات اللازمة لسفري القادم؟", en: "Which vaccines for my next trip?" },
      { fr: "Où puis-je obtenir ces vaccins gratuitement ?", ar: "أين يمكنني الحصول على هذه اللقاحات مجاناً؟", en: "Where can I get these vaccines free of charge?" },
    ],
    warning: {
      fr: "après un vaccin : gonflement du visage, difficulté à respirer, malaise dans l'heure qui suit (appelez le 15) ; fièvre au-dessus de 39 °C qui dure plus de 48 heures ; chez un bébé, pleurs inconsolables de plus de 3 heures ou convulsions.",
      ar: "بعد اللقاح: تورّم الوجه، صعوبة في التنفس، إغماء خلال الساعة التالية (اتصل بـ 15)؛ حمى فوق 39 درجة تستمر أكثر من 48 ساعة؛ عند الرضيع، بكاء لا يهدأ لأكثر من 3 ساعات أو تشنجات.",
      en: "after a vaccine: face swelling, difficulty breathing, fainting within the following hour (call 15); fever above 39 °C lasting more than 48 hours; in a baby, inconsolable crying for over 3 hours or convulsions.",
    },
    sources: [OMS_VACCINS, MS_VACCINATION],
  },
};
