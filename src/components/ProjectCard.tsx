import { useId } from 'react';
import type { Project } from '../content/types';

export default function ProjectCard({ project }: { project: Project }) {
  const id = useId();
  const body = (
    <>
      {project.image && (
        <div className="project-media">
          <img src={project.image} alt="" loading="lazy" decoding="async" />
        </div>
      )}
      <div className="project-body">
        <p className="project-kicker">{project.kicker}</p>
        <h3 id={`${id}-title`}>{project.title}</h3>
        <p id={`${id}-description`}>{project.description}</p>
      </div>
    </>
  );

  return project.href ? (
    <a
      className="project-card"
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-description`}
    >
      {body}
    </a>
  ) : (
    <div className="project-card">{body}</div>
  );
}
