import React from 'react'
import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import Button from '../../components/button/button.component'
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import SignUp from '../../components/sign-up/sign-up.component'
import SignIn from '../../components/sign-in/sign-in.component'
import FormInput from '../../components/form-input/form-input.component'
// import FormInput from "../form-input/form-input.component";
import {AuthPageContainer, SignInContainer} from './authentication.styles.jsx'
const Authentication = () => {
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
    <AuthPageContainer>

      <SignInContainer>
        <SignIn/>
       {/* <form> */}
        {/* <FormInput
          label="Display Name" 
          type='email'
          required 
          name="displayName" 
          /></form> */}
       {/* <FormInput
          type='password'
          label="Display Name" 
          required 
          // onChange={handleChange}
          name="displayName" 
          // value = {displayName}
          />
          <Button onClick={logGoogleUser} buttonType={"google"}>Sign In With Google Popup</Button>
 
      </form> */}
      
      
           {/* <button onClick={logGoogleUser}>Sign In With Google Popup</button> */}
      
      </SignInContainer>
    
    {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
      
      <SignUp/>
    </AuthPageContainer>
  )
}

export default Authentication
