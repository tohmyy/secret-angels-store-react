import React from 'react'
import { useContext } from 'react'
import { CartItemsContext } from '../../context/cart-items.context'
import CartItem from '../cart-item/cart-item.component'

import {CheckoutItemContainer, ImageContainer, Name, Price, Quantity, RemoveButton, Arrow, Value } from './checkout-items.styles.jsx'
const CheckoutItems = ({item}) => {
    console.log(item)
    const {cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, clearCartItem, cartCount} = useContext(CartItemsContext)
    const {name, quantity, imageUrl, price} = item;

    const clearItemHandler = ()=>{
      clearItemFromCart(item)
    }
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="" width="20px"/>
      </ImageContainer>
      <Name as='span'>{name}</Name>
       <Quantity> <Arrow onClick={()=>addItemToCart(item)}>👍</Arrow>{quantity}<Arrow onClick={()=>removeItemFromCart(item)}>👎</Arrow> </Quantity> 
      <Price as='span'>${price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>

        </CheckoutItemContainer>

            
        
  )
}

export default CheckoutItems
