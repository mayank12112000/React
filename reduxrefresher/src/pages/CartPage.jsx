import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../store/slice'

export default function CartPage() {
    const {cartItems} = useSelector((state)=>state.cartReducer)
    const dispatch = useDispatch()
    console.log(cartItems)
  return (
    <div className='flex-container'>
        {cartItems.map((item)=>(
            <div key={item.id} className="container">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={()=>dispatch(removeItem(item.id))}>remove from cart</button>
          </div>
        ))}
    </div>
  )
}
