import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BannerHero from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Navbar from "./Components/NavBar/NavBar";
import AIConsultingHero from "./Pages/Services/AIConsulting/AIConsultingHero";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<BannerHero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services/ai-consulting" element={<AIConsultingHero />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;