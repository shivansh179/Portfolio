import React from 'react';
import { FaPaintBrush, FaCode, FaPencilRuler, FaRegGrinHearts, FaProjectDiagram } from 'react-icons/fa';
import { GrMysql } from "react-icons/gr";

const Services = () => {
  return (
    <div className="bg-gray-100 py-13 px-3">
      <div className="text-center mb-12">
        <span className="bg-teal-700 text-white py-1 px-3 rounded-full text-sm font-bold">What I Do?</span>
        <h2 className="text-4xl font-bold mt-4">How I can help your next project</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="service-card text-center p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-3 hover:-translate-x-3 hover:shadow-xl">
          <FaPaintBrush className="text-teal-700 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
          <p className="text-gray-600">Bringing ideas to life with creative designs that captivate and inspire. I specialize in UI/UX, 2D & 3D animation, and logo design to make your brand stand out.</p>
        </div>
        <div className="service-card text-center p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-3 hover:-translate-x-3 hover:shadow-xl">
          <FaCode className="text-teal-700 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-gray-600">Building responsive and interactive websites with modern technologies like React, Next.js, and Tailwind CSS to deliver seamless user experiences.</p>
        </div>
        <div className="service-card text-center p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-3 hover:-translate-x-3 hover:shadow-xl">
          <FaPencilRuler className="text-teal-700 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
          <p className="text-gray-600">Crafting intuitive and visually appealing user interfaces using tools like Figma and Adobe XD to enhance user satisfaction and engagement.</p>
        </div>
        <div className="service-card text-center p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-3 hover:-translate-x-3 hover:shadow-xl">
          <FaRegGrinHearts className="text-teal-700 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
          <p className="text-gray-600">Tackling complex challenges with efficient data structures and algorithms, ensuring optimal solutions for real-world problems in software development.</p>
        </div>
        <div className="service-card text-center p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-3 hover:-translate-x-3 hover:shadow-xl">
          <GrMysql className="text-teal-700 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">SQL & Databases</h3>
          <p className="text-gray-600">Designing and managing robust databases, ensuring data integrity, and optimizing queries for efficient data retrieval and storage.</p>
        </div>
        <div className="service-card text-center p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-3 hover:-translate-x-3 hover:shadow-xl">
          <FaProjectDiagram className="text-teal-700 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Project Management</h3>
          <p className="text-gray-600">Leading teams to success with strategic planning, effective communication, and agile methodologies, ensuring projects are delivered on time and within scope.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
