import type { Publication } from '../content/types';
import { ArrowUpRight } from './Icons';

export default function PublicationItem({ publication }: { publication: Publication }) {
  return (
    <article className="publication-item">
      <div className="publication-meta">
        <span>{publication.year}</span>
        <span>{publication.venue}</span>
      </div>
      <div className="publication-main">
        <h3>{publication.title}</h3>
        <p>{publication.authors}</p>
        <ul className="tag-list compact" aria-label="Research areas">
          {publication.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
      <div className="publication-links">
        <a href={publication.paper} target="_blank" rel="noreferrer">Paper <ArrowUpRight size={15} /></a>
        {publication.code && <a href={publication.code} target="_blank" rel="noreferrer">Code <ArrowUpRight size={15} /></a>}
        {publication.project && <a href={publication.project} target="_blank" rel="noreferrer">Project <ArrowUpRight size={15} /></a>}
      </div>
    </article>
  );
}
