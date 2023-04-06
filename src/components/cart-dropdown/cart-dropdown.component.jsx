import './cart-dropdown.styles.scss'
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
    <div className='cart-dropdown-container'>
        <div className="cart-items">
          {cartItems.map((item)=>(
            <CartItem key={item.id} cartItem={item}/>
          )) 
          }
        </div>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        
    </div>
  )
}

export default CartDropdown
