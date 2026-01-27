# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal website for ken.beer built with Astro Starlight. Deployed to GitHub Pages.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

## Deployment

Push to `main`. GitHub Actions builds and deploys automatically.

## Structure

```
src/content/docs/          # All content lives here
├── index.mdx              # Homepage (splash template)
└── docs/                  # Documentation pages (auto-sidebar)
    └── *.md               # Add markdown files here
src/styles/custom.css      # Theme overrides
astro.config.mjs           # Site config, sidebar, social links
```

## Adding Content

Create `src/content/docs/docs/my-page.md`:

```markdown
---
title: My Page Title
description: Optional description
---

Content in markdown...
```

Automatically appears in sidebar under "Docs".

## Customization

- **Sidebar**: Edit `astro.config.mjs` → `sidebar` array
- **Colors**: Edit `src/styles/custom.css` (currently teal accent)
- **Social links**: Edit `astro.config.mjs` → `social` array

## Starlight Docs

https://starlight.astro.build/
