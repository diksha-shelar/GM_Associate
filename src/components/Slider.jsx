import React, { useState, useEffect } from "react";
import "./Slider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "https://i2.wp.com/farm6.staticflickr.com/5723/22332752956_c8824d0ba6_h.jpg?resize=1140%2C760&ssl=1", // Ensure correct public path
  "https://thumbs.dreamstime.com/b/hospital-building-typical-modern-large-urban-43153826.jpg",
  "https://www.beachvillas.com/pics/main_Images/4330/annabel-beach-palace_118939_1332327534.jpg",
  "https://mahimagroup.com/wp-content/uploads/2024/12/Banner-1.webp",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}>
          {/* Text Overlay (Left Side) */}
          {index === currentIndex && (
            <div className="text-overlay">
              <h1>We Build Your Dream</h1>
              <p>
                Transforming ideas into reality with precision and passion.
                Building homes, businesses, and communities with excellence.
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button className="left-arrow" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slider;
