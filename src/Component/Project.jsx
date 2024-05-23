import React from 'react';
import { FaPaintBrush, FaCode, FaPencilRuler, FaRegGrinHearts, FaProjectDiagram } from 'react-icons/fa';
import { GrMysql } from "react-icons/gr";

const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="text-center mb-12">
        <span className="bg-yellow-500 text-white py-1 px-3 rounded-full text-sm font-bold">What I Do?</span>
        <h2 className="text-4xl font-bold mt-4">How I can help your next project</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <FaPaintBrush className="text-yellow-500 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
          <p className="text-gray-600">I have almost 2 years of experience in graphic design, working with various technologies such as UI/UX, 2D animation, 3D animation, and logo design.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <FaCode className="text-yellow-500 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Web Design</h3>
          <p className="text-gray-600">I have a strong interest in web development and have been working in this field for the past year. I have experience with various technologies such as React, Next.js, JavaScript, Bootstrap, Tailwind CSS, and databases.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <FaPencilRuler className="text-yellow-500 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
          <p className="text-gray-600">I have a keen interest in UI design and have been practicing it for the past year. My experience includes working with various tools and technologies such as Figma, Sketch, Adobe XD, and wireframing.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <FaRegGrinHearts className="text-yellow-500 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Data Structures and Problem Solving</h3>
          <p className="text-gray-600">I have a strong interest in Data Structures and Algorithms (DSA) and have been studying and practicing them for the past year. My experience includes working with various data structures such as arrays, linked lists, trees, and graphs, as well as algorithms for sorting, searching, and dynamic programming.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <GrMysql className="text-yellow-500 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Structured Query Language</h3>
          <p className="text-gray-600">I have a strong interest in project management and leadership. Over the past year, I have planned and executed projects, coordinated teams, set goals, and ensured timely delivery while fostering a collaborative environment</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <FaProjectDiagram className="text-yellow-500 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Project Management</h3>
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
