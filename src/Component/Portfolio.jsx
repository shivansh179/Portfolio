import React from 'react';
// import logo from '../Images/shivansh.png'
import disney from '../Images/disney.jpg'
import fintech from '../Images/finctech.jpg'
import aqi from '../Images/aqi.jpg'

const Portfolio = () => {
  return (
    <div className="portfolio bg-gray-100 min-h-screen p-8">
      <Header />
      <FilterOptions />
      <Projects />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header mb-4">
      <h1 className="text-4xl font-bold text-gray-800">Portfolio</h1>
      <h2 className="text-2xl text-gray-600">Some of my most recent projects</h2>
    </div>
  );
};

const FilterOptions = () => {
  const options = ['All', 'Details', 'Mockups', 'Youtube Videos', 'Vimeo Videos'];
  return (
    <div className="filter-options flex space-x-4 mb-8">
      {options.map((option, index) => (
        <button key={index} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">{option}</button>
      ))}
    </div>
  );
};

const Projects = () => {
  // Replace with your actual project data
  const projects = [
    { id: 1, image: disney, title: 'Clock Project', link: 'https://disney-4cmk.vercel.app/' },
    { id: 2, image: fintech, title: 'Lightbulb Project', link:'https://fintech-beige-seven.vercel.app/' },
    { id: 3, image: aqi, title: 'Satellite Project', link:'https://air-pollution-analyzer.vercel.app/' },
    { id: 3, image: 'satellite.jpg', title: 'Satellite Project' },
  ];

  return (
    <div className="projects grid grid-cols-3 gap-4">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

const Project = ({ project }) => {
  return (
    <div className="project relative">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded shadow" />
      <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
        <button className="px-4 py-2 bg-white text-black rounded">View Details</button>
      </div></a>
    </div>
  );
};

export default Portfolio;
