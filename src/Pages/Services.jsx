import React from "react";
import Navbar from "../Components/Navbar";
import ParticlesBackground from "../Components/Particles";
import ServicesPage from "../Components/ServicesPage";
// import Services2Page from "../Components/Services2Page";

const Services = () => {
  return (
    <div>
      <div>
        <Navbar />
        <ServicesPage />
        {/* <Services2Page /> */}
        <ParticlesBackground />
      </div>
    </div>
  );
};

export default Services;
