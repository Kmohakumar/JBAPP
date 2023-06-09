import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './auth'

function Navbar() {
  const auth = useAuth()
  return (
    <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        {!auth.user && (
          <NavLink to='/'>login</NavLink>
        )}
    </nav>
  )
}

export default Navbar