"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LanguageAttribute() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith("/en") ? "en" : "ru";
  }, [pathname]);

  return null;
}
