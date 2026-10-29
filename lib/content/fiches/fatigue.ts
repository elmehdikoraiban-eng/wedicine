import type { ThemeFiches } from "../types";

const AMELI_FATIGUE = { label: "Ameli, Fatigue", url: "https://www.ameli.fr/assure/sante/themes/fatigue-asthenie" };
const AMELI_ANEMIE = { label: "Ameli, Anémie par carence en fer", url: "https://www.ameli.fr/assure/sante/themes/anemie-carence-fer" };
const AMELI_DEPRESSION = { label: "Ameli, Dépression", url: "https://www.ameli.fr/assure/sante/themes/depression-troubles-depressifs" };

const BILAN = [
  { fr: "Prise de sang : numération (anémie), ferritine, TSH (thyroïde), glycémie, vitamine D.", ar: "تحليل دم: تعداد الدم (فقر الدم)، الفيريتين، TSH (الغدة الدرقية)، السكر، فيتامين د.", en: "Blood test: blood count (anaemia), ferritin, TSH (thyroid), blood sugar, vitamin D." },
];

export const fatigue: ThemeFiches = {
  reveil: {
    summary: {
      fr: "Être fatigué dès le réveil, même après une nuit complète, évoque un sommeil de mauvaise qualité : apnées, ronflements, réveils, écrans tard, ou un moral bas. Une prise de sang simple écarte une carence ou une thyroïde paresseuse.",
      ar: "التعب منذ الاستيقاظ حتى بعد ليلة كاملة يوحي بنوم رديء الجودة: انقطاع التنفس، الشخير، الاستيقاظ المتكرر، الشاشات ليلاً، أو المعنويات المنخفضة. تحليل دم بسيط يستبعد نقصاً أو كسل الغدة الدرقية.",
      en: "Being tired from the moment you wake, even after a full night, suggests poor-quality sleep: apnoeas, snoring, waking up, late screens, or low mood. A simple blood test rules out a deficiency or a sluggish thyroid.",
    },
    explanation: [
      { fr: "L'apnée du sommeil touche surtout les personnes qui ronflent, en surpoids, avec une tension élevée. On dort 8 heures mais le sommeil est haché par des arrêts respiratoires.", ar: "انقطاع التنفس أثناء النوم يصيب خاصة من يشخرون ولديهم وزن زائد وضغط مرتفع. ننام 8 ساعات لكن النوم يتقطع بتوقفات في التنفس.", en: "Sleep apnoea mainly affects people who snore, are overweight, with high blood pressure. You sleep 8 hours but sleep is broken by pauses in breathing." },
      { fr: "Une fatigue du matin avec perte d'intérêt, tristesse et idées noires peut être une dépression, qui se soigne.", ar: "تعب الصباح مع فقدان الاهتمام والحزن والأفكار السوداوية قد يكون اكتئاباً، وهو قابل للعلاج.", en: "Morning tiredness with loss of interest, sadness and dark thoughts may be depression, which is treatable." },
      { fr: "Chez la femme, une carence en fer liée aux règles abondantes est la cause la plus fréquente de fatigue.", ar: "عند المرأة، نقص الحديد بسبب الدورة الغزيرة هو السبب الأكثر شيوعاً للتعب.", en: "In women, iron deficiency from heavy periods is the most common cause of tiredness." },
    ],
    meanwhile: [
      { fr: "Couchez-vous et levez-vous à heure fixe, même le week-end, sans écran la dernière heure.", ar: "نم واستيقظ في وقت ثابت حتى في عطلة نهاية الأسبوع، وبدون شاشة في الساعة الأخيرة.", en: "Go to bed and get up at fixed times, even at weekends, with no screen in the last hour." },
      { fr: "Demandez à votre entourage si vous ronflez ou si votre respiration s'arrête la nuit.", ar: "اسأل من حولك إن كنت تشخر أو يتوقف تنفسك ليلاً.", en: "Ask those around you if you snore or if your breathing stops at night." },
      { fr: "Exposez-vous à la lumière du jour le matin et bougez dans la journée.", ar: "تعرض لضوء النهار صباحاً وتحرك خلال اليوم.", en: "Get daylight in the morning and move during the day." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste, avec un bilan sanguin ; un centre du sommeil si une apnée est suspectée.", ar: "طبيبك العام مع فحص دم؛ ومركز النوم عند الاشتباه في انقطاع التنفس.", en: "Your GP, with a blood test; a sleep centre if apnoea is suspected." },
    exams: [
      ...BILAN,
      { fr: "Enregistrement du sommeil (polygraphie) si ronflements et somnolence.", ar: "تسجيل النوم إذا كان هناك شخير ونعاس.", en: "Sleep recording (polygraphy) if snoring and sleepiness." },
    ],
    questions: [
      { fr: "Mon sommeil est-il en cause, et faut-il chercher une apnée ?", ar: "هل نومي هو السبب، وهل يجب البحث عن انقطاع التنفس؟", en: "Is my sleep the cause, and should we look for apnoea?" },
      { fr: "Quelles analyses de sang faut-il faire ?", ar: "ما التحاليل الدموية اللازمة؟", en: "Which blood tests should I have?" },
      { fr: "Ma fatigue peut-elle être liée à mon moral ?", ar: "هل يمكن أن يكون تعبي مرتبطاً بحالتي النفسية؟", en: "Could my tiredness be linked to my mood?" },
    ],
    warning: {
      fr: "somnolence au volant, essoufflement, perte de poids importante, fièvre prolongée, ou idées noires.",
      ar: "نعاس أثناء القيادة، ضيق التنفس، فقدان وزن كبير، حمى طويلة، أو أفكار سوداوية.",
      en: "sleepiness while driving, breathlessness, significant weight loss, prolonged fever, or dark thoughts.",
    },
    sources: [AMELI_FATIGUE],
  },
  energie: {
    summary: {
      fr: "Un manque d'énergie qui dure plus de quelques semaines a souvent une cause simple à corriger : carence en fer ou en vitamine D, thyroïde, sommeil, stress, sédentarité, ou un médicament. Un bilan sanguin de base oriente le médecin.",
      ar: "نقص الطاقة الذي يستمر أكثر من بضعة أسابيع له غالباً سبب بسيط يمكن تصحيحه: نقص الحديد أو فيتامين د، الغدة الدرقية، النوم، التوتر، قلة الحركة، أو دواء. فحص دم أساسي يوجه الطبيب.",
      en: "Low energy lasting more than a few weeks often has a simple, fixable cause: iron or vitamin D deficiency, thyroid, sleep, stress, inactivity, or a medicine. A basic blood test guides the doctor.",
    },
    explanation: [
      { fr: "La carence en vitamine D est très répandue au Maroc, surtout chez les femmes voilées et les personnes qui sortent peu : elle donne fatigue et douleurs musculaires.", ar: "نقص فيتامين د منتشر جداً في المغرب، خاصة عند النساء المحجبات ومن يخرجون قليلاً، ويسبب التعب وآلام العضلات.", en: "Vitamin D deficiency is very widespread in Morocco, especially in veiled women and people who go out little: it causes tiredness and muscle pain." },
      { fr: "Une thyroïde paresseuse (hypothyroïdie) ralentit tout : fatigue, frilosité, prise de poids, constipation. Une TSH suffit à la dépister.", ar: "كسل الغدة الدرقية يبطئ كل شيء: تعب، برودة، زيادة الوزن، إمساك. يكفي تحليل TSH للكشف عنه.", en: "An underactive thyroid slows everything: tiredness, feeling cold, weight gain, constipation. A TSH test is enough to detect it." },
      { fr: "Paradoxalement, le manque d'activité physique fatigue : 30 minutes de marche par jour redonnent de l'énergie en 2 à 3 semaines.", ar: "من المفارقات أن قلة النشاط البدني تُتعب، و30 دقيقة من المشي يومياً تعيد الطاقة خلال أسبوعين أو ثلاثة.", en: "Paradoxically, lack of physical activity tires you: 30 minutes of walking a day restores energy within 2 to 3 weeks." },
    ],
    meanwhile: [
      { fr: "Notez depuis quand vous êtes fatigué, votre sommeil, votre appétit, votre moral et les changements récents.", ar: "سجّل منذ متى أنت متعب، ونومك، وشهيتك، ومعنوياتك، والتغييرات الأخيرة.", en: "Note since when you've been tired, your sleep, appetite, mood and recent changes." },
      { fr: "Marchez chaque jour, mangez à heures régulières, limitez le sucre rapide et le café.", ar: "امشِ كل يوم، وكُل في أوقات منتظمة، وقلل السكر السريع والقهوة.", en: "Walk every day, eat at regular times, limit fast sugar and coffee." },
      { fr: "Apportez la liste de vos médicaments et compléments.", ar: "أحضر لائحة أدويتك ومكملاتك.", en: "Bring the list of your medicines and supplements." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste si la fatigue dure plus de 3 semaines.", ar: "طبيبك العام إذا استمر التعب أكثر من 3 أسابيع.", en: "Your GP if the tiredness lasts more than 3 weeks." },
    exams: BILAN,
    questions: [
      { fr: "Quelles analyses faut-il faire ?", ar: "ما التحاليل اللازمة؟", en: "Which tests should I have?" },
      { fr: "Ai-je une carence en fer ou en vitamine D ?", ar: "هل لدي نقص في الحديد أو فيتامين د؟", en: "Do I have an iron or vitamin D deficiency?" },
      { fr: "Mes médicaments peuvent-ils fatiguer ?", ar: "هل يمكن لأدويتي أن تسبب التعب؟", en: "Can my medicines cause tiredness?" },
      { fr: "Que changer dans mes habitudes ?", ar: "ماذا أغيّر في عاداتي؟", en: "What should I change in my habits?" },
    ],
    warning: {
      fr: "essoufflement, palpitations, perte de poids inexpliquée, fièvre qui dure, ganglions, sueurs la nuit, ou idées noires.",
      ar: "ضيق التنفس، خفقان، فقدان وزن غير مبرر، حمى مستمرة، غدد منتفخة، تعرق ليلي، أو أفكار سوداوية.",
      en: "breathlessness, palpitations, unexplained weight loss, lasting fever, swollen glands, night sweats, or dark thoughts.",
    },
    sources: [AMELI_FATIGUE],
  },
  moral: {
    summary: {
      fr: "Une fatigue avec moral bas, perte de plaisir, sommeil perturbé et difficulté à se concentrer depuis plus de 2 semaines peut être une dépression. Ce n'est ni une faiblesse ni une honte : c'est une maladie fréquente qui se soigne bien.",
      ar: "التعب مع المعنويات المنخفضة وفقدان المتعة واضطراب النوم وصعوبة التركيز لأكثر من أسبوعين قد يكون اكتئاباً. ليس ضعفاً ولا عيباً، بل مرض شائع يُعالج جيداً.",
      en: "Tiredness with low mood, loss of pleasure, disturbed sleep and trouble concentrating for more than 2 weeks may be depression. It is neither a weakness nor a shame: it is a common illness that treats well.",
    },
    explanation: [
      { fr: "La dépression touche 1 personne sur 5 au cours de sa vie. Elle se manifeste souvent par le corps : fatigue, douleurs, troubles digestifs, avant même la tristesse.", ar: "يصيب الاكتئاب شخصاً من كل 5 خلال حياته. يظهر غالباً عبر الجسم: تعب، آلام، اضطرابات هضمية، حتى قبل الحزن.", en: "Depression affects 1 person in 5 over a lifetime. It often shows through the body: tiredness, aches, digestive trouble, even before sadness." },
      { fr: "Le traitement associe un accompagnement psychologique et, selon la sévérité, un médicament qui met 2 à 4 semaines à agir.", ar: "يجمع العلاج بين الدعم النفسي، وحسب الشدة، دواء يحتاج أسبوعين إلى 4 أسابيع ليعمل.", en: "Treatment combines psychological support and, depending on severity, a medicine that takes 2 to 4 weeks to work." },
      { fr: "Le burn-out lié au travail ressemble à la dépression ; le médecin peut aider à faire la part des choses et proposer un arrêt.", ar: "الإرهاق المهني يشبه الاكتئاب، ويمكن للطبيب المساعدة على التمييز واقتراح راحة.", en: "Work-related burnout looks like depression; the doctor can help tell them apart and suggest time off." },
      { fr: "Parler de ses idées noires au médecin n'est pas dangereux : c'est le premier pas pour aller mieux.", ar: "الحديث عن الأفكار السوداوية مع الطبيب ليس خطيراً، بل هو الخطوة الأولى نحو التحسن.", en: "Talking about dark thoughts to a doctor is not dangerous: it is the first step to getting better." },
    ],
    meanwhile: [
      { fr: "Parlez-en à une personne de confiance, ne restez pas seul.", ar: "تحدث إلى شخص تثق به، ولا تبق وحيداً.", en: "Talk to someone you trust, don't stay alone." },
      { fr: "Gardez un rythme : lever à heure fixe, une sortie par jour, un repas avec quelqu'un.", ar: "حافظ على إيقاع: استيقاظ في وقت ثابت، خروج يومي، وجبة مع شخص ما.", en: "Keep a routine: get up at a set time, one outing a day, one meal with someone." },
      { fr: "Évitez l'alcool, qui aggrave la dépression et le sommeil.", ar: "تجنب الكحول لأنه يفاقم الاكتئاب والنوم.", en: "Avoid alcohol, which worsens depression and sleep." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste en premier ; il peut vous orienter vers un psychologue ou un psychiatre.", ar: "طبيبك العام أولاً، ويمكنه توجيهك إلى أخصائي نفسي أو طبيب نفسي.", en: "Your GP first; they can refer you to a psychologist or psychiatrist." },
    exams: [
      ...BILAN,
      { fr: "Questionnaire de dépression en consultation.", ar: "استبيان الاكتئاب خلال الاستشارة.", en: "Depression questionnaire during the visit." },
    ],
    questions: [
      { fr: "Est-ce une dépression, un burn-out ou autre chose ?", ar: "هل هو اكتئاب أم إرهاق مهني أم شيء آخر؟", en: "Is it depression, burnout or something else?" },
      { fr: "Ai-je besoin d'un médicament ou d'un suivi psychologique ?", ar: "هل أحتاج دواءً أم متابعة نفسية؟", en: "Do I need a medicine or psychological support?" },
      { fr: "Combien de temps avant d'aller mieux ?", ar: "كم من الوقت قبل أن أتحسن؟", en: "How long before I feel better?" },
      { fr: "Un arrêt de travail peut-il m'aider ?", ar: "هل يمكن أن تساعدني راحة من العمل؟", en: "Could time off work help me?" },
    ],
    warning: {
      fr: "idées de mort ou de se faire du mal, impossibilité de se lever ou de manger depuis plusieurs jours, ou isolement total : appelez le 15 ou allez aux urgences, ne restez pas seul.",
      ar: "أفكار عن الموت أو إيذاء النفس، عدم القدرة على النهوض أو الأكل منذ عدة أيام، أو عزلة تامة: اتصل بالرقم 15 أو توجه إلى المستعجلات، ولا تبق وحيداً.",
      en: "thoughts of death or self-harm, unable to get up or eat for several days, or total isolation: call 15 or go to the emergency department, don't stay alone.",
    },
    sources: [AMELI_DEPRESSION],
  },
  paleur: {
    summary: {
      fr: "Fatigue avec pâleur, essoufflement à l'effort et parfois vertiges, c'est le tableau classique de l'anémie, le plus souvent par manque de fer. Elle touche surtout les femmes qui ont des règles abondantes et se confirme par une simple prise de sang.",
      ar: "التعب مع الشحوب وضيق التنفس عند المجهود وأحياناً الدوخة هو الصورة الكلاسيكية لفقر الدم، غالباً بسبب نقص الحديد. يصيب خاصة النساء ذوات الدورة الغزيرة ويُؤكد بتحليل دم بسيط.",
      en: "Tiredness with paleness, breathlessness on exertion and sometimes dizziness is the classic picture of anaemia, most often from lack of iron. It mainly affects women with heavy periods and is confirmed by a simple blood test.",
    },
    explanation: [
      { fr: "L'anémie, c'est un manque de globules rouges, qui transportent l'oxygène. Le corps fonctionne au ralenti.", ar: "فقر الدم هو نقص في كريات الدم الحمراء التي تنقل الأكسجين، فيعمل الجسم ببطء.", en: "Anaemia is a shortage of red blood cells, which carry oxygen. The body runs slow." },
      { fr: "Causes fréquentes : règles abondantes, grossesses rapprochées, alimentation pauvre en viande, thé pris pendant les repas (il bloque le fer).", ar: "الأسباب الشائعة: الدورة الغزيرة، الحمل المتقارب، تغذية فقيرة باللحوم، الشاي أثناء الوجبات (يمنع امتصاص الحديد).", en: "Common causes: heavy periods, closely spaced pregnancies, diet low in meat, tea with meals (it blocks iron)." },
      { fr: "Chez l'homme ou la femme ménopausée, une anémie par manque de fer doit faire chercher un saignement digestif caché.", ar: "عند الرجل أو المرأة بعد سن اليأس، فقر الدم بنقص الحديد يستدعي البحث عن نزيف هضمي خفي.", en: "In a man or a post-menopausal woman, iron-deficiency anaemia requires looking for hidden digestive bleeding." },
      { fr: "Le traitement par fer dure au moins 3 mois, se prend à distance du thé et du café, et colore les selles en noir.", ar: "علاج الحديد يستمر 3 أشهر على الأقل، ويؤخذ بعيداً عن الشاي والقهوة، ويلوّن البراز بالأسود.", en: "Iron treatment lasts at least 3 months, is taken away from tea and coffee, and turns stools black." },
    ],
    meanwhile: [
      { fr: "Mangez des aliments riches en fer : viande rouge, foie, lentilles, pois chiches, épinards, avec un agrume pour mieux l'absorber.", ar: "تناول أطعمة غنية بالحديد: لحم أحمر، كبد، عدس، حمص، سبانخ، مع حمضيات لامتصاص أفضل.", en: "Eat iron-rich foods: red meat, liver, lentils, chickpeas, spinach, with citrus fruit to absorb it better." },
      { fr: "Ne buvez pas de thé pendant les repas, attendez une heure.", ar: "لا تشرب الشاي أثناء الوجبات، وانتظر ساعة.", en: "Don't drink tea with meals; wait an hour." },
      { fr: "Ne commencez pas de fer sans analyse : trop de fer est aussi nocif.", ar: "لا تبدأ الحديد دون تحليل، فالإفراط فيه ضار أيضاً.", en: "Don't start iron without a test: too much iron is also harmful." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste cette semaine ; un gynécologue si les règles sont très abondantes.", ar: "طبيبك العام هذا الأسبوع؛ وطبيب النساء إذا كانت الدورة غزيرة جداً.", en: "Your GP this week; a gynaecologist if periods are very heavy." },
    exams: [
      { fr: "Numération sanguine (hémoglobine) et ferritine.", ar: "تعداد الدم (الهيموغلوبين) والفيريتين.", en: "Blood count (haemoglobin) and ferritin." },
      { fr: "Vitamine B12 et folates si le fer est normal.", ar: "فيتامين ب12 والفولات إذا كان الحديد طبيعياً.", en: "Vitamin B12 and folate if iron is normal." },
      { fr: "Recherche de sang dans les selles ou coloscopie chez l'homme et après la ménopause.", ar: "البحث عن دم في البراز أو تنظير القولون عند الرجل وبعد سن اليأس.", en: "Stool blood test or colonoscopy in men and after the menopause." },
    ],
    questions: [
      { fr: "Suis-je anémique, et par manque de quoi ?", ar: "هل أعاني من فقر الدم، وبسبب نقص ماذا؟", en: "Am I anaemic, and from lack of what?" },
      { fr: "D'où vient la perte de fer ?", ar: "من أين يأتي فقدان الحديد؟", en: "Where is the iron loss coming from?" },
      { fr: "Combien de temps prendre le fer, et comment le tolérer ?", ar: "كم مدة تناول الحديد، وكيف أتحمله؟", en: "How long should I take iron, and how do I tolerate it?" },
    ],
    warning: {
      fr: "essoufflement au repos, palpitations, douleur dans la poitrine, malaise, selles noires ou sang dans les selles, ou pâleur brutale.",
      ar: "ضيق التنفس في الراحة، خفقان، ألم في الصدر، إغماء، براز أسود أو دم في البراز، أو شحوب مفاجئ.",
      en: "breathlessness at rest, palpitations, chest pain, fainting, black stools or blood in stools, or sudden paleness.",
    },
    sources: [AMELI_ANEMIE],
  },
  "apres-maladie": {
    summary: {
      fr: "Rester fatigué 2 à 4 semaines après une grippe, une Covid ou une infection sérieuse est normal : le corps récupère. Au-delà d'un mois, ou si la fatigue s'aggrave, un bilan est utile.",
      ar: "البقاء متعباً من أسبوعين إلى 4 أسابيع بعد الأنفلونزا أو كوفيد أو عدوى جدية أمر طبيعي، فالجسم يتعافى. بعد شهر، أو إذا ازداد التعب، يفيد إجراء فحص.",
      en: "Staying tired 2 to 4 weeks after flu, Covid or a serious infection is normal: the body is recovering. Beyond a month, or if the tiredness worsens, a check-up is useful.",
    },
    explanation: [
      { fr: "Après une infection, le corps a puisé dans ses réserves ; le sommeil et l'appétit mettent du temps à revenir à la normale.", ar: "بعد العدوى، يكون الجسم قد استنفد احتياطياته، ويحتاج النوم والشهية وقتاً للعودة إلى طبيعتهما.", en: "After an infection the body has used up its reserves; sleep and appetite take time to return to normal." },
      { fr: "Après la Covid, certaines personnes gardent plusieurs mois une fatigue, un essoufflement ou des troubles de concentration (Covid long), qui s'améliorent progressivement.", ar: "بعد كوفيد، يحتفظ بعض الأشخاص لأشهر بالتعب أو ضيق التنفس أو صعوبة التركيز (كوفيد طويل الأمد)، وتتحسن تدريجياً.", en: "After Covid, some people keep tiredness, breathlessness or concentration problems for months (long Covid), which improve gradually." },
      { fr: "Reprendre trop vite une activité intense retarde la récupération : augmentez progressivement.", ar: "العودة السريعة إلى نشاط مكثف تؤخر التعافي، فزد النشاط تدريجياً.", en: "Returning to intense activity too fast delays recovery: increase gradually." },
    ],
    meanwhile: [
      { fr: "Dormez autant que nécessaire, faites des siestes courtes (20 minutes).", ar: "نم بقدر ما تحتاج، وخذ قيلولات قصيرة (20 دقيقة).", en: "Sleep as much as needed, take short naps (20 minutes)." },
      { fr: "Mangez des protéines à chaque repas, des fruits et des légumes.", ar: "تناول البروتين في كل وجبة، مع الفواكه والخضر.", en: "Eat protein at every meal, plus fruit and vegetables." },
      { fr: "Reprenez la marche par 10 minutes et augmentez chaque semaine.", ar: "استأنف المشي بعشر دقائق وزد كل أسبوع.", en: "Resume walking with 10 minutes and increase each week." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste si la fatigue dépasse un mois ou s'accompagne d'essoufflement.", ar: "طبيبك العام إذا تجاوز التعب شهراً أو صاحبه ضيق التنفس.", en: "Your GP if tiredness lasts over a month or comes with breathlessness." },
    exams: [
      ...BILAN,
      { fr: "Radio des poumons ou électrocardiogramme si essoufflement persistant.", ar: "أشعة للرئتين أو تخطيط القلب عند استمرار ضيق التنفس.", en: "Chest X-ray or electrocardiogram if breathlessness persists." },
    ],
    questions: [
      { fr: "Ma fatigue est-elle encore normale pour cette infection ?", ar: "هل تعبي لا يزال طبيعياً بالنسبة لهذه العدوى؟", en: "Is my tiredness still normal for this infection?" },
      { fr: "Quand puis-je reprendre le sport et le travail ?", ar: "متى يمكنني العودة إلى الرياضة والعمل؟", en: "When can I go back to sport and work?" },
      { fr: "Faut-il un bilan sanguin ?", ar: "هل أحتاج فحص دم؟", en: "Do I need a blood test?" },
    ],
    warning: {
      fr: "fièvre qui revient, essoufflement, douleur dans la poitrine, jambe gonflée et douloureuse, ou fatigue qui s'aggrave au lieu de s'améliorer.",
      ar: "عودة الحمى، ضيق التنفس، ألم في الصدر، ساق منتفخة ومؤلمة، أو تعب يزداد بدل أن يتحسن.",
      en: "fever returning, breathlessness, chest pain, a swollen painful leg, or tiredness getting worse instead of better.",
    },
    sources: [AMELI_FATIGUE],
  },
};
