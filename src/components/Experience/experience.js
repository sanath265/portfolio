import React, { useState } from "react";
import { Container } from "react-bootstrap";
import airasiaLogo from "../../Assets/Company/airasia.jpeg";
import ucbLogo from "../../Assets/Company/cub.jpeg";
import rule4Logo from "../../Assets/Company/rule4.jpeg";

const experiences = [
  {
    company: "Rule4",
    role: "Software Engineer Intern – Capstone",
    location: "Boulder, CO",
    startDate: "Oct 2025",
    endDate: "Present",
    description: [
      "Spearheaded development of a full-stack resource scheduling platform from scratch, enabling preference-based allocation with points system, waitlisting, and auto-reallocation for 50+ premium resources.",
      "Integrated Google Calendar API for two-way sync, enabling real-time availability updates and reducing scheduling conflicts by 40%.",
      "Architected RESTful APIs with FastAPI and PostgreSQL, implementing role-based access control (RBAC), audit logging, and OWASP security best practices.",
      "Deployed production-ready application on AWS RDS and S3 with GCP infrastructure, delivering a scalable enterprise solution adopted by the company."
    ],
    icon: rule4Logo,
    type: "Internship"
  },
  {
    company: "University of Colorado Boulder",
    role: "Web Developer",
    location: "Boulder, CO",
    startDate: "Jan 2025",
    endDate: "Present",
    description: [
      "Converted Wolfram Mathematica models into install-free simulations using Vanilla JavaScript, enabling standard-browser access for 1,200 LearnChemE users and cutting load time by 40%.",
      "Scaled learning tools by building interactive chemical engineering simulations with SVG.js that let users vary inputs and visualize system behavior in real time.",
      "Maintained and extended 290+ simulations by standardizing UI patterns and adding realistic lab-style animations, improving usability, consistency, and performance."
    ],
    icon: ucbLogo,
    type: "Part-time"
  },
  {
    company: "AirAsia MOVE",
    role: "Software Engineer",
    location: "Bangalore, Karnataka",
    startDate: "Feb 2022",
    endDate: "Jul 2024",
    description: [
      "Developed a social profile screen in UIKit and refactored chat theming (fonts, wallpapers, colors), adopted by 60% of monthly active users.",
      "Migrated chat UI to MVVM and consolidated 15 legacy screens into reusable components, reducing new UI development time by 35%.",
      "Partnered with backend to migrate chat from a third-party provider to an in-house stack, saving $12K/year and improving product control.",
      "Replaced Promise-based async flows with Combine pipelines to improve cancellation/retry handling and make networking/UI state updates more resilient.",
      "Added 50+ XCUITest UI tests running on every build and nightly with CI reports, catching regressions earlier and speeding TestFlight releases.",
      "Extended a Ruby CI pipeline integrated with Git to publish real-time pass/fail dashboards and artifacts, cutting regression triage time by 50%.",
      "Engineered a streaming GIF renderer (replacing SDWebImage GIF handling), reducing peak memory per chat thread by 65% via Xcode Instruments."
    ],
    icon: airasiaLogo,
    type: "Full-time"
  }
];

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeExperience =
    typeof activeIndex === "number" ? experiences[activeIndex] : null;

  return (
    <section className="experience-section">
      <div className="experience-sparks" aria-hidden="true">
        {[...Array(12)].map((_, idx) => (
          <span key={idx} style={{ "--i": idx }} />
        ))}
      </div>
      <Container>
        <div className="experience-layout">
          <div className="experience-list-panel">
            {experiences.map((exp, idx) => (
              <button
                type="button"
                key={`${exp.company}-${idx}`}
                className={`experience-tab ${activeIndex === idx ? "active" : ""}`}
                onClick={() => setActiveIndex(idx)}
                aria-pressed={activeIndex === idx}
                aria-label={`View ${exp.company} experience`}
              >
                <span className="tab-marker" aria-hidden="true" />
                <div className="tab-logo" data-company={exp.company}>
                  <img src={exp.icon} alt={`${exp.company} logo`} loading="lazy" />
                </div>
              </button>
            ))}
          </div>

          <div
            className={`experience-detail ${
              activeExperience ? "detail-active" : "detail-empty"
            }`}
          >
            {activeExperience ? (
              <>
                <div className="detail-meta">
                  <p className="detail-duration">
                    {activeExperience.startDate} — {activeExperience.endDate}
                  </p>
                  <h3>{activeExperience.role}</h3>
                  <p className="detail-location">
                    {activeExperience.company} · {activeExperience.location}
                  </p>
                  <div className="detail-chips">
                    <span className="detail-chip">{activeExperience.type}</span>
                  </div>
                </div>
                <ul className="experience-list">
                  {activeExperience.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="experience-placeholder">
                <p className="placeholder-label">Select an experience</p>
                <h3>Pick a role to see what I delivered</h3>
                <p>
                  Tap any of the logos on the left to reveal metrics, outcomes,
                  and stories from that chapter of my journey.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
