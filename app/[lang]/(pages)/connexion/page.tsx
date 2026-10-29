import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { t, type Lang } from "@/lib/i18n";
import { currentUser } from "@/lib/auth";
import { AuthForm } from "@/components/AuthForm";

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: t(lang, "login"), robots: { index: false } };
}

export default async function Login({ params, searchParams }: { params: Promise<{ lang: Lang }>; searchParams: Promise<{ next?: string }> }) {
  const [{ lang }, { next }] = await Promise.all([params, searchParams]);
  if (await currentUser()) redirect(next?.startsWith("/") ? next : `/${lang}/compte`);
  return (
    <div className="card" style={{ maxWidth: 460, margin: "0 auto" }}>
      <AuthForm lang={lang} initialMode="login" redirectTo={next?.startsWith("/") ? next : undefined} />
    </div>
  );
}
