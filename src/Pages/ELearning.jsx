import React from "react";
import Navbar from "../Components/Navbar";
import ParticlesBackground from "../Components/Particles";
import ELearningPage from "../Components/ELearningPage";

const ELearning = () => {
  return (
    <div>
      <div>
        <Navbar />
        <ELearningPage />
        <ParticlesBackground />
      </div>
    </div>
  );
};

export default ELearning;
