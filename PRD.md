# Product Requirements Document: Arrowhead Research Website

## Overview

Rebuild the Arrowhead Research website from the current Squarespace site ([arrowheadresearch.org](https://arrowheadresearch.org)) to a modern Next.js application deployed on Vercel. The new site will faithfully reproduce existing content and structure while adding a blog/news section and using Markdown files in the repo for content management.

**Timeline:** ASAP / 1-2 weeks
**Stack:** Next.js (App Router), Tailwind CSS, Vercel, MDX for content
**Current site:** Squarespace (4 pages + external donate link)

---

## Organization Context

Arrowhead Research is a nonprofit that empowers military servicemembers to transform technical curiosity into real-world capability. The organization provides hands-on engineering experience, mentorship, and access to technical challenges through four core verticals:

1. **Engineering Sprints** - Build functional prototypes solving mission-focused problems
2. **Academia & Industry** - Engage with universities, research institutions, and industry partners
3. **Writing & Presenting** - Develop and deliver polished technical publications and talks
4. **Fielding & Competition** - Validate systems through events like Black Relay, Moonshot Rodeo, and national challenges

---

## Brand Identity

From the official brand kit:

| Element      | Value                       |
| ------------ | --------------------------- |
| Primary Font | Hybi11 Amigo Light          |
| Dark Gray    | `#2d2e2d` (RGB 45, 45, 45)  |
| Jade Green   | `#2c8753` (RGB 44, 135, 83) |

Logo assets are available in `images/` (JPG, PNG, SVG variants).

The site tone is direct, confident, and mission-driven. Copy uses short declarative statements. The tagline is "BUILD. BREAK. HACK. REPEAT."

**Font note:** If Hybi11 Amigo Light is not available as a web font or through Google Fonts, use a suitable sans-serif alternative (e.g., Inter, DM Sans) for body text and headings.

---

## Site Architecture

### Pages

| Route          | Source                    | Description                                                                                       |
| -------------- | ------------------------- | ------------------------------------------------------------------------------------------------- |
| `/`            | Existing home page        | Hero with tagline, "From Field to Function" intro, core verticals overview                        |
| `/mission`     | Existing mission page     | "The Problem" and "Our Approach" sections                                                         |
| `/programming` | Existing programming page | Detailed program cards: Moonshot Rodeo, Black Relay, Technical Competitions, Writing & Presenting |
| `/contact`     | Existing contact page     | Contact form + contextual copy                                                                    |
| `/blog`        | **New**                   | Blog/news index with paginated list of posts                                                      |
| `/blog/[slug]` | **New**                   | Individual blog post pages                                                                        |

### Persistent Elements

- **Header/Nav:** Logo (links to `/`), nav links (Home, Mission, Programming, Blog, Contact), theme toggle (top-right), prominent "Donate" button
- **Footer:** Contact email (`info@arrowheadresearch.org`), Donate link, copyright
- **Donate button:** External link to `https://donorbox.org/arrowhead-research-inc` (opens in new tab)

---

## Content Management

All page content and blog posts will be managed as **Markdown/MDX files in the repository**.

### Structure

```
content/
  blog/
    YYYY-MM-DD-post-slug.mdx    # Blog posts with frontmatter
  pages/
    home.mdx                     # Editable sections of the home page (optional)
    mission.mdx                  # Editable sections of the mission page (optional)
    programming.mdx              # Editable sections of the programming page (optional)
```

### Blog Post Frontmatter

```yaml
---
title: "Post Title"
date: "2026-02-22"
author: "Author Name"
summary: "A short description for the index page."
tags: ["engineering", "competition"]
image: "/images/blog/post-image.jpg" # optional hero image
---
```

Posts are rendered with `next-mdx-remote` or a comparable MDX pipeline. The blog index page should display posts in reverse chronological order with title, date, author, summary, and optional image.

The blog should launch with 2-3 seed posts containing lorem ipsum content as previews.

---

## Functional Requirements

### FR-1: Static Site Generation (SSG)

All pages must be statically generated at build time for performance and SEO. Blog posts are generated from MDX files at build time. No server-side rendering is required.

### FR-2: Responsive Design

The site must be fully responsive across mobile, tablet, and desktop breakpoints. Target a mobile-first approach. All styling is done with **Tailwind CSS** using utility classes. Brand colors and fonts are configured as Tailwind theme tokens.

### FR-3: Contact Form

The contact page must include a functional form with fields for:

- Name
- Military affiliation (dropdown / multi-select)
  - Active
  - Guard/Reserve
  - Veteran
  - Non-military
- Email
- Message / context

Form submissions are handled via a **Vercel API route using Resend** for email delivery to `info@arrowheadresearch.org`.

### FR-4: SEO & Metadata

Each page must include appropriate:

- `<title>` and `<meta description>`
- Open Graph tags (title, description, image)
- Canonical URLs
- Structured data where appropriate (Organization schema on home page)

### FR-5: Performance

Target Lighthouse scores:

- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### FR-6: Analytics

Integrate **Google Analytics** for insights on page visits and popular blog posts.

### FR-7: Donate Integration

The "Donate" button in the header and footer links to the external Donorbox page (`https://donorbox.org/arrowhead-research-inc`) and opens in a new tab.

### FR-8: Light/Dark Mode

The site supports both light and dark color themes. **Dark mode is the default.**

- A theme toggle switch is displayed in the top-right area of the header on all pages.
- Tailwind's `darkMode: 'class'` strategy is used. The `dark` class is applied to the `<html>` element.
- **Persistence:** The user's theme preference is stored in a **cookie** (`theme=dark` or `theme=light`). This allows the server (root layout) to read the preference before rendering, eliminating any flash of the wrong theme on page load.
- **Fallback:** If no cookie is set (first visit), default to dark mode. Optionally respect `prefers-color-scheme` from the user's OS as a secondary signal.
- **Behavior:** Clicking the toggle immediately updates the `<html>` class and sets the cookie. No page reload required.
- Both themes must maintain WCAG 2.1 AA contrast ratios and be visually consistent with the brand identity.

---

## Non-Functional Requirements

### NFR-1: Hosting & Deployment

- Deployed to **Vercel**
- Automatic deployments from the `main` branch
- Preview deployments for pull requests

### NFR-2: Domain

The site will be served at `arrowheadresearch.org` (DNS migration from Squarespace to Vercel after launch).

### NFR-3: Image Handling

Use Next.js `<Image>` component for optimized image loading (WebP/AVIF, lazy loading, responsive srcsets). Existing images from Squarespace will need to be downloaded and stored in `public/images/`. Use `placeholder.jpg` for any images that need to be filled in later.

### NFR-4: Accessibility

- Semantic HTML throughout
- Keyboard navigable
- Sufficient color contrast (WCAG 2.1 AA)
- Alt text on all images
- Skip-to-content link

### NFR-5: Code Quality

- TypeScript throughout
- ESLint + Prettier for linting/formatting
- Component-based architecture

---

## Technical Architecture

```
website-frontend/
  public/
    images/               # Static images (logos, photos, placeholder.jpg)
  content/
    blog/                 # MDX blog posts (including seed posts)
  src/
    app/
      layout.tsx          # Root layout (header, footer)
      page.tsx            # Home page
      mission/
        page.tsx
      programming/
        page.tsx
      contact/
        page.tsx
      blog/
        page.tsx          # Blog index
        [slug]/
          page.tsx        # Blog post detail
      api/
        contact/
          route.ts        # Contact form handler (Resend)
    components/
      Header.tsx
      Footer.tsx
      ThemeToggle.tsx       # Light/dark mode switch
      DonateButton.tsx
      ContactForm.tsx
      BlogCard.tsx
      ProgramCard.tsx
      Hero.tsx
    lib/
      mdx.ts              # MDX parsing utilities
      metadata.ts          # Shared SEO metadata helpers
      theme.ts             # Cookie-based theme helpers
    styles/
      globals.css          # Tailwind directives, base styles
  tailwind.config.ts       # Tailwind configuration with brand color/font tokens
  next.config.ts
  tsconfig.json
  package.json
```

### Key Dependencies

| Package               | Purpose                         |
| --------------------- | ------------------------------- |
| `next`                | Framework (App Router, SSG)     |
| `react` / `react-dom` | UI library                      |
| `tailwindcss`         | Utility-first CSS framework     |
| `next-mdx-remote`     | MDX rendering for blog posts    |
| `gray-matter`         | Frontmatter parsing             |
| `resend`              | Email delivery for contact form |
| `typescript`          | Type safety                     |
| `eslint`              | Linting                         |

---

## Design Direction

The visual design should be clean, dark-toned, and authoritative -- matching the tactical/technical identity of the organization. All styling is implemented with **Tailwind CSS utility classes**. Key principles:

- **Dark mode (default):** Dark background (`#2d2e2d`) with light text
- **Light mode:** Light/white background with dark text
- **Jade green** (`#2c8753`) for accent elements in both themes: buttons, links, underlines, hover states
- **High contrast** typography with clear hierarchy in both themes
- **Minimal ornamentation** -- let content and imagery speak
- **Full-bleed hero sections** with bold typographic treatments (ref: "BUILD. BREAK. HACK. REPEAT.")
- **Card-based layouts** for programs and blog posts
- Brand colors, theme variants, and font are defined as Tailwind theme extensions in `tailwind.config.ts`
- Use Tailwind `dark:` variant classes throughout components to support both themes
