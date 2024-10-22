import React, { useMemo, useState } from 'react'

export default function App() {
    const [counter1,setCounter1] = useState(0)
    const [counter2,setCounter2] = useState(0)
    const isEven = useMemo(()=>{
        console.log("is even called")
        for(let i = 0;i<2000000;i++){

        }
        return counter1 % 2 === 0
    },[counter1])
    const coutner1button = ()=>{
        console.log("counter 1 button pressed")
        setCounter1(preValue => preValue + 1)
    }
    const coutner2button = ()=>{
        console.log("counter 2 button pressed")
        setCounter2(preValue => preValue + 1)
    }

  return (
    <div>
      <span>{counter1} {isEven?"even":"odd"}</span>
      
      <button onClick={coutner1button}>counter 1</button> <br />
      <span>{counter2}</span>
      <button onClick={coutner2button}>counter 2</button>
    </div>
  )
}
