import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {v4 as uuid} from "uuid"
export default function Cart() {
  const {product} = useContext(CartContext)
  console.log(product)
  return (
    <>
    <h3>
      {`${product.length} in your cart`}
    </h3>
    {product.map((product)=>{
      return(
        <div key={uuid()} style={{border:"1px solid black",width:"10rem",height:"5rem"}}>
          {product.name}
        </div>
      )
    })}
    <h3>{product.reduce((totalPrice,item)=>totalPrice+=item.price,0)}</h3>
    </>
  )
}
