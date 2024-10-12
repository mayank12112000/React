import React, { useContext, useEffect, useState } from 'react'
import {data} from "../productData/productsData"
import { CartContext } from '../context/CartProvider'

export default function ProductDetails() {
    const [products,setProducts] = useState([])
    const {cart} = useContext(CartContext)
    const {addToCart} = useContext(CartContext)
    useEffect(()=>{
      setProducts(data)
    },[])
  return (
    <div>
      <h1>Items in Cart: {cart.length}</h1>
      {products.map((product)=>{
        return(
            <div key={product.id} style={{width:"15rem",height:"8rem",border:"2px solid black",margin:"5px"}}>
                {`${product.name} INR ${product.price}`}
                <br />
            <button onClick={()=>addToCart(product)}>
                add to cart
            </button>
            </div>
        )
      })}
    </div>
  )
}
