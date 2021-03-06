import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "./Main.css"

function Main() {
  let count = 0
  let style = {
    width:"25rem"
  }

  let bstyle = {
    marginTop:"2%"
  }
  return (
    <div className="m">
        <Navbar/>
        <h1 className='c'>Courses <span className='sp'>by our top teachers</span></h1>
        <div className='row'>
          <div className='column'>
            <div className='card'>
              <img src="https://images.freeimages.com/images/small-previews/76e/abstract-1-1174741.jpg"></img>
              <h1>Course title by author</h1>
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <img src="https://images.freeimages.com/images/small-previews/76e/abstract-1-1174741.jpg"></img>
              <h1>Course title by author</h1>
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <img src="https://images.freeimages.com/images/small-previews/76e/abstract-1-1174741.jpg"></img>
              <h1>Course title by author</h1>
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <img src="https://images.freeimages.com/images/small-previews/76e/abstract-1-1174741.jpg"></img>
              <h1>Course title by author</h1>
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <img src="https://images.freeimages.com/images/small-previews/76e/abstract-1-1174741.jpg"></img>
              <h1>Course title by author</h1>
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <img src="https://images.freeimages.com/images/small-previews/76e/abstract-1-1174741.jpg"></img>
              <h1>Course title by author</h1>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Main