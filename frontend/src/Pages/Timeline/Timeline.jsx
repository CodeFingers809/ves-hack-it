import React, { useEffect } from "react";
import "./Timeline.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center py-24"
      style={{ backgroundColor: "#000816" }}
    >
      <ul className="list-none relative w-full max-w-4xl mx-auto">
        {timelineData.map((item, index) => (
          <li
            key={index}
            className={`glow-container relative mb-8 p-6 bg-gray-800 text-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 ${
              index % 2 === 0 ? "ml-auto mr-0" : "mr-auto ml-0"
            } w-1/2 clear-both`}
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
            <h3 className="text-sm font-light mb-2 tracking-widest text-gray-300">
              {item.date}
            </h3>
            <h1 className="text-lg font-semibold mb-4">{item.title}</h1>
            <p className="text-sm font-light leading-6 text-gray-400">
              {item.content}
            </p>
          </li>
        ))}
        {/* Middle Line */}
        <div className="absolute top-3 bottom-4 left-1/2 w-1 bg-gray-700 transform -translate-x-1/2 glow-line"></div>
        {/* Top Circle */}
        <div className="absolute top-0 left-1/2 w-6 h-6 rounded-full bg-green-400 transform -translate-x-1/2 glow-dot"></div>
        {/* Bottom Circle */}
        <div className="absolute bottom-0 left-1/2 w-6 h-6 rounded-full bg-green-400 transform -translate-x-1/2 glow-dot"></div>
      </ul>
    </div>
  );
};

const timelineData = [
  {
    date: "20th Feb 2024",
    title: "Hackathon registration starts...",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
  },
  {
    date: "20th May, 2010",
    title: "End Registrations",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
  },
  {
    date: "20th May, 2010",
    title: "Hackathon Round 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
  },
  {
    date: "20th May, 2010",
    title: "Hackathon Round 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
  },
  {
    date: "20th May, 2010",
    title: "End of Hackathon",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
  },
];

export default Timeline;
