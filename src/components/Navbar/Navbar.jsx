import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import images from '../../constants/images'
const Navbar = () => {
      return (
            <>
                  <div className='navbar' >

                        <div className="title">
                              <img src={images.logoblue} alt="logo" className='logo' style={{ margin: "0px 14px" }} />
                              PearlBlossom</div>
                        <ul className='nav-menu'>
                              <li>
                                    <Link to='/'>HOME</Link>
                              </li>
                              <li>
                                    <Link to='/shop'>SHOP</Link>
                              </li>
                              <li>
                                    <Link to='/about'>ABOUT</Link>
                              </li>
                              <li>
                                    <Link to='/terms'>T & C</Link>
                              </li>
                        </ul>
                        <div>
                              <Link to='/wishlist'>
                                    <img src={images.wishlist} alt="wishlist"/>
                              </Link>
                              <img src={images.cart} alt="cart" />
                              <img src={images.user} alt="user-profile" className='user-profile' />
                        </div>
                        {/* <button className="signin-btn">SIGN UP</button> */}
                  </div>
            </>
      )
}

export default Navbar