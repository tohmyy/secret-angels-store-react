import './cart-icon.styles.scss'
import { useContext, useEffect } from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import React from 'react'
import { CartItemsContext } from '../../context/cart-items.context'

const CartIcon = () => {
  const {openCartState, setOpenCartState} = useContext(CartItemsContext)
  const {cartItems, cartCount} = useContext(CartItemsContext)
  // console.log(cartItems)
  
//   useEffect(()=>{
//     // cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
//     setOpenCartState(false)            
// })
  
  const toggleDropdown = ()=> {
    setOpenCartState(!openCartState)
    // if (openCartState==false){
    //   setOpenCartState(true)
    // }
    // else{
    //   setOpenCartState(false)
    // }
    // if(openCartState===false){
    //   console.log('ewuuu')
    //   setOpenCartState(true)
    //   console.log('it works!!')
    // }
    // else{
    //   console.log('it works')
    // }
  

  }

  // sets state of opencart when toggled to the opposite of current opencart state

  return (
    <div className='cart-icon-container' onClick={toggleDropdown}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
