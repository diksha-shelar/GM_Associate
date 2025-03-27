import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import React Router Link
import { FaChevronDown, FaBars } from "react-icons/fa"; // Import dropdown + menu icon
import "./Navbar.css";
import logo from "../assets/logo new.png"; // Importing the logo

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  return (
    <nav className="navbar">
      {/* Logo and Title */}
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="company-name">Builders & Developers</div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* Navbar Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
          onClick={() => setDropdown(!dropdown)}>
          <span style={{ fontSize: "18px", fontWeight: "bold", color: "#000" }}>
            Projects <FaChevronDown className="dropdown-icon" />
          </span>
          <ul className={`dropdown-menu ${dropdown ? "show" : ""}`}>
            <li>
              <Link to="/completed">Completed</Link> {/* ✅ Fixed path */}
            </li>
            <li>
              <Link to="/ongoing">Ongoing</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="contact">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
