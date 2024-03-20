import { useCallback, useState, useEffect } from 'react'
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

  useEffect(()=>{
      passwordGenerator()
  },[length,charAllowed,numberAllowed, passwordGenerator])
  

  return(
    <>
      <div className='h-96 w-2/3 m-auto flex flex-col items-center border-solid border-zinc-100 border-2 rounded-lg'>


        <h1 className='text-white my-14 text-center p-4 text-4xl mx-auto'>Password Generator</h1>


        <div>
          <input type="text" value={password} placeholder='password' readOnly className='w-96 mr-5 px-5 rounded-full h-9' />
          <button className='text-white border-2 px-5 rounded-sm'>Copy</button>
        </div>


        <div>

          {/* Setting range of password length */}
          <div className='my-5'>
            <input type="range" min={10} max={30} value={length} className='cursor-pointer mr-5' onChange={(e)=>setLength(e.target.value)} />
            <label className='text-white'>Length : {length}</label>
          </div>

          {/* Setting characters in password */}
          <div className='my-5'>
            <input type="checkbox" defaultChecked={charAllowed} id='charInput' className='mr-5' onChange={()=>{setCharAllowed((prev)=>!prev)}} />
            <label className='text-white' >Characters allowed</label>
          </div>

          {/* Setting numbers in password */}
          <div className='my-5'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' className='mr-5' onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
            <label className='text-white'>Numbers Allowed</label>
          </div>


        </div>


      </div>

    </>
  )
}

export default App
