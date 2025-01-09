import React from "react";
import { motion } from "framer-motion";

const teams = [
  {
    id: 1,
    name: "Computer Society of India",
    shortName: "CSI",
    imgSrc: "/Teams/CSI.png",
    link: "https://www.csivesit.org/", // Add the team's website link
  },
  {
    id: 2,
    name: "Indian Society for Technical Education",
    shortName: "ISTE",
    imgSrc: "/Teams/ISTE.png",
    link: "https://www.istevesit.in/", // Add the team's website link
  },
  
  {
    id: 3,
    name: "Institute of Electrical and Electronics Engineers",
    shortName: "IEEE",
    imgSrc: "/Teams/IEEE.png",
    link: "https://ieeevesit.org/", // Add the team's website link
  },
  {
    id: 4,
    name: "International Society of Automation",
    shortName: "ISA",
    imgSrc: "/Teams/ISA.png",
    link: "https://www.isavesit.org.in/", // Add the team's website link
  },
];

const TeamsBanner = () => {
  return (
    <motion.div
      className="bg-transparent z-0 py-16 relative overflow-hidden"
      id="team"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-green-400 text-center mb-16 text-4xl font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Organizing Teams
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {teams.map((team, index) => (
            <motion.div
              key={team.id}
              className="flex flex-col items-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 * index,
                ease: "easeOut",
              }}
              onClick={() => window.open(team.link, "_blank")} // Redirect to the website
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg transition-all duration-300 mb-4 group"
                whileHover={{
                  scale: 1.05, // Scale the card size a bit on hover
                  transition: { duration: 0.3 },
                }}
              >
                <motion.img
                  className="w-28 h-28 object-contain filter brightness-100 transition-all duration-300 group-hover:brightness-110"
                  src={team.imgSrc}
                  alt={team.name}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-600/10 rounded-xl md:opacity-0 group-hover:opacity-100  transition-opacity duration-300" />
              </motion.div>
              <motion.p
                className="text-blue-300 font-bold text-xl mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {team.shortName}
              </motion.p>
              <motion.p
                className="text-white text-sm text-center max-w-[250px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + 0.1 * index, duration: 0.5 }}
              >
                {team.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full h-full bg-[url('/energy-pattern.png')]" />
      </motion.div>
    </motion.div>
  );
};

export default TeamsBanner;
