import type { Lang, T } from "./i18n";
import { AGES, CITIES, DURATIONS } from "./content/options";
import type { Theme } from "./content/themes";
import type { Fiche } from "./content/types";
import type { Answers } from "./triage";
import { stepPicto, type Picto } from "./pictos";

// Personnalisation de la réponse à partir des choix du patient.
// Le contenu médical de la fiche reste la référence ; ces règles l'adaptent
// (durée, âge, intensité, signes, grossesse, proche) sans jamais le contredire.
// Elles sont volontairement prudentes : en cas de doute, on conseille de consulter plus tôt.

export type Level = 0 | 1 | 2; // 0 surveiller à la maison · 1 rendez-vous cette semaine · 2 consulter sous 48 h

export type Step = { text: string; personal: boolean; picto?: Picto };

export type Personal = {
  level: Level;
  verdict: string;        // une phrase qui répond au cas précis
  reasons: string[];      // ce qui a pesé dans la décision (puces courtes)
  know: string[];         // paragraphes « pour vous » avant l'explication générale
  meanwhile: Step[];      // étapes fusionnées, les personnelles marquées
  doctor: { who: string; why: string } | null; // remplace le médecin de la fiche si le profil le demande
  exams: string | null;   // phrase d'introduction adaptée à la durée
  questions: Step[];      // questions à poser, les personnelles d'abord
  warning: string[];      // signes d'alerte supplémentaires liés au profil
};

const pick = (l: Lang, x: T) => x[l];
const lower = (l: Lang, s: string) => (l === "ar" ? s : s.toLowerCase());

export function personalize(a: Answers, th: Theme, fiche: Fiche, l: Lang): Personal {
  const dur = DURATIONS.findIndex((d) => d.id === a.duration);
  const durLabel = dur >= 0 ? lower(l, DURATIONS[dur].label[l]) : null;
  const limit = DURATIONS[th.consultAfter]?.label[l];
  const child = a.who === "enfant" || a.age === "a0" || a.age === "a1" || a.age === "a2";
  const teen = a.age === "a3";
  const baby = a.age === "a1";
  const senior = a.age === "a7";
  const pregnant = a.pregnant === true;
  const relative = a.who === "proche";
  const strong = a.intensity === "3";
  const long = th.duration && dur >= 0 && dur >= th.consultAfter;
  const veryLong = th.duration && dur >= 3; // 1 à 4 semaines et plus
  const signs = a.signs.map((id) => th.signs.find((s) => s.id === id)).filter(Boolean) as Theme["signs"];
  const signLabels = signs.map((s) => lower(l, s.label[l]));
  const city = a.city && a.city !== "autre" ? CITIES.find((c) => c.id === a.city)?.label[l] : null;
  const age = AGES.find((x) => x.id === a.age)?.label[l];

  // ---- Niveau ------------------------------------------------------------
  let level: Level = 0;
  const reasons: string[] = [];
  if (long) {
    level = 1;
    reasons.push(pick(l, { fr: `Durée : ${durLabel}`, ar: `المدة: ${durLabel}`, en: `Duration: ${durLabel}` }));
  } else if (durLabel) {
    reasons.push(pick(l, { fr: `Encore récent : ${durLabel}`, ar: `لا يزال حديثاً: ${durLabel}`, en: `Still recent: ${durLabel}` }));
  }
  if (strong) {
    level = 2;
    reasons.push(pick(l, { fr: "Gêne très forte", ar: "انزعاج قوي جداً", en: "Very strong discomfort" }));
  }
  if (baby || senior || pregnant) {
    level = Math.max(level, 1) as Level;
    if (baby) reasons.push(pick(l, { fr: "Enfant de moins de 2 ans", ar: "طفل أقل من سنتين", en: "Child under 2" }));
    if (senior) reasons.push(pick(l, { fr: "Plus de 60 ans", ar: "أكثر من 60 سنة", en: "Over 60" }));
    if (pregnant) reasons.push(pick(l, { fr: "Grossesse", ar: "حمل", en: "Pregnancy" }));
  }
  if (signs.length >= 2 && level === 0) {
    level = 1;
    reasons.push(pick(l, { fr: "Plusieurs signes associés", ar: "عدة علامات مصاحبة", en: "Several associated signs" }));
  } else if (signs.length) {
    reasons.push(pick(l, { fr: `Signe associé : ${signLabels.join(", ")}`, ar: `علامة مصاحبة: ${signLabels.join("، ")}`, en: `Associated sign: ${signLabels.join(", ")}` }));
  }
  if (th.id === "bilan") level = 1; // un bilan se fait chez le médecin, par définition

  // ---- Verdict -----------------------------------------------------------
  const subject = pick(l, relative
    ? { fr: "votre proche", ar: "قريبك", en: "your relative" }
    : child ? { fr: "votre enfant", ar: "طفلك", en: "your child" } : { fr: "vous", ar: "أنت", en: "you" });
  const sym = lower(l, th.symptoms.find((s) => s.id === a.symptom)?.label[l] ?? th.label[l]);
  const since = durLabel ? pick(l, { fr: ` depuis ${durLabel}`, ar: ` منذ ${durLabel}`, en: ` for ${durLabel}` }) : "";
  const ageTxt = age ? pick(l, { fr: ` (${lower(l, age)})`, ar: ` (${age})`, en: ` (${lower(l, age)})` }) : "";
  const head = pick(l, {
    fr: `${sym.charAt(0).toUpperCase()}${sym.slice(1)}${since}${relative || child ? ` chez ${subject}` : ""}${ageTxt} :`,
    ar: `${sym}${since}${relative || child ? ` عند ${subject}` : ""}${ageTxt}:`,
    en: `${sym.charAt(0).toUpperCase()}${sym.slice(1)}${since}${relative || child ? ` in ${subject}` : ""}${ageTxt}:`,
  });
  const tail = [
    { fr: "rien ne presse. Surveillez à la maison et suivez les conseils ci-dessous.", ar: "لا شيء يستعجل. راقب في المنزل واتبع النصائح أدناه.", en: "nothing is pressing. Watch at home and follow the advice below." },
    { fr: "prenez rendez-vous chez le médecin cette semaine. Ce n'est pas une urgence, mais ça ne doit plus attendre.", ar: "احجز موعداً عند الطبيب هذا الأسبوع. ليست حالة طارئة، لكنها لا يجب أن تنتظر أكثر.", en: "book a doctor's appointment this week. It is not an emergency, but it should not wait any longer." },
    { fr: "consultez dans les 48 heures. Si un signe en rouge apparaît, appelez le 141 (SAMU).", ar: "استشر طبيباً خلال 48 ساعة. إذا ظهرت علامة حمراء، اتصل بالرقم 141 (الإسعاف الطبي).", en: "see a doctor within 48 hours. If a red sign appears, call 141 (SAMU)." },
  ][level];
  const verdict = `${head} ${pick(l, tail)}`;

  // ---- Ce qu'il faut savoir, pour vous ----------------------------------
  const know: string[] = [];
  if (th.duration && durLabel) {
    if (veryLong) know.push(pick(l, {
      fr: `Après ${durLabel}, on ne parle plus d'un épisode passager. Le médecin cherchera une cause précise plutôt que de traiter le symptôme seul.`,
      ar: `بعد ${durLabel}، لم يعد الأمر مجرد نوبة عابرة. سيبحث الطبيب عن سبب محدد بدلاً من معالجة العرض فقط.`,
      en: `After ${durLabel}, this is no longer a passing episode. The doctor will look for a specific cause rather than treat the symptom alone.`,
    }));
    else if (long) know.push(pick(l, {
      fr: `${durLabel.charAt(0).toUpperCase()}${durLabel.slice(1)}, c'est la durée à partir de laquelle un avis médical est utile pour ce type de problème.`,
      ar: `${durLabel} هي المدة التي يصبح فيها الرأي الطبي مفيداً لهذا النوع من المشاكل.`,
      en: `${durLabel.charAt(0).toUpperCase()}${durLabel.slice(1)} is the point from which a medical opinion is useful for this kind of problem.`,
    }));
    else if (limit) know.push(pick(l, {
      fr: `À ce stade (${durLabel}), la plupart des cas s'améliorent seuls. Le repère à retenir : si ça dure ${lower(l, limit)} ou s'aggrave, consultez.`,
      ar: `في هذه المرحلة (${durLabel})، تتحسن أغلب الحالات من تلقاء نفسها. القاعدة: إذا استمر ${limit} أو ساء، استشر الطبيب.`,
      en: `At this stage (${durLabel}), most cases improve on their own. The rule of thumb: if it lasts ${lower(l, limit)} or gets worse, see a doctor.`,
    }));
  }
  if (baby) know.push(pick(l, {
    fr: "Chez un enfant de moins de 2 ans, l'état peut changer en quelques heures. Ce qui compte le plus : qu'il boive, urine et réagisse normalement.",
    ar: "عند طفل أقل من سنتين، قد تتغير الحالة في غضون ساعات. الأهم: أن يشرب ويتبول ويتفاعل بشكل طبيعي.",
    en: "In a child under 2, things can change within hours. What matters most: that they drink, pass urine and react normally.",
  }));
  else if (child) know.push(pick(l, {
    fr: "Chez l'enfant, les infections sont fréquentes et le plus souvent sans gravité. Les doses de médicaments se calculent au poids, jamais à l'âge.",
    ar: "عند الأطفال، العدوى شائعة وغالباً غير خطيرة. تُحسب جرعات الأدوية حسب الوزن، وليس العمر.",
    en: "In children, infections are common and most often harmless. Medicine doses are worked out by weight, never by age.",
  }));
  if (teen) know.push(pick(l, {
    fr: "À l'adolescence, le sommeil, les écrans et le stress scolaire jouent souvent un rôle. Le médecin posera des questions sur le quotidien.",
    ar: "في سن المراهقة، يلعب النوم والشاشات والضغط الدراسي دوراً في الغالب. سيسأل الطبيب عن الحياة اليومية.",
    en: "In teenagers, sleep, screens and school stress often play a part. The doctor will ask about daily life.",
  }));
  if (senior) know.push(pick(l, {
    fr: "Après 60 ans, les signes sont parfois plus discrets et les complications plus rapides, surtout avec des traitements en cours. Consultez plus tôt que ce que la fiche indique.",
    ar: "بعد 60 سنة، تكون العلامات أحياناً أخف والمضاعفات أسرع، خاصة مع وجود علاجات جارية. استشر في وقت أبكر مما تشير إليه البطاقة.",
    en: "After 60, signs are sometimes subtler and complications faster, especially with ongoing treatments. See a doctor earlier than the sheet suggests.",
  }));
  if (pregnant) know.push(pick(l, {
    fr: "Pendant la grossesse, beaucoup de médicaments sont déconseillés (ibuprofène, aspirine). Parlez de ces symptômes à votre médecin ou sage-femme, même s'ils paraissent banals.",
    ar: "أثناء الحمل، يُنصح بتجنب العديد من الأدوية (إيبوبروفين، أسبرين). تحدثي عن هذه الأعراض مع طبيبك أو القابلة، حتى لو بدت عادية.",
    en: "During pregnancy many medicines are not advised (ibuprofen, aspirin). Mention these symptoms to your doctor or midwife, even if they seem minor.",
  }));
  if (strong) know.push(pick(l, {
    fr: "Vous décrivez une gêne très forte. L'intensité ne dit pas tout, mais quand elle empêche de dormir, de manger ou de travailler, elle justifie à elle seule une consultation rapide.",
    ar: "تصف انزعاجاً قوياً جداً. الشدة لا تقول كل شيء، لكن عندما تمنع النوم أو الأكل أو العمل، فهي وحدها تبرر استشارة سريعة.",
    en: "You describe very strong discomfort. Intensity is not everything, but when it stops you sleeping, eating or working it alone justifies seeing a doctor quickly.",
  }));
  if (signLabels.length) know.push(pick(l, {
    fr: `Vous avez aussi coché : ${signLabels.join(", ")}. Ce${signLabels.length > 1 ? "s signes orientent" : " signe oriente"} le médecin et vous ser${signLabels.length > 1 ? "ont" : "a"} demandé${signLabels.length > 1 ? "s" : ""} en consultation.`,
    ar: `اخترت أيضاً: ${signLabels.join("، ")}. هذه العلامات توجّه الطبيب وسيسألك عنها أثناء الاستشارة.`,
    en: `You also ticked: ${signLabels.join(", ")}. ${signLabels.length > 1 ? "These signs guide" : "This sign guides"} the doctor and will come up during the visit.`,
  }));
  know.push(...themeKnow(a, th, l));

  // ---- Que faire en attendant --------------------------------------------
  const first: Step[] = [];
  if (level >= 1 && th.id !== "bilan") first.push({ personal: true, picto: { icon: "CalendarCheck", tone: "blue" }, text: pick(l, level === 2
    ? { fr: "Prenez rendez-vous aujourd'hui ou demain. Si vous ne trouvez pas de créneau, un centre de santé ou les urgences peuvent vous recevoir.", ar: "احجز موعداً اليوم أو غداً. إذا لم تجد موعداً، يمكن لمركز صحي أو قسم المستعجلات استقبالك.", en: "Book an appointment today or tomorrow. If you cannot find a slot, a health centre or the emergency department can see you." }
    : { fr: "Prenez rendez-vous chez le médecin dès cette semaine, sans attendre que ça passe.", ar: "احجز موعداً عند الطبيب هذا الأسبوع، دون انتظار أن يزول من تلقاء نفسه.", en: "Book a doctor's appointment this week, without waiting for it to pass." }) });
  if (child) first.push({ personal: true, picto: { icon: "Scale", tone: "purple" }, text: pick(l, {
    fr: "Pesez l'enfant : les doses de paracétamol se calculent au poids (et pas d'ibuprofène sans avis médical).",
    ar: "زِن الطفل: تُحسب جرعة الباراسيتامول حسب الوزن (ولا إيبوبروفين دون رأي طبي).",
    en: "Weigh the child: paracetamol doses are worked out by weight (and no ibuprofen without medical advice).",
  }) });
  if (pregnant) first.push({ personal: true, picto: { icon: "Ban", tone: "red" }, text: pick(l, {
    fr: "Ni ibuprofène ni aspirine. Le paracétamol reste possible aux doses habituelles, en l'absence de contre-indication.",
    ar: "لا إيبوبروفين ولا أسبرين. يبقى الباراسيتامول ممكناً بالجرعات المعتادة إذا لم يكن هناك مانع.",
    en: "No ibuprofen or aspirin. Paracetamol remains possible at the usual doses if there is no contraindication.",
  }) });
  if (senior) first.push({ personal: true, picto: { icon: "ClipboardList", tone: "blue" }, text: pick(l, {
    fr: "Préparez la liste de vos traitements habituels (ou les boîtes) : elle sera demandée dès la consultation.",
    ar: "جهّز قائمة أدويتك المعتادة (أو العلب): سيُطلب منك ذلك منذ بداية الاستشارة.",
    en: "Prepare the list of your usual medicines (or the boxes): it will be asked for at the start of the visit.",
  }) });
  if (relative) first.push({ personal: true, picto: { icon: "Users", tone: "purple" }, text: pick(l, {
    fr: "Accompagnez votre proche à la consultation et notez pour lui ce qui a changé ces derniers jours.",
    ar: "رافق قريبك إلى الاستشارة وسجّل له ما تغيّر في الأيام الأخيرة.",
    en: "Go with your relative to the appointment and note down for them what has changed in the last few days.",
  }) });
  if (th.duration && dur >= 0) first.push({ personal: true, picto: { icon: "NotebookPen", tone: "yellow" }, text: pick(l, veryLong
    ? { fr: "Notez sur une semaine : heures, intensité, ce qui soulage et ce qui aggrave. Un carnet simple vaut mieux qu'une mémoire floue.", ar: "سجّل خلال أسبوع: الأوقات، الشدة، ما يخفف وما يزيد. دفتر بسيط أفضل من ذاكرة مشوشة.", en: "Keep a one-week log: times, intensity, what helps and what worsens. A simple notebook beats a hazy memory." }
    : { fr: `Donnez-vous un repère : si c'est toujours là ${limit ? `après ${lower(l, limit)}` : "dans quelques jours"}, ou si ça empire, consultez.`, ar: `حدّد لنفسك معلماً: إذا استمر ${limit ? `بعد ${limit}` : "بعد بضعة أيام"} أو ساء، استشر الطبيب.`, en: `Set yourself a marker: if it is still there ${limit ? `after ${lower(l, limit)}` : "in a few days"}, or gets worse, see a doctor.` }) });
  const meanwhile: Step[] = [...first, ...fiche.meanwhile.map((p) => ({ text: p[l], personal: false, picto: stepPicto(p.fr) }))];

  // ---- Quel médecin ------------------------------------------------------
  let doctor: Personal["doctor"] = null;
  if (child) doctor = { who: pick(l, { fr: "Pédiatre ou médecin généraliste", ar: "طبيب أطفال أو طبيب عام", en: "Paediatrician or general practitioner" }),
    why: pick(l, { fr: "Pour un enfant, les deux conviennent. Le pédiatre suit la croissance, le généraliste est souvent plus proche.", ar: "بالنسبة للطفل، كلاهما مناسب. طبيب الأطفال يتابع النمو، والطبيب العام غالباً أقرب.", en: "For a child both are suitable. The paediatrician follows growth, the GP is often closer." }) };
  else if (pregnant) doctor = { who: pick(l, { fr: "Votre gynécologue ou sage-femme", ar: "طبيبة النساء أو القابلة", en: "Your gynaecologist or midwife" }),
    why: pick(l, { fr: "Pendant la grossesse, ils connaissent votre suivi et les médicaments compatibles. Le généraliste reste possible.", ar: "أثناء الحمل، يعرفون متابعتك والأدوية المناسبة. الطبيب العام يبقى خياراً.", en: "During pregnancy they know your follow-up and which medicines are compatible. The GP remains an option." }) };
  else if (senior) doctor = { who: pick(l, { fr: "Votre médecin généraliste habituel", ar: "طبيبك العام المعتاد", en: "Your usual general practitioner" }),
    why: pick(l, { fr: "Il connaît vos traitements et vos antécédents, ce qui évite les interactions et les examens inutiles.", ar: "يعرف أدويتك وتاريخك الصحي، ما يجنّب التداخلات والفحوصات غير الضرورية.", en: "They know your medicines and history, which avoids interactions and unnecessary tests." }) };
  if (doctor && city) doctor.why += pick(l, { fr: ` À ${city}, en cas d'urgence : 141 (SAMU) ou 15 (Protection civile).`, ar: ` في ${city}، في حالة الطوارئ: 141 (الإسعاف الطبي) أو 15 (الوقاية المدنية).`, en: ` In ${city}, in an emergency: 141 (SAMU) or 15 (Civil Protection).` });

  // ---- Examens -----------------------------------------------------------
  let exams: string | null = null;
  if (th.id !== "bilan" && th.duration && dur >= 0) {
    exams = pick(l, long
      ? { fr: `Après ${durLabel}, un ou deux examens simples sont probables pour trouver la cause :`, ar: `بعد ${durLabel}، من المحتمل إجراء فحص أو فحصين بسيطين لمعرفة السبب:`, en: `After ${durLabel}, one or two simple tests are likely to find the cause:` }
      : { fr: "Vu la durée encore courte, le médecin ne prescrira probablement rien dans un premier temps. Si ça dure, voici ce qu'il peut proposer :", ar: "نظراً لقصر المدة، لن يصف الطبيب على الأرجح أي فحص في البداية. إذا استمر الأمر، هذا ما قد يقترحه:", en: "Given the short duration, the doctor will probably not order anything at first. If it lasts, here is what may be proposed:" });
    if (child) exams += pick(l, { fr: " Chez l'enfant, on se limite au strict nécessaire.", ar: " عند الأطفال، نقتصر على الضروري فقط.", en: " In children, only what is strictly necessary." });
  }

  // ---- Questions à poser -------------------------------------------------
  const pq: Step[] = [];
  if (durLabel) pq.push({ personal: true, text: pick(l, {
    fr: `Ça dure depuis ${durLabel} : est-ce normal pour ce type de problème ?`,
    ar: `يستمر منذ ${durLabel}: هل هذا طبيعي لهذا النوع من المشاكل؟`,
    en: `It has lasted ${durLabel}: is that normal for this kind of problem?`,
  }) });
  for (const s of signLabels) pq.push({ personal: true, text: pick(l, {
    fr: `J'ai aussi ${s} : est-ce lié ?`, ar: `عندي أيضاً ${s}: هل هذا مرتبط؟`, en: `I also have ${s}: is it related?`,
  }) });
  if (strong) pq.push({ personal: true, text: pick(l, {
    fr: "Que puis-je prendre pour être soulagé en attendant que ça passe ?", ar: "ما الذي يمكنني تناوله لتخفيف الألم في انتظار أن يزول؟", en: "What can I take to feel better while it passes?",
  }) });
  if (child) pq.push({ personal: true, text: pick(l, {
    fr: `Quelle dose exacte pour son poids, et à quel rythme ?`, ar: `ما الجرعة الدقيقة حسب وزنه، وكل كم ساعة؟`, en: `What exact dose for their weight, and how often?`,
  }) });
  if (pregnant) pq.push({ personal: true, text: pick(l, {
    fr: "Quels médicaments sont compatibles avec ma grossesse ?", ar: "ما الأدوية المتوافقة مع حملي؟", en: "Which medicines are compatible with my pregnancy?",
  }) });
  if (senior) pq.push({ personal: true, text: pick(l, {
    fr: "Est-ce compatible avec mes traitements habituels ?", ar: "هل هذا متوافق مع أدويتي المعتادة؟", en: "Is this compatible with my usual medicines?",
  }) });
  if (relative) pq.push({ personal: true, text: pick(l, {
    fr: "Que dois-je surveiller chez lui à la maison, et quand revenir ?", ar: "ما الذي يجب أن أراقبه عنده في المنزل، ومتى نعود؟", en: "What should I watch for at home, and when should we come back?",
  }) });
  const questions: Step[] = [...pq, ...fiche.questions.map((p) => ({ text: p[l], personal: false }))];

  // ---- Alertes supplémentaires -------------------------------------------
  const warning: string[] = [];
  if (baby) warning.push(pick(l, { fr: "chez votre enfant : refuse de boire, somnolent ou difficile à réveiller, pleurs inconsolables, moins de couches mouillées", ar: "عند طفلك: يرفض الشرب، خامل أو يصعب إيقاظه، بكاء لا يهدأ، حفاضات مبللة أقل", en: "in your child: refusing to drink, drowsy or hard to wake, inconsolable crying, fewer wet nappies" }));
  else if (child) warning.push(pick(l, { fr: "chez votre enfant : fièvre qui ne baisse pas sous paracétamol, taches violacées, somnolence inhabituelle", ar: "عند طفلك: حمى لا تنخفض مع الباراسيتامول، بقع بنفسجية، خمول غير معتاد", en: "in your child: fever not dropping with paracetamol, purple spots, unusual drowsiness" }));
  if (senior) warning.push(pick(l, { fr: "après 60 ans : confusion, chute, arrêt de l'alimentation ou de la boisson", ar: "بعد 60 سنة: تشوش، سقوط، التوقف عن الأكل أو الشرب", en: "after 60: confusion, a fall, stopping eating or drinking" }));
  if (pregnant) warning.push(pick(l, { fr: "enceinte : saignements, contractions, fièvre au-dessus de 38,5 °C, maux de tête violents", ar: "حامل: نزيف، تقلصات، حمى فوق 38.5 درجة، صداع شديد", en: "pregnant: bleeding, contractions, fever above 38.5 °C, violent headaches" }));

  return { level, verdict, reasons, know, meanwhile, doctor, exams, questions, warning };
}

// Touches propres à certains thèmes et signes. Courtes, factuelles.
function themeKnow(a: Answers, th: Theme, l: Lang): string[] {
  const out: string[] = [];
  const has = (id: string) => a.signs.includes(id);
  if (th.id === "fievre" && a.symptom === "urines" && a.sex === "m") out.push(pick(l, {
    fr: "Chez l'homme, une fièvre avec brûlures en urinant touche souvent la prostate et se traite plus longtemps : consultez sans attendre.",
    ar: "عند الرجال، الحمى مع حرقة أثناء التبول غالباً ما تمس البروستاتا وتُعالج لمدة أطول: استشر دون تأخير.",
    en: "In men, fever with burning when urinating often involves the prostate and needs longer treatment: see a doctor without delay.",
  }));
  if (th.id === "tete" && has("lumiere") && has("nausees")) out.push(pick(l, {
    fr: "Nausées et gêne à la lumière ensemble font penser à une migraine. Le médecin pourra proposer un traitement de crise adapté.",
    ar: "الغثيان والانزعاج من الضوء معاً يوحيان بالشقيقة. قد يقترح الطبيب علاجاً مناسباً للنوبة.",
    en: "Nausea and light sensitivity together point to migraine. The doctor can suggest a suitable attack treatment.",
  }));
  if (th.id === "tension") out.push(pick(l, {
    fr: "Si vous avez un tensiomètre, mesurez matin et soir pendant 3 jours, assis, au repos, et apportez les chiffres.",
    ar: "إذا كان لديك جهاز قياس الضغط، قس صباحاً ومساءً لمدة 3 أيام، جالساً ومستريحاً، وأحضر الأرقام.",
    en: "If you have a blood pressure monitor, measure morning and evening for 3 days, seated and at rest, and bring the figures.",
  }));
  if (th.id === "diabete" && has("poids")) out.push(pick(l, {
    fr: "Une perte de poids sans régime associée à ces signes doit être signalée : c'est un des éléments qui font avancer le rendez-vous.",
    ar: "فقدان الوزن دون حمية مع هذه العلامات يجب الإبلاغ عنه: فهو من العناصر التي تستدعي تقديم الموعد.",
    en: "Weight loss without dieting together with these signs should be reported: it is one of the things that brings the appointment forward.",
  }));
  if (th.id === "dos" && has("fourmis")) out.push(pick(l, {
    fr: "Des fourmillements dans une jambe orientent vers une irritation d'un nerf (sciatique). Notez de quel côté et jusqu'où ils descendent.",
    ar: "التنميل في الساق يوجّه نحو تهيج عصب (عرق النسا). سجّل في أي جهة وإلى أين يمتد.",
    en: "Tingling in a leg points to an irritated nerve (sciatica). Note which side and how far down it goes.",
  }));
  if (th.id === "digestion" && a.zone === "bas-ventre" && a.sex === "f") out.push(pick(l, {
    fr: "Chez la femme, une douleur du bas-ventre peut aussi venir de l'appareil gynécologique : la date des dernières règles sera demandée.",
    ar: "عند المرأة، قد يكون ألم أسفل البطن من الجهاز التناسلي أيضاً: سيُطلب تاريخ آخر دورة شهرية.",
    en: "In women, lower belly pain can also come from the gynaecological organs: the date of your last period will be asked.",
  }));
  if (th.id === "sommeil" && (has("ecrans") || has("cafe"))) out.push(pick(l, {
    fr: "Écrans le soir ou café après 16 h : ce sont les deux leviers les plus efficaces à changer avant même la consultation.",
    ar: "الشاشات في المساء أو القهوة بعد الساعة 16: هما أكثر عاملين يمكن تغييرهما بفعالية حتى قبل الاستشارة.",
    en: "Screens in the evening or coffee after 4 pm: these are the two most effective levers to change even before the visit.",
  }));
  if (th.id === "allergie" && has("toux")) out.push(pick(l, {
    fr: "Une toux qui accompagne l'allergie, surtout la nuit ou à l'effort, fait rechercher un asthme : parlez-en au médecin.",
    ar: "السعال المصاحب للحساسية، خاصة ليلاً أو عند الجهد، يستدعي البحث عن الربو: تحدث عنه مع الطبيب.",
    en: "A cough that comes with the allergy, especially at night or on exertion, calls for checking for asthma: mention it to the doctor.",
  }));
  return out;
}
