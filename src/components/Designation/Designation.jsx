import { VscGithubInverted } from "react-icons/vsc";
import myImg from "../../assets/ss-mahim.jpg";
import Resume from "../Resume";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Typewriter } from "react-simple-typewriter";

const Designation = () => {
  return (
    <div className="py-24">
      <div className="lg:w-4/5 w-11/12 mx-auto flex lg:flex-row flex-col-reverse justify-between items-center gap-8">
        <div className="space-y-2 lg:w-1/2">
        <h3 className="lg:text-3xl text-2xl md:text-left text-center font-bold">Hello, I am</h3>

        <h2 className="lg:text-4xl text-3xl md:text-left text-center font-extrabold">Sayman Shakil Mahim</h2>

          <h3 className="lg:text-3xl text-2xl md:text-left text-center font-extrabold pb-2">
            <span className="text-purple-600">
              <Typewriter
                words={[" A Web Developer", " A Front-End Developer", " A Backend Developer"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </span>
          </h3>

          <p className="lg:w-11/12 md:text-base text-sm font-medium md:text-left text-center pb-5">
            A web developer is a digital creator who transforms ideas into
            interactive realities on the internet. They design and build
            websites and applications. They are the architects of the online
            world, shaping how we interact with technology every day. I have
            made some unique websites, where i also used best technologies and
            ensure of functionality and usability.
          </p>

          <div className="flex gap-4 md:justify-start justify-center items-center pb-6">
            <button>
              <Link to="https://github.com/ssmahim01" target="_blank">
                <VscGithubInverted className="text-3xl rounded-full" />
              </Link>
            </button>

            <button>
              <Link
                to="https://www.linkedin.com/in/sayman-shakil-mahim"
                target="_blank"
              >
                <FaLinkedin className="text-3xl text-indigo-500" />
              </Link>
            </button>

            <button>
              <Link to="https://www.facebook.com/ssmahim" target="_blank">
                <FaFacebook className="text-3xl text-blue-500" />
              </Link>
            </button>

            <button>
              <Link to="https://www.instagram.com/iammz01" target="_blank">
                <GrInstagram className="text-3xl text-rose-500" />
              </Link>
            </button>
          </div>

          <Resume center={true} />
        </div>

        <figure>
          <img
            src={myImg}
            alt="Image of mine"
            className="lg:w-[400px] lg:h-[400px] md:w-72 md:h-72 w-60 h-60 object-cover border-4 border-gray-300 rounded-full"
          />
        </figure>
      </div>
    </div>
  );
};

export default Designation;
