import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to='/' style={{padding: 10}}>Home</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to='/sell'>Sell</Link>
            </li>
            <li>
              <Link to='/mylistings'>My Listings</Link>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav