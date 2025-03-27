import React, { useState } from "react";
import "./MissionVision.css";

// Import image
import missionImage from "../assets/images.webp";

const MissionVision = () => {
  const [showVision, setShowVision] = useState(false);
  const [showMission, setShowMission] = useState(false);

  return (
    <div className="mission-vision-container">
      {/* Left Side - Mission & Vision */}
      <div className="text-section">
        <h1 className="title">GM Associate Builders & Developers</h1>
        <p className="description">
          GM Associate Builders & Developers is a leading construction company
          known for its innovative and high-quality projects. With years of
          expertise in residential, commercial, and industrial development, we
          are committed to excellence, sustainability, and customer
          satisfaction. Our team of experienced professionals ensures that every
          project is built to the highest standards, combining modern design
          with functional efficiency.
        </p>

        <div className="benefits-list">
          <h2 className="section-heading">Benefits</h2>
          <ul>
            <li>
              <span className="benefit-icon">✔</span> High-quality construction
            </li>
            <li>
              <span className="benefit-icon">✔</span> Modern and sustainable
              designs
            </li>
            <li>
              <span className="benefit-icon">✔</span> Customer-centric approach
            </li>
            <li>
              <span className="benefit-icon">✔</span> Experienced and skilled
              team
            </li>
            <li>
              <span className="benefit-icon">✔</span> On-time project delivery
            </li>
          </ul>
        </div>

        {/* Our Vision */}
        <div className="toggle-section">
          <h2
            className="toggle-heading"
            onClick={() => setShowVision(!showVision)}>
            <span>Our Vision</span>
            <span className="toggle-icon">{showVision ? "-" : "+"}</span>
          </h2>
          {showVision && (
            <p className="toggle-description">
              Our vision is to be a benchmark in the construction industry by
              integrating state-of-the-art technology, sustainability, and
              customer satisfaction. We aim to revolutionize the urban landscape
              with innovative and eco-friendly developments that enhance the
              quality of life.
            </p>
          )}
        </div>

        {/* Our Mission */}
        <div className="toggle-section">
          <h2
            className="toggle-heading"
            onClick={() => setShowMission(!showMission)}>
            <span>Our Mission</span>
            <span className="toggle-icon">{showMission ? "-" : "+"}</span>
          </h2>
          {showMission && (
            <p className="toggle-description">
              Our mission is to construct high-quality, sustainable, and
              aesthetically pleasing buildings that cater to the diverse needs
              of our clients. We strive to uphold integrity, transparency, and
              excellence in every project while fostering long-term
              relationships with stakeholders.
            </p>
          )}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="image-section">
        <img src={missionImage} alt="Mission Vision" />
      </div>
    </div>
  );
};

export default MissionVision;
