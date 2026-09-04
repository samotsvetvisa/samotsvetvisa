import type { Metadata } from "next";
import { AssessmentForm } from "../components/AssessmentForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Оценка шансов и подбор иммиграционных программ",
  description: "Расскажите о цели, опыте и исходных данных. Команда Samotsvet сравнит подходящие программы и предложит следующий шаг.",
  path: "/assessment",
});

export default function AssessmentPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero section-shell assessment-hero">
          <div>
            <p className="eyebrow">Оценка шансов</p>
            <h1>Начнем с Вашей ситуации</h1>
          </div>
          <p>
            Заполните вводную анкету. Мы изучим цель переезда, исходные данные, опыт и доступные доказательства, затем сравним реалистичные программы.
          </p>
        </section>
        <section className="section-shell assessment-layout">
          <aside>
            <span>Что будет дальше</span>
            <ol>
              <li>Команда изучит анкету вручную.</li>
              <li>Сравнит подходящие страны и программы.</li>
              <li>Оценит основу кейса и ключевые пробелы.</li>
              <li>Предложит следующий шаг в течение одного рабочего дня.</li>
            </ol>
          </aside>
          <AssessmentForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
