# Angel Villar-Corrales — personal website

A static React and TypeScript portfolio for research, publications, blog posts, and résumé content. It has no backend, database, CMS, router package, or runtime API dependency.

## Run locally

```bash
npm install
npm run dev
```

Create the production bundle with `npm run build`. The generated site is written to `dist/`. The build also creates a small HTML entry file for each route so clean links such as `/research` work on GitHub Pages.

## Update content

Every blog post, project, and publication has its own file. The site finds new files automatically:

- `src/content/blog/` — one JSON file per blog post
- `src/content/projects/` — one JSON file per project
- `src/content/publications/` — one JSON file per publication
- `src/content/experience/` — one JSON file per position
- `src/content/education/` — one JSON file per degree or study period
- `src/content/awards/` — one JSON file per award
- `src/data/site.ts` — name, biography, portrait, contact, and social links

Pages live in `src/pages/`, reusable UI lives in `src/components/`, and the visual system is split across `src/styles/`.

To add an item, duplicate a nearby file in the appropriate `src/content/` folder, prefix the filename with its ISO date, and edit its fields. For example, `2026-09-15-my-new-post.json` becomes `/blog/my-new-post`. Files are ordered newest first automatically; no imports, indexes, or components need to be changed.

The résumé page includes a **Save as PDF** button that opens the browser’s print dialog with a dedicated print layout.

## Publish with GitHub Pages

1. Create a GitHub repository and push this folder to its `main` branch.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. The included workflow builds and publishes the website after every push to `main`.

The custom domain is already set to `www.angelvillarcorrales.com` in `public/CNAME`. In the domain’s DNS settings, add:

```text
Type    Host    Value
CNAME   www     angelvillar96.github.io
```

To make the address without `www` work too, redirect `angelvillarcorrales.com` to `https://www.angelvillarcorrales.com` with the domain registrar, or add GitHub’s four documented apex-domain `A` records. After DNS has propagated, enable **Enforce HTTPS** in the repository’s Pages settings.
