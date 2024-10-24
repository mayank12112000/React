import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'

function App() {
  const inputRef= useRef()
console.log(inputRef.current)
useEffect(()=>{
  inputRef.current.focus()
},[])
  return (
    <>
      <input ref={inputRef} type="text" placeholder='enter text'/>
      <Parent/>
    </>
  )
}

export default App
