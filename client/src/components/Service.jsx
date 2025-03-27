import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Service.css";

// Import images
import image2 from "../assets/images2.webp";
import image3 from "../assets/images3.webp";
import image4 from "../assets/images4.webp";
import image5 from "../assets/images5.webp";
import image6 from "../assets/images6.webp";
import image7 from "../assets/images7.webp";

const services = [
  { name: "Commercial Space", image: image2 },
  { name: "Residential Buildings", image: image3 },
  { name: "Building a Villa", image: image4 },
  { name: "Healthcare Facility Construction", image: image5 },
  { name: "Bunglow", image: image6 },
  { name: "Landscape Planning", image: image7 },
];

const Service = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="service-container">
      <h2 className="service-title">What We Do</h2>
      <p className="service-description">
        We develop comprehensive service solutions <br />
        for each service to meet your specific needs.
      </p>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img
              src={service.image}
              alt={service.name}
              className="service-image"
            />
            <div className="overlay">
              <span className="service-text">{service.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Button to Navigate to Services Page */}
      <button className="service-button" onClick={() => navigate("/services")}>
        View More
      </button>
    </div>
  );
};

export default Service;
