import { useMemo, useState } from 'react';
import PublicationItem from '../components/PublicationItem';
import { publications } from '../content';
import { site } from '../data/site';
import { isLeadAuthor } from '../lib/authors';

type Publication = (typeof publications)[number];

const filters = [
  { key: 'all', label: 'all', test: () => true },
  { key: 'selected', label: 'selected', test: (publication: Publication) => Boolean(publication.featured) },
  { key: 'first-author', label: 'first author', test: (publication: Publication) => isLeadAuthor(publication.authors) },
] as const;

type Filter = (typeof filters)[number]['key'];

export default function Publications() {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = useMemo(() => publications.filter(filters.find(({ key }) => key === filter)!.test), [filter]);
  const years = [...new Set(visible.map(({ year }) => year))];

  return (
    <>
      <header className="page-header">
        <h1>Publications</h1>
        <p>
          Papers and preprints in reverse chronological order. An up-to-date list is also on{' '}
          <a href={site.links.scholar} target="_blank" rel="noopener noreferrer">Google Scholar</a>.
          {' '}<span className="legend">* Equal contribution. † Core contributor. “First author” includes both.</span>
        </p>
      </header>

      <div className="filters" role="group" aria-label="Filter publications">
        {filters.map(({ key, label, test }) => (
          <button key={key} type="button" aria-pressed={filter === key} onClick={() => setFilter(key)}>
            {label}
            <span className="filter-count">{publications.filter(test).length}</span>
          </button>
        ))}
      </div>

      {years.map((year) => (
        <section key={year} className="year-group" aria-labelledby={`pubs-${year}`}>
          <h2 className="year-heading" id={`pubs-${year}`}>{year}</h2>
          <div className="pub-list">
            {visible.filter((publication) => publication.year === year).map((publication) => (
              <PublicationItem key={publication.slug} publication={publication} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
