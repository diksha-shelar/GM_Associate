import React from "react";
import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./Announcement.css"; // Importing CSS file

const Announcement = () => {
  return (
    <div className="announcement">
      {/* Contact Details */}
      <div className="contact-info">
        📧 Email: <a href="mailto:info@gmassociate.com">info@gmassociate.com</a>{" "}
        | <FaPhone className="icon phone" />{" "}
        <a href="tel:+1234567890">9607311112</a>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer">
          <FaFacebook className="icon facebook" />
        </a>
        <a
          href="https://www.instagram.com/g_m_associates/"
          target="_blank"
          rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a
          href="https://twitter.com" // Replace with the correct Twitter handle
          target="_blank"
          rel="noopener noreferrer">
          <FaTwitter className="icon twitter" />
        </a>
      </div>
    </div>
  );
};

export default Announcement;
