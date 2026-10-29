import type { ThemeFiches } from "../types";

const OMS_FIEVRE = { label: "OMS, Grippe saisonnière", url: "https://www.who.int/fr/news-room/fact-sheets/detail/influenza-(seasonal)" };
const AMELI_FIEVRE = { label: "Ameli, Fièvre de l'adulte", url: "https://www.ameli.fr/assure/sante/themes/fievre-adulte" };
const AMELI_URINAIRE = { label: "Ameli, Infection urinaire", url: "https://www.ameli.fr/assure/sante/themes/cystite" };

export const fievre: ThemeFiches = {
  seule: {
    summary: {
      fr: "Une fièvre isolée est le plus souvent due à une infection virale bénigne qui passe en 2 à 3 jours. Elle devient inquiétante si elle dure, monte très haut ou s'accompagne d'autres signes.",
      ar: "الحمى وحدها غالباً ما تكون بسبب عدوى فيروسية بسيطة تزول خلال يومين أو ثلاثة. تصبح مقلقة إذا طالت أو ارتفعت كثيراً أو صاحبتها علامات أخرى.",
      en: "Fever on its own is most often due to a mild viral infection that clears in 2 to 3 days. It becomes a concern if it lasts, rises very high or comes with other signs.",
    },
    explanation: [
      { fr: "On parle de fièvre au-dessus de 38 °C. C'est une réaction normale du corps qui se défend contre une infection.", ar: "نتحدث عن حمى عندما تتجاوز الحرارة 38 درجة. هي رد فعل طبيعي للجسم وهو يدافع عن نفسه ضد عدوى.", en: "A fever is a temperature above 38 °C. It is the body's normal reaction while fighting an infection." },
      { fr: "Chez l'adulte, la cause la plus fréquente est un virus (rhume, grippe, gastro). La fièvre baisse alors d'elle-même en quelques jours.", ar: "عند البالغين، السبب الأكثر شيوعاً هو فيروس (زكام، أنفلونزا، التهاب معوي). تنخفض الحمى من تلقاء نفسها خلال أيام.", en: "In adults the most common cause is a virus (cold, flu, stomach bug). The fever then drops by itself within a few days." },
      { fr: "Une fièvre qui dure plus de 3 jours, qui revient après avoir disparu, ou qui dépasse 40 °C mérite un avis médical pour chercher une infection bactérienne.", ar: "الحمى التي تستمر أكثر من 3 أيام، أو تعود بعد زوالها، أو تتجاوز 40 درجة، تستدعي رأياً طبياً للبحث عن عدوى بكتيرية.", en: "A fever lasting more than 3 days, coming back after going away, or above 40 °C needs a medical opinion to look for a bacterial infection." },
    ],
    meanwhile: [
      { fr: "Buvez souvent de l'eau, même sans soif.", ar: "اشرب الماء كثيراً حتى بدون عطش.", en: "Drink water often, even without thirst." },
      { fr: "Reposez-vous, portez des vêtements légers et aérez la pièce.", ar: "ارتح، والبس ملابس خفيفة، وهوّ الغرفة.", en: "Rest, wear light clothes and air the room." },
      { fr: "Mesurez la température matin et soir et notez-la pour le médecin.", ar: "قس الحرارة صباحاً ومساءً وسجّلها للطبيب.", en: "Take your temperature morning and evening and write it down for the doctor." },
      { fr: "Le paracétamol fait baisser la fièvre ; respectez la dose indiquée sur la boîte et évitez de cumuler plusieurs médicaments.", ar: "الباراسيتامول يخفض الحمى؛ احترم الجرعة المكتوبة على العلبة وتجنب الجمع بين عدة أدوية.", en: "Paracetamol lowers fever; follow the dose on the box and avoid combining several medicines." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste. Il vous orientera si besoin.", ar: "طبيبك العام، وسيوجهك عند الحاجة.", en: "Your general practitioner, who will refer you if needed." },
    exams: [
      { fr: "Souvent aucun si la fièvre est récente.", ar: "غالباً لا شيء إذا كانت الحمى حديثة.", en: "Often none if the fever is recent." },
      { fr: "Prise de sang (NFS, CRP) si elle dure.", ar: "تحليل دم (NFS، CRP) إذا استمرت.", en: "Blood test (CBC, CRP) if it lasts." },
      { fr: "Analyse d'urine ou radio des poumons selon les signes.", ar: "تحليل بول أو أشعة للرئتين حسب العلامات.", en: "Urine test or chest X-ray depending on the signs." },
    ],
    questions: [
      { fr: "Quelle peut être la cause de ma fièvre ?", ar: "ما هو سبب الحمى المحتمل في حالتي؟", en: "What could be causing my fever?" },
      { fr: "Faut-il faire une prise de sang ou une analyse d'urine ?", ar: "هل أحتاج إلى تحليل دم أو بول؟", en: "Do I need a blood or urine test?" },
      { fr: "Quel médicament contre la fièvre est adapté à mes autres traitements ?", ar: "أي دواء للحمى يناسب أدويتي الأخرى؟", en: "Which fever medicine is safe with my other treatments?" },
      { fr: "Au bout de combien de jours dois-je revenir si ça ne passe pas ?", ar: "بعد كم يوم يجب أن أعود إذا لم تتحسن؟", en: "After how many days should I come back if it doesn't go away?" },
    ],
    warning: {
      fr: "fièvre au-dessus de 40 °C, nuque raide, taches sur la peau, difficulté à respirer, confusion, fièvre au retour d'un voyage, ou fièvre chez un bébé de moins de 3 mois.",
      ar: "حمى فوق 40 درجة، تصلب الرقبة، بقع على الجلد، صعوبة في التنفس، تشوش، حمى بعد العودة من سفر، أو حمى عند رضيع أقل من 3 أشهر.",
      en: "fever above 40 °C, stiff neck, skin spots, difficulty breathing, confusion, fever after travel, or fever in a baby under 3 months.",
    },
    sources: [AMELI_FIEVRE, OMS_FIEVRE],
  },
  toux: {
    summary: {
      fr: "Fièvre et toux ensemble évoquent le plus souvent une grippe ou une bronchite virale, qui guérit seule en une à deux semaines. Un essoufflement ou une fièvre qui persiste doit faire consulter.",
      ar: "الحمى مع السعال غالباً ما تدل على أنفلونزا أو التهاب شعبي فيروسي يشفى وحده خلال أسبوع أو أسبوعين. ضيق التنفس أو استمرار الحمى يستوجب الاستشارة.",
      en: "Fever with cough most often means flu or a viral bronchitis, which clears on its own in one to two weeks. Breathlessness or a fever that persists needs a doctor.",
    },
    explanation: [
      { fr: "La grippe donne une fièvre élevée qui monte vite, des courbatures, une fatigue intense et une toux sèche.", ar: "الأنفلونزا تسبب حمى مرتفعة تصعد بسرعة، وآلاماً في الجسم، وتعباً شديداً، وسعالاً جافاً.", en: "Flu brings a high fever that rises fast, body aches, intense tiredness and a dry cough." },
      { fr: "Les antibiotiques ne servent à rien contre un virus. Le médecin les prescrit seulement s'il suspecte une surinfection bactérienne (pneumonie, par exemple).", ar: "المضادات الحيوية لا تنفع ضد الفيروس. يصفها الطبيب فقط إذا اشتبه في عدوى بكتيرية إضافية (مثل الالتهاب الرئوي).", en: "Antibiotics do nothing against a virus. The doctor prescribes them only if a bacterial infection is suspected (pneumonia, for example)." },
      { fr: "La toux peut persister 2 à 3 semaines après la fin de la fièvre : c'est normal tant qu'elle s'améliore.", ar: "قد يستمر السعال أسبوعين أو ثلاثة بعد زوال الحمى، وهذا طبيعي ما دام يتحسن.", en: "The cough can last 2 to 3 weeks after the fever ends; that is normal as long as it improves." },
      { fr: "Le vaccin contre la grippe est conseillé chaque automne aux plus de 65 ans, aux malades chroniques et aux femmes enceintes.", ar: "يُنصح بلقاح الأنفلونزا كل خريف لمن تجاوزوا 65 سنة، والمصابين بأمراض مزمنة، والحوامل.", en: "The flu vaccine is advised every autumn for people over 65, those with chronic illness and pregnant women." },
    ],
    meanwhile: [
      { fr: "Reposez-vous et buvez beaucoup, surtout des boissons chaudes.", ar: "ارتح واشرب كثيراً، خاصة المشروبات الساخنة.", en: "Rest and drink plenty, especially warm drinks." },
      { fr: "Évitez le tabac et les pièces enfumées.", ar: "تجنب التدخين والأماكن المليئة بالدخان.", en: "Avoid smoking and smoky rooms." },
      { fr: "Restez à la maison pour ne pas contaminer les autres, et lavez-vous les mains souvent.", ar: "ابق في البيت لتجنب نقل العدوى، واغسل يديك كثيراً.", en: "Stay home to avoid infecting others, and wash your hands often." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste, rapidement si vous êtes enceinte, âgé ou malade chronique.", ar: "طبيبك العام، وبسرعة إذا كنت حاملاً أو مسناً أو مصاباً بمرض مزمن.", en: "Your GP, quickly if you are pregnant, elderly or have a chronic illness." },
    exams: [
      { fr: "Examen des poumons au stéthoscope.", ar: "فحص الرئتين بالسماعة.", en: "Chest examination with a stethoscope." },
      { fr: "Radio des poumons si le médecin entend quelque chose d'anormal.", ar: "أشعة للرئتين إذا سمع الطبيب شيئاً غير طبيعي.", en: "Chest X-ray if the doctor hears something abnormal." },
      { fr: "Test rapide grippe ou Covid selon la saison.", ar: "اختبار سريع للأنفلونزا أو كوفيد حسب الموسم.", en: "Rapid flu or Covid test depending on the season." },
    ],
    questions: [
      { fr: "Est-ce un virus ou une infection qui nécessite des antibiotiques ?", ar: "هل هو فيروس أم عدوى تحتاج مضادات حيوية؟", en: "Is it a virus or an infection that needs antibiotics?" },
      { fr: "Que puis-je prendre pour la toux sans risque avec mes autres traitements ?", ar: "ماذا يمكنني أن آخذ للسعال دون خطر مع أدويتي الأخرى؟", en: "What can I take for the cough that is safe with my other treatments?" },
      { fr: "Combien de temps suis-je contagieux ?", ar: "كم من الوقت أبقى معدياً؟", en: "How long am I contagious?" },
      { fr: "Suis-je concerné par le vaccin contre la grippe ?", ar: "هل يُنصح لي بلقاح الأنفلونزا؟", en: "Should I get the flu vaccine?" },
    ],
    warning: {
      fr: "essoufflement, douleur dans la poitrine, crachats avec du sang, fièvre qui dure plus de 3 jours ou qui revient, lèvres bleues.",
      ar: "ضيق في التنفس، ألم في الصدر، بلغم مع دم، حمى تستمر أكثر من 3 أيام أو تعود، ازرقاق الشفتين.",
      en: "breathlessness, chest pain, blood in phlegm, fever lasting more than 3 days or coming back, blue lips.",
    },
    sources: [OMS_FIEVRE, AMELI_FIEVRE],
  },
  gorge: {
    summary: {
      fr: "Fièvre avec mal de gorge, c'est le plus souvent une angine. Elle est virale dans la majorité des cas, mais une angine bactérienne doit être traitée par antibiotiques : seul un test rapide chez le médecin fait la différence.",
      ar: "الحمى مع ألم الحلق غالباً ما تكون التهاب اللوزتين. هو فيروسي في أغلب الحالات، لكن الالتهاب البكتيري يحتاج مضادات حيوية، ولا يميز بينهما إلا اختبار سريع عند الطبيب.",
      en: "Fever with sore throat is most often tonsillitis. It is viral in most cases, but bacterial tonsillitis must be treated with antibiotics: only a rapid test at the doctor's tells the difference.",
    },
    explanation: [
      { fr: "L'angine est une inflammation des amygdales. Elle fait mal en avalant, donne de la fièvre et parfois des ganglions au cou.", ar: "التهاب اللوزتين هو التهاب يصيب اللوزتين، يسبب ألماً عند البلع وحمى وأحياناً انتفاخ الغدد في الرقبة.", en: "Tonsillitis is an inflammation of the tonsils. It hurts when swallowing, causes fever and sometimes swollen glands in the neck." },
      { fr: "Chez l'adulte, 8 angines sur 10 sont virales et guérissent seules en une semaine. Chez l'enfant de 3 à 15 ans, l'angine à streptocoque est plus fréquente.", ar: "عند البالغين، 8 من كل 10 حالات فيروسية وتشفى وحدها خلال أسبوع. عند الأطفال من 3 إلى 15 سنة، الالتهاب بالمكورات العقدية أكثر شيوعاً.", en: "In adults, 8 out of 10 cases are viral and clear on their own within a week. In children aged 3 to 15, strep throat is more common." },
      { fr: "Le médecin peut faire un test rapide (TDR) en cabinet : il dit en 5 minutes si des antibiotiques sont utiles.", ar: "يمكن للطبيب إجراء اختبار سريع في العيادة يحدد خلال 5 دقائق ما إذا كانت المضادات الحيوية مفيدة.", en: "The doctor can do a rapid test in the office: in 5 minutes it tells whether antibiotics are useful." },
    ],
    meanwhile: [
      { fr: "Buvez chaud ou froid selon ce qui soulage, et sucez des pastilles ou du miel.", ar: "اشرب ساخناً أو بارداً حسب ما يريحك، وتناول أقراص المص أو العسل.", en: "Drink warm or cold, whichever soothes, and use lozenges or honey." },
      { fr: "Le paracétamol calme la douleur et la fièvre.", ar: "الباراسيتامول يخفف الألم والحمى.", en: "Paracetamol eases the pain and fever." },
      { fr: "Ne reprenez pas des antibiotiques restés d'un ancien traitement.", ar: "لا تتناول مضادات حيوية متبقية من علاج سابق.", en: "Don't take antibiotics left over from a previous treatment." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste, ou le pédiatre pour un enfant.", ar: "طبيبك العام، أو طبيب الأطفال للطفل.", en: "Your GP, or the paediatrician for a child." },
    exams: [
      { fr: "Test rapide de l'angine (TDR) en cabinet.", ar: "اختبار سريع لالتهاب اللوزتين في العيادة.", en: "Rapid strep test in the office." },
      { fr: "Rarement, une prise de sang si la fatigue est très forte (mononucléose).", ar: "نادراً تحليل دم إذا كان التعب شديداً جداً (داء التقبيل).", en: "Rarely, a blood test if tiredness is extreme (mononucleosis)." },
    ],
    questions: [
      { fr: "Pouvez-vous faire le test rapide pour savoir si c'est bactérien ?", ar: "هل يمكنك إجراء الاختبار السريع لمعرفة إن كان بكتيرياً؟", en: "Can you do the rapid test to see if it's bacterial?" },
      { fr: "Ai-je besoin d'antibiotiques, et pendant combien de jours ?", ar: "هل أحتاج مضادات حيوية، ولكم يوماً؟", en: "Do I need antibiotics, and for how many days?" },
      { fr: "Que faire si les angines reviennent souvent ?", ar: "ماذا أفعل إذا تكرر الالتهاب كثيراً؟", en: "What to do if tonsillitis keeps coming back?" },
    ],
    warning: {
      fr: "difficulté à respirer ou à ouvrir la bouche, impossibilité d'avaler sa salive, gonflement d'un côté du cou, fièvre qui dure plus de 3 jours malgré le traitement.",
      ar: "صعوبة في التنفس أو فتح الفم، عدم القدرة على بلع اللعاب، تورم جهة واحدة من الرقبة، حمى تستمر أكثر من 3 أيام رغم العلاج.",
      en: "difficulty breathing or opening the mouth, unable to swallow saliva, swelling on one side of the neck, fever lasting more than 3 days despite treatment.",
    },
    sources: [{ label: "Ameli, Angine", url: "https://www.ameli.fr/assure/sante/themes/angine" }],
  },
  urines: {
    summary: {
      fr: "Fièvre avec brûlures en urinant évoque une infection urinaire qui a atteint les reins (pyélonéphrite) ou la prostate chez l'homme. Ce n'est pas une simple cystite : il faut consulter le jour même.",
      ar: "الحمى مع حرقة أثناء التبول تدل على عدوى بولية وصلت إلى الكلى أو البروستاتا عند الرجل. ليست التهاباً بسيطاً للمثانة، ويجب الاستشارة في نفس اليوم.",
      en: "Fever with burning when urinating suggests a urinary infection that has reached the kidneys (pyelonephritis) or the prostate in men. This is not a simple cystitis: see a doctor the same day.",
    },
    explanation: [
      { fr: "Une cystite simple donne des brûlures et des envies fréquentes, mais pas de fièvre. Quand la fièvre apparaît, l'infection est montée plus haut.", ar: "التهاب المثانة البسيط يسبب حرقة وكثرة التبول لكن بدون حمى. عندما تظهر الحمى، تكون العدوى قد صعدت أعلى.", en: "Simple cystitis causes burning and frequent urges but no fever. When fever appears, the infection has moved higher." },
      { fr: "La pyélonéphrite donne souvent une douleur dans le bas du dos, d'un seul côté, avec frissons et parfois vomissements.", ar: "التهاب الكلى يسبب غالباً ألماً في أسفل الظهر من جهة واحدة، مع قشعريرة وأحياناً قيء.", en: "A kidney infection often causes pain in the lower back on one side, with chills and sometimes vomiting." },
      { fr: "Elle se traite bien par antibiotiques, mais le traitement doit commencer vite et après une analyse d'urine.", ar: "يُعالج جيداً بالمضادات الحيوية، لكن يجب أن يبدأ العلاج بسرعة وبعد تحليل البول.", en: "It is treated well with antibiotics, but treatment must start quickly and after a urine test." },
    ],
    meanwhile: [
      { fr: "Buvez beaucoup d'eau pour aider à évacuer les bactéries.", ar: "اشرب كثيراً من الماء لمساعدة الجسم على التخلص من البكتيريا.", en: "Drink plenty of water to help flush the bacteria out." },
      { fr: "N'attendez pas plusieurs jours : prenez rendez-vous aujourd'hui.", ar: "لا تنتظر عدة أيام، احجز موعداً اليوم.", en: "Don't wait several days: book an appointment today." },
      { fr: "Si possible, apportez un échantillon d'urine du matin au laboratoire avant tout antibiotique.", ar: "إن أمكن، أحضر عينة بول صباحية إلى المختبر قبل أي مضاد حيوي.", en: "If possible, bring a morning urine sample to the lab before any antibiotic." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste le jour même. Les urgences si vous ne pouvez pas boire ou si la douleur est forte.", ar: "طبيبك العام في نفس اليوم. المستعجلات إذا لم تستطع الشرب أو كان الألم قوياً.", en: "Your GP the same day. The emergency department if you can't drink or the pain is severe." },
    exams: [
      { fr: "Bandelette et analyse d'urine (ECBU) avec antibiogramme.", ar: "شريط اختبار وتحليل البول مع اختبار حساسية المضادات.", en: "Urine dipstick and culture with antibiotic sensitivity." },
      { fr: "Prise de sang (NFS, CRP, créatinine).", ar: "تحليل دم (NFS، CRP، كرياتينين).", en: "Blood test (CBC, CRP, creatinine)." },
      { fr: "Échographie des reins si la fièvre ne baisse pas sous traitement.", ar: "تصوير بالصدى للكلى إذا لم تنخفض الحمى مع العلاج.", en: "Kidney ultrasound if the fever doesn't drop with treatment." },
    ],
    questions: [
      { fr: "L'infection a-t-elle atteint les reins ?", ar: "هل وصلت العدوى إلى الكلى؟", en: "Has the infection reached the kidneys?" },
      { fr: "Quel antibiotique et pendant combien de jours ?", ar: "أي مضاد حيوي ولكم يوماً؟", en: "Which antibiotic and for how many days?" },
      { fr: "Faut-il un contrôle d'urine après le traitement ?", ar: "هل أحتاج تحليل بول للمراقبة بعد العلاج؟", en: "Do I need a urine check after treatment?" },
      { fr: "Comment éviter que ça revienne ?", ar: "كيف أتجنب تكرارها؟", en: "How can I stop it coming back?" },
    ],
    warning: {
      fr: "vomissements qui empêchent de boire, frissons intenses, douleur forte dans le dos, grossesse, ou fièvre qui persiste 48 h après le début des antibiotiques.",
      ar: "قيء يمنع الشرب، قشعريرة شديدة، ألم قوي في الظهر، حمل، أو حمى تستمر 48 ساعة بعد بدء المضادات الحيوية.",
      en: "vomiting that stops you drinking, intense chills, severe back pain, pregnancy, or fever persisting 48 h after starting antibiotics.",
    },
    sources: [AMELI_URINAIRE],
  },
  boutons: {
    summary: {
      fr: "Fièvre avec des boutons évoque surtout une maladie virale éruptive (varicelle, rougeole, roséole chez le petit enfant). La plupart sont bénignes, mais certaines taches qui ne s'effacent pas sous la pression sont une urgence.",
      ar: "الحمى مع الحبوب تدل غالباً على مرض فيروسي طفحي (جدري الماء، الحصبة، الطفح الوردي عند الطفل الصغير). أغلبها بسيط، لكن البقع التي لا تختفي عند الضغط عليها حالة طارئة.",
      en: "Fever with spots mostly suggests a viral rash illness (chickenpox, measles, roseola in young children). Most are mild, but spots that don't fade under pressure are an emergency.",
    },
    explanation: [
      { fr: "La varicelle donne des petites vésicules qui grattent et apparaissent par vagues. La rougeole commence par un gros rhume avec les yeux rouges, puis l'éruption descend du visage vers le corps.", ar: "جدري الماء يسبب حويصلات صغيرة مثيرة للحكة تظهر على دفعات. الحصبة تبدأ بزكام قوي مع احمرار العينين، ثم ينزل الطفح من الوجه إلى الجسم.", en: "Chickenpox causes small itchy blisters appearing in waves. Measles starts like a bad cold with red eyes, then the rash spreads from the face down the body." },
      { fr: "La rougeole est en recrudescence au Maroc : vérifiez que vous et vos enfants êtes vaccinés (deux doses).", ar: "الحصبة في ارتفاع بالمغرب: تأكد أنك وأطفالك ملقحون (جرعتان).", en: "Measles is on the rise in Morocco: check that you and your children are vaccinated (two doses)." },
      { fr: "Le test du verre : appuyez un verre transparent sur les taches. Si elles ne disparaissent pas, appelez le 15 immédiatement.", ar: "اختبار الكأس: اضغط كأساً شفافاً على البقع. إذا لم تختف، اتصل بالرقم 15 فوراً.", en: "The glass test: press a clear glass on the spots. If they don't fade, call 15 immediately." },
    ],
    meanwhile: [
      { fr: "Évitez le contact avec les femmes enceintes, les bébés et les personnes fragiles.", ar: "تجنب الاتصال بالحوامل والرضع والأشخاص الضعفاء.", en: "Avoid contact with pregnant women, babies and fragile people." },
      { fr: "Pas d'ibuprofène ni d'aspirine en cas de varicelle : paracétamol seulement.", ar: "لا إيبوبروفين ولا أسبرين في حالة جدري الماء: الباراسيتامول فقط.", en: "No ibuprofen or aspirin with chickenpox: paracetamol only." },
      { fr: "Coupez les ongles courts pour limiter le grattage et les cicatrices.", ar: "قص الأظافر لتقليل الحك والندوب.", en: "Keep nails short to limit scratching and scarring." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste ou le pédiatre, dans les 24 h. Prévenez le cabinet avant de venir pour éviter de contaminer la salle d'attente.", ar: "طبيبك العام أو طبيب الأطفال خلال 24 ساعة. أخبر العيادة قبل الحضور لتجنب نقل العدوى في قاعة الانتظار.", en: "Your GP or paediatrician within 24 h. Call the practice before coming to avoid infecting the waiting room." },
    exams: [
      { fr: "Le diagnostic se fait le plus souvent à l'examen des boutons.", ar: "يتم التشخيص غالباً بفحص الحبوب.", en: "Diagnosis is usually made by examining the spots." },
      { fr: "Prise de sang si doute sur la rougeole ou chez la femme enceinte.", ar: "تحليل دم عند الشك في الحصبة أو عند المرأة الحامل.", en: "Blood test if measles is suspected or for a pregnant woman." },
    ],
    questions: [
      { fr: "De quelle maladie s'agit-il et combien de temps est-elle contagieuse ?", ar: "ما هو المرض وكم مدة العدوى؟", en: "Which illness is it and how long is it contagious?" },
      { fr: "Mes vaccins et ceux de mes enfants sont-ils à jour ?", ar: "هل تلقيحاتي وتلقيحات أطفالي محدّثة؟", en: "Are my vaccines and my children's up to date?" },
      { fr: "Que mettre sur les boutons pour calmer les démangeaisons ?", ar: "ماذا أضع على الحبوب لتهدئة الحكة؟", en: "What can I put on the spots to calm the itching?" },
    ],
    warning: {
      fr: "taches qui ne s'effacent pas sous un verre, nuque raide, somnolence inhabituelle, difficulté à respirer, boutons qui s'infectent, ou éruption chez une femme enceinte.",
      ar: "بقع لا تختفي تحت الكأس، تصلب الرقبة، نعاس غير معتاد، صعوبة في التنفس، حبوب متقيحة، أو طفح عند امرأة حامل.",
      en: "spots that don't fade under a glass, stiff neck, unusual drowsiness, difficulty breathing, infected spots, or a rash in a pregnant woman.",
    },
    sources: [{ label: "OMS, Rougeole", url: "https://www.who.int/fr/news-room/fact-sheets/detail/measles" }, { label: "Ameli, Varicelle", url: "https://www.ameli.fr/assure/sante/themes/varicelle" }],
  },
  diarrhee: {
    summary: {
      fr: "Fièvre et diarrhée ensemble, c'est le plus souvent une gastro-entérite virale ou une intoxication alimentaire qui passe en 2 à 3 jours. Le vrai risque est la déshydratation, surtout chez l'enfant et la personne âgée.",
      ar: "الحمى مع الإسهال غالباً ما تكون التهاباً معوياً فيروسياً أو تسمماً غذائياً يزول خلال يومين أو ثلاثة. الخطر الحقيقي هو الجفاف، خاصة عند الطفل والمسن.",
      en: "Fever and diarrhoea together is most often a viral stomach bug or food poisoning that clears in 2 to 3 days. The real risk is dehydration, especially in children and the elderly.",
    },
    explanation: [
      { fr: "Les virus (rotavirus, norovirus) se transmettent par les mains et les aliments. L'été, les intoxications alimentaires sont plus fréquentes.", ar: "تنتقل الفيروسات عبر اليدين والطعام. في الصيف، يكثر التسمم الغذائي.", en: "Viruses (rotavirus, norovirus) spread through hands and food. In summer, food poisoning is more common." },
      { fr: "Du sang dans les selles, une fièvre élevée ou un retour de voyage font penser à une bactérie (salmonelle, shigelle) et justifient une analyse des selles.", ar: "الدم في البراز أو الحمى المرتفعة أو العودة من سفر توحي ببكتيريا (سالمونيلا، شيغيلا) وتستدعي تحليل البراز.", en: "Blood in stools, high fever or recent travel point to a bacterium (salmonella, shigella) and call for a stool test." },
      { fr: "Les solutions de réhydratation orale (SRO) vendues en pharmacie sont le meilleur traitement, bien plus que les sodas.", ar: "محاليل الإماهة الفموية المتوفرة في الصيدلية هي أفضل علاج، أفضل بكثير من المشروبات الغازية.", en: "Oral rehydration solutions (ORS) from the pharmacy are the best treatment, far better than fizzy drinks." },
    ],
    meanwhile: [
      { fr: "Buvez souvent, par petites gorgées : SRO, eau, bouillon.", ar: "اشرب كثيراً بجرعات صغيرة: محلول الإماهة، ماء، مرق.", en: "Drink often in small sips: ORS, water, broth." },
      { fr: "Mangez léger : riz, carottes cuites, bananes, compote.", ar: "تناول طعاماً خفيفاً: أرز، جزر مطبوخ، موز، كومبوت.", en: "Eat light: rice, cooked carrots, bananas, stewed apple." },
      { fr: "Lavez-vous les mains après chaque passage aux toilettes et avant de cuisiner.", ar: "اغسل يديك بعد كل دخول إلى المرحاض وقبل الطبخ.", en: "Wash your hands after every toilet visit and before cooking." },
      { fr: "Évitez les médicaments qui bloquent la diarrhée tant qu'il y a de la fièvre.", ar: "تجنب الأدوية التي توقف الإسهال ما دامت الحمى موجودة.", en: "Avoid medicines that stop diarrhoea while there is fever." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste ; le jour même pour un enfant de moins de 2 ans ou une personne âgée.", ar: "طبيبك العام؛ في نفس اليوم للطفل دون السنتين أو المسن.", en: "Your GP; the same day for a child under 2 or an elderly person." },
    exams: [
      { fr: "Souvent aucun si ça passe en 3 jours.", ar: "غالباً لا شيء إذا زال خلال 3 أيام.", en: "Often none if it clears in 3 days." },
      { fr: "Analyse des selles (coproculture) si sang, fièvre élevée ou retour de voyage.", ar: "تحليل البراز إذا كان هناك دم أو حمى مرتفعة أو عودة من سفر.", en: "Stool culture if blood, high fever or recent travel." },
      { fr: "Prise de sang pour vérifier la déshydratation si les signes sont marqués.", ar: "تحليل دم للتحقق من الجفاف إذا كانت العلامات واضحة.", en: "Blood test to check dehydration if signs are marked." },
    ],
    questions: [
      { fr: "Faut-il faire une analyse des selles ?", ar: "هل أحتاج تحليل براز؟", en: "Do I need a stool test?" },
      { fr: "Comment reconnaître la déshydratation chez mon enfant ?", ar: "كيف أتعرف على الجفاف عند طفلي؟", en: "How do I recognise dehydration in my child?" },
      { fr: "Que puis-je manger et quand reprendre une alimentation normale ?", ar: "ماذا يمكنني أن آكل ومتى أعود إلى الأكل العادي؟", en: "What can I eat and when can I go back to normal food?" },
    ],
    warning: {
      fr: "sang dans les selles, plus de 6 selles liquides par jour, bouche sèche et peu d'urines, vertiges en se levant, somnolence chez un enfant, ou diarrhée qui dure plus de 3 jours.",
      ar: "دم في البراز، أكثر من 6 مرات إسهال في اليوم، جفاف الفم وقلة البول، دوخة عند الوقوف، نعاس عند الطفل، أو إسهال يستمر أكثر من 3 أيام.",
      en: "blood in stools, more than 6 loose stools a day, dry mouth and little urine, dizziness on standing, drowsiness in a child, or diarrhoea lasting more than 3 days.",
    },
    sources: [{ label: "OMS, Maladies diarrhéiques", url: "https://www.who.int/fr/news-room/fact-sheets/detail/diarrhoeal-disease" }],
  },
};
