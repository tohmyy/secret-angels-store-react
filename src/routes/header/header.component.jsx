import React from 'react'
import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import './header.styles.scss'

const Navigation = () => {

  const {currentUser} = useContext(UserContext)
  // console.log(currentUser)

  // const signOutHandler = async ()=>{
  //   await signOutUser()
  //   // setCurrentUser(null)
  // }

  return (
    <Fragment>
      <div className='Navbar'>
        <Link className="Logo-Container" to='/'>

            <img src="https://cdn.fs.teachablecdn.com/VFIUPvFyQqSCzexfMZe3" alt="logo" />
        </Link>
        
        <div className='Navbuttons'>
          {/* <ul> */}
            <Link className='NavLinks' to='/shop'><div>SHOP</div> </Link>
        <Link className='NavLinks' to='/contact'><div>CONTACT</div> </Link>
        {currentUser ? <span className='nav-link' onClick={signOutUser}>SIGN OUT</span > : <Link className='NavLinks' to='/auth'><div>SIGN IN</div> </Link>}
        
        
        {/* <li>i</li>   */}
          {/* </ul> */}
          
        </div>
        
      </div>
      <Outlet/>
      </Fragment>

  )
}

export default Navigation

