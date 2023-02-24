import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav' style={{display:'flex',gap:'1rem'}}>
      <Link to='/'>Home
      </Link>
      <Link to='/login'>Login</Link>
      <Link to='/dashboard'>Dashboard</Link>
    </div>
  )
}

export default Navbar
