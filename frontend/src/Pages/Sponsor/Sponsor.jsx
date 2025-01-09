import React from "react";
import { motion } from "framer-motion";
import SponsorCard from "./SponCard";
import Rotory from "./RotaryLogo.png"

const sponsors = [
  {
    type: "Title ",
    sponsors: [
      { name: "Rotary Club Of Bombay", logo: Rotory, website: "https://" }
    ]
  },
  // {
  //   type: "Gold",
  //   sponsors: [
  //     { name: "InnovateTech", logo: "/sponsors/innovatetech.png", website: "https://innovatetech.com" },
  //     { name: "FutureSystems", logo: "/sponsors/futuresystems.png", website: "https://futuresystems.com" }
  //   ]
  // },
  // {
  //   type: "Food",
  //   sponsors: [
  //     { name: "TastyBites", logo: "/sponsors/tastybites.png", website: "https://tastybites.com" },
  //     { name: "FreshEats", logo: "/sponsors/fresheats.png", website: "https://fresheats.com" },
  //     { name: "GourmetDelights", logo: "/sponsors/gourmetdelights.png", website: "https://gourmetdelights.com" }
  //   ]
  // }
];

const Sponsors = () => {
  const getGridColumns = (sponsorCount) => {
    if (sponsorCount === 1) return 'lg:grid-cols-[400px]';
    if (sponsorCount === 2) return 'lg:grid-cols-[400px_400px]';
    if (sponsorCount === 4) return 'lg:grid-cols-[400px_400px]';
    return 'lg:grid-cols-3';
  };

  return (
    <div className="min-h-screen bg-transparent z-0 from-gray-900 to-black text-white py-16 px-4 relative overflow-hidden" id="sponsors">
      <div className="absolute inset-0 pointer-events-none">
        <div className="stars"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Our Amazing Sponsors
        </h1>

        {sponsors.map((category, index) => (
          <section key={category.type} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">
              {category.type} Sponsor{category.sponsors.length > 1 ? 's' : ''}
            </h2>
            <div
              className={`
                grid grid-cols-1 md:grid-cols-2 gap-8
                ${getGridColumns(category.sponsors.length)}
                justify-center
                mx-auto
                max-w-7xl
              `}
            >
              {category.sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className={`${
                    category.sponsors.length === 4 ? 'lg:max-w-[400px]' : ''
                  }`}
                >
                  <SponsorCard sponsor={sponsor} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
