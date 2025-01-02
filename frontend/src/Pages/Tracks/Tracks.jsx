import React, { useState, useEffect, useRef } from "react";
import "./Tracks.css";
import ParticleEffect from "./ParticleEffect";
import grid from "../../assets/grid.svg";
import rays from "../../assets/rays.svg"

const Tracks = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const wrapperRef = useRef();

  useEffect(() => {
    const updateDimensions = () => {
      const rect = wrapperRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height,
      });
    };

    window.addEventListener("load", updateDimensions);
    window.addEventListener("resize", updateDimensions);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("load", updateDimensions);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="wrapper min-h-screen bg-gray-950 relative overflow-hidden flex justify-center items-center"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="top-gradient absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-t from-transparent to-gray-950 z-40"></div>
      <div className="bottom-gradient absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-b from-transparent to-gray-950 z-40"></div>

      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlnssvgjs="http://svgjs.dev/svgjs"
          width="100%"
          height="100%"
          className="w-full h-full"
        >
          <defs>
            <filter
              id="nnnoise-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="linearRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.5"
                numOctaves="10"
                seed="15"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              ></feTurbulence>
              <feSpecularLighting
                surfaceScale="40"
                specularConstant="3"
                specularExponent="20"
                lighting-color="#33598a"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                result="specularLighting"
              >
                <feDistantLight azimuth="3" elevation="200"></feDistantLight>
              </feSpecularLighting>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="transparent"></rect>
          <rect
            width="100%"
            height="100%"
            fill="#7957a8"
            filter="url(#nnnoise-filter)"
          ></rect>
        </svg>
      </div>

      {/* Set the ParticleEffect canvas to the parent element's size */}
      <ParticleEffect
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      <div className="w-full max-w-4xl p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div className="raysBg bg-sky-900 backdrop-blur-sm p-6 rounded-lg shadow-xl shadow-gray-900 min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] border-gray-700 border overflow-hidden">
            <h2 className="text-xl font-bold">Card 1</h2>
            <p>Content for the first card</p>
          </div>
          <div className="raysBg bg-orange-900 backdrop-blur-sm p-6 rounded-lg shadow-xl shadow-gray-900 min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] border-gray-700 border overflow-hidden">
            <h2 className="text-xl font-bold z-10">Card 2</h2>
            <p>Content for the second card</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
