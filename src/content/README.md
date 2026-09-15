# Editing site content

You do not need to edit React components to add a blog post, project, or publication.

## Add a blog post

1. Duplicate any file in `blog/`.
2. Rename it with an ISO date followed by lowercase words and hyphens, for example `2026-09-15-my-new-post.json`.
3. Edit the title, dates, summary, tags, and body paragraphs.
4. Keep or remove `externalLink` and `externalLabel` as needed.

The date keeps the folder sorted. It is removed from the public address, so `2026-09-15-my-new-post.json` appears at `/blog/my-new-post`.

## Add a project

1. Duplicate any file in `projects/` and give it a date-prefixed name such as `2026-09-15-my-project.json`.
2. Edit its fields.
3. Set `group` to `research` or `other`.
4. Projects are automatically shown newest first according to their filenames.

The `accent` field accepts `blue`, `green`, `orange`, or `violet`.

## Add a publication

1. Duplicate any file in `publications/`.
2. Give it a date-prefixed name such as `2026-09-15-paper-title.json`.
3. Edit its title, authors, venue, tags, and links.
4. Set `featured` to `true` if it should appear in the short résumé selection.

Publications are automatically grouped by year and shown newest first.

## Update the résumé

Positions, education, and awards follow the same pattern. Each entry has its own date-prefixed JSON file in `experience/`, `education/`, or `awards/`. Add, remove, or edit one file without touching the résumé page code.
