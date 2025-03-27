import React from "react";
import "./Footer.css";
import logo from "../assets/logo new.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Section with Blur Background */}
      <div className="footer-top">
        <div className="footer-top-overlay">
          <h2>Work With Us</h2>
          <p>Your Trusted Construction Partner</p>
        </div>
      </div>

      {/* Bottom Footer Content */}
      <div className="footer-bottom">
        {/* Left Section - Logo & Description */}
        <div className="footer-left">
          <img
            src={logo}
            alt="Gajare & Matale Builders"
            className="footer-logo"
          />
          <p>Gajare & Matale Builders</p>
          <p>Building Excellence with Integrity</p>
          <div className="footer-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebookF className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/g_m_associates/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        {/* Center Section - Contact Info */}
        <div className="footer-center">
          <h3>CONTACT INFO</h3>
          <p>
            <FaMapMarkerAlt className="contact-icon" /> Office Address, City,
            Country
          </p>
          <p>
            <FaEnvelope className="contact-icon" /> info@gmbuilders.com
          </p>
        </div>

        {/* Right Section - Quick Links */}
        <div className="footer-right">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <FaArrowRight className="link-icon" /> About Us
            </li>
            <li>
              <FaArrowRight className="link-icon" /> Completed Projects
            </li>
            <li>
              <FaArrowRight className="link-icon" /> Ongoing Projects
            </li>
            <li>
              <FaArrowRight className="link-icon" /> Services
            </li>
            <li>
              <FaArrowRight className="link-icon" /> Gallery
            </li>
            <li>
              <FaArrowRight className="link-icon" /> Contact
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
