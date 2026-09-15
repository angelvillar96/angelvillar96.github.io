import { useEffect, useState } from 'react';
import { Close, Menu, Moon, Sun } from './Icons';

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/research', label: 'Research' },
  { to: '/blog', label: 'Blog' },
  { to: '/resume', label: 'Résumé' },
];

type Theme = 'light' | 'dark';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="monogram" href="/" aria-label="Angel Villar-Corrales, home">
          <span>AV</span><i>C</i>
        </a>

        <nav className={open ? 'nav is-open' : 'nav'} aria-label="Primary navigation">
          {navigation.map(({ to, label }) => (
            <a key={to} href={to} className={(to === '/' ? pathname === '/' : pathname.startsWith(to)) ? 'active' : ''}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
          <button
            className="icon-button menu-button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
