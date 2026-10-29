import type { Metadata } from "next";
import { t, type Lang } from "@/lib/i18n";
import { currentUser } from "@/lib/auth";
import { QuestionForm } from "@/components/QuestionForm";

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: t(lang, "start"), robots: { index: false } };
}

export default async function QuestionPage({ params, searchParams }: { params: Promise<{ lang: Lang }>; searchParams: Promise<{ theme?: string }> }) {
  const [{ lang }, { theme }] = await Promise.all([params, searchParams]);
  const user = await currentUser();
  return <QuestionForm lang={lang} loggedIn={!!user} initialTheme={theme} />;
}
