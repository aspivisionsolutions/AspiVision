import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import dopahiya from "../assets/dopahiya.png";
import Ecommerce from '../assets/ecommerce.png';
import Ayushdev from '../assets/ayushdev.png';
import MoneyMate from '../assets/moneymate.png'; // Assuming you have the Money Mate image

const PortfolioPage = () => {
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
    }
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categories = ["All", "E-commerce", "Portfolio", "Bike Research", "Finance"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mt-20 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Our Latest Projects
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how we've helped businesses transform their digital presence and achieve their goals through innovative solutions and cutting-edge technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
