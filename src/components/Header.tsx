import { useEffect, useState } from 'react';
import { navigation } from '../routes';
import { site } from '../data/site';
import { Moon, Sun } from './Icons';

type Theme = 'light' | 'dark';

const THEME_COLORS: Record<Theme, string> = { light: '#ffffff', dark: '#111418' };

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.removeAttribute('media');
    meta.setAttribute('content', THEME_COLORS[theme]);
  });
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Storage can be unavailable (private mode); the toggle still works for this visit.
  }
}

export default function Header({ activePath }: { activePath: string }) {
  // The inline script in index.html sets the initial theme before the page paints.
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.dataset.theme === 'dark'), []);

  const toggle = () => {
    const next: Theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    setDark(next === 'dark');
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/">{site.name}</a>
        <nav className="tabs" aria-label="Main">
          {navigation.map(({ href, label, newTab }) =>
            newTab ? (
              <a key={href} href={href} target="_blank" rel="noopener" title="CV (PDF), opens in a new tab">
                {label}
                <span className="visually-hidden"> (PDF, opens in a new tab)</span>
              </a>
            ) : (
              <a key={href} href={href} aria-current={href === activePath ? 'page' : undefined}>
                {label}
              </a>
            ),
          )}
        </nav>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggle}
          aria-pressed={dark}
          aria-label="Dark theme"
          title="Toggle dark theme"
        >
          <Moon className="icon-moon" />
          <Sun className="icon-sun" />
        </button>
      </div>
    </header>
  );
}
