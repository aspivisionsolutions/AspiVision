import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <Link
        to={service.link}
        className="inline-block text-indigo-600 hover:text-indigo-800 transition-colors"
        aria-label={`Learn more about ${service.title.toLowerCase()} services`}
      >
        Learn More
      </Link>
    </motion.div>
  );
};

export default ServiceCard; 