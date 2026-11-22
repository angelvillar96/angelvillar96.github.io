import type { ReactNode } from 'react';
import { site } from './data/site';
import Home from './pages/Home';
import News from './pages/News';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

export type Route = {
  path: string;
  /** Tab label; routes without one are not shown in the navigation. */
  label?: string;
  title: string;
  description: string;
  render: () => ReactNode;
};

export const routes: Route[] = [
  {
    path: '/',
    label: 'about',
    title: `${site.name} — ${site.role}, ${site.organization}`,
    description: site.description,
    render: () => <Home />,
  },
  {
    path: '/news',
    label: 'news',
    title: `News — ${site.name}`,
    description: `Recent papers, preprints, and updates from ${site.name}.`,
    render: () => <News />,
  },
  {
    path: '/publications',
    label: 'publications',
    title: `Publications — ${site.name}`,
    description: `Papers and preprints by ${site.name} on representation learning, object-centric world models, video prediction, speech, and robotics.`,
    render: () => <Publications />,
  },
  {
    path: '/projects',
    label: 'projects',
    title: `Projects — ${site.name}`,
    description: `Research code and open-source projects by ${site.name}.`,
    render: () => <Projects />,
  },
];

export const notFoundRoute: Route = {
  path: '/404',
  title: `Page not found — ${site.name}`,
  description: site.description,
  render: () => <NotFound />,
};

export type NavItem = { href: string; label: string; newTab?: boolean };

/** Tabs in the header: every route with a label, then the CV, which opens the PDF in a new tab. */
export const navigation: NavItem[] = [
  ...routes.flatMap(({ path, label }) => (label ? [{ href: path, label }] : [])),
  { href: '/cv.pdf', label: 'cv', newTab: true },
];

export function resolveRoute(pathname: string): Route {
  const path = pathname.replace(/\/+$/, '').replace(/(?:\/index)?(?:\.html)?$/, '') || '/';
  return routes.find((route) => route.path === path) ?? notFoundRoute;
}
