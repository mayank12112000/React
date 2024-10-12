import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter1,setCounter1 ] = useState(0)
  const [counter2,setCounter2 ] = useState(0)
  const incrementOne=()=>{
    setCounter1(counter1+1)
  }
  const incrementTwo=()=>{
    setCounter2(counter2+1)
  }
  const isEven=useMemo(()=>{
    return counter1%2===0
  },[counter1])
  return (
    <>
      <button onClick={incrementOne}>counter1 {counter1}</button>
      <span>{isEven?"even":"odd"}</span>
      <button onClick={incrementTwo}>counter2 {counter2}</button>
    </>
  )
}

export default App
