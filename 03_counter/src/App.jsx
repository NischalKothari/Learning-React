import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,counterval] = useState(0)
  const addval = () => {
    counter++;
    counterval(counter)
  }
  const decval = () => {
    counter--;
    counterval(counter)
  }
  const zero = () => {
    counterval(0)
  }
  return (
    <>
      <h1>Module 3</h1>
      <h2>Counter Value : {counter}</h2> 
      {/* this thing ---> {val} is used to add any variable */}
      <button onClick={addval}>Increase Value</button>
      <br />
      <button onClick={decval}>Decrease Value</button>
      <br />
      <button onClick={zero}>Clean Value</button>
    </>
  )
}

export default App
