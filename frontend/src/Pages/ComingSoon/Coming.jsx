import React, { useState } from "react";
import BgVid from "./bgvideo3loop.mp4";
import loaderimage from "./bgimage.png";
import HoverRectangle from "./rect";

const Coming = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative h-screen p-0 m-0 overflow-hidden">
      {/* Background Image Fallback */}
      {!videoLoaded && (
        <img
          src={loaderimage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
      )}

      {/* Background Video */}
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
      <div className="absolute top-0 left-0 w-full h-full bg-gray-950 bg-opacity-70 md:bg-opacity-60"></div>

      <HoverRectangle />
    </div>
  );
};

export default Coming;
