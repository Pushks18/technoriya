import React from "react";
import ParticlesBackground from "./Particles";

const Landing = () => {
  return (
    <div>
      <div className="flex h-screen relative">
        <ParticlesBackground />
        {/* Left half with text */}
        <div className="w-2/3 bg-2 p-8">
          <h1 className="text-3xl text-white font-bold mb-4 mt-60">
            Our Mission - Our Vision A visible difference of Education even from
            far away
          </h1>
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            id dolore explicabo cupiditate, commodi officia qui nulla nemo nisi
            laboriosam consectetur soluta libero adipisci veritatis ipsa quae
            iure rerum at?
          </p>
        </div>

        {/* Right half with image */}
        <div className="w-1/2 relative">
          <div className="h-full bg-2 absolute inset-0 top-0 left-0 right-0 bottom-0 bg-opacity-20">
            <img
              src={require("../Assets/lounge-man-working-on-web-design.gif")}
              alt="Working on web design"
              className="w-[1000px] h-[700px] object-cover opaque-image mt-20"
            />
          </div>
          {/* Replace the image path with your actual image */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
