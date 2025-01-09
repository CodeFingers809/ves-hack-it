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
import Sponsors from "./Pages/Sponsor/Sponsor.jsx"
import ParticleEffect from "./Pages/Tracks/ParticleEffect.jsx"
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
    
       <Navbar />
      <Landing />
      <RegistrationBanner/>
      <Tracks />
      <Timeline />
      <Sponsors />
      <Prizes />
      <Teams />
      <Faq />
      <ParticleEffect
        // width={dimensions.width}
        // height={dimensions.height}
        // className=""
      /> 
    </>
  );
}

export default App;
