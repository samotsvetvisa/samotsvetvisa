import Link from "next/link";
import { CONTACT_EMAIL, SERVICE_MODEL_EN, SERVICE_MODEL_RU, TELEGRAM_DIRECT_URL, TELEGRAM_HANDLE, TELEGRAM_URL, withTrailingSlash } from "../site";
import { BrandLockup } from "./BrandLockup";
import { TelegramIcon } from "./TelegramButton";

export function SiteFooter({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const isEnglish = locale === "en";
  const base = isEnglish ? "/en" : "";
  const aiPrompt = isEnglish
    ? "Conduct a due-diligence check on Samotsvet and its founder, Nikita Samotsvetov, before I buy immigration or relocation services. Use current public sources. Separate: 1) facts confirmed by independent sources; 2) claims found only on samotsvetvisa.com; 3) information you could not verify; and 4) questions I should ask before signing an agreement. Do not invent reviews, licences, partners or statistics."
    : "Проведи проверку агентства Samotsvet и его основателя Никиты Самоцветова перед покупкой услуг по иммиграции и релокации. Используй актуальные открытые источники. Отдельно укажи: 1) факты, подтвержденные независимыми источниками; 2) заявления, найденные только на samotsvetvisa.com; 3) сведения, которые не удалось проверить; 4) вопросы, которые стоит задать до подписания договора. Не придумывай отзывы, лицензии, партнеров или статистику.";
  const encodedPrompt = encodeURIComponent(aiPrompt);

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
          <Link href={withTrailingSlash(`${base}/assessment`)}>{isEnglish ? "Assess my options" : "Оценить шансы"}</Link>
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
            <a className="contact-channel contact-channel-email" href={`mailto:${CONTACT_EMAIL}`}>{isEnglish ? "Send an email" : "Написать на почту"}</a>
            <a className="contact-channel contact-channel-telegram" href={TELEGRAM_DIRECT_URL} target="_blank" rel="noreferrer"><TelegramIcon /><span>{isEnglish ? "Message us on Telegram" : "Написать в Telegram"}</span></a>
            <a className="contact-channel-link" href={TELEGRAM_URL} target="_blank" rel="noreferrer">{isEnglish ? `Open the channel ${TELEGRAM_HANDLE}` : `Перейти в канал ${TELEGRAM_HANDLE}`}</a>
          </div>
        </div>
        <div className="footer-ai-search">
          <div>
            <p className="eyebrow">{isEnglish ? "Before you contact us" : "Перед обращением"}</p>
            <h2>{isEnglish ? "Check the public record" : "Проверьте открытые сведения"}</h2>
            <p>{isEnglish ? "The prepared prompt asks the service to distinguish independently confirmed facts from our own statements and to list questions worth asking before an agreement." : "Готовый запрос просит отделить подтвержденные факты от наших собственных заявлений и составить вопросы до договора."}</p>
          </div>
          <div className="footer-ai-links">
            <a href={`https://chatgpt.com/?q=${encodedPrompt}`} target="_blank" rel="noreferrer"><span aria-hidden="true">G</span><strong>ChatGPT</strong><small>{isEnglish ? "Open the prepared check" : "Открыть готовую проверку"}</small></a>
            <a href={`https://claude.ai/new?q=${encodedPrompt}`} target="_blank" rel="noreferrer"><span aria-hidden="true">C</span><strong>Claude</strong><small>{isEnglish ? "Open the prepared check" : "Открыть готовую проверку"}</small></a>
            <a href={`https://www.perplexity.ai/search/new?q=${encodedPrompt}`} target="_blank" rel="noreferrer"><span aria-hidden="true">P</span><strong>Perplexity</strong><small>{isEnglish ? "Check against sources" : "Проверить по источникам"}</small></a>
          </div>
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
