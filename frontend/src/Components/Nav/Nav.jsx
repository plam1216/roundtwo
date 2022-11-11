import React from 'react'
import { Link } from 'react-router-dom'
import { login, logout } from '../../services/firebase'

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          {user ?
            <>
              <li>
                <Link to='/sell'>Sell</Link>
              </li>
              <li onClick={logout}>
                <Link to='/' onClick={logout}>Logout</Link>
              </li>
            </>
            :
            <li>
              <Link to='/' onClick={login}>Login</Link>
            </li>
          }
          {user ?
            <img src={user.photoURL} alt={user.displayName} />
            :
            null
          }
        </ul>
      </div>
    </nav>
  )
}

export default Nav