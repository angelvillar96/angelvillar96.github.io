import NewsList from '../components/NewsList';
import PublicationItem from '../components/PublicationItem';
import RichText from '../components/RichText';
import SocialLinks from '../components/SocialLinks';
import { ArrowRight } from '../components/Icons';
import { news, publications } from '../content';
import { site } from '../data/site';

const HOME_NEWS_COUNT = 6;

export default function Home() {
  const selected = publications.filter(({ featured }) => featured);

  return (
    <>
      <section className="profile">
        <div className="profile-heading">
          <h1>{site.name}</h1>
          <p className="profile-role">
            {site.role}, <a href={site.organizationUrl} target="_blank" rel="noopener noreferrer">{site.organization}</a>
            <span aria-hidden="true"> · </span>
            {site.location}
          </p>
        </div>
        <img
          className="profile-photo"
          src={site.portrait}
          width={460}
          height={460}
          alt={`Portrait of ${site.name}`}
        />
        <div className="profile-bio">
          {site.bio.map((paragraph) => <p key={paragraph}><RichText text={paragraph} /></p>)}
        </div>
        <div className="profile-meta">
          <ul className="chips" aria-label="Research interests">
            {site.interests.map((interest) => <li key={interest}>{interest}</li>)}
          </ul>
          <SocialLinks />
        </div>
      </section>

      <section className="section" aria-labelledby="news-heading">
        <h2 className="section-title" id="news-heading">News</h2>
        <NewsList items={news.slice(0, HOME_NEWS_COUNT)} />
        {news.length > HOME_NEWS_COUNT && (
          <a className="more-link" href="/news">All news <ArrowRight /></a>
        )}
      </section>

      <section className="section" aria-labelledby="selected-heading">
        <h2 className="section-title" id="selected-heading">Selected publications</h2>
        <p className="legend">* Equal contribution. † Core contributor.</p>
        <div className="pub-list">
          {selected.map((publication) => <PublicationItem key={publication.slug} publication={publication} />)}
        </div>
        <a className="more-link" href="/publications">All publications <ArrowRight /></a>
      </section>
    </>
  );
}
