import React from 'react'
import {BaseButton, GoogleSignInButton, InvertedButton} from './button.styles.jsx'



export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted'
}
 const getButton = (buttonType=BUTTON_TYPE_CLASSES.base)=>(
  // gets buttonType that is passed when calling button component, sets default to BUTTON_TYPE_CLASSES.base
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    // if BUTTON_TYPE_CLASSES.google it will return GoogleSignInButton Component

    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton    
    // if inverted is passed, it will return Inverted Component
  }[buttonType]
  )
 

const Button = ({children, buttonType, ...otherProps}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton { ...otherProps}>
        {children}
    </CustomButton>
  )
}

export default Button
