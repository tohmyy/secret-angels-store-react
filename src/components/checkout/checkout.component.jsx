import React from 'react'
import { useContext } from 'react'
import { CartItemsContext } from '../../context/cart-items.context'
// import CartItem from '../cart-item/cart-item.component'
import CheckoutItems from '../checkout-item/checkout-items.component'
import './checkout.styles.scss'
const Checkout = () => {
    // const {name, quantity, imageUrl, price} = cartItem;
    const {cartItems, addItemToCart, removeItemFromCart, cartCount, totalPrice} = useContext(CartItemsContext)
    console.log(cartItems)
  return (
    <div className='main-checkout-container'>
        
            <div className='checkout-header'>
                <div className="header-block">
                    <span>Product</span>  
                </div>
                <div className="header-block">
                    <span>Description</span>  
                </div>
                <div className="header-block">
                    <span>Quantity</span>  
                </div>
                <div className="header-block">
                    <span>Price ($)</span>  
                </div>
                <div className="header-block" >
                    <span>Remove</span>  
                </div>
                
            </div>
        {/* <hr/> */}
        {/* <div> */}
            {cartItems.map((item)=>{
                return <CheckoutItems key={item.id} item={item}/>
            })}
        {/* </div> */}
        <span className='total'>Total: ${totalPrice}</span>
    </div>
  )
}

export default Checkout
