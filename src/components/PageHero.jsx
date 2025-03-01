import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, description, extraClasses = '' }) => {
  return (
    <div className={`relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-32 px-4 ${extraClasses}`}>
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mt-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-100">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default PageHero; 