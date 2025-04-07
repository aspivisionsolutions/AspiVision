import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>

        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Push this section to the bottom */}
        <div className="mt-auto flex justify-between items-center pt-4">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            View Live
          </a>
          <span className="text-sm text-gray-500">{project.completionDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
