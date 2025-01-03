import { useState, useRef } from "react";
import React from "react";

const prizeData = [
  {
    imgSrc:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/2nd%20Place%20Medal.png",
    altText: "2nd Place Medal",
    details: [
      { text: "Cash prize of", highlight: "Rs.5000" },
      {
        text: "All members will receive a 1-year VIP CodeCrafters membership worth $360",
      },
      { text: "1 Sublime Text or merge license key worth $99" },
    ],
  },
  {
    imgSrc:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/2nd%20Place%20Medal.png",
    altText: "2nd Place Medal",
    details: [
      { text: "Cash prize of", highlight: "Rs.5000" },
      {
        text: "All members will receive a 1-year VIP CodeCrafters membership worth $360",
      },
      { text: "1 Sublime Text or merge license key worth $99" },
    ],
  },
  {
    imgSrc:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/2nd%20Place%20Medal.png",
    altText: "2nd Place Medal",
    details: [
      { text: "Cash prize of", highlight: "Rs.5000" },
      {
        text: "All members will receive a 1-year VIP CodeCrafters membership worth $360",
      },
      { text: "1 Sublime Text or merge license key worth $99" },
    ],
  },
];

const PrizeCard = ({ imgSrc, altText, details }) => {
  const [flipped, setFlipped] = useState(false); // State for tracking the card flip
  const cardRef = useRef(null);
  const handleOnClick=()=>{
    setFlipped(!flipped);
    cardRef.current.style.transform = `rotateY(${flipped?"180deg":"0deg"}deg) rotateY(${rotateY}deg)`
  }
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left; // Mouse X position inside the card
    const y = e.clientY - rect.top; // Mouse Y position inside the card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -20; // Tilt along X-axis
    const rotateY = ((x - centerX) / centerX) * 20; // Tilt along Y-axis

    card.style.transform = `rotateX(${rotateX}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0) rotateY(0)"; // Reset the tilt
  };

  const handleFlip = () => {
    handleOnClick()
    // setFlipped(!flipped); // Toggle the flip state
  };

  return (
    <div
    className={`relative bg-slate-800 p-6 flex flex-col items-center justify-between font-quicksand rounded-2xl  border h-[450px] border-stone-600 transform-gpu transition-transform duration-700 ${
      flipped ? "rotate-y-180" : ""
    }`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1500px", // Adding perspective for the 3D flip effect
      }}
    >
      {/* Bottom Rounded Shape (Only semicircle) */}
      <div className="absolute top-0 w-full h-16 bg-stone-700 rounded-t-xl"></div>
      {/* Bottom Rounded Shape */}
      <div className="absolute top-12 w-full h-28 bg-stone-700 rounded-b-full"></div>
      <div className="z-10 flex flex-col items-center">
        <img
          src={imgSrc}
          alt={altText}
          className="w-28 h-28 mb-6"
          loading="lazy"
          width="64"
          height="64"
        />
        {/* Front side content */}
        <div
          className={`text-white text-sm space-y-2 pt-14 ${
            flipped ? "hidden" : ""
          }`}
        >
          {details.map((detail, index) => (
            <li key={index}>
              {detail.text}{" "}
              {detail.highlight && (
                <span className="font-semibold text-blue-400">
                  {detail.highlight}
                </span>
              )}
            </li>
          ))}
        </div>
        {/* Back side content */}
        <div
          className={`text-white text-sm space-y-2 pt-14  ${
            !flipped ? "hidden" : ""
          }`}
        >
          {/* Add more detailed content here */}
          <p className="font-semibold">Additional Details:</p>
          <ul>
            <li>Extra prize detail 1</li>
            <li>Extra prize detail 2</li>
            <li>Extra prize detail 3</li>
          </ul>
        </div>
        <button
          className="mt-4 bg-black text-white py-2 px-6 rounded-2xl"
          onClick={handleFlip}
        >
          {flipped ? "Less" : "More"}
        </button>
      </div>
    </div>
  );
};

const Prizes = () => {
  return (
    <div className="min-w-full flex justify-center bg-gray-950 py-8  ">
      <div className="flex gap-6 mx-auto max-w-5xl px-4 transition-all  duration-1000">
        {prizeData.map((prize, index) => (
          <PrizeCard
            key={index}
            imgSrc={prize.imgSrc}
            altText={prize.altText}
            details={prize.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Prizes;
