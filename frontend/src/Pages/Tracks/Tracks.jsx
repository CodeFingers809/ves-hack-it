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
    <>
      <div
        ref={wrapperRef}
        className=" wrapper min-h-screen bg-transparent z-0 relative overflow-hidden flex justify-center items-center py-2 pt-40"
        id="tracks"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="top-gradient absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-t from-transparent to-gray-950 z-40"></div>
        <div className="w-full max-w-5xl p-4 h-auto py-20">
          {/* title */}
          <h2
            className="text-7xl font-black workbench-font text-center text-white mb-5"
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
                <h2 className="text-5xl font-bold text-center text-sky-50  mb-7">
                  Software
                </h2>
                <p className="text-3xl text-sky-100 font-medium">
                  Build innovative, sustainable software solutions.
                </p>
                <ol className="ml-5 text-2xl text-sky-100 font-medium list-decimal text-left">
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
                <h2 className="text-5xl font-bold text-center text-orange-50 mb-7">
                  Hardware
                </h2>
                <p className="text-3xl text-orange-100 font-medium">
                  Create impactful, energy-efficient prototypes.
                </p>
                <ol className="ml-5 text-2xl text-orange-100 font-medium list-decimal text-left">
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
      <div className="pt-20 px-4">
        {/* Problem Statements */}
        <h2
          className="text-7xl font-black workbench-font text-center text-white mb-10"
          style={{
            textShadow: "-5px 0 12px green, 5px 0 12px blue",
          }}
        >
          Problem Statements
        </h2>

        {/* Software Problem Statements */}
        <div className="mb-12 flex justify-center">
          <div className="bg-sky-900 backdrop-blur-sm rounded-lg shadow-xl shadow-gray-900 border-gray-700 border p-8 max-w-4xl w-full">
            <h3
              className="text-2xl lg:text-5xl font-bold text-center text-blue-200 mb-6 glow-effect"
              style={{
                textShadow: "0 0 15px blue, 0 0 25px lightblue",
              }}
            >
              Software
            </h3>
            <ol className="ml-5 text-md lg:text-lg text-sky-100 font-medium list-decimal">
              <li className="hover:glow-hover">
                HW-01 : Smart Fall Detection System for the Elderly.
              </li>
              <li className="hover:glow-hover">
                HW-02 : Smart Pill Dispenser for Alzheimer’s and Dementia.
                Patients
              </li>
              <li className="hover:glow-hover">
                HW-03 : Precision Farming System for Enhanced Crop Management.
              </li>
              <li className="hover:glow-hover">
                HW-04 : Automated Animal Species Detection and Monitoring
                System.
              </li>
              <li className="hover:glow-hover">
                HW-05 : Smart Writing Pen and Pad for Children with Learning
                Disabilities.
              </li>
              <li className="hover:glow-hover">
                HW-06 : Enhanced Ham Radio System for Improved Communication and
                Accessibility.
              </li>
              <li className="hover:glow-hover">
                HW-07 : Reduction of Air Quality Index (AQI) Through Efficient
                Tracking, Monitoring, and Implementation of Solutions.
              </li>
              <li className="hover:glow-hover">
                HW-08 : Electric vehicle battery management device.
              </li>
              <li className="hover:glow-hover">
                HW-09 : Railway track crack detection & monitoring.
              </li>
              <li className="hover:glow-hover">
                HW-10 : Maze solving Micro-mouse.
              </li>
              <li className="hover:glow-hover">
                HW-11 : Coin sorting system for temples.
              </li>
              <li className="hover:glow-hover">
                HW-12 : Robotic Inspection System for Hazardous Environments.
              </li>
            </ol>
          </div>
        </div>

        {/* Hardware Problem Statements */}
        <div className="flex justify-center">
          <div className="bg-orange-800 backdrop-blur-sm rounded-lg shadow-xl shadow-gray-900 border-gray-700 border p-8 max-w-4xl w-full">
            <h3
              className="text-2xl lg:text-5xl font-bold text-center text-orange-200 mb-6 glow-effect"
              style={{
                textShadow: "0 0 15px orange, 0 0 25px gold",
              }}
            >
              Hardware
            </h3>
            <ol className="ml-5 text-md lg:text-lg text-orange-100 font-medium list-decimal">
              <li className="hover:glow-hover">
                SW-01. Game for Mentally Challenged.
              </li>
              <li className="hover:glow-hover">SW-02. Digital Literacy App.</li>
              <li className="hover:glow-hover">
                SW-03. Renewable Energy Crowdfunding Platform.
              </li>
              <li className="hover:glow-hover">
                SW-04. Climate Change Education App.
              </li>
              <li className="hover:glow-hover">
                SW-05. Food Waste Reduction Platform.
              </li>
              <li className="hover:glow-hover">SW-06. Smart Parking App.</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracks;
