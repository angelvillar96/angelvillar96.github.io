import { useEffect, useState } from 'react';
import type { Publication, PublicationLinks } from '../content/types';
import AuthorList from './AuthorList';

const LINK_LABELS: [keyof PublicationLinks, string][] = [
  ['paper', 'Paper'],
  ['arxiv', 'arXiv'],
  ['pdf', 'PDF'],
  ['code', 'Code'],
  ['project', 'Website'],
  ['demo', 'Demo'],
  ['video', 'Video'],
  ['poster', 'Poster'],
  ['dataset', 'Dataset'],
  ['model', 'Model'],
];

/** "ICML 2025" → "ICML"; keeps the badge short. */
const venueAbbreviation = (venue: string) => venue.replace(/\s*'?\d{2,4}$/, '');

/** "/images/publications/x.webp" → "/images/publications/x-360.webp" (generated alongside). */
const smallImage = (src: string) => src.replace(/(\.\w+)$/, '-360$1');

function CopyButton({ text }: { text: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');

  useEffect(() => {
    if (status === 'idle') return;
    const timer = window.setTimeout(() => setStatus('idle'), 2000);
    return () => window.clearTimeout(timer);
  }, [status]);

  const copy = () => {
    if (!navigator.clipboard) {
      setStatus('failed');
      return;
    }
    navigator.clipboard.writeText(text).then(() => setStatus('copied'), () => setStatus('failed'));
  };

  return (
    <>
      <button type="button" className="copy-button" onClick={copy}>
        {status === 'copied' ? 'Copied' : status === 'failed' ? 'Select & copy' : 'Copy'}
      </button>
      <span className="visually-hidden" role="status">
        {status === 'copied' ? 'BibTeX copied to clipboard' : status === 'failed' ? 'Copying failed; select the text to copy it' : ''}
      </span>
    </>
  );
}

export default function PublicationItem({ publication }: { publication: Publication }) {
  const [panel, setPanel] = useState<'summary' | 'bibtex' | null>(null);
  const { links, slug } = publication;
  const toggle = (next: 'summary' | 'bibtex') => setPanel((current) => (current === next ? null : next));
  const visibleLinks = LINK_LABELS.filter(([key]) => {
    const href = links[key];
    return href && !(key === 'paper' && href === links.arxiv);
  });

  return (
    <article className="pub" id={slug}>
      <div className="pub-aside">
        <span className={`venue-badge ${publication.type}`}>{venueAbbreviation(publication.venue)}</span>
        {publication.image && (
          <a className="pub-thumb" href={links.project ?? links.paper} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
            <img
              src={publication.image}
              srcSet={`${smallImage(publication.image)} 360w, ${publication.image} 720w`}
              sizes="168px"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </a>
        )}
      </div>
      <div className="pub-body">
        <h3 className="pub-title">
          <a href={links.paper} target="_blank" rel="noopener noreferrer">{publication.title}</a>
        </h3>
        <AuthorList authors={publication.authors} />
        <p className="pub-venue">
          <em>{publication.venueFull ?? publication.venue}</em>, {publication.year}
          {publication.highlight && <span className="pub-highlight">{publication.highlight}</span>}
        </p>
        <div className="pub-links">
          {visibleLinks.map(([key, label]) => (
            <a key={key} className="pill" href={links[key]} target="_blank" rel="noopener noreferrer">{label}</a>
          ))}
          <button
            type="button"
            className="pill"
            aria-expanded={panel === 'summary'}
            aria-controls={`${slug}-summary`}
            onClick={() => toggle('summary')}
          >
            TL;DR
          </button>
          {publication.bibtex && (
            <button
              type="button"
              className="pill"
              aria-expanded={panel === 'bibtex'}
              aria-controls={`${slug}-bibtex`}
              onClick={() => toggle('bibtex')}
            >
              BibTeX
            </button>
          )}
        </div>
        <p className="pub-summary" id={`${slug}-summary`} hidden={panel !== 'summary'}>{publication.summary}</p>
        {publication.bibtex && (
          <div className="pub-bibtex" id={`${slug}-bibtex`} hidden={panel !== 'bibtex'}>
            <pre tabIndex={0} role="region" aria-label={`BibTeX for ${publication.title}`}>
              <code>{publication.bibtex}</code>
            </pre>
            {panel === 'bibtex' && <CopyButton text={publication.bibtex} />}
          </div>
        )}
      </div>
    </article>
  );
}
