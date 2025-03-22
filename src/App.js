
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Donate from "./pages/Donate";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize animations
  }, []);

  return (
    <Router>
      <div className="container">
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;

