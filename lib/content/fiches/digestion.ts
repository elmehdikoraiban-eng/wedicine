import type { ThemeFiches } from "../types";

const AMELI_RGO = { label: "Ameli, Reflux gastro-œsophagien", url: "https://www.ameli.fr/assure/sante/themes/reflux-gastro-oesophagien-adulte" };
const AMELI_DIARRHEE = { label: "Ameli, Diarrhée aiguë", url: "https://www.ameli.fr/assure/sante/themes/diarrhee-aigue-adulte" };
const AMELI_CONSTIPATION = { label: "Ameli, Constipation", url: "https://www.ameli.fr/assure/sante/themes/constipation-adulte" };
const AMELI_VENTRE = { label: "Ameli, Douleur abdominale", url: "https://www.ameli.fr/assure/sante/themes/douleur-abdominale-adulte" };

export const digestion: ThemeFiches = {
  brulures: {
    summary: {
      fr: "Les brûlures d'estomac qui remontent vers la gorge sont un reflux acide, très fréquent et sans gravité au début. Repas copieux, café, tabac, surpoids et position allongée après manger l'entretiennent. Des brûlures qui durent plus de 3 semaines ou gênent pour avaler doivent être examinées.",
      ar: "حرقة المعدة التي تصعد نحو الحلق هي ارتجاع حمضي، شائع جداً وغير خطير في البداية. الوجبات الدسمة والقهوة والتدخين وزيادة الوزن والاستلقاء بعد الأكل تزيده. الحرقة التي تستمر أكثر من 3 أسابيع أو تعيق البلع يجب فحصها.",
      en: "Heartburn rising towards the throat is acid reflux, very common and harmless at first. Big meals, coffee, smoking, excess weight and lying down after eating keep it going. Heartburn lasting over 3 weeks or making swallowing hard must be examined.",
    },
    explanation: [
      { fr: "L'acide de l'estomac remonte dans l'œsophage quand la valve entre les deux ferme mal. Ça brûle derrière le sternum, surtout après les repas et la nuit.", ar: "يصعد حمض المعدة إلى المريء عندما لا يغلق الصمام بينهما جيداً. يسبب حرقة خلف عظم الصدر، خاصة بعد الوجبات وفي الليل.", en: "Stomach acid rises into the oesophagus when the valve between them closes poorly. It burns behind the breastbone, mainly after meals and at night." },
      { fr: "Chez l'adulte, une infection de l'estomac par Helicobacter pylori est fréquente au Maroc et peut donner des brûlures et un ulcère ; elle se traite par antibiotiques.", ar: "عند البالغين، عدوى المعدة ببكتيريا هيليكوباكتر بيلوري شائعة في المغرب وقد تسبب حرقة وقرحة، وتُعالج بالمضادات الحيوية.", en: "In adults, stomach infection with Helicobacter pylori is common in Morocco and can cause burning and ulcers; it is treated with antibiotics." },
      { fr: "Les médicaments anti-acides soulagent vite mais ne doivent pas être pris des mois sans avis : ils masquent parfois une autre cause.", ar: "مضادات الحموضة تريح بسرعة لكن لا يجب تناولها لأشهر دون استشارة، فقد تخفي سبباً آخر.", en: "Antacid medicines relieve quickly but shouldn't be taken for months without advice: they sometimes hide another cause." },
    ],
    meanwhile: [
      { fr: "Dînez léger, au moins 2 à 3 heures avant de vous coucher, et surélevez la tête du lit de 10 cm.", ar: "تناول عشاءً خفيفاً قبل النوم بساعتين أو ثلاث على الأقل، وارفع رأس السرير 10 سم.", en: "Eat a light dinner at least 2 to 3 hours before bed, and raise the head of the bed by 10 cm." },
      { fr: "Réduisez café, thé fort, épices, fritures, menthe, chocolat et boissons gazeuses.", ar: "قلل القهوة والشاي القوي والتوابل والمقليات والنعناع والشوكولاتة والمشروبات الغازية.", en: "Cut down coffee, strong tea, spices, fried food, mint, chocolate and fizzy drinks." },
      { fr: "Évitez le tabac et les vêtements serrés à la taille.", ar: "تجنب التدخين والملابس الضيقة عند الخصر.", en: "Avoid smoking and tight clothes at the waist." },
      { fr: "Évitez l'ibuprofène et l'aspirine, qui agressent l'estomac.", ar: "تجنب الإيبوبروفين والأسبرين لأنهما يؤذيان المعدة.", en: "Avoid ibuprofen and aspirin, which irritate the stomach." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste si ça dure plus de 3 semaines ; un gastro-entérologue si une fibroscopie est nécessaire.", ar: "طبيبك العام إذا استمر أكثر من 3 أسابيع؛ وطبيب الجهاز الهضمي إذا لزم التنظير.", en: "Your GP if it lasts more than 3 weeks; a gastroenterologist if an endoscopy is needed." },
    exams: [
      { fr: "Souvent aucun au début : un traitement d'essai de 4 semaines suffit.", ar: "غالباً لا شيء في البداية، ويكفي علاج تجريبي لمدة 4 أسابيع.", en: "Often none at first: a 4-week trial treatment is enough." },
      { fr: "Recherche d'Helicobacter pylori (test respiratoire, selles ou biopsie).", ar: "البحث عن هيليكوباكتر بيلوري (اختبار التنفس أو البراز أو الخزعة).", en: "Helicobacter pylori test (breath, stool or biopsy)." },
      { fr: "Fibroscopie si plus de 50 ans, difficulté à avaler, amaigrissement ou anémie.", ar: "تنظير إذا تجاوزت 50 سنة، أو صعوبة في البلع، أو نقص الوزن، أو فقر الدم.", en: "Endoscopy if over 50, difficulty swallowing, weight loss or anaemia." },
    ],
    questions: [
      { fr: "Est-ce un reflux, une gastrite ou un ulcère ?", ar: "هل هو ارتجاع أم التهاب معدة أم قرحة؟", en: "Is it reflux, gastritis or an ulcer?" },
      { fr: "Faut-il rechercher Helicobacter pylori ?", ar: "هل يجب البحث عن هيليكوباكتر بيلوري؟", en: "Should I be tested for Helicobacter pylori?" },
      { fr: "Pendant combien de temps prendre le traitement anti-acide ?", ar: "كم مدة تناول علاج الحموضة؟", en: "How long should I take the antacid treatment?" },
      { fr: "Ai-je besoin d'une fibroscopie ?", ar: "هل أحتاج تنظيراً؟", en: "Do I need an endoscopy?" },
    ],
    warning: {
      fr: "vomissements de sang ou noirs, selles noires, difficulté à avaler, perte de poids, douleur dans la poitrine à l'effort ou qui irradie dans le bras.",
      ar: "قيء دموي أو أسود، براز أسود، صعوبة في البلع، فقدان الوزن، ألم في الصدر عند المجهود أو يمتد إلى الذراع.",
      en: "vomiting blood or black material, black stools, difficulty swallowing, weight loss, chest pain on exertion or spreading to the arm.",
    },
    sources: [AMELI_RGO],
  },
  ballonnements: {
    summary: {
      fr: "Les ballonnements sont presque toujours bénins : repas trop rapides, aliments qui fermentent, constipation, stress ou intestin irritable. Ils deviennent un motif de consultation s'ils s'accompagnent de perte de poids, de sang ou s'ils apparaissent après 50 ans.",
      ar: "الانتفاخ حميد في الغالب: وجبات سريعة، أطعمة تتخمر، إمساك، توتر أو القولون العصبي. يصبح سبباً للاستشارة إذا صاحبه فقدان وزن أو دم أو ظهر بعد 50 سنة.",
      en: "Bloating is almost always harmless: eating too fast, fermenting foods, constipation, stress or irritable bowel. It becomes a reason to consult if it comes with weight loss, blood, or starts after 50.",
    },
    explanation: [
      { fr: "Les légumes secs, le chou, l'oignon, le pain frais, les boissons gazeuses et les chewing-gums apportent de l'air ou des sucres qui fermentent.", ar: "البقوليات والملفوف والبصل والخبز الطازج والمشروبات الغازية والعلكة تجلب الهواء أو السكريات التي تتخمر.", en: "Pulses, cabbage, onion, fresh bread, fizzy drinks and chewing gum bring air or sugars that ferment." },
      { fr: "Le syndrome de l'intestin irritable associe ballonnements, douleurs et transit perturbé depuis des mois, sans lésion : il est fréquent et se gère par l'alimentation et le stress.", ar: "متلازمة القولون العصبي تجمع بين الانتفاخ والألم واضطراب الإخراج منذ أشهر دون آفة، وهي شائعة وتُدار بالتغذية وضبط التوتر.", en: "Irritable bowel syndrome combines bloating, pain and disturbed bowel habit for months without any lesion: it is common and managed through diet and stress." },
      { fr: "Une intolérance au lactose (lait) est aussi une cause fréquente : testez 2 semaines sans produits laitiers.", ar: "عدم تحمل اللاكتوز (الحليب) سبب شائع أيضاً، فجرّب أسبوعين بدون منتجات الألبان.", en: "Lactose (milk) intolerance is also a common cause: try 2 weeks without dairy." },
    ],
    meanwhile: [
      { fr: "Mangez lentement, assis, en mâchant bien, sans parler la bouche pleine.", ar: "كُل ببطء، جالساً، وامضغ جيداً، دون الكلام والفم ممتلئ.", en: "Eat slowly, seated, chewing well, without talking with your mouth full." },
      { fr: "Supprimez les boissons gazeuses et les chewing-gums, limitez les légumes secs le temps que ça se calme.", ar: "احذف المشروبات الغازية والعلكة، وقلل البقوليات حتى يهدأ الوضع.", en: "Cut fizzy drinks and chewing gum, limit pulses until it settles." },
      { fr: "Marchez 15 minutes après les repas.", ar: "امشِ 15 دقيقة بعد الوجبات.", en: "Walk 15 minutes after meals." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste si ça dure plus d'un mois ou s'accompagne d'autres signes.", ar: "طبيبك العام إذا استمر أكثر من شهر أو صاحبته علامات أخرى.", en: "Your GP if it lasts more than a month or comes with other signs." },
    exams: [
      { fr: "Souvent aucun.", ar: "غالباً لا شيء.", en: "Often none." },
      { fr: "Prise de sang (anémie, inflammation, maladie cœliaque) si persistance.", ar: "تحليل دم (فقر الدم، الالتهاب، الداء البطني) عند الاستمرار.", en: "Blood test (anaemia, inflammation, coeliac disease) if persistent." },
      { fr: "Coloscopie après 50 ans ou en cas de sang dans les selles.", ar: "تنظير القولون بعد 50 سنة أو عند وجود دم في البراز.", en: "Colonoscopy after 50 or if blood in stools." },
    ],
    questions: [
      { fr: "S'agit-il d'un intestin irritable ?", ar: "هل هو القولون العصبي؟", en: "Is it irritable bowel?" },
      { fr: "Quels aliments dois-je tester d'éviter ?", ar: "ما الأطعمة التي يجب أن أجرب تجنبها؟", en: "Which foods should I try avoiding?" },
      { fr: "Faut-il chercher une intolérance au lactose ou au gluten ?", ar: "هل يجب البحث عن عدم تحمل اللاكتوز أو الغلوتين؟", en: "Should I be tested for lactose or gluten intolerance?" },
    ],
    warning: {
      fr: "ventre dur et très douloureux, arrêt des gaz et des selles avec vomissements, sang dans les selles, perte de poids, ou ballonnement qui apparaît pour la première fois après 50 ans.",
      ar: "بطن صلب ومؤلم جداً، توقف الغازات والبراز مع قيء، دم في البراز، فقدان الوزن، أو انتفاخ يظهر لأول مرة بعد 50 سنة.",
      en: "hard, very painful belly, no wind or stools with vomiting, blood in stools, weight loss, or bloating appearing for the first time after 50.",
    },
    sources: [{ label: "Ameli, Syndrome de l'intestin irritable", url: "https://www.ameli.fr/assure/sante/themes/syndrome-intestin-irritable" }],
  },
  diarrhee: {
    summary: {
      fr: "Une diarrhée aiguë est le plus souvent une gastro-entérite virale ou une intoxication alimentaire qui passe en 2 à 3 jours. Le seul vrai risque est la déshydratation : boire est le traitement.",
      ar: "الإسهال الحاد هو غالباً التهاب معوي فيروسي أو تسمم غذائي يزول خلال يومين أو ثلاثة. الخطر الحقيقي الوحيد هو الجفاف، والشرب هو العلاج.",
      en: "Acute diarrhoea is most often a viral stomach bug or food poisoning that clears in 2 to 3 days. The only real risk is dehydration: drinking is the treatment.",
    },
    explanation: [
      { fr: "Les virus se transmettent par les mains, l'eau et les aliments mal lavés. L'été, les aliments laissés au chaud sont la cause classique.", ar: "تنتقل الفيروسات عبر اليدين والماء والأطعمة غير المغسولة جيداً. في الصيف، الأطعمة المتروكة في الحر هي السبب الكلاسيكي.", en: "Viruses spread via hands, water and poorly washed food. In summer, food left in the heat is the classic cause." },
      { fr: "Les solutions de réhydratation orale (SRO) en pharmacie remplacent l'eau et les sels perdus ; c'est le meilleur traitement pour les enfants.", ar: "محاليل الإماهة الفموية من الصيدلية تعوّض الماء والأملاح المفقودة، وهي أفضل علاج للأطفال.", en: "Oral rehydration solutions (ORS) from the pharmacy replace lost water and salts; they are the best treatment for children." },
      { fr: "Une diarrhée qui dure plus de 2 semaines est dite chronique et a d'autres causes (intestin irritable, intolérance, parasites, maladie inflammatoire) à explorer.", ar: "الإسهال الذي يستمر أكثر من أسبوعين يسمى مزمناً وله أسباب أخرى (القولون العصبي، عدم التحمل، الطفيليات، الأمراض الالتهابية) يجب استكشافها.", en: "Diarrhoea lasting more than 2 weeks is called chronic and has other causes (irritable bowel, intolerance, parasites, inflammatory disease) to investigate." },
    ],
    meanwhile: [
      { fr: "Buvez souvent, par petites quantités : SRO, eau, bouillon salé, tisane sucrée.", ar: "اشرب كثيراً بكميات صغيرة: محلول الإماهة، ماء، مرق مملح، أعشاب محلاة.", en: "Drink often in small amounts: ORS, water, salted broth, sweetened herbal tea." },
      { fr: "Mangez dès que possible : riz, pâtes, carottes cuites, bananes, pommes cuites.", ar: "كُل في أقرب وقت: أرز، معكرونة، جزر مطبوخ، موز، تفاح مطبوخ.", en: "Eat as soon as you can: rice, pasta, cooked carrots, bananas, cooked apples." },
      { fr: "Lavez-vous les mains avec du savon après les toilettes et avant de préparer à manger.", ar: "اغسل يديك بالصابون بعد المرحاض وقبل تحضير الطعام.", en: "Wash your hands with soap after the toilet and before preparing food." },
      { fr: "Pas d'antidiarrhéique s'il y a de la fièvre ou du sang.", ar: "لا دواء موقف للإسهال إذا كانت هناك حمى أو دم.", en: "No anti-diarrhoea medicine if there is fever or blood." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste si ça dure plus de 3 jours, le jour même pour un bébé, une personne âgée ou une femme enceinte.", ar: "طبيبك العام إذا استمر أكثر من 3 أيام، وفي نفس اليوم للرضيع أو المسن أو الحامل.", en: "Your GP if it lasts more than 3 days, the same day for a baby, an elderly person or a pregnant woman." },
    exams: [
      { fr: "Aucun le plus souvent.", ar: "لا شيء في الغالب.", en: "None most of the time." },
      { fr: "Analyse des selles (coproculture, parasites) si sang, fièvre, voyage ou durée de plus de 2 semaines.", ar: "تحليل البراز (زرع، طفيليات) عند وجود دم أو حمى أو سفر أو مدة تتجاوز أسبوعين.", en: "Stool test (culture, parasites) if blood, fever, travel or lasting over 2 weeks." },
    ],
    questions: [
      { fr: "Faut-il une analyse des selles ?", ar: "هل أحتاج تحليل براز؟", en: "Do I need a stool test?" },
      { fr: "Comment savoir si mon enfant est déshydraté ?", ar: "كيف أعرف إن كان طفلي مصاباً بالجفاف؟", en: "How do I know if my child is dehydrated?" },
      { fr: "Puis-je prendre un médicament contre la diarrhée ?", ar: "هل يمكنني تناول دواء ضد الإسهال؟", en: "Can I take an anti-diarrhoea medicine?" },
    ],
    warning: {
      fr: "sang dans les selles, fièvre élevée, plus de 6 selles par jour, vomissements qui empêchent de boire, bouche sèche et urines rares, somnolence, ou diarrhée chez un bébé de moins de 6 mois.",
      ar: "دم في البراز، حمى مرتفعة، أكثر من 6 مرات في اليوم، قيء يمنع الشرب، جفاف الفم وقلة البول، نعاس، أو إسهال عند رضيع أقل من 6 أشهر.",
      en: "blood in stools, high fever, more than 6 stools a day, vomiting that prevents drinking, dry mouth and little urine, drowsiness, or diarrhoea in a baby under 6 months.",
    },
    sources: [AMELI_DIARRHEE],
  },
  constipation: {
    summary: {
      fr: "La constipation (moins de 3 selles par semaine, selles dures) est très fréquente et presque toujours liée au manque de fibres, d'eau et de mouvement. Elle se corrige en quelques semaines avec des changements simples. Une constipation nouvelle après 50 ans ou avec du sang doit être explorée.",
      ar: "الإمساك (أقل من 3 مرات في الأسبوع، براز صلب) شائع جداً وغالباً ما يرتبط بنقص الألياف والماء والحركة. يُصحح خلال أسابيع بتغييرات بسيطة. الإمساك الجديد بعد 50 سنة أو مع دم يجب استكشافه.",
      en: "Constipation (fewer than 3 stools a week, hard stools) is very common and almost always linked to too little fibre, water and movement. It improves in a few weeks with simple changes. New constipation after 50 or with blood must be investigated.",
    },
    explanation: [
      { fr: "Il faut 25 à 30 g de fibres par jour : légumes, fruits, légumes secs, pain complet, pruneaux, figues.", ar: "نحتاج 25 إلى 30 غ من الألياف يومياً: خضر، فواكه، بقوليات، خبز كامل، برقوق مجفف، تين.", en: "You need 25 to 30 g of fibre a day: vegetables, fruit, pulses, wholemeal bread, prunes, figs." },
      { fr: "Retenir ses selles par manque de temps dérègle le réflexe : allez aux toilettes dès l'envie, de préférence après le petit-déjeuner.", ar: "حبس البراز لضيق الوقت يعطل المنعكس، فاذهب إلى المرحاض فور الشعور بالحاجة، ويفضل بعد الفطور.", en: "Holding stools in for lack of time disrupts the reflex: go as soon as you feel the urge, ideally after breakfast." },
      { fr: "Certains médicaments constipent : fer, codéine, certains antidépresseurs et anti-acides. Le sous-fonctionnement de la thyroïde aussi.", ar: "بعض الأدوية تسبب الإمساك: الحديد، الكودايين، بعض مضادات الاكتئاب ومضادات الحموضة. وكذلك قصور الغدة الدرقية.", en: "Some medicines constipate: iron, codeine, some antidepressants and antacids. So does an underactive thyroid." },
      { fr: "Les laxatifs stimulants ne doivent pas être pris tous les jours pendant des mois sans avis.", ar: "الملينات المنبهة لا يجب تناولها يومياً لأشهر دون استشارة.", en: "Stimulant laxatives shouldn't be taken daily for months without advice." },
    ],
    meanwhile: [
      { fr: "Buvez 1,5 litre d'eau par jour et ajoutez des fibres progressivement.", ar: "اشرب 1.5 لتر ماء يومياً وأضف الألياف تدريجياً.", en: "Drink 1.5 litres of water a day and add fibre gradually." },
      { fr: "Marchez 30 minutes par jour.", ar: "امشِ 30 دقيقة يومياً.", en: "Walk 30 minutes a day." },
      { fr: "Aux toilettes, surélevez les pieds sur un petit tabouret.", ar: "في المرحاض، ارفع القدمين على مقعد صغير.", en: "On the toilet, raise your feet on a small stool." },
      { fr: "Un laxatif doux (macrogol) peut aider quelques jours, en pharmacie.", ar: "ملين خفيف (ماكروغول) من الصيدلية قد يساعد لبضعة أيام.", en: "A gentle laxative (macrogol) from the pharmacy can help for a few days." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste si ça persiste plus d'un mois malgré ces mesures, sans attendre si sang ou amaigrissement.", ar: "طبيبك العام إذا استمر أكثر من شهر رغم هذه الإجراءات، وفوراً عند وجود دم أو نقص الوزن.", en: "Your GP if it persists more than a month despite these measures, without delay if blood or weight loss." },
    exams: [
      { fr: "Souvent aucun.", ar: "غالباً لا شيء.", en: "Often none." },
      { fr: "Prise de sang (thyroïde, calcium, anémie) si persistance.", ar: "تحليل دم (الغدة الدرقية، الكالسيوم، فقر الدم) عند الاستمرار.", en: "Blood test (thyroid, calcium, anaemia) if persistent." },
      { fr: "Coloscopie après 50 ans ou si signes d'alerte.", ar: "تنظير القولون بعد 50 سنة أو عند علامات الإنذار.", en: "Colonoscopy after 50 or if warning signs." },
    ],
    questions: [
      { fr: "Un de mes médicaments peut-il me constiper ?", ar: "هل يمكن لأحد أدويتي أن يسبب الإمساك؟", en: "Could one of my medicines be constipating me?" },
      { fr: "Quel laxatif puis-je prendre sans danger, et combien de temps ?", ar: "أي ملين يمكنني تناوله بأمان، ولكم من الوقت؟", en: "Which laxative can I take safely, and for how long?" },
      { fr: "Dois-je faire une coloscopie ?", ar: "هل يجب أن أجري تنظير القولون؟", en: "Should I have a colonoscopy?" },
    ],
    warning: {
      fr: "sang dans les selles, perte de poids, arrêt complet des gaz et des selles avec ventre gonflé et vomissements, ou constipation nouvelle après 50 ans.",
      ar: "دم في البراز، فقدان الوزن، توقف تام للغازات والبراز مع انتفاخ البطن وقيء، أو إمساك جديد بعد 50 سنة.",
      en: "blood in stools, weight loss, complete stop of wind and stools with a swollen belly and vomiting, or new constipation after 50.",
    },
    sources: [AMELI_CONSTIPATION],
  },
  nausees: {
    summary: {
      fr: "Nausées et vomissements récents viennent le plus souvent d'une gastro-entérite, d'un aliment avarié, d'une migraine, d'un médicament ou d'un début de grossesse. Ils passent en 1 à 2 jours ; le risque est de se déshydrater.",
      ar: "الغثيان والقيء الحديثان يأتيان غالباً من التهاب معوي أو طعام فاسد أو شقيقة أو دواء أو بداية حمل. يزولان خلال يوم أو يومين، والخطر هو الجفاف.",
      en: "Recent nausea and vomiting most often come from a stomach bug, spoiled food, a migraine, a medicine or early pregnancy. They pass in 1 to 2 days; the risk is dehydration.",
    },
    explanation: [
      { fr: "Chez une femme en âge d'avoir des enfants, des nausées du matin qui durent doivent faire penser à une grossesse : un test urinaire suffit.", ar: "عند المرأة في سن الإنجاب، غثيان الصباح المستمر يستدعي التفكير في الحمل، ويكفي اختبار بول.", en: "In a woman of childbearing age, lasting morning nausea should raise the thought of pregnancy: a urine test is enough." },
      { fr: "De nombreux médicaments donnent des nausées (antibiotiques, fer, antidouleurs, metformine) : regardez la notice.", ar: "كثير من الأدوية تسبب الغثيان (المضادات الحيوية، الحديد، المسكنات، الميتفورمين)، فاقرأ النشرة.", en: "Many medicines cause nausea (antibiotics, iron, painkillers, metformin): check the leaflet." },
      { fr: "Des vomissements avec une douleur forte du ventre, surtout à droite ou en bas, peuvent être une appendicite ou une vésicule : à faire examiner rapidement.", ar: "القيء مع ألم قوي في البطن، خاصة في الجهة اليمنى أو في الأسفل، قد يكون التهاب الزائدة أو المرارة، ويجب فحصه بسرعة.", en: "Vomiting with severe belly pain, especially on the right or low down, may be appendicitis or gallbladder trouble: have it examined quickly." },
    ],
    meanwhile: [
      { fr: "Buvez par petites gorgées toutes les 10 minutes : eau, SRO, tisane, bouillon.", ar: "اشرب رشفات صغيرة كل 10 دقائق: ماء، محلول الإماهة، أعشاب، مرق.", en: "Sip every 10 minutes: water, ORS, herbal tea, broth." },
      { fr: "Mangez peu et souvent, froid ou tiède, sans gras : biscottes, riz, banane.", ar: "كُل قليلاً وبشكل متكرر، بارداً أو فاتراً، بدون دهون: بسكويت مملح، أرز، موز.", en: "Eat little and often, cold or lukewarm, without fat: crackers, rice, banana." },
      { fr: "Le gingembre (infusion) calme les nausées, y compris pendant la grossesse.", ar: "الزنجبيل (منقوع) يهدئ الغثيان، حتى أثناء الحمل.", en: "Ginger (tea) soothes nausea, including during pregnancy." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste si ça dure plus de 48 h, le jour même si douleur forte du ventre ou impossibilité de garder les liquides.", ar: "طبيبك العام إذا استمر أكثر من 48 ساعة، وفي نفس اليوم عند ألم قوي في البطن أو عدم القدرة على الاحتفاظ بالسوائل.", en: "Your GP if it lasts more than 48 h, the same day if severe belly pain or unable to keep fluids down." },
    exams: [
      { fr: "Test de grossesse si possible enceinte.", ar: "اختبار الحمل إذا كان الحمل ممكناً.", en: "Pregnancy test if pregnancy is possible." },
      { fr: "Prise de sang et échographie du ventre si douleur ou persistance.", ar: "تحليل دم وتصوير بالصدى للبطن عند الألم أو الاستمرار.", en: "Blood test and belly ultrasound if pain or persistence." },
    ],
    questions: [
      { fr: "Mes vomissements peuvent-ils venir d'un médicament ?", ar: "هل يمكن أن يكون قيئي بسبب دواء؟", en: "Could my vomiting come from a medicine?" },
      { fr: "Que puis-je prendre contre les nausées, y compris enceinte ?", ar: "ماذا يمكنني أن آخذ للغثيان، حتى أثناء الحمل؟", en: "What can I take for nausea, including when pregnant?" },
      { fr: "Comment savoir si je suis déshydraté ?", ar: "كيف أعرف إن كنت مصاباً بالجفاف؟", en: "How do I know if I'm dehydrated?" },
    ],
    warning: {
      fr: "vomissements de sang ou noirs, douleur forte du ventre, ventre dur, mal de tête violent avec nuque raide, confusion, impossibilité de boire depuis 12 h, ou vomissements en jet chez un bébé.",
      ar: "قيء دموي أو أسود، ألم قوي في البطن، بطن صلب، صداع عنيف مع تصلب الرقبة، تشوش، عدم القدرة على الشرب منذ 12 ساعة، أو قيء قذفي عند الرضيع.",
      en: "vomiting blood or black material, severe belly pain, rigid belly, violent headache with stiff neck, confusion, unable to drink for 12 h, or projectile vomiting in a baby.",
    },
    sources: [AMELI_VENTRE],
  },
  douleur: {
    summary: {
      fr: "Une douleur au ventre a des dizaines de causes, la plupart bénignes : digestion difficile, gaz, constipation, gastro, règles. Ce qui compte, c'est l'endroit, l'intensité et les signes associés. Une douleur forte, localisée, avec fièvre ou vomissements doit être vue le jour même.",
      ar: "ألم البطن له عشرات الأسباب، معظمها حميد: عسر الهضم، الغازات، الإمساك، التهاب معوي، الدورة الشهرية. المهم هو المكان والشدة والعلامات المصاحبة. الألم القوي الموضعي مع حمى أو قيء يجب أن يُفحص في نفس اليوم.",
      en: "Belly pain has dozens of causes, most of them harmless: indigestion, wind, constipation, stomach bug, periods. What matters is the location, intensity and associated signs. Severe, localised pain with fever or vomiting must be seen the same day.",
    },
    explanation: [
      { fr: "En haut au milieu : estomac (gastrite, ulcère). En haut à droite : vésicule ou foie. En bas à droite : appendicite. En bas chez la femme : ovaires, utérus, infection urinaire.", ar: "في الأعلى بالوسط: المعدة (التهاب، قرحة). في الأعلى يميناً: المرارة أو الكبد. في الأسفل يميناً: الزائدة. في الأسفل عند المرأة: المبيضان، الرحم، عدوى بولية.", en: "Upper middle: stomach (gastritis, ulcer). Upper right: gallbladder or liver. Lower right: appendicitis. Low down in women: ovaries, womb, urinary infection." },
      { fr: "Une douleur diffuse, qui va et vient, soulagée par les gaz ou les selles, est presque toujours digestive et bénigne.", ar: "الألم المنتشر الذي يأتي ويذهب ويخف مع الغازات أو البراز هو في الغالب هضمي وحميد.", en: "Diffuse pain that comes and goes and eases with wind or stools is almost always digestive and harmless." },
      { fr: "Une douleur fixe, qui augmente en quelques heures, qui réveille la nuit ou empêche de bouger est un signe de gravité.", ar: "الألم الثابت الذي يزداد خلال ساعات، أو يوقظك ليلاً، أو يمنع الحركة، هو علامة خطورة.", en: "Fixed pain that increases over hours, wakes you at night or stops you moving is a sign of seriousness." },
    ],
    meanwhile: [
      { fr: "Mangez léger ou ne mangez pas pendant quelques heures, buvez de l'eau.", ar: "كُل طعاماً خفيفاً أو لا تأكل لبضع ساعات، واشرب الماء.", en: "Eat light or nothing for a few hours, drink water." },
      { fr: "Chaleur sur le ventre (bouillotte) pour les douleurs de gaz ou de règles.", ar: "حرارة على البطن (قربة ماء ساخن) لآلام الغازات أو الدورة.", en: "Warmth on the belly (hot water bottle) for wind or period pain." },
      { fr: "Pas d'ibuprofène ni d'aspirine tant que la cause n'est pas connue ; paracétamol possible.", ar: "لا إيبوبروفين ولا أسبرين ما دام السبب مجهولاً؛ الباراسيتامول ممكن.", en: "No ibuprofen or aspirin until the cause is known; paracetamol is fine." },
      { fr: "Notez où ça fait mal, depuis quand et ce qui l'améliore ou l'aggrave.", ar: "سجّل مكان الألم ومنذ متى وما يحسّنه أو يزيده.", en: "Note where it hurts, since when and what makes it better or worse." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste ; le jour même ou les urgences si la douleur est forte, localisée, avec fièvre ou vomissements.", ar: "طبيبك العام؛ في نفس اليوم أو المستعجلات إذا كان الألم قوياً وموضعياً مع حمى أو قيء.", en: "Your GP; the same day or the emergency department if the pain is severe, localised, with fever or vomiting." },
    exams: [
      { fr: "Examen du ventre par le médecin.", ar: "فحص البطن من طرف الطبيب.", en: "Belly examination by the doctor." },
      { fr: "Prise de sang (NFS, CRP, foie, lipase) et bandelette urinaire.", ar: "تحليل دم (NFS، CRP، الكبد، الليباز) وشريط البول.", en: "Blood test (CBC, CRP, liver, lipase) and urine dipstick." },
      { fr: "Échographie du ventre selon le siège de la douleur.", ar: "تصوير بالصدى للبطن حسب مكان الألم.", en: "Belly ultrasound depending on the location of the pain." },
    ],
    questions: [
      { fr: "D'où vient ma douleur ?", ar: "من أين يأتي ألمي؟", en: "Where is my pain coming from?" },
      { fr: "Ai-je besoin d'une échographie ou d'une prise de sang ?", ar: "هل أحتاج تصويراً بالصدى أو تحليل دم؟", en: "Do I need an ultrasound or a blood test?" },
      { fr: "Quels signes doivent me faire revenir en urgence ?", ar: "ما العلامات التي تستدعي عودتي بشكل عاجل؟", en: "Which signs should bring me back urgently?" },
    ],
    warning: {
      fr: "douleur forte qui augmente, ventre dur, fièvre avec douleur fixe, sang dans les vomissements ou les selles, douleur en bas du ventre avec retard de règles, ou douleur après un choc.",
      ar: "ألم قوي يزداد، بطن صلب، حمى مع ألم ثابت، دم في القيء أو البراز، ألم أسفل البطن مع تأخر الدورة، أو ألم بعد صدمة.",
      en: "severe pain that increases, rigid belly, fever with fixed pain, blood in vomit or stools, lower belly pain with a late period, or pain after an injury.",
    },
    sources: [AMELI_VENTRE],
  },
};
