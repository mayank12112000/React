import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

export default function App() {
  return (
    <div>
      <h1>EKart</h1>
        <NavLink to="/cart">Cart || </NavLink>
        <NavLink to="/">Home</NavLink>
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}
