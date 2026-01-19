import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-sparks" aria-hidden="true">
        {[...Array(16)].map((_, idx) => (
          <span key={idx} style={{ "--i": idx }} />
        ))}
      </div>
      <Container>
        <section className="skills-panel">
          <h2 className="skills-heading">Technical skills I know</h2>
          <Techstack />
        </section>

        <section className="skills-panel">
          <h2 className="skills-heading">Tools I use</h2>
          <Toolstack />
        </section>

        <Github />
      </Container>
    </section>
  );
}

export default Skills;
