import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'
import './index.css'
import CartContext from '../../context/cartContext'
import { use } from 'react'
const Cart = () => {
  const cartContextValue = use(CartContext);
  const {cartList} = cartContextValue;


  return(
  <>
    <Header />
    <div className="cart-container">
      <div className="cart-content-container">
        <h1 className="cart-heading">My Cart</h1>
        {cartList.length === 0? <EmptyCartView />:<CartListView />}
      </div>
    </div>
  </>
)}

export default Cart
