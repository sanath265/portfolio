import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import airasiaLogo from "../../Assets/Company/airasia.jpeg";
import  ucbLogo from "../../Assets/Company/cub.jpeg";

const experiences = [
  {
    company: "University of Colorado Boulder",
    role: "Web Developer",
    location: "Boulder, Colorado",
    startDate: "Jan 2025",
    endDate: "Present",
    description: [
      "Converted 4 Wolfram Mathematica models into browser-ready simulations with SVG.js, HTML5, and CSS, giving 1,200 LearnChemE users hands-on access and cutting load time 40%.",
      "Designed 6 high-impact lab experiments as interactive demos after video and experimental result analysis, cutting support requests by 30%."
    ],
    icon: ucbLogo
  },
  {
    company: "AirAsia MOVE",
    role: "Software Engineer",
    location: "Bangalore, Karnataka",
    startDate: "Feb 2022",
    endDate: "Jul 2024",
    description: [
      "Refactored 15 legacy screens into 32 reusable Phoenix views (internal AirAsia UI framework), deleting 2.6K lines of duplicate code and cutting future UI build time 35%.",
      "Migrated chat services from Sendbird to in-house backend services leveraging Combine and UIKit saving $12k/yr in licensing.",
      "Authored a streaming GIF module with CGImageSource/CGImageDestination, dropping peak memory per chat thread 65% and keeping animations smooth.",
      "Integrated SBTUITestTunnel to run automated 50+ UI tests on every build and speed up releases.",
      "Extended the Ruby test pipeline to post real-time pass/fail reports, helping the team spot issues and reduce bugs finding time by 50%.",
      "Built a social-profile screen and refactored chat to support themes, fonts, and wallpapers adopted by 60% of monthly active users within 30 days."
    ],
    icon: airasiaLogo
  }
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        {experiences.map((data, idx) => (
          <Row key={idx} style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <ProjectCard data={data} />
          </Row>
        ))}
      </Container>
    </Container>
  );
}

export default Projects;
