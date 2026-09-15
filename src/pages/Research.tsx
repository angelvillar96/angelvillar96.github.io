import { useMemo, useState } from 'react';
import PageIntro from '../components/PageIntro';
import ProjectCard from '../components/ProjectCard';
import PublicationItem from '../components/PublicationItem';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/projects';
import { publications, publicationYears } from '../data/publications';

export default function Research() {
  const [year, setYear] = useState<number | 'All'>('All');
  const visiblePublications = useMemo(
    () => year === 'All' ? publications : publications.filter((publication) => publication.year === year),
    [year],
  );

  return (
    <>
      <PageIntro
        eyebrow="Research"
        title="Learning to parse, predict, and act."
        description="I study structured visual representations and predictive models, with a focus on making intelligent systems more compositional, controllable, and useful in the physical world."
      />

      <section className="section section-tint">
        <div className="shell">
          <SectionHeading eyebrow="Projects" title="Selected research systems." />
          <div className="project-grid">
            {projects.filter(({ group }) => group === 'research').map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
          <div className="subsection-heading">
            <p className="eyebrow">Experiments & open source</p>
            <h2>Other projects.</h2>
          </div>
          <div className="project-grid">
            {projects.filter(({ group }) => group === 'other').map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </div>
      </section>

      <section className="section shell" id="publications">
        <SectionHeading
          eyebrow="Publications"
          title="Papers & proceedings."
          copy="Peer-reviewed work and selected preprints, ordered by year."
        />
        <div className="filter-row" aria-label="Filter publications by year">
          <button className={year === 'All' ? 'active' : ''} onClick={() => setYear('All')}>All</button>
          {publicationYears.map((item) => (
            <button key={item} className={year === item ? 'active' : ''} onClick={() => setYear(item)}>{item}</button>
          ))}
        </div>
        <div className="publication-list">
          {visiblePublications.map((publication) => (
            <PublicationItem key={`${publication.year}-${publication.title}`} publication={publication} />
          ))}
        </div>
      </section>
    </>
  );
}
