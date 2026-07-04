import { useState, useEffect } from 'react'
import NavBar from '../NavBar';

function Home() {
  // Strings

  let header =
  `   CCC  H   H RRRR  III  SSSS       RRRR  Y   Y  CCC  ZZZZZ K   K EEEEE
  C   C H   H R   R  I  S           R   R  Y Y  C   C    Z  K  K  E    
  C     HHHHH RRRR   I   SSS        RRRR    Y   C       Z   KKK   EEEE 
  C   C H   H R  R   I      S       R  R    Y   C   C  Z    K  K  E    
   CCC  H   H R   R III SSSS        R   R   Y    CCC  ZZZZZ K   K EEEEE`;

  let optionPrefix = `Option ===>`;

  let choices =
  <ul>
    <li>0 <span className="blue">About Me</span></li>
    <li>1 <span className="blue">Skills</span></li>
    <li>2 <span className="blue">Projects</span></li>
    <li>3 <span className="blue">Social Media</span></li>
    <li>4 <span className="blue">Contacts</span></li>
  </ul>;

  let newAboutMe =
  <p><br/><span className="blue">About Me</span>
  <br/><br/>
  I have been fascinated by technology ever since I was a child.
  <br/><br/>
  With experience in object-oriented programming and web development, along with being fast at keyboard typing, I am a skilled software engineer.
  Specializing in both front-end and back-end development.
  <br/><br/>
  I am still building my skills, currently studying IBM Mainframe and the COBOL language, using the TN 3270 terminal.
  <br/><br/></p>;

  let skills =
  <p>
    <p><br/><span className="blue">Skills</span></p>
    <br/>
    <p className="skillTitle">Computer Programming</p>
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
  </p>

  // Set Functions

  const [option, setOption] = useState();
  const [aboutMe, setAboutMe] = useState(choices);

  useEffect(() => {
      const handleKeyDown = (event) => {
  
        /* Option Keys */
        if (event.key === 'Enter') {
          event.preventDefault();

          if (option === '0') setAboutMe(newAboutMe);
          else if (option === '1') setAboutMe(skills);
          else if (option === '2') window.location.href = "./projects";
          else if (option === '3') window.location.href = "./socials";
          else if (option === '4') window.location.href = "./contacts";
        }
      };
  
      document.addEventListener('keydown', handleKeyDown);
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [option, aboutMe]);

  return (
    <div>
      {header}
      <p className="separator"/>
      <p className="green">Software Engineer</p>
      {aboutMe}
      <p className="green">{optionPrefix} <input value={option} onChange={e => setOption(e.target.value)} className="optionBar"/></p>
    </div>
  )
}

export default Home
