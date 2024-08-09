import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import disney from '../Images/disney.jpg';
import fintech from '../Images/finctech.jpg';
import aqi from '../Images/aqi.jpg';
import Ciie from '../Images/ciie.jpg';

const Portfolio = () => {
  return (
    <div className="portfolio bg-gray-100 min-h-screen p-8">
      <Header />
      <Projects />
    </div>
  );
};

const Header = React.memo(() => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  React.useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [controls, inView]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center header mb-4"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">Portfolio</h1>
      <h2 className="text-1xl text-gray-600 mt-2 font-semibold">Some of my most recent projects</h2>
    </motion.div>
  );
});

const Projects = () => {
  const projects = [
    { 
        id: 1, 
        image: disney, 
        title: 'Disney Clone', 
        link: 'https://disney-4cmk.vercel.app/', 
        text: "This project is a clone of the Disney+ Hotstar application. It was my first project, where I aimed to replicate the design and functionality of the original platform. Through this project, I gained hands-on experience in front-end development, particularly in creating a seamless user interface that mirrors the real Disney+ Hotstar experience." 
    },
    { 
        id: 2, 
        image: fintech, 
        title: 'Fintech Authentication', 
        link: 'https://fintech-beige-seven.vercel.app/', 
        text: "This project focuses on developing alternative methods for digital transaction authentication, beyond the traditional OTP system. The challenge was posed by a fintech company that wanted to reduce dependence on telecom companies for OTPs. I implemented various authentication methods, including biometric recognition, face ID, magic links, and security pins, providing a more secure and reliable solution." 
    },
    { 
        id: 3, 
        image: aqi, 
        title: 'Air Quality Index Analyzer', 
        link: 'https://air-pollution-analyzer.vercel.app/', 
        text: "This web app provides real-time analysis of air pollution levels. Users can input the coordinates of a location to check the air quality index (AQI) and see detailed information about the pollutants and gases present in the air. This project helped me delve into API integration and environmental data analysis, offering valuable insights into the current air quality conditions." 
    },
    { 
        id: 4, 
        image: Ciie, 
        title: 'CIIE SRMUH', 
        link: 'https://ciiesrmuh.in/', 
        text: "This web app was developed for my college's incubation cell, which focuses on innovation and entrepreneurship. The platform serves both students and administration, facilitating the management of events, workshops, and student data. It features separate interfaces for clients and admins, making it a comprehensive tool for organizing and managing incubation activities. This project enhanced my skills in full-stack development and user management." 
    },
  ];

  return (
    <div className="projects grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <Project key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

const Project = React.memo(({ project, index }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  React.useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [controls, inView]);

  return (
    <motion.div 
      className="project relative rounded shadow"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        visible: { opacity: 1, x: 0 }
      }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      style={{ willChange: 'transform, opacity' }}
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <p className='border-3 pl-4 bg-teal-700 font-bold text-white  w-56 rounded-md'>{project.title}</p>
        <img
          src={project.image}
          alt={project.title}
          className="w-fit h-fit md:w-full md:h-64 object-cover rounded"
        />
        <p className='m-3 font-semibold text-teal-700'>{project.text}</p>
        <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <button className="px-4 py-2 bg-white text-black rounded">View Details</button>
        </div>
      </a>
    </motion.div>
  );
});

export default Portfolio;
