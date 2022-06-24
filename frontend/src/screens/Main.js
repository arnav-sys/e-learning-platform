import React from 'react'
import Navbar from '../components/Navbar'
import "./Main.css"

function Main() {
  return (
    <div>
        <Navbar/>
        <h1>Courses <span className='sp'>by our top teachers</span></h1>
    </div>
  )
}

export default Main