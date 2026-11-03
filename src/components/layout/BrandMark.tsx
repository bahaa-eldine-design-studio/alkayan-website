/**
 * Temporary typographic brand lockup.
 *
 * The official AL KAYAN CONSTRUCTION architectural M-shaped emblem is NOT
 * present in this repository. Per the brand rules we do not redraw, reinterpret
 * or generate a substitute emblem. When the official file is supplied, place it
 * at `public/brand/alkayan-emblem.svg` and flip HAS_OFFICIAL_EMBLEM to true —
 * it will then render alongside the existing wordmark with no redesign work.
 * See docs/BRAND_ASSETS.md.
 */
const HAS_OFFICIAL_EMBLEM = false

interface BrandMarkProps {
  variant?: 'header' | 'footer'
}

export function BrandMark({ variant = 'header' }: BrandMarkProps) {
  return (
    <span className={`brand-mark brand-mark--${variant}`}>
      {HAS_OFFICIAL_EMBLEM && (
        <img className="brand-mark__emblem" src="/brand/alkayan-emblem.svg" alt="" />
      )}
      <span className="brand-mark__type">
        <span className="brand-mark__name">AL KAYAN</span>
        <span className="brand-mark__divider" aria-hidden="true" />
        <span className="brand-mark__sub">MARKETING</span>
      </span>
      {variant === 'footer' && <span className="brand-mark__arabic">الكيان للتسويق</span>}
    </span>
  )
}
