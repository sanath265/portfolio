import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import airasiaLogo from "../../Assets/Company/iit.jpeg";
import  ucbLogo from "../../Assets/Company/cub.jpeg";

const experiences = [
  {
    company: "University of Colorado Boulder",
    role: "Master of Science in Computer Science",
    location: "Boulder, Colorado",
    startDate: "August 2024",
    endDate: "Present",
    description: [
    ],
    icon: ucbLogo,
    grade: "4.0"
  },
  {
    company: "Indian Institute of Technology Dharwad",
    role: "Bachelor of Technology in Mechanical Engineering",
    location: "Dharwad, Karnataka",
    startDate: "August 2018",
    endDate: "June 2022",
    description: [
      
    ],
    icon: airasiaLogo,
    grade: "8.7"
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
