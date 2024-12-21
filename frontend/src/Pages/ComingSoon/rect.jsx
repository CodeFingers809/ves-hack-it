import React, { useState, useRef, useEffect } from "react";

const HoverRectangle = () => {
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTargetPos({ x, y });
  };

  const handleMouseLeave = () => {
    setTargetPos({ x: 0, y: 0 });
    // Also reset the current position for immediate response
    currentPos.current = { x: 0, y: 0 };
  };

  useEffect(() => {
    const smooth = () => {
      const easing = targetPos.x === 0 && targetPos.y === 0 ? 0.2 : 0.1; // Faster reset
      currentPos.current.x += (targetPos.x - currentPos.current.x) * easing;
      currentPos.current.y += (targetPos.y - currentPos.current.y) * easing;

      // Only continue animation if we're not very close to target
      const threshold = 0.001;
      const shouldContinue =
        Math.abs(targetPos.x - currentPos.current.x) > threshold ||
        Math.abs(targetPos.y - currentPos.current.y) > threshold;

      if (shouldContinue) {
        animationFrame.current = requestAnimationFrame(smooth);
      } else {
        // Snap to exactly 0 if we're very close
        if (targetPos.x === 0 && targetPos.y === 0) {
          currentPos.current = { x: 0, y: 0 };
        }
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
    <div className="relative w-screen h-screen flex justify-center items-center">
      <div
        ref={cardRef}
        className="relative w-10/12  h-4/6 bg-gradient-to-br 
        transition-transform duration-300 ease-out"
        // from-blue-500 to-purple-600         rounded-lg shadow-lg 
        style={{
          transform: `perspective(1000px) 
            rotateX(${currentPos.current.y * -25}deg) 
            rotateY(${currentPos.current.x * 25}deg) 
            scale(1.05)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="p-6 flex flex-col items-center justify-center h-full text-white font-sans">
            {/* Logo */}
            <h1
              className="text-9xl  font-bold tracking-wider mb-8"
              style={{ fontFamily: "monospace" }}
            >
                VES HACK IT
            </h1>

            {/* Tagline */}
            <div className="text-xl md:text-2xl mb-12 space-x-4">
              <span>Hustle</span>
              <span>Dream</span>
              <span>Hack</span>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl md:text-5xl font-bold text-red-400">
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base text-red-400/80">Days</div>
              </div>

              <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl md:text-5xl font-bold text-blue-400">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base text-blue-400/80">
                  Hours
                </div>
              </div>

              <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl md:text-5xl font-bold text-orange-400">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base text-orange-400/80">
                  Minutes
                </div>
              </div>

              <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl md:text-5xl font-bold text-green-400">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base text-green-400/80">
                  Seconds
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HoverRectangle;
