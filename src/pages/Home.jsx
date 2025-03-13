import React from "react";
import Announcement from "../components/Announcement"; // Correct import
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <AboutUs />
    </div>
  );
}

export default Home;
