import React, { createContext, useState } from 'react'

export const CartContext = createContext();
export  function ContextProvider({children}) {
  const [product, setProduct] = useState([])
  const addToCart=(item)=>{
    setProduct((product)=>[...product,item])
  }
  return (
    <CartContext.Provider value={{product,addToCart}}>
      {children}
    </CartContext.Provider>
  )
}
