import PageIntro from '../components/PageIntro';
import { Download, ArrowUpRight } from '../components/Icons';
import { awards, education, experience, expertise } from '../data/resume';
import { publications } from '../data/publications';
import { site } from '../data/site';

export default function Resume() {
  return (
    <>
      <div className="resume-intro-wrap">
        <PageIntro
          eyebrow="Résumé"
          title="Research, engineering, and open work."
          description="A compact overview of my research experience, education, and selected publications."
        />
        <button className="button primary print-button" onClick={() => window.print()}>
          Save as PDF <Download />
        </button>
      </div>

      <section className="resume-sheet shell">
        <header className="resume-print-header">
          <div><h1>{site.name}</h1><p>{site.role}</p></div>
          <div><a href={`mailto:${site.email}`}>{site.email}</a><p>{site.location}</p></div>
        </header>

        <div className="resume-section">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.place}>
                <p className="timeline-period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="timeline-place">{item.place} · {item.location}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="resume-section two-column">
          <h2>Education</h2>
          <div>
            {education.map((item) => (
              <article className="education-item" key={item.degree}>
                <h3>{item.degree}</h3>
                <p>{item.place}</p>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="resume-section two-column">
          <h2>Expertise</h2>
          <ul className="expertise-list">
            {expertise.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="resume-section two-column">
          <h2>Awards</h2>
          <ul className="award-list">
            {awards.map((award) => (
              <li key={`${award.year}-${award.title}`}>
                <span>{award.year}</span>
                <div><strong>{award.title}</strong>{award.detail && <small>{award.detail}</small>}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="resume-section two-column">
          <h2>Selected publications</h2>
          <ol className="resume-publications">
            {publications.filter(({ featured }) => featured).map((publication) => (
              <li key={publication.title}>
                <a href={publication.paper} target="_blank" rel="noreferrer">
                  <strong>{publication.title}</strong><ArrowUpRight size={14} />
                </a>
                <span>{publication.authors}. {publication.venue}, {publication.year}.</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="resume-section two-column resume-online">
          <h2>Online</h2>
          <div>
            <a href={site.links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
            <a href={site.links.orcid} target="_blank" rel="noreferrer">ORCID <ArrowUpRight size={14} /></a>
            <a href={site.links.scholar} target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight size={14} /></a>
            <a href={`mailto:${site.academicEmail}`}>{site.academicEmail}</a>
          </div>
        </div>
      </section>
    </>
  );
}
