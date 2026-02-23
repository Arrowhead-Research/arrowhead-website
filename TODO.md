# TODO

## Fixes

- [ ] Refactor the blog to use `@next/mdx` instead of `next-mdx-remote`
- [ ] Fix dark mode color issues. The background of `From Field to Function`, the contact form, and blog post cards are displaying as a navy blue. Text in the blog posts displays as black when it should be white. Ensure dark mode color scheme follows a primary color of dark grey #2d2e2d and a secondary color of jade green #2c8753. All text should be white, including rendered markdown in the blog section.

## Project Setup

- [x] Initialize Next.js project with TypeScript, Tailwind CSS, ESLint
- [x] Set up project structure and directory layout
- [x] Configure Tailwind with brand tokens (Dark Gray `#2d2e2d`, Jade Green `#2c8753`, font stack)
- [x] Set up global styles (`globals.css` with Tailwind directives)
- [ ] Configure Vercel deployment pipeline (connect repo in Vercel dashboard, configure build settings)
- [x] Create shared root layout (`layout.tsx` with Header, Footer)
- [x] Build Header component (logo, nav links, Donate button)
- [x] Build Footer component (contact email, Donate link, copyright)
- [x] Build DonateButton component (external link to Donorbox)
- [x] Configure Tailwind `darkMode: 'class'` and define light/dark theme tokens
- [x] Build ThemeToggle component (light/dark switch in header)
- [x] Implement cookie-based theme persistence (read on server, set on client)
- [x] Default to dark mode; fall back to OS `prefers-color-scheme` if no cookie set
- [x] Apply `dark:` variant classes across all components for both themes

## Core Pages

- [x] Implement Home page (hero with tagline, "From Field to Function" intro, core verticals overview)
- [x] Implement Mission page ("The Problem" and "Our Approach" sections)
- [x] Implement Programming page (program cards: Moonshot Rodeo, Black Relay, Technical Competitions, Writing & Presenting)
- [x] Implement Contact page (form UI with name, military affiliation, email, message fields)
- [x] Set up Resend integration for contact form (Vercel API route at `/api/contact`)

## Blog

- [x] Set up MDX pipeline (`next-mdx-remote`, `gray-matter`, lib/mdx.ts utilities)
- [x] Build blog index page (`/blog`) with paginated post list
- [x] Build blog post detail page (`/blog/[slug]`)
- [x] Build BlogCard component
- [x] Create 2-3 seed blog posts with lorem ipsum content

## Images & Assets

- [x] Create `placeholder.jpg` for missing/future images
- [x] Migrate logo assets from `images/` to `public/images/`

## SEO & Metadata

- [x] Add `<title>` and `<meta description>` to all pages
- [x] Add Open Graph tags (title, description, image) to all pages
- [x] Add canonical URLs
- [x] Add Organization structured data (JSON-LD) on home page

## Analytics

- [x] Add Google Analytics component with placeholder (see `src/components/GoogleAnalytics.tsx`)

## External Configuration Required

These items require access to external services and cannot be completed in code alone:

- [ ] **Resend:** Create account at https://resend.com, generate API key, verify sending domain (`arrowheadresearch.org`), and set `RESEND_API_KEY` environment variable in Vercel
- [ ] **Google Analytics:** Create GA4 property at https://analytics.google.com, get Measurement ID (e.g. `G-XXXXXXXXXX`), and set `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable in Vercel
- [ ] **Vercel:** Connect GitHub repo in Vercel dashboard, configure build settings (framework preset: Next.js), and add environment variables (`RESEND_API_KEY`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`)
- [ ] **Domain:** Configure DNS for `arrowheadresearch.org` in Vercel dashboard (add domain, update nameservers or DNS records at registrar)

## Polish & QA

- [ ] Lighthouse audit -- target 90+ across all categories
- [ ] Accessibility audit (keyboard nav, color contrast, alt text, skip-to-content link)
- [ ] Responsive testing across mobile, tablet, desktop
- [ ] Final content review
- [ ] Replace placeholder images with real content photography

## Launch

- [ ] DNS cutover from Squarespace to Vercel
