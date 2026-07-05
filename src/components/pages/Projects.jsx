import { useState } from 'react'
import NavBar from '../NavBar';

function Projects() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Projects</p>
      <br/>
      <a href="/projects/old">View Old Projects</a>
      <p className="separator"/>
    </div>
  )
}

export default Projects
