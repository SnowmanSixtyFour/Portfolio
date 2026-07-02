import { useState } from 'react'
import NavBar from '../NavBar';
import Resume from "../../../src/assets/ChrisRyczkeResume.pdf";

function Contacts() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Contacts</p>
      <br/>
      <a className="navButton" href="https://www.linkedin.com/in/chris-ryczke/">LinkedIn</a> <a className="navButton" href="https://github.com/SnowmanSixtyFour">GitHub</a> <a className="navButton" href={Resume} target="_blank">Resume</a> <a className="navButton" href="./socials">Social Media</a>
      <p className="separator"/>
    </div>
  )
}

export default Contacts
