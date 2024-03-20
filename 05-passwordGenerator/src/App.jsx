import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()[]{}-=_+~"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1) 
      pass += str.charAt(char)
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  return(
    <>
      <div className='h-96 w-2/3 m-auto border-solid border-zinc-100 border-2 rounded-lg'>
        <h1 className='text-white text-center p-4 text-4xl mx-auto'>Password Generator</h1>
      </div>

    </>
  )
}

export default App
