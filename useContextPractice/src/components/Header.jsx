import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Header() {
  const {product} = useContext(CartContext)
  
  return (
    <>
    <h1>
      MeKart
    </h1>
    <h3>{`item in cart: ${product.length}`}</h3>
    </>
  )
}
