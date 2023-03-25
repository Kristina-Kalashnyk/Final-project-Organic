import React from 'react';
import FirstImage from '../img/main/main-image-1.jpg';
import SecondImage from '../img/main/main-image-2.jpg';

const Introduction = () => {
    return (  
      <section className="introduction">
        <img className="hero__card-bg" src={FirstImage} alt="First pic" />
        <img className="hero__card-bg" src={SecondImage} alt="Second pic" />
      </section>
    )
}

export default Introduction