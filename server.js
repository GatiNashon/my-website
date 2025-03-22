/*// Import necessary packages
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json()); // To parse JSON data sent in the body of requests
app.use(cors()); // To allow your React frontend to communicate with this backend

// POST route for contact form submission
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using your email service credentials (Gmail in this case)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail's email service
    auth: {
      user: process.env.EMAIL, // Your email from .env file
      pass: process.env.EMAIL_PASSWORD, // Your app password from .env file
    },
  });

  // Setup email details
  const mailOptions = {
    from: email, // Sender's email address
    to: process.env.EMAIL, // Receiver's email (your email address)
    subject: `Message from ${name}`,
    text: `You have received a message from ${name} (${email}):\n\n${message}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending message.' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
*/

/*const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // (Optional) Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-password",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "info@afya4all.com",
      subject: `New Message from ${name}`,
      text: message,
    });

    res.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
*/

/*
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express(); // ✅ This defines `app`
app.use(cors());
app.use(bodyParser.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Change if needed
  password: "Gati@1988", // Your MySQL password
  database: "contactDB",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      res.status(500).json({ message: "Error saving message." });
    } else {
      res.json({ message: "Message saved successfully!" });
    }
  });
});
*/

/* const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Your MySQL username
  password: "", // Your MySQL password
  database: "contactDB",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// API Route for Contact Form Submission
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Error saving message." });
    }
    res.json({ message: "Message sent successfully!" });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
*/


const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express(); // ✅ Define `app` first

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Setup MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost", // Change if using an external database
  user: "root",      // Your MySQL username
  password: "Gati@1988",      // Your MySQL password (leave empty if none)
  database: "contactDB", // The database you created
});

// ✅ Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

// ✅ API Route to Handle Contact Form Submission
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("❌ Database error:", err);
      return res.status(500).json({ message: "Error saving message." });
    }
    res.json({ message: "✅ Message sent successfully!" });
  });
});

// ✅ Start the Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
