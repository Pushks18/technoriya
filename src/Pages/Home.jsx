import React from "react";
import Particles from "../Components/Particles";
import Navbar from "../Components/Navbar";
import Landing from "../Components/Landing";
import ParticlesBackground from "../Components/Particles";
import Hero from "../Components/Hero";
import Hero1 from "../Components/Hero1";
import FullPage from "../Components/FullPage";

const Home = () => {
  return (
    <div>
      {/* Navbar Section with a black background */}
      <div className="dark:bg-gray-900">
        <Hero1 />
        {/* <Navbar className /> */}
        {/* <Landing /> */}
        {/* <Hero /> */}
        <ParticlesBackground />

        {/* <FullPage /> */}
      </div>

      {/* Particles Section with a blue background */}
    </div>
  );
};

export default Home;
