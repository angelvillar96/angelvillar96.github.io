import { copyFileSync, mkdirSync, readdirSync } from 'node:fs';

// GitHub Pages serves each clean URL from a matching folder.
const blogRoutes = readdirSync('src/content/blog')
  .filter((file) => file.endsWith('.json'))
  .map((file) => `blog/${file.replace('.json', '')}`);

const routes = ['research', 'blog', 'resume', ...blogRoutes];

for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true });
  copyFileSync('dist/index.html', `dist/${route}/index.html`);
}

console.log(`Created ${routes.length} static route pages`);
