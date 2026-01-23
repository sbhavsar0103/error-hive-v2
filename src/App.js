import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BannerHero from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Navbar from "./Components/NavBar/NavBar";
import AIConsultingHero from "./Pages/Services/AIConsulting/AIConsultingHero";
import POCServicesHero from "./Pages/Services/POCServices/POCServicesHero";
import AIProductDevelopment from "./Pages/Services/AIProductDevelopment/AIProductDevelopmentHero";
import LLMServiceHero from "./Pages/Services/LLMService/LLMServiceHero";
import AnnotationServiceHero from "./Pages/Services/Annotation/AnnotationServiceHero";
import MachineLearningHero from "./Pages/Services/MachineLearning/MachineLearningHero";
// import DataScienceHero from "./Pages/Services/DataScience/DataScienceHero";

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
          <Route path="/services/poc-services" element={<POCServicesHero />} />
          <Route path="/services/ai-product-development" element={<AIProductDevelopment />} />
          <Route path="/services/llm-service" element={<LLMServiceHero />} />
          <Route path="/services/annotation-service" element={<AnnotationServiceHero />} />
          <Route path="/services/machine-learning" element={<MachineLearningHero />} />
          {/* <Route path="/services/data-science" element={<DataScienceHero />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;