import React from 'react'
import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './header.styles.scss'

const Navigation = () => {
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
        <Link className='NavLinks' to='/auth'><div>SIGN IN</div> </Link>
        {/* <li>i</li>   */}
          {/* </ul> */}
          
        </div>
        
      </div>
      <Outlet/>
      </Fragment>

  )
}

export default Navigation

