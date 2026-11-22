import ProjectCard from '../components/ProjectCard';
import { projects } from '../content';

export default function Projects() {
  const research = projects.filter(({ group }) => group === 'research');
  const other = projects.filter(({ group }) => group === 'other');

  return (
    <>
      <header className="page-header">
        <h1>Projects</h1>
        <p>Code and project pages for my research, plus a few open-source tools and side projects.</p>
      </header>

      <section className="section first" aria-labelledby="research-projects">
        <h2 className="section-title" id="research-projects">Research</h2>
        <div className="project-grid">
          {research.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="section" aria-labelledby="other-projects">
        <h2 className="section-title" id="other-projects">Other projects</h2>
        <ul className="project-list">
          {other.map((project) => (
            <li key={project.slug}>
              <p className="project-list-title">
                {project.href
                  ? <a href={project.href} target="_blank" rel="noopener noreferrer">{project.title}</a>
                  : <strong>{project.title}</strong>}
                <span className="project-kicker"> · {project.kicker}</span>
              </p>
              <p className="project-list-description">{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
