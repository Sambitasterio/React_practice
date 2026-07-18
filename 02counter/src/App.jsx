import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue  = () => {
    console.log("clicked",counter);
    setCounter(counter+1);
  }
  const reduceValue  = () => {
    setCounter(counter -1);
  }

  return (
    <div>
      <h2>Count: {counter}</h2>

      <button onClick = {addValue}>Add value</button>
      <br/>
      <button onClick = {reduceValue}>Reduce value</button>

      <p>footnote {counter}</p>
    </div>
  )

}

export default App
