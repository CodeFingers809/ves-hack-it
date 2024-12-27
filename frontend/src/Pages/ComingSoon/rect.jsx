import React, { useState, useRef, useEffect } from "react";
import TitleLogo from "./RotaryLogo.png";
import MainLogo from "./VesitLogo.png";
import SecLogo from "./HabitLogo.png";
import noise from "../../assets/noisy-background.png";

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
      const hackathonDate = new Date("2025-02-22T00:00:00");
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
    <div className="relative w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center bg-gray-200 p-2 rounded-xl bg-opacity-60">
        <img src={MainLogo} alt="Main Logo" className="h-16 md:h-20 p-0 m-0" />
        <img
          src={SecLogo}
          alt="Secondary Logo"
          className="h-16 md:h-20 p-0 m-0"
        />
      </div>

      <div
        ref={cardRef}
        className="relative w-11/12 md:w-10/12 h-5/6 md:h-4/6 transition-transform duration-300 ease-out rounded-[32px] shadow-lg pb-24 md:p-0
         "
        style={{
          transform: `perspective(1000px) 
      rotateX(${currentPos.current.y * -15}deg) 
      rotateY(${currentPos.current.x * 15}deg) 
      scale(1.05)`,
        }}
      >
        {/* Rest of your JSX remains the same */}
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="p-4 md:p-6 flex flex-col items-center justify-center h-full text-white font-sans">
          <div className="flex justify-center items-center mb-6 md:mb-2 flex-col md:flex-row">
            <img
              src={TitleLogo}
              alt="Rotary Logo"
              className="h-12 md:h-16 p-0 m-0"
            />
            <p className="text-xl md:text-2xl text-gray-300 ml-2 league-spartan-font">
              Rotary Club of Bombay, Chembur West
            </p>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-wider mb-2 league-spartan-font">
            VES-HACK-IT
          </h1>

          <div className="flex flex-col items-center mb-10 md:mb-16">
            <p className="text-xl md:text-2xl text-gray-300 league-spartan-font">
              Coming soon...
            </p>
          </div>

          <div className="text-xl md:text-2xl space-x-4 md:space-x-6 text-gray-200 league-spartan-font">
            <span>Create</span>
            <span>•</span>
            <span>Innovate</span>
            <span>•</span>
            <span>Win</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverRectangle;
