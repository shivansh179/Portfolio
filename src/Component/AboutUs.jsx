import React from 'react';

const AboutUs = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-white p-6 gap-40'>
      <div className='text-center mb-8'>
        <p className='text-yellow-500 uppercase tracking-widest font-semibold'>About Me</p>
        <h1 className='text-4xl font-bold'>Know Me More</h1>
      </div>
      <div className='flex flex-col md:flex-row items-start md:space-x-8'>
        <div className='md:w-2/3 mb-6 md:mb-0'>
          <h2 className='text-2xl font-bold mb-4'>Hi, I'm <span className='text-yellow-500'>Shivansh Shukla</span></h2>
          <p className='text-gray-700 mb-4 '>
            I'm a designer & developer with a passion for web design. I enjoy developing simple, clean, and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our motto.
          </p>
        </div>
        <div className='md:w-1/3 flex flex-col items-center md:items-start'>
          <div className='flex items-center mb-4'>
            <div className='bg-yellow-500 text-white rounded-full w-24 h-24 flex items-center justify-center text-3xl font-bold'>
              2
            </div>
            <div className='ml-4'>
              <p className='text-xl font-bold'>Years of</p>
              <p className='text-xl font-bold'>Experience</p>
            </div>
          </div>
        </div>
      </div>
          <div className='text-left flex flex-row gap-32'>
            <p className='mb-2'><span className='font-bold'>Name:</span> Shivansh Shukla</p>
            <p className='mb-2'><span className='font-bold'>Email:</span> <a href='mailto:chat@callum.com' className='text-blue-500'>prasantshukla89@gmail.com</a></p>
            <p className='mb-2'><span className='font-bold'>Date of Birth:</span> 05 July, 2005</p>
            <p className='mb-2'><span className='font-bold'>From:</span> Uttar Pradesh, India</p>
          </div>
    </div>
  );
};

export default AboutUs;
