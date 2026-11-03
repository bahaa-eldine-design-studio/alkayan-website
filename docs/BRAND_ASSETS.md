# Brand asset status — Phase 01

## Missing official asset

The repository contained no logo or brand assets at the start of this phase (only `README.md`). The **original AL KAYAN CONSTRUCTION architectural M-shaped emblem** — the official parent-brand reference — is therefore **missing**.

The supplied moodboard was treated as visual direction only. The previously generated, altered marketing emblem is **not** used as an official logo.

## What is shipped instead

A clean, temporary **typographic lockup** (`AL KAYAN` / `MARKETING`, plus the Arabic name in the footer) is rendered by `src/components/layout/BrandMark.tsx`. No emblem geometry has been invented, traced, reinterpreted or redesigned. The copper rules and architectural framing used elsewhere in the site are decorative geometry, not logo marks.

## How to add the official emblem

1. Place the approved vector file at `public/brand/alkayan-emblem.svg` (a PNG variant can be added with a matching name change).
2. In `src/components/layout/BrandMark.tsx`, set `HAS_OFFICIAL_EMBLEM = true`.
3. The emblem will then render next to the existing wordmark. Adjust only sizing/padding in `src/styles/layout.css` (`.brand-mark__emblem`) — do not alter the emblem artwork.
4. Replace the illustrative contact placeholders in `src/content/ar.ts` / `en.ts` once approved details are available.

## Imagery

Twelve local editorial images live in `public/images/`: ten generated for this phase and two locally derived detail crops (created because the per-turn image-generation cap was reached). All are stored locally, optimised as progressive JPEGs, and referenced through `src/content/data.ts` (`IMAGES`). No runtime external image host is used.
