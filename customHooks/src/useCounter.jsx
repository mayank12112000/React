import React, { useState } from 'react'

export default function useCounter(initialValue) {
  const [count,setCount] = useState(initialValue)
  
  const increment = ()=>{
          try {
          setCount(count+1)
        } catch (error) {
          return error.message
        }
  }
  const decrement = ()=>{
    setCount(count-1)
  }
  const reset =()=>{
    setCount(0)
  }
  return {count,increment,decrement,reset}
}
