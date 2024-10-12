import React, { useContext } from 'react'
import {v4 as uuid} from "uuid"
import { CartContext } from '../context/CartProvider'
export default function Cart() {
  const {cart} = useContext(CartContext)
  return (
    <>
    <h3>
      {`${cart.length} in your cart`}
    </h3>
    {cart.map((cart)=>{
      return(
        <div key={uuid()} style={{border:"1px solid black",width:"10rem",height:"5rem"}}>
          {cart.name}
        </div>
      )
    })}
    <h3>{cart.reduce((totalPrice,item)=>totalPrice+=item.price,0)}</h3>
    </>
  )
}
