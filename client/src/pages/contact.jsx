import React from "react";
import "./contact.css"; // Ensure correct path
import Navbar from "../components/Navbar"; // Adjust path as needed
import Announcement from "../components/Announcement"; // Adjust path as needed
import Footer from "../components/Footer"; // Adjust path as needed
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons

const Contact = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="about-banner">Contact Us</div>

      <div className="contact-container">
        {/* Company Name */}
        <h1 className="company-name">GM Associate Builders and Developers</h1>
        <h3 className="company-subtitle">Gajare & Matale</h3>

        {/* Corporate Office Section */}
        <h2 className="section-title">The Corporate Office</h2>

        {/* Address Section */}
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icons" />
          <div>
            <h4 className="contact-title">Address:</h4>
            <p className="contact-text">
              123, Business Avenue, Near Landmark Tower, <br />
              Pune, Maharashtra, India - 411001
            </p>
          </div>
        </div>

        {/* Email Section */}
        <div className="contact-item">
          <FaEnvelope className="contact-icons" />
          <div>
            <h4 className="contact-title">Email:</h4>
            <p className="contact-text">info@gmassociates.com</p>
          </div>
        </div>

        {/* Phone Section */}
        <div className="contact-item">
          <FaPhone className="contact-icons" />
          <div>
            <h4 className="contact-title">Phone:</h4>
            <p className="contact-text">+91 98765 43210</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
