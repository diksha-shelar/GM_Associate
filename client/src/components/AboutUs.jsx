import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./AboutUs.css";
import constructionImg from "../assets/house.jpg";

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="about-container">
      {/* Left Side - Text Content */}
      <div className="about-text">
        <h1>Who We Are</h1>
        <h2>GM Associates Builders and Developers</h2>
        <p>
          We specialize in turning dreams into reality by building high-quality
          homes and commercial properties. Our commitment to excellence and
          innovation makes us a trusted name in the industry.
        </p>
        <button className="read-more" onClick={() => navigate("/about")}>
          Read More
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="about-image">
        <img src={constructionImg} alt="About GM Associates" />
      </div>
    </div>
  );
};

export default AboutUs;
