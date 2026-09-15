import type { Project } from '../data/projects';
import { ArrowUpRight } from './Icons';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="project-card" href={project.href} target="_blank" rel="noreferrer">
      <div className={`project-visual ${project.accent}`} aria-hidden="true">
        <div className="visual-orbit" />
        <span>{project.title.slice(0, 2).toUpperCase()}</span>
      </div>
      <div className="project-copy">
        <p className="project-kicker">{project.kicker}</p>
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <ArrowUpRight />
        </div>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Topics">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </a>
  );
}
