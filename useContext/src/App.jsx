import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import { Link, NavLink, Route, Routes } from "react-router-dom"
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
function App() {

  return (
    <>
      <Header />
      <nav>
        <NavLink to={"/"}>Home || </NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
