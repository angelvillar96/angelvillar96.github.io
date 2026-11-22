import { Fragment, type ReactNode } from 'react';

// Supports [label](url), **bold**, and *italic* — enough for short bios and news items.
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*|\*(.+?)\*/g;

const isExternal = (href: string) => /^https?:\/\//.test(href);

function parse(text: string, keyPrefix = ''): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let index = 0;

  for (const match of text.matchAll(TOKEN)) {
    const [whole, label, href, bold, italic] = match;
    const start = match.index ?? 0;
    if (start > cursor) nodes.push(text.slice(cursor, start));
    const key = `${keyPrefix}${index++}`;

    if (label !== undefined && href !== undefined) {
      nodes.push(
        <a key={key} href={href} {...(isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {parse(label, `${key}-`)}
        </a>,
      );
    } else if (bold !== undefined) {
      nodes.push(<strong key={key}>{parse(bold, `${key}-`)}</strong>);
    } else if (italic !== undefined) {
      nodes.push(<em key={key}>{parse(italic, `${key}-`)}</em>);
    }
    cursor = start + whole.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

export default function RichText({ text }: { text: string }) {
  return <Fragment>{parse(text)}</Fragment>;
}
