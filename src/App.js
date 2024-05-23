import AboutUs from "./Component/AboutUs";
import Intro from "./Component/Intro";
import Portfolio from "./Component/Portfolio.jsx";
import Project from './Component/Project.jsx';
import Resume from "./Component/Resume.jsx"; 
import Skills from "./Component/Skills.jsx";
import HireMe from './Component/HireMe.jsx'
import GetInTouch from './Component/GetInTouch.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Abut.scss'


function App() {
  return (
    <div className="bg-pale-yellow h-screen" id="one">
     <Intro/>
     <section id="AboutUs" className="min-h-screen bg-gray-100 p-8">
        <AboutUs/>
      </section>
     <Project/>
     <section id="resume" className="min-h-screen bg-gray-100 p-8">
         <Resume/>      
      </section>


     <section id="skills" className="min-h-screen bg-gray-100 p-8">
         <Skills/>
      </section>

     <section id="detailed-projects" className="min-h-screen bg-gray-100 p-8">
       <Portfolio/>
      </section>

     <section id="hire-me" className="min-h-screen bg-gray-100 p-8">
       
     <HireMe/>
      </section>



     <section id="get-in-touch" className="min-h-screen bg-gray-100 p-8">
      <GetInTouch/>
     
      </section>

    </div>
  );
}

export default App;
