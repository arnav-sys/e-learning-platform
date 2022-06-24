import React from 'react'
import "./component.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <h2 className='logo-txt'>Teachers.co</h2>
        </div>
        <div className='nav-btn'>
            <a href='/signin'><h3>Signin</h3></a>
            <a href='/register'><h3>Register</h3></a>
        </div>
    </div>
  )
}

export default Navbar