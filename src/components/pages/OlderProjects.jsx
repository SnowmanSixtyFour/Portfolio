import { useState, useEffect } from 'react'

// Images
import GitHub from "../../../src/assets/img/github_button.webp";
import ItchIo from "../../../src/assets/img/itchio_button.webp";
import GameJolt from "../../../src/assets/img/gamejolt_button.webp";
import Newgrounds from "../../../src/assets/img/newgrounds_button.webp";

function OlderProjects() {
  const [oldprojects, setOldProjects] = useState([]);

  useEffect(() => {
    const fetchOldProjects = async () => {
      try {
        const oldRes = await fetch('./data/oldprojects.json');
        if (!oldRes.ok) throw new Error('Failed to load projects!');

        const oldProjectData = await oldRes.json();
        setOldProjects(oldProjectData.old);

      } catch (error) {
      }
    };
    fetchOldProjects();
  }, []);

  return (
    <div>
      <p>Old Projects</p>
      <br/>
      <p className="smaller">Below are my older projects, whether made for school, Game Jams, or just for fun! These are less serious and more personal projects of mine.</p>
      <div className="projects">
      {
        oldprojects.map((old) => (
          <div key={old.id}>
              <h2>{old.name}</h2>
              <a href={old.link} target="_blank"> <img src={old.image} alt={old.name}/></a>
              <p>{old.desc}</p>
              <p className="smaller">{old.smallDesc}</p>
              {old.github && (<a href={old.github} target="_blank"><img src={GitHub} width="40" height="40" alt="GitHub Repository" title="GitHub Repository"/></a>)}
              {old.itchio && (<a href={old.itchio} target="_blank"><img src={ItchIo} width="40" height="40" alt="itch.io Page" title="itch.io Page"/></a>)}
              {old.gamejolt && (<a href={old.gamejolt} target="_blank"><img src={GameJolt} width="40" height="40" alt="Game Jolt Page" title="Game Jolt Page"/></a>)}
              {old.newgrounds && (<a href={old.newgrounds} target="_blank"><img src={Newgrounds} width="40" height="40" alt="Newgrounds Page" title="Newgrounds Page"/></a>)}
          </div>
        ))
      }
      </div>
      <br/>
      <a href="/projects">Go back to Projects</a>
      <p/><br/>
      <p className="separator"/>
    </div>
  )
}

export default OlderProjects