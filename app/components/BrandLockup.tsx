/* eslint-disable @next/next/no-img-element */

export function BrandLockup({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-lockup ${className}`.trim()}>
      <img className="brand-lockup-mark" src="/samotsvet-mark.svg" alt="" width="282" height="240" />
      <span className="brand-lockup-copy">
        <strong>SAMOTSVET</strong>
        <small>IMMIGRATION &amp; RELOCATION</small>
      </span>
    </span>
  );
}
