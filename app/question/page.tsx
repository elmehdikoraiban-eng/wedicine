import { Suspense } from "react";
import QuestionForm from "./QuestionForm";

export default function QuestionPage() {
  return (
    <main>
      <Suspense>
        <QuestionForm />
      </Suspense>
    </main>
  );
}
