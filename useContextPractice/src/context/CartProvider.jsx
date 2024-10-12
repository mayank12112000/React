import React, { createContext, useState } from 'react'
export const CartContext = createContext()
export function CartProvider({children}) {
    const [cart,setCart] = useState([])
    const addToCart = (item)=>{
        setCart((preData)=>[...preData,item])
    }
  return (
    <CartContext.Provider value={{
        cart,addToCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
