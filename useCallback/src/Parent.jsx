import React from 'react'
import { useState } from 'react'
import Child from './Child'
import { useCallback } from 'react'

export default function Parent() {
    console.log("parent component rendering")
    const [counter1,setCounter1] = useState(1)
    const [counter2,setCounter2] = useState(1)
    const incrementOne = ()=>{
        console.log("increment one called")
        setCounter1(counter1 + 1)
    }
    const fun = useCallback(()=>{
        // if we pass this funct as prop to child comp child will again render so we should use usecallback
        console.log("hello")
    },[counter2])
  return (
    <div>
      <p>Counter one value: {counter1}</p>
      <button onClick={incrementOne}>Increment 1</button>
      <Child fun={fun}/>
    </div>
  )
}
