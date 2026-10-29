import type { ThemeFiches } from "../types";

const AMELI_LOMBALGIE = { label: "Ameli, Lombalgie", url: "https://www.ameli.fr/assure/sante/themes/lombalgie-aigue" };
const AMELI_CERVICALGIE = { label: "Ameli, Cervicalgie", url: "https://www.ameli.fr/assure/sante/themes/cervicalgie" };
const AMELI_SCIATIQUE = { label: "Ameli, Sciatique", url: "https://www.ameli.fr/assure/sante/themes/sciatique" };

const RED_DOS = {
  fr: "perte de force dans une jambe, engourdissement entre les cuisses, difficulté à uriner ou à retenir les selles, fièvre avec douleur du dos, douleur après une chute, perte de poids, ou douleur qui réveille la nuit et ne dépend pas des mouvements.",
  ar: "فقدان القوة في ساق، خدر بين الفخذين، صعوبة في التبول أو التحكم في البراز، حمى مع ألم الظهر، ألم بعد سقوط، فقدان الوزن، أو ألم يوقظك ليلاً ولا يتعلق بالحركة.",
  en: "loss of strength in a leg, numbness between the thighs, trouble urinating or controlling stools, fever with back pain, pain after a fall, weight loss, or pain that wakes you at night and doesn't depend on movement.",
};

export const dos: ThemeFiches = {
  lombaires: {
    summary: {
      fr: "Une douleur dans le bas du dos (lumbago) est l'un des motifs de consultation les plus fréquents. Dans 9 cas sur 10, elle est mécanique, sans gravité, et s'améliore en 2 à 6 semaines en restant actif. Le repos au lit retarde la guérison.",
      ar: "ألم أسفل الظهر من أكثر أسباب الاستشارة شيوعاً. في 9 حالات من 10، يكون ميكانيكياً وغير خطير ويتحسن خلال أسبوعين إلى 6 أسابيع مع البقاء نشطاً. الراحة في السرير تؤخر الشفاء.",
      en: "Lower back pain is one of the most common reasons to see a doctor. In 9 cases out of 10 it is mechanical, harmless, and improves in 2 to 6 weeks if you stay active. Bed rest delays recovery.",
    },
    explanation: [
      { fr: "Muscles, ligaments et disques du bas du dos sont sollicités à chaque mouvement. Un faux mouvement, un port de charge ou une longue position assise peuvent les irriter.", ar: "عضلات وأربطة وأقراص أسفل الظهر تعمل مع كل حركة. حركة خاطئة أو حمل ثقيل أو جلوس طويل قد يهيجها.", en: "Muscles, ligaments and discs of the lower back work with every movement. A wrong move, lifting, or sitting for long can irritate them." },
      { fr: "La radio ou l'IRM ne sont pas utiles dans un lumbago simple : elles montrent souvent une usure normale qui n'explique pas la douleur et inquiète inutilement.", ar: "الأشعة أو الرنين غير مفيدين في ألم الظهر البسيط، فهما يظهران غالباً تآكلاً طبيعياً لا يفسر الألم ويقلق دون داعٍ.", en: "X-rays or MRI are not useful for simple back pain: they often show normal wear that doesn't explain the pain and worries you needlessly." },
      { fr: "Bouger est le traitement : marcher, reprendre les activités habituelles, puis renforcer le dos et les abdominaux pour éviter les récidives.", ar: "الحركة هي العلاج: المشي، واستئناف الأنشطة المعتادة، ثم تقوية الظهر والبطن لتجنب التكرار.", en: "Moving is the treatment: walk, resume usual activities, then strengthen back and abdominal muscles to prevent recurrences." },
    ],
    meanwhile: [
      { fr: "Continuez à bouger, marchez, évitez de rester couché plus de quelques heures.", ar: "واصل الحركة، امشِ، وتجنب البقاء مستلقياً أكثر من بضع ساعات.", en: "Keep moving, walk, avoid lying down for more than a few hours." },
      { fr: "Chaleur sur le bas du dos (bouillotte, douche chaude) pour détendre les muscles.", ar: "حرارة على أسفل الظهر (قربة ماء ساخن، دش ساخن) لإرخاء العضلات.", en: "Heat on the lower back (hot water bottle, warm shower) to relax the muscles." },
      { fr: "Paracétamol ou ibuprofène quelques jours si besoin, aux doses de la boîte.", ar: "باراسيتامول أو إيبوبروفين لبضعة أيام عند الحاجة، بجرعات العلبة.", en: "Paracetamol or ibuprofen for a few days if needed, at the doses on the box." },
      { fr: "Pour soulever une charge, pliez les genoux et gardez le dos droit, la charge contre vous.", ar: "لرفع حمل، اثنِ الركبتين وأبقِ الظهر مستقيماً والحمل قريباً منك.", en: "To lift, bend your knees, keep your back straight and the load close to you." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste si la douleur dure plus de 2 semaines ou descend dans la jambe ; un kinésithérapeute pour les exercices.", ar: "طبيبك العام إذا استمر الألم أكثر من أسبوعين أو نزل إلى الساق؛ وأخصائي العلاج الطبيعي للتمارين.", en: "Your GP if the pain lasts more than 2 weeks or goes down the leg; a physiotherapist for exercises." },
    exams: [
      { fr: "Aucun dans un lumbago simple de moins de 6 semaines.", ar: "لا شيء في ألم الظهر البسيط لأقل من 6 أسابيع.", en: "None for simple back pain under 6 weeks." },
      { fr: "Radio ou IRM seulement si signes d'alerte ou douleur de plus de 6 semaines.", ar: "أشعة أو رنين فقط عند علامات الإنذار أو ألم يتجاوز 6 أسابيع.", en: "X-ray or MRI only if warning signs or pain over 6 weeks." },
    ],
    questions: [
      { fr: "Ma douleur est-elle mécanique ou faut-il chercher autre chose ?", ar: "هل ألمي ميكانيكي أم يجب البحث عن سبب آخر؟", en: "Is my pain mechanical or should we look for something else?" },
      { fr: "Quels exercices puis-je faire dès maintenant ?", ar: "ما التمارين التي يمكنني القيام بها من الآن؟", en: "Which exercises can I do right now?" },
      { fr: "Une kinésithérapie est-elle utile ?", ar: "هل العلاج الطبيعي مفيد؟", en: "Is physiotherapy useful?" },
      { fr: "Comment éviter que ça revienne ?", ar: "كيف أتجنب تكراره؟", en: "How can I stop it coming back?" },
    ],
    warning: RED_DOS,
    sources: [AMELI_LOMBALGIE],
  },
  cervicales: {
    summary: {
      fr: "Une douleur au cou et à la nuque vient le plus souvent d'une contracture musculaire : mauvaise position devant l'écran ou le téléphone, oreiller inadapté, stress, courant d'air. Elle passe en quelques jours à 2 semaines avec de la chaleur et du mouvement.",
      ar: "ألم العنق والرقبة ينتج غالباً عن تقلص عضلي: وضعية سيئة أمام الشاشة أو الهاتف، وسادة غير مناسبة، توتر، تيار هواء. يزول خلال أيام إلى أسبوعين مع الحرارة والحركة.",
      en: "Neck pain most often comes from a muscle spasm: poor posture at the screen or phone, an unsuitable pillow, stress, a draught. It clears in a few days to 2 weeks with heat and movement.",
    },
    explanation: [
      { fr: "Le torticolis du matin, où on ne peut plus tourner la tête, est spectaculaire mais bénin : il cède en 2 à 3 jours.", ar: "تصلب الرقبة الصباحي الذي يمنع تدوير الرأس مثير للقلق لكنه حميد، ويزول خلال يومين أو ثلاثة.", en: "The morning stiff neck where you can't turn your head is dramatic but harmless: it eases in 2 to 3 days." },
      { fr: "Une douleur qui descend dans le bras avec des fourmillements dans les doigts peut venir d'un nerf comprimé au niveau du cou (névralgie cervico-brachiale).", ar: "الألم الذي ينزل إلى الذراع مع تنميل في الأصابع قد ينتج عن عصب مضغوط في العنق.", en: "Pain going down the arm with tingling in the fingers may come from a nerve pinched in the neck." },
      { fr: "Après 50 ans, l'arthrose cervicale est fréquente et souvent sans douleur : la radio ne change pas le traitement.", ar: "بعد 50 سنة، فصال العنق شائع وغالباً بدون ألم، والأشعة لا تغير العلاج.", en: "After 50, neck arthritis is common and often painless: an X-ray doesn't change the treatment." },
    ],
    meanwhile: [
      { fr: "Chaleur sur la nuque, mouvements doux de la tête dans toutes les directions plusieurs fois par jour.", ar: "حرارة على الرقبة، وحركات لطيفة للرأس في كل الاتجاهات عدة مرات في اليوم.", en: "Heat on the neck, gentle head movements in all directions several times a day." },
      { fr: "Écran à hauteur des yeux, téléphone tenu devant soi plutôt que la tête penchée.", ar: "الشاشة في مستوى العينين، والهاتف أمامك بدل إمالة الرأس.", en: "Screen at eye level, phone held in front rather than head bent down." },
      { fr: "Pas de collier cervical au-delà de 2 jours : il affaiblit les muscles.", ar: "لا طوق للرقبة لأكثر من يومين لأنه يضعف العضلات.", en: "No neck collar beyond 2 days: it weakens the muscles." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste si ça dure plus de 2 semaines, si la douleur descend dans le bras, ou après un accident.", ar: "طبيبك العام إذا استمر أكثر من أسبوعين، أو نزل الألم إلى الذراع، أو بعد حادث.", en: "Your GP if it lasts more than 2 weeks, if pain goes down the arm, or after an accident." },
    exams: [
      { fr: "Aucun dans la cervicalgie simple.", ar: "لا شيء في ألم الرقبة البسيط.", en: "None for simple neck pain." },
      { fr: "Radio ou IRM si douleur du bras, faiblesse ou accident.", ar: "أشعة أو رنين عند ألم الذراع أو الضعف أو الحادث.", en: "X-ray or MRI if arm pain, weakness or accident." },
    ],
    questions: [
      { fr: "D'où vient ma douleur : muscle, articulation ou nerf ?", ar: "من أين يأتي ألمي: عضلة أم مفصل أم عصب؟", en: "Where does my pain come from: muscle, joint or nerve?" },
      { fr: "Quels exercices et quelle posture au travail ?", ar: "ما التمارين والوضعية المناسبة في العمل؟", en: "Which exercises and what posture at work?" },
      { fr: "Quel oreiller choisir ?", ar: "أي وسادة أختار؟", en: "Which pillow should I choose?" },
    ],
    warning: {
      fr: "douleur du cou après un accident ou une chute, faiblesse ou engourdissement d'un bras ou des jambes, fièvre avec nuque raide, mal de tête brutal, ou trouble de l'équilibre.",
      ar: "ألم العنق بعد حادث أو سقوط، ضعف أو خدر في ذراع أو في الساقين، حمى مع تصلب الرقبة، صداع مفاجئ، أو اضطراب في التوازن.",
      en: "neck pain after an accident or fall, weakness or numbness in an arm or the legs, fever with stiff neck, sudden headache, or loss of balance.",
    },
    sources: [AMELI_CERVICALGIE],
  },
  sciatique: {
    summary: {
      fr: "Une douleur qui part du bas du dos et descend derrière la cuisse jusqu'au mollet ou au pied est une sciatique : un nerf comprimé, souvent par un disque. C'est douloureux mais ça guérit sans opération dans 9 cas sur 10, en 4 à 8 semaines.",
      ar: "الألم الذي يبدأ من أسفل الظهر وينزل خلف الفخذ حتى الساق أو القدم هو عرق النسا: عصب مضغوط، غالباً بسبب قرص. مؤلم لكنه يشفى دون جراحة في 9 حالات من 10، خلال 4 إلى 8 أسابيع.",
      en: "Pain starting in the lower back and running down the back of the thigh to the calf or foot is sciatica: a nerve pinched, often by a disc. It is painful but heals without surgery in 9 cases out of 10, within 4 to 8 weeks.",
    },
    explanation: [
      { fr: "Le nerf sciatique part du bas du dos ; une hernie discale ou un rétrécissement du canal peut l'irriter. La douleur suit le trajet du nerf, souvent d'un seul côté.", ar: "يبدأ العصب الوركي من أسفل الظهر، وقد يهيجه انزلاق قرص أو ضيق القناة. يتبع الألم مسار العصب، غالباً في جهة واحدة.", en: "The sciatic nerve starts in the lower back; a disc herniation or a narrowed canal can irritate it. The pain follows the nerve's path, usually on one side." },
      { fr: "Des fourmillements ou un engourdissement du pied sont fréquents et non inquiétants ; une perte de force ou des troubles pour uriner le sont.", ar: "التنميل أو خدر القدم شائع وغير مقلق، أما فقدان القوة أو اضطراب التبول فمقلقان.", en: "Tingling or numbness of the foot is common and not worrying; loss of strength or trouble urinating is." },
      { fr: "L'opération n'est envisagée qu'en cas de perte de force, de douleur insupportable malgré le traitement, ou après 2 à 3 mois sans amélioration.", ar: "لا تُطرح الجراحة إلا عند فقدان القوة، أو ألم لا يُحتمل رغم العلاج، أو بعد شهرين أو ثلاثة بدون تحسن.", en: "Surgery is only considered with loss of strength, unbearable pain despite treatment, or after 2 to 3 months without improvement." },
    ],
    meanwhile: [
      { fr: "Bougez autant que la douleur le permet, marchez, évitez le lit prolongé.", ar: "تحرك بقدر ما يسمح الألم، امشِ، وتجنب البقاء في السرير طويلاً.", en: "Move as much as the pain allows, walk, avoid prolonged bed rest." },
      { fr: "Évitez de porter des charges et les positions assises longues ; changez de position souvent.", ar: "تجنب حمل الأثقال والجلوس الطويل، وغيّر وضعيتك كثيراً.", en: "Avoid carrying loads and long sitting; change position often." },
      { fr: "Paracétamol et anti-inflammatoire (ibuprofène) quelques jours, sauf contre-indication.", ar: "باراسيتامول ومضاد التهاب (إيبوبروفين) لبضعة أيام، ما لم يكن هناك مانع.", en: "Paracetamol and an anti-inflammatory (ibuprofen) for a few days, unless contraindicated." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste dans la semaine ; le jour même si perte de force ou troubles urinaires.", ar: "طبيبك العام خلال الأسبوع؛ وفي نفس اليوم عند فقدان القوة أو اضطرابات التبول.", en: "Your GP within the week; the same day if loss of strength or urinary trouble." },
    exams: [
      { fr: "Examen clinique de la force, des réflexes et de la sensibilité.", ar: "فحص سريري للقوة والمنعكسات والإحساس.", en: "Clinical exam of strength, reflexes and sensation." },
      { fr: "IRM seulement si signes de gravité ou absence d'amélioration après 6 à 8 semaines.", ar: "رنين مغناطيسي فقط عند علامات الخطورة أو غياب التحسن بعد 6 إلى 8 أسابيع.", en: "MRI only if serious signs or no improvement after 6 to 8 weeks." },
    ],
    questions: [
      { fr: "Est-ce une sciatique, et à quel niveau ?", ar: "هل هو عرق النسا، وفي أي مستوى؟", en: "Is it sciatica, and at which level?" },
      { fr: "Ai-je besoin d'une IRM ?", ar: "هل أحتاج رنيناً مغناطيسياً؟", en: "Do I need an MRI?" },
      { fr: "Quels mouvements éviter et lesquels faire ?", ar: "ما الحركات التي أتجنبها وما التي أقوم بها؟", en: "Which movements to avoid and which to do?" },
      { fr: "Quand envisager une infiltration ou une opération ?", ar: "متى نفكر في الحقن أو الجراحة؟", en: "When to consider an injection or surgery?" },
    ],
    warning: RED_DOS,
    sources: [AMELI_SCIATIQUE],
  },
  effort: {
    summary: {
      fr: "Un mal de dos après un effort (port de charge, sport, jardinage, déménagement) est une entorse des muscles ou ligaments du dos. C'est douloureux les premiers jours puis ça s'améliore vite en restant actif.",
      ar: "ألم الظهر بعد مجهود (حمل أثقال، رياضة، بستنة، نقل أثاث) هو التواء في عضلات الظهر أو أربطته. مؤلم في الأيام الأولى ثم يتحسن بسرعة مع البقاء نشطاً.",
      en: "Back pain after an effort (lifting, sport, gardening, moving house) is a strain of the back muscles or ligaments. It hurts the first few days then improves quickly if you stay active.",
    },
    explanation: [
      { fr: "La douleur est maximale dans les 48 heures puis diminue chaque jour. Elle dure rarement plus de 2 semaines.", ar: "يبلغ الألم ذروته خلال 48 ساعة ثم يقل كل يوم، ونادراً ما يستمر أكثر من أسبوعين.", en: "Pain peaks within 48 hours then decreases daily. It rarely lasts more than 2 weeks." },
      { fr: "Une douleur qui apparaît après une chute ou un choc, surtout après 60 ans ou en cas d'ostéoporose, peut être un tassement de vertèbre : une radio est alors utile.", ar: "الألم الذي يظهر بعد سقوط أو صدمة، خاصة بعد 60 سنة أو مع هشاشة العظام، قد يكون انضغاط فقرة، وهنا تفيد الأشعة.", en: "Pain appearing after a fall or impact, especially after 60 or with osteoporosis, may be a vertebral compression: an X-ray is then useful." },
      { fr: "Un dos musclé et des abdominaux toniques sont la meilleure prévention : renforcement 2 à 3 fois par semaine.", ar: "الظهر القوي وعضلات البطن المشدودة هما أفضل وقاية: تقوية مرتين أو ثلاثاً في الأسبوع.", en: "A strong back and toned abdominals are the best prevention: strengthening 2 to 3 times a week." },
    ],
    meanwhile: [
      { fr: "Les 2 premiers jours : chaleur, antidouleur, marche douce. Pas de repos au lit prolongé.", ar: "في اليومين الأولين: حرارة، مسكن، مشي خفيف. لا راحة طويلة في السرير.", en: "The first 2 days: heat, painkiller, gentle walking. No prolonged bed rest." },
      { fr: "Reprenez progressivement les activités, sans forcer sur la douleur vive.", ar: "استأنف الأنشطة تدريجياً دون إجهاد عند الألم الحاد.", en: "Resume activities gradually, without pushing through sharp pain." },
      { fr: "Pour les prochaines charges : genoux fléchis, dos droit, charge près du corps, pas de torsion.", ar: "في المرات القادمة: الركبتان مثنيتان، الظهر مستقيم، الحمل قريب من الجسم، دون التواء.", en: "For future lifting: knees bent, back straight, load close to the body, no twisting." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste si la douleur ne diminue pas après une semaine, ou tout de suite après une chute ou si vous avez plus de 60 ans.", ar: "طبيبك العام إذا لم يقل الألم بعد أسبوع، أو فوراً بعد سقوط أو إذا تجاوزت 60 سنة.", en: "Your GP if the pain doesn't ease after a week, or right away after a fall or if over 60." },
    exams: [
      { fr: "Aucun si l'effort est le seul facteur et que ça s'améliore.", ar: "لا شيء إذا كان المجهود هو العامل الوحيد والحالة تتحسن.", en: "None if the effort is the only factor and it is improving." },
      { fr: "Radio en cas de chute, de plus de 60 ans ou d'ostéoporose.", ar: "أشعة في حالة السقوط أو تجاوز 60 سنة أو هشاشة العظام.", en: "X-ray in case of a fall, over 60 or osteoporosis." },
    ],
    questions: [
      { fr: "Puis-je continuer le sport ou le travail ?", ar: "هل يمكنني مواصلة الرياضة أو العمل؟", en: "Can I continue sport or work?" },
      { fr: "Quels exercices pour renforcer mon dos ?", ar: "ما التمارين لتقوية ظهري؟", en: "Which exercises to strengthen my back?" },
      { fr: "Dois-je faire une radio ?", ar: "هل أحتاج أشعة؟", en: "Do I need an X-ray?" },
    ],
    warning: RED_DOS,
    sources: [AMELI_LOMBALGIE],
  },
};
