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
          Hackathon Sponsors
        </h1>

        {/* Gold Sponsors */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-center mb-8">
            Gold Sponsors
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Replace the imgSrc with your actual image paths */}
            {[
              {
                id: 1,
                imgSrc: "../../Sponsors/Gold/1715612553-mastercard.svg",
              },
              {
                id: 2,
                imgSrc: "../../Sponsors/Gold/1715612550-google-cloud.svg",
              },
              {
                id: 3,
                imgSrc: "../../Sponsors/Gold/1715612593-apollo.svg",
              },
              {
                id: 4,
                imgSrc: "../../Sponsors/Gold/ETHIndia.png",
              },
              {
                id: 5,
                imgSrc:
                  "../../Sponsors/Gold/66273f100889f2489acb2d8e_Polygon Logo Complete White.svg",
              },
            ].map((sponsor) => (
              <div
                key={sponsor.id}
                className="w-40 h-40 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-110 transition duration-300 glow-gold"
              >
                <img
                  src={sponsor.imgSrc}
                  alt={`Gold Sponsor ${sponsor.id}`}
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Silver Sponsors */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-center mb-8">
            Silver Sponsors
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Replace the imgSrc with your actual image paths */}
            {[
              {
                id: 1,
                imgSrc: "../../Sponsors/Silver/1715612607-paypal.svg",
              },
              { id: 2, imgSrc: "../../Sponsors/Silver/1715612565-nbc.svg" },
              {
                id: 3,
                imgSrc: "../../Sponsors/Silver/1715612590-andressen.svg",
              },
              {
                id: 4,
                imgSrc: "../../Sponsors/Silver/1715612601-franklin.svg",
              },
            ].map((sponsor) => (
              <div
                key={sponsor.id}
                className="w-32 h-32 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-110 transition duration-300 glow-silver"
              >
                <img
                  src={sponsor.imgSrc}
                  alt={`Silver Sponsor ${sponsor.id}`}
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Bronze Sponsors */}
        <section>
          <h2 className="text-3xl font-extrabold text-center mb-8">
            Bronze Sponsors
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Replace the imgSrc with your actual image paths */}
            {[
              {
                id: 1,
                imgSrc: "../../Sponsors/Bronze/sublime-lg.webp",
              },
              { id: 2, imgSrc: "../../Sponsors/Bronze/wolfram-lg.webp" },
              { id: 3, imgSrc: "../../Sponsors/Bronze/xyz-logo-white.svg" },
            ].map((sponsor) => (
              <div
                key={sponsor.id}
                className="w-24 h-24 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-110 transition duration-300 glow-bronze"
              >
                <img
                  src={sponsor.imgSrc}
                  alt={`Bronze Sponsor ${sponsor.id}`}
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
            ))}
          </div>
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
        .glow-silver {
          box-shadow: 0 0 15px 3px rgba(192, 192, 192, 0.8), 0 0 25px 8px rgba(192, 192, 192, 0.6);
        }
        .glow-bronze {
          box-shadow: 0 0 15px 3px rgba(205, 127, 50, 0.8), 0 0 25px 8px rgba(205, 127, 50, 0.6);
        }
      `}
      </style>
    </div>
  );
};

export default Sponsors;
