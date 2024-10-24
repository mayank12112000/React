import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'

export default function Reducer1Challenge() {
  const initialValue = {
    count:0,
    counter:2
  }
    const reducer = (state,action)=>{
      switch (action.type){
        case 'increment':
          return state + initialValue.counter
        case "decrement":
          return state - initialValue.counter
        case "reset":
          return initialValue.count
      }
    }
    const [count,dispatch]  = useReducer(reducer,initialValue.count)  
    
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch({type:"increment"})}>increment</button>
    <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
    <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </>
  )
}
