

import React from "react";
import "../assetss/About.css";  // If you have a separate CSS file for About

function About() {
  return (
    <div className="about-section">
      {/* About Us Section */}
      <div className="about-text" data-aos="fade-right">
        <h2>1.About Us</h2>
        <p>
        AFYA ACCORD FOR ALL "3A" has been established with the mandate of fostering equitable community where all individuals, regardless of their socioeconomic status, geographic location, or background, have equitable access to high-quality healthcare, resulting in improved health outcomes for all. The “3A” will use every individual as a platform to achieve the goals of its establishment in Tanzania.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mission-section" data-aos="fade-up">
        <h3>2.Our Mission</h3>
        <p>  
          1. Our mission is to improve public health, reduce health disparities, and strengthen health systems, particularly in underserved regions. We aim to advocate for better healthcare infrastructure, promote sustainable healthcare practices, and increase access to medical resources for those who need it most.
        </p>
        <p> 
            2. Our mission is to enhance health equity through inclusive care, research, education, policy advocacy, digital health and technology, empowering communities to drive social change and access quality healthcare.
       </p>
      </div>

      {/* Vision Section */}
      <div className="vision-section" data-aos="fade-up">
        <h3>3.Our Vision</h3>
        <p>
          We envision a world where everyone, regardless of location or economic status, has access to high-quality healthcare services. Our vision is to work alongside global health organizations and governments to create a more equitable world, where healthcare is a fundamental human right.
        </p>
      </div>

      {/* Image Section */}
      <div className="about-image" data-aos="fade-left">
        <img src="../assetss/image.jpg" alt="About Us" />
      </div>
    </div>
  );
}

export default About;
