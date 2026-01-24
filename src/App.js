import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Experience from "./components/Experience/experience";
import Education from "./components/Education/education";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App" id="scroll">
      <Navbar />
      <main>
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Resume />
      </main>
    </div>
  );
}

export default App;
