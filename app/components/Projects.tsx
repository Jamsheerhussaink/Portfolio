'use client';

import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaBrain } from 'react-icons/fa';

// Step 1: Define a TypeScript type for a single project
interface ProjectType {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  codeLink: string;
  demoLink: string;
  cornerIcon: React.ReactNode; // The type for a React component/icon
}

// Step 2: Define your data and apply the type
const projectsData: ProjectType[] = [
  {
    title: 'Anime Recommendation System',
    description: 'Created a machine learning model to recommend animes based on the genre, rating, and type. The model was trained on a large dataset and provides personalized suggestions.',
    imageUrl: '/assets/image.jpg',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    codeLink: 'https://github.com/Jamsheerhussaink/Anime-recommendation.git',
    demoLink: 'https://anime-recommendation-gm08.onrender.com/',
    cornerIcon: <FaBrain />,
  },
];

// Step 3: Define the ProjectCard component and use the type for its props
const ProjectCard = ({ title, description, imageUrl, tags, codeLink, demoLink, cornerIcon }: ProjectType) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white p-2 rounded-md text-xl">
          {cornerIcon}
        </div>
      </div>
      
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag: string) => <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>)}
        </div>
        
        <div className="flex items-center gap-4 mt-auto">
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">
            <FaGithub /> Code
          </a>
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-gray-700 transition-colors">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Step 4: Your main Projects component can now find everything it needs
const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my AI and machine learning projects that demonstrate my skills and passion for innovation.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;