import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import type { AstroCookies } from "astro";
import { createSession, deleteSession, userBySession } from "./db";

const COOKIE = "wd_session";

export function hashPassword(pw: string) {
  const salt = randomBytes(16).toString("hex");
  return `${salt}:${scryptSync(pw, salt, 64).toString("hex")}`;
}

export function checkPassword(pw: string, stored: string) {
  const [salt, hash] = stored.split(":");
  const a = scryptSync(pw, salt, 64);
  const b = Buffer.from(hash, "hex");
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function startSession(cookies: AstroCookies, userId: number) {
  const token = randomBytes(32).toString("hex");
  await createSession(userId, token);
  cookies.set(COOKIE, token, {
    httpOnly: true, sameSite: "lax", secure: import.meta.env.PROD, path: "/",
    maxAge: 60 * 60 * 24 * 90,
  });
}

export async function endSession(cookies: AstroCookies) {
  const token = cookies.get(COOKIE)?.value;
  if (token) await deleteSession(token).catch(() => undefined);
  cookies.delete(COOKIE, { path: "/" });
}

export async function currentUser(cookies: AstroCookies) {
  const token = cookies.get(COOKIE)?.value;
  if (!token) return undefined;
  return userBySession(token).catch(() => undefined);
}

// Nom affiché publiquement : prénom + initiale du nom.
// « Prénom N. », ou le prénom seul quand le nom n'a pas été donné (le compte créé dans la conversation ne le demande pas).
export const publicName = (first: string, last: string) => { const i = last.trim().charAt(0); return i ? `${first.trim()} ${i.toUpperCase()}.` : first.trim(); };
