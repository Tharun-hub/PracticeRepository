import Clock from './components/Clock'

import './App.css'
import {useState } from 'react';

const App = () => {
  const [isMounted, setIsMounted] = useState(true);
  
  function onToggleClock()
  {
    /* if(isMounted) setIsMounted( false);
    else setIsMounted( true); */
    setIsMounted(status => !status);
  }
  
  return (
    <div className="app-container">
      <button onClick={onToggleClock} type="button" className="toggle-btn">
        {isMounted?'Hide Clock':'Show Clock'}
      </button>
      {isMounted && <Clock />}
    </div>
  )
}

export default App
