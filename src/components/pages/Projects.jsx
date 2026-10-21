import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

// Images
import Website from "../../../src/assets/img/website_button.webp";
import ItchIo from "../../../src/assets/img/itchio_button.webp";
import GameJolt from "../../../src/assets/img/gamejolt_button.webp";
import Newgrounds from "../../../src/assets/img/newgrounds_button.webp";
import Steam from "../../../src/assets/img/steam_button.webp";
import LudumDare from "../../../src/assets/img/ludumdare_button.webp";
import GitHub from "../../../src/assets/img/github_button.webp";

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
              <h2>{project.name} {project.releasedate && (<span>({project.releasedate})</span>)}</h2>
              <a href={project.link} target="_blank"> <img src={project.image} alt={project.name}/></a>
              <p>{project.desc}</p>
              <p className="smaller">{project.smallDesc}</p>
              {project.website && (<a href={project.website} target="_blank"><img src={Website} width="40" height="40" alt="Website" title="Website"/></a>)}
              {project.steam && (<a href={project.steam} target="_blank"><img src={Steam} width="40" height="40" alt="Steam Page" title="Steam Page"/></a>)}
              {project.itchio && (<a href={project.itchio} target="_blank"><img src={ItchIo} width="40" height="40" alt="itch.io Page" title="itch.io Page"/></a>)}
              {project.gamejolt && (<a href={project.gamejolt} target="_blank"><img src={GameJolt} width="40" height="40" alt="Game Jolt Page" title="Game Jolt Page"/></a>)}
              {project.newgrounds && (<a href={project.newgrounds} target="_blank"><img src={Newgrounds} width="40" height="40" alt="Newgrounds Page" title="Newgrounds Page"/></a>)}
              {project.ludumdare && (<a href={project.ludumdare} target="_blank"><img src={LudumDare} width="40" height="40" alt="Ludum Dare Page" title="Ludum Dare Page"/></a>)}
              {project.github && (<a href={project.github} target="_blank"><img src={GitHub} width="40" height="40" alt="GitHub Repository" title="GitHub Repository"/></a>)}
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