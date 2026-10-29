import type { ThemeFiches } from "../types";

const AMELI_ANGINE = { label: "Ameli, Angine", url: "https://www.ameli.fr/assure/sante/themes/angine" };
const AMELI_LARYNGITE = { label: "Ameli, Laryngite", url: "https://www.ameli.fr/assure/sante/themes/laryngite-aigue-adulte" };

export const gorge: ThemeFiches = {
  avaler: {
    summary: {
      fr: "Une douleur en avalant est le plus souvent une angine ou une pharyngite virale qui guérit seule en une semaine. Un test rapide chez le médecin dit si des antibiotiques sont utiles.",
      ar: "الألم عند البلع هو غالباً التهاب اللوزتين أو البلعوم الفيروسي الذي يشفى وحده خلال أسبوع. اختبار سريع عند الطبيب يحدد إن كانت المضادات الحيوية مفيدة.",
      en: "Pain when swallowing is most often viral tonsillitis or pharyngitis that clears on its own within a week. A rapid test at the doctor's tells if antibiotics are useful.",
    },
    explanation: [
      { fr: "Chez l'adulte, 8 angines sur 10 sont virales. L'angine à streptocoque, bactérienne, est plus fréquente chez l'enfant de 3 à 15 ans.", ar: "عند البالغين، 8 من كل 10 حالات فيروسية. الالتهاب البكتيري بالمكورات العقدية أكثر شيوعاً عند الأطفال من 3 إلى 15 سنة.", en: "In adults, 8 out of 10 cases are viral. Bacterial strep throat is more common in children aged 3 to 15." },
      { fr: "Des amygdales rouges avec des points blancs ne veulent pas forcément dire bactérie : seul le test rapide (TDR) tranche.", ar: "اللوزتان الحمراوان مع نقاط بيضاء لا تعنيان بالضرورة بكتيريا، والاختبار السريع وحده يحسم.", en: "Red tonsils with white spots don't necessarily mean bacteria: only the rapid test decides." },
      { fr: "Traiter une angine bactérienne par antibiotiques évite des complications rares mais graves (rhumatisme articulaire aigu).", ar: "علاج الالتهاب البكتيري بالمضادات الحيوية يمنع مضاعفات نادرة لكنها خطيرة (الحمى الروماتيزمية).", en: "Treating bacterial tonsillitis with antibiotics prevents rare but serious complications (rheumatic fever)." },
    ],
    meanwhile: [
      { fr: "Buvez beaucoup, chaud ou froid selon ce qui soulage.", ar: "اشرب كثيراً، ساخناً أو بارداً حسب ما يريحك.", en: "Drink plenty, warm or cold, whichever soothes." },
      { fr: "Paracétamol pour la douleur ; pastilles ou miel pour la gorge.", ar: "باراسيتامول للألم؛ أقراص مص أو عسل للحلق.", en: "Paracetamol for pain; lozenges or honey for the throat." },
      { fr: "Mangez mou (purée, yaourt, soupe) si avaler fait trop mal.", ar: "تناول طعاماً ليناً (بطاطس مهروسة، زبادي، حساء) إذا كان البلع مؤلماً جداً.", en: "Eat soft foods (mash, yoghurt, soup) if swallowing hurts too much." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste ou le pédiatre, surtout pour un enfant de 3 à 15 ans ou si la fièvre dépasse 38,5 °C.", ar: "طبيبك العام أو طبيب الأطفال، خاصة للطفل من 3 إلى 15 سنة أو إذا تجاوزت الحمى 38.5 درجة.", en: "Your GP or paediatrician, especially for a child aged 3 to 15 or if the fever exceeds 38.5 °C." },
    exams: [
      { fr: "Test rapide de l'angine (TDR), résultat en 5 minutes.", ar: "اختبار سريع لالتهاب اللوزتين، النتيجة خلال 5 دقائق.", en: "Rapid strep test, result in 5 minutes." },
    ],
    questions: [
      { fr: "Pouvez-vous faire le test rapide ?", ar: "هل يمكنك إجراء الاختبار السريع؟", en: "Can you do the rapid test?" },
      { fr: "Si c'est viral, combien de temps ça va durer ?", ar: "إذا كان فيروسياً، كم سيستمر؟", en: "If it's viral, how long will it last?" },
      { fr: "Faut-il enlever les amygdales si ça revient souvent ?", ar: "هل يجب استئصال اللوزتين إذا تكرر كثيراً؟", en: "Should the tonsils be removed if it keeps coming back?" },
    ],
    warning: {
      fr: "impossibilité d'avaler sa salive, difficulté à respirer ou à ouvrir la bouche, voix étouffée, gonflement d'un côté du cou, fièvre qui dure plus de 3 jours.",
      ar: "عدم القدرة على بلع اللعاب، صعوبة في التنفس أو فتح الفم، صوت مكتوم، تورم جهة من الرقبة، حمى تستمر أكثر من 3 أيام.",
      en: "unable to swallow saliva, difficulty breathing or opening the mouth, muffled voice, swelling on one side of the neck, fever for more than 3 days.",
    },
    sources: [AMELI_ANGINE],
  },
  voix: {
    summary: {
      fr: "Une voix enrouée est le plus souvent une laryngite après un rhume ou un abus de la voix. Elle guérit en une à deux semaines avec du repos vocal. Un enrouement qui dure plus de 3 semaines doit être examiné par un ORL.",
      ar: "بحّة الصوت هي غالباً التهاب الحنجرة بعد زكام أو إجهاد للصوت. تشفى خلال أسبوع أو أسبوعين مع إراحة الصوت. البحّة التي تستمر أكثر من 3 أسابيع يجب أن يفحصها طبيب الأنف والأذن والحنجرة.",
      en: "A hoarse voice is most often laryngitis after a cold or overusing the voice. It heals in one to two weeks with voice rest. Hoarseness lasting more than 3 weeks must be examined by an ENT.",
    },
    explanation: [
      { fr: "Les cordes vocales gonflent quand elles sont irritées par un virus, la fumée, un reflux acide ou des cris.", ar: "تنتفخ الحبال الصوتية عندما يهيجها فيروس أو الدخان أو ارتجاع الحمض أو الصراخ.", en: "The vocal cords swell when irritated by a virus, smoke, acid reflux or shouting." },
      { fr: "Chuchoter fatigue encore plus les cordes vocales que parler doucement.", ar: "الهمس يرهق الحبال الصوتية أكثر من الكلام بهدوء.", en: "Whispering strains the vocal cords even more than speaking softly." },
      { fr: "Chez un fumeur, un enrouement persistant doit faire examiner le larynx pour écarter une lésion.", ar: "عند المدخن، البحّة المستمرة تستدعي فحص الحنجرة لاستبعاد أي آفة.", en: "In a smoker, persistent hoarseness requires examining the larynx to rule out a lesion." },
    ],
    meanwhile: [
      { fr: "Reposez votre voix : parlez peu, ne chuchotez pas, ne criez pas.", ar: "أرح صوتك: تكلم قليلاً، لا تهمس ولا تصرخ.", en: "Rest your voice: speak little, don't whisper, don't shout." },
      { fr: "Buvez beaucoup d'eau et humidifiez l'air.", ar: "اشرب كثيراً من الماء ورطّب الهواء.", en: "Drink plenty of water and humidify the air." },
      { fr: "Évitez le tabac, l'alcool et les boissons très chaudes.", ar: "تجنب التدخين والكحول والمشروبات الساخنة جداً.", en: "Avoid tobacco, alcohol and very hot drinks." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste ; un ORL si l'enrouement dure plus de 3 semaines ou si vous fumez.", ar: "طبيبك العام؛ وطبيب الأنف والأذن والحنجرة إذا استمرت البحّة أكثر من 3 أسابيع أو كنت مدخناً.", en: "Your GP; an ENT if hoarseness lasts more than 3 weeks or if you smoke." },
    exams: [
      { fr: "Examen des cordes vocales (laryngoscopie) chez l'ORL si ça persiste.", ar: "فحص الحبال الصوتية بالمنظار عند الأخصائي إذا استمرت.", en: "Vocal cord examination (laryngoscopy) at the ENT if it persists." },
    ],
    questions: [
      { fr: "Mon enrouement peut-il venir d'un reflux acide ?", ar: "هل يمكن أن تكون بحّتي بسبب ارتجاع الحمض؟", en: "Could my hoarseness come from acid reflux?" },
      { fr: "Dois-je voir un ORL ?", ar: "هل يجب أن أرى طبيب الأنف والأذن والحنجرة؟", en: "Should I see an ENT?" },
      { fr: "Comment protéger ma voix si je parle beaucoup au travail ?", ar: "كيف أحمي صوتي إذا كنت أتكلم كثيراً في العمل؟", en: "How can I protect my voice if I talk a lot at work?" },
    ],
    warning: {
      fr: "difficulté à respirer, bruit en respirant (stridor), impossibilité d'avaler, enrouement de plus de 3 semaines surtout chez un fumeur, ou crachats avec du sang.",
      ar: "صعوبة في التنفس، صوت عند التنفس، عدم القدرة على البلع، بحّة أكثر من 3 أسابيع خاصة عند المدخن، أو بلغم مع دم.",
      en: "difficulty breathing, noisy breathing (stridor), unable to swallow, hoarseness over 3 weeks especially in a smoker, or blood in phlegm.",
    },
    sources: [AMELI_LARYNGITE],
  },
  ganglions: {
    summary: {
      fr: "Des ganglions gonflés au cou sont presque toujours la réaction normale du corps à une infection de la gorge, des dents ou des oreilles. Ils disparaissent en 2 à 3 semaines. Un ganglion dur, qui grossit ou qui persiste doit être examiné.",
      ar: "تورم الغدد في الرقبة هو غالباً رد فعل طبيعي للجسم على عدوى في الحلق أو الأسنان أو الأذنين. تختفي خلال أسبوعين أو ثلاثة. الغدة الصلبة أو التي تكبر أو تستمر يجب فحصها.",
      en: "Swollen glands in the neck are almost always the body's normal reaction to an infection of the throat, teeth or ears. They go down in 2 to 3 weeks. A hard gland that grows or persists must be examined.",
    },
    explanation: [
      { fr: "Les ganglions filtrent les microbes. Quand ils travaillent, ils gonflent et deviennent sensibles : c'est bon signe.", ar: "تصفي الغدد اللمفاوية الميكروبات. عندما تعمل، تنتفخ وتصبح حساسة، وهذا علامة جيدة.", en: "Lymph glands filter germs. When they work, they swell and get tender: that is a good sign." },
      { fr: "Chez l'adolescent et le jeune adulte, des ganglions avec une fatigue intense et une angine évoquent la mononucléose.", ar: "عند المراهق والشاب، الغدد المنتفخة مع تعب شديد والتهاب اللوزتين توحي بداء التقبيل.", en: "In teenagers and young adults, swollen glands with intense tiredness and sore throat suggest mononucleosis." },
      { fr: "Un ganglion indolore, dur, de plus de 2 cm, qui grossit depuis plus de 3 semaines sans infection doit être exploré.", ar: "الغدة غير المؤلمة والصلبة التي يتجاوز حجمها 2 سم وتكبر منذ أكثر من 3 أسابيع بدون عدوى يجب استكشافها.", en: "A painless, hard gland over 2 cm, growing for more than 3 weeks without infection must be investigated." },
    ],
    meanwhile: [
      { fr: "Traitez l'infection en cause (gorge, dents) et attendez 2 à 3 semaines.", ar: "عالج العدوى المسببة (الحلق، الأسنان) وانتظر أسبوعين أو ثلاثة.", en: "Treat the infection causing it (throat, teeth) and wait 2 to 3 weeks." },
      { fr: "Notez la taille du ganglion pour voir s'il diminue.", ar: "سجّل حجم الغدة لترى إن كانت تصغر.", en: "Note the gland's size to see if it shrinks." },
      { fr: "Ne le pressez pas et n'appliquez pas de chaleur forte.", ar: "لا تضغط عليها ولا تضع حرارة قوية.", en: "Don't squeeze it and don't apply strong heat." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste, dans la semaine, et sans attendre si le ganglion est dur ou dépasse 2 cm.", ar: "طبيبك العام خلال الأسبوع، وفوراً إذا كانت الغدة صلبة أو تتجاوز 2 سم.", en: "Your GP within the week, without delay if the gland is hard or over 2 cm." },
    exams: [
      { fr: "Examen de la gorge, des dents et des oreilles.", ar: "فحص الحلق والأسنان والأذنين.", en: "Examination of the throat, teeth and ears." },
      { fr: "Prise de sang (NFS, sérologies) si fatigue ou persistance.", ar: "تحليل دم إذا كان هناك تعب أو استمرار.", en: "Blood test (CBC, serologies) if tiredness or persistence." },
      { fr: "Échographie du cou si le ganglion persiste plus de 3 semaines.", ar: "تصوير بالصدى للرقبة إذا استمرت الغدة أكثر من 3 أسابيع.", en: "Neck ultrasound if the gland persists more than 3 weeks." },
    ],
    questions: [
      { fr: "Quelle infection fait gonfler ce ganglion ?", ar: "أي عدوى تسبب تورم هذه الغدة؟", en: "Which infection is making this gland swell?" },
      { fr: "Dans combien de temps doit-il disparaître ?", ar: "خلال كم من الوقت يجب أن تختفي؟", en: "How long before it should go away?" },
      { fr: "Faut-il une prise de sang ou une échographie ?", ar: "هل أحتاج تحليل دم أو تصويراً بالصدى؟", en: "Do I need a blood test or an ultrasound?" },
    ],
    warning: {
      fr: "ganglion dur et fixe de plus de 2 cm, qui grossit depuis plus de 3 semaines, avec sueurs la nuit, perte de poids ou fièvre prolongée, ou ganglion au-dessus de la clavicule.",
      ar: "غدة صلبة ثابتة أكبر من 2 سم تكبر منذ أكثر من 3 أسابيع، مع تعرق ليلي أو فقدان وزن أو حمى طويلة، أو غدة فوق الترقوة.",
      en: "hard, fixed gland over 2 cm, growing for more than 3 weeks, with night sweats, weight loss or prolonged fever, or a gland above the collarbone.",
    },
    sources: [AMELI_ANGINE],
  },
  gratte: {
    summary: {
      fr: "Une gorge qui gratte sans fièvre est généralement le début d'un rhume, une allergie, un air sec ou un reflux acide. C'est sans gravité et ça passe en quelques jours avec des gestes simples.",
      ar: "حكة الحلق بدون حمى هي عادة بداية زكام أو حساسية أو هواء جاف أو ارتجاع حمضي. ليست خطيرة وتزول خلال أيام بإجراءات بسيطة.",
      en: "A scratchy throat without fever is usually the start of a cold, an allergy, dry air or acid reflux. It is harmless and clears in a few days with simple measures.",
    },
    explanation: [
      { fr: "Le matin, une gorge qui gratte vient souvent de l'air sec de la chambre ou de la respiration par la bouche.", ar: "في الصباح، تأتي حكة الحلق غالباً من جفاف هواء الغرفة أو التنفس من الفم.", en: "In the morning, a scratchy throat often comes from dry bedroom air or mouth breathing." },
      { fr: "Si elle s'accompagne d'éternuements et de démangeaisons des yeux au printemps, pensez à une allergie au pollen.", ar: "إذا صاحبها عطس وحكة في العينين في الربيع، فكّر في حساسية حبوب اللقاح.", en: "If it comes with sneezing and itchy eyes in spring, think of pollen allergy." },
      { fr: "Une gorge irritée surtout après les repas ou la nuit peut venir d'un reflux acide de l'estomac.", ar: "الحلق المتهيج خاصة بعد الوجبات أو في الليل قد يكون بسبب ارتجاع الحمض من المعدة.", en: "A throat irritated mainly after meals or at night can come from stomach acid reflux." },
    ],
    meanwhile: [
      { fr: "Buvez régulièrement de l'eau et des tisanes avec du miel.", ar: "اشرب الماء بانتظام وأعشاباً مع العسل.", en: "Drink water regularly and herbal teas with honey." },
      { fr: "Humidifiez la chambre et évitez la climatisation directe.", ar: "رطّب الغرفة وتجنب التكييف المباشر.", en: "Humidify the bedroom and avoid direct air conditioning." },
      { fr: "Évitez le tabac, l'alcool et les aliments très épicés.", ar: "تجنب التدخين والكحول والأطعمة الحارة جداً.", en: "Avoid tobacco, alcohol and very spicy food." },
    ],
    whichDoctor: { fr: "Pas besoin de médecin au début. Votre généraliste si ça dure plus de 2 semaines ou revient sans cesse.", ar: "لا حاجة للطبيب في البداية. طبيبك العام إذا استمر أكثر من أسبوعين أو تكرر باستمرار.", en: "No doctor needed at first. Your GP if it lasts more than 2 weeks or keeps coming back." },
    exams: [
      { fr: "Aucun en général.", ar: "لا شيء عادة.", en: "None usually." },
      { fr: "Tests allergiques si c'est saisonnier.", ar: "اختبارات الحساسية إذا كان موسمياً.", en: "Allergy tests if it is seasonal." },
    ],
    questions: [
      { fr: "Est-ce une allergie, un reflux ou un début de rhume ?", ar: "هل هي حساسية أم ارتجاع أم بداية زكام؟", en: "Is it an allergy, reflux or the start of a cold?" },
      { fr: "Que puis-je prendre sans risque ?", ar: "ماذا يمكنني أن آخذ دون خطر؟", en: "What can I take safely?" },
    ],
    warning: {
      fr: "gonflement de la gorge ou de la langue, difficulté à respirer ou à avaler, ou fièvre élevée qui apparaît.",
      ar: "تورم الحلق أو اللسان، صعوبة في التنفس أو البلع، أو ظهور حمى مرتفعة.",
      en: "swelling of the throat or tongue, difficulty breathing or swallowing, or a high fever appearing.",
    },
    sources: [AMELI_ANGINE],
  },
};
