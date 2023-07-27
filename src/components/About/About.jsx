import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'
import images from '../../constants/images';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <>
            <div className="about-container">
                <Navbar />
                <div className="content">
                    <div className="about">
                        <img src={images.upper} alt="Upper" className="up" />
                        <div className="ctr-content">

                            About Us

                            <img src={images.middle} alt="Middle" className="mid" />
                        </div>

                        <img src={images.lower} alt="Lower" className="low" />


                    </div>
                    <span className="abt"> flowers have a unique ability to convey <br /> emotions and brighten any occasion</span>
                    <img src={images.abtimg} alt="abt" className="abt-style" />
                    <div className="abt-content">

                        <li className='abt-list'>
                            <img src={images.leaf} alt="leaf" className='leaf' />
                            From stunning bouquets to enchanting floral centerpieces, our collection caters to all tastes and preferences.</li>
                        <li className='abt-list'>
                            <img src={images.leaf} alt="leaf" className='leaf' />
                            We offer a diverse range of flower types, colors, and styles, allowing you to find the perfect arrangement for any occasion.</li>
                        <li className='abt-list'>
                            <img src={images.leaf} alt="leaf" className='leaf' />
                            We understand that each customer is unique, and we take pride in providing a personalized shopping experience.</li>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default About