import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <div className='main-content'>
            <div className='txt-content'>
                <h1 className='txt'><span className='li'>A new way of </span>Online teaching <br/> for our students. <span className='li'>All new edtech <br/> platform </span>for a better future</h1>
                <button className='sign-btn'>Sign up now</button>
            </div>
            <div className='img-content'>
                <img className='p-img' src='https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?size=338&ext=jpg'></img>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home