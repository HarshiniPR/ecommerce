import React from 'react'
import './Header.css'
import images from '../../constants/images'
import Navbar from '../Navbar/Navbar'
const Header = () => {
  return (
    <>
      <Navbar />
      <div className="header">
        <div className='header-container'>
          <img src={images.himg1} className='himg1' alt='himg' />
          <div className="head-content">
            <span className="heading">Everyday is a Flower Day!</span>
            <img src={images.vector1} alt="vec1" className='vector1' />
            <span className="desc">we share happiness as flowers</span>
            <button className="start"> Start Shopping</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header