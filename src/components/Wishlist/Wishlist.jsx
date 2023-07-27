import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Wishlist.css';
import images from '../../constants/images';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const initialList = [
    { id: 1, title: 'card-1', text: 'Hello this is to remove' },
    { id: 2, title: 'card-2', text: 'Item no 2' },
    { id: 3, title: 'card-3', text: 'Item no 3' },
    { id: 4, title: 'card-4', text: 'Item no 4' },
    { id: 5, title: 'card-5', text: 'Item no 5' },
    { id: 6, title: 'card-6', text: 'Item no 6' },
    { id: 7, title: 'card-7', text: 'Item no 7' },
];
const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState(initialList);

    const handleRemoveItem = (itemId) => {
        const updateItem = wishlistItems.filter(item => item.id !== itemId);
        setWishlistItems(updateItem)
    };

    return (
        <>
            <div className="wish-container">
                <Navbar />
                <div className="wish-content">
                    Wishlist
                    <button className='move'>Move  All  to  Cart</button>
                </div>
                <img src={images.hline} alt="hline" style={{ marginTop: '1.4rem' }} />
                <div className="main">
                    <div className="row mx-3">
                        {wishlistItems.map(item => (
                            <div className=" my-3 mx-auto col-md-3" key={item.id}>
                                <div className="card" style={{ width: '16rem' }}>
                                    <img src={images.fl1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.text}</p>
                                        <div className="wish-btn">
                                            <Link to="/" className="btn btn-dark">Add to Cart</Link>
                                            <button style={{border:'none'}} onClick={() => handleRemoveItem(item.id)}>
                                                <img src={images.trash} alt="trash" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Wishlist