import React from "react";
import "./services.css";
import Navbar from "../components/Navbar"; // Adjust path as needed
import Announcement from "../components/Announcement"; // Adjust path as needed
import Footer from "../components/Footer"; // Adjust path as needed

// Import images directly
import image2 from "../assets/images2.webp";
import image3 from "../assets/images3.webp";
import image4 from "../assets/images4.webp";
import image5 from "../assets/images5.webp";
import image6 from "../assets/images6.webp";
import image7 from "../assets/images7.webp";
import image8 from "../assets/images7 (1).webp"; // Ensure correct path
import image9 from "../assets/images8.webp"; // Ensure correct path

const services = [
  { name: "Commercial Space", image: image2 },
  { name: "Residential Buildings", image: image3 },
  { name: "Building a Villa", image: image4 },
  { name: "Healthcare Facility Construction", image: image5 },
  { name: "Bungalow", image: image6 },
  { name: "Landscape Planning", image: image7 },
  { name: "Row-House", image: image8 }, // Added new image
  { name: "Residential+Commercial", image: image9 }, // Added new image
];

const Service = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="about-banner">Services</div>
      <div className="service-container">
        <p className="service-description">
          The company was formed with an aim to provide world-class construction
          services to Govt. and Private Sector. The company is mainly engaged in
          the construction service as follows:
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
      </div>

      <Footer />
    </div>
  );
};

export default Service;
