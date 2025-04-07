import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMotorcycle, FaRecycle } from 'react-icons/fa';
import { FiShoppingBag, FiUser, FiDollarSign, FiCheckCircle, FiSmile, FiClock, FiTrendingUp, FiShield } from 'react-icons/fi';
import * as Fi from 'react-icons/fi';
import dopahiya from "../assets/dopahiya.png";
import Ecommerce from '../assets/ecommerce.png';
import Ayushdev from '../assets/ayushdev.png';
import MoneyMate from '../assets/moneymate.png';
import WadhwaEvents from '../assets/wadhwaevents.png';
import Stats from '../components/Stats';
import MobikooImage from '../assets/MobikooImage.png';
import GNRRecyclingImage from '../assets/GNRImage.png';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm mx-auto flex flex-col h-full"
    >
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-40 object-cover"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* This section stays at the bottom always */}
        <div className="mt-auto flex justify-between items-center pt-4">
          <div className="text-xs text-gray-500 leading-tight">
            <div>{project.category}</div>
            <div>{project.completionDate}</div>
          </div>
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Watch Live
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
    {
      id: 1,
      title: 'Dopahiya',
      category: 'Bike Research',
      image: dopahiya,
      description: 'Web application where users can compare specs of different bikes.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://dopahiya.netlify.app',
      completionDate: 'June 2024',
      icon: <FaMotorcycle />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      id: 2,
      title: 'KidzWorld',
      category: 'E-commerce',
      image: Ecommerce,
      description: 'Custom online store with inventory management and analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://mykidzworld.netlify.app',
      completionDate: 'June 2024',
      icon: <FiShoppingBag />,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 3,
      title: "Money Mate",
      category: "Finance",
      image: MoneyMate,
      description: "A personal finance management tool for tracking expenses and budgeting.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "https://moneymate-client.vercel.app/login",
      completionDate: "March 2025",
      icon: <FiDollarSign />,
      gradient: "from-pink-500 to-red-500"
    },
    {
      id: 4,
      title: "Wadhwa Events",
      category: "Portfolio",
      image: WadhwaEvents,
      description: "A comprehensive event management website for organizing various events such as corporate meetings, college fests, weddings, and more.",
      technologies: ["React", "Node.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://www.wadhwaevents.com",
      completionDate: "February 2025",
      icon: <FiDollarSign />,
      gradient: "from-red-500 to-orange-500"
    },
    {
      id: 5,
      title: "Mobikoo",
      category: "Finance", // Based on your existing categories
      image: MobikooImage,
      description: "An insurance management platform crafted for efficient policy tracking, claim handling, and digital workflow automation tailored for modern insurance agencies.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
      liveLink: "https://mobikoo.com",
      completionDate: "March 2025",
      icon: <FiShield />,
      gradient: "from-blue-500 to-teal-500"
    },
    {
      id: 6,
      title: "GNR Recycling",
      category: "Portfolio", // Showcased as a client or company project
      image: GNRRecyclingImage,
      description: "Website for a certified e-waste recycling company offering services such as secure data destruction and green IT asset disposal, integrated with Google Sheets for real-time data handling.",
      technologies: ["React", "Tailwind CSS", "Google Sheets"],
      liveLink: "https://gnrrecycle.com",
      completionDate: "April 2025",
      icon: <FaRecycle />,
      gradient: "from-green-500 to-lime-500"
    }
  ];

  const categories = ["All", "E-commerce", "Portfolio", "Bike Research", "Finance"];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white px-4 md:px-16">
      <div className="container mx-auto mt-20">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 pb-3">
            Our Latest Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve their goals through innovative solutions and cutting-edge technology.
          </p>
        </motion.div>

        {/* Featured Project Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-white via-indigo-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-12">
            Featured Project
          </h3>
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden"
              >
                <img 
                  src={MoneyMate} 
                  alt="Money Mate" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h4 className="text-2xl font-bold text-gray-800">Money Mate</h4>
                <p className="text-gray-600 leading-relaxed">
                  A personal finance management tool for tracking expenses and budgeting. Helps users maintain their financial health with intuitive tracking and visualization tools.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["React", "Node.js", "MongoDB"].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-indigo-600 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href="https://moneymate-client.vercel.app/login"
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  View Project
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

     

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-gray-600">No projects found in this category.</p>
          </motion.div>
        )}

      
      </div>
    </section>
  );
};

export default PortfolioPage;
