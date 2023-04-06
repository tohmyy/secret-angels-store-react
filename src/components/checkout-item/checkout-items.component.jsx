import React from 'react'
import { useContext } from 'react'
import { CartItemsContext } from '../../context/cart-items.context'
import CartItem from '../cart-item/cart-item.component'

import './checkout-items.styles.scss'
const CheckoutItems = ({item}) => {
    console.log(item)
    const {cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, clearCartItem, cartCount} = useContext(CartItemsContext)
    const {name, quantity, imageUrl, price} = item;

    const clearItemHandler = ()=>{
      clearItemFromCart(item)
    }
  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt="" width="20px"/>
      </div>
      <span className='name'>{name}</span>
       <span className='quantity' > <div className='arrow' onClick={()=>addItemToCart(item)}>👍</div>{quantity}<div className='arrow' onClick={()=>removeItemFromCart(item)}>👎</div> </span> 
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>

        </div>

            
        
  )
}

export default CheckoutItems
