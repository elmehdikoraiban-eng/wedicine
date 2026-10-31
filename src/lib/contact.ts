// Messages du formulaire « Nous contacter » : gardés en base, lus dans l'admin (/admin/messages).
import { db } from "./db";

export const SUBJECTS = [
  { id: "site", key: "subjSite" },
  { id: "compte", key: "subjAccount" },
  { id: "donnees", key: "subjData" },
  { id: "medecin", key: "subjDoctor" },
  { id: "partenariat", key: "subjPartner" },
  { id: "autre", key: "subjOther" },
] as const;
export const SUBJECT_FR: Record<string, string> = { site: "Question sur le site", compte: "Mon compte", donnees: "Mes données", medecin: "Médecin", partenariat: "Partenariat ou presse", autre: "Autre" };

export type ContactMsg = { id: number; at: string | Date; user_id: number | null; lang: string; name: string; contact: string; subject: string; message: string; handled: boolean };

export async function addMessage(m: { userId: number | null; lang: string; name: string; contact: string; subject: string; message: string }) {
  const d = await db();
  // Anti-abus simple : au plus 5 messages par contact sur 24 h.
  const n = Number((await d.query("SELECT count(*)::int AS n FROM wedicine.contact_messages WHERE lower(contact) = lower($1) AND at > now() - interval '1 day'", [m.contact])).rows[0].n);
  if (n >= 5) return false;
  await d.query("INSERT INTO wedicine.contact_messages (user_id, lang, name, contact, subject, message) VALUES ($1,$2,$3,$4,$5,$6)", [m.userId, m.lang, m.name, m.contact, m.subject, m.message]);
  return true;
}

export async function messages(filter: "todo" | "done" | "all" = "todo") {
  const d = await db();
  const w = filter === "todo" ? "WHERE NOT handled" : filter === "done" ? "WHERE handled" : "";
  return (await d.query(`SELECT * FROM wedicine.contact_messages ${w} ORDER BY id DESC LIMIT 200`)).rows as ContactMsg[];
}

export async function countTodo() {
  const d = await db();
  return Number((await d.query("SELECT count(*)::int AS n FROM wedicine.contact_messages WHERE NOT handled")).rows[0].n);
}

export async function setHandled(id: number, handled: boolean) {
  const d = await db();
  await d.query("UPDATE wedicine.contact_messages SET handled = $2 WHERE id = $1", [id, handled]);
}
