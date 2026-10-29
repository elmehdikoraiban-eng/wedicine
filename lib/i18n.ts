export const LANGS = ["fr", "ar", "en"] as const;
export type Lang = (typeof LANGS)[number];
export type T = Record<Lang, string>;

export const isLang = (l: string): l is Lang => (LANGS as readonly string[]).includes(l);
export const dir = (l: Lang) => (l === "ar" ? "rtl" : "ltr");
export const LANG_NAMES: T = { fr: "Français", ar: "العربية", en: "English" };

// Textes de l'interface. Le contenu médical est dans lib/content.
export const UI = {
  tagline: {
    fr: "Une question santé ? Une réponse claire avant votre consultation.",
    ar: "عندك سؤال صحي؟ جواب واضح قبل استشارتك.",
    en: "A health question? A clear answer before your appointment.",
  },
  heroSub: {
    fr: "Répondez à quelques choix illustrés. Vous recevez une explication simple et les questions à poser à votre médecin.",
    ar: "اختر بعض الإجابات المصوّرة، وستحصل على شرح بسيط والأسئلة التي يجب طرحها على طبيبك.",
    en: "Tap a few illustrated choices. You get a simple explanation and the questions to ask your doctor.",
  },
  start: { fr: "Poser ma question", ar: "اطرح سؤالي", en: "Ask my question" },
  free: { fr: "Gratuit", ar: "مجاني", en: "Free" },
  oneMinute: { fr: "1 minute", ar: "دقيقة واحدة", en: "1 minute" },
  noTyping: { fr: "Rien à écrire", ar: "بدون كتابة", en: "Nothing to type" },
  themesTitle: { fr: "Choisissez un sujet", ar: "اختر موضوعاً", en: "Pick a topic" },
  popular: { fr: "Questions fréquentes", ar: "أسئلة شائعة", en: "Popular questions" },
  disclaimerShort: {
    fr: "Information, pas diagnostic. Les réponses ne remplacent pas une consultation médicale.",
    ar: "معلومة وليست تشخيصاً. الأجوبة لا تعوّض استشارة الطبيب.",
    en: "Information, not diagnosis. Answers never replace a medical consultation.",
  },
  footer: {
    fr: "Wedicine fournit une information générale et ne remplace pas un médecin. En cas d'urgence, appelez le 15 (SAMU) ou le 141.",
    ar: "يقدّم Wedicine معلومات عامة ولا يعوّض الطبيب. في حالة الطوارئ، اتصل بالرقم 15 (الإسعاف) أو 141.",
    en: "Wedicine provides general information and does not replace a doctor. In an emergency, call 15 (SAMU) or 141.",
  },
  myQuestions: { fr: "Mes questions", ar: "أسئلتي", en: "My questions" },
  login: { fr: "Connexion", ar: "تسجيل الدخول", en: "Log in" },
  logout: { fr: "Déconnexion", ar: "تسجيل الخروج", en: "Log out" },
  back: { fr: "Retour", ar: "رجوع", en: "Back" },
  next: { fr: "Continuer", ar: "متابعة", en: "Continue" },
  step: { fr: "Étape", ar: "المرحلة", en: "Step" },
  of: { fr: "sur", ar: "من", en: "of" },
  // Écrans du formulaire
  qWho: { fr: "C'est pour qui ?", ar: "السؤال لمن؟", en: "Who is it for?" },
  qTheme: { fr: "Quel est le sujet ?", ar: "ما هو الموضوع؟", en: "What is it about?" },
  qSymptom: { fr: "Qu'est-ce que vous ressentez ?", ar: "بماذا تشعر؟", en: "What do you feel?" },
  qZone: { fr: "Où avez-vous mal ?", ar: "أين تشعر بالألم؟", en: "Where does it hurt?" },
  qIntensity: { fr: "C'est fort comment ?", ar: "ما مدى شدّته؟", en: "How strong is it?" },
  qDuration: { fr: "Depuis quand ?", ar: "منذ متى؟", en: "Since when?" },
  qSigns: { fr: "Avez-vous aussi… ?", ar: "هل لديك أيضاً…؟", en: "Do you also have…?" },
  qSignsHint: { fr: "Plusieurs choix possibles", ar: "يمكن اختيار عدة أجوبة", en: "Several choices possible" },
  qProfile: { fr: "Votre profil", ar: "معلوماتك", en: "Your profile" },
  qProfileOther: { fr: "Le profil de la personne", ar: "معلومات الشخص", en: "The person's profile" },
  qIntent: { fr: "Que voulez-vous savoir ?", ar: "ماذا تريد أن تعرف؟", en: "What do you want to know?" },
  age: { fr: "Âge", ar: "العمر", en: "Age" },
  sex: { fr: "Sexe", ar: "الجنس", en: "Sex" },
  female: { fr: "Femme", ar: "امرأة", en: "Female" },
  male: { fr: "Homme", ar: "رجل", en: "Male" },
  pregnant: { fr: "Enceinte ?", ar: "حامل؟", en: "Pregnant?" },
  yes: { fr: "Oui", ar: "نعم", en: "Yes" },
  no: { fr: "Non", ar: "لا", en: "No" },
  city: { fr: "Ville", ar: "المدينة", en: "City" },
  nothingElse: { fr: "Rien d'autre", ar: "لا شيء آخر", en: "Nothing else" },
  alertGroup: { fr: "Signes importants", ar: "علامات مهمة", en: "Important signs" },
  // Urgence
  urgentTitle: {
    fr: "Ces signes peuvent être une urgence",
    ar: "قد تكون هذه العلامات حالة طارئة",
    en: "These signs can be an emergency",
  },
  urgentText: {
    fr: "N'attendez pas de réponse en ligne. Appelez maintenant ou rendez-vous aux urgences les plus proches.",
    ar: "لا تنتظر جواباً عبر الإنترنت. اتصل الآن أو توجّه إلى أقرب مصلحة للمستعجلات.",
    en: "Don't wait for an online answer. Call now or go to the nearest emergency department.",
  },
  call15: { fr: "Appeler le 15 (SAMU)", ar: "اتصل بـ 15 (الإسعاف)", en: "Call 15 (SAMU)" },
  call141: { fr: "Appeler le 141", ar: "اتصل بـ 141", en: "Call 141" },
  urgentBack: { fr: "Je me suis trompé, revenir", ar: "أخطأت، رجوع", en: "I made a mistake, go back" },
  // Aperçu et inscription
  previewReady: { fr: "Votre réponse est prête", ar: "جوابك جاهز", en: "Your answer is ready" },
  previewLocked: {
    fr: "Créez votre compte gratuit pour lire la réponse complète et la retrouver plus tard.",
    ar: "أنشئ حسابك المجاني لقراءة الجواب كاملاً والعودة إليه لاحقاً.",
    en: "Create your free account to read the full answer and find it again later.",
  },
  firstName: { fr: "Prénom", ar: "الاسم الشخصي", en: "First name" },
  lastName: { fr: "Nom", ar: "الاسم العائلي", en: "Last name" },
  contact: { fr: "Email ou téléphone", ar: "البريد الإلكتروني أو الهاتف", en: "Email or phone" },
  password: { fr: "Mot de passe (6 caractères minimum)", ar: "كلمة المرور (6 أحرف على الأقل)", en: "Password (at least 6 characters)" },
  consentInfo: {
    fr: "Je comprends que la réponse est uniquement informative et que je dois consulter un médecin.",
    ar: "أفهم أن الجواب للمعلومة فقط وأنه يجب عليّ استشارة طبيب.",
    en: "I understand the answer is for information only and that I must see a doctor.",
  },
  consentTerms: {
    fr: "J'accepte les conditions d'utilisation et la politique de confidentialité (loi 09-08).",
    ar: "أوافق على شروط الاستخدام وسياسة الخصوصية (القانون 09-08).",
    en: "I accept the terms of use and the privacy policy (Moroccan law 09-08).",
  },
  consentPublish: {
    fr: "J'accepte que ma question soit publiée anonymement (prénom + initiale du nom, âge, ville) pour aider d'autres patients.",
    ar: "أوافق على نشر سؤالي دون كشف هويتي (الاسم الشخصي + الحرف الأول من الاسم العائلي، العمر، المدينة) لمساعدة مرضى آخرين.",
    en: "I agree that my question is published anonymously (first name + last initial, age, city) to help other patients.",
  },
  createAccount: { fr: "Créer mon compte et lire la réponse", ar: "أنشئ حسابي واقرأ الجواب", en: "Create my account and read the answer" },
  haveAccount: { fr: "J'ai déjà un compte", ar: "لدي حساب بالفعل", en: "I already have an account" },
  noAccount: { fr: "Créer un compte", ar: "إنشاء حساب", en: "Create an account" },
  loginAndRead: { fr: "Me connecter et lire la réponse", ar: "تسجيل الدخول وقراءة الجواب", en: "Log in and read the answer" },
  seeAnswer: { fr: "Voir ma réponse", ar: "اعرض جوابي", en: "See my answer" },
  wrongLogin: { fr: "Identifiants incorrects.", ar: "معلومات الدخول غير صحيحة.", en: "Wrong login details." },
  contactTaken: { fr: "Un compte existe déjà avec cet email ou ce téléphone.", ar: "يوجد حساب بهذا البريد أو الهاتف.", en: "An account already exists with this email or phone." },
  // Réponse
  answerInfo: {
    fr: "Réponse informative uniquement. Elle ne constitue ni un diagnostic ni une prescription. Consultez un médecin.",
    ar: "جواب للمعلومة فقط، وليس تشخيصاً ولا وصفة طبية. استشر طبيباً.",
    en: "Information only. This is neither a diagnosis nor a prescription. Please see a doctor.",
  },
  yourCase: { fr: "Dans votre cas", ar: "في حالتك", en: "In your case" },
  whatToKnow: { fr: "Ce qu'il faut savoir", ar: "ما يجب معرفته", en: "What to know" },
  meanwhile: { fr: "Que faire en attendant", ar: "ماذا تفعل في الانتظار", en: "What to do in the meantime" },
  whichDoctor: { fr: "Quel médecin consulter", ar: "أي طبيب تستشير", en: "Which doctor to see" },
  exams: { fr: "Examens possibles", ar: "الفحوصات الممكنة", en: "Possible tests" },
  askDoctor: { fr: "Questions à poser à votre médecin", ar: "أسئلة تطرحها على طبيبك", en: "Questions to ask your doctor" },
  seeQuickly: { fr: "Consultez rapidement si", ar: "استشر بسرعة إذا", en: "See a doctor quickly if" },
  print: { fr: "Imprimer", ar: "طباعة", en: "Print" },
  askedBy: { fr: "Question posée par", ar: "سؤال طرحه", en: "Question asked by" },
  othersAsked: { fr: "Ils ont posé cette question", ar: "طرحوا هذا السؤال", en: "They asked this question" },
  related: { fr: "Questions proches", ar: "أسئلة قريبة", en: "Related questions" },
  sources: { fr: "Sources", ar: "المصادر", en: "Sources" },
  reviewPending: {
    fr: "Contenu rédigé à partir de sources officielles. Relecture médicale en cours.",
    ar: "محتوى مكتوب اعتماداً على مصادر رسمية. المراجعة الطبية جارية.",
    en: "Written from official sources. Medical review in progress.",
  },
  published: { fr: "Publiée", ar: "منشور", en: "Published" },
  private: { fr: "Privée", ar: "خاص", en: "Private" },
  makePublic: { fr: "Publier anonymement", ar: "انشر دون كشف الهوية", en: "Publish anonymously" },
  makePrivate: { fr: "Retirer de la page publique", ar: "أزل من الصفحة العامة", en: "Remove from public page" },
  publicPage: { fr: "Voir la page publique", ar: "اعرض الصفحة العامة", en: "See public page" },
  noQuestions: { fr: "Vous n'avez pas encore posé de question.", ar: "لم تطرح أي سؤال بعد.", en: "You haven't asked any question yet." },
  newQuestion: { fr: "Nouvelle question", ar: "سؤال جديد", en: "New question" },
  since: { fr: "depuis", ar: "منذ", en: "for" },
  error: { fr: "Une erreur est survenue, réessayez.", ar: "حدث خطأ، حاول مرة أخرى.", en: "Something went wrong, please try again." },
} satisfies Record<string, T>;

export type UIKey = keyof typeof UI;
export const t = (l: Lang, k: UIKey) => UI[k][l];
