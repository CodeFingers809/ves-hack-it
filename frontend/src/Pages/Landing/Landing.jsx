import React, { useState } from "react";
import BgVid from "./bgvideo3loop.mp4";
import loaderimage from "./bgimage.png";
import HoverRectangle from "./rect";
import Navbar from "./Navbar";
import Prizes from "../Prizes";

const Coming = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative h-screen p-0 m-0 overflow-hidden" id="about">
      {/* Background Image Fallback */}
      {!videoLoaded && (
        <img
          src={loaderimage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
      )}

      {/* Background Video */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10" */}
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover -z-10 transition-opacity duration-500 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={BgVid}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setVideoLoaded(true)}
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-950 bg-opacity-70 md:bg-opacity-70"></div>
      <HoverRectangle />
      <button
        onClick={() =>
          window.open(
            "https://unstop.com/p/ves-hack-it-vivekanand-education-societys-institute-of-technology-vesit-mumbai-1336926",
            "_blank"
          )
        }
        className="px-6 py-2 bg-blue-300 hover:bg-blue-400 rounded-full uppercase shadow-md transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400/60 focus:ring-opacity-50"
      >
        Apply on Unstop
      </button>
      {/* Gradient Div */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-950 to-transparent"></div>
    </div>
  );
};

export default Coming;
