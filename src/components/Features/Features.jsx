import React from 'react'
import './Features.css'
import images from '../../constants/images'
const Features = () => {
  return (
    <>
      <div className='ads font-style1'>
        <img src={images.add} alt="ad-img" />
        <div className="descrip">
          <p>Suprise Your Valentine! Let us arrange a smile For Her.  </p>
          Where flowers are our inspiration to create lasting memories..
          <br /><br />
          <li>Hand picked just for you.</li>
          <li>Hand picked just by you.</li>
          <li>Hand picked just for.</li>
        </div>
      </div>
      <div className="feature">
        <p className="prod-title">Our Featured</p>
        <p className="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim consequat mauris.</p>
        <p className="font-style1 all-feature">
          <span>NEW</span>
          <span>FEATURED</span>
          <span>BESTSELLERS</span>
        </p>

        <div className="flower-container font-style2">
          <div className="prodoct">
            <img src={images.fl1} alt="fl1" className="prod-img" />
            <p className="prod-name">Pink Rose</p>
            <p className="prod-price">Rs. 50</p>
          </div>
          <div className="prodoct">
            <img src={images.fl2} alt="fl2" className="prod-img" />
            <p className="prod-name">Bridal Bouquet</p>
            <p className="prod-price">Rs. 100</p>
          </div>
          <div className="prodoct">
            <img src={images.fl3} alt="fl3" className="prod-img" />
            <p className="prod-name">Love Vase</p>
            <p className="prod-price">Rs. 250</p>
          </div>
          <div className="prodoct">
            <img src={images.fl4} alt="fl4" className="prod-img" />
            <p className="prod-name">Love Bouquet</p>
            <p className="prod-price">Rs. 200</p>
          </div>
          </div>

          <div className="flower-container2 font-style2">

            <div className="prodoct">
              <img src={images.fl5} alt="fl5" className="prod-img" />
              <p className="prod-name">Pink Rose</p>
              <p className="prod-price">Rs. 50</p>
            </div>
            <div className="prodoct">
              <img src={images.fl6} alt="fl6" className="prod-img" />
              <p className="prod-name">Bridal Bouquet</p>
              <p className="prod-price">Rs. 100</p>
            </div>

            <div className="prodoct">
              <img src={images.fl7} alt="fl7" className="prod-img" />
              <p className="prod-name">Love Vase</p>
              <p className="prod-price">Rs. 250</p>
            </div>
            <div className="prodoct">
              <img src={images.fl8} alt="fl8" className="prod-img" />
              <p className="prod-name">Love Bouquet</p>
              <p className="prod-price">Rs. 200</p>
            </div>
          </div>



      </div>

    </>
  )
}

export default Features