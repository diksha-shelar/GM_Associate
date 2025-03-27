import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home"; // Homepage component
import About from "./pages/About"; // About Us page component
import Services from "./pages/Services"; // Services page component
import Completed from "./pages/completed"; // Completed Projects page component
import Ongoing from "./pages/Ongoing"; // Ongoing Projects page component
import Gallery from "./pages/Gallery"; // Gallery page component
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/ongoing" element={<Ongoing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
