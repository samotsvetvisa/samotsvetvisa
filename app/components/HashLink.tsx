"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type HashLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  afterNavigate?: () => void;
};

export function HashLink({ href, afterNavigate, onClick, ...props }: HashLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (
      event.defaultPrevented
      || event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
    ) return;

    const destination = new URL(href, window.location.href);
    if (
      destination.origin === window.location.origin
      && destination.pathname === window.location.pathname
      && destination.hash
    ) {
      const section = document.getElementById(decodeURIComponent(destination.hash.slice(1)));
      if (section) {
        event.preventDefault();
        window.history.replaceState(null, "", `${destination.pathname}${destination.search}${destination.hash}`);
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    afterNavigate?.();
  }

  return <a href={href} onClick={handleClick} {...props} />;
}
