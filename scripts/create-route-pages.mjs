import { copyFileSync, mkdirSync } from 'node:fs';

// GitHub Pages serves each clean URL from a matching folder.
const routes = ['research', 'blog', 'resume'];

for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true });
  copyFileSync('dist/index.html', `dist/${route}/index.html`);
}

console.log(`Created static pages for: ${routes.join(', ')}`);
