import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')
  return (
    <>
    <div className = 'h-screen w-full duration-200' style={{backgroundColor: color}}>
      <div className = 'fixed flex flex-wrap justify-center inset-0 px-2 '>
      <div className='bg-white text-white flex flex-wrap justify-center gap-3 shadow-lg rounded-3xl py-2 px-3 h-12'>
        <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "green" }} onClick={() => setColor('green')}>green</button>
        <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "red" }} onClick={() => setColor('red')}>red</button>
        <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "blue" }} onClick={() => setColor('blue')}>blue</button>
        <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "grey" }} onClick={() => setColor('grey')}>grey</button>
        <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "pink" }} onClick={() => setColor('pink')}>pink</button>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default App
