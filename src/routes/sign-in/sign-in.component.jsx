import React from 'react'
import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import Button from '../../components/button/button.component'
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import SignUp from '../../components/sign-up/sign-up.component'
const SignIn = () => {
  // useEffect(()=>{
  //   const fetchResponse = async()=>{
  //     const response = await getRedirectResult(auth)
  //     if(response){
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //     console.log(response)

  //   } 
  //   fetchResponse()
  // }, [])

    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        // console.log(user)
    }

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button onClick={logGoogleUser} buttonType={"google"}>Sign In With Google Popup</Button>
      {/* <button onClick={logGoogleUser}>Sign In With Google Popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
      <SignUp/>
    </div>
  )
}

export default SignIn
