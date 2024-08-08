import React from 'react';
import disney from '../Images/disney.jpg';
import fintech from '../Images/finctech.jpg';
import aqi from '../Images/aqi.jpg';

const Portfolio = () => {
  return (
    <div className="portfolio bg-gray-100 min-h-screen p-8">
      <Header />
       <Projects />
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center header mb-4">
    <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">Portfolio</h1>
    <h2 className="text-2xl text-gray-600 mt-2">Some of my most recent projects</h2>
  </div>
  
  );
};

 
const Projects = () => {
  // Replace with your actual project data
  const projects = [
    { id: 1, image: disney, title: 'Disney', link: 'https://disney-4cmk.vercel.app/' },
    { id: 2, image: fintech, title: 'Finctech', link: 'https://fintech-beige-seven.vercel.app/' },
    { id: 3, image: aqi, title: 'Aqi', link: 'https://air-pollution-analyzer.vercel.app/' },
   ];

  return (
    <div className="projects grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

const Project = ({ project }) => {
  return (
    <div className="project relative rounded shadow">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded"
        />
        <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <button className="px-4 py-2 bg-white text-black rounded">View Details</button>
        </div>
      </a>
    </div>
  );
};

export default Portfolio;
