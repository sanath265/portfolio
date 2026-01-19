import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import iitLogo from "../../Assets/Company/iit.jpeg";
import ucbLogo from "../../Assets/Company/cub.jpeg";

const educationTimeline = [
  {
    company: "University of Colorado Boulder",
    role: "Master of Science · Computer Science",
    location: "Boulder, CO",
    startDate: "Aug 2024",
    endDate: "May 2026",
    icon: ucbLogo,
    grade: "3.84 GPA"
  },
  {
    company: "IIT Dharwad",
    role: "Bachelor of Technology · Mechanical Engineering",
    location: "Dharwad, India",
    startDate: "Aug 2018",
    endDate: "Jun 2022",
    icon: iitLogo,
    grade: "8.7 CGPA"
  }
];

function Education() {
  return (
    <section className="education-section">
      <div className="education-sparks" aria-hidden="true">
        {[...Array(14)].map((_, idx) => (
          <span key={idx} style={{ "--i": idx }} />
        ))}
      </div>
      <Container>
        <div className="education-timeline">
          {educationTimeline.map((entry) => (
            <ProjectCard key={entry.company} data={entry} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Education;
