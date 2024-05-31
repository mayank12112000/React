import React, { useContext } from 'react'
import { products } from '../data/productDetails'
import { CartContext } from '../context/CartContext'

export default function ProductDetails() {
    console.log(products)
    const {addToCart} = useContext(CartContext)
    console.log(addToCart)
  return (
    <div>
      {products.map(({id,price,name})=>{
      return(
      <div key={id} style={{width:"20rem",border:"2px solid black", height:"8rem",margin:"5px"}}>
          <h4>{`${name} INR ${price}`}</h4>
          <button onClick={()=>addToCart({id,price,name})}>add to cart</button>
      </div>)
      })}

    </div>
  )
}
