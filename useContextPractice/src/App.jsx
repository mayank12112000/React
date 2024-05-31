import './App.css'
import Header from "./components/Header"
import {Routes,Route, NavLink} from "react-router-dom"
import ProductDetails from './pages/ProductDetails'
import Cart from "./pages/Cart"
function App() {

  return (
    <>
      <Header/>
      <NavLink to={"/"}>Home || </NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
      <Routes>
        <Route path='/' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
