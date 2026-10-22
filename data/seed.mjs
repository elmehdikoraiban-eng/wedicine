// Contenu initial : médecine générale uniquement. Médecins et avis fictifs.

export const DOCTORS = [
  { name: "Dr Salma Bennani", city: "Casablanca", address: "48, Bd Zerktouni, Casablanca", distance_km: 1.2, languages: "Français, Arabe, Darija", price_mad: 200, next_slot: "Aujourd'hui" },
  { name: "Dr Youssef Alaoui", city: "Rabat", address: "15, Av. Mohammed V, Rabat", distance_km: 0.8, languages: "Français, Darija, Anglais", price_mad: 200, next_slot: "Demain" },
  { name: "Dr Nadia Tazi", city: "Marrakech", address: "102, Av. Hassan II, Marrakech", distance_km: 2.4, languages: "Français, Arabe, Darija", price_mad: 180, next_slot: "Aujourd'hui" },
  { name: "Dr Karim El Idrissi", city: "Tanger", address: "7, Rue Ibn Sina, Tanger", distance_km: 1.6, languages: "Français, Espagnol, Darija", price_mad: 200, next_slot: "Dans 2 jours" },
  { name: "Dr Imane Berrada", city: "Fès", address: "33, Av. Allal Ben Abdellah, Fès", distance_km: 3.1, languages: "Français, Arabe, Darija", price_mad: 150, next_slot: "Demain" },
  { name: "Dr Omar Amrani", city: "Agadir", address: "21, Bd Hassan II, Agadir", distance_km: 1.9, languages: "Français, Darija, Amazigh", price_mad: 180, next_slot: "Aujourd'hui" },
];

const REVIEW_POOL = [
  [5, "Fatima Z.", "Très à l'écoute, a pris le temps de tout m'expliquer. J'avais préparé mes questions et ça a beaucoup aidé."],
  [5, "Rachid B.", "Diagnostic clair et rapide, cabinet propre, peu d'attente."],
  [4, "Khadija M.", "Médecin compétent et rassurant. Un peu d'attente le samedi."],
  [5, "Anas T.", "Explique avec des mots simples, en darija ou en français. Je recommande."],
  [4, "Meryem L.", "Bon suivi après la consultation, répond aux messages."],
  [3, "Said E.", "Compétent mais consultation un peu rapide à mon goût."],
  [5, "Hajar K.", "A pris mes questions au sérieux et m'a orientée vers les bons examens."],
];

export const REVIEWS = DOCTORS.flatMap((_, i) =>
  [0, 1, 2].map((k) => {
    const [rating, author, text] = REVIEW_POOL[(i * 2 + k) % REVIEW_POOL.length];
    return { doctor_index: i, rating, author, text, date: `${(i * 5 + k * 7) % 27 + 1}/0${k + 7}/2026` };
  })
);

export const ANSWERS = [
  {
    topic: "Fièvre chez l'adulte",
    keywords: "fièvre,température,frissons,chaud,fiévreux",
    summary: "La fièvre est une réaction normale du corps face à une infection, le plus souvent virale et bénigne.",
    explanation: [
      "On parle de fièvre au-delà de 38 °C. Elle accompagne souvent un rhume, une grippe ou une infection urinaire ou digestive.",
      "Buvez régulièrement, reposez-vous et portez des vêtements légers. Mesurez la température matin et soir et notez-la.",
      "Une fièvre qui dure plus de 3 jours, qui revient, ou qui s'accompagne d'autres symptômes mérite une consultation.",
    ],
    questions: [
      "Quelle peut être la cause de ma fièvre ?",
      "Faut-il faire une prise de sang ou une analyse d'urine ?",
      "Quel traitement contre la fièvre est adapté à ma situation et à mes autres médicaments ?",
      "Au bout de combien de jours dois-je revenir si ça ne passe pas ?",
    ],
    warning: "Fièvre avec raideur de la nuque, taches sur la peau, difficulté à respirer, confusion, ou fièvre au retour d'un voyage.",
  },
  {
    topic: "Rhume, grippe et toux",
    keywords: "rhume,grippe,toux,tousse,nez qui coule,nez bouché,éternue,courbatures,bronchite",
    summary: "Le rhume et la grippe sont des infections virales fréquentes, qui guérissent le plus souvent seules en une à deux semaines.",
    explanation: [
      "Les antibiotiques n'agissent pas sur les virus : ils ne sont utiles qu'en cas d'infection bactérienne confirmée par le médecin.",
      "Le repos, une bonne hydratation, le lavage du nez au sérum physiologique et l'aération de la pièce soulagent les symptômes.",
      "Une toux peut durer jusqu'à trois semaines après un virus. Au-delà, ou si elle s'aggrave, il faut consulter.",
      "Le vaccin contre la grippe est recommandé chaque automne pour les plus de 65 ans, les malades chroniques et les femmes enceintes.",
    ],
    questions: [
      "Est-ce un virus ou une infection qui nécessite des antibiotiques ?",
      "Que puis-je prendre pour soulager la toux sans risque avec mes autres traitements ?",
      "Suis-je concerné par le vaccin contre la grippe ?",
      "Combien de temps suis-je contagieux ?",
    ],
    warning: "Essoufflement, douleur dans la poitrine, fièvre élevée persistante, ou crachats avec du sang.",
  },
  {
    topic: "Mal de gorge",
    keywords: "gorge,angine,avaler,amygdales,pharyngite",
    summary: "La plupart des maux de gorge sont dus à des virus. Certaines angines sont bactériennes et se traitent par antibiotiques.",
    explanation: [
      "Le médecin peut faire un test rapide en cabinet (TDR) pour savoir si l'angine est bactérienne.",
      "Boire chaud ou froid, sucer des pastilles et se reposer soulage en attendant la guérison.",
      "Évitez de prendre des antibiotiques qui restent d'un ancien traitement sans avis médical.",
    ],
    questions: [
      "Pouvez-vous faire un test rapide pour savoir si c'est une angine bactérienne ?",
      "Ai-je besoin d'antibiotiques ?",
      "Que faire si ça revient souvent ?",
    ],
    warning: "Difficulté à respirer ou à ouvrir la bouche, impossibilité d'avaler sa salive, gonflement du cou.",
  },
  {
    topic: "Maux de tête",
    keywords: "mal de tête,maux de tête,migraine,céphalée,tête",
    summary: "Les maux de tête sont très fréquents et le plus souvent bénins : tension, fatigue, stress, manque de sommeil ou d'eau.",
    explanation: [
      "Les céphalées de tension donnent une sensation de serrement autour de la tête. La migraine est plus souvent d'un côté, pulsatile, avec gêne à la lumière.",
      "Tenir un carnet (heure, durée, déclencheurs, médicaments pris) aide beaucoup le médecin.",
      "Prendre trop souvent des antidouleurs peut entretenir les maux de tête : parlez-en à votre médecin.",
    ],
    questions: [
      "S'agit-il de migraines ou de céphalées de tension ?",
      "Quels sont mes déclencheurs possibles ?",
      "Est-ce que je prends trop d'antidouleurs ?",
      "Faut-il contrôler ma tension ou ma vue ?",
    ],
    warning: "Mal de tête brutal et très intense, avec fièvre et raideur de nuque, après un choc, ou avec trouble de la vue, de la parole ou faiblesse d'un côté.",
  },
  {
    topic: "Tension artérielle",
    keywords: "tension,hypertension,pression artérielle,tensiomètre,hypotension",
    summary: "L'hypertension est souvent silencieuse : elle se dépiste en mesurant la tension régulièrement.",
    explanation: [
      "On parle d'hypertension quand la tension dépasse 14/9 de façon répétée en cabinet, ou 13,5/8,5 en automesure à domicile.",
      "Pour une automesure fiable : assis, au repos 5 minutes, 3 mesures le matin et 3 le soir, pendant 3 jours.",
      "Réduire le sel, bouger 30 minutes par jour, limiter le tabac et l'alcool aident à faire baisser la tension.",
    ],
    questions: [
      "Mes chiffres de tension sont-ils normaux pour mon âge ?",
      "Faut-il faire une automesure à la maison ou un holter ?",
      "Quels examens faut-il faire (prise de sang, électrocardiogramme) ?",
      "Quels changements d'alimentation et d'activité me conseillez-vous ?",
    ],
    warning: "Tension très élevée avec mal de tête intense, douleur dans la poitrine, trouble de la vue ou de la parole.",
  },
  {
    topic: "Diabète et glycémie",
    keywords: "diabète,glycémie,sucre dans le sang,soif,uriner souvent,insuline,hba1c",
    summary: "Le diabète de type 2 est fréquent au Maroc et peut rester longtemps sans symptôme. Une simple prise de sang permet de le dépister.",
    explanation: [
      "Une glycémie à jeun supérieure à 1,26 g/L à deux reprises confirme un diabète. Entre 1,10 et 1,26 g/L, on parle de prédiabète.",
      "Une soif importante, des envies fréquentes d'uriner, une fatigue ou une perte de poids inexpliquée doivent faire consulter.",
      "Le surpoids, l'âge, la sédentarité et les antécédents familiaux augmentent le risque.",
    ],
    questions: [
      "Dois-je faire une glycémie à jeun ou une HbA1c ?",
      "Mes résultats sont-ils normaux, limites ou anormaux ?",
      "Quels changements de mode de vie peuvent m'aider ?",
      "À quelle fréquence dois-je refaire un contrôle ?",
    ],
    warning: "Soif intense avec vomissements, somnolence ou confusion chez une personne diabétique.",
  },
  {
    topic: "Brûlures d'estomac et digestion",
    keywords: "estomac,brûlure,reflux,acidité,digestion,ventre,ballonnement,nausée",
    summary: "Les brûlures d'estomac et le reflux sont fréquents et souvent liés à l'alimentation, au stress ou au surpoids.",
    explanation: [
      "Les repas copieux, gras ou épicés, le café, le tabac et le fait de s'allonger juste après manger favorisent le reflux.",
      "Surélever la tête du lit et dîner au moins 2 heures avant le coucher aide souvent.",
      "Si les symptômes durent plusieurs semaines, le médecin peut proposer un traitement ou rechercher la bactérie Helicobacter pylori.",
    ],
    questions: [
      "Est-ce un reflux, une gastrite ou autre chose ?",
      "Faut-il rechercher Helicobacter pylori ?",
      "Ai-je besoin d'une fibroscopie ?",
      "Quels aliments dois-je éviter ?",
    ],
    warning: "Vomissements de sang, selles noires, difficulté à avaler, perte de poids inexpliquée, ou douleur intense.",
  },
  {
    topic: "Diarrhée",
    keywords: "diarrhée,gastro,selles liquides,intoxication alimentaire,turista",
    summary: "La diarrhée aiguë est le plus souvent due à un virus ou à un aliment, et passe en quelques jours.",
    explanation: [
      "Le risque principal est la déshydratation : buvez souvent par petites quantités. Les solutions de réhydratation orale (SRO) vendues en pharmacie sont les plus adaptées.",
      "Mangez léger : riz, carottes cuites, bananes, compotes. Lavez-vous bien les mains pour éviter de contaminer vos proches.",
      "Une diarrhée qui dure plus de 3 jours doit faire consulter.",
    ],
    questions: [
      "Faut-il faire une analyse des selles ?",
      "Comment savoir si je suis déshydraté ?",
      "Que puis-je manger pendant et après ?",
    ],
    warning: "Sang dans les selles, forte fièvre, signes de déshydratation (bouche sèche, peu d'urines, vertiges), ou diarrhée chez un nourrisson ou une personne âgée.",
  },
  {
    topic: "Fatigue persistante",
    keywords: "fatigue,fatigué,épuisé,épuisement,manque d'énergie,anémie,carence",
    summary: "La fatigue a de nombreuses causes : sommeil, stress, alimentation, carences (fer, vitamine D), thyroïde, ou maladie.",
    explanation: [
      "Notez depuis quand vous êtes fatigué, votre sommeil, votre appétit, votre moral et les changements récents dans votre vie.",
      "Le médecin peut demander un bilan sanguin simple : numération, fer (ferritine), thyroïde (TSH), glycémie, vitamine D.",
      "Une fatigue avec perte d'intérêt, tristesse ou troubles du sommeil peut aussi être liée à une dépression, qui se soigne.",
    ],
    questions: [
      "Quelles analyses de sang faut-il faire ?",
      "Ma fatigue peut-elle venir d'une carence ou de la thyroïde ?",
      "Mes médicaments peuvent-ils fatiguer ?",
      "Comment améliorer mon sommeil ?",
    ],
    warning: "Fatigue avec essoufflement, perte de poids importante, fièvre prolongée, ou idées noires.",
  },
  {
    topic: "Douleurs de dos",
    keywords: "dos,lombaire,lumbago,sciatique,colonne,mal au dos,cervicales,nuque",
    summary: "La plupart des douleurs de dos sont mécaniques et s'améliorent en quelques semaines.",
    explanation: [
      "Rester actif autant que possible aide à guérir plus vite que le repos complet au lit.",
      "La chaleur, la marche et des exercices doux soulagent souvent. Une kinésithérapie peut être proposée.",
      "La radio ou l'IRM ne sont pas utiles dans la majorité des cas : le médecin décide selon l'examen.",
    ],
    questions: [
      "Ma douleur est-elle mécanique ou faut-il chercher autre chose ?",
      "Ai-je besoin d'une radio ou d'une IRM ?",
      "Quels exercices puis-je faire ?",
      "Une kinésithérapie est-elle utile ?",
    ],
    warning: "Perte de force dans une jambe, engourdissement entre les cuisses, troubles pour uriner, fièvre, ou douleur après une chute.",
  },
  {
    topic: "Troubles du sommeil",
    keywords: "sommeil,insomnie,dormir,réveil nocturne,endormir,ronfle",
    summary: "L'insomnie est fréquente et souvent liée au stress, aux écrans, à la caféine ou aux horaires irréguliers.",
    explanation: [
      "Se coucher et se lever à heure fixe, éviter les écrans une heure avant le coucher et le café après 14 h aide beaucoup.",
      "Les somnifères ne sont pas une solution durable et peuvent créer une dépendance : parlez-en avec votre médecin.",
      "Des ronflements forts avec pauses respiratoires et somnolence le jour peuvent évoquer une apnée du sommeil.",
    ],
    questions: [
      "Mon insomnie peut-elle être liée au stress ou à un autre problème de santé ?",
      "Dois-je faire un bilan pour l'apnée du sommeil ?",
      "Quelles solutions sans médicament me conseillez-vous ?",
    ],
    warning: "Somnolence au volant, ou insomnie avec idées noires.",
  },
  {
    topic: "Allergies saisonnières",
    keywords: "allergie,éternuement,yeux qui grattent,pollen,rhinite allergique,urticaire",
    summary: "La rhinite allergique provoque éternuements, nez qui coule et yeux qui piquent, souvent au printemps.",
    explanation: [
      "Les allergies au pollen, aux acariens ou aux poils d'animaux sont fréquentes et se soulagent bien.",
      "Aérer tôt le matin, rincer le nez au sérum physiologique et laver les cheveux le soir limitent l'exposition au pollen.",
      "Un allergologue peut faire des tests si les symptômes sont gênants ou reviennent chaque année.",
    ],
    questions: [
      "Est-ce une allergie ou un rhume ?",
      "Faut-il faire des tests allergiques ?",
      "Quel traitement est adapté pour moi ?",
    ],
    warning: "Gonflement des lèvres, de la langue ou de la gorge, ou difficulté à respirer : appelez le 15.",
  },
  {
    topic: "Bilan de santé",
    keywords: "bilan,check-up,analyse,prise de sang,dépistage,cholestérol,contrôle",
    summary: "Un bilan de santé régulier permet de dépister tôt des maladies fréquentes et silencieuses.",
    explanation: [
      "Selon l'âge et les antécédents, il comprend souvent la tension, le poids, une glycémie, un bilan du cholestérol et la fonction rénale.",
      "Pour les femmes, le dépistage du cancer du col de l'utérus et du sein est recommandé à partir d'un certain âge.",
      "Apportez vos anciens résultats et la liste de vos médicaments.",
    ],
    questions: [
      "Quels examens sont recommandés pour mon âge ?",
      "À quelle fréquence dois-je faire un bilan ?",
      "Quels dépistages de cancer me concernent ?",
      "Mes vaccins sont-ils à jour ?",
    ],
    warning: null,
  },
];

export const FALLBACK = {
  topic: "Question générale",
  summary: "Voici quelques repères pour préparer votre consultation. Ils ne remplacent pas l'avis de votre médecin, qui seul peut vous examiner.",
  explanation: [
    "Ce type de question a souvent plusieurs causes possibles. Le médecin s'appuiera sur vos antécédents, un examen et parfois des analyses.",
    "Notez depuis quand les symptômes ont commencé, leur fréquence, ce qui les améliore ou les aggrave, et les traitements déjà pris.",
    "Apportez vos ordonnances, vos résultats d'analyses récents et la liste de vos médicaments.",
  ],
  questions: [
    "Quelles sont les causes les plus probables dans mon cas ?",
    "Faut-il faire des examens ? Lesquels et pourquoi ?",
    "Quels traitements existent, et quels sont leurs effets secondaires ?",
    "Qu'est-ce que je peux changer au quotidien ?",
    "Quels signes doivent me faire revenir ou aller aux urgences ?",
  ],
  warning: null,
};
