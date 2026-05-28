import { useState } from 'react'
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './components/pages/Home';
import Projects from './components/pages/projects';
import Socials from './components/pages/socials';
import Contacts from './components/pages/contacts';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
