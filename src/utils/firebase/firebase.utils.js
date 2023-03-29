import {initializeApp} from 'firebase/app';
import {getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider} from 'firebase/auth'

import {GetFireStore, 
        doc, 
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

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters(
    {
        prompt: "select_account"
    }
  )

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth)=>{
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
                createdAt
            });
        }
        catch(err){
                console.log("Error creating the user", err.message)
        }

        }
        return userDocRef;
} 