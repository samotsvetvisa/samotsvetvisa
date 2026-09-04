/* eslint-disable @next/next/no-img-element */

export function BrandLockup({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-lockup ${className}`.trim()}>
      <img className="brand-lockup-logo" src="/samotsvet-logo.svg" alt="Samotsvet Immigration & Relocation" width="870" height="245" />
    </span>
  );
}
