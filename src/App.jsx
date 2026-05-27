import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // --- Variables ---

  // Strings

  let header =
  `   CCC  H   H RRRR  III  SSSS       RRRR  Y   Y  CCC  ZZZZZ K   K EEEEE
  C   C H   H R   R  I  S           R   R  Y Y  C   C    Z  K  K  E    
  C     HHHHH RRRR   I   SSS        RRRR    Y   C       Z   KKK   EEEE 
  C   C H   H R  R   I      S       R  R    Y   C   C  Z    K  K  E    
   CCC  H   H R   R III SSSS        R   R   Y    CCC  ZZZZZ K   K EEEEE`;

  return (
    <div>
      <p className="separator"/>
      {header}
      <p className="separator"/>
    </div>
  )
}

export default App
