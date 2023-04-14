import React from 'react'
import {CartItemContainer, CartList, ItemDetails, Name} from './cart-item.styles.jsx'
const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
  return (
    <CartItemContainer>
        
        <img src= {`${imageUrl}`} alt="item"/>
        <ItemDetails>
          <Name>{name}</Name>
          <span className='price'>{quantity} x ${price}</span>
        </ItemDetails>

    </CartItemContainer>
  )
}

export default CartItem
