# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal website for ken.beer built with Astro + Tailwind CSS. Deployed to GitHub Pages.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Deployment

Push to `main`. GitHub Actions builds and deploys automatically.

## Structure

```
src/
├── content/docs/    # Markdown content (auto-routed to /docs/*)
├── layouts/         # Page layouts (Base.astro)
├── pages/           # Astro pages (index.astro, etc.)
└── styles/          # Global CSS (Tailwind)
public/              # Static assets (favicon, CNAME)
```

## Adding Content

### Markdown pages (recommended for docs/articles)

Create `src/content/docs/my-page.md`:

```markdown
---
title: My Page Title
description: Optional description
---

# My Page

Content in markdown...
```

Automatically available at `/docs/my-page`

### Astro pages (for custom layouts)

Create `src/pages/my-page.astro`:

```astro
---
import Base from '../layouts/Base.astro'
---

<Base title="My Page">
  <div class="prose">
    <h1>My Page</h1>
    <p>Content here...</p>
  </div>
</Base>
```

## Styling

- Uses Tailwind CSS v4
- Prose styling defined in `src/styles/global.css`
- Stone color palette for minimal aesthetic
- `<details>` elements styled for dropdowns

## Conventions

- Markdown content goes in `src/content/docs/`
- Custom pages go in `src/pages/`
- All pages use `Base` layout
- Wrap content in `<div class="prose">` for typography styling
