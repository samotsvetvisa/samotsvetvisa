/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "О нас",
  description: "Samotsvet: более 10 000 разобранных профилей, сравнение направлений в 14 странах и единая методология подготовки.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero section-shell about-hero">
          <div><p className="eyebrow">О Samotsvet</p><h1>Мы разбираем задачу глубже, чем список виз</h1></div>
          <p>Мы начинаем не со страны или названия визы, а с цели и ситуации клиента. Разбираем профессиональный или бизнес-профиль, гражданство, семейные обстоятельства и сроки, сравниваем доступные программы и предлагаем реалистичные варианты переезда. Если подходящий маршрут требует более сильных доказательств, заранее составляем план подготовки.</p>
        </section>

        <section className="section-shell founder-profile" id="nikita">
          <div className="founder-photo">
            <img src="/nikita-founder-white-v3.webp" alt="Никита Самоцветов, основатель Samotsvet" width="1149" height="1368" />
          </div>
          <div className="founder-copy">
            <p className="eyebrow">Основатель</p>
            <h2>Никита Самоцветов</h2>
            <p className="founder-role">Основатель и руководитель практики. Отвечает за методологию, стратегию сложных проектов и контроль качества.</p>
            <p>С 2021 года мы разобрали <strong>более 10 000 профессиональных профилей</strong>. Часть проектов вели полностью, в других работали с агентствами над оценкой маршрута или отдельными этапами подготовки. Великобритания остается одним из основных направлений.</p>
            <p>До запуска Samotsvet Никита работал в нескольких агентствах Европы и Великобритании: разбирал иммиграционные профили, запускал новые направления и был партнером в компаниях по релокации. Этот опыт стал основой методологии команды: мы сравниваем возможные маршруты, определяем нужные доказательства, проверяем источники и сверяем факты между документами.</p>
            <p>В 2023 году Никита окончил магистратуру University of Leeds по программе <strong>International Law and Global Governance (LLM)</strong>.</p>
            <p>В фокусе — Global Talent и Innovator Founder в Великобритании, O-1, EB-1A, EB-2 NIW и E-2 в США, Digital Nomad Visa (DNV) в Испании и carte de sejour Talent во Франции.</p>
            <Link className="text-link" href="/legal/">Как устроена работа агентства <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="section-shell values-grid facts-grid">
          <article><span>01</span><h2>10 000+ отсмотренных профилей</h2><p>Разбирали, куда могут переехать специалисты, предприниматели и их семьи, и сравнивали доступные направления: Великобританию, США, Испанию, Францию, Австралию, Болгарию, Португалию, Аргентину, Китай, Японию, Канаду, Швейцарию, Люксембург и Германию.</p></article>
          <article><span>02</span><h2>14 стран в сравнительном разборе</h2><p>Не ограничивались четырьмя основными направлениями сайта: оценивали варианты в Австралии, Болгарии, Португалии, Аргентине, Китае, Японии, Канаде, Швейцарии, Люксембурге и Германии.</p></article>
          <article><span>03</span><h2>Работа с агентствами</h2><p>Работали с агентствами как партнеры: разбирали профили и готовили отдельные части проектов.</p></article>
          <article><span>04</span><h2>Адвокат с лицензией в США</h2><p>Юридический этап по американским кейсам ведет наш партнер — адвокат с действующей лицензией на практику в США.</p></article>
        </section>

        <section className="section-shell about-details">
          <article><p className="eyebrow">Почему Samotsvet</p><h2>Сложные дела требуют индивидуальной работы</h2><p>Практика появилась из опыта внутри агентства, где сильный профиль мог потеряться в шаблоне. Мы ограничиваем число параллельных проектов и заранее фиксируем этапы, сроки и формат связи.</p></article>
          <article><p className="eyebrow">Наш стандарт</p><h2>Факты и реальные достижения</h2><p>Каждый тезис должен опираться на проверяемые документы и реальный результат. Для профиля на ранней стадии составляем план усиления; при отсутствии рабочего маршрута сразу объясняем причины.</p></article>
        </section>
        <section className="section-shell closing-cta"><div><p className="eyebrow eyebrow-light">Работа с нами</p><h2>Определим, что уже можно подтвердить и какие задачи войдут в план подготовки</h2></div><div><p>Короткая анкета дает достаточно данных для первого содержательного разговора.</p><Link className="button button-gold" href="/assessment/">Получить предварительную оценку</Link></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
