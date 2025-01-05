import { useState, useRef } from "react";
import React from "react";

const prizeData = [
  {
    imgSrc:
      "https://img.icons8.com/emoji/96/000000/1st-place-medal-emoji.png",
    altText: "2nd Place Medal",
    rank:"gold",
    details: [
      { text: "Cash prize of", highlight: "Rs.5000" },
      {
        text: "All members will receive a 1-year VIP CodeCrafters membership worth $360",
      },
      { text: "1 Sublime Text or merge license key worth $99" },
    ],
    additionalDetails: [
      { text: "Subscription to", highlight: "Leetcode premium" },
      {
        text: "Food vouchers",
      },
    ],
  },
  {
    imgSrc:
      "https://img.icons8.com/emoji/96/000000/2nd-place-medal-emoji.png",
    altText: "2nd Place Medal",
    rank:"silver",
    details: [
      { text: "Cash prize of", highlight: "Rs.5000" },
      {
        text: "All members will receive a 1-year VIP CodeCrafters membership worth $360",
      },
      { text: "1 Sublime Text or merge license key worth $99" },
    ],
    additionalDetails: [
      { text: "Subscription to", highlight: "Leetcode premium" },
      {
        text: "Food vouchers",
      },
    ],
  },
  {
    imgSrc:
      "https://img.icons8.com/emoji/96/000000/3rd-place-medal-emoji.png",
    altText: "2nd Place Medal",
    rank:"bronze",
    details: [
      { text: "Cash prize of", highlight: "Rs.5000" },
      {
        text: "All members will receive a 1-year VIP CodeCrafters membership worth $360",
      },
      { text: "1 Sublime Text or merge license key worth $99" },
    ],
    additionalDetails: [
      { text: "Subscription to", highlight: "Leetcode premium" },
      {
        text: "Food vouchers",
      },
    ],
  },
];

const PrizeCard = ({ imgSrc, altText, details, additionalDetails, rank }) => {
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
    className={`relative flex-none lg:flex-1 mb-4  glow-${rank} gap-x-5 bg-slate-800 p-6 flex flex-col items-center justify-between font-quicksand rounded-2xl  border  border-stone-600 transform-gpu max-w-sm mb-11 transition-transform duration-700 ${
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
      <div className="absolute top-0 w-full h-16 bg-gray-700 rounded-t-xl"></div>
      {/* Bottom Rounded Shape */}
      <div className="absolute top-12 w-full h-28 bg-gray-700 rounded-b-full"></div>
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
          {additionalDetails.map((detail, index) => (
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
    <div className="min-w-full flex flex-grow justify-center  bg-gray-900 py-8">
      <div className="flex flex-wrap gap-x-14  justify-center flex-1 flex-grow md:px-36 px-0 max-w-6xl ">
        {prizeData.map((prize, index) => (
          <PrizeCard
            key={index}
            imgSrc={prize.imgSrc}
            altText={prize.altText}
            details={prize.details}
            rank={prize.rank}
            additionalDetails={prize.additionalDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Prizes;
