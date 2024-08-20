import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  function addCount(){
    if (counter !== 20) setCounter(counter + 1);
  }
  function removeCount(){
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <>
      <h3>Count is {counter}</h3>
      <button onClick={addCount}>Add to count</button>
      <br /><br />
      <button onClick={removeCount}>Remove from count</button>
    </>
  )
}

export default App