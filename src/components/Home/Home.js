import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import Type from "./Type";
import profilePic from "../../Assets/profile.png";
import profilePic2 from "../../Assets/profile2.jpg";
import { SiLeetcode, SiLinkedin } from "react-icons/si";

function Home() {
  const [hovered, setHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* Animated background elements */}
        <div className="home-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={7} md={12} className={`home-header ${isLoaded ? 'slide-in-left' : ''}`}>
              <div className="greeting-wrapper">
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

              <div className="hero-description">
                <Type />
              </div>

              <div className="social-section">
                <p className="social-text">
                  Let's <span className="gradient-text">connect</span> and build something amazing
                </p>
                <ul className="social-links">
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
                  <li className="social-item" style={{ animationDelay: '0.4s' }}>
                    <a href="https://www.instagram.com/_.sanathh._/" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                      <AiFillInstagram />
                      <span className="social-tooltip">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={5} md={12} className={`home-avatar ${isLoaded ? 'slide-in-right' : ''}`}>
              <div
                className="avatar-container"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className={`avatar-glow ${hovered ? 'active' : ''}`}></div>
                <div className="avatar-ring"></div>
                <div className={`avatar-wrapper ${hovered ? 'flipped' : ''}`}>
                  <img
                    src={profilePic}
                    alt="Sanath Kavatooru"
                    className="avatar-front"
                  />
                  <img
                    src={profilePic2}
                    alt="Sanath Kavatooru"
                    className="avatar-back"
                  />
                </div>
                <div className="avatar-particles">
                  {[...Array(6)].map((_, i) => (
                    <span key={i} className="particle" style={{ '--i': i }}></span>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
