import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')
  
  return(
    <>
      <div id='outerContainer' style={{backgroundColor: color}}  className='h-screen flex justify-center items-end	'>
          <div id='colorSelector' className='bg-white h-20 flex mb-20 border-teal-500	border-8 rounded-2xl w-7/12 justify-around items-center'>
              <button onClick={()=>{setColor("rgb(0, 255, 0)")}} className='rounded bg-green-400 text-white h-8 w-20'> Green </button>
              <button onClick={()=>{setColor('blue')}} className='rounded bg-blue-400 text-white h-8 w-20'> Blue </button>
              <button onClick={()=>{setColor('red')}} className='rounded bg-red-700 text-white h-8 w-20'> Red </button>
              <button onClick={()=>{setColor('rgb(128, 128, 0)')}}  className='rounded bg-lime-700 text-white h-8 w-20'> Olive </button>
              <button onClick={()=>{setColor('gray')}}  className='rounded bg-gray-500 text-white h-8 w-20'> Gray </button>
              <button onClick={()=>{setColor('yellow')}}  className='rounded bg-yellow-400  h-8 w-20'> Yellow </button>
              <button onClick={()=>{setColor('pink')}}  className='rounded bg-pink-400 text-white h-8 w-20'> Pink </button>
              <button onClick={()=>{setColor('purple')}}  className='rounded bg-purple-400 text-white h-8 w-20'> Purple </button>
              <button onClick={()=>{setColor('violet')}}  className='rounded bg-purple-500 h-8 text-white w-20'> Lavendar </button>
              <button onClick={()=>{setColor('white')}} className='rounded bg-white h-8 w-20'> White </button>
              <button onClick={()=>{setColor('black')}}  className='rounded bg-black text-white h-8 w-20'> Black </button>
          </div>
      </div>
    </>
  )
}

export default App
