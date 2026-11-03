# AL KAYAN Marketing — Frontend Foundation

A frontend-only bilingual website concept for AL KAYAN Marketing, with a Saudi-first audience direction.

## Current scope

- Static HTML, CSS, and vanilla JavaScript.
- Arabic-first experience with RTL layout.
- English language switch with LTR layout.
- Responsive single-page corporate website.
- Sections: Home, About, Services, Approach, Work, Contact.
- Frontend-only interactions: navigation, mobile menu, language switch, scroll reveals.
- No backend, database, authentication, API, CRM, email delivery, or WhatsApp integration.

## Run locally

Open `index.html` in a browser, or serve the folder with any static file server, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before public launch

1. Replace the demo email address `hello@alkayanmarketing.com` with verified company contact details.
2. Confirm the actual services offered and edit the service list in `index.html` and `app.js`.
3. Replace concept/reference imagery with approved company portfolio assets.
4. Supply the original approved AL KAYAN logo artwork. The current header uses a typographic wordmark intentionally; it does not redraw or invent the parent emblem.
5. Review Arabic copy for the company's preferred Saudi brand voice.
6. Add real project case studies only after client approval.

## Assets and fonts

Fonts are loaded from Google Fonts. Hero and portfolio imagery currently use remote Unsplash image URLs as visual placeholders. For production, move approved, licensed images and logo artwork into a local assets directory.

## Deployment

This is a static frontend and can be deployed to GitHub Pages, Cloudflare Pages, Vercel static hosting, or another static host. No environment variables are required for the current prototype.

## Important content note

Service categories and project imagery are illustrative starting points, not verified company claims. The project cards are explicitly labeled as creative concepts/reference visuals.
