import { site } from '../data/site';
import { ArrowUpRight, Github, Mail } from './Icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-callout">
        <p className="eyebrow">Let’s make something useful</p>
        <a className="footer-email" href={`mailto:${site.email}`}>
          Get in touch <ArrowUpRight size={28} />
        </a>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <div className="footer-links">
          <a href={site.links.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
          <a href={`mailto:${site.email}`}><Mail /> Email</a>
          <a href="/resume">Résumé</a>
        </div>
      </div>
    </footer>
  );
}
