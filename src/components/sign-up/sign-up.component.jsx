import { useState, useContext } from "react"
import { UserContext } from "../../context/user.context";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";
import './sign-up.styles.scss'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
// import { Auth } from "firebase/auth";

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}



const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const{displayName, email, password, confirmPassword} = formFields;

    // const {setCurrentUser, currentUser} = useContext(UserContext)
    
    // console.log(currentUser)
    // console.log(formFields)

    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit= async(event)=>{
        event.preventDefault()
        // event.target[2].value==event.target[3].value?
        // // alert('successful') event.target[1].value =email
        // :console.log('passwords dont match')

        if(password!==confirmPassword){
            alert("passwords dont match")
            return;
        }

        try{
            const auth = getAuth()
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            // const userDocRef = await createUserDocumentFromAuth(response.user)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()

            // setCurrentUser(user) //useContext

            // console.log(currentUser)
            // console.log(user)
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot Create Account: Your Email Is Already In Use, Try Signing ')
            }
            // console.log("There was an error while creating your account:", error.message)
        }

    }

    const handleChange=(event)=>{
        const {name, value}= event.target; 
        //here name and value is beinf=g destructured from event.target
        setFormFields({...formFields, [name]: value}) 
        //here the value is being set to the key in default form field object (setstate)
        // event.target.name=='displayName'?console.log(event.target.value):console.log('cant find field name')
        // console.log(displayName)
    }

  return (
    <div className="sign-up-container">
        <h2>Don't have an account? </h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput 
        label="Display Name" 
        type='text' 
        required 
        onChange={handleChange}
        name="displayName" 
        value = {displayName} />

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

        <FormInput 
        label="Confirm Password" 
        type='password2' 
        required 
        onChange={handleChange}
        name="confirmPassword" 
        value = {confirmPassword} />

        {/* <label id="name" >Display Name</label>
        <input type="text" id="name" className="name" placeholder="Full Name" required onChange={handleChange} name="displayName" value={displayName}/>
        <label id="Email" >Email</label>
        <input type="email" id="Email"  className="email"placeholder="Email" required onChange={handleChange} name="email" value={email}/>
        <label id="password" >Password</label>
        <input type="password" id="password" className="password" placeholder="Password" required onChange={handleChange} name="password" value={password}/>
        <label id="confirm-password" >Confirm Password</label>
  <input type="password" id="confirm-password" className="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/> */}
      
        {/* <button type="submit">Submit</button> */}
        {/* <Button buttonType={'google'} type='submit'>Sign Up with 🔎</Button>
        <Button buttonType={'inverted'} type='submit'>Sign Up with </Button> */}
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp
