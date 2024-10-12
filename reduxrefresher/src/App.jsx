import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import CartPage from './pages/CartPage';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './store/slice';
const products = [
  { id: 1, name: "Saree", price: 2000 },
  { id: 2, name: "Kurta", price: 1500 },
  { id: 3, name: "Lehenga", price: 5000 },
  { id: 4, name: "Sherwani", price: 8000 },
  { id: 5, name: "Jewellery Set", price: 3000 },
  { id: 6, name: "Handbag", price: 1000 },
  { id: 7, name: "Shoes", price: 2000 },
  { id: 8, name: "T-shirt", price: 500 },
  { id: 9, name: "Jeans", price: 1000 },
  { id: 10, name: "Sunglasses", price: 1500 }
];

function App() {
  const {cartItems} = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  console.log(cartItems)
  return (
    <>
    <h2>total items in cart: {cartItems.length}</h2>
      <Link to="/">Home || </Link>
      <Link to="/cart">Cart</Link>
      <Routes>
        <Route path='/' element={
          <div className="flex-container">
            {products.map((item, index) => (
              <div key={index} className="container">
                <p>{item.name}</p>
                <p>${item.price}</p>
                <button onClick={()=>dispatch(addItem(item))}>Add to Cart</button>
              </div>
            ))}
          </div>
        } />
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </>
  )
}

export default App
