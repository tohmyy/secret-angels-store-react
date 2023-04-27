import { createContext, useState, useEffect, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

// see this as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null 
    //base empty state of currentUser has to be null, which means 0 or false
    //using an empty

})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    console.log('dispatched')
    console.log('action: ', action)
    console.log('state: ', state)
    
    const {type, payload} = action;
    
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:payload
            }
        default:
            throw new Error(`Unhandled type ${type} in useReducer`)
    }
}

const INITIAL_STATE = {
    currentUser: null
}

// see this as the actual component, thats made use of
export const UserProvider =({children}) => {
    
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)
    console.log( 'currentUser: ', currentUser)
    const setCurrentUser = (user)=>{
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }

// const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}
    // const {currentUser} = state

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            // listens for change in state of authentication
            //it is a useEffect hook because authentication will cause page to re-load, thereby executing the useEffect
            
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
            console.log(user)
            // logs out user object if signed in or null if not signed in
        })
        
    return unsubscribe;
    }, [])
    
    return <UserContext.Provider value={value}> {children}</UserContext.Provider>
}