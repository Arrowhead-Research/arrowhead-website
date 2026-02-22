# TODO

## Project Setup

- [ ] Initialize Next.js project with TypeScript, Tailwind CSS, ESLint
- [ ] Set up project structure and directory layout
- [ ] Configure Tailwind with brand tokens (Dark Gray `#2d2e2d`, Jade Green `#2c8753`, font stack)
- [ ] Set up global styles (`globals.css` with Tailwind directives)
- [ ] Configure Vercel deployment pipeline
- [ ] Create shared root layout (`layout.tsx` with Header, Footer)
- [ ] Build Header component (logo, nav links, Donate button)
- [ ] Build Footer component (contact email, Donate link, copyright)
- [ ] Build DonateButton component (external link to Donorbox)
- [ ] Configure Tailwind `darkMode: 'class'` and define light/dark theme tokens
- [ ] Build ThemeToggle component (light/dark switch in header)
- [ ] Implement cookie-based theme persistence (read on server, set on client)
- [ ] Default to dark mode; fall back to OS `prefers-color-scheme` if no cookie set
- [ ] Apply `dark:` variant classes across all components for both themes

## Core Pages

- [ ] Implement Home page (hero with tagline, "From Field to Function" intro, core verticals overview)
- [ ] Implement Mission page ("The Problem" and "Our Approach" sections)
- [ ] Implement Programming page (program cards: Moonshot Rodeo, Black Relay, Technical Competitions, Writing & Presenting)
- [ ] Implement Contact page (form UI with name, military affiliation, email, message fields)
- [ ] Set up Resend integration for contact form (Vercel API route at `/api/contact`)

## Blog

- [ ] Set up MDX pipeline (`next-mdx-remote`, `gray-matter`, lib/mdx.ts utilities)
- [ ] Build blog index page (`/blog`) with paginated post list
- [ ] Build blog post detail page (`/blog/[slug]`)
- [ ] Build BlogCard component
- [ ] Create 2-3 seed blog posts with lorem ipsum content

## Images & Assets

- [ ] Download existing images from Squarespace and add to `public/images/`
- [ ] Create `placeholder.jpg` for missing/future images
- [ ] Migrate logo assets from `images/` to `public/images/`

## SEO & Metadata

- [ ] Add `<title>` and `<meta description>` to all pages
- [ ] Add Open Graph tags (title, description, image) to all pages
- [ ] Add canonical URLs
- [ ] Add Organization structured data (JSON-LD) on home page

## Analytics

- [ ] Integrate Google Analytics

## Polish & QA

- [ ] Lighthouse audit -- target 90+ across all categories
- [ ] Accessibility audit (keyboard nav, color contrast, alt text, skip-to-content link)
- [ ] Responsive testing across mobile, tablet, desktop
- [ ] Final content review

## Launch

- [ ] DNS cutover from Squarespace to Vercel
