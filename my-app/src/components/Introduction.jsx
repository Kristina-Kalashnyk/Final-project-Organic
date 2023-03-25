import React from 'react';
import MyButton from "./MyButton";
import BgImage from "../img/main/bg-image.png";
import FirstImage from '../img/main/main-image-1.jpg';
import SecondImage from '../img/main/main-image-2.jpg';

const Introduction = () => {
    return (  
      <section className="introduction">
        <div className="introduction__main">
        <div className="container">
          <div className="introduction__content">
            <div className="introduction__info">
              <h3 className="introduction__suptitle">100% Natural Food</h3>
              <h1 className="hero__title">
                Choose the best healthier way of life
              </h1>
              <MyButton bgColor={"yellow"}>Explore Now</MyButton>
            </div>
          </div>
        </div>
        <div className="hero__bg">
          <img src={BgImage} alt="hero..." />
        </div>
      </div>
      <div className="hero__footer">
        <div className="container">
            <div className="hero__cards">
                <div className="hero__card">
                    <span>Natural!!</span>
                    <h3>Get Garden Fresh Fruits</h3>
                    <img className="hero__card-bg" src={FirstImage} alt="hero card img" />
                </div>
                <div className="hero__card">
                    <span>Offer!!</span>
                    <h3>Get 10% off on Vegetables</h3>
                    <img className="hero__card-bg" src={SecondImage} alt="hero card img" />
                </div>
            </div>
        </div>
      </div>
      </section>
    )
}

export default Introduction;