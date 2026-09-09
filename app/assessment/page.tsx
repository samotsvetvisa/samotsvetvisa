import type { Metadata } from "next";
import { AssessmentForm } from "../components/AssessmentForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Бесплатная консультация с Никитой Самоцветовым",
  description: "Коротко расскажите о себе и цели переезда. На бесплатной консультации обсудим Вашу ситуацию и следующий шаг.",
  path: "/assessment",
});

export default function AssessmentPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero section-shell assessment-hero">
          <div>
            <p className="eyebrow">Первичная консультация</p>
            <h1>Бесплатная консультация с Никитой Самоцветовым</h1>
          </div>
          <p>
            Коротко расскажите о себе и цели переезда. На первичной консультации обсудим Вашу ситуацию и следующий шаг. Встреча длится до 20 минут, предварительно готовить комплект документов не нужно.
          </p>
        </section>
        <section className="section-shell assessment-layout">
          <aside>
            <span>Что входит</span>
            <ol>
              <li>До 20 минут разговора с Никитой Самоцветовым.</li>
              <li>Обсуждение цели, исходной ситуации и ограничений.</li>
              <li>Предварительное определение подходящих вариантов.</li>
              <li>Понятный следующий шаг после разговора.</li>
            </ol>
            <p>Консультация бесплатная. Аудит профиля с проверкой документов и письменная стратегия относятся к отдельной согласованной работе.</p>
          </aside>
          <AssessmentForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
