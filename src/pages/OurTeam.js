import React from "react";
import "./OurTeam.css";

import activityImage1 from "../assetss/neema.jpg";
import activityImage2 from "../assetss/gati.jpg";
import activityImage3 from "../assetss/nashon.jpg";
import activityImage4 from "../assetss/mono.jpg";
const teamMembers = [
  {
    name: "Dr.Neema Jeremiah Mrimi",
    position: "CEO & Founder",
    image: activityImage1,
    description: "Dr.Neemais passionate about leadership and innovation.",

  },
  {
    name: "Eng.Gati Nashon Iroga",
    position: "Project Manager",
    image: activityImage2,
    description: "Eng.Gati oversees all major projects with precision and care.",
  },
  {
    name: "Nashon Gati Iroga",
    position: "Software Engineer",
    image: activityImage3,
    description: "Nashon develops cutting-edge technology solutions.",
  },
  {
    name: "Muhono Gati Iroga",
    position: "Marketing Specialist",
    image: activityImage4,
    description: "Muhono creates marketing strategies to boost engagement.",
  },
];

const OurTeam = () => {
  return (
    <div className="team-container">
      <h1>Meet Our Team</h1>
      <p>We are a passionate team dedicated to making an impact.</p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p className="position">{member.position}</p>
            <p className="description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
