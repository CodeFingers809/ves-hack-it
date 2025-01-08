import React, { useState, useRef, useEffect } from "react";
import TitleLogo from "./RotaryLogo.png";
import MainLogo from "./VesitLogo.png";
import SecLogo from "./HabitLogo.png";

const HoverRectangle = () => {
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const x = (e.clientX / windowWidth - 0.5) * 2;
    const y = (e.clientY / windowHeight - 0.5) * 2;

    setTargetPos({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const smooth = () => {
      const easing = 0.08;
      currentPos.current.x += (targetPos.x - currentPos.current.x) * easing;
      currentPos.current.y += (targetPos.y - currentPos.current.y) * easing;

      const threshold = 0.001;
      const shouldContinue =
        Math.abs(targetPos.x - currentPos.current.x) > threshold ||
        Math.abs(targetPos.y - currentPos.current.y) > threshold;

      if (shouldContinue) {
        animationFrame.current = requestAnimationFrame(smooth);
      }
    };

    animationFrame.current = requestAnimationFrame(smooth);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [targetPos]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const hackathonDate = new Date("2025-02-15T09:00:00");
      const now = new Date();
      const difference = hackathonDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      <div
        ref={cardRef}
        className="relative w-11/12 md:w-10/12 h-5/6 md:h-4/6 mt-20 transition-transform duration-300 ease-out  pb-24 md:p-0 "
        style={{
          transform: `perspective(1000px) 
            rotateX(${currentPos.current.y * -15}deg) 
            rotateY(${currentPos.current.x * 15}deg) 
            scale(1.05)`,
        }}
      >
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="p-4 md:p-6 flex flex-col items-center justify-center h-full text-white font-sans">
          <div className="flex justify-center items-center mb-6 md:mb-2 flex-col md:flex-row">
            <img
              src={TitleLogo}
              alt="Rotary Logo"
              className="h-12 md:h-16 p-0 m-0"
              loading="lazy"
            />
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-green-200 mt-2 sm:mt-0 sm:ml-2">
              Rotary Club of Bombay, Chembur West
            </p>
          </div>

          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wider mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
            VES-HACK-IT
          </h1>

          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl space-x-2 sm:space-x-4 text-green-200 mb-4 sm:mb-6">
            <span className="text-orange-300">Innovate</span>
            <span className="text-green-400">•</span>
            <span className="text-blue-300">Sustain</span>
            <span className="text-green-400">•</span>
            <span className="text-orange-300">Transform</span>
          </div>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-green-200 mb-6">
            15-16th Feb, 2025
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center mb-6 sm:mb-8 scale-90 sm:scale-100">
            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
              <div
                key={unit}
                className="bg-black/30 rounded-md sm:rounded-lg p-2 backdrop-blur-sm"
              >
                <div
                  className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ${
                    index % 2 === 0 ? "text-orange-400" : "text-blue-400"
                  }`}
                >
                  {String(timeLeft[unit]).padStart(2, "0")}
                </div>
                <div
                  className={`text-xs sm:text-sm ${
                    index % 2 === 0 ? "text-orange-300" : "text-blue-300"
                  }`}
                >
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-green-200 mb-2">
            Register Here
          </p>
          {/* Registration Buttons */}
          <div className="flex gap-2">
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-sm sm:text-base rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Software
            </button>
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Hardware
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverRectangle;
