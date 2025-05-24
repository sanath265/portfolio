import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Type from "./Type";
import profilePic from "../../Assets/profile.png";
import { SiLeetcode, SiLinkedin } from "react-icons/si";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SANATH KAVATOORU</strong>
              </h1>

              <div style={{ padding: 20, textAlign: "left" }}>
                <Type />
              </div>

              <Row>
                <Col md={12} className="home-about-social">
                  <h1>FIND ME ON</h1>
                  <p>
                    Feel free to <span className="purple">connect </span>with me
                  </p>
                  <ul className="home-about-social-links">
                    <li className="social-icons">
                      <a href="https://github.com/sanath265" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a href="https://leetcode.com/u/sanathkavatooru/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                        <SiLeetcode />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a href="https://www.linkedin.com/in/sanathkavatooru/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                        <SiLinkedin />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a href="https://www.instagram.com/_.sanathh._/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                        <AiFillInstagram />
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>

            <Col md={5} className="home-avatar" style={{ paddingBottom: 20, textAlign: "center" }}>
              <img
                src={profilePic}
                alt="My Profile"
                className="img-fluid"
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "5px solid var(--accent-color)"
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
