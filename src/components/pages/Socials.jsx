import { useState } from 'react'
import NavBar from '../NavBar';

function Socials() {
  const [count, setCount] = useState(0)

  // --- Variables ---

  // Strings

  let header =
  `  SSSSSSS NN   NN OOOOOOO WW      WW MM    MM AAAAAAA NN   NN 6666666 44  44   
  SS      NNN  NN OO   OO WW      WW MMM  MMM AA   AA NNN  NN 66      44  44   
  SSSSSSS NN N NN OO   OO WW  WW  WW MM MM MM AA   AA NN N NN 6666666 44  44   
       SS NN  NNN OO   OO WW WWWW WW MM    MM AAAAAAA NN  NNN 66   66 44444444 
  SSSSSSS NN   NN OOOOOOO WWWW  WWWW MM    MM AA   AA NN   NN 6666666    444   `;

  return (
    <div>
      {header}
      <p className="separator"/>
      <p>Snowman64 is my gaming-centered YouTube channel and online persona.</p>
      <br/>
      <p>I had begun professionally working on it after my first <a href="https://www.youtube.com/watch?v=9ANnCBZbtYg" target="_blank">Minecraft video</a> released.</p>
      <br/>
      <p>Since then, I've made hundreds of videos, gained over 15K subscribers, and had a lot of fun gaming and connecting with my audience.</p>
      <br/>
      <p>Fun fact; Snowman64 is the name of both my online persona AND my GitHub account!</p>
      <br/>
      <a href="https://snowman64.com" target="_blank">Find out more on my website!</a>
      <p className="separator"/>
    </div>
  )
}

export default Socials
