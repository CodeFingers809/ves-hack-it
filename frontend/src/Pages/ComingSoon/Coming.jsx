import React from "react";
import BgVid from "./bgvid3.mp4";
import HoverRectangle from "./rect";
const Coming = () => {
  return (
    <div className="relative h-screen  p-0 m-0 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={BgVid}
        autoPlay
        loop
        muted
        playsinline
        preload
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-950  bg-opacity-70 md:bg-opacity-60"></div>
      <HoverRectangle />
      {/* </div> */}
    </div>
  );
};

export default Coming;
