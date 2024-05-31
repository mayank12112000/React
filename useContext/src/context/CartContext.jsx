import React, { createContext, useState } from 'react'
export const CartContext = createContext();
export function CartProvider({children}) {
  const [cart,setCart] = useState([])

  const addToCart=(item)=>{
    setCart((cart)=>[...cart,item])
  }
  return (
      <CartContext.Provider 
      value={{
        cart,addToCart,
        cartLogger:()=> console.log("carting")
        }}>
          {children}
      </CartContext.Provider>
    )
}
