import React from "react";
import BgVid from "./bgvid3.mov";
import HoverRectangle from "./rect";
import Navbar from "./Navbar";
const Landing = () => {
  return (
    <div className="relative h-screen  p-0 m-0 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={BgVid}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      {/* <div className="relative flex items-center justify-center"> */}
        {/* <h1 className="text-5xl font-bold">Welcome to Our Platform</h1> */}
        {/* <p className="mt-4 text-lg">Your tagline or description goes here.</p> */}
        <Navbar/>
        <HoverRectangle/>
      {/* </div> */}
    </div>
  );
};

export default Landing;
