import Link from "next/link";
import { CONTACT_EMAIL, SERVICE_MODEL_EN, SERVICE_MODEL_RU, TELEGRAM_DIRECT_URL, TELEGRAM_HANDLE, TELEGRAM_URL, withTrailingSlash } from "../site";
import { BrandLockup } from "./BrandLockup";
import { ConsultationLink } from "./ConsultationLink";
import { TelegramIcon } from "./TelegramButton";

export function SiteFooter({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const isEnglish = locale === "en";
  const base = isEnglish ? "/en" : "";

  return (
    <footer className="site-footer" id="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <BrandLockup />
          <p>{isEnglish ? "End-to-end immigration and relocation: from choosing a route to filing and settling in." : "Иммиграция и релокация под ключ: от выбора маршрута до подачи и обустройства в новой стране."}</p>
        </div>
        <div>
          <h3>{isEnglish ? "Destinations" : "Направления"}</h3>
          <Link href={withTrailingSlash(`${base}/countries/uk`)}>{isEnglish ? "United Kingdom" : "Великобритания"}</Link>
          <Link href={withTrailingSlash(`${base}/countries/spain`)}>{isEnglish ? "Spain" : "Испания"}</Link>
          <Link href={withTrailingSlash(`${base}/countries/usa`)}>{isEnglish ? "United States" : "США"}</Link>
          <Link href={withTrailingSlash(`${base}/countries/france`)}>{isEnglish ? "France" : "Франция"}</Link>
        </div>
        <div>
          <h3>Samotsvet</h3>
          <Link href={withTrailingSlash(`${base}/about`)}>{isEnglish ? "About" : "О нас"}</Link>
          <Link href={withTrailingSlash(`${base}/blog`)}>{isEnglish ? "Insights" : "Блог"}</Link>
          <ConsultationLink locale={locale} location="footer_navigation">{isEnglish ? "Free consultation" : "Бесплатная консультация"}</ConsultationLink>
          <Link href={withTrailingSlash(`${base}/profile-development`)}>{isEnglish ? "Profile development" : "Усиление профиля"}</Link>
          <Link href={withTrailingSlash(`${base}/contacts`)}>{isEnglish ? "Contact and company details" : "Контакты и реквизиты"}</Link>
          <Link href={withTrailingSlash(`${base}/privacy`)}>{isEnglish ? "Privacy and personal data" : "Конфиденциальность и персональные данные"}</Link>
          <Link href={withTrailingSlash(`${base}/consent`)}>{isEnglish ? "Data processing consent" : "Согласие на обработку персональных данных"}</Link>
          <Link href={withTrailingSlash(`${base}/legal`)}>{isEnglish ? "Terms of service" : "Условия оказания услуг"}</Link>
        </div>
        <div className="footer-note footer-operator">
          <h3>{isEnglish ? "Services provided by" : "Услуги оказывает"}</h3>
          <p><strong>{isEnglish ? "Individual entrepreneur Nikita Andreevich Samotsvetov" : "ИП Самоцветов Никита Андреевич"}</strong><br />{isEnglish ? "OGRNIP" : "ОГРНИП"} 323670000016524<br />{isEnglish ? "INN" : "ИНН"} 672200624836</p>
          <Link href={withTrailingSlash(`${base}/contacts`)}>{isEnglish ? "Full details ↗" : "Полные реквизиты ↗"}</Link>
        </div>
        <div className="footer-disclaimer">
          <p>{isEnglish ? SERVICE_MODEL_EN : SERVICE_MODEL_RU}</p>
        </div>
        <div className="footer-contact">
          <div>
            <p className="eyebrow">{isEnglish ? "Still have questions?" : "Остались вопросы?"}</p>
            <h2>{isEnglish ? "Contact us" : "Напишите нам"}</h2>
          </div>
          <div className="footer-contact-links">
            <a className="contact-channel contact-channel-email" href={`mailto:${CONTACT_EMAIL}`} data-contact-channel="email" data-cta-location="footer_contact">{isEnglish ? "Send an email" : "Написать на почту"}</a>
            <a className="contact-channel contact-channel-telegram" href={TELEGRAM_DIRECT_URL} target="_blank" rel="noreferrer" data-contact-channel="telegram" data-cta-location="footer_contact"><TelegramIcon /><span>{isEnglish ? "Message us on Telegram" : "Написать в Telegram"}</span></a>
            <a className="contact-channel-link" href={TELEGRAM_URL} target="_blank" rel="noreferrer" data-contact-channel="telegram_channel" data-cta-location="footer_contact">{isEnglish ? `Open the channel ${TELEGRAM_HANDLE}` : `Перейти в канал ${TELEGRAM_HANDLE}`}</a>
          </div>
        </div>
        <div className="footer-ai-search">
          <div>
            <p className="eyebrow">{isEnglish ? "Due diligence" : "Проверка сведений"}</p>
            <h2>{isEnglish ? "Check Samotsvet before an agreement" : "Проверьте Samotsvet до договора"}</h2>
            <p>{isEnglish ? "We have collected public sources and a neutral prompt for independent verification." : "Мы собрали открытые источники и нейтральный запрос для самостоятельной проверки."}</p>
          </div>
          <Link className="text-link" href={withTrailingSlash(`${base}/about#due-diligence`)}>{isEnglish ? "How to verify Samotsvet" : "Как проверить сведения о Samotsvet"} <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <span>© 2025–2026 Samotsvet</span>
        <span className="footer-divider" aria-hidden="true">{" · "}</span>
        <span>{isEnglish ? "Immigration & Relocation" : "Иммиграция и релокация"}</span>
      </div>
    </footer>
  );
}
