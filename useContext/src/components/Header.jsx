import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Header() {
  const {cart} = useContext(CartContext)
  return (
    <div>
      <h1>MeKart</h1>
      <h3>items in cart: {cart.length}</h3>
    </div>
  )
}
