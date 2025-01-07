import AboutMe from "../components/AboutMe/AboutMe";
import Designation from "../components/Designation/Designation";
import Education from "../components/Education";
import Skills from "../components/skills";
import ContactMe from "./ContactMe/ContactMe";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div>
      <div id="designation">
        <Designation />
      </div>

      <div id="about-me" className="-mt-32">
        <AboutMe />
      </div>

      <div className="lg:w-[87%] -mt-6 mx-auto" id="skills">
        <Skills />
      </div>

      <div id="education" className="mb-12">
        <Education />
      </div>

      <div className="-mt-16" id="projects">
          <Projects />
        </div>

        <div className="-mt-16" id="contact-me">
          <ContactMe />
        </div>
      </div>
  );
};

export default Home;
