import React from 'react';

const AboutUs = () => {
  return (
    <div id="jai" className="flex flex-col items-center gap-130">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium text-amber-600">About Me</p>
        <p className="text-5xl font-bold text-black">Know Me More</p>
      </div>

      <div className="flex items-center gap-190">
        <div className="w-600">
          <div className="font-bold text-3xl">
            Hi, I'm <span className="text-4xl font-extrabold text-amber-600">Shivansh Shukla</span>
          </div>
          <div className="text-xl font-medium">
            I'm a designer & developer with a passion for web design and data structures. I enjoy developing simple, clean, and slick websites that provide real value to the end user and also I love solving data structure problems. I have created multiple major and minor projects for my learning and showcase. Delivering work within time which meets mine timeline is my motto.
          </div>
        </div>
        <div className="flex flex-col items-center w-300">
          <div className="rounded-full bg-amber-600 h-120 w-120 flex justify-center items-center">
            <span className="text-5xl font-bold text-white">2</span>
          </div>
          <div className="text-xl font-medium mt-4">years of experience</div>
        </div>
      </div>

      <div className="flex flex-row gap-100">
        {/* Responsive span elements */}
        <div className="flex flex-wrap md:flex-row"> {/* Wrap on medium screens */}
          <span className="font-medium mr-4 md:mr-8">Name:</span>
          <span>Shivansh Shukla</span>
        </div>
        <div className="flex flex-wrap md:flex-row">
          <span className="font-medium mr-4 md:mr-8">Email:</span>
          <span>
            <a href="mailto:prasantshukla89@gmail.com">prasantshukla89@gmail.com</a>
          </span>
        </div>
        <div className="flex flex-wrap md:flex-row">
          <span className="font-medium mr-4 md:mr-8">Date Of Birth:</span>
          <span>05 July, 2005</span>
        </div>
        <div className="flex flex-wrap md:flex-row">
          <span className="font-medium mr-4 md:mr-8">From:</span>
          <span>Uttar Pradesh, Jaunpur</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
