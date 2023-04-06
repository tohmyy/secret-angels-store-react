// import { useEffect } from 'react'
import { useState, useEffect } from 'react';
import { createContext } from 'react'

const addCartItem=(cartItems, productToAdd)=>{
    // first find out if item already exists in array (cart)
    const newArray = cartItems.find((item)=>item.id===productToAdd.id)
    // if so, increase quantity
    if(newArray){
        return cartItems.map((item)=>item.id===productToAdd.id ? 
        {...item, quantity: item.quantity + 1} : item)
    }
    // if not, add item element into array (cart) & set quantity=1
    console.log([...cartItems, {...productToAdd, quantity:1}])
    return [...cartItems, {...productToAdd, quantity:1}]

}
const removeCartItem=(cartItems, cartItemToRemove)=>{
    // first find out if item already exists in array (cart)
    const newArray = cartItems.find((item)=>item.id===cartItemToRemove.id)
    // if so, increase quantity

    // If quantity is less than or equal to 1
    if(newArray.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id !== cartItemToRemove.id)
        // This code filters out any item that returns true, 
        // hence when iterating through the array, 
        // if the cartItem.id is not equal to cartItemToRemove.id it returns false, and that item/element is not filtered out
    }

    if(newArray){
        
        return cartItems.map((item)=>item.id===cartItemToRemove.id  ? 
        {...item, quantity: item.quantity - 1} : item)
    }
    // // if not, add item element into array (cart) & set quantity=1
    // console.log([...cartItems, {...productToAdd, quantity:1}])
    // return [...cartItems, {...productToAdd, quantity:1}]
    
}
const clearCartItem =(cartItems, cartItemToClear)=>{
    return cartItems.filter(cartItem=>cartItem.id !== cartItemToClear.id)
}

//     // finds out if cartItems contain contains productToAdd
// const existingCartItem= cartItems.find(item=>item.id===productToAdd.id);

// //If found, increment quantity
// if(existingCartItem){
//     return cartItems.map((item)=>item.id===productToAdd.id ? 
//     {...item, quantity: item.quantity + 1} :
//     item)
// }
// //return new array with updated cartItems/ new cartItem (if not found in cart)
// return [...cartItems, {...productToAdd, quantity:1}]
// // adding new variable 'quantity' with value = 1 in the array



export const CartItemsContext = createContext({
openCartState: false,
setOpenCartState: ()=>{},
cartItems: [],
addItemToCart: ()=>{},
removeItemFromCart: ()=>{},
clearItemFromCart: ()=>{},
cartCount: 0,
totalPrice:0,

  
})

export const CartItemsProvider = ({children})=>{
    const [openCartState, setOpenCartState] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems, productToAdd))

    }
    const removeItemFromCart=(cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems, cartItemToRemove))

    }
    const clearItemFromCart=(cartItemToRemove)=>{
        setCartItems(clearCartItem(cartItems, cartItemToRemove))

    }


    useEffect(()=>{
                // cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
                setCartCount(cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0))
                setTotalPrice(cartItems.reduce((totalPrice, item)=> totalPrice + item.quantity*item.price, 0))      
    }, [cartItems])
    

    const value = {openCartState, setOpenCartState, cartItems, setCartItems, addItemToCart, addCartItem, removeItemFromCart, cartCount, clearItemFromCart, clearCartItem, totalPrice};

    return <CartItemsContext.Provider value={value}>{children}</CartItemsContext.Provider>
    // Inside the children are rendered
    
}

