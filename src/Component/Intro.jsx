import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../Images/shivansh.png';

const Intro = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-yellow-500 flex flex-col gap-24 p-4 relative">
      <header className="w-full flex justify-between items-center px-8">
        <h1 className="text-2xl font-bold">PORTFOLIO</h1>
        <div className="space-x-4">
          <a href="tel:060444434444" className="text-xl">📞 (+91) 6387427935</a>
          <button className="text-xl" onClick={toggleMenu}>☰</button>
        </div>
      </header>
      <main className="flex flex-col md:flex-row justify-around items-center mt-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold">HI, I'M A Web Developer</h2>
          <h1 className="text-6xl font-bold">DEVELOPER</h1>
          <p className="text-xl mt-4">based in India, Delhi.</p>
          <div className="space-x-4 mt-4">
            <button className="bg-black text-white px-4 py-2 rounded">View My Works</button>
            <button className="border border-black px-4 py-2 rounded">Contact Me</button>
          </div>
        </div>
        <img 
          src={logo} 
          alt="Profile" 
          className="w-48 h-48 md:w-80 md:h-80 rounded-full border-8 border-white mt-8 md:mt-0"
        />
      </main>
      <nav className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center space-y-4 transition-transform duration-500 ease-out ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <Link to="AboutUs" smooth={true} duration={500} className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>About Me</Link>
        <Link to="projects" smooth={true} duration={500} className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>Projects</Link>
        <Link to="resume" smooth={true} duration={500} className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>Resume</Link>
        <Link to="skills" smooth={true} duration={500} className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>Skills</Link>
        <Link to="detailed-projects" smooth={true} duration={500} className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>Detailed Projects</Link>
        <Link to="get-in-touch" smooth={true} duration={500} className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>Hire Me</Link>
        <Link to="get-in-touch" smooth={true} duration={500} className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>Get In Touch</Link>
      </nav>
    </div>
  );
};

export default Intro;
