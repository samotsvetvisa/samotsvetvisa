"use client";

import { useEffect } from "react";

export const ATTRIBUTION_STORAGE_KEY = "samotsvet_consultation_context_v1";
const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export type StoredAttribution = {
  entryPage: string;
  referrer: string;
  utm: Partial<Record<(typeof attributionKeys)[number], string>>;
  sourcePage?: string;
  ctaLocation?: string;
  country?: string;
  program?: string;
};

function cleanPath(url: URL) {
  return url.pathname || "/";
}

function readStoredAttribution(): StoredAttribution | null {
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return raw ? JSON.parse(raw) as StoredAttribution : null;
  } catch {
    return null;
  }
}

function writeStoredAttribution(value: StoredAttribution) {
  try {
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(value));
  } catch {
    // The form continues to work when session storage is unavailable.
  }
}

function externalReferrer() {
  if (!document.referrer) return "";
  try {
    const referrer = new URL(document.referrer);
    return referrer.origin === window.location.origin ? "" : `${referrer.origin}${cleanPath(referrer)}`;
  } catch {
    return "";
  }
}

function dispatchLocalEvent(name: string, detail: Record<string, string>) {
  window.dispatchEvent(new CustomEvent("samotsvet:analytics", { detail: { event: name, ...detail } }));
}

export function AttributionLinker() {
  useEffect(() => {
    const current = new URL(window.location.href);
    const initial = readStoredAttribution() ?? {
      entryPage: cleanPath(current),
      referrer: externalReferrer(),
      utm: Object.fromEntries(
        attributionKeys
          .map((key) => [key, current.searchParams.get(key)?.slice(0, 200) || ""] as const)
          .filter(([, value]) => Boolean(value)),
      ),
    };
    writeStoredAttribution(initial);

    function trackClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      if (anchor.dataset.consultationCta === "true") {
        const context: StoredAttribution = {
          ...(readStoredAttribution() ?? initial),
          sourcePage: window.location.pathname,
          ctaLocation: anchor.dataset.ctaLocation || "unspecified",
          country: anchor.dataset.country || "",
          program: anchor.dataset.program || "",
        };
        writeStoredAttribution(context);
        dispatchLocalEvent("consultation_cta_click", {
          page: window.location.pathname,
          cta_location: context.ctaLocation || "unspecified",
          country: context.country || "",
          program: context.program || "",
          language: document.documentElement.lang || "ru",
        });
      }

      let channel = anchor.dataset.contactChannel;
      if (!channel) {
        const href = anchor.getAttribute("href") || "";
        if (href.startsWith("mailto:")) channel = "email";
        else {
          try {
            const destination = new URL(anchor.href, window.location.href);
            if (destination.hostname === "t.me" || destination.hostname === "telegram.me") channel = "telegram";
          } catch {
            // Ignore malformed third-party links without affecting navigation.
          }
        }
      }
      if (channel) {
        dispatchLocalEvent("contact_click", {
          channel,
          page: window.location.pathname,
          cta_location: anchor.dataset.ctaLocation || "unspecified",
        });
      }
    }

    document.addEventListener("click", trackClick, true);
    return () => document.removeEventListener("click", trackClick, true);
  }, []);

  return null;
}
