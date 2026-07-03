import { useState } from 'react'
import NavBar from '../NavBar';

function Projects() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Skills</p>
      <br/>
      <p className="skillTitle">Software Engineering</p>
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
      <p className="skillTitle">Web Development</p>
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
      <p className="skillTitle">Databases</p>
      <ul className="skills">
        <li>SQL Server</li>
        <li>PostgreSQL</li>
      </ul>
      <ul className="skills">
        <li>pgAdmin</li>
        <li>WinSCP</li>
      </ul>
      <p className="skillTitle">Mainframe</p>
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
        <h2>Blue Bird Series</h2>
          <h3>Blue Bird 64</h3>
          <a href="https://snowman64.itch.io/bluebird64" target="_blank"> <img src="src/components/pages/img/bluebird64.jpg" alt="Blue Bird 64"/></a>
          <p>Blue Bird 64 is an open-source game made in 2 days with Unity.</p>
          <p className="smaller">Windows, Mac and Linux builds are available on Game Jolt and itch.io.</p>
          <a href="https://github.com/SnowmanSixtyFour/BlueBird64" target="_blank"><img src="src/components/pages/img/github_button.webp" width="40" height="40" alt="GitHub Repository" title="GitHub Repository"/></a>
          <a href="https://snowman64.itch.io/bluebird64" target="_blank"><img src="src/components/pages/img/itchio_button.webp" width="40" height="40" alt="itch.io Page" title="itch.io Page"/></a>
          <a href="https://gamejolt.com/games/bluebird64/1065366" target="_blank"><img src="src/components/pages/img/gamejolt_button.webp" width="40" height="40" alt="Game Jolt Page" title="Game Jolt Page"/></a>
          <a href="https://www.newgrounds.com/portal/view/1030173" target="_blank"><img src="src/components/pages/img/newgrounds_button.webp" width="40" height="40" alt="Newgrounds Page" title="Newgrounds Page"/></a>
          <h3>Blue Bird 64 x2</h3>
          <a href="https://snowman64.itch.io/bluebird64-x2" target="_blank"> <img src="src/components/pages/img/bluebird64x2.jpg" alt="Blue Bird 64 x2"/></a>
          <p>Blue Bird 64 x2 is an online Unity multiplayer game made in 7 days.</p>
          <p className="smaller">Features lobbies up to 8 players big, and a quick play button.</p>
          <a href="https://github.com/SnowmanSixtyFour/BlueBird64-x2" target="_blank"><img src="src/components/pages/img/github_button.webp" width="40" height="40" alt="GitHub Repository" title="GitHub Repository"/></a>
          <a href="https://snowman64.itch.io/bluebird64-x2" target="_blank"><img src="src/components/pages/img/itchio_button.webp" width="40" height="40" alt="itch.io Page" title="itch.io Page"/></a>
          <a href="https://gamejolt.com/games/bluebird64-x2/1070507" target="_blank"><img src="src/components/pages/img/gamejolt_button.webp" width="40" height="40" alt="Game Jolt Page" title="Game Jolt Page"/></a>
        <h2>Between the Lines</h2>
        <a href="https://snowman64.itch.io/between-the-lines" target="_blank"> <img src="src/components/pages/img/betweenthelines.jpg" alt="Between the Lines"/></a>
        <p>Between the Lines is an indie game made for Mystery Game Jam 2026.</p>
        <p className="smaller">Originally developed from April 7, 2026 - May 5, 2026.</p>
        <a href="https://github.com/SnowmanSixtyFour/BetweenTheLines" target="_blank"><img src="src/components/pages/img/github_button.webp" width="40" height="40" alt="GitHub Repository" title="GitHub Repository"/></a>
        <a href="https://snowman64.itch.io/between-the-lines" target="_blank"><img src="src/components/pages/img/itchio_button.webp" width="40" height="40" alt="itch.io Page" title="itch.io Page"/></a>
        <a href="https://gamejolt.com/games/between-the-lines/1066244" target="_blank"><img src="src/components/pages/img/gamejolt_button.webp" width="40" height="40" alt="Game Jolt Page" title="Game Jolt Page"/></a>
        <h2>My Portfolio</h2>
        <a href="https://www.chrisryczke.com" target="_blank"> <img src="src/components/pages/img/portfolio.jpg" alt="My Portfolio"/></a>
        <p>The portfolio you're browsing now was developed by me!</p>
        <p className="smaller">Not an ounce of the portfolio was made with a website designer. I have full control over the code.</p>
        <a href="https://github.com/SnowmanSixtyFour/Portfolio" target="_blank"><img src="src/components/pages/img/github_button.webp" width="40" height="40" alt="GitHub Repository" title="GitHub Repository"/></a>
      <p className="separator"/>
    </div>
  )
}

export default Projects
