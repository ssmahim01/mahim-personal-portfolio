import AboutMe from "../components/AboutMe/AboutMe";
import Designation from "../components/Designation/Designation";
import Skills from "../components/skills";

const Home = () => {
    return (
        <div>
            <Designation />
            <AboutMe />
            <Skills />
        </div>
    );
};

export default Home;