import React from 'react';

const Resume = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="text-center mb-12">
        <span className="bg-teal-700 text-white py-1 px-3 rounded-full text-sm font-bold">Resume</span>
        <h2 className="text-4xl font-bold mt-4">A summary of My Resume</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">My Education</h3>
          <div className="border-l-4 border-teal-700 pl-4 mb-6">
            <h4 className="text-xl font-semibold">Bachelor in Computer Engineering</h4>
            <p className="text-gray-600">SRM University , Delhi - Ncr/ 2021 - 2025</p>
            <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          </div>
          <div className="border-l-4 border-teal-700 pl-4">
            <h4 className="text-xl font-semibold">Schooling</h4>
            <p className="text-gray-600">Nehru Balodyan Inter College</p>
            <p className="text-gray-600">Completed schooling from my hometown school Nehru Baldyan Inter College Jaunpur</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">My Experience</h3>
          <div className="border-l-4 border-teal-700 pl-4 mb-6">
            <h4 className="text-xl font-semibold">Front End Developer</h4>
            <p className="text-gray-600">Worked on some perosnal projects</p>
            <p className="text-gray-600">Tried to build some minor projects using javascript</p>
          </div>
          <div className="border-l-4 border-teal-700 pl-4">
            <h4 className="text-xl font-semibold">Full stack Developer</h4>
            <p className="text-gray-600">Large Projects / 2023 - 2024</p>
            <p className="text-gray-600">Build some major projects using frontend and backend both technologies and databases.</p>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Resume;
