import React from 'react';
import MyButton from './MyButton';
import AboutMainImage from "../img/about/about-main-image.png";

const About = () => {
    return (
        <section className="about">
        <img src={AboutMainImage} alt="About pic"/>
        <MyButton>Shop Now</MyButton>
        </section>
    )
}

export default About;
