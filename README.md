# Marin Heđeš — Personal Website

Personal portfolio, published at [marinhedes.com](https://www.marinhedes.com) and [sincerelyfaust.com](https://sincerelyfaust.com).

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, next-themes, and pnpm.

## Development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Quality checks

```bash
pnpm format
pnpm check       # ESLint, Next.js typed routes/TypeScript, Prettier, Knip
pnpm build
pnpm analyze     # Next.js Turbopack bundle analyzer
```

The included lockfile has been repaired from the uploaded archive and updated with the new tooling resolutions. Verify a frozen install in your local Node 26 / pnpm 12 environment, then commit any changes made by pnpm.

## Project structure

- `src/app/` — thin Next.js routes, metadata, SEO files, error boundaries
- `src/features/home/` — portfolio homepage and gallery interaction
- `src/features/cv/` — CV presentation
- `src/features/errors/` — shared error-page presentation
- `src/components/` — shared UI and theme components
- `src/lib/` — shared utilities and SEO configuration
- `public/` — existing portrait, favicon assets, appearance photos and CV PDF

Internal code and directories are in English. Next.js App Router handles navigation and scrolling natively; there is no custom scroll-reset behavior.

## Deployment

Set `SITE_URL` on Vercel to the canonical public URL, for example `https://www.marinhedes.com`. Server-only variables do **not** require a prefix; only variables intentionally exposed in browser JavaScript require `NEXT_PUBLIC_`.

The sitemap and robots file are automatically exposed at `/sitemap.xml` and `/robots.txt`. Social previews reuse the existing portrait at `public/images/profile/profile-picture.webp`; no additional image is generated. The existing favicon assets are preserved. A dedicated landscape social card (ideally 1200 × 630 pixels) can be supplied later for better cropping on wide previews.

## Change scope

The design, copy, CV content and external redirects are preserved. No shop-specific logic, authentication, customer tracking, or unused form libraries are added.

## Asset inventory

- Existing and used: profile portrait (also the Open Graph/Twitter image), three conference photos, CV PDF, ICO/16px/32px favicons, Apple touch icon, and 192px/512px manifest icons.
- Optional missing asset: a purpose-made 1200 × 630 landscape social preview. The existing portrait is used until you supply one.
- No obsolete root-level `app/`, `lib/`, or `components/` folders are included.
