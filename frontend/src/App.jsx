// import Coming from "./Pages/ComingSoon/Coming";
import React, { useState, useEffect, useRef } from "react";

import Faq from "./Pages/Faq";
import Landing from "./Pages/Landing/Landing";
import Prizes from "./Pages/Prizes";
// import Sponsors from "./Pages/Sponsors";
import Timeline from "./Pages/Timeline/Timeline";
import Tracks from "./Pages/Tracks/Tracks";
import Navbar from "./Pages/Landing/Navbar";
import Teams from "./Pages/Teams";
import Footer from "./Pages/Footer";
import Sponsors from "./Pages/Sponsor/Sponsor.jsx";
import ParticleEffect from "./Pages/Tracks/ParticleEffect.jsx";
import RegistrationBanner from "./Pages/Landing/RegDetail.jsx";

function App() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const wrapperRef = useRef();

  // useEffect(() => {
  //   const updateDimensions = () => {
  //     const rect = wrapperRef.current.getBoundingClientRect();
  //     setDimensions({
  //       width: rect.width,
  //       height: rect.height,
  //     });
  //   };

  //   window.addEventListener("load", updateDimensions);
  //   window.addEventListener("resize", updateDimensions);

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     window.removeEventListener("load", updateDimensions);
  //     window.removeEventListener("resize", updateDimensions);
  //   };
  // }, []);

  return (
    // <Coming />
    <>
      <div className="fixed inset-0 w-full h-full pointer-events-none z-10 opacity-35">
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
      <Navbar />
      <Landing />
      <RegistrationBanner />
      <Tracks />
      <Timeline />
      <Sponsors />
      <Prizes />
      <Teams />
      <Faq />
      <Footer />
      <ParticleEffect
      // width={dimensions.width}
      // height={dimensions.height}
      // className=""
      />
    </>
  );
}

export default App;
