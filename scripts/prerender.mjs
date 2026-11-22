// Turns the client build in dist/ into a fully static site: every route gets its own HTML file
// with real content and page-specific metadata, so the site works for search engines, link
// previews, and visitors without JavaScript. Run after `vite build` and `vite build --ssr`.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = 'dist';
const SSR_ENTRY = 'dist-ssr/entry-server.js';

const { render, pages, notFoundPage, site } = await import(pathToFileURL(SSR_ENTRY).href);
const template = readFileSync(join(DIST, 'index.html'), 'utf8');

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const absolute = (path) => `${site.url}${path === '/' ? '/' : path}`;

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  image: absolute(site.portrait),
  jobTitle: site.role,
  worksFor: { '@type': 'Organization', name: site.organization, url: site.organizationUrl },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'University of Bonn' },
    { '@type': 'CollegeOrUniversity', name: 'Friedrich-Alexander-Universität Erlangen-Nürnberg' },
    { '@type': 'CollegeOrUniversity', name: 'University of Vigo' },
  ],
  sameAs: Object.values(site.links).filter((url) => !url.includes('scholar?q=')),
};

// Links to the previous site (InfinityFree, PHP templates) still exist in READMEs and project
// pages. GitHub Pages serves 404.html for them, so this script forwards them to the new pages.
const LEGACY_REDIRECTS = `(function () {
  var path = location.pathname.toLowerCase().replace(/\\/+$/, '');
  var exact = {
    '/templates/home.php': '/',
    '/templates/projects.php': '/projects',
    '/templates/publications.php': '/publications',
    '/templates/blog.php': '/news',
    '/templates/others/bibtex_playslot.php': '/publications#play-slot',
    '/templates/others/bibtex_textocvp.php': '/publications#text-ocvp',
    '/~startingphd': '/news',
    '/cv': '/cv.pdf'
  };
  var files = [
    [/mspred/, 'https://arxiv.org/pdf/2203.09303'],
    [/objectcentric/, 'https://arxiv.org/pdf/2302.11850'],
    [/super_resolution/, 'https://arxiv.org/pdf/2102.05105'],
    [/nimbronet/, '/publications#robocup-2023-winner']
  ];
  var target = exact[path];
  if (!target && path.indexOf('/templates/others/publications/') === 0) {
    for (var i = 0; i < files.length && !target; i++) if (files[i][0].test(path)) target = files[i][1];
    target = target || '/publications';
  }
  if (!target && path.indexOf('/templates/') === 0) target = '/';
  if (!target && path.indexOf('/~') === 0) target = '/news';
  if (target) location.replace(target);
})();`;

function head(page, { indexable = true, legacyRedirects = false } = {}) {
  const url = absolute(page.path);
  const image = absolute(site.socialImage);
  const tags = [
    ...(legacyRedirects ? [`<script>${LEGACY_REDIRECTS}</script>`] : []),
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<meta name="author" content="${escapeHtml(site.name)}" />`,
    indexable ? `<link rel="canonical" href="${url}" />` : '<meta name="robots" content="noindex" />',
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${escapeHtml(site.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${escapeHtml(`${site.name} — ${site.role}, ${site.organization}`)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ];
  if (page.path === '/') {
    tags.push(`<script type="application/ld+json">${JSON.stringify(personJsonLd).replace(/</g, '\\u003c')}</script>`);
  }
  return tags.join('\n    ');
}

const HEAD_BLOCK = /<!--head-->[\s\S]*?<!--\/head-->/;
const ROOT_BLOCK = '<div id="root"><!--app-html--></div>';
if (!HEAD_BLOCK.test(template) || !template.includes(ROOT_BLOCK)) {
  throw new Error('dist/index.html is missing the <!--head--> or <!--app-html--> placeholders');
}

function page(meta, renderPath, options) {
  return template
    .replace(HEAD_BLOCK, () => head(meta, options))
    .replace(ROOT_BLOCK, () => `<div id="root" data-route="${meta.path}">${render(renderPath)}</div>`);
}

function write(file, html) {
  const target = join(DIST, file);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
}

for (const meta of pages) {
  const html = page(meta, meta.path);
  if (meta.path === '/') {
    write('index.html', html);
  } else {
    // "/news" is served from news.html; news/index.html also covers "/news/".
    const name = meta.path.slice(1);
    write(`${name}.html`, html);
    write(`${name}/index.html`, html);
  }
}

// GitHub Pages serves 404.html for unknown URLs.
write('404.html', page(notFoundPage, notFoundPage.path, { indexable: false, legacyRedirects: true }));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(({ path }) => `  <url><loc>${absolute(path)}</loc></url>`).join('\n')}
</urlset>
`;
write('sitemap.xml', sitemap);
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${absolute('/sitemap.xml')}\n`);

rmSync('dist-ssr', { recursive: true, force: true });
console.log(`Pre-rendered ${pages.length} pages, 404.html, sitemap.xml, and robots.txt`);
