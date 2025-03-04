import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMotorcycle } from 'react-icons/fa';
import { FiShoppingBag, FiUser, FiDollarSign, FiCheckCircle, FiSmile, FiClock, FiTrendingUp } from 'react-icons/fi';
import * as Fi from 'react-icons/fi';
import dopahiya from "../assets/dopahiya.png";
import Ecommerce from '../assets/ecommerce.png';
import Ayushdev from '../assets/ayushdev.png';
import MoneyMate from '../assets/moneymate.png';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm mx-auto"
    >
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="p-5">
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
        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-500">
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
      title: 'Ayush Ghodke Portfolio',
      category: 'Portfolio',
      image: Ayushdev,
      description: 'Personal developer portfolio showcasing skills, projects, and experience.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveLink: 'http://ayushdeveloper.netlify.app',
      completionDate: 'June 2024',
      icon: <FiUser />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Money Mate",
      category: "Finance",
      image: MoneyMate,
      description: "A personal finance management tool for tracking expenses and budgeting.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "https://moneymate-client.vercel.app/login",
      completionDate: "March 2025",
      icon: <FiDollarSign />,
      gradient: "from-pink-500 to-red-500"
    }
  ];

  const categories = ["All", "E-commerce", "Portfolio", "Bike Research", "Finance"];
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { number: "4+", label: "Projects Completed", icon: <FiCheckCircle />, ariaLabel: "View details about our completed projects" },
            { number: "10+", label: "Happy Clients", icon: <FiSmile />, ariaLabel: "Learn about our client satisfaction" },
            { number: "1+", label: "Years Experience", icon: <FiClock />, ariaLabel: "Explore our years of experience" },
            { number: "95%", label: "Success Rate", icon: <FiTrendingUp />, ariaLabel: "Check our project success rate" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              role="article"
              aria-label={stat.ariaLabel}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                {React.cloneElement(stat.icon, { className: "w-6 h-6" })}
              </div>
              <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {stat.number}
              </h4>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPage;
