import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/sell'>Sell</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav