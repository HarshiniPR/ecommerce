import React from 'react'
import Header from "../Header/Header";
import Newproducts from "../Newproducts/Newproducts";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import Footer from '../Footer/Footer'
const Home = () => {
    return (
            <div className="home-container">
                <Header />
                <div className="content">
                    <Newproducts />
                    <Features />
                    <Reviews />
                    <Footer />
                </div>
               
            </div>
    )
}

export default Home