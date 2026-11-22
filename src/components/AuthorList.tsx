import { Fragment, useState } from 'react';
import { isSelf } from '../lib/authors';

const COLLAPSE_ABOVE = 9;
const SHOW_WHEN_COLLAPSED = 6;

function Author({ name }: { name: string }) {
  return isSelf(name) ? <strong className="author-self">{name}</strong> : <>{name}</>;
}

function joined(names: string[], finalSeparator: boolean) {
  return names.map((author, index) => (
    <Fragment key={`${author}-${index}`}>
      {index > 0 && (finalSeparator && index === names.length - 1 ? (names.length > 2 ? ', and ' : ' and ') : ', ')}
      <Author name={author} />
    </Fragment>
  ));
}

/**
 * Comma-separated authors with your own name highlighted. Long lists collapse to the first few
 * names (plus yours) behind a toggle that stays mounted, so keyboard focus is kept when it is used.
 */
export default function AuthorList({ authors }: { authors: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const collapsible = authors.length > COLLAPSE_ABOVE;
  const collapsed = collapsible && !expanded;

  const selfIndex = authors.findIndex(isSelf);
  const selfHidden = selfIndex >= SHOW_WHEN_COLLAPSED;
  const skippedBeforeSelf = selfHidden ? selfIndex - SHOW_WHEN_COLLAPSED : 0;
  const hiddenAfter = authors.length - SHOW_WHEN_COLLAPSED - (selfHidden ? skippedBeforeSelf + 1 : 0);

  return (
    <p className="authors">
      {collapsed ? (
        <>
          {joined(authors.slice(0, SHOW_WHEN_COLLAPSED), false)}
          {selfHidden && (
            <>
              {skippedBeforeSelf > 0 ? ', …, ' : ', '}
              <Author name={authors[selfIndex]} />
            </>
          )}
          {hiddenAfter > 0 ? ', and ' : ' '}
        </>
      ) : (
        joined(authors, true)
      )}
      {collapsible && (
        <button
          key="toggle"
          type="button"
          className={expanded ? 'author-toggle author-toggle-less' : 'author-toggle'}
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? 'show fewer' : hiddenAfter > 0 ? `${hiddenAfter + skippedBeforeSelf} more authors` : 'show all'}
        </button>
      )}
    </p>
  );
}
