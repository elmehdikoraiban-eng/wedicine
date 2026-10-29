import type { ThemeFiches } from "../types";

const OMS_DIABETE = { label: "OMS, Diabète", url: "https://www.who.int/fr/news-room/fact-sheets/detail/diabetes" };
const AMELI_DIABETE = { label: "Ameli, Diabète de type 2", url: "https://www.ameli.fr/assure/sante/themes/diabete" };

export const diabete: ThemeFiches = {
  soif: {
    summary: {
      fr: "Une soif intense avec des envies fréquentes d'uriner, surtout la nuit, est le signe classique d'un diabète qui se déclare. Une simple prise de sang à jeun donne la réponse : ne tardez pas, surtout si vous perdez du poids.",
      ar: "العطش الشديد مع كثرة التبول، خاصة ليلاً، هو العلامة الكلاسيكية لبداية السكري. تحليل دم بسيط على الريق يعطي الجواب، فلا تتأخر، خاصة إذا كنت تفقد الوزن.",
      en: "Intense thirst with frequent urination, especially at night, is the classic sign of diabetes appearing. A simple fasting blood test gives the answer: don't delay, especially if you are losing weight.",
    },
    explanation: [
      { fr: "Quand le sucre s'accumule dans le sang, les reins l'évacuent dans les urines en entraînant beaucoup d'eau : on urine plus, donc on a soif.", ar: "عندما يتراكم السكر في الدم، تطرحه الكلى في البول مع كثير من الماء، فنتبول أكثر ونشعر بالعطش.", en: "When sugar builds up in the blood, the kidneys flush it into the urine with lots of water: you urinate more, so you get thirsty." },
      { fr: "Chez un jeune ou un enfant, avec une perte de poids rapide et une grande fatigue, il peut s'agir d'un diabète de type 1, qui nécessite de l'insuline rapidement.", ar: "عند الشاب أو الطفل، مع فقدان وزن سريع وتعب شديد، قد يكون سكري النوع الأول الذي يحتاج الأنسولين بسرعة.", en: "In a young person or child, with rapid weight loss and great tiredness, it may be type 1 diabetes, which needs insulin quickly." },
      { fr: "Chez l'adulte en surpoids, c'est le plus souvent un diabète de type 2, qui se traite d'abord par l'alimentation, l'activité physique et des comprimés.", ar: "عند البالغ ذي الوزن الزائد، غالباً ما يكون سكري النوع الثاني الذي يُعالج أولاً بالتغذية والنشاط البدني والأقراص.", en: "In an overweight adult, it is most often type 2 diabetes, treated first with diet, exercise and tablets." },
    ],
    meanwhile: [
      { fr: "Buvez de l'eau, pas de sodas ni de jus, même « sans sucre ajouté ».", ar: "اشرب الماء، لا المشروبات الغازية ولا العصائر حتى «بدون سكر مضاف».", en: "Drink water, not fizzy drinks or juice, even 'no added sugar'." },
      { fr: "Prenez rendez-vous cette semaine, ou aujourd'hui si vous vomissez, respirez vite ou êtes très somnolent.", ar: "احجز موعداً هذا الأسبوع، أو اليوم إذا كنت تتقيأ أو تتنفس بسرعة أو تشعر بنعاس شديد.", en: "Book this week, or today if you are vomiting, breathing fast or very drowsy." },
      { fr: "Allez au laboratoire à jeun (rien mangé depuis 8 h) pour la glycémie.", ar: "اذهب إلى المختبر على الريق (8 ساعات بدون أكل) لتحليل السكر.", en: "Go to the lab fasting (nothing eaten for 8 h) for the blood sugar test." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste dans la semaine ; les urgences si vomissements, respiration rapide ou somnolence.", ar: "طبيبك العام خلال الأسبوع؛ والمستعجلات عند القيء أو التنفس السريع أو النعاس.", en: "Your GP this week; the emergency department if vomiting, fast breathing or drowsiness." },
    exams: [
      { fr: "Glycémie à jeun : diabète si supérieure à 1,26 g/L deux fois.", ar: "سكر الدم على الريق: سكري إذا تجاوز 1.26 غ/ل مرتين.", en: "Fasting blood sugar: diabetes if above 1.26 g/L twice." },
      { fr: "HbA1c (sucre moyen des 3 derniers mois) : diabète si 6,5 % ou plus.", ar: "HbA1c (معدل السكر في آخر 3 أشهر): سكري إذا بلغ 6.5% أو أكثر.", en: "HbA1c (average sugar over 3 months): diabetes if 6.5% or more." },
      { fr: "Bandelette urinaire (sucre, acétone).", ar: "شريط البول (السكر، الأسيتون).", en: "Urine dipstick (sugar, ketones)." },
    ],
    questions: [
      { fr: "Est-ce un diabète de type 1 ou de type 2 ?", ar: "هل هو سكري النوع الأول أم الثاني؟", en: "Is it type 1 or type 2 diabetes?" },
      { fr: "Ai-je besoin d'insuline ou de comprimés ?", ar: "هل أحتاج الأنسولين أم الأقراص؟", en: "Do I need insulin or tablets?" },
      { fr: "Que dois-je changer dans mon alimentation dès maintenant ?", ar: "ماذا يجب أن أغيّر في تغذيتي من الآن؟", en: "What should I change in my diet right now?" },
      { fr: "Mes enfants doivent-ils se faire dépister ?", ar: "هل يجب فحص أطفالي؟", en: "Should my children be screened?" },
    ],
    warning: {
      fr: "vomissements, douleur au ventre, respiration rapide, haleine qui sent la pomme, somnolence ou confusion : c'est une urgence (acidocétose).",
      ar: "قيء، ألم في البطن، تنفس سريع، رائحة فم كالتفاح، نعاس أو تشوش: هذه حالة طارئة (الحماض الكيتوني).",
      en: "vomiting, belly pain, fast breathing, breath smelling of apples, drowsiness or confusion: this is an emergency (ketoacidosis).",
    },
    sources: [OMS_DIABETE, AMELI_DIABETE],
  },
  glycemie: {
    summary: {
      fr: "Une glycémie élevée sur une analyse ne confirme pas encore un diabète : il faut une deuxième mesure à jeun ou une HbA1c. Entre 1,10 et 1,26 g/L, on parle de prédiabète, qui se corrige souvent en changeant ses habitudes.",
      ar: "ارتفاع السكر في تحليل واحد لا يؤكد السكري بعد، بل يلزم قياس ثانٍ على الريق أو HbA1c. بين 1.10 و1.26 غ/ل نتحدث عن مقدمات السكري التي تُصحح غالباً بتغيير العادات.",
      en: "A high blood sugar on one test doesn't yet confirm diabetes: a second fasting reading or an HbA1c is needed. Between 1.10 and 1.26 g/L it is prediabetes, which often reverses with lifestyle changes.",
    },
    explanation: [
      { fr: "Normale à jeun : en dessous de 1,10 g/L. Prédiabète : 1,10 à 1,25. Diabète : 1,26 ou plus à deux reprises.", ar: "الطبيعي على الريق: أقل من 1.10 غ/ل. مقدمات السكري: من 1.10 إلى 1.25. السكري: 1.26 أو أكثر مرتين.", en: "Normal fasting: below 1.10 g/L. Prediabetes: 1.10 to 1.25. Diabetes: 1.26 or more on two occasions." },
      { fr: "Une analyse faite sans être à jeun, après un repas sucré ou pendant une infection peut être faussement élevée.", ar: "التحليل بدون صيام، أو بعد وجبة سكرية، أو أثناء عدوى قد يكون مرتفعاً بشكل خاطئ.", en: "A test done when not fasting, after a sugary meal or during an infection can be falsely high." },
      { fr: "Au stade de prédiabète, perdre 5 à 7 % de son poids et marcher 150 minutes par semaine divise par deux le risque de devenir diabétique.", ar: "في مرحلة مقدمات السكري، فقدان 5 إلى 7% من الوزن والمشي 150 دقيقة في الأسبوع يقلل خطر الإصابة بالسكري إلى النصف.", en: "At the prediabetes stage, losing 5 to 7% of body weight and walking 150 minutes a week halves the risk of becoming diabetic." },
    ],
    meanwhile: [
      { fr: "Supprimez les boissons sucrées et les pâtisseries, gardez le pain et les féculents en quantité modérée.", ar: "احذف المشروبات السكرية والحلويات، وأبقِ الخبز والنشويات بكميات معتدلة.", en: "Cut sugary drinks and pastries, keep bread and starches in moderate amounts." },
      { fr: "Marchez 30 minutes par jour, surtout après les repas.", ar: "امشِ 30 دقيقة يومياً، خاصة بعد الوجبات.", en: "Walk 30 minutes a day, especially after meals." },
      { fr: "Refaites l'analyse à jeun, le matin, après une nuit normale.", ar: "أعد التحليل على الريق صباحاً بعد ليلة عادية.", en: "Repeat the test fasting, in the morning, after a normal night." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste avec votre résultat. Un diabétologue si le diabète est confirmé et difficile à équilibrer.", ar: "طبيبك العام مع نتيجتك. طبيب السكري إذا تأكد السكري وصعب ضبطه.", en: "Your GP with your result. A diabetologist if diabetes is confirmed and hard to control." },
    exams: [
      { fr: "Deuxième glycémie à jeun ou HbA1c.", ar: "قياس ثانٍ للسكر على الريق أو HbA1c.", en: "Second fasting glucose or HbA1c." },
      { fr: "Bilan associé : cholestérol, créatinine, tension.", ar: "فحوصات مصاحبة: الكوليسترول، الكرياتينين، الضغط.", en: "Associated check: cholesterol, creatinine, blood pressure." },
    ],
    questions: [
      { fr: "Mon résultat est-il normal, limite ou anormal ?", ar: "هل نتيجتي طبيعية أم حدّية أم غير طبيعية؟", en: "Is my result normal, borderline or abnormal?" },
      { fr: "Faut-il refaire l'analyse, et quand ?", ar: "هل يجب إعادة التحليل، ومتى؟", en: "Should I repeat the test, and when?" },
      { fr: "Qu'est-ce qui, dans mes habitudes, fait monter mon sucre ?", ar: "ما الذي يرفع السكر في عاداتي؟", en: "What in my habits is raising my sugar?" },
    ],
    warning: {
      fr: "glycémie au-dessus de 3 g/L, ou soif intense avec vomissements, respiration rapide et somnolence.",
      ar: "سكر فوق 3 غ/ل، أو عطش شديد مع قيء وتنفس سريع ونعاس.",
      en: "blood sugar above 3 g/L, or intense thirst with vomiting, fast breathing and drowsiness.",
    },
    sources: [AMELI_DIABETE],
  },
  depistage: {
    summary: {
      fr: "Avoir un parent ou un frère diabétique double le risque de le devenir. Un dépistage par glycémie à jeun tous les 1 à 3 ans dès 35 ans, ou plus tôt en cas de surpoids, permet d'agir avant les complications.",
      ar: "وجود أب أو أخ مصاب بالسكري يضاعف خطر الإصابة. الكشف بتحليل السكر على الريق كل سنة إلى 3 سنوات ابتداءً من 35 سنة، أو قبل ذلك عند زيادة الوزن، يسمح بالتدخل قبل المضاعفات.",
      en: "Having a diabetic parent or sibling doubles your risk. Screening with a fasting blood sugar every 1 to 3 years from age 35, or earlier if overweight, lets you act before complications.",
    },
    explanation: [
      { fr: "Le diabète de type 2 touche plus de 2 millions de Marocains et reste silencieux pendant des années.", ar: "يصيب سكري النوع الثاني أكثر من مليوني مغربي ويبقى صامتاً لسنوات.", en: "Type 2 diabetes affects more than 2 million Moroccans and stays silent for years." },
      { fr: "Les facteurs de risque s'additionnent : hérédité, surpoids surtout au ventre, sédentarité, hypertension, diabète pendant une grossesse.", ar: "عوامل الخطر تتراكم: الوراثة، زيادة الوزن خاصة في البطن، قلة الحركة، ارتفاع الضغط، سكري الحمل.", en: "Risk factors add up: heredity, overweight especially around the belly, inactivity, hypertension, diabetes during a pregnancy." },
      { fr: "On peut retarder ou éviter le diabète même avec des antécédents familiaux : le mode de vie pèse plus que les gènes.", ar: "يمكن تأخير السكري أو تجنبه حتى مع السوابق العائلية، فنمط الحياة أهم من الجينات.", en: "You can delay or avoid diabetes even with family history: lifestyle matters more than genes." },
    ],
    meanwhile: [
      { fr: "Mesurez votre tour de taille : au-dessus de 94 cm (homme) ou 80 cm (femme), le risque augmente.", ar: "قس محيط خصرك: فوق 94 سم (رجل) أو 80 سم (امرأة)، يزداد الخطر.", en: "Measure your waist: above 94 cm (men) or 80 cm (women), risk increases." },
      { fr: "Bougez chaque jour et limitez le sucre et les fritures.", ar: "تحرك كل يوم وقلل السكر والمقليات.", en: "Move every day and limit sugar and fried food." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste pour un dépistage, sans attendre de symptômes.", ar: "طبيبك العام للكشف، دون انتظار الأعراض.", en: "Your GP for screening, without waiting for symptoms." },
    exams: [
      { fr: "Glycémie à jeun ou HbA1c.", ar: "سكر الدم على الريق أو HbA1c.", en: "Fasting blood sugar or HbA1c." },
      { fr: "Poids, tour de taille, tension, cholestérol.", ar: "الوزن، محيط الخصر، الضغط، الكوليسترول.", en: "Weight, waist, blood pressure, cholesterol." },
    ],
    questions: [
      { fr: "À quelle fréquence dois-je me faire dépister ?", ar: "كم مرة يجب أن أقوم بالكشف؟", en: "How often should I get screened?" },
      { fr: "Quel est mon risque personnel ?", ar: "ما هو خطري الشخصي؟", en: "What is my personal risk?" },
      { fr: "Que puis-je changer pour l'éviter ?", ar: "ماذا يمكنني أن أغيّر لتجنبه؟", en: "What can I change to avoid it?" },
    ],
    warning: {
      fr: "soif intense, envies d'uriner la nuit, perte de poids rapide ou plaie qui ne guérit pas : consultez sans attendre le dépistage prévu.",
      ar: "عطش شديد، تبول ليلي، فقدان وزن سريع أو جرح لا يلتئم: استشر دون انتظار موعد الكشف.",
      en: "intense thirst, urinating at night, rapid weight loss or a wound that won't heal: see a doctor without waiting for the planned screening.",
    },
    sources: [OMS_DIABETE],
  },
  suivi: {
    summary: {
      fr: "Un diabète bien suivi, c'est une HbA1c mesurée tous les 3 mois, un objectif en général sous 7 %, et un contrôle annuel des yeux, des reins, des pieds et du cœur. C'est ce suivi qui évite les complications.",
      ar: "متابعة السكري الجيدة تعني قياس HbA1c كل 3 أشهر، وهدف أقل من 7% عادة، وفحص سنوي للعينين والكلى والقدمين والقلب. هذه المتابعة هي ما يمنع المضاعفات.",
      en: "Well-managed diabetes means an HbA1c every 3 months, usually aiming below 7%, and a yearly check of eyes, kidneys, feet and heart. This follow-up is what prevents complications.",
    },
    explanation: [
      { fr: "L'HbA1c reflète le sucre moyen des 3 derniers mois : c'est le chiffre le plus important de votre suivi.", ar: "يعكس HbA1c معدل السكر في آخر 3 أشهر، وهو الرقم الأهم في متابعتك.", en: "HbA1c reflects average sugar over the last 3 months: it is the most important number in your follow-up." },
      { fr: "Chaque année : fond d'œil, analyse d'urine (microalbuminurie), examen des pieds, électrocardiogramme, bilan du cholestérol.", ar: "كل سنة: فحص قاع العين، تحليل البول، فحص القدمين، تخطيط القلب، فحص الكوليسترول.", en: "Every year: eye exam, urine test (microalbumin), foot exam, electrocardiogram, cholesterol check." },
      { fr: "Pendant le Ramadan, le jeûne est possible pour beaucoup de diabétiques de type 2, mais le traitement doit être adapté avant, avec le médecin.", ar: "خلال رمضان، الصيام ممكن لكثير من مرضى سكري النوع الثاني، لكن يجب تعديل العلاج قبله مع الطبيب.", en: "During Ramadan, fasting is possible for many type 2 diabetics, but treatment must be adjusted beforehand with the doctor." },
      { fr: "Les hypoglycémies (sueurs, tremblements, faim, confusion) sont le principal risque des traitements : il faut savoir les reconnaître et les traiter avec 3 morceaux de sucre.", ar: "انخفاض السكر (تعرق، رجفة، جوع، تشوش) هو الخطر الرئيسي للعلاج، ويجب معرفة علاماته وعلاجه بثلاث قطع سكر.", en: "Hypoglycaemia (sweating, shaking, hunger, confusion) is the main risk of treatment: know how to recognise and treat it with 3 sugar lumps." },
    ],
    meanwhile: [
      { fr: "Apportez votre carnet de glycémies et la liste de vos médicaments à chaque consultation.", ar: "أحضر دفتر قياسات السكر ولائحة أدويتك في كل استشارة.", en: "Bring your glucose diary and medicine list to every visit." },
      { fr: "Regardez vos pieds chaque jour : la moindre plaie doit être vue rapidement.", ar: "افحص قدميك كل يوم، وأي جرح صغير يجب عرضه بسرعة.", en: "Check your feet daily: any small wound must be seen quickly." },
      { fr: "Gardez toujours du sucre sur vous.", ar: "احمل السكر معك دائماً.", en: "Always carry sugar with you." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste tous les 3 mois ; un diabétologue si l'HbA1c reste au-dessus de l'objectif ; un ophtalmologue chaque année.", ar: "طبيبك العام كل 3 أشهر؛ طبيب السكري إذا بقي HbA1c فوق الهدف؛ وطبيب العيون كل سنة.", en: "Your GP every 3 months; a diabetologist if HbA1c stays above target; an eye doctor every year." },
    exams: [
      { fr: "HbA1c tous les 3 mois.", ar: "HbA1c كل 3 أشهر.", en: "HbA1c every 3 months." },
      { fr: "Bilan annuel : fond d'œil, créatinine et microalbuminurie, cholestérol, ECG, pieds.", ar: "فحص سنوي: قاع العين، الكرياتينين والبول، الكوليسترول، تخطيط القلب، القدمين.", en: "Yearly check: eye exam, creatinine and urine microalbumin, cholesterol, ECG, feet." },
    ],
    questions: [
      { fr: "Quel est mon objectif d'HbA1c ?", ar: "ما هو هدفي من HbA1c؟", en: "What is my HbA1c target?" },
      { fr: "Mes examens annuels sont-ils à jour ?", ar: "هل فحوصاتي السنوية محدّثة؟", en: "Are my yearly checks up to date?" },
      { fr: "Puis-je jeûner pendant le Ramadan, et comment adapter mon traitement ?", ar: "هل يمكنني الصيام في رمضان، وكيف أعدّل علاجي؟", en: "Can I fast during Ramadan, and how do I adapt my treatment?" },
      { fr: "Que faire en cas d'hypoglycémie ?", ar: "ماذا أفعل عند انخفاض السكر؟", en: "What should I do if my sugar drops too low?" },
    ],
    warning: {
      fr: "glycémie sous 0,70 g/L qui ne remonte pas après du sucre, glycémie au-dessus de 3 g/L avec vomissements, plaie du pied rouge ou noire, baisse brutale de la vue, ou douleur dans la poitrine.",
      ar: "سكر أقل من 0.70 غ/ل لا يرتفع بعد تناول السكر، سكر فوق 3 غ/ل مع قيء، جرح في القدم أحمر أو أسود، انخفاض مفاجئ في الرؤية، أو ألم في الصدر.",
      en: "blood sugar below 0.70 g/L that doesn't rise after sugar, above 3 g/L with vomiting, a red or black foot wound, sudden loss of vision, or chest pain.",
    },
    sources: [AMELI_DIABETE, OMS_DIABETE],
  },
  plaie: {
    summary: {
      fr: "Une plaie qui guérit mal, surtout au pied, est un signe d'alerte du diabète : le sucre abîme les petits vaisseaux et les nerfs, la peau cicatrise lentement et s'infecte facilement. Chez un diabétique, toute plaie du pied doit être vue par un médecin dans les 48 h.",
      ar: "الجرح الذي يلتئم ببطء، خاصة في القدم، علامة إنذار للسكري: السكر يتلف الأوعية الصغيرة والأعصاب، فيلتئم الجلد ببطء ويلتهب بسهولة. عند مريض السكري، كل جرح في القدم يجب أن يراه الطبيب خلال 48 ساعة.",
      en: "A wound that heals badly, especially on the foot, is a warning sign of diabetes: sugar damages small vessels and nerves, skin heals slowly and gets infected easily. In a diabetic, any foot wound must be seen by a doctor within 48 h.",
    },
    explanation: [
      { fr: "Les nerfs abîmés font perdre la sensibilité : on ne sent plus une ampoule ou un caillou dans la chaussure, et la plaie s'aggrave sans douleur.", ar: "تلف الأعصاب يُفقد الإحساس: لا نشعر بفقاعة أو حصاة في الحذاء، ويتفاقم الجرح دون ألم.", en: "Damaged nerves cause loss of feeling: you no longer notice a blister or a stone in the shoe, and the wound worsens without pain." },
      { fr: "Si vous n'êtes pas connu diabétique, une plaie qui traîne plus de 3 semaines justifie une glycémie.", ar: "إذا لم تكن مريض سكري معروفاً، فالجرح الذي يستمر أكثر من 3 أسابيع يستدعي تحليل السكر.", en: "If you are not a known diabetic, a wound lingering more than 3 weeks justifies a blood sugar test." },
      { fr: "Une plaie infectée chez un diabétique peut évoluer très vite : c'est la première cause d'amputation évitable.", ar: "الجرح الملتهب عند مريض السكري قد يتطور بسرعة كبيرة، وهو السبب الأول للبتر الذي يمكن تجنبه.", en: "An infected wound in a diabetic can worsen very fast: it is the leading cause of avoidable amputation." },
    ],
    meanwhile: [
      { fr: "Lavez la plaie à l'eau et au savon, couvrez d'un pansement propre, changez-le chaque jour.", ar: "اغسل الجرح بالماء والصابون، غطّه بضمادة نظيفة، وغيّرها كل يوم.", en: "Wash the wound with soap and water, cover with a clean dressing, change it daily." },
      { fr: "Ne marchez pas pieds nus, ne percez pas les ampoules, pas de produits colorants (bétadine, mercurochrome) qui cachent l'évolution.", ar: "لا تمشِ حافياً، لا تثقب الفقاعات، ولا تستعمل مطهرات ملوّنة تخفي تطور الجرح.", en: "Don't walk barefoot, don't pop blisters, no coloured antiseptics that hide how it's evolving." },
      { fr: "Évitez d'appuyer sur la zone blessée.", ar: "تجنب الضغط على المنطقة المصابة.", en: "Avoid putting weight on the injured area." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste dans les 48 h ; les urgences si la plaie est rouge, chaude, suinte ou si vous avez de la fièvre.", ar: "طبيبك العام خلال 48 ساعة؛ المستعجلات إذا كان الجرح أحمر أو ساخناً أو يُفرز أو إذا كانت لديك حمى.", en: "Your GP within 48 h; the emergency department if the wound is red, hot, oozing or you have fever." },
    exams: [
      { fr: "Glycémie et HbA1c.", ar: "سكر الدم وHbA1c.", en: "Blood sugar and HbA1c." },
      { fr: "Examen de la sensibilité et des pouls du pied.", ar: "فحص الإحساس ونبض القدم.", en: "Foot sensation and pulse check." },
      { fr: "Prélèvement de la plaie et radio si infection suspectée.", ar: "مسحة من الجرح وأشعة عند الاشتباه في عدوى.", en: "Wound swab and X-ray if infection suspected." },
    ],
    questions: [
      { fr: "Cette plaie est-elle liée à un diabète ?", ar: "هل هذا الجرح مرتبط بالسكري؟", en: "Is this wound linked to diabetes?" },
      { fr: "Faut-il des antibiotiques ?", ar: "هل أحتاج مضادات حيوية؟", en: "Do I need antibiotics?" },
      { fr: "Comment prendre soin de mes pieds au quotidien ?", ar: "كيف أعتني بقدميّ يومياً؟", en: "How should I care for my feet every day?" },
      { fr: "Ai-je besoin de chaussures adaptées ?", ar: "هل أحتاج أحذية خاصة؟", en: "Do I need special shoes?" },
    ],
    warning: {
      fr: "plaie rouge et chaude qui s'étend, pus, odeur, zone noire, fièvre, ou douleur forte du pied : consultez le jour même.",
      ar: "جرح أحمر وساخن يتسع، قيح، رائحة، منطقة سوداء، حمى، أو ألم قوي في القدم: استشر في نفس اليوم.",
      en: "a red, hot wound that spreads, pus, smell, a black area, fever, or severe foot pain: see a doctor the same day.",
    },
    sources: [AMELI_DIABETE],
  },
};
