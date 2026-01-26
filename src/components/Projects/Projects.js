import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// Import consolidated project images
import medicalChatbot from "../../Assets/Projects/a_medical_chatbot.webp";
import aiAssistant from "../../Assets/Projects/a_AIAssistant.webp";
import docSageApp from "../../Assets/Projects/a_docsage_app.webp";
import aiAssistantApp from "../../Assets/Projects/a_AIAssiatant_app.webp";
import audioTranscriptor from "../../Assets/Projects/audio_transcriptor_app.webp";
import faceFilter from "../../Assets/Projects/face_filter_app.webp";
import urlShortener from "../../Assets/Projects/a_url_shortner.webp";
import chemicalSims from "../../Assets/Projects/a_nsf_chemical.webp";

function Projects() {
  const projects = [
    {
      category: "GenAI",
      imgPath: medicalChatbot,
      title: "DocSage AI ChatBot",
      description: [
        "Created a full-stack RAG assistant (Next.js, FastAPI) enabling grounded Q&A over PDFs using LangChain, OpenAI, and vector search.",
        "Established REST APIs integrated with AWS S3 to persist vector stores, enabling seamless pulling and pushing of embedding updates."
      ],
      ghLink: "https://github.com/sanath265/docHelpChatBot",
      demoLink: "https://doc-help-chat-bot.vercel.app",
      tags: ["Python", "FastAPI", "Next.js", "LangChain", "OpenAI", "AWS"]
    },
    {
      category: "GenAI",
      imgPath: aiAssistant,
      title: "AI Learning Assistant",
      description: [
        "Orchestrated an adaptive learning platform using Streamlit and LangGraph, coordinating a finetuned LLM and multi-modal RAG pipeline.",
        "Served voice-first quizzes and mock interviews by integrating STT/TTS and hosting inference on GPU infrastructure."
      ],
      ghLink: "https://github.com/sanath265/AILearningAssistant",
      demoLink: "https://ai-learning-assistant-nine.vercel.app",
      tags: ["Python", "LangGraph", "LangChain", "Streamlit", "ChromaDB"]
    },
    {
      category: "Mobile",
      imgPath: docSageApp,
      title: "DocSage AI App",
      description: [
        "Built a native iOS client featuring a modern SwiftUI chat interface with document-gated sessions.",
        "Implemented a unified design system and MVVM architecture matching the web platform."
      ],
      ghLink: "https://github.com/sanath265/DocSageAIApp",
      demoLink: "",
      tags: ["SwiftUI", "Combine", "MVVM", "iOS"]
    },
    {
      category: "Mobile",
      imgPath: aiAssistantApp,
      title: "AI Learning Assistant App",
      description: [
        "Developed a mobile companion app for managing uploads and accessing intelligent flashcards offline.",
        "Designed seamless offline synchronization for study materials and mock interviews."
      ],
      ghLink: "https://github.com/sanath265/AILearningAssistantApp",
      demoLink: "",
      tags: ["Swift", "CoreData", "iOS"]
    },
    {
      category: "Mobile",
      imgPath: audioTranscriptor,
      title: "Audio Transcriptor",
      description: [
        "Crafted a native iOS app in Swift handling lengthy recordings (2+ hours) by chunking audio and implementing a resumable upload pipeline.",
        "Achieved a seamless transcript playback experience with <100ms sync latency, optimizing navigation for long audio files."
      ],
      ghLink: "https://github.com/sanath265/AudioTranscriptor",
      demoLink: "",
      tags: ["Swift", "AVAudioEngine", "AWS", "OpenAPI"]
    },
    {
      category: "Mobile",
      imgPath: faceFilter,
      title: "Face Filter Application",
      description: [
        "Engineered a real-time augmented reality moustache overlay using ARKit and SceneKit.",
        "Implemented high-performance video recording capabilities and precise 3D face tracking."
      ],
      ghLink: "https://github.com/sanath265/voiceraFace",
      demoLink: "",
      tags: ["ARKit", "SceneKit", "iOS"]
    },
    {
      category: "Fullstack",
      imgPath: urlShortener,
      title: "URL Shortener",
      description: [
        "Engineered a high-performance URL shortener with Spring Boot and PostgreSQL on Google Cloud, implementing Redis caching.",
        "Developed a ReactJS dashboard for analytics and link management, and provisioned containerized microservices using Docker and Kubernetes."
      ],
      ghLink: "https://github.com/sanath265/getmyuri",
      demoLink: "https://app.getmyuri.com",
      tags: ["Spring Boot", "React", "PostgreSQL", "Redis", "Docker", "Kubernetes", "GCP"]
    },
    {
      category: "Frontend",
      imgPath: chemicalSims,
      title: "NSF Engineering",
      description: [
        "Developed interactive simulations visualizing complex engineering concepts using HTML5 Canvas and JavaScript.",
        "Deployed educational tools used by NSF LearnChemE to demonstrate biological engineering principles."
      ],
      ghLink: "https://github.com/LearnChemE/LearnChemE.github.io",
      demoLink: "https://learncheme.github.io",
      tags: ["JavaScript", "HTML5 Canvas"]
    }
  ];

  return (
    <Container fluid className="project-section" id="projects">

      <Container>
        <div className="experience-heading" style={{ textAlign: "center", paddingLeft: "0", marginBottom: "40px" }}>
          <span className="experience-eyebrow">My Recent Works</span>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                category={project.category}
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                tags={project.tags}
              />
            </Col>
          ))}
        </Row>

      </Container>
    </Container >
  );
}

export default Projects;
