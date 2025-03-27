import React from "react";
import Announcement from "../components/Announcement"; // Correct import
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import AboutUs from "../components/AboutUs";
import Service from "../components/Service";
import Projects from "../components/Projects";
import MissionVision from "../components/MissionVision";
import Form from "../components/Form";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <AboutUs />
      <Service />
      <MissionVision />
      <Projects />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
