import React from 'react'
import { Link } from 'react-router-dom'
import { login, logout } from '../../services/firebase'

const Nav = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid justify-content-end">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul id="nav-mobile" className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/shop'>Shop</Link>
            </li>
            {user ?
              <>
                <li className="nav-item">
                  <Link className="nav-link" to='/sell'>Sell</Link>
                </li>
                <li className="nav-item" onClick={logout}>
                  <Link className="nav-link" to='/' onClick={logout}>Logout</Link>
                </li>
              </>
              :
              <li className="nav-item">
                <Link className="nav-link" to='/' onClick={login}>Login</Link>
              </li>
            }
            {user ?
              <img id="user-pic" src={user.photoURL} alt={user.displayName} />
              :
              null
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav