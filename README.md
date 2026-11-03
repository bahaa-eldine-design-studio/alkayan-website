# AL KAYAN MARKETING — Frontend Foundation (Phase 01)

A complete, production-quality **frontend-only** website for AL KAYAN MARKETING, the marketing arm of AL KAYAN CONSTRUCTION. Built for the Saudi market with Arabic as the default language and full English/RTL–LTR support.

> **Scope:** Phase 01 delivers the visual identity, page structure, components, content and interactions only. There is **no backend, database, authentication, API, email delivery, WhatsApp, CRM, payment or any external service integration**. The contact form is an interactive visual prototype and never sends data.

---

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Vite 7 + React 19 + TypeScript |
| Routing | React Router 7 (client-side) |
| Styling | Plain CSS with a centralized token layer (no CSS framework) |
| Fonts | Self-hosted via `@fontsource` — Manrope, IBM Plex Sans, IBM Plex Sans Arabic |
| Imagery | Local assets in `public/images` (no runtime CDN) |
| State | React state + `localStorage` for language preference only |

No backend dependencies are installed.

## Commands

```bash
npm install
npm run dev         # http://localhost:5173 (also bound to 0.0.0.0 for previews)
npm run typecheck   # tsc --noEmit
npm run lint        # eslint .
npm run build       # typecheck + vite production build
npm run preview
```

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, introduction, services overview, why AL KAYAN, methodology, featured projects, brand positioning, CTA, footer |
| `/about` | Introduction, philosophy, mission, vision, six core values, partnership approach |
| `/services` | Eight editable capability sections with deliverables, jump navigation and per-service enquiry links |
| `/portfolio` | Filterable conceptual project grid with hover interactions and detail links |
| `/portfolio/:slug` | Project detail presentation, metadata, gallery, next-project navigation |
| `/contact` | Contact introduction, placeholder details, validated enquiry form with simulated demo state |
| `*` | Localised 404 page |

## Architecture

```
src/
  content/          ar.ts, en.ts (mirrored dictionaries), data.ts (editable mock content), index.ts
  context/          LanguageProvider + language context/hook
  hooks/            useScrolled, useBodyScrollLock
  components/
    ui/             Action, Icons, Reveal, SectionLabel, BrandText
    layout/         Header, Footer, LanguageSwitch, BrandMark, Layout (scroll + title manager)
    sections/       PageHero, CTASection, ProjectCard, FilterChips, ServiceList, ServiceDetail
  pages/            Homepage + 6 inner pages
  styles/           tokens.css, base.css, layout.css, ui.css, home.css, pages.css
public/
  images/           local, optimised editorial imagery
  brand/            drop the official emblem here (see docs/BRAND_ASSETS.md)
docs/               BRAND_ASSETS.md, QA.md
```

### Content & translations

All user-visible strings live in `src/content/ar.ts` and `src/content/en.ts`. The English dictionary is typed as `Dictionary = typeof ar`, so missing keys are a compile error. Structured mock content (services, projects, categories) lives in `src/content/data.ts` with `{ ar, en }` values. There is no runtime machine translation.

## Design system

`src/styles/tokens.css` is the single source of truth for:

- **Colours:** Espresso `#30231F`, Limestone `#E9E0D5`, Copper `#B47B55`, Sage `#78958A` plus derived surface/ink/line tokens.
- **Typography:** Manrope (English headings), IBM Plex Sans (English body), IBM Plex Sans Arabic (all Arabic content) with direction-specific line-height, tracking and optical sizing.
- **Spacing, radii, shadows, containers, animation timings and ease curves.**
- **Breakpoint reference:** 360 / 390 / 768 / 1280 / 1440 px, with deliberate mobile compositions rather than scaled-down desktop layouts.

Art direction: editorial layouts, architectural geometry, restrained copper detail, asymmetric grids, large-scale typography, subtle transitions. No generic template cards, heavy gradients, glassmorphism or decorative noise.

## Bilingual behaviour

- Arabic is the default (`localStorage` persists a manual switch).
- The switcher updates `<html lang>` / `dir`, `<title>`, meta description, font stacks and all content.
- CSS uses logical properties (`margin-inline`, `inset-inline-start`, `border-inline-start`) so both directions share one layout; only directional icons/transforms are mirrored explicitly.
- `BrandText` isolates Latin parent-brand names inside Arabic copy to keep bidi punctuation correct.

## Interactions

Desktop navigation, keyboard-accessible services dropdown, mobile menu (Escape to close, scroll lock), language switcher, smooth in-page scrolling with instant cross-page deep links, hover states, IntersectionObserver scroll reveals (reduced-motion aware), pointer-following service previews, portfolio category filtering, card hover interactions, client-side form validation with focus management and a clearly labelled simulated submission state, and a back-to-top control. Every visible control performs a real frontend action; there are no `href="#"` placeholders.

## Prototype content

- Portfolio items are **clearly labelled conceptual projects**; no real clients, results or performance statistics are claimed.
- Service categories/deliverables are editable proposals subject to company confirmation.
- About copy contains no fabricated company history or achievements.
- Contact details use obvious placeholders (`.example` domain, masked phone) and are labelled as illustrative.

## Brand assets

The official AL KAYAN CONSTRUCTION architectural M-shaped emblem was **not present** in the repository. Per the brand rules no emblem was redrawn, altered or generated. A clean temporary typographic wordmark is used instead. See [`docs/BRAND_ASSETS.md`](docs/BRAND_ASSETS.md).

## Verification

See [`docs/QA.md`](docs/QA.md) for the executed responsive, interaction, console, image, lint, typecheck and production-build checks.
