// import { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartItemsContext = createContext({
openCartState: false,
setOpenCartState: ()=>{}
  
})

export const CartItemsProvider = ({children})=>{
    const [openCartState, setOpenCartState] = useState(false);
    const value = {openCartState, setOpenCartState};

    return <CartItemsContext.Provider value={value}>{children}</CartItemsContext.Provider>
    // Inside the children are rendered
    
}

