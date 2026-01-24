import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineCalendar } from "react-icons/ai";
import airasiaLogo from "../../Assets/Company/airasia.jpeg";
import rule4Logo from "../../Assets/Company/rule4.jpeg";

const experiences = [
  {
    company: "Rule4",
    role: "Software Engineer Intern",
    location: "Boulder, CO",
    timeline: "Oct 2025 – Jan 2026",
    stack: ["Next.js", "Flask", "PostgreSQL", "AWS", "GCP"],
    highlights: [
      "Led the greenfield build of a full-stack resource scheduling platform with preference scoring, waitlists, and auto reallocations for 50+ premium assets.",
      "Integrated Google Calendar two-way sync that keeps availability current and reduced scheduling conflicts by 40%.",
      "Designed OWASP-aligned FastAPI services backed by PostgreSQL with RBAC, audit logging, and secure multi-tenant controls.",
      "Shipped a production-ready deployment spanning AWS RDS/S3 and GCP infra adopted company-wide."
    ],
    icon: rule4Logo
  },
  {
    company: "AirAsia MOVE",
    role: "Software Engineer",
    location: "Bangalore, Karnataka",
    timeline: "Feb 2022 – Jul 2024",
    stack: ["Swift", "UIKit", "MVVM", "Combine"],
    highlights: [
      "Shipped the social profile screen and refreshed chat theming adopted by 60% of MAUs.",
      "Refactored 15 UIKit modules into MVVM components, cutting new feature development time by 35%.",
      "Migrated chat from a third-party provider to an in-house platform, saving $12K/month and regaining feature control.",
      "Replaced Promise pipelines with Combine flows to improve cancellation, retries, and UI/network state accuracy.",
      "Authored 50+ XCUITest suites and automated CI dashboards that surfaced pass/fail status every build.",
      "Extended a Ruby CI pipeline to publish artifacts and reduce regression triage by 50%.",
      "Engineered a streaming GIF renderer to replace SDWebImage, reducing per-thread memory by 65%."
    ],
    icon: airasiaLogo
  }
];

function Experience() {
  return (
    <section className="section-shell experience-section" id="experience">
      <div className="home-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <Container>
        <div className="experience-heading">
          <span className="experience-eyebrow">Career Journey</span>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div className="experience-entry" key={`${exp.company}-${idx}`}>
              <div className="experience-marker" aria-hidden="true">
                <span className="experience-dot" />
              </div>
              <article className="experience-card">
                <header className="experience-card-header">
                  <div className="experience-card-title">
                    <div className="experience-logo">
                      <img src={exp.icon} alt={`${exp.company} logo`} loading="lazy" />
                    </div>
                    <div className="experience-card-meta">
                      <div className="experience-meta-text">
                        <span className="experience-company">{exp.company}</span>
                        <span className="experience-location">{exp.location}</span>
                      </div>
                      <h3>{exp.role}</h3>
                      <span className="experience-tools">{exp.tools}</span>
                    </div>
                  </div>
                  <div className="experience-duration">
                    <AiOutlineCalendar aria-hidden="true" />
                    <span>
                      {exp.timeline}
                    </span>
                  </div>
                </header>
                <ul className="experience-highlights">
                  {exp.highlights.map((item, pointIdx) => (
                    <li key={pointIdx}>{item}</li>
                  ))}
                </ul>
                <div className="experience-tags">
                  {exp.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
