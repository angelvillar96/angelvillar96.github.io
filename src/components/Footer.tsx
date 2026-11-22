import { site } from '../data/site';
import { formatMonth } from '../lib/dates';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {__BUILD_DATE__.slice(0, 4)} {site.name}</p>
        <p>Last updated {formatMonth(__BUILD_DATE__, 'long')}</p>
      </div>
    </footer>
  );
}
