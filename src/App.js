import AboutUs from "./Component/AboutUs";
import Intro from "./Component/Intro";
import Portfolio from "./Component/Portfolio.jsx";
import Project from './Component/Project.jsx';
import Resume from "./Component/Resume.jsx"; 
import Skills from "./Component/Skills.jsx";
import HireMe from './Component/HireMe.jsx'
import GetInTouch from './Component/GetInTouch.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Author from "./Component/Author.jsx";
 

function App() {
  return (
    <div className="bg-teal-700 " id="one">
    
     <Intro/>
     <section id="AboutUs" className="bg-gray-100 min-h-screen">
        <AboutUs/>
      </section>
      <section >
          <Project/>
     </section>
     <section id="resume" className="  bg-gray-100 ">
         <Resume/>      
      </section>


     <section id="skills" className="  bg-gray-100  ">
         <Skills/>
      </section>

     <section id="detailed-projects" className="min-h-screen bg-gray-100  ">
       <Portfolio/>
      </section>

     <section id="hire-me" className="min-h-screen bg-gray-100  ">
       
     <HireMe/>
      </section>



     <section id="get-in-touch" className="bg-gray-100  w-full">
      <GetInTouch/>
      <Author/>
      </section>

    </div>
  );
}

export default App;
