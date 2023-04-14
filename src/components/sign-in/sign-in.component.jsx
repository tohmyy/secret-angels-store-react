import { useState, useContext } from "react"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { UserContext } from "../../context/user.context";
import { createAuthUserWithEmailAndPassword, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";

import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { BaseButton } from "../button/button.styles";

import { SignInContainer, ButtonsContainer, Header} from "./sign-in.styles.jsx";
// import {ButtonsContainer, SignInContainer, h2} from './sign-in.styles.jsx'
// import { Auth } from "firebase/auth";

const defaultFormFields = {
    email:'',
    password:'',
}



const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const{email, password} = formFields;

    // const {setCurrentUser, currentUser} = useContext(UserContext)
    
    // console.log(currentUser)
    // console.log(formFields)

    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async()=>{
        await signInWithGooglePopup();
        

        // setCurrentUser(user)
    }

    const handleSubmit= async(event)=>{
        event.preventDefault()

        try{
            const auth = getAuth()
            const user = await signInAuthUserWithEmailAndPassword(email, password)
            
            // setCurrentUser(user) //useContext

            resetFormFields();
            // console.log(auth)
            
        }catch(error){
            console.log(error.message)
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Password you entered is incorrect: ')
                    break;
                case 'auth/auth/user-not-found':
                    alert('Wrong Email Address/Password Combo: ')
                    break;
                case 'auth/too-many-requests':
                    alert('Too Many Login Tries: Account has been placed on Restriction ')
                    break;
                default:
                    console.log(error)

            }
            // console.log("There was an error while creating your account:", error.message)
        }

    }

    const handleChange=(event)=>{
        const {name, value}= event.target; 
        //here name and value is beinf=g destructured from event.target
        setFormFields({...formFields, [name]: value}) 
        //here the value is being set to the key in default form field object (setstate)

    }

  return (
    <SignInContainer>
        <Header>Already Have an Account? </Header>
      <span>Sign In with your email and password</span>
      <form action="" onSubmit={handleSubmit}>

        <FormInput 
        label="Email" 
        type='email' 
        required 
        onChange={handleChange}
        name="email" 
        value = {email} />

        <FormInput 
        label="Password" 
        type='password' 
        required 
        onChange={handleChange}
        name="password" 
        value = {password} />

        <ButtonsContainer>
            <Button type="submit">Sign In</Button>
            <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} type="button">Google Sign In</Button>
            </ButtonsContainer> 
      </form>
      
    </SignInContainer>
  )
}

export default SignIn
