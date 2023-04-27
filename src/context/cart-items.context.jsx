// import { useEffect } from 'react'
import { useState, useEffect, useReducer } from 'react';
import { createContext } from 'react'
import { createAction } from '../utils/reducer/reducer.utils';


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

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_OPEN_CART: 'SET_OPEN_CART'
} 

const INITIAL_STATE = {
    openCartState : false,
    cartItems : [],
    cartCount : 0,
    totalPrice: 0,
}

const cartReducer = (state, action)=>{
    const {type, payload} = action;

    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            const objCLone = {...state}
            console.log(objCLone)
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_OPEN_CART:

            return {
                ...state,
                openCartState:payload,
            }


        default:
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }
}

export const CartItemsProvider = ({children})=>{
    // const [openCartState, setOpenCartState] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0)
    // const [totalPrice, setTotalPrice] = useState(0)

const [{cartItems, openCartState, cartCount, totalPrice}, dispatch] = useReducer(cartReducer, INITIAL_STATE)

// New Function 
const updateCartItemsReducer = (newCartItems)=>{
    // we generate a newCartTotal & newCartCount from newCartItems
    // NewCartCount
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    
    // newCartTotal Price
    const newTotalPrice = newCartItems.reduce((totalPrice, item)=> totalPrice + item.quantity*item.price, 0) 

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                                                                cartItems: newCartItems, 
                                                                totalPrice: newTotalPrice, 
                                                                cartCount: newCartCount
                                                            }))

    // objectives:
    // 1. generate newCartTotal
    // 2. generate newCartCount

    // 3. dispatch new action with payload = {
    //     newCartItems,
    //     newTotalPrice,
    //     newCartCount
    // }
}

    const addItemToCart=(productToAdd)=>{
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
    }
    const removeItemFromCart=(cartItemToRemove)=>{
        const newCartItems = removeCartItem(cartItems, cartItemToRemove)
        updateCartItemsReducer(newCartItems)
    }
    const clearItemFromCart=(cartItemToRemove)=>{
        const newCartItems = clearCartItem(cartItems, cartItemToRemove)
        updateCartItemsReducer(newCartItems)
    }

    const setOpenCartState = (bool)=>{
        dispatch(createAction(CART_ACTION_TYPES.SET_OPEN_CART, bool))
    }

    // useEffect(()=>{
    //             // cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    //             setCartCount(cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0))
    //             setTotalPrice(cartItems.reduce((totalPrice, item)=> totalPrice + item.quantity*item.price, 0))      
    // }, [cartItems])
    

    const value = {openCartState, setOpenCartState, cartItems, addItemToCart, addCartItem, removeItemFromCart, cartCount, clearItemFromCart, clearCartItem, totalPrice};

    return <CartItemsContext.Provider value={value}>{children}</CartItemsContext.Provider>
    // Inside the children are rendered
    
}

