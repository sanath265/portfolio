import React from "react";

function ProjectCards({ data }) {
  const { company, role, location, startDate, endDate, icon, grade, highlights = [] } = data;
  const [degreeLabel, specialization] = role.split("·").map((part) => part.trim());

  return (
    <article className="education-card">
      <div className="education-card-header">
        <div className="education-logo" aria-hidden="true">
          <img src={icon} alt={`${company} logo`} loading="lazy" />
        </div>
        <div className="education-meta">
          <p className="education-duration">
            {startDate} — {endDate}
          </p>
          <h3>
            {degreeLabel}
            {specialization && (
              <span className="education-field">{specialization}</span>
            )}
          </h3>
          <p className="education-school">
            {company} · {location}
          </p>
        </div>
        <span className="education-grade">{grade}</span>
      </div>

      {highlights.length > 0 && (
        <ul className="education-highlights">
          {highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default ProjectCards;
