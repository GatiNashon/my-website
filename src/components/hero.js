import React from "react";
import "./Hero.css"; 

function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1 data-aos="fade-up">Making a Difference Together</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Join us in our mission to bring change.
        </p>
        <button className="cta-button" data-aos="zoom-in" data-aos-delay="400">
          Get Involved
        </button>
      </div>
    </div>
  );
}

export default Hero;
