import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <li
    </nav>
  )
}

export default Navbar