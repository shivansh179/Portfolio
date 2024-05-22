import React from 'react';
import { FaPaintBrush, FaCode, FaPencilRuler, FaRegGrinHearts, FaChartArea, FaBroadcastTower } from 'react-icons/fa';

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
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <FaCode className="text-yellow-500 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Web Design</h3>
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <FaPencilRuler className="text-yellow-500 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <FaRegGrinHearts className="text-yellow-500 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">App Design & Develop</h3>
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <FaChartArea className="text-yellow-500 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Business Analysis</h3>
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <FaBroadcastTower className="text-yellow-500 text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">SEO Marketing</h3>
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
