import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <section className="skills-calendar">
      <h2 className="skills-heading">Days I code</h2>
      <div className="calendar-shell">
        <GitHubCalendar
          username="sanath265"
          blockSize={15}
          blockMargin={5}
          color="#E84855"
          fontSize={16}
        />
      </div>
    </section>
  );
}

export default Github;
