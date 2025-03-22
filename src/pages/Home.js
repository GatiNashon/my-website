import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import activityImage1 from "../assetss/activity1.jpg";
import activityImage2 from "../assetss/activity2.jpg";
import activityImage3 from "../assetss/activity3.jpg";
import serviceImage1 from "../assetss/project1.jpg";
import serviceImage2 from "../assetss/project2.jpg";
import serviceImage3 from "../assetss/project3.jpg";
function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animation
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Our Organization</h1>
          <p>Making a difference in global health & community services.</p>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities">
        <h2 data-aos="fade-up">Our Activities</h2>
        <div className="activity-gallery">
          <div className="activity-card" data-aos="fade-right">
          { /*<img src="/assetss/activity1.jpg" alt="Medical Camp" /> hgjg*/}
           <img src={activityImage1} alt="Medical Camp" />
            <h3>Medical Camps</h3>
          </div>
          <div className="activity-card" data-aos="fade-up">
            {/*<img src="/assetss/activity2.jpg" alt="Water Project" />*/}
            <img src={activityImage2} alt="Medical Camp" />
            <h3>Clean Water Projects</h3>
          </div>
          <div className="activity-card" data-aos="fade-left">
            {/*<img src="/assetss/activityImage3.jpg" alt="Education Program" />*/}
            <img src={activityImage3} alt="Medical Camp" />
            <h3>Education Programs</h3>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services">
        <h2 data-aos="fade-up">Our Services</h2>
        <div className="service-gallery">
          <div className="service-card" data-aos="zoom-in">
           {/*<img src="/assetss/project1.jpg" alt="Project 1" />*/}
            <img src={serviceImage1} alt="project1" />
            <h3>Emergency Response</h3>
            <p>Providing medical support during disasters.</p>
          </div>
          <div className="service-card" data-aos="zoom-in">
            {/*<img src="/assetss/project2.jpg" alt="Project 2" />*/}
            <img src={serviceImage2} alt="project2" />
            <h3>Health Education</h3>
            <p>Training communities for better health practices.</p>
          </div>
          <div className="service-card" data-aos="zoom-in">
           {/* <img src="/assetss/project3.jpg" alt="Project 3" />*/}
            <img src={serviceImage3} alt="project3" />
            <h3>Child Nutrition Programs</h3>
            <p>Improving child health through better nutrition.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
