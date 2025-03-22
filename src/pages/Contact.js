
/*import React from "react";
import "./Contact.css"; // Ensure this file exists and is correctly imported

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" required />

          <label>Email:</label>
          <input type="email" placeholder="Your Email" required />

          <label>Message:</label>
          <textarea placeholder="Your Message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>CONTACT US</h2>
        <p><strong>Call us:</strong></p>
        <p>Tel: +255 714832844</p>
        <p>Fax: +4915753445999</p>
        <p>Email: info@afya4all.com</p>

        <p><strong>Find us:</strong></p>
        <p><strong>Dar es salaam:</strong></p>
        <p>Posta kinondoni</p>
        <p>Tanzania</p>

        <p><strong>Berlin:</strong></p>
        <p>Goeckestrasse 33a.</p>
        <p>German</p>
      </div>
    </div>
  );
};

export default Contact;
*/

import React, { useState } from "react";
import "./Contact.css"; // Ensure this file exists

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message:</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>CONTACT US</h2>
        <p><strong>Call us:</strong></p>
        <p>Tel: +255 714832844</p>
        <p>Fax: +4915753445999</p>
        <p>Email: info@afya4all.com</p>

        <p><strong>Find us:</strong></p>
        <p><strong>Dar es Salaam:</strong></p>
        <p>Posta Kinondoni</p>
        <p>Tanzania</p>

        <p><strong>Berlin:</strong></p>
        <p>Goeckestrasse 33a</p>
        <p>Germany</p>
      </div>
    </div>
  );
};

export default Contact;



