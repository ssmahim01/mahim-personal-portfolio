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

      <div id="about-me">
        <AboutMe />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="education">
        <Education />
      </div>

      <div className="-mt-20" id="projects">
          <Projects />
        </div>

        <div className="-mt-20" id="contact-me">
          <ContactMe />
        </div>
      </div>
  );
};

export default Home;
