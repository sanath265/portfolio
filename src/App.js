import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Experience from "./components/Experience/experience"
import Education from "./components/Education/education"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Derive router basename from PUBLIC_URL so local dev and GitHub Pages both work.
const getBasename = () => {
  const publicUrl = process.env.PUBLIC_URL || "";
  if (!publicUrl) {
    return "/";
  }

  try {
    const url = new URL(publicUrl);
    if (url.pathname === "/" || !url.pathname) {
      return "/";
    }
    return url.pathname.replace(/\/$/, "");
  } catch {
    const normalized = publicUrl.replace(/\/$/, "");
    if (!normalized) {
      return "/";
    }
    return normalized.startsWith("/") ? normalized : `/${normalized}`;
  }
};

function App() {
  const basename = getBasename();

  return (
    <Router basename={basename}>
      {/* <Preloader load={load} /> */}
      <div className="App" id={"scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
