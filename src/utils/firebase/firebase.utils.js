import {initializeApp} from 'firebase/app';
import {getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
        } from 'firebase/auth'

import { doc, 
        getDoc, 
        setDoc,
        getFirestore, 
        collection, 
        writeBatch,
        getDocs,
        query,} from 'firebase/firestore'



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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object)=>{
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)
    })
    await batch.commit()
    console.log('done')
}   

export const getCategoriesAndDocuments = async () => {
        const collectionRef = collection(db, 'categories')
        const q = query(collectionRef)
        
        const querySnapshot = await getDocs(q);
        // querySnapshot.docs
        // note: snapshots is the actual data from the database
        const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
            const {title, items} = docSnapshot.data();
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
        // sets the default instance of the collection = {} i.e. empty array
        
        return categoryMap


    }



export const createUserDocumentFromAuth = async(userAuth, additionalInfo={})=>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)
    // note: snapshots is the actual data from the database
    console.log(userSnapshot)

    // Check if user data exists in db, if not then creates a user document
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
        // if user exists, it return user document/data
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

export const signOutUser = async ()=> { 
    await signOut(auth)
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

