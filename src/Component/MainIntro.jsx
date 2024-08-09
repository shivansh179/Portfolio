import React from 'react';
import { motion } from 'framer-motion';

const firstName = "Shivansh";
const lastName = "Shukla";

const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
      {/* Rectangle Animation */}
      <motion.div
        className="absolute border-4 border-white"
        initial={{ width: 0, height: 0 }}
        animate={{ width: "300px", height: "200px" }} // Adjusted height to accommodate both names
        transition={{ duration: 2 }}
        style={{ position: 'relative' }}
      />

      {/* First Name Animation */}
      <div className="absolute flex flex-col justify-center items-center">
        <div className="flex">
          {firstName.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 2 + index * 0.2 }}
              className="text-5xl font-bold text-white"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Last Name Animation */}
        <div className="flex mt-4">
          {lastName.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 2 + firstName.length * 0.2 + index * 0.2 }}
              className="text-5xl font-bold text-white"
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
