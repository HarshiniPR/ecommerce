import React from 'react'
import './Reviews.css'
import images from "../../constants/images";

const Reviews = () => {
  return (
    <div className="review">
      <p className="prod-title">Happy Clients</p>
      <div className="clients">
        <div className="rev">
          <img src={images.ellreview} alt="rev-img" className='rev-img' />
          <p className="name">Name</p>
          <p className="rev-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim consequat mauris, et iaculis augue.</p></div>
        <div className="rev">
          <img src={images.ellreview} alt="rev-img" className='rev-img' />
          <p className="name">Name</p>
          <p className="rev-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim consequat mauris, et iaculis augue.</p></div>
        <div className="rev">
          <img src={images.ellreview} alt="rev-img" className='rev-img' />
          <p className="name">Name</p>
          <p className="rev-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim consequat mauris, et iaculis augue.</p></div>
      </div>
    </div>
  )
}

export default Reviews