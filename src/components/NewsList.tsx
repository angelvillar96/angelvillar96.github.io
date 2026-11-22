import type { NewsItem } from '../content/types';
import { formatMonth } from '../lib/dates';
import RichText from './RichText';

export default function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <ul className="news-list">
      {items.map((item) => (
        <li key={`${item.date}-${item.slug}`}>
          <time dateTime={item.date}>{formatMonth(item.date)}</time>
          <p><RichText text={item.text} /></p>
        </li>
      ))}
    </ul>
  );
}
