import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Projects.css";

// Import images
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";

const projects = [
  {
    name: "Residential Buildings",
    heading: "Shri Laksmi Blossom",
    description: "A luxurious apartment complex with modern amenities.",
    image: project1,
  },
  {
    name: "Commercial Spaces",
    heading: "Orion Business Tower",
    description: "A state-of-the-art corporate workspace for professionals.",
    image: project2,
  },
  {
    name: "Renovation Services",
    heading: "Heritage Villa Restoration",
    description:
      "A classic villa restored with a blend of old and new designs.",
    image: project3,
  },
  {
    name: "Healthcare Facility",
    heading: "Ashoka Medicover",
    description:
      "A state-of-the-art healthcare facility designed for modern medical needs, ensuring comfort and efficiency.",
    image: project4,
  },
  {
    name: "Interior Design",
    heading: "Urban Chic Interiors",
    description: "Modern and stylish interiors tailored for urban living.",
    image: project5,
  },
  {
    name: "Landscape Planning",
    heading: "Serene Garden Estates",
    description:
      "A premium one-floor, one-flat residential community surrounded by beautifully landscaped gardens, offering privacy, tranquility, and modern amenities.",
    image: project6,
  },
];

const Projects = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">
        Our Latest Projects <br />
        Explore some of our best work.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="projects-item" key={index}>
            <img
              src={project.image}
              alt={project.name}
              className="projects-image"
            />
            <div className="overlay">
              <div className="projects-text">
                <h3>{project.heading}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button to Navigate to Completed Projects Page */}
      <button
        className="projects-button"
        onClick={() => navigate("/completed")}>
        View More
      </button>
    </div>
  );
};

export default Projects;
