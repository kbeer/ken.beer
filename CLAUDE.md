# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal website for ken.beer. Static markdown via GitHub Pages + Jekyll (minima theme).

## Publishing

Push to `main`. GitHub Pages builds automatically.

## Structure

Flat. All pages live at root level as `page-name.md`. No nested directories.

## Adding a Page

1. Create `page-name.md` at root with:
   ```
   ---
   layout: default
   ---

   # Page Title

   Content here.
   ```

2. Link from `index.md` inside a `<details>` section

## Homepage Pattern

Use `<details>` for collapsible sections:

```markdown
<details>
<summary>Section Name</summary>

- [Page One](page-one.md)
- [Page Two](page-two.md)

</details>
```

## Conventions

- Flat structure (no subdirectories for content)
- Kebab-case filenames: `my-page.md`
- No `title:` in front matter (keeps pages out of header nav)
- No `[Home](/)` links (users click site title to go home)
