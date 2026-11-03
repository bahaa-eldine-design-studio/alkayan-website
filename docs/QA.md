# Visual & technical QA — Phase 01

Executed in a headless Chromium instance against the running Vite dev server on branch `arena/e0e2bca3-alkayan-website`.

## Automated browser checks

131 assertions passed, 0 failures, 0 console/page errors and 0 failed or 4xx/5xx requests:

- **Pages:** `/`, `/about`, `/services`, `/portfolio`, `/portfolio/:slug`, `/contact`, 404.
- **Responsive overflow:** no horizontal overflow at 1440, 1280, 768, 390 and 360 px, in both Arabic RTL and English LTR.
- **Images:** every `<img>` on every captured page loaded (`naturalWidth > 0`), including lazy-loaded images forced eager.
- **Typography:** Arabic body/headings resolve to IBM Plex Sans Arabic; English body to IBM Plex Sans and English headings to Manrope.
- **Language switch:** `lang`/`dir`, headline copy, fonts, `<title>` and meta description update; preference persists.
- **Navigation:** all desktop nav links, footer deep links, breadcrumbs, service jump links, project cards and back links resolve; hash anchors land below the fixed header.
- **Dropdown:** opens via click, closes on Escape and outside pointer-down; arrow key focuses the first item.
- **Mobile menu:** opens, locks body scroll, closes on Escape and restores scroll.
- **Portfolio filters:** category filter narrows to one project, count updates, reset restores all eight; empty state exists.
- **Contact form:** `?service=` preselects the service, empty submit shows inline errors and focuses the first invalid field, valid submit shows a clearly worded "nothing was sent" demo state, and the edit action returns to the form. No network request is made.
- **Reveal animations:** all `.reveal` elements become visible after scrolling (and are disabled under `prefers-reduced-motion`).
- **Link audit:** no empty, `#`, or `javascript:` links on any page.

Screenshots of all pages at all target widths were captured and visually reviewed (hero, introduction, services index, dark differentiator section, methodology, work grid, positioning, CTA, footer, forms, mobile compositions).

## Static checks

- `npm run typecheck` — pass (`tsc --noEmit`, strict mode).
- `npm run lint` — pass (ESLint 9 flat config, 0 errors, 0 warnings).
- `npm run build` — pass (`tsc --noEmit && vite build`; production bundle emitted to `dist/`).

## Known limitations

- Frontend-only: no submission, persistence beyond the language preference, or integrations.
- Static SPA routes need a host rewrite to `index.html` on deployment (standard for client-side routing).
- Conceptual portfolio content and placeholder contact details require company approval.
- Official parent-brand emblem is not yet supplied (see `BRAND_ASSETS.md`).
