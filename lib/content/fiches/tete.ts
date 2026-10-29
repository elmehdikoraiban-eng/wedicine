import type { ThemeFiches } from "../types";

const AMELI_CEPHALEE = { label: "Ameli, Maux de tête", url: "https://www.ameli.fr/assure/sante/themes/maux-tete" };
const AMELI_MIGRAINE = { label: "Ameli, Migraine", url: "https://www.ameli.fr/assure/sante/themes/migraine" };
const OMS_CEPHALEES = { label: "OMS, Céphalées", url: "https://www.who.int/fr/news-room/fact-sheets/detail/headache-disorders" };

export const tete: ThemeFiches = {
  serre: {
    summary: {
      fr: "Un mal de tête qui serre comme un bandeau, des deux côtés, est une céphalée de tension, la forme la plus fréquente et la moins grave. Elle est liée au stress, à la fatigue, aux écrans ou à une mauvaise posture.",
      ar: "الصداع الضاغط كالعصابة من الجهتين هو صداع التوتر، الشكل الأكثر شيوعاً والأقل خطورة. يرتبط بالتوتر والتعب والشاشات أو وضعية الجسم السيئة.",
      en: "A headache that presses like a band on both sides is a tension headache, the most common and least serious kind. It is linked to stress, tiredness, screens or poor posture.",
    },
    explanation: [
      { fr: "La douleur est modérée, continue, sans nausées, et n'empêche pas de bouger. Elle dure de 30 minutes à quelques jours.", ar: "الألم متوسط ومستمر بدون غثيان ولا يمنع الحركة. يستمر من 30 دقيقة إلى بضعة أيام.", en: "The pain is moderate, steady, without nausea, and doesn't stop you moving. It lasts from 30 minutes to a few days." },
      { fr: "Elle vient souvent de la contraction des muscles du cou et du cuir chevelu, après une journée tendue ou un manque de sommeil.", ar: "ينتج غالباً عن تقلص عضلات الرقبة وفروة الرأس بعد يوم متوتر أو قلة النوم.", en: "It often comes from tight neck and scalp muscles after a tense day or lack of sleep." },
      { fr: "Prendre des antidouleurs plus de 10 jours par mois peut entretenir les maux de tête : c'est la céphalée par abus médicamenteux.", ar: "تناول المسكنات أكثر من 10 أيام في الشهر قد يديم الصداع، وهو ما يسمى صداع الإفراط في الأدوية.", en: "Taking painkillers more than 10 days a month can keep headaches going: this is medication-overuse headache." },
    ],
    meanwhile: [
      { fr: "Faites une pause des écrans, buvez un grand verre d'eau et mangez si vous avez sauté un repas.", ar: "خذ استراحة من الشاشات، واشرب كأساً كبيراً من الماء، وكُل إذا فوّت وجبة.", en: "Take a screen break, drink a big glass of water and eat if you skipped a meal." },
      { fr: "Chaleur ou massage doux sur la nuque et les tempes.", ar: "حرارة أو تدليك خفيف على الرقبة والصدغين.", en: "Warmth or a gentle massage on the neck and temples." },
      { fr: "Paracétamol ou ibuprofène occasionnellement, pas plus de 2 jours par semaine.", ar: "باراسيتامول أو إيبوبروفين أحياناً، لا أكثر من يومين في الأسبوع.", en: "Paracetamol or ibuprofen occasionally, no more than 2 days a week." },
      { fr: "Tenez un carnet : heure, durée, ce que vous faisiez, ce que vous avez pris.", ar: "احتفظ بدفتر: الوقت، المدة، ما كنت تفعله، ما تناولته.", en: "Keep a diary: time, length, what you were doing, what you took." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste si les maux de tête reviennent plus de 2 fois par semaine ou changent de forme.", ar: "طبيبك العام إذا تكرر الصداع أكثر من مرتين في الأسبوع أو تغيّر شكله.", en: "Your GP if headaches return more than twice a week or change in character." },
    exams: [
      { fr: "Examen neurologique et mesure de la tension en cabinet.", ar: "فحص عصبي وقياس الضغط في العيادة.", en: "Neurological exam and blood pressure check in the office." },
      { fr: "Pas de scanner ni d'IRM dans la céphalée de tension typique.", ar: "لا حاجة للسكانر أو الرنين في صداع التوتر النموذجي.", en: "No CT or MRI for a typical tension headache." },
      { fr: "Contrôle de la vue si vous travaillez beaucoup sur écran.", ar: "فحص النظر إذا كنت تعمل كثيراً على الشاشة.", en: "Eye check if you work a lot on screens." },
    ],
    questions: [
      { fr: "S'agit-il de céphalées de tension ou de migraines ?", ar: "هل هو صداع توتر أم شقيقة؟", en: "Are these tension headaches or migraines?" },
      { fr: "Est-ce que je prends trop d'antidouleurs ?", ar: "هل أتناول مسكنات أكثر من اللازم؟", en: "Am I taking too many painkillers?" },
      { fr: "Faut-il vérifier ma tension ou ma vue ?", ar: "هل يجب فحص ضغطي أو نظري؟", en: "Should I check my blood pressure or eyesight?" },
      { fr: "Quelles habitudes changer pour en avoir moins ?", ar: "ما العادات التي يجب تغييرها لتقليلها؟", en: "Which habits should I change to have fewer?" },
    ],
    warning: {
      fr: "mal de tête brutal et très violent, mal de tête avec fièvre et nuque raide, après un choc à la tête, avec trouble de la vue, de la parole ou faiblesse d'un côté, ou qui réveille la nuit et s'aggrave de jour en jour.",
      ar: "صداع مفاجئ وعنيف جداً، صداع مع حمى وتصلب الرقبة، بعد ضربة على الرأس، مع اضطراب في الرؤية أو الكلام أو ضعف في جهة، أو يوقظك ليلاً ويزداد يوماً بعد يوم.",
      en: "sudden very violent headache, headache with fever and stiff neck, after a head injury, with vision or speech problems or weakness on one side, or one that wakes you at night and gets worse day by day.",
    },
    sources: [AMELI_CEPHALEE, OMS_CEPHALEES],
  },
  migraine: {
    summary: {
      fr: "Un mal de tête d'un seul côté, qui tape au rythme du cœur, avec nausées et gêne à la lumière, c'est très probablement une migraine. Elle est pénible mais sans danger, et des traitements efficaces existent.",
      ar: "صداع في جهة واحدة ينبض مع دقات القلب، مع غثيان وانزعاج من الضوء، هو على الأرجح شقيقة. مزعجة لكنها غير خطيرة، وتوجد علاجات فعالة.",
      en: "A headache on one side, throbbing with the heartbeat, with nausea and sensitivity to light, is very likely a migraine. It is unpleasant but not dangerous, and effective treatments exist.",
    },
    explanation: [
      { fr: "La crise dure de 4 à 72 heures et oblige souvent à s'allonger dans le noir. Elle touche 3 femmes pour 1 homme.", ar: "تستمر النوبة من 4 إلى 72 ساعة وتجبر غالباً على الاستلقاء في الظلام. تصيب 3 نساء مقابل رجل واحد.", en: "An attack lasts 4 to 72 hours and often forces you to lie down in the dark. It affects 3 women for every man." },
      { fr: "Une personne sur 5 a des signes avant la crise (aura) : lumières, taches, fourmillements, qui durent moins d'une heure.", ar: "واحد من كل 5 أشخاص يشعر بعلامات قبل النوبة (هالة): أضواء، بقع، تنميل، تستمر أقل من ساعة.", en: "One person in 5 gets warning signs (aura) before the attack: lights, spots, tingling, lasting under an hour." },
      { fr: "Déclencheurs fréquents : manque ou excès de sommeil, repas sauté, règles, stress, certains aliments, chaleur, écrans.", ar: "المحفزات الشائعة: قلة النوم أو كثرته، تفويت الوجبات، الدورة الشهرية، التوتر، بعض الأطعمة، الحرارة، الشاشات.", en: "Common triggers: too little or too much sleep, skipped meals, periods, stress, some foods, heat, screens." },
      { fr: "Si les crises sont fréquentes (plus de 3 par mois), un traitement de fond quotidien peut les réduire de moitié.", ar: "إذا كانت النوبات متكررة (أكثر من 3 في الشهر)، يمكن لعلاج وقائي يومي أن يقللها إلى النصف.", en: "If attacks are frequent (more than 3 a month), a daily preventive treatment can halve them." },
    ],
    meanwhile: [
      { fr: "Prenez l'antidouleur dès le début de la crise, pas quand elle est installée.", ar: "تناول المسكن منذ بداية النوبة، لا بعد استقرارها.", en: "Take the painkiller at the very start of the attack, not once it has set in." },
      { fr: "Allongez-vous dans une pièce sombre et calme, posez du froid sur le front.", ar: "استلقِ في غرفة مظلمة وهادئة، وضع البرودة على الجبهة.", en: "Lie down in a dark, quiet room and put something cold on your forehead." },
      { fr: "Notez chaque crise et ce qui l'a précédée pour trouver vos déclencheurs.", ar: "سجّل كل نوبة وما سبقها لتجد محفزاتك.", en: "Note each attack and what came before it to find your triggers." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste pour confirmer le diagnostic et prescrire un traitement de crise adapté ; un neurologue si les crises restent fréquentes.", ar: "طبيبك العام لتأكيد التشخيص ووصف علاج مناسب للنوبة؛ وطبيب الأعصاب إذا بقيت النوبات متكررة.", en: "Your GP to confirm the diagnosis and prescribe a suitable attack treatment; a neurologist if attacks stay frequent." },
    exams: [
      { fr: "Aucun si la migraine est typique : le diagnostic se fait par les questions.", ar: "لا شيء إذا كانت الشقيقة نموذجية، فالتشخيص يتم بالأسئلة.", en: "None if the migraine is typical: diagnosis is made by questions." },
      { fr: "IRM seulement si la migraine change, commence après 50 ans ou a des signes inhabituels.", ar: "رنين مغناطيسي فقط إذا تغيّرت الشقيقة أو بدأت بعد 50 سنة أو كانت لها علامات غير معتادة.", en: "MRI only if the migraine changes, starts after 50 or has unusual signs." },
    ],
    questions: [
      { fr: "Quel traitement prendre dès le début de la crise ?", ar: "أي علاج آخذ منذ بداية النوبة؟", en: "Which treatment should I take at the start of an attack?" },
      { fr: "Ai-je besoin d'un traitement de fond ?", ar: "هل أحتاج علاجاً وقائياً؟", en: "Do I need a preventive treatment?" },
      { fr: "La pilule est-elle compatible avec mes migraines ?", ar: "هل حبوب منع الحمل متوافقة مع الشقيقة عندي؟", en: "Is the pill compatible with my migraines?" },
      { fr: "Quels déclencheurs dois-je éviter ?", ar: "ما المحفزات التي يجب أن أتجنبها؟", en: "Which triggers should I avoid?" },
    ],
    warning: {
      fr: "crise différente de d'habitude, brutale « en coup de tonnerre », aura qui dure plus d'une heure, faiblesse ou trouble de la parole qui persiste, fièvre avec nuque raide, ou première migraine après 50 ans.",
      ar: "نوبة مختلفة عن المعتاد، مفاجئة كالرعد، هالة تستمر أكثر من ساعة، ضعف أو اضطراب كلام يستمر، حمى مع تصلب الرقبة، أو أول شقيقة بعد 50 سنة.",
      en: "an attack unlike usual, sudden 'thunderclap', aura lasting over an hour, persistent weakness or speech trouble, fever with stiff neck, or a first migraine after 50.",
    },
    sources: [AMELI_MIGRAINE, OMS_CEPHALEES],
  },
  ecrans: {
    summary: {
      fr: "Un mal de tête après plusieurs heures d'écran vient de la fatigue des yeux et de la tension du cou. Ce n'est pas dangereux, et quelques réglages suffisent souvent à le faire disparaître.",
      ar: "الصداع بعد ساعات من الشاشة ناتج عن إجهاد العينين وتوتر الرقبة. ليس خطيراً، وبعض التعديلات تكفي غالباً لإزالته.",
      en: "A headache after hours of screen time comes from eye strain and neck tension. It is not dangerous, and a few adjustments are often enough to make it go away.",
    },
    explanation: [
      { fr: "Devant un écran, on cligne 3 fois moins des yeux et on fixe une distance courte pendant des heures : les yeux se fatiguent et deviennent secs.", ar: "أمام الشاشة، نرمش 3 مرات أقل وننظر إلى مسافة قصيرة لساعات، فتتعب العينان وتجفان.", en: "In front of a screen we blink 3 times less and focus at a short distance for hours: the eyes tire and dry out." },
      { fr: "La tête penchée vers un téléphone fait porter jusqu'à 25 kg à la nuque : les muscles se contractent et la douleur monte vers la tête.", ar: "إمالة الرأس نحو الهاتف تحمّل الرقبة ما يصل إلى 25 كغ، فتتقلص العضلات ويصعد الألم إلى الرأس.", en: "Bending the head toward a phone loads the neck with up to 25 kg: the muscles tighten and the pain rises to the head." },
      { fr: "Une correction de vue absente ou mal réglée est une cause fréquente, surtout après 40 ans.", ar: "غياب تصحيح النظر أو ضبطه الخاطئ سبب شائع، خاصة بعد 40 سنة.", en: "Missing or poorly adjusted glasses are a common cause, especially after 40." },
    ],
    meanwhile: [
      { fr: "Règle 20-20-20 : toutes les 20 minutes, regardez à 6 mètres pendant 20 secondes.", ar: "قاعدة 20-20-20: كل 20 دقيقة، انظر إلى مسافة 6 أمتار لمدة 20 ثانية.", en: "The 20-20-20 rule: every 20 minutes, look 6 metres away for 20 seconds." },
      { fr: "Placez le haut de l'écran au niveau des yeux, à une longueur de bras, et baissez la luminosité le soir.", ar: "ضع أعلى الشاشة في مستوى العينين، على بعد ذراع، وخفف السطوع مساءً.", en: "Put the top of the screen at eye level, an arm's length away, and dim it in the evening." },
      { fr: "Étirez la nuque et les épaules plusieurs fois par jour.", ar: "مدّد الرقبة والكتفين عدة مرات في اليوم.", en: "Stretch your neck and shoulders several times a day." },
    ],
    whichDoctor: { fr: "Un ophtalmologue pour contrôler la vue si ça persiste malgré les pauses ; votre généraliste si d'autres signes apparaissent.", ar: "طبيب العيون لفحص النظر إذا استمر رغم الاستراحات؛ وطبيبك العام إذا ظهرت علامات أخرى.", en: "An eye doctor to check your vision if it persists despite breaks; your GP if other signs appear." },
    exams: [
      { fr: "Contrôle de la vue chez l'ophtalmologue.", ar: "فحص النظر عند طبيب العيون.", en: "Eye check at the ophthalmologist." },
    ],
    questions: [
      { fr: "Ai-je besoin de lunettes ou d'une nouvelle correction ?", ar: "هل أحتاج نظارات أو تصحيحاً جديداً؟", en: "Do I need glasses or a new prescription?" },
      { fr: "Les verres filtrant la lumière bleue sont-ils utiles ?", ar: "هل العدسات المرشحة للضوء الأزرق مفيدة؟", en: "Are blue-light filtering lenses useful?" },
      { fr: "Comment aménager mon poste de travail ?", ar: "كيف أرتب مكان عملي؟", en: "How should I set up my workstation?" },
    ],
    warning: {
      fr: "vision double ou floue qui ne passe pas, perte de vue d'un œil, douleur forte dans l'œil avec œil rouge, ou mal de tête qui reste même sans écran.",
      ar: "رؤية مزدوجة أو ضبابية لا تزول، فقدان الرؤية في عين واحدة، ألم قوي في العين مع احمرارها، أو صداع يستمر حتى بدون شاشة.",
      en: "double or blurred vision that doesn't clear, loss of vision in one eye, severe eye pain with a red eye, or a headache that stays even without screens.",
    },
    sources: [AMELI_CEPHALEE],
  },
  matin: {
    summary: {
      fr: "Un mal de tête au réveil vient souvent d'un mauvais sommeil, de ronflements avec apnées, de grincements de dents, d'un excès de café ou d'alcool la veille. Il faut en parler au médecin s'il revient presque tous les matins.",
      ar: "الصداع عند الاستيقاظ يأتي غالباً من نوم سيئ، أو شخير مع انقطاع التنفس، أو صرير الأسنان، أو الإفراط في القهوة أو الكحول في الليلة السابقة. يجب إخبار الطبيب إذا تكرر كل صباح تقريباً.",
      en: "A headache on waking often comes from poor sleep, snoring with apnoeas, teeth grinding, or too much coffee or alcohol the day before. Tell the doctor if it comes back almost every morning.",
    },
    explanation: [
      { fr: "L'apnée du sommeil fait baisser l'oxygène la nuit : on se réveille avec la tête lourde, la bouche sèche et on somnole le jour.", ar: "انقطاع التنفس أثناء النوم يخفض الأكسجين ليلاً، فنستيقظ برأس ثقيل وفم جاف وننعس نهاراً.", en: "Sleep apnoea lowers oxygen at night: you wake with a heavy head, dry mouth and feel sleepy in the day." },
      { fr: "Serrer les dents la nuit (bruxisme) contracte les muscles des tempes et de la mâchoire.", ar: "الضغط على الأسنان ليلاً يقلص عضلات الصدغين والفك.", en: "Clenching the teeth at night (bruxism) tightens the temple and jaw muscles." },
      { fr: "Une tension artérielle très élevée peut aussi donner des maux de tête le matin.", ar: "ضغط الدم المرتفع جداً قد يسبب أيضاً صداعاً صباحياً.", en: "Very high blood pressure can also cause morning headaches." },
      { fr: "Un mal de tête quotidien au réveil, qui s'aggrave en quelques semaines avec des vomissements, doit être exploré sans tarder.", ar: "الصداع اليومي عند الاستيقاظ الذي يزداد خلال أسابيع مع قيء يجب استكشافه دون تأخير.", en: "A daily headache on waking that worsens over weeks with vomiting must be investigated without delay." },
    ],
    meanwhile: [
      { fr: "Couchez-vous à heure fixe, pas de café après 14 h, pas d'alcool le soir.", ar: "نم في وقت ثابت، لا قهوة بعد الثانية ظهراً، لا كحول في المساء.", en: "Go to bed at a set time, no coffee after 2 pm, no alcohol in the evening." },
      { fr: "Demandez à votre entourage si vous ronflez ou arrêtez de respirer la nuit.", ar: "اسأل من حولك إن كنت تشخر أو يتوقف تنفسك أثناء النوم.", en: "Ask those around you whether you snore or stop breathing at night." },
      { fr: "Mesurez votre tension le matin pendant 3 jours si vous avez un tensiomètre.", ar: "قس ضغطك صباحاً لمدة 3 أيام إذا كان لديك جهاز قياس.", en: "Measure your blood pressure in the morning for 3 days if you have a monitor." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste ; un dentiste si vous grincez des dents ; un centre du sommeil si une apnée est suspectée.", ar: "طبيبك العام؛ طبيب الأسنان إذا كنت تصرّ على أسنانك؛ ومركز النوم عند الاشتباه في انقطاع التنفس.", en: "Your GP; a dentist if you grind your teeth; a sleep centre if apnoea is suspected." },
    exams: [
      { fr: "Mesure de la tension.", ar: "قياس الضغط.", en: "Blood pressure measurement." },
      { fr: "Enregistrement du sommeil (polygraphie) si ronflements et somnolence.", ar: "تسجيل النوم إذا كان هناك شخير ونعاس.", en: "Sleep recording (polygraphy) if snoring and sleepiness." },
      { fr: "IRM si le mal de tête s'aggrave de jour en jour.", ar: "رنين مغناطيسي إذا ازداد الصداع يوماً بعد يوم.", en: "MRI if the headache worsens day by day." },
    ],
    questions: [
      { fr: "Puis-je avoir une apnée du sommeil ?", ar: "هل يمكن أن أعاني من انقطاع التنفس أثناء النوم؟", en: "Could I have sleep apnoea?" },
      { fr: "Ma tension est-elle en cause ?", ar: "هل ضغطي هو السبب؟", en: "Is my blood pressure the cause?" },
      { fr: "Une gouttière dentaire peut-elle aider ?", ar: "هل يمكن لواقي الأسنان الليلي أن يساعد؟", en: "Could a night dental guard help?" },
    ],
    warning: {
      fr: "mal de tête qui s'aggrave chaque jour avec vomissements, trouble de la vue, faiblesse d'un côté, confusion, ou tension au-dessus de 18/11.",
      ar: "صداع يزداد كل يوم مع قيء، اضطراب في الرؤية، ضعف في جهة، تشوش، أو ضغط فوق 18/11.",
      en: "headache worsening every day with vomiting, vision problems, weakness on one side, confusion, or blood pressure above 180/110.",
    },
    sources: [AMELI_CEPHALEE],
  },
  vertiges: {
    summary: {
      fr: "Mal de tête et vertiges ensemble viennent souvent d'une migraine, d'une baisse de tension, d'un manque de sommeil ou d'un problème de l'oreille interne. Ce n'est le plus souvent pas grave, sauf si les vertiges s'accompagnent de troubles de la parole ou de la force.",
      ar: "الصداع مع الدوخة يأتيان غالباً من شقيقة أو انخفاض الضغط أو قلة النوم أو مشكلة في الأذن الداخلية. ليس خطيراً في الغالب، إلا إذا صاحبت الدوخة اضطرابات في الكلام أو القوة.",
      en: "Headache and dizziness together often come from migraine, low blood pressure, lack of sleep or an inner ear problem. It is usually not serious, unless dizziness comes with speech or strength problems.",
    },
    explanation: [
      { fr: "Il faut distinguer le vrai vertige (tout tourne) de la sensation de tête qui flotte ou de malaise en se levant.", ar: "يجب التمييز بين الدوار الحقيقي (كل شيء يدور) والشعور برأس عائم أو الدوخة عند الوقوف.", en: "Distinguish true vertigo (everything spins) from a floating head or feeling faint when standing." },
      { fr: "La migraine vestibulaire donne des vertiges avec ou sans mal de tête, souvent chez des personnes déjà migraineuses.", ar: "الشقيقة الدهليزية تسبب دوخة مع أو بدون صداع، غالباً عند من يعانون أصلاً من الشقيقة.", en: "Vestibular migraine causes dizziness with or without headache, often in people who already have migraines." },
      { fr: "Un vertige rotatoire bref en tournant la tête dans le lit est typique d'un cristal déplacé dans l'oreille (VPPB), bénin et traité par une manœuvre.", ar: "الدوار القصير عند تدوير الرأس في السرير نموذجي لبلورة منزاحة في الأذن، وهو حميد ويُعالج بمناورة بسيطة.", en: "Brief spinning when turning the head in bed is typical of a displaced ear crystal (BPPV), benign and treated with a manoeuvre." },
    ],
    meanwhile: [
      { fr: "Asseyez-vous ou allongez-vous dès que le vertige arrive, ne conduisez pas.", ar: "اجلس أو استلقِ فور بدء الدوخة، ولا تقد السيارة.", en: "Sit or lie down as soon as the dizziness comes, and don't drive." },
      { fr: "Buvez de l'eau et mangez régulièrement, levez-vous lentement.", ar: "اشرب الماء وكُل بانتظام، وانهض ببطء.", en: "Drink water and eat regularly, and stand up slowly." },
      { fr: "Notez si le vertige tourne, combien de temps il dure et ce qui le déclenche.", ar: "سجّل إن كانت الدوخة دوّارة، وكم تستمر، وما الذي يسببها.", en: "Note whether the dizziness spins, how long it lasts and what triggers it." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste ; un ORL pour un vertige rotatoire qui se répète.", ar: "طبيبك العام؛ وطبيب الأنف والأذن والحنجرة للدوار الدوّار المتكرر.", en: "Your GP; an ENT for repeated spinning vertigo." },
    exams: [
      { fr: "Tension couché et debout, examen de l'équilibre et des yeux.", ar: "قياس الضغط مستلقياً وواقفاً، وفحص التوازن والعينين.", en: "Blood pressure lying and standing, balance and eye examination." },
      { fr: "Prise de sang (anémie, glycémie).", ar: "تحليل دم (فقر الدم، السكر).", en: "Blood test (anaemia, blood sugar)." },
      { fr: "IRM en urgence si signes neurologiques.", ar: "رنين مغناطيسي مستعجل إذا كانت هناك علامات عصبية.", en: "Urgent MRI if neurological signs." },
    ],
    questions: [
      { fr: "Mes vertiges viennent-ils de l'oreille, de la tension ou d'une migraine ?", ar: "هل دوختي من الأذن أم الضغط أم الشقيقة؟", en: "Does my dizziness come from the ear, blood pressure or migraine?" },
      { fr: "Puis-je conduire ?", ar: "هل يمكنني القيادة؟", en: "Can I drive?" },
      { fr: "Une manœuvre de repositionnement peut-elle m'aider ?", ar: "هل يمكن لمناورة إعادة التموضع مساعدتي؟", en: "Could a repositioning manoeuvre help me?" },
    ],
    warning: {
      fr: "vertige brutal avec trouble de la parole, vision double, faiblesse ou engourdissement d'un côté, impossibilité de marcher droit, mal de tête violent, ou surdité brutale d'une oreille.",
      ar: "دوخة مفاجئة مع اضطراب الكلام، رؤية مزدوجة، ضعف أو خدر في جهة، عدم القدرة على المشي باستقامة، صداع عنيف، أو صمم مفاجئ في أذن.",
      en: "sudden dizziness with speech trouble, double vision, weakness or numbness on one side, unable to walk straight, violent headache, or sudden deafness in one ear.",
    },
    sources: [AMELI_MIGRAINE, { label: "Ameli, Vertiges", url: "https://www.ameli.fr/assure/sante/themes/vertiges" }],
  },
};
