import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "./Profile.css"

function Profile() {
  return (
    <div className='profile'>
        <Navbar/>
        <div className='main'>
            <h1>My Profile</h1>
            <div className='user-info'>
                <h2>Username:<span> arnavaggarwal999000</span></h2>
                <h2>Email:<span> arnavaggarwal999000@gmail.com</span></h2>
                <h2>Password:<span> aa1aa2sam3</span></h2>
                <h2>Phone Number:<span> 9818905646</span></h2>
                <h2>Country:<span> India</span></h2>
                <button className='a'><h2>Edit My Profile</h2></button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Profile