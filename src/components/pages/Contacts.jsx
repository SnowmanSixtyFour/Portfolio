import { useState } from 'react'
import NavBar from '../NavBar';

function Contacts() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <p className="separator"/>
    </div>
  )
}

export default Contacts
