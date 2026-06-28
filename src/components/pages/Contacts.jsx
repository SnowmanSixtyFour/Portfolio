import { useState } from 'react'
import NavBar from '../NavBar';

function Contacts() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Contacts</p>
      <br></br>
      <a href="https://www.linkedin.com/in/chris-ryczke/">LinkedIn</a> <a href="https://github.com/SnowmanSixtyFour">GitHub</a> <a href="src\assets\ChrisRyczkeResume.pdf">Resume</a> <a href="./socials">Social Media</a>
      <p className="separator"/>
    </div>
  )
}

export default Contacts
