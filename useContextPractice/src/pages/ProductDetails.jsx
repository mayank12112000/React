import React, { useContext } from 'react'
import {data} from "../productData/productsData"
import { CartContext } from '../context/CartContext';

export default function ProductDetails() {
    const products = data;
    const {addToCart }= useContext(CartContext)
  return (
    <div>
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
