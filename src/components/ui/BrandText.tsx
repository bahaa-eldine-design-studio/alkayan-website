import type { ReactNode } from 'react'

const BRAND_NAMES = new Set(['AL KAYAN CONSTRUCTION', 'AL KAYAN MARKETING'])
const SPLIT_RE = /(AL KAYAN CONSTRUCTION|AL KAYAN MARKETING)/g

/**
 * Isolates the Latin parent-brand names inside Arabic copy so punctuation and
 * word order stay correct when the document direction is RTL.
 */
export function BrandText({ text }: { text: string }): ReactNode {
  return (
    <>
      {text.split(SPLIT_RE).map((part, index) =>
        BRAND_NAMES.has(part) ? (
          <bdi key={index} dir="ltr">{part}</bdi>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  )
}
