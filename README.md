# ibrahimpiri.com

My personal website: [ibrahimpiri.com](https://ibrahimpiri.com).

Built with React, Vite, and Tailwind CSS. The animated background is a small
Physarum (slime mold) simulation, the same behavior behind the algorithms at
[Mireta Urban Dynamics](https://miretaurban.com).

## Running locally

```bash
npm install
npm run dev       # http://localhost:5173
```

`npm run build` writes the production site to `dist/`, and `npm run preview` serves that build.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to the `gh-pages` branch for GitHub Pages.

The build writes a separate HTML file for each page (`mireta.html`, and so on),
each with its own title and link-preview tags, plus a `404.html` for everything else. That
gives the site clean URLs on GitHub Pages without hash routing.

## Layout

| Path | What's there |
| --- | --- |
| `src/pages/` | One component per page |
| `src/pages.js` | Page titles and descriptions, used by the app and the build |
| `src/components/Physarum.jsx` | The slime-mold simulation |
| `src/components/ui.jsx` | Shared layout pieces (page header, sections, stats, figures) |
| `src/components/motion.jsx` | Lazy-loading videos and scroll reveals |
| `public/` | Images, videos, `resume.pdf`, and the link-preview image |

The previous version of the site is preserved on the `archive/2025-site` branch.
