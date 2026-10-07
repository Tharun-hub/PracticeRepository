import {BrowserRouter, Route, Routes} from 'react-router'
import { useState } from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import ProductItemDetails from './components/ProductItemDetails'
import NotFound from './components/NotFound'
import CartContext from './context/cartContext'
import './App.css'

const App = () =>
  {
    const [cartList, setCartList] = useState([]);
   
    
    function addCartItem(item)
    {
      /* console.log("added cart item")
      const temp = cartList;
      temp.push(item);
      setCartList(temp) */
      
      setCartList(prev => [...prev, item])
    }
    function deleteCartItem(id)
    {
      console.log("deleted cart item")
      const newList = cartList.filter(i => i.id !== id);
      setCartList(newList);
    }
   return (
  

  <BrowserRouter>
  <CartContext value={{cartList, addCartItem, deleteCartItem}}>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/products/:id"
        element={
          <ProtectedRoute>
            <ProductItemDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
    </CartContext>
  </BrowserRouter>
)
}

export default App
