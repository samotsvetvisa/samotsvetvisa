import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationLink } from "../components/ConsultationLink";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { CONTACT_EMAIL, pageMetadata, TELEGRAM_DIRECT_URL, TELEGRAM_HANDLE, TELEGRAM_URL } from "../site";
import { TelegramIcon } from "../components/TelegramButton";

export const metadata: Metadata = pageMetadata({
  title: "Контакты и реквизиты",
  description: "Контакты, сведения об исполнителе услуг и регистрационные данные Samotsvet.",
  path: "/contacts",
});

export default function ContactsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero section-shell">
          <div><p className="eyebrow">Связь с нами</p><h1>Контакты и реквизиты</h1></div>
          <p>Здесь указано, кто оказывает услуги и отвечает за обработку персональных данных.</p>
        </section>

        <section className="section-shell contacts-layout">
          <article className="contact-card contact-card-primary">
            <p className="eyebrow eyebrow-light">Остались вопросы?</p>
            <h2>Напишите нам</h2>
            <p>Можно коротко описать ситуацию в Telegram или по электронной почте. Ответим лично и предложим следующий шаг.</p>
            <div className="contact-links">
              <a className="button contact-channel contact-channel-telegram" href={TELEGRAM_DIRECT_URL} target="_blank" rel="noreferrer" data-contact-channel="telegram" data-cta-location="contacts_primary"><TelegramIcon /><span>Написать в Telegram</span></a>
              <a className="button contact-channel" href={`mailto:${CONTACT_EMAIL}`} data-contact-channel="email" data-cta-location="contacts_primary">Написать на почту</a>
              <a className="contact-channel-link" href={TELEGRAM_URL} target="_blank" rel="noreferrer" data-contact-channel="telegram_channel" data-cta-location="contacts_primary">Перейти в канал {TELEGRAM_HANDLE}</a>
            </div>
          </article>

          <article className="contact-card">
            <p className="eyebrow">Первичное обращение</p>
            <h2>Запишитесь на бесплатную консультацию</h2>
            <p>Ответьте на пять коротких вопросов. Свяжемся с Вами в течение рабочего дня, чтобы согласовать время разговора с Никитой Самоцветовым.</p>
            <ConsultationLink className="button button-primary" location="contacts_card" />
          </article>

          <article className="contact-card">
            <p className="eyebrow">Исполнитель и оператор данных</p>
            <h2>ИП Самоцветов Никита Андреевич</h2>
            <dl className="requisites-list">
              <div><dt>Юрисдикция</dt><dd>Российская Федерация</dd></div>
              <div><dt>ОГРНИП</dt><dd>323670000016524</dd></div>
              <div><dt>ИНН</dt><dd>672200624836</dd></div>
              <div><dt>Электронная почта</dt><dd><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd></div>
              <div><dt>Telegram</dt><dd><a href={TELEGRAM_URL} target="_blank" rel="noreferrer">{TELEGRAM_HANDLE}</a></dd></div>
            </dl>
          </article>

          <article className="contact-card">
            <p className="eyebrow">Обращения по данным</p>
            <h2>Как направить запрос</h2>
            <p>Запрос на доступ, исправление, ограничение обработки или удаление данных можно направить по электронной почте. Укажите имя и контакт, использованный в анкете, чтобы мы могли найти запись.</p>
            <a className="text-link" href={`mailto:${CONTACT_EMAIL}`} data-contact-channel="email" data-cta-location="privacy_request">Направить электронный запрос <span aria-hidden="true">↗</span></a>
          </article>

          <article className="contact-card">
            <p className="eyebrow">Роскомнадзор</p>
            <h2>Уведомление направлено</h2>
            <p>Оператор направил уведомление о намерении осуществлять обработку персональных данных. Номер и дата записи появятся здесь после публикации сведений в <a href="https://pd.rkn.gov.ru/operators-registry/operators-list/" target="_blank" rel="noreferrer">реестре операторов Роскомнадзора</a>.</p>
          </article>

          <article className="contact-card">
            <p className="eyebrow">Проект и расчеты</p>
            <h2>Все условия в одном плане</h2>
            <p>До старта Вы получаете состав работ, команду проекта, ключевые этапы, ориентиры по срокам, стоимость и порядок оплаты.</p>
            <Link className="text-link" href="/legal/">Как устроена работа агентства <span aria-hidden="true">↗</span></Link>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
