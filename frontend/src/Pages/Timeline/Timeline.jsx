// Timeline.js
import React, { useState, useEffect } from "react";
import "./Timeline.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("Hardware");

  const timelineData = {
    Hardware: [
      {
        date: "4th Jan - 20th Jan",
        title: "Registration and workshop selection",
      },
      {
        date: "15th Jan",
        title: "Problem statement release",
      },
      {
        date: "20th Jan - 22nd Jan",
        title:
          "Hardware Training and Mentoring Workshops.( ESP32/STM/RASPBERRY PI/FPGA)",
      },
      {
        date: "23rd Jan - 30th Jan",
        title: "Domain selection and component list sharing",
      },
      {
        date: "31st Jan",
        title: "Hardware Track Presentation Round.",
      },
      {
        date: "2nd Feb",
        title: "Shortlisted teams announcement",
      },
      {
        date: "10th Feb- 14th Feb",
        title: "Download ID card for entry",
      },
      {
        date: "15th - 16th Feb",
        title: "𝟭𝟱-𝟭𝟲𝘁𝗵 𝗙𝗲𝗯: Final Hackathon Round.",
      },
    ],
    Software: [
      {
        date: "4th Jan - 20th Jan",
        title: "Registration and workshop selection",
      },
      {
        date: "15th Jan",
        title: "Release of problem statement",
      },
      {
        date: "21st Jan",
        title: "Software Track Presentation Submission.",
      },
      {
        date: "31st Jan",
        title: "PPT screening at VESIT, Chembur",
      },
      {
        date: "2nd Feb",
        title: "List of shortlisted teams for main competition",
      },
      {
        date: "15th - 16th Feb",
        title: "𝟭𝟱-𝟭𝟲𝘁𝗵 𝗙𝗲𝗯: Final Hackathon Round.",
      },
    ],
  };

  return (
    <div
      className="bg-transparent z-0 min-h-screen w-screen overflow-hidden flex flex-col items-center py-12 px-4 sm:px-8"
      id="timeline"
      // style={{ backgroundColor: "#000816" }}
    >
      <h2
        className="text-7xl font-black workbench-font text-center text-white mb-5"
        style={{
          textShadow: "-5px 0 12px green, 5px 0 12px blue",
        }}
      >
        Timeline
      </h2>
      {/* Category Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-4 text-xl">
        <button
          className={`px-6 py-2 font-medium text-white rounded-lg transition-all duration-300 ${
            selectedCategory === "Hardware" ? "bg-green-700" : "bg-gray-700"
          }`}
          onClick={() => setSelectedCategory("Hardware")}
        >
          Hardware
        </button>
        <button
          className={`px-6 py-2 font-medium text-white rounded-lg transition-all duration-300 ${
            selectedCategory === "Software" ? "bg-green-700" : "bg-gray-700"
          }`}
          onClick={() => setSelectedCategory("Software")}
        >
          Software
        </button>
      </div>

      {/* Timeline */}
      <ul className="list-none relative w-full max-w-3xl mx-auto">
        {timelineData[selectedCategory].map((item, index) => (
          <li
            key={index}
            className={`relative mb-12 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white ${
              index % 2 === 0
                ? "ml-auto mr-0 sm:mr-auto sm:ml-0"
                : "mr-auto ml-0 sm:ml-auto sm:mr-0"
            } w-full sm:w-1/2`}
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          >
            {/* Glowing Dot */}
            <div
              className="absolute top-0 w-4 h-4 rounded-full bg-green-400 transform -translate-y-2"
              style={{
                left: index % 2 === 0 ? "-1rem" : "auto",
                right: index % 2 !== 0 ? "-1rem" : "auto",
                boxShadow: "0 0 10px 4px rgba(0, 255, 100, 0.8)",
              }}
            />
            {/* Content */}
            <h3 className="text-sm font-light mb-2 tracking-widest text-green-400">
              {item.date}
            </h3>
            <h1 className="text-lg font-semibold mb-4 leading-snug">
              {item.title}
            </h1>
          </li>
        ))}

        {/* Middle Line */}
        <div className="absolute top-0 bottom-4 left-1/2 w-1 bg-gray-700 transform -translate-x-1/2 hidden sm:block glow-line"></div>

        {/* Bottom Circle */}
        <div className="absolute bottom-0 left-1/2 w-5 h-5 rounded-full bg-green-400 transform -translate-x-1/2 glow-dot hidden sm:block"></div>
      </ul>
    </div>
  );
};

export default Timeline;
