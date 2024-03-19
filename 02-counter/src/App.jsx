import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function initValue(){
  return 0;
}

function App() {

  //  Passing a function in useState()
  //  Passed function should be pure and the value that function returns will be the initial value of the state
  const [count, setCount] = useState(initValue)

  return (
    <>
      <button onClick={()=>{
        setCount((count)=>count+1)
      }}>+</button>
      <button>{count}</button>
      <button onClick={()=>{
        setCount((count)=>count-1)
      }}>-</button>
    </>
  )
}

export default App
