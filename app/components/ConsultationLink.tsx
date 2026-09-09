"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { CONSULTATION_COUNTRY_CODES, consultationHref, type ConsultationCountry } from "../site";

type ConsultationLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  locale?: "ru" | "en";
  country?: ConsultationCountry | "";
  program?: string;
  location: string;
};

export function ConsultationLink({
  locale = "ru",
  country,
  program,
  location,
  ...linkProps
}: ConsultationLinkProps) {
  return (
    <Link
      {...linkProps}
      href={consultationHref({ locale, country, program })}
      data-consultation-cta="true"
      data-cta-location={location}
      data-country={country ? CONSULTATION_COUNTRY_CODES[country] : undefined}
      data-program={program || undefined}
    >
      {linkProps.children ?? (locale === "en" ? "Free consultation" : "Бесплатная консультация")}
    </Link>
  );
}
