import React, { useState, useEffect } from "react";
import "./Slider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import slider1 from "../assets/slider1.webp";
import slider2 from "../assets/slider2.webp";
import slider3 from "../assets/slider3.webp";
import slider4 from "../assets/slider4.webp";

const images = [slider1, slider2, slider3, slider4];

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
