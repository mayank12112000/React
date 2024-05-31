import React, { useContext} from 'react'
import {v4 as uuid} from "uuid"
import { CartContext } from '../context/CartContext'
export default function Cart() {
    const { cart } = useContext(CartContext)  

    console.log(cart)
    return (
        <>
            <h4>
                {cart.length} : items in the cart
            </h4>
            {cart && cart.map((product) => {
                return (
                    <div key={uuid()} style={{ border: "1px solid black", width: "80wh", height: "3rem", margin: "2px" }}>
                        {product.name}
                    </div>
                )
            })}
            <div >
            TOTAL: {cart.reduce((totalPrice,item)=>totalPrice+=item.price,0)} 
            </div>
        </>
    )
}
