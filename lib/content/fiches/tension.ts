import type { ThemeFiches } from "../types";

const OMS_HTA = { label: "OMS, Hypertension", url: "https://www.who.int/fr/news-room/fact-sheets/detail/hypertension" };
const AMELI_HTA = { label: "Ameli, Hypertension artérielle", url: "https://www.ameli.fr/assure/sante/themes/hypertension-arterielle-hta" };

export const tension: ThemeFiches = {
  elevee: {
    summary: {
      fr: "Une tension élevée une fois ne veut rien dire : le stress, l'effort ou la blouse blanche la font monter. On parle d'hypertension si elle dépasse 14/9 à plusieurs reprises, au repos. C'est fréquent, silencieux et ça se soigne bien.",
      ar: "ارتفاع الضغط مرة واحدة لا يعني شيئاً، فالتوتر والمجهود والخوف من الطبيب ترفعه. نتحدث عن ارتفاع ضغط الدم إذا تجاوز 14/9 عدة مرات في الراحة. هو شائع وصامت ويُعالج جيداً.",
      en: "One high reading means nothing: stress, effort or 'white coat' nerves push it up. Hypertension means above 140/90 on several occasions, at rest. It is common, silent and treats well.",
    },
    explanation: [
      { fr: "Au Maroc, près d'un adulte sur 3 est hypertendu et la moitié ne le sait pas, car l'hypertension ne donne en général aucun symptôme.", ar: "في المغرب، قرابة واحد من كل 3 بالغين مصاب بارتفاع الضغط ونصفهم لا يعرف ذلك، لأنه لا يسبب عادة أي أعراض.", en: "In Morocco nearly 1 adult in 3 has high blood pressure and half don't know it, because it usually causes no symptoms." },
      { fr: "Non traitée, elle use le cœur, les reins, les yeux et les artères du cerveau. Traitée, le risque d'AVC et d'infarctus baisse nettement.", ar: "بدون علاج، يُرهق القلب والكلى والعينين وشرايين الدماغ. مع العلاج، ينخفض خطر الجلطة الدماغية والنوبة القلبية بشكل واضح.", en: "Untreated, it wears down the heart, kidneys, eyes and brain arteries. Treated, the risk of stroke and heart attack drops clearly." },
      { fr: "Le diagnostic repose sur l'automesure à la maison : 3 mesures le matin, 3 le soir, pendant 3 jours. Hypertension si la moyenne dépasse 13,5/8,5.", ar: "يعتمد التشخيص على القياس الذاتي في البيت: 3 قياسات صباحاً و3 مساءً لمدة 3 أيام. ارتفاع الضغط إذا تجاوز المعدل 13.5/8.5.", en: "Diagnosis relies on home measurement: 3 readings in the morning, 3 in the evening, for 3 days. Hypertension if the average exceeds 135/85." },
      { fr: "Moins de sel, plus de marche, moins de poids et pas de tabac font baisser la tension autant qu'un médicament chez beaucoup de personnes.", ar: "تقليل الملح، والمشي أكثر، وإنقاص الوزن، وترك التدخين تخفض الضغط بقدر الدواء عند كثير من الناس.", en: "Less salt, more walking, less weight and no smoking lower blood pressure as much as a medicine in many people." },
    ],
    meanwhile: [
      { fr: "Faites l'automesure 3-3-3 : assis, au calme depuis 5 minutes, bras posé sur la table, et notez tout.", ar: "قم بالقياس الذاتي 3-3-3: جالساً، هادئاً منذ 5 دقائق، الذراع على الطاولة، وسجّل كل شيء.", en: "Do the 3-3-3 home measurement: seated, calm for 5 minutes, arm on the table, and write everything down." },
      { fr: "Réduisez le sel : pas de salière à table, attention au pain, aux olives, aux conserves et à la charcuterie.", ar: "قلل الملح: لا مملحة على المائدة، وانتبه للخبز والزيتون والمعلبات واللحوم المصنعة.", en: "Cut salt: no salt shaker at the table, watch bread, olives, tinned food and cured meats." },
      { fr: "Marchez 30 minutes par jour.", ar: "امشِ 30 دقيقة يومياً.", en: "Walk 30 minutes a day." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste, avec vos mesures. Un cardiologue si la tension reste haute malgré le traitement.", ar: "طبيبك العام مع قياساتك. طبيب القلب إذا بقي الضغط مرتفعاً رغم العلاج.", en: "Your GP, with your readings. A cardiologist if it stays high despite treatment." },
    exams: [
      { fr: "Prise de sang : glycémie, cholestérol, créatinine, potassium.", ar: "تحليل دم: السكر، الكوليسترول، الكرياتينين، البوتاسيوم.", en: "Blood test: sugar, cholesterol, creatinine, potassium." },
      { fr: "Analyse d'urine (protéines).", ar: "تحليل بول (البروتين).", en: "Urine test (protein)." },
      { fr: "Électrocardiogramme.", ar: "تخطيط القلب.", en: "Electrocardiogram." },
      { fr: "Parfois un holter tensionnel sur 24 h.", ar: "أحياناً قياس الضغط المتواصل على مدى 24 ساعة.", en: "Sometimes a 24-hour blood pressure monitor." },
    ],
    questions: [
      { fr: "Mes chiffres sont-ils vraiment de l'hypertension ?", ar: "هل أرقامي تعني فعلاً ارتفاع ضغط الدم؟", en: "Do my readings really mean hypertension?" },
      { fr: "Puis-je d'abord essayer sans médicament ?", ar: "هل يمكنني أن أجرب أولاً بدون دواء؟", en: "Can I try without medicine first?" },
      { fr: "Quel objectif de tension pour moi ?", ar: "ما هو هدف الضغط المناسب لي؟", en: "What blood pressure target should I aim for?" },
      { fr: "Quels examens pour vérifier mon cœur et mes reins ?", ar: "ما الفحوصات للتحقق من قلبي وكليتيّ؟", en: "Which tests to check my heart and kidneys?" },
    ],
    warning: {
      fr: "tension au-dessus de 18/11 avec mal de tête violent, douleur dans la poitrine, essoufflement, trouble de la vue ou de la parole, faiblesse d'un côté, ou saignement de nez qui ne s'arrête pas.",
      ar: "ضغط فوق 18/11 مع صداع عنيف، ألم في الصدر، ضيق تنفس، اضطراب في الرؤية أو الكلام، ضعف في جهة، أو نزيف أنف لا يتوقف.",
      en: "blood pressure above 180/110 with a violent headache, chest pain, breathlessness, vision or speech trouble, weakness on one side, or a nosebleed that won't stop.",
    },
    sources: [OMS_HTA, AMELI_HTA],
  },
  basse: {
    summary: {
      fr: "Une tension basse avec des vertiges en se levant est fréquente et le plus souvent sans gravité : déshydratation, chaleur, repas sauté, ou effet d'un médicament. Elle devient préoccupante si elle provoque des malaises ou des chutes.",
      ar: "انخفاض الضغط مع دوخة عند الوقوف شائع وغالباً غير خطير: جفاف، حرارة، تفويت وجبة، أو تأثير دواء. يصبح مقلقاً إذا سبب إغماءً أو سقوطاً.",
      en: "Low blood pressure with dizziness on standing is common and usually harmless: dehydration, heat, a skipped meal, or a medicine's effect. It becomes a concern if it causes fainting or falls.",
    },
    explanation: [
      { fr: "Quand on se lève, le sang descend dans les jambes ; si le corps compense mal, la tête tourne quelques secondes : c'est l'hypotension orthostatique.", ar: "عند الوقوف، ينزل الدم إلى الساقين؛ إذا لم يعوّض الجسم ذلك جيداً، تدور الرأس بضع ثوانٍ، وهذا ما يسمى هبوط الضغط الانتصابي.", en: "When you stand, blood drops into the legs; if the body compensates poorly, your head spins for a few seconds: this is orthostatic hypotension." },
      { fr: "Les médicaments contre la tension, les diurétiques, certains antidépresseurs et la chaleur de l'été l'aggravent.", ar: "أدوية الضغط ومدرات البول وبعض مضادات الاكتئاب وحرارة الصيف تزيدها سوءاً.", en: "Blood pressure medicines, diuretics, some antidepressants and summer heat make it worse." },
      { fr: "Pendant le Ramadan ou une forte chaleur, la déshydratation est la première cause.", ar: "خلال رمضان أو الحر الشديد، الجفاف هو السبب الأول.", en: "During Ramadan or strong heat, dehydration is the first cause." },
      { fr: "Chez une personne âgée, une tension basse avec chutes doit faire revoir l'ensemble des médicaments.", ar: "عند المسن، انخفاض الضغط مع السقوط يستدعي مراجعة جميع الأدوية.", en: "In an elderly person, low pressure with falls calls for reviewing all medicines." },
    ],
    meanwhile: [
      { fr: "Levez-vous en deux temps : assis au bord du lit, puis debout après quelques secondes.", ar: "انهض على مرحلتين: اجلس على حافة السرير، ثم قف بعد بضع ثوانٍ.", en: "Stand up in two steps: sit on the edge of the bed, then stand after a few seconds." },
      { fr: "Buvez 1,5 à 2 litres d'eau par jour, plus s'il fait chaud.", ar: "اشرب من 1.5 إلى 2 لتر ماء يومياً، وأكثر في الحر.", en: "Drink 1.5 to 2 litres of water a day, more in hot weather." },
      { fr: "Ne sautez pas de repas ; des bas de contention peuvent aider.", ar: "لا تفوّت الوجبات؛ وقد تساعد الجوارب الضاغطة.", en: "Don't skip meals; compression stockings can help." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste, surtout si vous prenez des médicaments ou si vous avez eu un malaise.", ar: "طبيبك العام، خاصة إذا كنت تتناول أدوية أو أصبت بإغماء.", en: "Your GP, especially if you take medicines or have fainted." },
    exams: [
      { fr: "Tension couché puis debout à 1 et 3 minutes.", ar: "قياس الضغط مستلقياً ثم واقفاً بعد دقيقة و3 دقائق.", en: "Blood pressure lying then standing at 1 and 3 minutes." },
      { fr: "Prise de sang (anémie, sodium, glycémie).", ar: "تحليل دم (فقر الدم، الصوديوم، السكر).", en: "Blood test (anaemia, sodium, sugar)." },
      { fr: "Électrocardiogramme si malaise.", ar: "تخطيط القلب عند الإغماء.", en: "Electrocardiogram if fainting." },
    ],
    questions: [
      { fr: "Un de mes médicaments fait-il baisser ma tension ?", ar: "هل أحد أدويتي يخفض ضغطي؟", en: "Is one of my medicines lowering my blood pressure?" },
      { fr: "Dois-je manger plus salé ?", ar: "هل يجب أن أتناول ملحاً أكثر؟", en: "Should I eat more salt?" },
      { fr: "Que faire si je sens le malaise arriver ?", ar: "ماذا أفعل إذا شعرت بالإغماء يقترب؟", en: "What should I do if I feel I'm about to faint?" },
    ],
    warning: {
      fr: "perte de connaissance, malaise avec douleur dans la poitrine ou palpitations, chute avec blessure, selles noires ou saignement, ou confusion.",
      ar: "فقدان الوعي، إغماء مع ألم في الصدر أو خفقان، سقوط مع إصابة، براز أسود أو نزيف، أو تشوش.",
      en: "loss of consciousness, fainting with chest pain or palpitations, a fall with injury, black stools or bleeding, or confusion.",
    },
    sources: [{ label: "Ameli, Hypotension orthostatique", url: "https://www.ameli.fr/assure/sante/themes/hypotension-orthostatique" }],
  },
  controle: {
    summary: {
      fr: "Contrôler sa tension régulièrement est le meilleur moyen de dépister l'hypertension, qui ne donne aucun symptôme. Après 40 ans, ou plus tôt s'il y a du diabète, du surpoids ou des antécédents familiaux, une mesure par an suffit.",
      ar: "مراقبة الضغط بانتظام هي أفضل وسيلة للكشف عن ارتفاعه الذي لا يسبب أي أعراض. بعد 40 سنة، أو قبل ذلك عند وجود سكري أو زيادة وزن أو سوابق عائلية، يكفي قياس واحد في السنة.",
      en: "Checking blood pressure regularly is the best way to detect hypertension, which causes no symptoms. After 40, or earlier with diabetes, overweight or family history, one measurement a year is enough.",
    },
    explanation: [
      { fr: "Tension normale : en dessous de 14/9 en cabinet, de 13,5/8,5 à la maison. Le premier chiffre est la pression quand le cœur se contracte, le second quand il se relâche.", ar: "الضغط الطبيعي: أقل من 14/9 في العيادة، و13.5/8.5 في البيت. الرقم الأول هو الضغط عند انقباض القلب، والثاني عند انبساطه.", en: "Normal: below 140/90 at the doctor's, 135/85 at home. The first number is the pressure when the heart contracts, the second when it relaxes." },
      { fr: "Un tensiomètre de bras validé, acheté en pharmacie, est plus fiable qu'un modèle de poignet.", ar: "جهاز قياس الذراع المعتمد من الصيدلية أدق من جهاز المعصم.", en: "A validated upper-arm monitor from the pharmacy is more reliable than a wrist model." },
      { fr: "Évitez de mesurer juste après un café, une cigarette, un effort ou une contrariété.", ar: "تجنب القياس مباشرة بعد القهوة أو السيجارة أو المجهود أو الانفعال.", en: "Avoid measuring right after coffee, a cigarette, exertion or an upset." },
    ],
    meanwhile: [
      { fr: "Mesurez toujours au même bras, assis, après 5 minutes de calme, le brassard à hauteur du cœur.", ar: "قس دائماً على نفس الذراع، جالساً، بعد 5 دقائق من الهدوء، والحزام في مستوى القلب.", en: "Always measure on the same arm, seated, after 5 calm minutes, cuff at heart level." },
      { fr: "Notez les chiffres avec la date et l'heure dans un carnet ou une application.", ar: "سجّل الأرقام مع التاريخ والوقت في دفتر أو تطبيق.", en: "Record the numbers with date and time in a notebook or app." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste, une fois par an, ou le pharmacien pour une mesure ponctuelle.", ar: "طبيبك العام مرة في السنة، أو الصيدلي لقياس عرضي.", en: "Your GP once a year, or the pharmacist for a one-off reading." },
    exams: [
      { fr: "Mesure de la tension, du poids et du tour de taille.", ar: "قياس الضغط والوزن ومحيط الخصر.", en: "Blood pressure, weight and waist measurement." },
      { fr: "Glycémie et cholestérol tous les 3 à 5 ans après 40 ans.", ar: "السكر والكوليسترول كل 3 إلى 5 سنوات بعد 40 سنة.", en: "Blood sugar and cholesterol every 3 to 5 years after 40." },
    ],
    questions: [
      { fr: "À quelle fréquence dois-je mesurer ma tension ?", ar: "كم مرة يجب أن أقيس ضغطي؟", en: "How often should I measure my blood pressure?" },
      { fr: "Quel tensiomètre me conseillez-vous ?", ar: "أي جهاز قياس تنصحني به؟", en: "Which monitor do you recommend?" },
      { fr: "Quels sont mes autres facteurs de risque cardiovasculaire ?", ar: "ما هي عوامل الخطر القلبية الأخرى عندي؟", en: "What are my other cardiovascular risk factors?" },
    ],
    warning: {
      fr: "mesure au-dessus de 18/11 confirmée après 5 minutes de repos, surtout avec mal de tête, douleur dans la poitrine ou trouble de la vue.",
      ar: "قياس فوق 18/11 مؤكد بعد 5 دقائق من الراحة، خاصة مع صداع أو ألم في الصدر أو اضطراب في الرؤية.",
      en: "a reading above 180/110 confirmed after 5 minutes' rest, especially with headache, chest pain or vision trouble.",
    },
    sources: [AMELI_HTA],
  },
  traitement: {
    summary: {
      fr: "Un traitement contre la tension se prend tous les jours, à vie le plus souvent, même quand on se sent bien. L'arrêter sans avis médical fait remonter la tension en quelques jours et expose à un AVC.",
      ar: "علاج الضغط يؤخذ كل يوم، ومدى الحياة في الغالب، حتى عند الشعور بالتحسن. إيقافه دون رأي طبي يرفع الضغط خلال أيام ويعرّض لجلطة دماغية.",
      en: "Blood pressure treatment is taken every day, usually for life, even when you feel well. Stopping it without medical advice sends pressure back up within days and risks a stroke.",
    },
    explanation: [
      { fr: "Il existe plusieurs familles de médicaments. Le médecin choisit selon votre âge, vos reins, votre diabète et vos autres traitements.", ar: "توجد عدة عائلات من الأدوية. يختار الطبيب حسب عمرك وكليتيك وسكريك وأدويتك الأخرى.", en: "There are several families of medicines. The doctor chooses based on your age, kidneys, diabetes and other treatments." },
      { fr: "Il faut souvent 2 à 4 semaines pour voir l'effet complet, et parfois associer deux médicaments en un seul comprimé.", ar: "يلزم غالباً من أسبوعين إلى 4 أسابيع لرؤية التأثير الكامل، وأحياناً يُجمع دواءان في قرص واحد.", en: "It often takes 2 to 4 weeks to see the full effect, and sometimes two medicines are combined in one tablet." },
      { fr: "Les effets indésirables (toux, chevilles gonflées, fatigue, vertiges) se corrigent en changeant de molécule : parlez-en au lieu d'arrêter.", ar: "الآثار الجانبية (سعال، تورم الكاحلين، تعب، دوخة) تُصحح بتغيير الدواء، فتحدث عنها بدل التوقف.", en: "Side effects (cough, swollen ankles, tiredness, dizziness) are fixed by switching molecule: talk about them instead of stopping." },
      { fr: "Pendant le Ramadan, l'heure de prise peut être adaptée avec le médecin, jamais seul.", ar: "خلال رمضان، يمكن تعديل وقت الدواء مع الطبيب، وليس بمفردك أبداً.", en: "During Ramadan, the timing can be adjusted with the doctor, never alone." },
    ],
    meanwhile: [
      { fr: "Prenez le comprimé chaque jour à la même heure, avec un rappel sur le téléphone.", ar: "تناول القرص كل يوم في نفس الوقت، مع تذكير على الهاتف.", en: "Take the tablet at the same time every day, with a phone reminder." },
      { fr: "Continuez l'automesure une semaine par mois et apportez les chiffres.", ar: "واصل القياس الذاتي أسبوعاً في الشهر وأحضر الأرقام.", en: "Keep home measurements one week a month and bring the numbers." },
      { fr: "Évitez les anti-inflammatoires (ibuprofène) sans avis : ils font monter la tension.", ar: "تجنب مضادات الالتهاب (إيبوبروفين) دون استشارة لأنها ترفع الضغط.", en: "Avoid anti-inflammatories (ibuprofen) without advice: they raise blood pressure." },
    ],
    whichDoctor: { fr: "Votre médecin généraliste tous les 3 à 6 mois une fois la tension équilibrée.", ar: "طبيبك العام كل 3 إلى 6 أشهر بعد استقرار الضغط.", en: "Your GP every 3 to 6 months once the pressure is controlled." },
    exams: [
      { fr: "Prise de sang une fois par an : créatinine, potassium, glycémie, cholestérol.", ar: "تحليل دم مرة في السنة: الكرياتينين، البوتاسيوم، السكر، الكوليسترول.", en: "Yearly blood test: creatinine, potassium, sugar, cholesterol." },
      { fr: "Électrocardiogramme régulier.", ar: "تخطيط القلب بانتظام.", en: "Regular electrocardiogram." },
    ],
    questions: [
      { fr: "Que faire si j'oublie une prise ?", ar: "ماذا أفعل إذا نسيت جرعة؟", en: "What if I forget a dose?" },
      { fr: "Cet effet secondaire vient-il de mon traitement ?", ar: "هل هذا الأثر الجانبي من علاجي؟", en: "Does this side effect come from my treatment?" },
      { fr: "Comment adapter mon traitement pendant le Ramadan ?", ar: "كيف أعدّل علاجي خلال رمضان؟", en: "How do I adapt my treatment during Ramadan?" },
      { fr: "Pourrai-je un jour diminuer ou arrêter ?", ar: "هل يمكنني يوماً تخفيض الدواء أو إيقافه؟", en: "Could I one day reduce or stop it?" },
    ],
    warning: {
      fr: "tension au-dessus de 18/11 malgré le traitement, malaise ou chute, gonflement du visage ou des lèvres après un nouveau médicament, ou douleur dans la poitrine.",
      ar: "ضغط فوق 18/11 رغم العلاج، إغماء أو سقوط، تورم الوجه أو الشفتين بعد دواء جديد، أو ألم في الصدر.",
      en: "blood pressure above 180/110 despite treatment, fainting or a fall, swelling of the face or lips after a new medicine, or chest pain.",
    },
    sources: [AMELI_HTA, OMS_HTA],
  },
};
