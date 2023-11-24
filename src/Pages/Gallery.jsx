import React from "react";
import Navbar from "../Components/Navbar";
import ParticlesBackground from "../Components/Particles";
import GalleryPage from "../Components/GalleryPage";

const Gallery = () => {
  return (
    <div>
      <div>
        <Navbar />
        <GalleryPage />
        <ParticlesBackground />
      </div>
    </div>
  );
};

export default Gallery;
