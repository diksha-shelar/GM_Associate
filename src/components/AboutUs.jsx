import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
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
        <button className="read-more">Read More</button>
      </div>

      {/* Right Side - Image */}
      <div className="about-image">
        <img src="/assets/images.jpg" alt="About GM Associates" />
      </div>
    </div>
  );
};

export default AboutUs;
