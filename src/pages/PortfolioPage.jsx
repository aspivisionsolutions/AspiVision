import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import dopahiya from "../assets/dopahiya.png";
import Ecommerce from '../assets/ecommerce.png';
import Ayushdev from '../assets/ayushdev.png';
import WadhwaEvents from '../assets/wadhwaevents.png';
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
      title: "Money Mate",
      category: "Finance",
      image: MoneyMate,
      description: "A personal finance management tool for tracking expenses and budgeting.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "https://moneymate-client.vercel.app/login",
      completionDate: "March 2025",
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
    }
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categories = ["All", "E-commerce","Portfolio", "Bike Research", "Finance"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 mt-20">
          <h1 className="text-4xl font-bold text-gray-900">Our Portfolio</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of projects across various industries and solutions.
          </p>
        </div>

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
