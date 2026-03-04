# Arrowhead Research Website

The public website for [Arrowhead Research](https://arrowheadresearch.org), a nonprofit that empowers military servicemembers to transform technical curiosity into real-world capability.

Built with Next.js (App Router), TypeScript, Tailwind CSS, and MDX.

## Prerequisites

- **Node.js** 18.18.0 or later
- **npm** (included with Node.js)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arrowhead/website-frontend.git
   cd website-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the project root:

   ```env
   # Required for the contact form to send emails (https://resend.com)
   RESEND_API_KEY=re_your_api_key_here

   # Optional — Google Analytics 4 measurement ID
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

   The dev server will start without these, but the contact form will not deliver emails without a valid Resend key.

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command                | Description                            |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Start the development server           |
| `npm run build`        | Production build (includes type-check) |
| `npm start`            | Serve the production build locally     |
| `npm run lint`         | Run ESLint                             |
| `npm run format`       | Auto-format with Prettier              |
| `npm run format:check` | Check formatting without writing       |
| `npx tsc --noEmit`     | Type-check without emitting files      |

## Project Structure

```
website-frontend/
├── content/blog/            # MDX blog posts (YYYY-MM-DD-slug.mdx)
├── public/images/           # Static assets (logos, photos)
├── src/
│   ├── app/                 # Next.js App Router pages & API routes
│   │   ├── api/contact/     # POST /api/contact (Resend)
│   │   ├── blog/            # Blog index & [slug] pages
│   │   ├── contact/         # Contact page
│   │   ├── mission/         # Mission page
│   │   ├── programming/     # Programming page
│   │   ├── globals.css      # Tailwind directives & brand tokens
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable React components
│   ├── lib/                 # Utilities (MDX helpers, metadata, theme)
│   └── mdx-components.tsx   # Custom MDX component mappings
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Tech Stack

| Technology        | Purpose                            |
| ----------------- | ---------------------------------- |
| Next.js 16        | Framework (App Router, SSG)        |
| React 19          | UI library                         |
| TypeScript        | Type safety (strict mode)          |
| Tailwind CSS v4   | Utility-first styling              |
| MDX (`@next/mdx`) | Blog content authoring             |
| Resend            | Transactional email (contact form) |
| Vercel            | Hosting & deployment               |

## Blog Posts

Blog content lives in `content/blog/` as MDX files. Each file uses the naming convention `YYYY-MM-DD-post-slug.mdx` and requires this frontmatter:

```yaml
---
title: "Post Title"
date: "2026-01-15"
author: "Author Name"
summary: "A short description of the post."
tags: ["optional", "tag", "array"]
image: "/images/optional-hero.jpg"
---
```

Posts are statically generated at build time and listed in reverse chronological order on the `/blog` page.

## Theming

The site uses a class-based dark mode strategy with dark mode as the default. Theme preference is persisted via a cookie. Brand colors are defined as Tailwind theme tokens in `src/app/globals.css`:

- **Dark Gray** (`#2d2e2d`) — primary background
- **Jade Green** (`#2c8753`) — accent color

## Deployment

The site deploys automatically to Vercel on pushes to `main`. Pull requests generate preview deployments. All pages use static site generation — there is no server-side rendering at request time.

## License

All rights reserved. This is a private repository for Arrowhead Research.
