import React from 'react'
import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartItemsContext } from '../../context/cart-items.context'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './header.styles.jsx'
const Navigation = () => {

  const {currentUser} = useContext(UserContext)

  const {openCartState} = useContext(CartItemsContext)
  // console.log(currentUser)

  // const signOutHandler = async ()=>{
  //   await signOutUser()
  //   // setCurrentUser(null)
  // }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>

            <img src="https://cdn.fs.teachablecdn.com/VFIUPvFyQqSCzexfMZe3" alt="logo" />
        </LogoContainer>
        
        <NavLinks>
          {/* <ul> */}
            <NavLink to='/shop'><div>SHOP</div> </NavLink>
        <NavLink to='/contact'><div>CONTACT</div> </NavLink>
        {currentUser ? <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink > : <NavLink to='/auth'><div>SIGN IN</div> </NavLink>}
        
        <CartIcon />
        {/* <li>i</li>   */}
          {/* </ul> */}
          
        </NavLinks>
        {openCartState && <CartDropdown/>}
        
        
      </NavigationContainer>
      <Outlet/>
      </Fragment>

  )
}

export default Navigation

