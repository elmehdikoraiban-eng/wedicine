import type { ThemeFiches } from "../types";

const AMELI_RHINITE = { label: "Ameli, Rhinite allergique", url: "https://www.ameli.fr/assure/sante/themes/rhinite-allergique" };
const AMELI_CONJONCTIVITE = { label: "Ameli, Conjonctivite", url: "https://www.ameli.fr/assure/sante/themes/conjonctivite" };
const AMELI_URTICAIRE = { label: "Ameli, Urticaire", url: "https://www.ameli.fr/assure/sante/themes/urticaire" };
const AMELI_ALIMENTAIRE = { label: "Ameli, Allergie alimentaire", url: "https://www.ameli.fr/assure/sante/themes/allergie-alimentaire" };

const RED_ALLERGIE = {
  fr: "gonflement des lèvres, de la langue ou de la gorge, difficulté à respirer ou à avaler, voix qui change, malaise ou vertiges après un aliment, une piqûre ou un médicament : appelez le 141 (SAMU) immédiatement.",
  ar: "تورّم الشفتين أو اللسان أو الحلق، صعوبة في التنفس أو البلع، تغيّر الصوت، إغماء أو دوخة بعد طعام أو لسعة أو دواء: اتصل بـ 141 (الإسعاف الطبي) فوراً.",
  en: "swelling of lips, tongue or throat, difficulty breathing or swallowing, a changing voice, fainting or dizziness after a food, a sting or a medicine: call 141 (SAMU) immediately.",
};

export const allergie: ThemeFiches = {
  nez: {
    summary: {
      fr: "Éternuements en salves, nez qui coule clair, démangeaisons du nez et du palais, souvent avec les yeux qui pleurent : c'est une rhinite allergique (le « rhume des foins »). Elle n'est pas grave mais gâche la vie et se soigne bien avec des traitements simples.",
      ar: "عطس متتابع، سيلان أنف شفاف، حكة في الأنف والحنك، غالباً مع دموع في العينين: هذا التهاب أنف تحسسي («حمى القش»). ليس خطيراً لكنه يفسد الحياة اليومية ويُعالج جيداً بعلاجات بسيطة.",
      en: "Bursts of sneezing, a clear runny nose, itchy nose and palate, often with watery eyes: this is allergic rhinitis (\"hay fever\"). It is not serious but spoils daily life and responds well to simple treatments.",
    },
    explanation: [
      { fr: "Le système immunitaire réagit de façon exagérée à des substances inoffensives : pollens (printemps, été), acariens de la poussière (toute l'année, pire le matin), poils d'animaux, moisissures.", ar: "يبالغ الجهاز المناعي في رد فعله تجاه مواد غير ضارة: حبوب اللقاح (الربيع، الصيف)، عث الغبار (طوال السنة، أسوأ في الصباح)، شعر الحيوانات، العفن.", en: "The immune system overreacts to harmless substances: pollens (spring, summer), house dust mites (all year, worse in the morning), animal hair, moulds." },
      { fr: "Différence avec un rhume : pas de fièvre, écoulement toujours clair, démangeaisons, et ça dure des semaines ou revient chaque année à la même saison.", ar: "الفرق مع الزكام: لا حمى، إفرازات شفافة دائماً، حكة، ويستمر أسابيع أو يعود كل سنة في الموسم نفسه.", en: "Difference from a cold: no fever, always clear discharge, itching, and it lasts weeks or comes back every year in the same season." },
      { fr: "Une rhinite allergique mal contrôlée favorise l'asthme, surtout chez l'enfant. La traiter protège les bronches.", ar: "التهاب الأنف التحسسي غير المضبوط يشجع على الربو، خاصة عند الطفل. علاجه يحمي الشعب الهوائية.", en: "Poorly controlled allergic rhinitis encourages asthma, especially in children. Treating it protects the airways." },
    ],
    meanwhile: [
      { fr: "Lavage du nez au sérum physiologique matin et soir.", ar: "اغسل الأنف بالمحلول الملحي صباحاً ومساءً.", en: "Rinse your nose with saline morning and evening." },
      { fr: "Antihistaminique en comprimé (cétirizine, loratadine) disponible en pharmacie, de préférence le soir.", ar: "مضاد هيستامين على شكل أقراص (سيتيريزين، لوراتادين) متوفر في الصيدلية، يفضَّل في المساء.", en: "Antihistamine tablets (cetirizine, loratadine) from the pharmacy, preferably in the evening." },
      { fr: "Pollens : fenêtres fermées en journée, douche et cheveux lavés le soir, linge séché à l'intérieur.", ar: "حبوب اللقاح: نوافذ مغلقة خلال النهار، استحمام وغسل الشعر في المساء، تجفيف الغسيل داخل المنزل.", en: "Pollens: windows closed in daytime, shower and wash your hair in the evening, dry laundry indoors." },
      { fr: "Acariens : housse anti-acariens sur le matelas, draps lavés à 60 °C, chambre aérée et peu chauffée.", ar: "عث الغبار: غطاء مضاد للعث على الفراش، غسل الملاءات على 60 درجة، تهوية الغرفة وتقليل التدفئة.", en: "Dust mites: anti-mite mattress cover, sheets washed at 60 °C, a well-aired and cool bedroom." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste si les symptômes gênent le sommeil ou le travail malgré l'antihistaminique ; un allergologue pour identifier l'allergène et discuter d'une désensibilisation.", ar: "طبيبك العام إذا أعاقت الأعراض النوم أو العمل رغم مضاد الهيستامين؛ وطبيب الحساسية لتحديد مسبب الحساسية ومناقشة العلاج المناعي.", en: "Your GP if symptoms disturb sleep or work despite the antihistamine; an allergist to identify the allergen and discuss desensitisation." },
    exams: [
      { fr: "Tests cutanés (prick-tests) chez l'allergologue : résultat en 20 minutes.", ar: "اختبارات جلدية عند طبيب الحساسية، والنتيجة خلال 20 دقيقة.", en: "Skin prick tests at the allergist: result in 20 minutes." },
      { fr: "Dosage sanguin des IgE spécifiques si les tests cutanés ne sont pas possibles.", ar: "تحليل دم للأجسام المضادة النوعية إذا لم تكن الاختبارات الجلدية ممكنة.", en: "Blood test for specific IgE if skin tests aren't possible." },
    ],
    questions: [
      { fr: "À quoi suis-je allergique, et comment l'éviter ?", ar: "ما الذي أعاني حساسية منه، وكيف أتجنبه؟", en: "What am I allergic to, and how can I avoid it?" },
      { fr: "Puis-je prendre un antihistaminique tous les jours pendant des mois ?", ar: "هل يمكنني تناول مضاد الهيستامين كل يوم لأشهر؟", en: "Can I take an antihistamine every day for months?" },
      { fr: "Un spray nasal à la cortisone est-il utile dans mon cas ?", ar: "هل بخاخ الأنف بالكورتيزون مفيد في حالتي؟", en: "Is a steroid nasal spray useful in my case?" },
      { fr: "La désensibilisation est-elle possible pour moi ?", ar: "هل العلاج المناعي ممكن بالنسبة لي؟", en: "Is desensitisation possible for me?" },
    ],
    warning: RED_ALLERGIE,
    sources: [AMELI_RHINITE],
  },
  yeux: {
    summary: {
      fr: "Des yeux rouges, qui grattent et qui pleurent, des deux côtés, sans pus ni douleur, sont une conjonctivite allergique. Elle accompagne souvent la rhinite. Désagréable mais sans danger pour la vue, elle se calme avec des larmes artificielles et un collyre antiallergique.",
      ar: "عينان حمراوان مع حكة ودموع، في الجهتين، بدون قيح أو ألم: هذا التهاب ملتحمة تحسسي. غالباً يرافق التهاب الأنف. مزعج لكنه غير خطير على البصر، ويهدأ بالدموع الاصطناعية وقطرة مضادة للحساسية.",
      en: "Red, itchy, watery eyes, on both sides, without pus or pain, are allergic conjunctivitis. It often comes with rhinitis. Unpleasant but harmless for your sight, it settles with artificial tears and an anti-allergy eye drop.",
    },
    explanation: [
      { fr: "La démangeaison est le signe clé : une conjonctivite qui gratte est allergique, une conjonctivite qui colle avec du pus est infectieuse.", ar: "الحكة هي العلامة الأساسية: التهاب الملتحمة الذي يسبب حكة تحسسي، أما الذي يلتصق مع قيح فهو معدٍ.", en: "Itching is the key sign: an itchy conjunctivitis is allergic, a sticky one with pus is infectious." },
      { fr: "Se frotter les yeux aggrave la réaction en libérant davantage d'histamine. Le froid soulage.", ar: "فرك العينين يفاقم رد الفعل بإفراز المزيد من الهيستامين. البرودة تريح.", en: "Rubbing your eyes worsens the reaction by releasing more histamine. Cold soothes." },
      { fr: "Les lentilles de contact retiennent les pollens : préférez les lunettes en période de crise.", ar: "العدسات اللاصقة تحتفظ بحبوب اللقاح، فافضل النظارات في فترة الأزمة.", en: "Contact lenses trap pollens: prefer glasses during a flare." },
    ],
    meanwhile: [
      { fr: "Compresses froides sur les yeux fermés, 5 minutes plusieurs fois par jour.", ar: "كمادات باردة على العينين المغلقتين، 5 دقائق عدة مرات في اليوم.", en: "Cold compresses on closed eyes, 5 minutes several times a day." },
      { fr: "Larmes artificielles en dosettes pour rincer les pollens, autant de fois que nécessaire.", ar: "دموع اصطناعية في عبوات فردية لشطف حبوب اللقاح، كلما لزم الأمر.", en: "Artificial tears in single doses to rinse away pollens, as often as needed." },
      { fr: "Collyre antihistaminique en pharmacie si les larmes artificielles ne suffisent pas.", ar: "قطرة مضادة للهيستامين من الصيدلية إذا لم تكفِ الدموع الاصطناعية.", en: "Antihistamine eye drops from the pharmacy if artificial tears aren't enough." },
      { fr: "Lunettes de soleil dehors, pas de frottement, pas de maquillage pendant la crise.", ar: "نظارات شمسية في الخارج، لا فرك، ولا مكياج أثناء النوبة.", en: "Sunglasses outdoors, no rubbing, no make-up during the flare." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste ou un ophtalmologue si un seul œil est touché, si la vision baisse, si la lumière fait mal ou si ça ne passe pas en une semaine.", ar: "طبيبك العام أو طبيب العيون إذا كانت عين واحدة فقط مصابة، أو ضعف البصر، أو آلمك الضوء، أو لم يزل خلال أسبوع.", en: "Your GP or an eye doctor if only one eye is affected, if vision drops, if light hurts, or if it doesn't clear in a week." },
    exams: [
      { fr: "Examen à la lampe à fente chez l'ophtalmologue si doute.", ar: "فحص بالمصباح الشقّي عند طبيب العيون عند الشك.", en: "Slit-lamp examination at the eye doctor if in doubt." },
      { fr: "Tests allergiques si les crises reviennent chaque année.", ar: "اختبارات الحساسية إذا تكررت النوبات كل سنة.", en: "Allergy tests if flares come back every year." },
    ],
    questions: [
      { fr: "Est-ce bien une allergie et pas une infection ?", ar: "هل هي حساسية فعلاً وليست عدوى؟", en: "Is it really an allergy and not an infection?" },
      { fr: "Quel collyre puis-je utiliser longtemps sans risque ?", ar: "أي قطرة يمكنني استعمالها طويلاً دون خطر؟", en: "Which eye drops can I use long-term safely?" },
      { fr: "Puis-je continuer à porter mes lentilles ?", ar: "هل يمكنني مواصلة ارتداء عدساتي؟", en: "Can I keep wearing my contact lenses?" },
    ],
    warning: {
      fr: "baisse de la vision, douleur vive dans l'œil, un seul œil très rouge, gêne forte à la lumière, ou œil rouge après un choc : consultez le jour même.",
      ar: "ضعف في البصر، ألم حاد في العين، عين واحدة شديدة الاحمرار، انزعاج شديد من الضوء، أو عين حمراء بعد صدمة: استشر في اليوم نفسه.",
      en: "drop in vision, sharp eye pain, one very red eye, strong discomfort in light, or a red eye after a blow: see a doctor the same day.",
    },
    sources: [AMELI_CONJONCTIVITE, AMELI_RHINITE],
  },
  peau: {
    summary: {
      fr: "Des plaques rouges en relief qui grattent fort, qui changent de place en quelques heures et disparaissent sans trace, c'est de l'urticaire. Dans la grande majorité des cas, on ne retrouve pas d'allergie : c'est une réaction de la peau au stress, à une infection, à un médicament ou sans cause. Elle passe en quelques jours.",
      ar: "بقع حمراء بارزة تسبب حكة شديدة، تغيّر مكانها في بضع ساعات وتختفي دون أثر: هذا شرى. في الغالبية العظمى من الحالات لا نجد حساسية؛ إنه رد فعل من الجلد تجاه التوتر أو عدوى أو دواء أو بدون سبب. يزول في بضعة أيام.",
      en: "Raised red patches that itch intensely, move around within hours and vanish without a trace are urticaria (hives). In the vast majority of cases no allergy is found: it is a skin reaction to stress, an infection, a medicine, or without cause. It clears in a few days.",
    },
    explanation: [
      { fr: "Si les plaques restent au même endroit plus de 24 heures, sont sèches, squameuses ou dans les plis, il s'agit plutôt d'un eczéma, qui se traite différemment (crèmes hydratantes et cortisone locale).", ar: "إذا بقيت البقع في المكان نفسه أكثر من 24 ساعة، أو كانت جافة أو متقشرة أو في الثنيات، فالأرجح أنها إكزيما تُعالج بشكل مختلف (كريمات مرطبة وكورتيزون موضعي).", en: "If the patches stay in one place for more than 24 hours, are dry, scaly or in skin folds, it is more likely eczema, treated differently (moisturisers and local steroid cream)." },
      { fr: "L'urticaire aiguë dure moins de 6 semaines et ne nécessite en général aucun bilan. Au-delà, on parle d'urticaire chronique : elle est pénible mais reste bénigne et n'est presque jamais allergique.", ar: "الشرى الحاد يستمر أقل من 6 أسابيع ولا يحتاج عموماً إلى أي فحص. بعد ذلك نتحدث عن شرى مزمن: مزعج لكنه حميد ونادراً ما يكون تحسسياً.", en: "Acute urticaria lasts under 6 weeks and usually needs no tests. Beyond that it is called chronic urticaria: troublesome but harmless, and almost never allergic." },
      { fr: "Chaleur, frottement, douche chaude et anti-inflammatoires (ibuprofène, aspirine) aggravent les poussées.", ar: "الحرارة والاحتكاك والدش الساخن ومضادات الالتهاب (إيبوبروفين، أسبرين) تفاقم النوبات.", en: "Heat, friction, hot showers and anti-inflammatories (ibuprofen, aspirin) worsen flares." },
    ],
    meanwhile: [
      { fr: "Antihistaminique en comprimé une fois par jour, à poursuivre quelques jours après la disparition des plaques.", ar: "قرص مضاد هيستامين مرة في اليوم، مع المواصلة بضعة أيام بعد اختفاء البقع.", en: "One antihistamine tablet a day, continued for a few days after the patches disappear." },
      { fr: "Douche tiède, vêtements amples en coton, pas de grattage (ongles courts).", ar: "دش فاتر، ملابس قطنية واسعة، لا حكّ (أظافر قصيرة).", en: "Lukewarm shower, loose cotton clothes, no scratching (short nails)." },
      { fr: "Paracétamol plutôt qu'ibuprofène si vous avez besoin d'un antidouleur.", ar: "باراسيتامول بدلاً من إيبوبروفين إذا احتجت إلى مسكن.", en: "Paracetamol rather than ibuprofen if you need a painkiller." },
      { fr: "Photographiez les plaques : elles auront peut-être disparu au moment de la consultation.", ar: "صوّر البقع، فقد تكون اختفت وقت الاستشارة.", en: "Photograph the patches: they may have gone by the time of the appointment." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste si ça dure plus d'une semaine, revient souvent ou s'accompagne de fièvre ; un dermatologue ou un allergologue pour une urticaire chronique.", ar: "طبيبك العام إذا استمر أكثر من أسبوع، أو تكرر كثيراً، أو ترافق مع حمى؛ وطبيب الجلد أو الحساسية للشرى المزمن.", en: "Your GP if it lasts over a week, recurs often or comes with fever; a dermatologist or allergist for chronic urticaria." },
    exams: [
      { fr: "Aucun dans une urticaire aiguë isolée.", ar: "لا شيء في الشرى الحاد المعزول.", en: "None for isolated acute urticaria." },
      { fr: "Bilan sanguin simple (numération, inflammation, thyroïde) si urticaire chronique.", ar: "تحليل دم بسيط (تعداد الدم، الالتهاب، الغدة الدرقية) في الشرى المزمن.", en: "Simple blood tests (blood count, inflammation, thyroid) if chronic urticaria." },
      { fr: "Tests allergiques seulement si un déclencheur précis est suspecté (aliment, médicament, latex).", ar: "اختبارات الحساسية فقط إذا اشتُبه في محفز محدد (طعام، دواء، لاتكس).", en: "Allergy tests only if a specific trigger is suspected (food, medicine, latex)." },
    ],
    questions: [
      { fr: "Est-ce de l'urticaire ou de l'eczéma ?", ar: "هل هو شرى أم إكزيما؟", en: "Is it urticaria or eczema?" },
      { fr: "Un de mes médicaments peut-il en être la cause ?", ar: "هل يمكن أن يكون أحد أدويتي هو السبب؟", en: "Could one of my medicines be the cause?" },
      { fr: "Combien de temps dois-je prendre l'antihistaminique ?", ar: "كم من الوقت يجب أن أتناول مضاد الهيستامين؟", en: "How long should I take the antihistamine?" },
      { fr: "Faut-il faire un bilan allergique ?", ar: "هل يجب إجراء فحص الحساسية؟", en: "Should I have allergy tests?" },
    ],
    warning: RED_ALLERGIE,
    sources: [AMELI_URTICAIRE],
  },
  aliment: {
    summary: {
      fr: "Une réaction dans les 2 heures après un aliment (démangeaisons de la bouche, urticaire, vomissements, gonflement) évoque une allergie alimentaire. C'est la seule allergie qui peut mettre la vie en danger : il faut identifier l'aliment avec un allergologue et savoir quoi faire en cas de réaction forte.",
      ar: "رد فعل خلال ساعتين بعد تناول طعام (حكة في الفم، شرى، قيء، تورّم) يوحي بحساسية غذائية. هي الحساسية الوحيدة التي قد تهدد الحياة: يجب تحديد الطعام مع طبيب الحساسية ومعرفة ما يجب فعله عند رد فعل قوي.",
      en: "A reaction within 2 hours of a food (itchy mouth, hives, vomiting, swelling) suggests a food allergy. It is the only allergy that can be life-threatening: the food must be identified with an allergist and you must know what to do in case of a severe reaction.",
    },
    explanation: [
      { fr: "Aliments les plus souvent en cause : arachide, fruits à coque, œuf et lait (enfant), crustacés, poisson, blé, sésame. Beaucoup d'allergies de l'enfant au lait et à l'œuf disparaissent avant 6 ans.", ar: "الأطعمة الأكثر تسبباً: الفول السوداني، المكسرات، البيض والحليب (عند الطفل)، القشريات، السمك، القمح، السمسم. كثير من حساسيات الطفل تجاه الحليب والبيض تختفي قبل سن 6 سنوات.", en: "Foods most often involved: peanut, tree nuts, egg and milk (children), shellfish, fish, wheat, sesame. Many childhood milk and egg allergies disappear before age 6." },
      { fr: "À distinguer d'une intolérance (lactose, gluten sans maladie cœliaque) qui donne des ballonnements et de la diarrhée quelques heures après, sans danger, et qui n'est pas une allergie.", ar: "يجب تمييزها عن عدم التحمل (اللاكتوز، الغلوتين بدون داء زلاقي) الذي يسبب انتفاخاً وإسهالاً بعد ساعات، وهو غير خطير وليس حساسية.", en: "To distinguish from an intolerance (lactose, gluten without coeliac disease) which gives bloating and diarrhoea a few hours later, is harmless, and is not an allergy." },
      { fr: "Ne supprimez pas des aliments au hasard, surtout chez l'enfant : l'éviction prolongée peut créer une vraie allergie et des carences. Le diagnostic doit être posé par un allergologue.", ar: "لا تحذف أطعمة عشوائياً، خاصة عند الطفل: الحذف المطوّل قد يخلق حساسية حقيقية ونقصاً غذائياً. يجب أن يضع طبيب الحساسية التشخيص.", en: "Don't cut out foods at random, especially in children: prolonged avoidance can create a real allergy and deficiencies. Diagnosis must be made by an allergist." },
    ],
    meanwhile: [
      { fr: "Notez précisément ce qui a été mangé, l'heure, les symptômes et leur durée. Gardez l'emballage du produit.", ar: "سجّل بدقة ما تم تناوله، والوقت، والأعراض ومدتها. احتفظ بغلاف المنتج.", en: "Write down exactly what was eaten, the time, the symptoms and how long they lasted. Keep the product packaging." },
      { fr: "Évitez l'aliment suspect en attendant la consultation, mais ne retirez pas d'autres aliments sans avis médical.", ar: "تجنب الطعام المشتبه به في انتظار الاستشارة، لكن لا تحذف أطعمة أخرى دون رأي طبي.", en: "Avoid the suspected food until the appointment, but don't remove other foods without medical advice." },
      { fr: "Antihistaminique si urticaire ou démangeaisons isolées.", ar: "مضاد هيستامين عند الشرى أو الحكة المعزولة.", en: "Antihistamine if hives or isolated itching." },
      { fr: "Si gonflement du visage, gêne respiratoire ou malaise : 141 (SAMU) immédiatement, allongez la personne jambes surélevées.", ar: "عند تورّم الوجه أو ضيق التنفس أو الإغماء: 141 (الإسعاف الطبي) فوراً، وأرقد الشخص مع رفع الساقين.", en: "If face swelling, breathing difficulty or fainting: call 141 (SAMU) immediately, lay the person down with legs raised." },
    ],
    whichDoctor: { fr: "Un allergologue (pédiatre allergologue pour un enfant), via votre médecin généraliste. Toute réaction avec gonflement ou gêne respiratoire justifie une consultation rapide.", ar: "طبيب حساسية (طبيب أطفال مختص بالحساسية للطفل) عبر طبيبك العام. أي رد فعل مع تورّم أو ضيق تنفس يستوجب استشارة سريعة.", en: "An allergist (paediatric allergist for a child), via your GP. Any reaction with swelling or breathing difficulty warrants a prompt appointment." },
    exams: [
      { fr: "Tests cutanés avec les aliments suspects.", ar: "اختبارات جلدية مع الأطعمة المشتبه بها.", en: "Skin tests with the suspected foods." },
      { fr: "Dosage sanguin des IgE spécifiques.", ar: "تحليل دم للأجسام المضادة النوعية.", en: "Blood test for specific IgE." },
      { fr: "Test de provocation orale à l'hôpital, sous surveillance, pour confirmer ou lever une éviction.", ar: "اختبار تحريض فموي في المستشفى تحت المراقبة لتأكيد الحساسية أو إلغاء الحذف.", en: "Oral food challenge in hospital, under supervision, to confirm or lift an avoidance." },
    ],
    questions: [
      { fr: "Est-ce une allergie ou une intolérance ?", ar: "هل هي حساسية أم عدم تحمل؟", en: "Is it an allergy or an intolerance?" },
      { fr: "Dois-je avoir un stylo d'adrénaline sur moi ?", ar: "هل يجب أن أحمل قلم أدرينالين معي؟", en: "Should I carry an adrenaline pen?" },
      { fr: "Quels aliments ou traces dois-je éviter exactement ?", ar: "ما الأطعمة أو الآثار التي يجب أن أتجنبها بالضبط؟", en: "Which foods or traces exactly must I avoid?" },
      { fr: "Mon enfant va-t-il guérir de cette allergie ?", ar: "هل سيتعافى طفلي من هذه الحساسية؟", en: "Will my child outgrow this allergy?" },
    ],
    warning: RED_ALLERGIE,
    sources: [AMELI_ALIMENTAIRE],
  },
};
