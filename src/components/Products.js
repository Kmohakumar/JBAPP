import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
    <div>Products Page</div>
    <nav>
        <Link to="featured">Featured link</Link>
        <Link to="new">new products link</Link>
    </nav>
    <Outlet/> 
    </>
  )
}

export default Products