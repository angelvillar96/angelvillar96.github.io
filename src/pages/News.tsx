import NewsList from '../components/NewsList';
import { news } from '../content';

export default function News() {
  const years = [...new Set(news.map(({ year }) => year))];

  return (
    <>
      <header className="page-header">
        <h1>News</h1>
        <p>New papers, preprints, and other updates.</p>
      </header>
      {years.map((year) => (
        <section key={year} className="year-group" aria-labelledby={`news-${year}`}>
          <h2 className="year-heading" id={`news-${year}`}>{year}</h2>
          <NewsList items={news.filter((item) => item.year === year)} />
        </section>
      ))}
    </>
  );
}
