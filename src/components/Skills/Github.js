import React, { useState, useEffect, useRef } from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-calendar" style={{ paddingBottom: "50px" }} ref={sectionRef}>
      <div className="experience-heading" style={{ textAlign: "center", paddingLeft: "0", marginBottom: "40px" }}>
        <span className="experience-eyebrow">Days I Code</span>
      </div>
      <div className="github-glass-card" style={{ minHeight: "150px" }}>
        {isVisible ? (
          <GitHubCalendar
            username="sanath265"
            blockSize={15}
            blockMargin={5}
            color="#2563eb"
            fontSize={16}
          />
        ) : (
          <div style={{ color: "var(--text-secondary)", padding: "40px" }}>Loading...</div>
        )}
      </div>
    </section>
  );
}

export default Github;
