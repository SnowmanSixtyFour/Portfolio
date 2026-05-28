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
    </div>
  )
}

export default Socials
