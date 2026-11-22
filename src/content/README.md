# Editing site content

Every item is one JSON file named `YYYY-MM-DD-short-name.json` (lowercase words joined by hyphens).
The date sorts the items; the rest of the name is used as an identifier. You never need to touch
React components to add content. Run `npm run dev` to preview changes.

## News — `news/`

One short update per file. The date in the file name is shown as "Oct 2026". The text supports
`[links](https://…)`, `**bold**`, and `*italic*`.

`news/2026-10-31-gslm2.json`

```json
{
  "text": "New preprint: [GSLM2](https://arxiv.org/abs/2611.01143), a multi-stream speech representation model for generative spoken language modeling."
}
```

The six most recent items appear on the home page; all items appear under **news**.

## Publications — `publications/`

Use the publication (or first release) date in the file name. It sets the year shown on the site.

`publications/2025-07-13-play-slot.json`

```json
{
  "title": "PlaySlot: Learning Inverse Latent Dynamics for Controllable Object-Centric Video Prediction and Planning",
  "authors": ["Angel Villar-Corrales", "Sven Behnke"],
  "venue": "ICML 2025",
  "venueFull": "International Conference on Machine Learning (ICML)",
  "type": "conference",
  "highlight": "",
  "summary": "One or two plain sentences shown when visitors click TL;DR.",
  "image": "/images/publications/play-slot.webp",
  "links": {
    "paper": "https://proceedings.mlr.press/…",
    "arxiv": "https://arxiv.org/abs/2502.07600",
    "pdf": "https://arxiv.org/pdf/2502.07600",
    "code": "https://github.com/angelvillar96/PlaySlot",
    "project": "https://play-slot.github.io/PlaySlot/"
  },
  "bibtex": "@inproceedings{…}",
  "featured": true
}
```

- `authors`: full names in order. Your name is highlighted automatically (spellings are listed in
  `authorAliases` in `src/data/site.ts`). Add `*` after a name for equal contribution and `†` for
  core contributors.
- `venue`: short label; the part before the year becomes the colored badge (e.g. "ICML").
- `type`: one of `conference`, `journal`, `workshop`, `preprint`, `thesis`. It sets the badge color.
- `links.paper` is required; every other link is optional and becomes a button
  (`arxiv`, `pdf`, `code`, `project`, `demo`, `video`, `poster`, `dataset`, `model`).
- `image`: optional teaser figure in `public/images/publications/`. Add two files: `name.webp`
  (about 720 px wide) and a smaller `name-360.webp` (360 px wide), e.g.
  `magick figure.png -resize 720x -quality 82 name.webp && magick figure.png -resize 360x -quality 80 name-360.webp`.
- `featured: true` shows the paper under **Selected publications** on the home page and in the
  **selected** filter on the publications page. The **first author** filter is automatic: it lists
  papers where you are the first author or are marked with `*` or `†`.
- `highlight`: optional distinction such as "Oral" or "Best Paper Award".

## Projects — `projects/`

```json
{
  "title": "PlaySlot",
  "kicker": "World models · ICML 2025",
  "description": "One sentence about the project.",
  "href": "https://play-slot.github.io/PlaySlot/",
  "group": "research",
  "image": "/images/publications/play-slot.webp"
}
```

`group` is `research` (shown as cards with the figure) or `other` (shown as a simple list).
`href` and `image` are optional.

## CV

The **cv** tab opens the PDF at `public/cv.pdf` in a new browser tab. See *Update the CV* in the main README.
