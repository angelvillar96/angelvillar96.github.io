import { site } from '../data/site';
import { FileText, Github, LinkedIn, Mail, Orcid, Scholar } from './Icons';

const items = [
  { label: 'Email', href: `mailto:${site.email}`, icon: Mail },
  { label: 'Google Scholar', href: site.links.scholar, icon: Scholar },
  { label: 'GitHub', href: site.links.github, icon: Github },
  { label: 'LinkedIn', href: site.links.linkedin, icon: LinkedIn },
  { label: 'ORCID', href: site.links.orcid, icon: Orcid },
  { label: 'CV (PDF)', href: '/cv.pdf', icon: FileText },
];

export default function SocialLinks() {
  return (
    <ul className="social-links">
      {items.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            title={label}
            aria-label={label}
            {...(href.startsWith('http') || href.endsWith('.pdf') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
