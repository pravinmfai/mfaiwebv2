import React from 'react'
import DummyImg from '../assets/dummy_about_mfai.png'
import arrow from '../assets/arrow.png'
import '../styles/joinus.css'


const Joinus = () => {
  return (
    <div className='section-meet'>
      <div className='container-meet'>
        <div className='content-meet'> 
          <h1 className='cm-text'>Want to grow your business with us ?</h1>
          <button className='content-meet-button'>
            <span>Book a Meet</span>
            <img src={arrow} alt=""></img></button>
          </div>
        <div className='image-meet'>
          <img src={DummyImg} alt=""/>
        </div>

      </div>
      
    </div>
  )
}

export default Joinus;
