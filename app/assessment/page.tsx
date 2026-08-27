import type { Metadata } from "next";
import { AssessmentForm } from "../components/AssessmentForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Аудит профиля и подбор иммиграционных программ",
  description: "Локальный аудит карьерной основы, результатов и доказательств с подбором нескольких программ — без искусственного процента одобрения.",
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
            <h1>Проверим опыт до выбора страны</h1>
          </div>
          <p>
            Ответьте на вопросы о траектории, личном вкладе и независимых подтверждениях. Результат покажет несколько программ и объяснит, что уже работает, а что можно развить.
          </p>
        </section>
        <section className="section-shell assessment-layout">
          <aside>
            <span>Что Вы получите</span>
            <ol>
              <li>Несколько программ, а не маршрут выбранной страны.</li>
              <li>Сильные стороны и пробелы без псевдоточного процента.</li>
              <li>Понимание, что уже можно доказать документами.</li>
              <li>Варианты развития кейса, даже если публикаций пока нет.</li>
            </ol>
          </aside>
          <AssessmentForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
