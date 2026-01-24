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
    <section className="section-shell education-section" id="education">
      <div className="home-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <Container>
        <div className="experience-heading" style={{ textAlign: "center", paddingLeft: "0", marginBottom: "50px" }}>
          <span className="experience-eyebrow">My Education</span>
        </div>

        <div className="education-grid">
          {educationTimeline.map((entry, index) => (
            <div className="education-card" key={index}>
              <div className="edu-icon-wrapper">
                <img src={entry.icon} alt={entry.company} className="edu-icon" />
              </div>
              <div className="edu-content">
                <h3 className="edu-school">{entry.company}</h3>
                <h4 className="edu-degree">{entry.role}</h4>
                <p className="edu-date">{entry.startDate} - {entry.endDate}</p>
                <p className="edu-grade">{entry.grade}</p>
                <p className="edu-location">{entry.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Education;
