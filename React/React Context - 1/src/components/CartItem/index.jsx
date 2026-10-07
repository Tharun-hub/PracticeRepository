import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'
import { useState } from 'react'

const CartItem = props => {
  const {cartItemDetails, DeleteCartItem} = props
  const {title, brand, quantity, price, imageUrl, id} = cartItemDetails

  function del()
  {
    DeleteCartItem(id);
  }
  const [quanti, setQuantity] = useState(quantity);
  function onIncrementQuantity()
  {
    setQuantity(quanti+1);
  }
  function onDecrementQuantity()
  {
    quanti> 1 ? setQuantity(quanti-1): setQuantity(quanti);
  }
  return (
    <li className="cart-item">
      <img className="cart-product-image" src={imageUrl} alt={title} />
      <div className="cart-item-details-container">
        <div className="cart-product-title-brand-container">
          <p className="cart-product-title">{title}</p>
          <p className="cart-product-brand">by {brand}</p>
        </div>
        <div className="cart-quantity-container">
          <button onClick={onDecrementQuantity} type="button" className="quantity-controller-button">
            <BsDashSquare color="#52606D" size={12} />
          </button>
          <p className="cart-quantity">{quanti}</p>
          <button onClick={onIncrementQuantity} type="button" className="quantity-controller-button">
            <BsPlusSquare color="#52606D" size={12} />
          </button>
        </div>
        <div className="total-price-delete-container">
          <p className="cart-total-price">Rs {price * quanti}/-</p>
          <button onClick={del} className="remove-button" type="button">
            Remove
          </button>
        </div>
      </div>
      <button className="delete-button" type="button">
        <AiFillCloseCircle onClick={del} color="#616E7C" size={20} />
      </button>
    </li>
  )
}

export default CartItem
