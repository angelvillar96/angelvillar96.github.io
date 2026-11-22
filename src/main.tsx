import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource-variable/inter';
import App from './App';
import { resolveRoute } from './routes';
import './styles/global.css';
import './styles/layout.css';
import './styles/pages.css';

const container = document.getElementById('root')!;
const path = window.location.pathname;
const app = (
  <StrictMode>
    <App path={path} />
  </StrictMode>
);

// Production pages are pre-rendered at build time (see scripts/prerender.mjs), so React only
// needs to attach to the existing markup. During development, or if a host serves a page that
// was rendered for a different route, render from scratch instead.
if (container.firstElementChild && container.dataset.route === resolveRoute(path).path) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
