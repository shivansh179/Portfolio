import AboutUs from "./Component/AboutUs";
import Intro from "./Component/Intro";
import Portfolio from "./Component/Portfolio.jsx";
import Project from './Component/Project.jsx';
import Resume from "./Component/Resume.jsx"; 
import Skills from "./Component/Skills.jsx";
import HireMe from './Component/HireMe.jsx'
import GetInTouch from './Component/GetInTouch.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="bg-pale-yellow h-screen">
     <Intro/>
     <Project/>
     <section id="resume" className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-3xl font-bold">Resume</h2>
        <Resume/>      
      </section>

     <section id="AboutUs" className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-3xl font-bold">About</h2>
       <AboutUs/>
      </section>

     <section id="skills" className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-3xl font-bold">Skill</h2>
        <Skills/>
      </section>

     <section id="detailed-projects" className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-3xl font-bold">Detailed Project</h2>  
      <Portfolio/>
      </section>

     <section id="hire-me" className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-3xl font-bold">Detailed Project</h2>  
      
     <HireMe/>
      </section>



     <section id="get-in-touch" className="min-h-screen bg-gray-100 p-8">
        {/* <h2 className="text-3xl font-bold">Get In Touch</h2>   */}
     <GetInTouch/>
     
      </section>

    </div>
  );
}

export default App;
