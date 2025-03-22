import React, { useState } from "react";
import { Link } from "react-router-dom"; // For navigation between pages
import "./Navbar.css"; // Import the CSS file for styling
import logo from '../assetss/logo.jpg';  // Adjust the path if needed
import "./logo.css"; // Import the CSS file for styling


const Navbar = () => {
  const [clicked, setClicked] = useState(false); // For toggling the mobile menu
  
  const handleClick = () => setClicked(!clicked);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className={`nav-links ${clicked ? "active" : ""}`}>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/mission">Mission</Link></li>
          <li><Link to="/ourteam">OurTeam</Link></li>


        </ul>
      </div>
      <div className="hamburger" onClick={handleClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
