import {initializeApp} from 'firebase/app';
import {getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        } from 'firebase/auth'

import { doc, 
        getDoc, 
        setDoc,
        getFirestore} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyD8t1029qavTZ_AYTksIJAee1biMxG2e_w",
    authDomain: "secret-angels-db.firebaseapp.com",
    projectId: "secret-angels-db",
    storageBucket: "secret-angels-db.appspot.com",
    messagingSenderId: "868633768464",
    appId: "1:868633768464:web:24810990bef3a272b0d095"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters(
    {
        prompt: "select_account"
    }
  )

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth, additionalInfo={})=>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)

    // Check if user data exists in db, if not then 
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        }
        catch(err){
                console.log("Error creating the user", err.message)
        }

        }
        return userDocRef;
} 
export const createAuthUserWithEmailAndPassword = async(email, password)=>{
//     const auth = getAuth()
    if(!email || !password) return;    
    return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async(email, password)=>{
//     const auth = getAuth()
    if(!email || !password) return;    
    return await signInWithEmailAndPassword(auth, email, password);
}