import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";

// see this as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null 
    //base empty state of currentUser has to be null, which means 0 or false
    //using an empty

})

// see this as the actual component, thats made use of
export const UserProvider =({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}

    // signOutUser()
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