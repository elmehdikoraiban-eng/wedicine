import type { Lang } from "./i18n";
import { AGES, DURATIONS } from "./content/options";
import { theme } from "./content/themes";
import type { Answers } from "./triage";

// « Dans votre cas » : quelques phrases dérivées des choix du patient.
// Elles ne modifient pas le contenu médical de la fiche, elles l'orientent.
export function caseLines(a: Answers, l: Lang): string[] {
  const th = theme(a.theme);
  const out: string[] = [];
  if (!th) return out;
  const child = a.who === "enfant";
  const dur = DURATIONS.findIndex((d) => d.id === a.duration);
  const durLabel = dur >= 0 ? DURATIONS[dur].label[l] : null;

  if (durLabel && th.duration) {
    if (dur >= th.consultAfter) {
      out.push({
        fr: `Vos symptômes durent depuis ${durLabel.toLowerCase()} : c'est le moment de prendre rendez-vous, même si rien n'est inquiétant.`,
        ar: `أعراضك مستمرة منذ ${durLabel}: هذا هو الوقت المناسب لحجز موعد، حتى لو لم يكن هناك ما يقلق.`,
        en: `Your symptoms have lasted ${durLabel.toLowerCase()}: it's time to book an appointment, even if nothing is alarming.`,
      }[l]);
    } else {
      const limit = DURATIONS[th.consultAfter]?.label[l];
      if (limit) out.push({
        fr: `Depuis ${durLabel.toLowerCase()}, c'est encore récent. Si ça dure ${limit.toLowerCase()} ou s'aggrave, consultez.`,
        ar: `منذ ${durLabel}، الأمر لا يزال حديثاً. إذا استمر ${limit} أو ساء، استشر الطبيب.`,
        en: `${durLabel} is still recent. If it lasts ${limit.toLowerCase()} or gets worse, see a doctor.`,
      }[l]);
    }
  }

  if (a.intensity === "3") out.push({
    fr: "Vous décrivez une gêne très forte : ne restez pas plus de 48 heures sans avis médical.",
    ar: "تصف انزعاجاً قوياً جداً: لا تبقَ أكثر من 48 ساعة دون رأي طبي.",
    en: "You describe very strong discomfort: don't go more than 48 hours without medical advice.",
  }[l]);

  if (child && (a.age === "a1")) out.push({
    fr: "Chez un enfant de moins de 2 ans, les symptômes évoluent vite : surveillez boisson, urines et comportement, et consultez au moindre doute.",
    ar: "عند طفل أقل من سنتين، تتطور الأعراض بسرعة: راقب الشرب والتبول والسلوك، واستشر عند أدنى شك.",
    en: "In a child under 2, symptoms change quickly: watch drinking, urine and behaviour, and see a doctor at the slightest doubt.",
  }[l]);
  if (child && a.age === "a2") out.push({
    fr: "Pour un enfant, le pédiatre ou le médecin généraliste est le bon interlocuteur ; les doses de médicaments dépendent du poids.",
    ar: "بالنسبة للطفل، طبيب الأطفال أو الطبيب العام هو المخاطب المناسب؛ جرعات الأدوية تعتمد على الوزن.",
    en: "For a child, the paediatrician or GP is the right contact; medicine doses depend on weight.",
  }[l]);

  if (a.pregnant) out.push({
    fr: "Enceinte : évitez l'automédication (pas d'ibuprofène ni d'aspirine) et parlez de ces symptômes à votre médecin ou sage-femme.",
    ar: "حامل: تجنبي التداوي الذاتي (لا إيبوبروفين ولا أسبرين) وتحدثي عن هذه الأعراض مع طبيبك أو القابلة.",
    en: "Pregnant: avoid self-medication (no ibuprofen or aspirin) and mention these symptoms to your doctor or midwife.",
  }[l]);

  if (a.age === "a7") out.push({
    fr: "Après 60 ans, les symptômes sont parfois plus discrets et les complications plus rapides : consultez plus tôt que ce que la fiche indique.",
    ar: "بعد 60 سنة، تكون الأعراض أحياناً أخف والمضاعفات أسرع: استشر في وقت أبكر مما تشير إليه البطاقة.",
    en: "After 60, symptoms are sometimes milder and complications faster: see a doctor earlier than the sheet suggests.",
  }[l]);

  const signs = a.signs.map((id) => th.signs.find((s) => s.id === id)?.label[l]).filter(Boolean) as string[];
  if (signs.length) out.push({
    fr: `Vous avez aussi signalé : ${signs.join(", ").toLowerCase()}. Mentionnez-le au médecin, cela oriente le diagnostic.`,
    ar: `ذكرت أيضاً: ${signs.join("، ")}. أخبر الطبيب بذلك، فهو يساعد على التشخيص.`,
    en: `You also reported: ${signs.join(", ").toLowerCase()}. Mention it to the doctor, it helps the diagnosis.`,
  }[l]);

  if (a.who === "proche") out.push({
    fr: "Vous posez la question pour un proche : la meilleure aide est de l'accompagner à la consultation avec la liste de ses traitements.",
    ar: "تطرح السؤال من أجل قريب: أفضل مساعدة هي مرافقته إلى الاستشارة مع قائمة أدويته.",
    en: "You're asking for a relative: the best help is to go with them to the appointment with their list of medicines.",
  }[l]);

  const age = AGES.find((x) => x.id === a.age);
  if (!out.length && age) out.push({
    fr: "Rien dans vos réponses ne signale une urgence. Lisez la fiche, et prenez rendez-vous si les symptômes persistent.",
    ar: "لا شيء في إجاباتك يشير إلى حالة طارئة. اقرأ البطاقة، واحجز موعداً إذا استمرت الأعراض.",
    en: "Nothing in your answers points to an emergency. Read the sheet, and book an appointment if symptoms persist.",
  }[l]);
  return out;
}
