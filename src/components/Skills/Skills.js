import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";

// Import Icons
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiSwift,
  DiDocker,
  DiMongodb,
  DiGit
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiFastapi,
  SiDjango,
  SiKubernetes,
  SiAmazonaws,
  SiGooglecloud,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiNestjs,
  SiOpenai,
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiXcode,
  SiSwift,
  SiGnubash,
  SiStreamlit
} from "react-icons/si";
import { FaApple, FaSearch } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <DiPython color="#3776AB" /> },
        { name: "Swift", icon: <DiSwift color="#F05138" /> },
        { name: "JavaScript", icon: <DiJavascript1 color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "C++", icon: <CgCPlusPlus color="#00599C" /> },
        { name: "SQL", icon: <img src="https://img.icons8.com/color/48/sql.png" alt="SQL" /> },
        { name: "Bash", icon: <SiGnubash color="#4EAA25" /> }
      ]
    },
    {
      title: "Mobile",
      skills: [
        { name: "Swift", icon: <DiSwift color="#F05138" /> },
        { name: "SwiftUI", icon: <SiSwift color="#F05138" /> },
        { name: "UIKit", icon: <FaApple color="#A2AAAD" /> },
        { name: "Combine", icon: <SiSwift color="#F05138" /> },
        { name: "XCUITest", icon: <SiXcode color="#147EFB" /> },
        { name: "iOS", icon: <img src="https://img.icons8.com/color/48/ios-logo.png" alt="iOS" /> }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <DiReact color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
        { name: "Streamlit", icon: <SiStreamlit color="#FF4B4B" /> }
      ]
    },
    {
      title: "Backend & Fullstack",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
        { name: "Node.js", icon: <DiNodejs color="#339933" /> },
        { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
        { name: "Django", icon: <SiDjango color="#092E20" /> },
        { name: "NestJS", icon: <SiNestjs color="#E0234E" /> },
        { name: "REST APIs", icon: <SiPostman color="#FF6C37" /> }
      ]
    },
    {
      title: "Cloud",
      skills: [
        { name: "AWS", icon: <SiAmazonaws color="#232F3E" /> },
        { name: "Google Cloud", icon: <SiGooglecloud color="#4285F4" /> },
        { name: "Docker", icon: <DiDocker color="#2496ED" /> },
        { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" /> },
        { name: "AWS Bedrock", icon: <SiAmazonaws color="#232F3E" /> }
      ]
    },
    {
      title: "AI / ML",
      skills: [
        { name: "LangChain", icon: <img src="https://avatars.githubusercontent.com/u/126733545?v=4" alt="LangChain" /> },
        { name: "LangGraph", icon: <img src="https://avatars.githubusercontent.com/u/126733545?v=4" alt="LangGraph" /> },
        { name: "OpenAI API", icon: <SiOpenai color="#412991" /> },
        { name: "RAG", icon: <FaSearch color="#2563eb" /> },
        { name: "Prompt Eng", icon: <GiArtificialIntelligence color="#10a37f" /> },
        { name: "ChromaDB", icon: <img src="https://docs.trychroma.com/img/chroma.svg" alt="ChromaDB" /> }
      ]
    },
    {
      title: "Data",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
        { name: "MongoDB", icon: <DiMongodb color="#47A248" /> },
        { name: "Redis", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg" alt="Redis" /> }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "VS Code", icon: <SiVisualstudiocode color="#007ACC" /> },
        { name: "Xcode", icon: <SiXcode color="#147EFB" /> },
        { name: "Git", icon: <DiGit color="#F05032" /> },
        { name: "Slack", icon: <SiSlack color="#4A154B" /> }
      ]
    }
  ];

  return (
    <section className="section-shell skills-section" id="skills">
      <div className="home-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <Container>
        <div className="experience-heading" style={{ textAlign: "center", paddingLeft: "0", marginBottom: "50px" }}>
          <span className="experience-eyebrow">Technical Skills</span>
        </div>

        <Row style={{ paddingBottom: "50px" }}>
          {skillCategories.map((category, idx) => (
            <Col md={6} lg={4} className="mb-5" key={idx}>
              <div className="skill-category-card">
                <div className="skill-cat-header">
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-pill-grid">
                  {category.skills.map((skill, sIdx) => (
                    <div className="skill-pill" key={sIdx}>
                      <span className="skill-pill-icon">{skill.icon}</span>
                      <span className="skill-pill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Github />
      </Container>
    </section>
  );
}

export default Skills;
