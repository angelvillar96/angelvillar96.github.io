# Editing site content

You do not need to edit React components to add a blog post or project.

## Add a blog post

1. Duplicate any file in `blog/`.
2. Rename it using lowercase words and hyphens, for example `my-new-post.json`.
3. Edit the title, dates, summary, tags, and body paragraphs.
4. Keep or remove `externalLink` and `externalLabel` as needed.

The filename becomes the page address: `my-new-post.json` appears at `/blog/my-new-post`.

## Add a project

1. Duplicate any file in `projects/`.
2. Edit its fields.
3. Set `group` to `research` or `other`.
4. Change `order` to control its position.

The `accent` field accepts `blue`, `green`, `orange`, or `violet`.
