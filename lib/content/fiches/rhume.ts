import type { ThemeFiches } from "../types";

const AMELI_RHUME = { label: "Ameli, Rhume", url: "https://www.ameli.fr/assure/sante/themes/rhinopharyngite-rhume" };
const AMELI_TOUX = { label: "Ameli, Toux", url: "https://www.ameli.fr/assure/sante/themes/toux" };
const OMS_GRIPPE = { label: "OMS, Grippe saisonnière", url: "https://www.who.int/fr/news-room/fact-sheets/detail/influenza-(seasonal)" };

export const rhume: ThemeFiches = {
  nez: {
    summary: {
      fr: "Un nez qui coule ou bouché est presque toujours un rhume, infection virale sans gravité qui guérit seule en 7 à 10 jours. Aucun antibiotique n'est nécessaire.",
      ar: "سيلان الأنف أو انسداده هو في الغالب زكام، عدوى فيروسية غير خطيرة تشفى وحدها خلال 7 إلى 10 أيام. لا حاجة للمضادات الحيوية.",
      en: "A runny or blocked nose is almost always a cold, a harmless viral infection that clears on its own in 7 to 10 days. No antibiotic is needed.",
    },
    explanation: [
      { fr: "Plus de 200 virus peuvent donner un rhume. Un adulte en fait 2 à 4 par an, un enfant jusqu'à 8.", ar: "أكثر من 200 فيروس يمكن أن يسبب الزكام. يصاب البالغ به 2 إلى 4 مرات في السنة، والطفل حتى 8 مرات.", en: "More than 200 viruses can cause a cold. An adult gets 2 to 4 a year, a child up to 8." },
      { fr: "Un écoulement jaune ou vert ne veut pas dire infection bactérienne : c'est l'évolution normale du rhume.", ar: "الإفرازات الصفراء أو الخضراء لا تعني عدوى بكتيرية، بل هي التطور الطبيعي للزكام.", en: "Yellow or green discharge doesn't mean a bacterial infection: it is the normal course of a cold." },
      { fr: "Si le nez reste bouché plus de 10 jours avec douleur au visage et fièvre, il peut s'agir d'une sinusite, à montrer au médecin.", ar: "إذا بقي الأنف مسدوداً أكثر من 10 أيام مع ألم في الوجه وحمى، فقد يكون التهاب الجيوب الأنفية، ويجب عرضه على الطبيب.", en: "If the nose stays blocked more than 10 days with facial pain and fever, it may be sinusitis, to be checked by a doctor." },
    ],
    meanwhile: [
      { fr: "Lavez le nez plusieurs fois par jour au sérum physiologique ou à l'eau de mer.", ar: "اغسل الأنف عدة مرات في اليوم بالمحلول الملحي أو ماء البحر.", en: "Rinse the nose several times a day with saline or sea water." },
      { fr: "Buvez chaud, dormez la tête un peu surélevée et aérez la chambre.", ar: "اشرب ساخناً، ونم ورأسك مرفوع قليلاً، وهوّ الغرفة.", en: "Drink warm, sleep with your head slightly raised and air the bedroom." },
      { fr: "Évitez les sprays décongestionnants plus de 5 jours : ils entretiennent le nez bouché.", ar: "تجنب بخاخات مزيلات الاحتقان لأكثر من 5 أيام لأنها تطيل الانسداد.", en: "Avoid decongestant sprays for more than 5 days: they keep the nose blocked." },
    ],
    whichDoctor: { fr: "Pas besoin de médecin dans la plupart des cas. Votre généraliste si ça dure plus de 10 jours ou si la fièvre monte.", ar: "لا حاجة للطبيب في أغلب الحالات. طبيبك العام إذا استمر أكثر من 10 أيام أو ارتفعت الحمى.", en: "No doctor needed in most cases. Your GP if it lasts more than 10 days or the fever rises." },
    exams: [{ fr: "Aucun en général.", ar: "لا شيء عادة.", en: "None usually." }],
    questions: [
      { fr: "Est-ce un rhume ou une sinusite ?", ar: "هل هو زكام أم التهاب جيوب أنفية؟", en: "Is it a cold or sinusitis?" },
      { fr: "Quels médicaments sont sans danger pour moi ou mon enfant ?", ar: "ما الأدوية الآمنة لي أو لطفلي؟", en: "Which medicines are safe for me or my child?" },
      { fr: "Pourquoi mes rhumes reviennent-ils si souvent ?", ar: "لماذا يتكرر الزكام عندي كثيراً؟", en: "Why do I get colds so often?" },
    ],
    warning: {
      fr: "fièvre élevée qui dure plus de 3 jours, douleur forte au visage ou aux oreilles, difficulté à respirer, ou rhume chez un bébé de moins de 3 mois qui mange mal.",
      ar: "حمى مرتفعة تستمر أكثر من 3 أيام، ألم قوي في الوجه أو الأذنين، صعوبة في التنفس، أو زكام عند رضيع أقل من 3 أشهر لا يأكل جيداً.",
      en: "high fever for more than 3 days, severe facial or ear pain, difficulty breathing, or a cold in a baby under 3 months who feeds poorly.",
    },
    sources: [AMELI_RHUME],
  },
  "toux-seche": {
    summary: {
      fr: "Une toux sèche récente accompagne le plus souvent un rhume ou une grippe et disparaît en 2 à 3 semaines. Une toux qui dure plus de 3 semaines ou qui gêne la respiration doit être examinée.",
      ar: "السعال الجاف الحديث يصاحب غالباً الزكام أو الأنفلونزا ويزول خلال أسبوعين أو ثلاثة. السعال الذي يستمر أكثر من 3 أسابيع أو يعيق التنفس يجب فحصه.",
      en: "A recent dry cough most often goes with a cold or flu and disappears in 2 to 3 weeks. A cough lasting more than 3 weeks or affecting breathing needs examining.",
    },
    explanation: [
      { fr: "La toux sèche est un réflexe d'irritation de la gorge ou des bronches. Elle est souvent plus forte la nuit, allongé.", ar: "السعال الجاف هو رد فعل لتهيج الحلق أو الشعب الهوائية، ويكون غالباً أقوى ليلاً عند الاستلقاء.", en: "A dry cough is a reflex from an irritated throat or airways. It is often worse at night, lying down." },
      { fr: "Après un virus, les bronches restent sensibles plusieurs semaines : la toux peut durer alors que tout le reste est guéri.", ar: "بعد الفيروس، تبقى الشعب الهوائية حساسة لعدة أسابيع، فقد يستمر السعال بينما يشفى كل شيء آخر.", en: "After a virus, the airways stay sensitive for weeks: the cough can linger while everything else has healed." },
      { fr: "Une toux sèche chronique peut aussi venir d'un reflux, d'une allergie, d'un asthme ou de certains médicaments contre la tension.", ar: "قد ينتج السعال الجاف المزمن أيضاً عن الارتجاع المعدي أو الحساسية أو الربو أو بعض أدوية الضغط.", en: "A chronic dry cough can also come from reflux, allergy, asthma or some blood pressure medicines." },
    ],
    meanwhile: [
      { fr: "Une cuillère de miel le soir calme la toux (pas avant 1 an).", ar: "ملعقة عسل في المساء تهدئ السعال (ليس قبل عمر سنة).", en: "A spoon of honey in the evening soothes the cough (not under 1 year old)." },
      { fr: "Humidifiez l'air de la chambre et évitez la fumée.", ar: "رطّب هواء الغرفة وتجنب الدخان.", en: "Humidify the bedroom air and avoid smoke." },
      { fr: "Les sirops contre la toux ont peu d'effet et sont déconseillés chez l'enfant de moins de 6 ans.", ar: "شراب السعال قليل الفائدة ولا يُنصح به للأطفال دون 6 سنوات.", en: "Cough syrups have little effect and are not advised for children under 6." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste si la toux dure plus de 3 semaines, et plus tôt si vous fumez ou êtes essoufflé.", ar: "طبيبك العام إذا استمر السعال أكثر من 3 أسابيع، وقبل ذلك إذا كنت مدخناً أو تعاني من ضيق التنفس.", en: "Your GP if the cough lasts more than 3 weeks, sooner if you smoke or are breathless." },
    exams: [
      { fr: "Examen des poumons au stéthoscope.", ar: "فحص الرئتين بالسماعة.", en: "Chest examination with a stethoscope." },
      { fr: "Radio des poumons si la toux est chronique ou si vous fumez.", ar: "أشعة للرئتين إذا كان السعال مزمناً أو كنت مدخناً.", en: "Chest X-ray if the cough is chronic or you smoke." },
      { fr: "Mesure du souffle (spirométrie) si un asthme est suspecté.", ar: "قياس التنفس إذا اشتُبه في الربو.", en: "Breathing test (spirometry) if asthma is suspected." },
    ],
    questions: [
      { fr: "Ma toux peut-elle venir d'un reflux, d'une allergie ou d'un asthme ?", ar: "هل يمكن أن يكون سعالي بسبب الارتجاع أو الحساسية أو الربو؟", en: "Could my cough come from reflux, allergy or asthma?" },
      { fr: "Faut-il une radio des poumons ?", ar: "هل أحتاج أشعة للرئتين؟", en: "Do I need a chest X-ray?" },
      { fr: "Mes médicaments peuvent-ils faire tousser ?", ar: "هل يمكن لأدويتي أن تسبب السعال؟", en: "Can my medicines cause coughing?" },
    ],
    warning: {
      fr: "essoufflement, sifflements, crachats avec du sang, douleur dans la poitrine, perte de poids, ou toux chez un bébé qui respire vite.",
      ar: "ضيق في التنفس، صفير، بلغم مع دم، ألم في الصدر، فقدان الوزن، أو سعال عند رضيع يتنفس بسرعة.",
      en: "breathlessness, wheezing, blood in phlegm, chest pain, weight loss, or cough in a baby breathing fast.",
    },
    sources: [AMELI_TOUX],
  },
  "toux-grasse": {
    summary: {
      fr: "Une toux grasse avec crachats est le plus souvent une bronchite aiguë, virale, qui guérit en 2 à 3 semaines sans antibiotiques. Fièvre persistante et essoufflement font craindre une pneumonie.",
      ar: "السعال مع البلغم هو غالباً التهاب شعبي حاد فيروسي يشفى خلال أسبوعين أو ثلاثة بدون مضادات حيوية. استمرار الحمى وضيق التنفس يثيران القلق من التهاب رئوي.",
      en: "A chesty cough with phlegm is most often acute viral bronchitis, which clears in 2 to 3 weeks without antibiotics. Persistent fever and breathlessness raise concern for pneumonia.",
    },
    explanation: [
      { fr: "La toux grasse sert à évacuer les sécrétions des bronches : il ne faut pas la bloquer.", ar: "السعال المصحوب بالبلغم يساعد على إخراج إفرازات الشعب الهوائية، فلا يجب إيقافه.", en: "A chesty cough clears secretions from the airways: it should not be suppressed." },
      { fr: "La couleur des crachats (jaune, vert) ne suffit pas à décider d'un antibiotique.", ar: "لون البلغم (أصفر أو أخضر) لا يكفي لتقرير المضاد الحيوي.", en: "The colour of phlegm (yellow, green) is not enough to decide on an antibiotic." },
      { fr: "Chez le fumeur, une toux grasse qui dure plusieurs mois par an peut être une bronchite chronique (BPCO) : un bilan du souffle est utile.", ar: "عند المدخن، السعال مع البلغم الذي يستمر عدة أشهر في السنة قد يكون التهاباً شعبياً مزمناً، ويفيد فيه فحص التنفس.", en: "In smokers, a chesty cough lasting several months a year may be chronic bronchitis (COPD): a breathing test is useful." },
    ],
    meanwhile: [
      { fr: "Buvez beaucoup pour fluidifier les sécrétions.", ar: "اشرب كثيراً لتسييل الإفرازات.", en: "Drink plenty to loosen the secretions." },
      { fr: "Arrêtez de fumer, au moins le temps de la guérison.", ar: "توقف عن التدخين، على الأقل حتى الشفاء.", en: "Stop smoking, at least until you recover." },
      { fr: "Évitez les sirops antitussifs, qui empêchent d'évacuer les crachats.", ar: "تجنب شراب السعال المثبط لأنه يمنع إخراج البلغم.", en: "Avoid cough suppressants, which stop phlegm from clearing." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste dans les 48 h si fièvre ou essoufflement, sans attendre si vous avez plus de 65 ans ou une maladie des poumons ou du cœur.", ar: "طبيبك العام خلال 48 ساعة إذا كانت هناك حمى أو ضيق تنفس، وفوراً إذا تجاوزت 65 سنة أو كنت تعاني من مرض في الرئة أو القلب.", en: "Your GP within 48 h if fever or breathlessness, without delay if over 65 or with lung or heart disease." },
    exams: [
      { fr: "Auscultation des poumons.", ar: "فحص الرئتين بالسماعة.", en: "Chest auscultation." },
      { fr: "Radio des poumons si pneumonie suspectée.", ar: "أشعة للرئتين عند الاشتباه في التهاب رئوي.", en: "Chest X-ray if pneumonia is suspected." },
      { fr: "Spirométrie chez le fumeur.", ar: "قياس التنفس عند المدخن.", en: "Spirometry for smokers." },
    ],
    questions: [
      { fr: "Est-ce une bronchite ou une pneumonie ?", ar: "هل هو التهاب شعبي أم التهاب رئوي؟", en: "Is it bronchitis or pneumonia?" },
      { fr: "Ai-je besoin d'antibiotiques ?", ar: "هل أحتاج مضادات حيوية؟", en: "Do I need antibiotics?" },
      { fr: "Dois-je faire un bilan de mon souffle ?", ar: "هل أحتاج فحصاً للتنفس؟", en: "Should I have my breathing tested?" },
      { fr: "Pouvez-vous m'aider à arrêter de fumer ?", ar: "هل يمكنك مساعدتي على الإقلاع عن التدخين؟", en: "Can you help me stop smoking?" },
    ],
    warning: {
      fr: "essoufflement au repos, fièvre élevée plus de 3 jours, crachats avec du sang, douleur dans la poitrine en respirant, lèvres bleues, confusion chez une personne âgée.",
      ar: "ضيق التنفس في الراحة، حمى مرتفعة أكثر من 3 أيام، بلغم مع دم، ألم في الصدر عند التنفس، ازرقاق الشفتين، تشوش عند المسن.",
      en: "breathlessness at rest, high fever for more than 3 days, blood in phlegm, chest pain when breathing, blue lips, confusion in an elderly person.",
    },
    sources: [{ label: "Ameli, Bronchite aiguë", url: "https://www.ameli.fr/assure/sante/themes/bronchite-aigue" }],
  },
  grippe: {
    summary: {
      fr: "Courbatures, fièvre élevée et grande fatigue qui arrivent d'un coup : c'est très probablement la grippe. Elle guérit seule en une semaine chez la plupart des gens, mais elle est dangereuse pour les personnes fragiles.",
      ar: "آلام في الجسم وحمى مرتفعة وتعب شديد يظهر فجأة: على الأرجح هي الأنفلونزا. تشفى وحدها خلال أسبوع عند أغلب الناس، لكنها خطيرة على الأشخاص الضعفاء.",
      en: "Aches, high fever and great tiredness that come on suddenly: this is very likely the flu. It clears on its own in a week for most people, but it is dangerous for fragile people.",
    },
    explanation: [
      { fr: "La grippe se distingue du rhume par son début brutal, la fièvre à 39-40 °C et l'épuisement.", ar: "تتميز الأنفلونزا عن الزكام ببدايتها المفاجئة والحمى بين 39 و40 درجة والإرهاق.", en: "Flu differs from a cold by its sudden start, fever of 39-40 °C and exhaustion." },
      { fr: "La fièvre dure 3 à 5 jours, la fatigue peut durer deux semaines.", ar: "تستمر الحمى من 3 إلى 5 أيام، وقد يستمر التعب أسبوعين.", en: "Fever lasts 3 to 5 days; tiredness can last two weeks." },
      { fr: "Les complications (pneumonie, décompensation d'une maladie chronique) touchent surtout les plus de 65 ans, les femmes enceintes, les diabétiques et les malades du cœur ou des poumons.", ar: "تصيب المضاعفات (التهاب رئوي، تفاقم مرض مزمن) خاصة من تجاوزوا 65 سنة والحوامل ومرضى السكري والقلب والرئة.", en: "Complications (pneumonia, worsening of a chronic illness) mainly affect people over 65, pregnant women, diabetics and those with heart or lung disease." },
      { fr: "Un traitement antiviral existe, efficace s'il est pris dans les 48 premières heures, réservé aux personnes à risque.", ar: "يوجد علاج مضاد للفيروسات فعال إذا أُخذ خلال أول 48 ساعة، ومخصص للأشخاص المعرضين للخطر.", en: "An antiviral treatment exists, effective if taken within the first 48 hours, reserved for people at risk." },
    ],
    meanwhile: [
      { fr: "Repos complet, boissons abondantes, paracétamol contre la fièvre et les douleurs.", ar: "راحة تامة، سوائل كثيرة، باراسيتامول للحمى والآلام.", en: "Full rest, plenty of fluids, paracetamol for fever and aches." },
      { fr: "Restez chez vous 5 jours environ, portez un masque près des personnes fragiles.", ar: "ابق في البيت حوالي 5 أيام، والبس كمامة قرب الأشخاص الضعفاء.", en: "Stay home about 5 days, wear a mask near fragile people." },
      { fr: "Pas d'antibiotiques : ils n'agissent pas sur le virus de la grippe.", ar: "لا مضادات حيوية، فهي لا تؤثر على فيروس الأنفلونزا.", en: "No antibiotics: they do nothing against the flu virus." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste dans les 48 h si vous êtes enceinte, âgé ou malade chronique ; sinon seulement si ça s'aggrave.", ar: "طبيبك العام خلال 48 ساعة إذا كنت حاملاً أو مسناً أو مريضاً مزمناً؛ وإلا فقط إذا ساءت الحالة.", en: "Your GP within 48 h if pregnant, elderly or chronically ill; otherwise only if it gets worse." },
    exams: [
      { fr: "Test rapide grippe en cabinet, surtout pour les personnes à risque.", ar: "اختبار سريع للأنفلونزا في العيادة، خاصة للأشخاص المعرضين للخطر.", en: "Rapid flu test in the office, mainly for people at risk." },
      { fr: "Radio des poumons si essoufflement.", ar: "أشعة للرئتين عند ضيق التنفس.", en: "Chest X-ray if breathless." },
    ],
    questions: [
      { fr: "Suis-je une personne à risque qui devrait prendre un antiviral ?", ar: "هل أنا من الأشخاص المعرضين للخطر الذين يحتاجون مضاداً للفيروسات؟", en: "Am I at risk and should I take an antiviral?" },
      { fr: "Combien de temps dois-je rester chez moi ?", ar: "كم من الوقت يجب أن أبقى في البيت؟", en: "How long should I stay home?" },
      { fr: "Dois-je me faire vacciner chaque année ?", ar: "هل يجب أن أتلقح كل سنة؟", en: "Should I get vaccinated every year?" },
    ],
    warning: {
      fr: "essoufflement, douleur dans la poitrine, fièvre qui remonte après s'être améliorée, confusion, impossibilité de boire, ou grippe chez un bébé de moins de 6 mois.",
      ar: "ضيق في التنفس، ألم في الصدر، حمى تعود بعد التحسن، تشوش، عدم القدرة على الشرب، أو أنفلونزا عند رضيع أقل من 6 أشهر.",
      en: "breathlessness, chest pain, fever rising again after improving, confusion, unable to drink, or flu in a baby under 6 months.",
    },
    sources: [OMS_GRIPPE],
  },
  gout: {
    summary: {
      fr: "La perte du goût ou de l'odorat accompagne souvent un rhume, une sinusite ou la Covid-19. Elle revient en général en quelques semaines, parfois plus lentement.",
      ar: "فقدان حاسة الذوق أو الشم يصاحب غالباً الزكام أو التهاب الجيوب الأنفية أو كوفيد-19. يعود عادة خلال أسابيع، وأحياناً ببطء أكثر.",
      en: "Loss of taste or smell often goes with a cold, sinusitis or Covid-19. It usually returns within a few weeks, sometimes more slowly.",
    },
    explanation: [
      { fr: "Quand le nez est bouché, les odeurs n'atteignent plus les capteurs : le goût semble disparaître aussi, car il dépend de l'odorat.", ar: "عندما ينسد الأنف، لا تصل الروائح إلى المستقبلات، فيبدو أن الذوق يختفي أيضاً لأنه يعتمد على الشم.", en: "When the nose is blocked, smells no longer reach the sensors: taste seems to vanish too, because it depends on smell." },
      { fr: "Avec la Covid-19, l'odorat peut disparaître sans nez bouché. Il revient chez 9 personnes sur 10 en moins de 2 mois.", ar: "مع كوفيد-19، قد يختفي الشم دون انسداد الأنف. يعود عند 9 من كل 10 أشخاص في أقل من شهرين.", en: "With Covid-19, smell can disappear without a blocked nose. It returns in 9 out of 10 people within 2 months." },
      { fr: "Une perte d'odorat qui dure plus de 3 mois mérite un avis ORL et parfois une rééducation olfactive.", ar: "فقدان الشم الذي يستمر أكثر من 3 أشهر يستدعي رأي طبيب الأنف والأذن والحنجرة وأحياناً تدريب الشم.", en: "Loss of smell lasting more than 3 months deserves an ENT opinion and sometimes smell training." },
    ],
    meanwhile: [
      { fr: "Lavez le nez au sérum physiologique.", ar: "اغسل الأنف بالمحلول الملحي.", en: "Rinse the nose with saline." },
      { fr: "Rééducation olfactive : sentez chaque jour 4 odeurs fortes (citron, clou de girofle, rose, eucalyptus) pendant 20 secondes chacune.", ar: "تدريب الشم: شمّ كل يوم 4 روائح قوية (ليمون، قرنفل، ورد، أوكالبتوس) 20 ثانية لكل واحدة.", en: "Smell training: sniff 4 strong scents daily (lemon, clove, rose, eucalyptus) for 20 seconds each." },
      { fr: "Vérifiez les dates de péremption des aliments et les fuites de gaz, car vous ne les sentirez pas.", ar: "تحقق من تواريخ صلاحية الأطعمة وتسرب الغاز لأنك لن تشمها.", en: "Check food expiry dates and gas leaks, since you won't smell them." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste, puis un ORL si ça dure plus de 3 mois.", ar: "طبيبك العام، ثم طبيب الأنف والأذن والحنجرة إذا استمر أكثر من 3 أشهر.", en: "Your GP, then an ENT specialist if it lasts more than 3 months." },
    exams: [
      { fr: "Test Covid si c'est récent.", ar: "اختبار كوفيد إذا كان حديثاً.", en: "Covid test if recent." },
      { fr: "Examen du nez par l'ORL (endoscopie) si ça persiste.", ar: "فحص الأنف بالمنظار عند الأخصائي إذا استمر.", en: "Nasal endoscopy by the ENT if it persists." },
    ],
    questions: [
      { fr: "Est-ce lié à un virus ou à une sinusite chronique ?", ar: "هل هو مرتبط بفيروس أم بالتهاب مزمن في الجيوب الأنفية؟", en: "Is it linked to a virus or chronic sinusitis?" },
      { fr: "Combien de temps avant que ça revienne ?", ar: "كم من الوقت قبل أن تعود الحاسة؟", en: "How long before it comes back?" },
      { fr: "La rééducation olfactive peut-elle m'aider ?", ar: "هل يمكن لتدريب الشم مساعدتي؟", en: "Can smell training help me?" },
    ],
    warning: {
      fr: "perte d'odorat brutale avec mal de tête violent, trouble de la vue ou faiblesse d'un côté du corps, ou saignements de nez répétés d'un seul côté.",
      ar: "فقدان مفاجئ للشم مع صداع عنيف أو اضطراب في الرؤية أو ضعف في جهة من الجسم، أو نزيف متكرر من جهة واحدة من الأنف.",
      en: "sudden loss of smell with a violent headache, vision problems or weakness on one side of the body, or repeated nosebleeds from one side.",
    },
    sources: [AMELI_RHUME],
  },
};
