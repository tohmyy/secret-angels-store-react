import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles.jsx'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartItemsContext } from '../../context/cart-items.context'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import React from 'react'

const CartDropdown = () => {
  const {cartItems, setOpenCartState} = useContext(CartItemsContext);
  const navigate = useNavigate();

  const goToCheckoutHandler=()=>{
    if(cartItems){
      navigate('/checkout')
      setOpenCartState(false)
    }
  }
  return (
    <CartDropdownContainer>
        <CartItems>
          {cartItems.length ? cartItems.map((item)=>(
            <CartItem key={item.id} cartItem={item}/>
          ) ) : <EmptyMessage>Your cart is empty</EmptyMessage> 
          }
        </CartItems>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        
    </CartDropdownContainer>
  )
}

export default CartDropdown
