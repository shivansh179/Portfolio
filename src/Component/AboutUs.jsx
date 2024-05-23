import React from 'react';


const AboutUs = () => {
  return (
    <div id='jai'>
     <div className='upper'>
      <p className='about'>About Me</p>
      <p className='know'>Know Me More</p>
      </div>

     <div className='mid'>
      <div className='detail'>
         <div className='intro'>Hi, I'm <span>Shivansh Shukla</span></div>
         <div className='about'>I'm a designer & developer with a passion for web design and data structures. I enjoy developing simple, clean, and slick websites that provide real value to the end user and also I love solving data structure problems. I have created multiple major and minor projects for my learngin and show case. Delivering work within time which meets mine timeline  is my motto.</div>
      </div>
      <div className='experience'>
        <div className='number'>2</div>  
        <div className='years'>years of exprience</div>
        </div>
     </div>


     <div className='footer'>
      <span> <span className='name'>Name:</span>Shivansh Shukla</span> 
      <span className='email'>Email:<a href="mailto:prasantshukla89@gmail.com">prasantshukla89@gmail.com</a></span>
      <span><span className='dob'> Date Of Birth : </span>05 July, 2005</span>
      <span><span className='address'>From:</span> Uttar Pradesh , Jaunpur</span>
      </div>
    </div>
  );
};

export default AboutUs;
