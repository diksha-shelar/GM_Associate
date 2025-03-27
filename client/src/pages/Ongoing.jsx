import React from "react";
import "./Ongoing.css"; // Ensure the path is correct based on your folder structure
import Navbar from "../components/Navbar"; // Adjust path as needed
import Announcement from "../components/Announcement"; // Adjust path as needed
import Footer from "../components/Footer"; // Adjust path as needed

const Ongoing = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="about-banner">Ongoing Projects</div>

      {/* Ongoing Projects Section */}
      <div className="ongoing-content">
        <h2>Skyline Residency</h2>
        <p>
          A luxurious high-rise residential project offering spacious apartments
          with breathtaking city views. Designed with smart home automation,
          energy-efficient materials, and world-class amenities, it redefines
          urban living while ensuring sustainability and comfort.
        </p>

        <h2>Emerald Heights</h2>
        <p>
          A premium gated community featuring modern apartments surrounded by
          lush greenery. The project focuses on community living with landscaped
          gardens, jogging tracks, and a clubhouse that promotes a healthy and
          vibrant lifestyle.
        </p>

        <h2>Sunshine Rowhouses</h2>
        <p>
          A collection of elegantly designed rowhouses that offer a blend of
          privacy and community living. These homes come with spacious
          balconies, private parking, and rooftop terraces, creating the perfect
          family-friendly environment.
        </p>

        <h2>Maple Villas</h2>
        <p>
          A premium rowhouse development featuring modern architecture and smart
          interiors. Each villa is equipped with solar panels, rainwater
          harvesting systems, and open spaces that enhance sustainable living.
        </p>

        <h2>Downtown Commercial Hub</h2>
        <p>
          A thriving business center featuring office spaces, retail outlets,
          and co-working zones. Strategically located for maximum accessibility,
          it caters to startups, corporate firms, and high-end retail brands,
          ensuring a dynamic business ecosystem.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Ongoing;
