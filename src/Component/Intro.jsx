import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../Images/avatar me.jpg';

const Intro = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-teal-700 flex flex-col gap-8 p-4 relative">
      <header className="w-full flex justify-between items-center px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-xl md:text-2xl text-white font-bold">PORTFOLIO</h1>
        <div className="space-x-4 flex items-center">
          <a href="tel:6387427935" className="text-sm md:text-xl hidden sm:inline">📞 (+91) 6387427935</a>
          <button className="text-xl text-white md:hidden" onClick={toggleMenu}>☰</button>
        </div>
      </header>
      <main className="flex flex-col md:flex-row justify-around items-center mt-8 space-y-8 md:space-y-0 md:space-x-8 max-w-6xl mx-auto text-center md:text-left md:gap-44">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl text-white font-bold">HI, I'M A Web</h2>
          <h1 className="text-4xl md:text-6xl text-white font-bold">DEVELOPER</h1>
          <p className="text-lg md:text-xl text-white mt-4">based in India, Delhi.</p>
          <div className="md:space-x-4 gap-4 mt-4 flex flex-col md:flex-row items-center md:justify-start">
            <Link to="detailed-projects" smooth={true}>
              <button className="bg-black text-white px-8 py-2 rounded w-full md:w-auto">View My Works</button>
            </Link>
            <Link to="get-in-touch" smooth={true}>
              <button className="border-2 border-black font-bold px-10 py-2 text-black rounded w-full md:w-auto">Contact Me</button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={logo}
            alt="Profile"
            className="w-40 h-40 md:w-80 md:h-80 rounded-full border-4 border-white mt-8 md:mt-0"
          />
        </div>
      </main>
      <nav className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center space-y-4 transition-transform duration-500 ease-out ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <Link to="AboutUs" smooth={true} duration={500} className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>About Me</Link>
        <Link to="projects" smooth={true} duration={500} className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>Projects</Link>
        <Link to="resume" smooth={true} duration={500} className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>Resume</Link>
        <Link to="skills" smooth={true} duration={500} className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>Skills</Link>
        <Link to="detailed-projects" smooth={true} duration={500} className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>Detailed Projects</Link>
        <Link to="get-in-touch" smooth={true} duration={500} className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>Hire Me</Link>
        <Link to="get-in-touch" smooth={true} duration={500} className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>Get In Touch</Link>
        <Link to="#" onClick={toggleMenu} className="text-white text-2xl cursor-pointer">Close</Link>
      </nav>
    </div>
  );
};

export default Intro;
