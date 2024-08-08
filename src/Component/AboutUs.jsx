import React from 'react';

const AboutUs = () => {
  return (
    <div id="jai" className="flex flex-col items-center ">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium text-teal-700">About Me</p>
        <p className="text-5xl font-bold text-black">Know Me More</p>
      </div>

      <div className="flex items-center md:flex-row flex-col ">
        <div className="w-600 mt-10  ">
          <div className="font-bold text-3xl">
            Hi, I'm <span className="text-4xl font-extrabold text-teal-700">Shivansh Shukla</span>
          </div>
          <div className="text-xl font-medium mt-5 md:max-w-screen-sm md:mr-64">
            I'm a designer & developer with a passion for web design and data structures. I enjoy developing simple, clean, and slick websites that provide real value to the end user and also I love solving data structure problems. I have created multiple major and minor projects for my learning and showcase. Delivering work within time which meets mine timeline is my motto.
          </div>
        </div>
        <div className="flex flex-col items-center w-300">
          <div className="rounded-full bg-teal-700 md:h-32 md:w-52  h-24 w-40 flex justify-center items-center mt-7">
            <span className="md:text-9xl font-bold  text-7xl text-white ">2</span>
          </div>
          <div className="text-xl font-medium ">years of experience</div>
        </div>
      </div>

       
        
       
    </div>
  );
};

export default AboutUs;
