import type { Metadata } from "next";
import { AssessmentForm } from "../components/AssessmentForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Аудит профиля",
  description: "Короткая анкета Samotsvet для анализа исходного профиля и подготовки плана дальнейшей работы.",
  path: "/assessment",
});

export default function AssessmentPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero section-shell assessment-hero">
          <div>
            <p className="eyebrow">Аудит профиля</p>
            <h1>Короткая анкета — около пяти минут</h1>
          </div>
          <p>
            Мы изучим анкету и ответим в течение 24 часов. Вы получите предварительное сравнение маршрутов, оценку исходного профиля и возможный формат работы.
          </p>
        </section>
        <section className="section-shell assessment-layout">
          <aside>
            <span>Что будет дальше</span>
            <ol>
              <li>Сопоставим цель с возможными маршрутами.</li>
              <li>Оценим исходный профиль и доступные доказательства.</li>
              <li>Покажем пробелы и предварительную последовательность работы.</li>
              <li>Предложим следующий этап и формат взаимодействия.</li>
            </ol>
          </aside>
          <AssessmentForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
