import { useState } from 'react'
import NavBar from '../NavBar';

function Projects() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Skills</p>
      <br/>
      <p className="darkgreen">Software Engineering</p>
      <ul className="skills">
        <li>C#</li>
        <li>Java</li>
        <li>Python</li>
      </ul>
      <ul className="skills">
        <li>.NET</li>
        <li>XNA</li>
        <li>MonoGame</li>
      </ul>
      <p className="darkgreen">Web Development</p>
      <ul className="skills">
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
        <li>PHP</li>
      </ul>
      <ul className="skills">
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Apache</li>
      </ul>
      <p className="darkgreen">Databases</p>
      <ul className="skills">
        <li>SQL Server</li>
        <li>PostgreSQL</li>
      </ul>
      <ul className="skills">
        <li>pgAdmin</li>
        <li>WinSCP</li>
      </ul>
      <p className="darkgreen">Mainframe</p>
      <ul className="skills">
        <li>COBOL</li>
        <li>JCL</li>
      </ul>
      <ul className="skills">
        <li>IBM 3270</li>
        <li>Zowe Explorer</li>
      </ul>
      <p className="separator"/>
      <p>Projects</p>
      <p className="separator"/>
    </div>
  )
}

export default Projects
