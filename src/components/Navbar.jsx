import React, { useState } from "react";
import "./Navbar.css";
import { FaChevronDown, FaBars } from "react-icons/fa"; // Import dropdown + menu icon

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  return (
    <nav className="navbar">
      {/* Logo and Title */}
      <div className="logo-container">
        <a href="/" className="logo-link">
          <img src="/assets/logo new.png" alt="Logo" className="logo" />
        </a>
        <div className="company-name">Builders & Developers</div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* Navbar Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
          onClick={() => setDropdown(!dropdown)}>
          <a href="/projects">
            Projects <FaChevronDown className="dropdown-icon" />
          </a>
          <ul className={`dropdown-menu ${dropdown ? "show" : ""}`}>
            <li>
              <a href="/projects/part1">Completed</a>
            </li>
            <li>
              <a href="/projects/part2">Ongoing</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li className="contact">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
