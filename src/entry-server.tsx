import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { notFoundRoute, routes } from './routes';
import { site } from './data/site';

/** Renders one route to HTML at build time. Used only by scripts/prerender.mjs. */
export function render(path: string) {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  );
}

const toPage = ({ path, title, description }: (typeof routes)[number]) => ({ path, title, description });

export const pages = routes.map(toPage);
export const notFoundPage = toPage(notFoundRoute);
export { site };
