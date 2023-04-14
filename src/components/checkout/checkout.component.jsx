import React from 'react'
import { useContext } from 'react'
import { CartItemsContext } from '../../context/cart-items.context'
// import CartItem from '../cart-item/cart-item.component'
import CheckoutItems from '../checkout-item/checkout-items.component'
// import './checkout.styles.scss'
import {CheckoutHeader, HeaderBlock, MainCheckoutContainer, Total} from './checkout.styles.jsx'
const Checkout = () => {
    // const {name, quantity, imageUrl, price} = cartItem;
    const {cartItems, addItemToCart, removeItemFromCart, cartCount, totalPrice} = useContext(CartItemsContext)
    console.log(cartItems)
  return (
    <MainCheckoutContainer>
        
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>  
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>  
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>  
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price ($)</span>  
                </HeaderBlock>
                <HeaderBlock >
                    <span>Remove</span>  
                </HeaderBlock>
                
            </CheckoutHeader>
        {/* <hr/> */}
        {/* <div> */}
            {cartItems.map((item)=>{
                return <CheckoutItems key={item.id} item={item}/>
            })}
        {/* </div> */}
        <Total>Total: ${totalPrice}</Total>
    </MainCheckoutContainer>
  )
}

export default Checkout
