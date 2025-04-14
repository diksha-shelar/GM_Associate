import React from "react";
import "./contact.css";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="about-banner">Contact Us</div>

      <div className="contact-container">
        <h1 className="company-name">GM Associate Builders and Developers</h1>
        <h3 className="company-subtitle">Gajare & Matale</h3>

        <h2 className="section-title">The Corporate Office</h2>

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

        <div className="contact-item">
          <FaEnvelope className="contact-icons" />
          <div>
            <h4 className="contact-title">Email:</h4>
            <p className="contact-text">info@gmassociates.com</p>
          </div>
        </div>

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
