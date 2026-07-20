import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar";

// Pages
import Home from "./components/Pages/home";
import Projects from "./components/pages/projects";
import OlderProjects from "./components/pages/OlderProjects";
import Socials from "./components/pages/socials";
import Contacts from "./components/pages/contacts";

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "F3") {
        event.preventDefault();
        navigate("/");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <div>
      <NavBar />
      <p className="separator" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/old" element={<OlderProjects />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <ul className="optionsList">
        <li className="optionsList">F3=Exit</li>
      </ul>

      <br />

      <p>&copy; 2026 Chris Ryczke</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;