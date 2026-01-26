import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import Type from "./Type";
import { SiLeetcode, SiLinkedin } from "react-icons/si";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home">
      <Container fluid className="section-shell home-section">
        {/* Animated background elements */}


        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={12} className={`home-header ${isLoaded ? 'slide-in-left' : ''}`} style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              <div className="greeting-wrapper" style={{ justifyContent: "center", display: "flex" }}>
                <span className="greeting-badge">Welcome to my portfolio</span>
              </div>

              <h1 className="hero-title">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="hero-name">
                I'm <span className="gradient-text">Sanath Kavatooru</span>
              </h1>

              <div className="hero-description" style={{ margin: "32px auto" }}>
                <Type />
              </div>

              <div className="social-section">
                <ul className="social-links" style={{ justifyContent: "center" }}>
                  <li className="social-item" style={{ animationDelay: '0.1s' }}>
                    <a href="https://github.com/sanath265" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                      <AiFillGithub />
                      <span className="social-tooltip">GitHub</span>
                    </a>
                  </li>
                  <li className="social-item" style={{ animationDelay: '0.2s' }}>
                    <a href="https://leetcode.com/u/sanathkavatooru/" target="_blank" rel="noreferrer" className="social-link" aria-label="LeetCode">
                      <SiLeetcode />
                      <span className="social-tooltip">LeetCode</span>
                    </a>
                  </li>
                  <li className="social-item" style={{ animationDelay: '0.3s' }}>
                    <a href="https://www.linkedin.com/in/sanathkavatooru/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                      <SiLinkedin />
                      <span className="social-tooltip">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
