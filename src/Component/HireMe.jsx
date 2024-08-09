import React from 'react';
import logo from '../Images/landscape.jpg';
import { Link } from 'react-scroll';

const HomePage = () => {  
 return (
   <div className="home-page bg-gray-200 min-h-screen flex flex-col items-center justify-center p-8">
     <CallToAction />
   </div>
 );
};

const CallToAction = () => {
 
  return (
   <div className="call-to-action flex flex-col items-center justify-center h-80 bg-gray-800 w-full bg-cover bg-center relative " style={{ backgroundImage: `url(${logo})` }}>
     <div className="flex absolute inset-0 bg-gray-800 opacity-50 justify-center"></div>
     <div className="text-center">
       <h1 className="text-4xl font-bold text-white mb-4">Interested in working with me?</h1>
     </div>
     <Link to="get-in-touch" 
       smooth={true} ><button className="px-8 py-3 bg-teal-700 text-white font-bold rounded-full relative" >Hire Me!</button></Link>
   </div>
  );
};

export default HomePage;
