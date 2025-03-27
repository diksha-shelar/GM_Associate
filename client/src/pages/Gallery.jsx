import React, { useState } from "react";
import "./gallery.css"; // Ensure the path is correct
import Navbar from "../components/Navbar"; // Adjust path as needed
import Announcement from "../components/Announcement"; // Adjust path as needed
import Footer from "../components/Footer"; // Adjust path as needed
import { FaSearchPlus } from "react-icons/fa"; // Import zoom icon

// Import images directly
import image1 from "../assets/Gallery1.webp";
import image2 from "../assets/Gallery2.webp";
import image3 from "../assets/Gallery3.webp";
import image4 from "../assets/Gallery4.webp";
import image5 from "../assets/Gallery5.webp";
import image6 from "../assets/Gallery6.webp";
import image7 from "../assets/Gallery7.webp";
import image8 from "../assets/Gallery8.webp";
import image9 from "../assets/Gallery9.webp";
import image10 from "../assets/Gallery10.webp";
import image11 from "../assets/Gallery11.webp";
import image12 from "../assets/Gallery12.webp";

const galleryImages = [
  { name: "Modern Architecture", image: image1 },
  { name: "Luxury Interiors", image: image2 },
  { name: "Urban Commercial Spaces", image: image3 },
  { name: "Elegant Residential Designs", image: image4 },
  { name: "Green Living Spaces", image: image5 },
  { name: "High-Rise Apartments", image: image6 },
  { name: "Premium Villas", image: image7 },
  { name: "Innovative Workspaces", image: image8 },
  { name: "Sustainable Housing", image: image9 },
  { name: "Smart Office Spaces", image: image10 },
  { name: "Minimalist Home Designs", image: image11 },
  { name: "Luxury Retail Stores", image: image12 },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="about-banner">Gallery</div>
      <div className="gallery-container">
        <p className="gallery-description">
          Explore our diverse portfolio of projects, showcasing our commitment
          to excellence in architecture, design, and construction.
        </p>

        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <div className="gallery-item" key={index}>
              <img src={item.image} alt={item.name} className="gallery-image" />
              <div className="overlay">
                <span className="gallery-text">{item.name}</span>
                <FaSearchPlus
                  className="zoom-icon"
                  onClick={() => setSelectedImage(item.image)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Zoomed In" className="modal-image" />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
