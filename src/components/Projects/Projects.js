import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="GetMyURI"
              description="Built a website to allow users to shorten their URLs, with the ability to set manual aliases, passwords, and location-based blocking on links."
              demoLink="https://app.getmyuri.com/"
              ghLink="https://github.com/sanath265/getmyuri"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Business Management Data Platform (PeakView)"
              description="Developed a full-stack web application for small-scale business vendors to manage inventory, track sales, and visualize financial data. Containerized backend services were deployed using Kubernetes on Google Cloud."
              ghLink="https://github.com/sanath265/PeakView-Frontend"
              // demoLink="https://github.com/sanath265/PeakView-Frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Face Filter Application"
              description="Built an iOS app using ARKit to detect facial features and apply customizable moustache filters in real time. The app delivers an engaging live video and audio recording experience."
              ghLink="https://github.com/sanath265/voiceraFace"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="HomeDepot – E-commerce Website"
              description="Developed a static e-commerce platform that empowers local vendors by showcasing their products with a clean, responsive design aimed at enhancing community commerce."
              ghLink="https://github.com/sanath265/TheHomeDepot"
              demoLink="https://sanath265.github.io/TheHomeDepot/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
