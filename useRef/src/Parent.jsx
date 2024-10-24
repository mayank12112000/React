import React, { useCallback, useState } from 'react'
import Child from "./Child"
export default function Parent() {
  console.log("parent is rendering")
  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)
  const counterone = ()=>{
    setCount(preData => preData + 1)
  }
  const fun = useCallback(()=>{
    console.log("just a parent fun")
  },[count2])
  return (
    <div>
      parent
      <span>{count}</span>
      <button onClick={counterone}>count parent</button>
    <Child fun={fun}/>
    </div>
  )
}
