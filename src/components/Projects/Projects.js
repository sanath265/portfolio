import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

const featuredProjects = [
  {
    title: "URL Shortener",
    type: "Product Launch",
    timeline: "2024 · React · FastAPI · GKE",
    summary:
      "Full-stack branded URL shortener with geo-targeting, expiring links, and RBAC controls powering marketing teams.",
    metrics: [
      "Serves 10K+ redirects/day at 99.9% uptime with multi-region workers and Redis caching.",
      "Workflow handles vanity URLs, password protection, and approvals from a React control room."
    ],
    stack: ["React", "FastAPI", "PostgreSQL", "Redis", "GKE", "Docker"],
    ghLink: "https://github.com/sanath265/getmyuri",
    demoLink: "https://app.getmyuri.com/"
  },
  {
    title: "AI Learning Assistant",
    type: "AI · RAG",
    timeline: "2024 · Python · Streamlit",
    summary:
      "Multimodal assistant for quizzes, document-based study, and mock interviews with natural voice UX.",
    metrics: [
      "RAG pipeline ingests 50+ PDFs into ChromaDB embeddings delivering 85% accurate answers.",
      "Bidirectional STT/TTS loop keeps latency under 500ms for conversational tutoring."
    ],
    stack: ["Python", "LangChain", "ChromaDB", "OpenAI", "Streamlit"],
    ghLink: "https://github.com/sanath265"
  },
  {
    title: "AudioTranscriptor",
    type: "iOS",
    timeline: "2023 · Swift · GCP",
    summary:
      "Offline-first iOS recorder that chunks long-form sessions and syncs transcripts in the cloud.",
    metrics: [
      "Streams 2+ hour sessions via AVAudioEngine, chunking into 30s uploads with 99% success.",
      "Transcript playback UX keeps speech/text synced under 100ms for rapid review."
    ],
    stack: ["Swift", "AVFoundation", "Combine", "Cloud Storage"],
    ghLink: "https://github.com/sanath265"
  },
  {
    title: "PeakView Data Platform",
    type: "Full-stack",
    timeline: "2022 · React · Node · GCP",
    summary:
      "Inventory + revenue cockpit helping local vendors visualize cash flow, SKUs, and low-stock alerts.",
    metrics: [
      "Containerized services on Kubernetes process 250K+ order rows with realtime dashboards.",
      "Role-based workspace unlocks purchase orders, vendor CRM, and ledger exports."
    ],
    stack: ["React", "Node.js", "MongoDB", "Kubernetes", "Tailwind"],
    ghLink: "https://github.com/sanath265/PeakView-Frontend"
  }
];

function Projects() {
  return (
    <section className="project-section">
      <div className="project-sparks" aria-hidden="true">
        {[...Array(18)].map((_, idx) => (
          <span key={idx} style={{ "--i": idx }} />
        ))}
      </div>
      <Container>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
