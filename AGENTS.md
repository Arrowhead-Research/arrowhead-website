# AGENTS.md

Guidelines for AI agents working in this repository.

## Project Overview

Arrowhead Research website — a Next.js (App Router) static site with TypeScript, Tailwind CSS, and MDX-powered blog. Deployed on Vercel.

- **Framework:** Next.js (App Router) with static site generation (SSG)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS (utility classes only, no custom CSS besides `globals.css`)
- **Content:** MDX files in `content/blog/` parsed with `next-mdx-remote` and `gray-matter`
- **Email:** Resend (via Vercel API route at `/api/contact`)
- **Hosting:** Vercel (auto-deploy from `main`, preview deploys on PRs)

## Build / Lint / Test Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build (also runs type checking)
npm run build

# Start production server locally
npm start

# Linting
npm run lint            # ESLint
npx prettier --check .  # Prettier check
npx prettier --write .  # Prettier auto-fix

# Type checking only
npx tsc --noEmit

# Run all tests
npm test

# Run a single test file
npx jest path/to/file.test.ts
npx jest --testPathPattern="ContactForm"

# Run tests matching a pattern
npx jest -t "should submit form"
```

If the project migrates to Vitest, replace `jest` with `vitest`:

```bash
npx vitest run path/to/file.test.ts
npx vitest run -t "test name"
```

## Project Structure

```
website-frontend/
  public/images/          # Static assets (logos, photos, placeholder.jpg)
  content/blog/           # MDX blog posts with frontmatter
  src/
    app/                  # Next.js App Router pages
      layout.tsx          # Root layout (Header, Footer, theme init)
      page.tsx            # Home page
      mission/page.tsx
      programming/page.tsx
      contact/page.tsx
      blog/page.tsx       # Blog index
      blog/[slug]/page.tsx
      api/contact/route.ts
    components/           # Reusable React components
    lib/                  # Utility modules (mdx.ts, metadata.ts, theme.ts)
    app/globals.css       # Tailwind directives, brand tokens, base styles
  next.config.ts
  tsconfig.json
```

## Code Style

### TypeScript

- Use TypeScript for all files. No `any` types unless absolutely unavoidable.
- Prefer `interface` for object shapes that may be extended; use `type` for unions, intersections, and computed types.
- Export types/interfaces from the file where they are defined; co-locate types with their usage.
- Use explicit return types on exported functions. Inferred types are acceptable for internal/local functions.

### Naming Conventions

| Kind                | Convention                             | Example                       |
| ------------------- | -------------------------------------- | ----------------------------- |
| Components          | PascalCase `.tsx`                      | `Header.tsx`, `BlogCard.tsx`  |
| Utility/lib files   | camelCase `.ts`                        | `mdx.ts`, `metadata.ts`       |
| Pages (App Router)  | `page.tsx` / `layout.tsx` / `route.ts` | `app/blog/page.tsx`           |
| MDX content files   | kebab-case with date prefix            | `2026-02-22-post-slug.mdx`    |
| Interfaces/Types    | PascalCase                             | `BlogPost`, `ContactFormData` |
| Functions/variables | camelCase                              | `getPostBySlug`, `isDarkMode` |
| Constants           | UPPER_SNAKE_CASE                       | `MAX_POSTS_PER_PAGE`          |
| CSS classes         | Tailwind utility classes only          | —                             |

### Imports

Order imports in this sequence, separated by blank lines:

1. React / Next.js built-ins (`react`, `next/*`)
2. Third-party packages (`gray-matter`, `resend`, etc.)
3. Internal aliases (`@/components/*`, `@/lib/*`)
4. Relative imports (siblings, types)

```typescript
import { Metadata } from "next";
import Image from "next/image";

import matter from "gray-matter";

import { Header } from "@/components/Header";
import { getPostBySlug } from "@/lib/mdx";

import type { BlogPost } from "./types";
```

### Components

- Use named exports for components (not default exports).
- Use function declarations for components: `export function Header() {}`.
- Props interfaces are named `ComponentNameProps` and defined directly above the component.
- Keep components focused — extract subcomponents when a file exceeds ~150 lines.
- Use Next.js `<Image>` for all images (not `<img>`).
- All images must have descriptive `alt` text.

### Styling

- Use Tailwind CSS utility classes exclusively. Do not write custom CSS except in `globals.css`.
- Tailwind v4 — config is CSS-based in `src/app/globals.css` using `@theme` (no `tailwind.config.ts`).
- Brand tokens defined via `@theme inline` in `globals.css`:
  - `--color-dark-gray: #2d2e2d` (use as `bg-dark-gray`, `text-dark-gray`, etc.)
  - `--color-jade-green: #2c8753` (use as `bg-jade-green`, `text-jade-green`, etc.)
- Dark mode uses `@custom-variant dark` with class strategy. Apply `dark:` variant classes on all themed elements.
- Dark mode is the default theme. Theme preference is persisted via cookie.
- Mobile-first responsive design: use `sm:`, `md:`, `lg:` breakpoint prefixes.

### Error Handling

- API routes (`route.ts`): return proper HTTP status codes with JSON error bodies. Wrap handler logic in try/catch.
- Client components: use error boundaries where appropriate. Display user-friendly error messages.
- Form validation: validate on both client and server side. Show inline field-level errors.
- Never swallow errors silently. At minimum, log them with `console.error`.

### MDX / Blog Content

- Blog post files live in `content/blog/` named as `YYYY-MM-DD-post-slug.mdx`.
- Required frontmatter fields: `title`, `date`, `author`, `summary`.
- Optional frontmatter: `tags` (string array), `image` (path to hero image).
- Posts are statically generated at build time and listed in reverse chronological order.

## SEO & Metadata

- Every page must export a `metadata` object or `generateMetadata` function.
- Include `title`, `description`, Open Graph tags, and canonical URL.
- Home page includes Organization structured data (JSON-LD).

## Accessibility

- Use semantic HTML elements (`<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`).
- All interactive elements must be keyboard accessible.
- Maintain WCAG 2.1 AA color contrast in both light and dark themes.
- Include a skip-to-content link in the root layout.

## Performance

- Target Lighthouse 90+ in all categories (Performance, Accessibility, Best Practices, SEO).
- All pages use static site generation (SSG) — no server-side rendering.
- Use Next.js `<Image>` with proper `width`, `height`, and responsive `sizes`.
- Minimize client-side JavaScript. Prefer Server Components; use `"use client"` only when required (interactivity, hooks, browser APIs).

## Key Dependencies

| Package               | Purpose                     |
| --------------------- | --------------------------- |
| `next`                | Framework (App Router, SSG) |
| `react` / `react-dom` | UI library                  |
| `tailwindcss`         | Utility-first CSS           |
| `next-mdx-remote`     | MDX rendering               |
| `gray-matter`         | Frontmatter parsing         |
| `resend`              | Contact form email delivery |
| `typescript`          | Type safety                 |
| `eslint`              | Linting                     |
| `prettier`            | Code formatting             |
