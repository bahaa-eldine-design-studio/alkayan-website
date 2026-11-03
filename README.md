# AL KAYAN MARKETING

A bilingual, responsive corporate website for AL KAYAN MARKETING, positioned for businesses in Saudi Arabia and wider Arab markets. Arabic is the default language; English is available throughout. The visual system uses the supplied palette (Espresso `#30231F`, Limestone `#E9E0D5`, Copper `#B47B55`, Sage `#78958A`) and locally bundled Manrope, IBM Plex Sans and IBM Plex Sans Arabic typefaces.

> Repository discovery found only the original README and no supplied logo, moodboard, company profile, client work, or integration configuration. No logo geometry or company history has been fabricated. The identity is represented with a typographic wordmark and abstract architectural visuals; these are supporting art direction, not a replacement parent-brand emblem. Service categories are explicitly identified as proposed pending company confirmation. The portfolio entry is clearly labelled as an independent conceptual study, not commissioned work or verified results.

## Technology

- Next.js 16 App Router, React 19, TypeScript
- Server-rendered routes with locale-aware metadata and static content generation
- CSS design system and inline CSS/SVG artwork; no remote images or client-side animation dependencies
- Resend REST API integration for server-side inquiry delivery

## Local development

Requires Node.js 20.9+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit `http://localhost:3000` (Arabic default) or `/en` (English).

## Commands

```bash
npm run dev        # Development server, bound to 0.0.0.0
npm run lint       # ESLint
npm run typecheck  # TypeScript check
npm run build      # Production build
npm start          # Production server, bound to 0.0.0.0
```

## Environment configuration

See `.env.example`. Do not commit `.env.local` or secrets.

### Site and company information

- `NEXT_PUBLIC_SITE_URL`: canonical public origin; replace the example with the final production URL.
- `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CONTACT_PHONE`, `NEXT_PUBLIC_WHATSAPP_NUMBER`: verified company channels. Leave blank until confirmed. The WhatsApp variable is digits with country code (for example, a verified `966…` value); the site will not render a WhatsApp link when it is blank or too short.
- `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_X_URL`: verified public profile URLs. Blank values are omitted.

### Contact form delivery (Resend)

The contact form performs a real `POST /api/contact`; it does not report success unless a message is accepted by the configured email provider. Configure all three server-only variables for delivery:

- `RESEND_API_KEY`: Resend API key (server-only).
- `CONTACT_TO_EMAIL`: monitored company inbox.
- `CONTACT_FROM_EMAIL`: sender identity verified with Resend, e.g. `Website inquiries <inquiries@your-verified-domain.example>`.

Without these credentials the endpoint returns `503` and the form displays a clear configuration/unavailable state. Validate the sending domain with Resend before production. The API validates and bounds input, applies a honeypot and an in-memory per-IP rate limit (5 requests per 10 minutes per running process), and never returns provider secrets. For multi-instance/serverless production, replace the in-memory limiter with a shared rate-limit store and consider adding a managed challenge if abuse warrants it.

## Bilingual content management

- Shared company configuration, proposed service structures, and the clearly conceptual sample portfolio entry: `src/lib/site.ts`.
- Arabic and English UI/content strings: `src/lib/copy.ts`.
- Service detail pages are generated from the service data by slug.
- Translated navigation, form labels/options, RTL/LTR direction and language switching are implemented. Keep English and Arabic service slugs aligned when editing content so language switching preserves the current route.
- Review and confirm every proposed service area with the company before representing it as an established offering.
- Replace the conceptual case study with approved real work only when descriptions, rights and any claimed results are verified.

## Assets and brand

No original vector logo or reference imagery was present in the repository during implementation. No logo has been invented or traced. The hero and concept artwork are CSS-built abstract compositions in the approved palette and are not client work. Place verified, licensed assets in `public/`, use descriptive alt text, and keep the original construction emblem unchanged if it is supplied later. Fonts are bundled locally through Fontsource packages; the website makes no runtime Google Fonts request.

## SEO

- Per-page Arabic/English titles and descriptions, canonical URLs and `hreflang` alternates.
- `src/app/sitemap.ts`, `src/app/robots.ts`, localized Open Graph image route, and Organization JSON-LD without an invented address, reviews or local-office claim.
- Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin before deployment. Check generated metadata and sitemap at `/ar`, `/en`, `/sitemap.xml` and `/robots.txt` after deploying.

## Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/ci-deploy.yml`. Pull requests targeting `main` and pushes to `main` run lint, typecheck and a production build. After those checks pass, pushes to `main` deploy to Vercel using the Vercel CLI. The workflow targets the GitHub `production` environment and intentionally skips deployment with a notice until its Vercel secrets are configured; production has not been connected or deployed from this repository yet.

To connect it, create/select the Vercel project for this repository, then add these secrets under GitHub **Settings → Environments → production**:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Set the site's production environment variables in Vercel (including the verified `NEXT_PUBLIC_SITE_URL`, any confirmed public contact channels, and the three Resend variables if inquiry delivery is required). Redeploy after configuring variables. Once a change is merged to `main`, the workflow verifies it and deploys the prebuilt production output. Configure required reviewers on the GitHub `production` environment if deployment approval is desired. The repository's Vercel status integration is active, but the current PR's Vercel preview check failed. GitHub reports that the deployment logs require an authenticated Vercel CLI inspection; no authenticated Vercel CLI or project settings were available here, so the root cause remains unverified. The GitHub production job was skipped because its Vercel secrets are unset. No production deployment or DNS configuration is claimed.

The app requires a Node-compatible server runtime (Node.js 20.9+) and outbound access to `api.resend.com`; a static export is not supported. Security headers are defined in `next.config.ts`. `npm audit --omit=dev` reports no production dependency vulnerabilities. A full `npm audit` currently reports moderate advisories in the development-only ESLint dependency tree (including a `minimatch` glob-amplification advisory); npm's forced remediation proposes a breaking downgrade of the lint toolchain, so it was not applied. Recheck this toolchain advisory as upstream ESLint plugins publish compatible fixes.

## Known configuration items

- Confirm the service list, official brand vector, official domain, contact channels and social profiles with AL KAYAN.
- Configure Resend credentials and verify end-to-end delivery in the production environment.
- Review privacy language for the company's jurisdiction, retention practices and any required legal notices before launch.
- Add approved project photography/case studies and the official parent emblem when supplied; neither was present in the audited repository.
