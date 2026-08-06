import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

// Images
import GitHub from "../../../src/assets/img/github_button.webp";
import ItchIo from "../../../src/assets/img/itchio_button.webp";
import GameJolt from "../../../src/assets/img/gamejolt_button.webp";
import Newgrounds from "../../../src/assets/img/newgrounds_button.webp";
import Steam from "../../../src/assets/img/steam_button.webp";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/data/projects.json');
        if (!res.ok) throw new Error('Failed to load projects!');

        const projectData = await res.json();
        setProjects(projectData.project);

      } catch (error) {
      }
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <p>Projects</p>
      <br/>
      <div className="projects">
      {
        projects.map((project) => (
          <div key={project.id}>
              <h2>{project.name}</h2>
              <a href={project.link} target="_blank"> <img src={project.image} alt={project.name}/></a>
              <p>{project.desc}</p>
              <p className="smaller">{project.smallDesc}</p>
              {project.github && (<a href={project.github} target="_blank"><img src={GitHub} width="40" height="40" alt="GitHub Repository" title="GitHub Repository"/></a>)}
              {project.itchio && (<a href={project.itchio} target="_blank"><img src={ItchIo} width="40" height="40" alt="itch.io Page" title="itch.io Page"/></a>)}
              {project.gamejolt && (<a href={project.gamejolt} target="_blank"><img src={GameJolt} width="40" height="40" alt="Game Jolt Page" title="Game Jolt Page"/></a>)}
              {project.newgrounds && (<a href={project.newgrounds} target="_blank"><img src={Newgrounds} width="40" height="40" alt="Newgrounds Page" title="Newgrounds Page"/></a>)}
          </div>
        ))
      }
      </div>
      <br/>
      <Link className="navButton" to="/projects/old">View Old Projects</Link>
      <p/><br/>
      <p className="separator"/>
    </div>
  )
}

export default Projects