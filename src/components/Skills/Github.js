import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <section className="skills-calendar" style={{ paddingBottom: "50px" }}>
      <div className="experience-heading" style={{ textAlign: "center", paddingLeft: "0", marginBottom: "40px" }}>
        <span className="experience-eyebrow">Days I Code</span>
      </div>
      <div className="github-glass-card">
        <GitHubCalendar
          username="sanath265"
          blockSize={15}
          blockMargin={5}
          color="#2563eb"
          fontSize={16}
        />
      </div>
    </section>
  );
}

export default Github;
