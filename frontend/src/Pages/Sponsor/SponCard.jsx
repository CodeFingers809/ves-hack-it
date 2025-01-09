import React from "react";
import { motion } from "framer-motion";

const SponsorCard = ({ sponsor, delay }) => {
  return (
    <motion.div
      className="rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-white/10 backdrop-blur-sm hover:backdrop-blur-md"
      initial={{ opacity: 1, scale: 0.8, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: [0, 2, -2, 0] }}
      transition={{ duration: 1, delay }}
      whileHover={{
        scale: 1.05,
        y: -10,
        rotate: [0, 5, -5, 0],
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.15)", // Enhanced glow effect
      }}
    >
      <motion.div
        className="p-6 flex flex-col items-center justify-center relative"
        whileHover={{
          y: -12,
          rotate: [0, 3, -3, 0],
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        <motion.img
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          className="w-48 h-48 object-contain mb-4 rounded-full transition-transform duration-500 transform hover:scale-110"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        />
        <motion.h3
          className="text-xl font-semibold mb-2 text-cyan-300 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {sponsor.name}
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-600 opacity-40 blur-lg animate-pulse rounded-full z-0"></span>
        </motion.h3>
        {/* <motion.a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          Visit Website
        </motion.a> */}
      </motion.div>
    </motion.div>
  );
};

export default SponsorCard;
