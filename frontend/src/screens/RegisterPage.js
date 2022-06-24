import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "./Register.css"

function RegisterPage() {
  return (
    <div>
        <Navbar/>
        <div className='main'>
            <h1>Register</h1>
            <div className='content'>
                <form id="signform" className='form'>
                    <input type="text" placeholder='enter name'></input>
                    <input type="text" placeholder='enter email'></input>
                    <input type="text" placeholder='enter password'></input>
                    <input type= "text" placeholder='enter phone submit'></input>
                    <input type="submit" value="Submit"/>
                </form>
                <div id="signoption" >
                    <button><h1>As Student</h1></button>
                    <button className='st-btn'><h1>As Teacher</h1></button>
                    <p className='pd'>Note: The default setting is student. For registering as
teacher kindly press as teacher button</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default RegisterPage