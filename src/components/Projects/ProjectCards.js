import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCard({
  title,
  summary,
  metrics = [],
  stack = [],
  ghLink,
  demoLink
}) {
  return (
    <article className="project-card-modern">
      <div className="project-card-header">
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>

      {metrics.length > 0 && (
        <ul className="project-metrics">
          {metrics.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}

      <div className="project-card-footer">
        <div className="project-tags">
          {stack.map((tag) => (
            <span key={`${title}-${tag}`}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {ghLink && (
            <a
              href={ghLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} GitHub`}
            >
              <BsGithub />
              <span>Code</span>
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} Live Demo`}
            >
              <CgWebsite />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
