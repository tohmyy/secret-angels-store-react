import React from 'react'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component.jsx'
import {ItemsContainer, ItemBox, ImgBox, Image, TextBox }  from './shop.styles.jsx'
import { useContext } from 'react'
import { CartItemsContext } from '../../context/cart-items.context'
// import { BUTTON_TYPE_CLASSES } from '../button/button.component.jsx'


const Shop = ({item}) => {

    const {id, name, imageUrl, price} = item
    const {cartItems, addItemToCart} = useContext(CartItemsContext)

    const addProductToCartHandler =()=>{
        addItemToCart(item)
    }
  return (
    <>
    

        <ItemsContainer>
            <ItemBox>
                
                <ImgBox>
                    <img src={`${imageUrl}`} alt="" width='100%' height='100%' name={name}/>
                    <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCartHandler}>ADD TO CART</Button>
                </ImgBox>
                <TextBox>
                    <p>{name}</p>
                    <p>${price}</p>
                </TextBox>
            </ItemBox>
        </ItemsContainer>


</>
  )
 
}

export default Shop



