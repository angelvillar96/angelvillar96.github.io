import { ArrowRight, ArrowUpRight, Github, Mail } from '../components/Icons';
import ProjectCard from '../components/ProjectCard';
import PublicationItem from '../components/PublicationItem';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/projects';
import { publications } from '../data/publications';
import { researchThemes, site } from '../data/site';

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="status-line reveal"><span /> Research Scientist · Paris</p>
          <h1 className="reveal reveal-delay-1">
            Machine intelligence for the <em>physical world.</em>
          </h1>
          <p className="hero-intro reveal reveal-delay-2">{site.intro}</p>
          <div className="hero-actions reveal reveal-delay-3">
            <a className="button primary" href="/research">Explore my research <ArrowRight /></a>
            <a className="button text" href={`mailto:${site.email}`}>Get in touch <ArrowUpRight /></a>
          </div>
        </div>
        <div className="hero-portrait reveal reveal-delay-2">
          <div className="portrait-frame">
            <img src={site.portrait} alt="Angel Villar-Corrales" />
            <div className="portrait-grid" aria-hidden="true" />
          </div>
          <div className="portrait-note">
            <span className="portrait-note-index">A / 01</span>
            <p>{site.role}<br />{site.location}</p>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span>Scroll to explore</span><i /></div>
      </section>

      <section className="about-section section shell">
        <SectionHeading eyebrow="About" title="Seeing scenes as systems, not snapshots." />
        <div className="about-grid">
          <p className="about-lead">{site.about}</p>
          <div className="about-links">
            <a href="/resume">Read my résumé <ArrowRight /></a>
            <a href={site.links.github} target="_blank" rel="noreferrer"><Github /> Follow the code</a>
          </div>
        </div>
        <div className="theme-grid">
          {researchThemes.map((theme) => (
            <article className="theme-card" key={theme.number}>
              <span>{theme.number}</span>
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
            </article>
          ))}
        </div>
        <div className="personal-note">
          <blockquote>“{site.quote}”</blockquote>
          <div>
            <p>{site.personal}</p>
            <cite>{site.quoteSource}</cite>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="shell">
          <SectionHeading
            eyebrow="Selected work"
            title="Research in motion."
            copy="Projects that turn structured representations into predictions, plans, and working systems."
          />
          <div className="project-grid">
            {projects.slice(0, 4).map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
          <div className="section-link"><a href="/research">View all research <ArrowRight /></a></div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading eyebrow="Latest publications" title="Recent papers." />
        <div className="publication-list home-publications">
          {publications.slice(0, 4).map((publication) => (
            <PublicationItem key={publication.title} publication={publication} />
          ))}
        </div>
        <div className="section-link"><a href="/research#publications">Browse all publications <ArrowRight /></a></div>
      </section>

      <section className="contact-strip">
        <div className="shell contact-strip-inner">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Ideas get better<br />when shared.</h2>
          </div>
          <div className="contact-strip-copy">
            <p>I’m always interested in thoughtful conversations about visual intelligence, world models, and robotics.</p>
            <a href={`mailto:${site.email}`}><Mail /> {site.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}
