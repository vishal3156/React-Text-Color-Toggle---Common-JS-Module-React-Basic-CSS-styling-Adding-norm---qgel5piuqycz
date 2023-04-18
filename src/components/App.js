import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
const [font, setFont] = useState(false);
  
  const handleClick = () => {
    setFont(!font)
  }
  
  return (
    <div id="main">
      <p className={} >Newton School</p>
      <button id='button' onClick={handleClick}>Change Style</button>
    </div>
  )
}


export default App;
