import type { ThemeFiches } from "../types";

const AMELI_INSOMNIE = { label: "Ameli, Insomnie de l'adulte", url: "https://www.ameli.fr/assure/sante/themes/insomnie-adulte" };
const AMELI_APNEE = { label: "Ameli, Apnée du sommeil", url: "https://www.ameli.fr/assure/sante/themes/apnee-sommeil" };
const OMS_SANTE_MENTALE = { label: "OMS, Santé mentale", url: "https://www.who.int/fr/news-room/fact-sheets/detail/mental-health-strengthening-our-response" };

const RED_SOMMEIL = {
  fr: "idées noires ou envie de vous faire du mal, pauses respiratoires la nuit constatées par un proche, endormissement au volant, ou insomnie avec grande agitation et discours accéléré.",
  ar: "أفكار سوداوية أو رغبة في إيذاء النفس، توقفات في التنفس ليلاً يلاحظها أحد المقربين، النوم أثناء القيادة، أو أرق مع هياج شديد وكلام متسارع.",
  en: "dark thoughts or wanting to harm yourself, pauses in breathing at night noticed by someone else, falling asleep while driving, or insomnia with great agitation and racing speech.",
};

const HYGIENE = [
  { fr: "Heure de lever fixe tous les jours, même le week-end : c'est le réglage le plus efficace de l'horloge interne.", ar: "وقت استيقاظ ثابت كل يوم حتى في عطلة نهاية الأسبوع، فهو أفضل ضبط للساعة البيولوجية.", en: "Same wake-up time every day, weekends included: it is the most effective way to set your body clock." },
  { fr: "Pas d'écran au lit ; lumière tamisée la dernière heure avant de dormir.", ar: "لا شاشات في السرير، وإضاءة خافتة في الساعة الأخيرة قبل النوم.", en: "No screens in bed; dim the lights for the last hour before sleep." },
  { fr: "Café, thé et boissons énergisantes avant 14 h seulement. Pas de repas lourd ni de sport intense le soir.", ar: "القهوة والشاي ومشروبات الطاقة قبل الثانية ظهراً فقط. لا وجبة ثقيلة ولا رياضة شديدة في المساء.", en: "Coffee, tea and energy drinks before 2 pm only. No heavy meal or intense sport in the evening." },
  { fr: "Si vous ne dormez pas après 20 minutes, levez-vous, faites une activité calme, et recouchez-vous quand le sommeil revient.", ar: "إذا لم تنم بعد 20 دقيقة، انهض ومارس نشاطاً هادئاً، ثم عد إلى السرير عندما يعود النعاس.", en: "If you aren't asleep after 20 minutes, get up, do something calm, and go back to bed when sleepiness returns." },
];

export const sommeil: ThemeFiches = {
  endormissement: {
    summary: {
      fr: "Mettre plus de 30 minutes à s'endormir plusieurs soirs par semaine est une insomnie d'endormissement. Elle est très fréquente et presque toujours liée au stress, aux écrans, à la caféine ou à des horaires irréguliers. Elle se corrige surtout par les habitudes, rarement par des médicaments.",
      ar: "استغراق أكثر من 30 دقيقة للنوم عدة ليالٍ في الأسبوع هو أرق في بداية النوم. هو شائع جداً ومرتبط غالباً بالتوتر أو الشاشات أو الكافيين أو مواعيد النوم غير المنتظمة. يُصحَّح أساساً بالعادات ونادراً بالأدوية.",
      en: "Taking more than 30 minutes to fall asleep several nights a week is sleep-onset insomnia. It is very common and almost always linked to stress, screens, caffeine or irregular hours. It is corrected mainly by habits, rarely by medication.",
    },
    explanation: [
      { fr: "Le sommeil vient quand deux conditions sont réunies : une pression de sommeil suffisante (être resté éveillé assez longtemps) et une horloge interne qui dit « c'est la nuit ». Les siestes longues, le lever tardif et la lumière des écrans dérèglent les deux.", ar: "يأتي النوم عند توفر شرطين: ضغط نوم كافٍ (البقاء مستيقظاً مدة كافية) وساعة بيولوجية تقول «إنه الليل». القيلولة الطويلة والاستيقاظ المتأخر وضوء الشاشات يخلّان بالاثنين.", en: "Sleep comes when two conditions are met: enough sleep pressure (having been awake long enough) and a body clock that says \"it's night\". Long naps, late rising and screen light upset both." },
      { fr: "Le cercle vicieux de l'insomnie : on craint de ne pas dormir, on se couche tôt « pour récupérer », on tourne dans le lit, et le lit devient associé à l'éveil. Le traitement de référence (thérapie cognitive et comportementale) casse ce cercle en quelques semaines.", ar: "الحلقة المفرغة للأرق: تخشى ألا تنام، فتنام مبكراً «للتعويض»، فتتقلب في السرير، فيرتبط السرير بالاستيقاظ. العلاج المرجعي (العلاج السلوكي المعرفي) يكسر هذه الحلقة في بضعة أسابيع.", en: "The vicious circle of insomnia: you fear not sleeping, go to bed early \"to catch up\", toss and turn, and the bed becomes linked with being awake. The reference treatment (cognitive behavioural therapy) breaks this circle in a few weeks." },
      { fr: "Les somnifères aident quelques nuits en période de crise mais perdent leur effet en 2 à 4 semaines et créent une dépendance. Ils ne sont jamais une solution de fond.", ar: "المنومات تساعد لبضع ليالٍ في فترة الأزمة لكنها تفقد تأثيرها خلال أسبوعين إلى 4 أسابيع وتسبب الاعتماد. ليست حلاً جذرياً أبداً.", en: "Sleeping pills help for a few nights in a crisis but lose their effect in 2 to 4 weeks and cause dependence. They are never a long-term solution." },
    ],
    meanwhile: HYGIENE,
    whichDoctor: { fr: "Votre médecin généraliste si cela dure plus de 3 semaines ou retentit sur vos journées ; un psychologue formé à la thérapie du sommeil si le stress est au premier plan.", ar: "طبيبك العام إذا استمر الأمر أكثر من 3 أسابيع أو أثّر على أيامك؛ وأخصائي نفسي مدرَّب على علاج النوم إذا كان التوتر في المقدمة.", en: "Your GP if it lasts more than 3 weeks or affects your days; a psychologist trained in sleep therapy if stress is the main factor." },
    exams: [
      { fr: "Aucun examen en général : l'interrogatoire et un agenda du sommeil sur 2 semaines suffisent.", ar: "لا فحص عادةً، فالاستجواب ومذكرة نوم لمدة أسبوعين كافيان.", en: "Usually no test: a consultation and a 2-week sleep diary are enough." },
      { fr: "Bilan sanguin (thyroïde, fer) si fatigue ou autres signes associés.", ar: "تحليل دم (الغدة الدرقية، الحديد) عند وجود تعب أو علامات أخرى.", en: "Blood tests (thyroid, iron) if tiredness or other signs." },
    ],
    questions: [
      { fr: "Mon insomnie est-elle liée au stress, à mes habitudes ou à autre chose ?", ar: "هل أرقي مرتبط بالتوتر أم بعاداتي أم بشيء آخر؟", en: "Is my insomnia linked to stress, my habits or something else?" },
      { fr: "Puis-je bénéficier d'une thérapie comportementale du sommeil ?", ar: "هل يمكنني الاستفادة من علاج سلوكي للنوم؟", en: "Can I benefit from behavioural sleep therapy?" },
      { fr: "Quels risques si je prends des somnifères ?", ar: "ما مخاطر تناول المنومات؟", en: "What are the risks if I take sleeping pills?" },
      { fr: "Combien d'heures de sommeil me faut-il vraiment ?", ar: "كم ساعة نوم أحتاج فعلاً؟", en: "How many hours of sleep do I really need?" },
    ],
    warning: RED_SOMMEIL,
    sources: [AMELI_INSOMNIE],
  },
  reveils: {
    summary: {
      fr: "Se réveiller une ou deux fois la nuit est normal, surtout après 50 ans. Cela devient un problème quand on ne se rendort pas pendant plus de 30 minutes, plusieurs nuits par semaine. Les causes les plus fréquentes : anxiété, envie d'uriner, douleurs, alcool le soir, et dépression quand le réveil est très matinal.",
      ar: "الاستيقاظ مرة أو مرتين في الليل أمر طبيعي، خاصة بعد سن الخمسين. يصبح مشكلة حين لا تعود إلى النوم لأكثر من 30 دقيقة عدة ليالٍ في الأسبوع. الأسباب الأكثر شيوعاً: القلق، الحاجة إلى التبول، الآلام، الكحول في المساء، والاكتئاب عندما يكون الاستيقاظ مبكراً جداً.",
      en: "Waking once or twice a night is normal, especially after 50. It becomes a problem when you can't get back to sleep for more than 30 minutes, several nights a week. Most frequent causes: anxiety, needing to urinate, pain, evening alcohol, and depression when waking is very early.",
    },
    explanation: [
      { fr: "Le sommeil est fait de cycles de 90 minutes ; entre deux cycles, un micro-réveil est physiologique. Le problème n'est pas le réveil, c'est ce qu'on en fait : regarder l'heure, s'inquiéter, prendre le téléphone.", ar: "يتكون النوم من دورات مدة كل منها 90 دقيقة، وبين دورتين يحدث استيقاظ قصير طبيعي. المشكلة ليست في الاستيقاظ بل في ما نفعله: النظر إلى الساعة، القلق، أخذ الهاتف.", en: "Sleep is made of 90-minute cycles; a brief awakening between two cycles is physiological. The problem is not the waking, it is what you do with it: checking the time, worrying, picking up the phone." },
      { fr: "Un réveil vers 3-4 h du matin avec impossibilité de se rendormir, tristesse et perte d'intérêt, est un signe classique de dépression. Il mérite d'en parler au médecin.", ar: "الاستيقاظ حوالي الثالثة أو الرابعة صباحاً مع عدم القدرة على العودة إلى النوم، مع حزن وفقدان الاهتمام، علامة كلاسيكية على الاكتئاب. يستحق الحديث عنه مع الطبيب.", en: "Waking around 3–4 am and being unable to sleep again, with sadness and loss of interest, is a classic sign of depression. It deserves a conversation with your doctor." },
      { fr: "Chez l'homme après 50 ans, des réveils répétés pour uriner orientent vers la prostate ; chez tous, vers un diabète si la soif est présente.", ar: "عند الرجل بعد الخمسين، الاستيقاظ المتكرر للتبول يوجّه نحو البروستاتا؛ وعند الجميع نحو السكري إذا كان العطش حاضراً.", en: "In men over 50, repeated waking to urinate points to the prostate; in everyone, to diabetes if thirst is present." },
    ],
    meanwhile: [
      { fr: "Retournez le réveil contre le mur : regarder l'heure entretient l'éveil.", ar: "اقلب المنبّه نحو الحائط، فالنظر إلى الساعة يبقيك مستيقظاً.", en: "Turn the clock to the wall: checking the time keeps you awake." },
      { fr: "Pas d'alcool le soir : il endort vite mais fragmente la seconde moitié de la nuit.", ar: "لا كحول في المساء، فهو ينوّم بسرعة لكنه يقطّع النصف الثاني من الليل.", en: "No alcohol in the evening: it puts you to sleep fast but fragments the second half of the night." },
      { fr: "Moins de boisson après 19 h si vous vous levez pour uriner.", ar: "قلّل الشرب بعد السابعة مساءً إذا كنت تستيقظ للتبول.", en: "Drink less after 7 pm if you get up to urinate." },
      ...HYGIENE.slice(0, 1),
    ],
    whichDoctor: { fr: "Votre médecin généraliste, surtout si le moral est bas, si vous urinez souvent la nuit ou si une douleur vous réveille.", ar: "طبيبك العام، خاصة إذا كانت المعنويات منخفضة، أو كنت تتبول كثيراً ليلاً، أو يوقظك ألم.", en: "Your GP, especially if your mood is low, you urinate often at night, or pain wakes you." },
    exams: [
      { fr: "Agenda du sommeil sur 2 semaines.", ar: "مذكرة نوم لمدة أسبوعين.", en: "A 2-week sleep diary." },
      { fr: "Glycémie, bilan urinaire ou prostatique selon les signes.", ar: "سكر الدم، تحليل البول أو فحص البروستاتا حسب العلامات.", en: "Blood sugar, urine or prostate tests depending on the signs." },
    ],
    questions: [
      { fr: "Mes réveils sont-ils normaux pour mon âge ?", ar: "هل استيقاظي طبيعي لعمري؟", en: "Are my awakenings normal for my age?" },
      { fr: "Faut-il chercher une cause médicale (prostate, diabète, douleur) ?", ar: "هل يجب البحث عن سبب طبي (البروستاتا، السكري، الألم)؟", en: "Should we look for a medical cause (prostate, diabetes, pain)?" },
      { fr: "Mon moral peut-il expliquer ces réveils ?", ar: "هل يمكن أن تفسر معنوياتي هذا الاستيقاظ؟", en: "Could my mood explain these awakenings?" },
    ],
    warning: RED_SOMMEIL,
    sources: [AMELI_INSOMNIE, OMS_SANTE_MENTALE],
  },
  ronflement: {
    summary: {
      fr: "Ronfler est banal et sans danger en soi. Ce qui compte, c'est l'association avec des pauses respiratoires, une fatigue au réveil malgré une nuit complète et une somnolence dans la journée : c'est le tableau de l'apnée du sommeil, qui se soigne bien une fois diagnostiquée.",
      ar: "الشخير أمر شائع وغير خطير في حد ذاته. المهم هو اقترانه بتوقفات في التنفس، وتعب عند الاستيقاظ رغم ليلة كاملة، ونعاس خلال النهار؛ هذه صورة انقطاع النفس أثناء النوم الذي يُعالج جيداً بعد تشخيصه.",
      en: "Snoring is common and harmless in itself. What matters is its association with breathing pauses, tiredness on waking despite a full night, and daytime sleepiness: this is the picture of sleep apnoea, which is well treated once diagnosed.",
    },
    explanation: [
      { fr: "Le ronflement est la vibration des tissus de la gorge quand l'air passe difficilement. Il est favorisé par le surpoids, le dos, l'alcool, le nez bouché et l'âge.", ar: "الشخير هو اهتزاز أنسجة الحلق عندما يمر الهواء بصعوبة. يزيد مع زيادة الوزن، والنوم على الظهر، والكحول، وانسداد الأنف، والتقدم في السن.", en: "Snoring is the vibration of throat tissues when air passes with difficulty. It is encouraged by excess weight, sleeping on your back, alcohol, a blocked nose and age." },
      { fr: "Dans l'apnée du sommeil, la gorge se ferme complètement pendant 10 secondes ou plus, des dizaines de fois par heure. Le cerveau se réveille à chaque fois sans qu'on s'en souvienne. Non traitée, elle augmente la tension artérielle et le risque cardiaque.", ar: "في انقطاع النفس أثناء النوم، ينغلق الحلق تماماً لمدة 10 ثوانٍ أو أكثر، عشرات المرات في الساعة. يستيقظ الدماغ كل مرة دون أن تتذكر. دون علاج، يرفع ضغط الدم وخطر أمراض القلب.", en: "In sleep apnoea, the throat closes completely for 10 seconds or more, dozens of times an hour. The brain wakes each time without you remembering. Untreated, it raises blood pressure and heart risk." },
      { fr: "Le traitement le plus efficace est un appareil à pression d'air porté la nuit (PPC). Perdre du poids et dormir sur le côté suffisent dans les formes légères.", ar: "العلاج الأكثر فعالية هو جهاز ضغط هواء يُرتدى ليلاً. فقدان الوزن والنوم على الجانب يكفيان في الحالات الخفيفة.", en: "The most effective treatment is an air-pressure device worn at night (CPAP). Losing weight and sleeping on your side are enough in mild forms." },
    ],
    meanwhile: [
      { fr: "Dormez sur le côté (une balle de tennis cousue dans le dos du pyjama aide à ne pas se remettre sur le dos).", ar: "نم على الجانب (كرة تنس مخيطة في ظهر البيجاما تمنعك من العودة إلى النوم على الظهر).", en: "Sleep on your side (a tennis ball sewn into the back of your pyjamas stops you rolling onto your back)." },
      { fr: "Pas d'alcool ni de somnifère le soir : ils relâchent la gorge.", ar: "لا كحول ولا منومات في المساء لأنها ترخي الحلق.", en: "No alcohol or sleeping pills in the evening: they relax the throat." },
      { fr: "Lavage de nez au sérum physiologique si le nez est bouché.", ar: "اغسل الأنف بالمحلول الملحي إذا كان مسدوداً.", en: "Rinse your nose with saline if it is blocked." },
      { fr: "Demandez à votre conjoint s'il remarque des pauses respiratoires : c'est l'information clé pour le médecin.", ar: "اسأل شريكك إن كان يلاحظ توقفات في التنفس، فهذه المعلومة الأساسية للطبيب.", en: "Ask your partner whether they notice breathing pauses: it is the key information for the doctor." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste, qui vous orientera vers un pneumologue ou un centre du sommeil si une apnée est suspectée.", ar: "طبيبك العام الذي سيوجهك إلى طبيب أمراض الرئة أو مركز النوم إذا اشتُبه في انقطاع النفس.", en: "Your GP, who will refer you to a lung specialist or a sleep centre if apnoea is suspected." },
    exams: [
      { fr: "Enregistrement du sommeil à domicile (polygraphie) : capteurs posés une nuit pour compter les pauses respiratoires.", ar: "تسجيل النوم في المنزل: حساسات تُوضع ليلة واحدة لعدّ توقفات التنفس.", en: "Home sleep recording (polygraphy): sensors worn for one night to count breathing pauses." },
      { fr: "Tension artérielle, glycémie et bilan cardiaque si apnée confirmée.", ar: "ضغط الدم وسكر الدم وفحص القلب إذا تأكد انقطاع النفس.", en: "Blood pressure, blood sugar and heart check if apnoea is confirmed." },
    ],
    questions: [
      { fr: "Mon ronflement peut-il cacher une apnée du sommeil ?", ar: "هل يمكن أن يخفي شخيري انقطاع النفس أثناء النوم؟", en: "Could my snoring hide sleep apnoea?" },
      { fr: "Quel examen pour le savoir, et où le faire ?", ar: "ما الفحص اللازم لمعرفة ذلك وأين أجريه؟", en: "Which test can tell, and where can I have it?" },
      { fr: "Quel est le lien avec ma tension ou mon poids ?", ar: "ما العلاقة بضغطي أو وزني؟", en: "What is the link with my blood pressure or weight?" },
    ],
    warning: {
      fr: "pauses respiratoires la nuit, réveils en étouffant, endormissement au volant ou au travail, douleur dans la poitrine ou palpitations nocturnes.",
      ar: "توقفات في التنفس ليلاً، الاستيقاظ مع الشعور بالاختناق، النوم أثناء القيادة أو العمل، ألم في الصدر أو خفقان ليلي.",
      en: "breathing pauses at night, waking up choking, falling asleep while driving or at work, chest pain or palpitations at night.",
    },
    sources: [AMELI_APNEE],
  },
  somnolence: {
    summary: {
      fr: "S'endormir dans la journée malgré une nuit normale n'est pas de la paresse : c'est un signe qu'il faut explorer. Les causes les plus fréquentes sont une dette de sommeil, l'apnée du sommeil, certains médicaments, la dépression et, plus rarement, une maladie du sommeil comme la narcolepsie.",
      ar: "النوم خلال النهار رغم ليلة طبيعية ليس كسلاً، بل علامة يجب استكشافها. الأسباب الأكثر شيوعاً هي نقص النوم، وانقطاع النفس أثناء النوم، وبعض الأدوية، والاكتئاب، ونادراً مرض نوم مثل التغفيق.",
      en: "Falling asleep during the day despite a normal night is not laziness: it is a sign worth exploring. Most frequent causes are sleep debt, sleep apnoea, some medicines, depression and, more rarely, a sleep disorder such as narcolepsy.",
    },
    explanation: [
      { fr: "La première cause reste la plus simple : on ne dort pas assez. Un adulte a besoin de 7 à 9 heures ; beaucoup dorment 6 heures en semaine et « rattrapent » le week-end, ce qui ne compense pas.", ar: "السبب الأول يبقى الأبسط: لا ننام بما يكفي. يحتاج البالغ من 7 إلى 9 ساعات؛ كثيرون ينامون 6 ساعات خلال الأسبوع و«يعوّضون» في عطلة نهاية الأسبوع، وهذا لا يكفي.", en: "The first cause is the simplest: not sleeping enough. An adult needs 7 to 9 hours; many sleep 6 hours on weekdays and \"catch up\" at weekends, which doesn't compensate." },
      { fr: "Si vous ronflez et que vous êtes fatigué au réveil, l'apnée du sommeil est la piste numéro un. Antihistaminiques, anxiolytiques et certains antidépresseurs provoquent aussi une somnolence.", ar: "إذا كنت تشخر وتستيقظ متعباً، فانقطاع النفس أثناء النوم هو الاحتمال الأول. مضادات الهيستامين ومضادات القلق وبعض مضادات الاكتئاب تسبب النعاس أيضاً.", en: "If you snore and wake tired, sleep apnoea is the number one lead. Antihistamines, anxiolytics and some antidepressants also cause sleepiness." },
      { fr: "La somnolence au volant tue : si vous luttez contre le sommeil en conduisant, arrêtez-vous et faites une sieste de 15 minutes. Ne prenez pas la route tant que la cause n'est pas traitée.", ar: "النعاس أثناء القيادة قاتل: إذا كنت تقاوم النوم وأنت تقود، توقف وخذ قيلولة 15 دقيقة. لا تقد السيارة حتى يُعالج السبب.", en: "Drowsy driving kills: if you fight sleep while driving, stop and take a 15-minute nap. Don't drive until the cause is treated." },
    ],
    meanwhile: [
      { fr: "Notez pendant 2 semaines vos heures de coucher, de lever et vos endormissements involontaires : ce journal guidera le médecin.", ar: "سجّل لمدة أسبوعين أوقات نومك واستيقاظك ومرات نومك اللاإرادي، فهذه المذكرة ستوجّه الطبيب.", en: "For 2 weeks, note your bedtimes, wake times and involuntary dozing: this diary will guide the doctor." },
      { fr: "Une sieste courte (15 à 20 minutes) en début d'après-midi est utile ; une longue sieste aggrave la nuit suivante.", ar: "قيلولة قصيرة (15 إلى 20 دقيقة) في بداية فترة الظهيرة مفيدة؛ القيلولة الطويلة تفاقم ليلة اليوم التالي.", en: "A short nap (15 to 20 minutes) in early afternoon helps; a long nap worsens the following night." },
      { fr: "Vérifiez la notice de vos médicaments : « peut provoquer une somnolence » est une mention fréquente.", ar: "راجع نشرة أدويتك، فعبارة «قد يسبب النعاس» شائعة.", en: "Check your medicines' leaflets: \"may cause drowsiness\" is a common mention." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste en premier ; un centre du sommeil si une apnée ou une narcolepsie est suspectée.", ar: "طبيبك العام أولاً؛ ومركز النوم إذا اشتُبه في انقطاع النفس أو التغفيق.", en: "Your GP first; a sleep centre if apnoea or narcolepsy is suspected." },
    exams: [
      { fr: "Questionnaire de somnolence (échelle d'Epworth) et agenda du sommeil.", ar: "استبيان النعاس (مقياس إبوورث) ومذكرة النوم.", en: "Sleepiness questionnaire (Epworth scale) and sleep diary." },
      { fr: "Bilan sanguin : thyroïde, fer, glycémie.", ar: "تحليل دم: الغدة الدرقية، الحديد، سكر الدم.", en: "Blood tests: thyroid, iron, blood sugar." },
      { fr: "Enregistrement du sommeil si ronflements ou endormissements brutaux.", ar: "تسجيل النوم عند وجود شخير أو نوم مفاجئ.", en: "Sleep recording if snoring or sudden sleep attacks." },
    ],
    questions: [
      { fr: "Est-ce que je dors assez, ou est-ce autre chose ?", ar: "هل أنام بما يكفي أم أن هناك شيئاً آخر؟", en: "Am I sleeping enough, or is it something else?" },
      { fr: "Un de mes médicaments peut-il expliquer cette somnolence ?", ar: "هل يمكن أن يفسر أحد أدويتي هذا النعاس؟", en: "Could one of my medicines explain this sleepiness?" },
      { fr: "Puis-je conduire en attendant le diagnostic ?", ar: "هل يمكنني القيادة في انتظار التشخيص؟", en: "Can I drive while waiting for the diagnosis?" },
    ],
    warning: {
      fr: "endormissement au volant, accès de sommeil brutaux et irrésistibles, chute de tonus musculaire lors d'une émotion, pauses respiratoires la nuit, ou somnolence apparue avec un nouveau médicament.",
      ar: "النوم أثناء القيادة، نوبات نوم مفاجئة لا تُقاوَم، ضعف مفاجئ في العضلات عند الانفعال، توقفات في التنفس ليلاً، أو نعاس ظهر مع دواء جديد.",
      en: "falling asleep while driving, sudden irresistible sleep attacks, loss of muscle tone during emotion, breathing pauses at night, or sleepiness that appeared with a new medicine.",
    },
    sources: [AMELI_APNEE, AMELI_INSOMNIE],
  },
};
