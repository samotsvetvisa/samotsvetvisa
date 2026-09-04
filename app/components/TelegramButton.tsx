"use client";

import { usePathname } from "next/navigation";
import { TELEGRAM_HANDLE, TELEGRAM_URL } from "../site";

export function TelegramButton() {
  const english = usePathname()?.startsWith("/en");

  return (
    <a
      className="telegram-float"
      href={TELEGRAM_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={english ? `Message Samotsvet on Telegram: ${TELEGRAM_HANDLE}` : `Написать Samotsvet в Telegram: ${TELEGRAM_HANDLE}`}
    >
      <TelegramIcon />
      <span>
        <strong>{english ? "Message us" : "Написать нам"}</strong>
        <small>Telegram · {TELEGRAM_HANDLE}</small>
      </span>
    </a>
  );
}

export function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20.7 3.5 3.8 10c-1.15.46-1.14 1.1-.21 1.38l4.33 1.35 1.66 5.13c.2.57.1.8.7.8.46 0 .66-.21.92-.46l2.08-2.03 4.33 3.2c.8.44 1.37.21 1.57-.74l2.84-13.4c.29-1.17-.45-1.7-1.32-1.73Zm-11.1 8.92 8.47-5.35c.42-.25.8-.12.49.16l-7 6.31-.27 2.9-1.69-4.02Z" />
    </svg>
  );
}
