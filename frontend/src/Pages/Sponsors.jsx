import React from "react";

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="sparkles"></div>
      </div>

      <div className="relative z-10 container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">
          Hackathon Sponsor
        </h1>

        {/* Sponsor */}
        <section className="flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-center mb-8">
            Our Sponsor
          </h2>
          <br></br>
          <div className="w-96 h-96 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-110 transition duration-300 glow-gold  py-4">
            <img
              src="../../Sponsors/Gold/image.jpg"
              alt="Gold Sponsor"
              className="w-full h-full object-contain"
            />
          </div>
          <br></br>
          <p className="text-center mt-6 text-2xl max-w-md">
            A special thanks to our sponsor for supporting innovation and
            creativity in this hackathon.
          </p>
        </section>
      </div>

      {/* Add Sparkle Animation and Glow Colors */}
      <style>
        {`
        .sparkles::before, .sparkles::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: sparkleMove 20s linear infinite;
        }
        .sparkles::after {
          background-size: 100px 100px;
          animation-delay: 10s;
        }
        @keyframes sparkleMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-10px, -10px); }
        }
        .glow-gold {
          box-shadow: 0 0 15px 3px rgba(255, 215, 0, 0.8), 0 0 25px 8px rgba(255, 215, 0, 0.6);
        }
      `}
      </style>
    </div>
  );
};

export default Sponsors;
