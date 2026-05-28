import { useEffect } from 'react'
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './components/pages/Home';
import Projects from './components/pages/projects';
import Socials from './components/pages/socials';
import Contacts from './components/pages/contacts';

function App() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      
      /* Go to Home */
      if (event.key === 'F3') {
        event.preventDefault();
        
        window.location.href = "./";
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Router>
      <div>
        <NavBar/>
        <p className="separator"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <ul className="optionsList">
          <li className="optionsList">F3=Exit</li>
        </ul>
        <br/>
        <p>&copy; 2026 Chris Ryczke</p>
      </div>
    </Router>
  )
}

export default App
