import React from 'react'
import './Footer.css'
import images from '../../constants/images'

const Footer = () => {
  return (
    <footer>
      <div className="footer-txt">
        <div>
          PearlBlossom</div>
        <div className='middle'>E-Mail: xyz@gmail.com <br />Ph: +91 3645747745</div>
        <div>
          <img src={images.facebook} alt="facebook" className='social' />
        <img src={images.instagram} alt="instagram" className="social" />
          <img src={images.twitter} alt="twitter" className="social" />
        </div>
      </div>
    </footer>
  )
}

export default Footer