"use client";

import { useEffect } from "react";

const attributionKeys = ["utm_source", "utm_medium", "utm_campaign"] as const;

export function AttributionLinker() {
  useEffect(() => {
    const current = new URL(window.location.href);
    const attribution = attributionKeys
      .map((key) => [key, current.searchParams.get(key)] as const)
      .filter((entry): entry is readonly [typeof attributionKeys[number], string] => Boolean(entry[1]));

    if (attribution.length === 0) return;

    function preserveAttribution(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      for (const [key, value] of attribution) {
        if (!destination.searchParams.has(key)) destination.searchParams.set(key, value);
      }
      event.preventDefault();
      event.stopPropagation();
      window.location.assign(destination.toString());
    }

    document.addEventListener("click", preserveAttribution, true);
    return () => document.removeEventListener("click", preserveAttribution, true);
  }, []);

  return null;
}
