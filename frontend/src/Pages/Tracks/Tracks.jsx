import React, { useState, useEffect, useRef } from "react";
import "./Tracks.css";
import ParticleEffect from "./ParticleEffect";
import grid from "../../assets/grid.svg";
import rays from "../../assets/rays.svg";
import software from "../../assets/software.jpg";
import hardware from "../../assets/hardware.jpg";

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
      className="wrapper min-h-screen bg-gray-950 relative overflow-hidden flex justify-center items-center py-20"
      id="tracks"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="top-gradient absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-t from-transparent to-gray-950 z-40"></div>
      <div className="bottom-gradient absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-b from-transparent to-gray-950 z-40"></div>

      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
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
              colorInterpolationFilters="linearRGB"
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
                lightingColor="#33598a"
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
      <div className="w-full max-w-5xl p-4 h-auto py-20">
        {/* title */}
        <h2
          className="text-7xl font-black workbench-font text-center league-spartan-font text-white mb-5"
          style={{
            textShadow: "-5px 0 12px green, 5px 0 12px blue",
          }}
        >
          Tracks
        </h2>

        {/* both the tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div className="raysBg bg-sky-900 backdrop-blur-sm rounded-lg shadow-xl shadow-gray-900 min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] border-gray-700 border overflow-hidden">
            <div
              className="w-full h-[300px]"
              style={{
                background: `url(${software})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
            <div className="p-6 pl-8">
              <h2 className="text-5xl font-bold text-center text-sky-50 league-spartan-font mb-7">
                Software
              </h2>
              <ol className="ml-5 text-3xl league-spartan-font text-white font-medium list-decimal text-left">
                <li>Mental health</li>
                <li>Digital literacy</li>
                <li>Renewable energy</li>
                <li>Climate change</li>
                <li>Food management</li>
              </ol>
            </div>
          </div>
          <div className="raysBg bg-orange-800 backdrop-blur-sm rounded-lg shadow-xl shadow-gray-900 min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] border-gray-700 border overflow-hidden">
            <div
              className="w-full h-[300px]"
              style={{
                background: `url(${hardware})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
            <div className="p-6 pl-8">
              <h2 className="text-5xl font-bold text-center text-sky-50 league-spartan-font mb-7">
                Hardware
              </h2>
              <ol className="ml-5 text-3xl league-spartan-font text-white font-medium list-decimal text-left">
                <li>Healthcare</li>
                <li>Animal husbandry & Agriculture</li>
                <li>Industry 4.0 and IoT</li>
                <li>Disaster Management & Renewable Energy</li>
                <li>Robotics & Engineering</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
