import React from "react";
import "./completed.css"; // Ensure the path is correct based on your folder structure
import Navbar from "../components/Navbar"; // Adjust path as needed
import Announcement from "../components/Announcement"; // Adjust path as needed
import Footer from "../components/Footer"; // Adjust path as needed

const Completed = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="about-banner">Completed Projects</div>

      {/* Completed Projects Section */}
      <div className="completed-content">
        <h2>Shri Laksmi Blossom</h2>
        <p>
          A premium residential building offering modern amenities and a serene
          living environment. The project is designed to maximize space
          utilization while ensuring a luxurious lifestyle. With contemporary
          architecture, landscaped gardens, and high-end security, it provides a
          perfect blend of comfort and sophistication for homeowners seeking
          tranquility.
        </p>

        <h2>Orion Business Tower</h2>
        <p>
          A state-of-the-art commercial space, providing world-class facilities
          for businesses. Strategically located, it enhances connectivity and
          productivity. Equipped with smart office spaces, high-speed internet,
          and energy-efficient designs, it ensures a thriving work environment
          for startups, enterprises, and multinational corporations alike.
        </p>

        <h2>Heritage Villa Restoration</h2>
        <p>
          Restoring architectural heritage with a modern touch while preserving
          its historical essence. A perfect blend of tradition and contemporary
          living. Every detail, from intricate woodwork to restored facades, has
          been carefully preserved while incorporating modern comforts like
          climate control, ambient lighting, and sustainable materials.
        </p>

        <h2>Ashoka Medicover</h2>
        <p>
          A top-tier healthcare facility built to international standards,
          ensuring advanced medical care and comfort for patients. Featuring
          state-of-the-art operation theaters, patient-friendly recovery zones,
          and an eco-friendly infrastructure, it provides a seamless experience
          for healthcare professionals and patients alike.
        </p>

        <h2>Urban Chic Interior</h2>
        <p>
          An interior design marvel that blends contemporary aesthetics with
          functionality, transforming spaces into stylish yet comfortable
          environments. Custom-designed furniture, smart lighting solutions, and
          a seamless fusion of colors and textures make this project a
          trendsetter in modern living.
        </p>

        <h2>Serene Garden Estate - One Floor One Flat</h2>
        <p>
          A unique residential project offering privacy and exclusivity with
          spacious single-floor flats set amidst lush green landscapes. Designed
          for families seeking an independent yet luxurious living space, it
          features private terraces, eco-friendly designs, and access to serene
          garden views, making it a haven of peace and elegance.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Completed;
