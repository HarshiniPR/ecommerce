import React from "react";
import "./Newproducts.css";
import images from "../../constants/images";
const Newproducts = () => {
  return (
    <>
      <div className="info">
        <div className="info1">
          <img src={images.spec1} className="spec1" alt="spec1" />
          <span>Easy Delivery</span>
        </div>
        <div className="info1">
          <img src={images.spec2} className="spec2" alt="spec2" />
          <span>Online Order</span>
        </div>
        <div className="info1">
          <img src={images.spec3} className="spec3" alt="spec3" />
          <span>Freshness</span>
        </div>
        <div className="info1">
          <img src={images.spec4} className="spec4" alt="spec4" />
          <span>Atristic</span>
        </div>
      </div>
      <div className="newproducts">
        <p className="prod-title">New Products</p>
        <p className="descr"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          dignissim consequat mauris.</p>

        <div className="prod-container font-style2">
          <div className="prodoct">
            <img src={images.rose} alt="rose" className="prod-img" />
            <div className="btns">
              <img src={images.heart} alt="heart"  className="heart-img" />
              <img src={images.bag} alt="bag" className="bag-img" />
            </div>

            <p className="prod-name">Rose</p>
            <p className="prod-price">Rs. 50</p>
          </div>
          <div className="prodoct">
            <img src={images.lily} alt="lily" className="prod-img" />
            <div className="btns">
              <img src={images.heart} alt="heart" className="heart-img" />
              <img src={images.bag} alt="bag" className="bag-img" />
            </div>
            <p className="prod-name">Lily</p>
            <p className="prod-price">Rs. 100</p>
          </div>

          <div className="prodoct">
            <img src={images.tulip} alt="tulip" className="prod-img" />
            <div className="btns">
              <img src={images.heart} alt="heart" className="heart-img"  />
              <img src={images.bag} alt="bag" className="bag-img" />
            </div>
            <p className="prod-name">Tulip</p>
            <p className="prod-price">Rs. 250</p>
          </div>
          <div className="prodoct">
            <img src={images.daffo} alt="daffo" className="prod-img" />
            <div className="btns">
              <img src={images.heart} alt="heart" className="heart-img" />
              <img src={images.bag} alt="bag" className="bag-img" />
            </div>
            <p className="prod-name">Daffodil</p>
            <p className="prod-price">Rs. 200</p>
          </div>

        </div>

      </div>
    </>
  );
};

export default Newproducts;
