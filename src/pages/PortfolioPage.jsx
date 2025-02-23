import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const PortfolioPage = () => {
  const allProjects = [
    // E-commerce projects
    {
      id: 1,
      title: "TechGrowth E-commerce Platform",
      category: "E-commerce",
      description: "A fully responsive e-commerce platform with advanced filtering, search capabilities, and secure payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/400/200",
      liveLink: "#",
      completionDate: "Jan 2024"
    },
    {
      id: 2,
      title: "FashionForward Online Store",
      category: "E-commerce",
      description: "Trendy fashion e-commerce platform with virtual try-on feature, wishlist functionality, and personalized recommendations.",
      technologies: ["React", "Firebase", "TensorFlow.js"],
      image: "/api/placeholder/400/200",
      liveLink: "#",
      completionDate: "Nov 2023"
    },
    // Corporate websites
    {
      id: 3,
      title: "EcoSmart Corporate Website",
      category: "Corporate",
      description: "Modern corporate website with interactive elements, performance optimization, and comprehensive CMS integration.",
      technologies: ["React", "Tailwind CSS", "Sanity.io"],
      image: "/api/placeholder/400/200",
      liveLink: "#",
      completionDate: "Mar 2024"
    },
    {
      id: 4,
      title: "Global Trade Partners Portal",
      category: "Corporate",
      description: "Multi-language corporate website with interactive data visualizations, document management system, and client portal.",
      technologies: ["React", "D3.js", "Express", "MongoDB"],
      image: "/api/placeholder/400/200",
      liveLink: "#",
      completionDate: "Sep 2023"
    },
    // Blog platforms
    {
      id: 5,
      title: "TravelBlog Platform",
      category: "Blog",
      description: "Feature-rich blog platform with social sharing integration, comment system, and personalized content recommendations.",
      technologies: ["React", "Express", "PostgreSQL"],
      image: "/api/placeholder/400/200",
      liveLink: "#",
      completionDate: "Feb 2024"
    },
    {
      id: 6,
      title: "CulinaryCorner Recipe Blog",
      category: "Blog",
      description: "Recipe sharing platform with filtering options, rating system, and nutrition information calculation.",
      technologies: ["React", "GraphQL", "MongoDB"],
      image: "/api/placeholder/400/200",
      liveLink: "#",
      completionDate: "Dec 2023"
    },
    // Web Applications
    {
      id: 7,
      title: "TaskMaster Project Management Tool",
      category: "Web Application",
      description: "Intuitive project management application with real-time collaboration features, task dependencies, and time tracking.",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      image: "/api/placeholder/400/200",
      liveLink: "#",
      completionDate: "Apr 2024"
    },
    {
      id: 8,
      title: "HealthTrack Wellness Platform",
      category: "Web Application",
      description: "Comprehensive wellness tracking application with goal setting, progress visualization, and integration with fitness devices.",
      technologies: ["React", "Node.js", "PostgreSQL", "OAuth 2.0"],
      image: "/api/placeholder/400/200",
      liveLink: "#",
      completionDate: "Jan 2023"
    }
  ];

  const categories = ["All", "E-commerce", "Corporate", "Blog", "Web Application"];
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