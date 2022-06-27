import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "./Main.css"

function TeacherCourse() {
  return (
    <div className="m">
    <Navbar/>
    <h1 className='c'><span className='sp'>Your Courses</span></h1>
    <h6>Note: tap  on the course you want to edit</h6>
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

export default TeacherCourse