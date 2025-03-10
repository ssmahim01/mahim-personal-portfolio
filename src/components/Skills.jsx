import Marquee from "react-fast-marquee";
import HTML5 from "../assets/logos/html-5.png";
import CSS3 from "../assets/logos/css-3.png";
import JS from "../assets/logos/js.png";
import React from "../assets/logos/react.png";
import TailwindCSS from "../assets/logos/tailwind-css.png";
import Firebase from "../assets/logos/firebase.png";
import NodeJS from "../assets/logos/nodejs.png";
import MongoDB from "../assets/logos/mongoDB.png";
import NextJS from "../assets/logos/next-js.jpeg";
import vsCode from "../assets/logos/vs-code.png";
import git from "../assets/logos/git.png";
import gitHub from "../assets/logos/gitHub.png";
import postman from "../assets/logos/postman.png";
import expressJS from "../assets/logos/express-js.png";
import Figma from "../assets/logos/figma.png";
import Heading from "./Heading/Heading";

const Skills = () => {
  return (
    <div className="w-11/12 mx-auto pt-20">
      <Heading
        title={"My Skills"}
        subHeading={"Skills and what I am learning"}
      />

      <Marquee
        className="bg-base-300 p-5 rounded-md"
        speed={100}
        pauseOnHover={true}
      >
        <div className="flex gap-8 items-center">
          <h2 className="text-xl font-bold flex gap-4 items-center ml-10">
            <span>Frontend</span> <span>|</span>
          </h2>

          <div className="bg-orange-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img className="w-14 h-14 rounded-lg" src={HTML5} alt="Logo" />
            </figure>

            <h4 className="text-center font-bold text-gray-900">HTML5</h4>
          </div>

          <div className="bg-indigo-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img className="w-14 h-14 rounded-lg" src={CSS3} alt="Logo" />
            </figure>

            <h4 className="text-center font-bold text-gray-900">CSS3</h4>
          </div>

          <div className="bg-blue-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img
                className="w-20 h-14 rounded-lg"
                src={TailwindCSS}
                alt="Logo"
              />
            </figure>

            <h4 className="text-center font-bold text-gray-900">Tailwind CSS</h4>
          </div>

          <div className="bg-amber-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img className="w-14 h-14 rounded-lg" src={JS} alt="Logo" />
            </figure>

            <h4 className="text-center font-bold text-gray-900">JavaScript</h4>
          </div>

          <div className="bg-gray-300 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img className="w-14 h-14 rounded-md" src={NextJS} alt="Logo" />
            </figure>

            <h4 className="text-center font-bold text-gray-900">Next JS</h4>
          </div>

          <div className="bg-teal-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img className="w-14 h-14" src={React} alt="Logo" />
            </figure>

            <h4 className="text-center font-bold text-gray-900">React</h4>
          </div>

          <div className="bg-orange-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img className="w-14 h-14 rounded-lg" src={Firebase} alt="Logo" />
            </figure>

            <h4 className="text-center font-bold text-gray-900">Firebase</h4>
          </div>

          <h2 className="text-xl font-bold flex gap-4 items-center ml-10">
            <span>Backend</span> <span>|</span>
          </h2>

          <div className="bg-lime-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img className="w-14 h-14" src={NodeJS} alt="Logo" />
            </figure>

            <h4 className="text-center font-bold text-gray-900">Node JS</h4>
          </div>

          <div className="bg-gray-300 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img className="w-16 h-14 rounded-md" src={expressJS} alt="Logo" />
            </figure>

            <h4 className="text-center font-bold text-gray-900">Express JS</h4>
          </div>

          <div className="bg-green-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img className="w-14 h-14" src={MongoDB} alt="Logo" />
            </figure>

            <h4 className="text-center font-bold text-gray-900">MongoDB</h4>
          </div>

          <h2 className="text-xl font-bold flex gap-4 items-center ml-10">
            <span>Tools</span> <span>|</span>
          </h2>

          <div className="bg-sky-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img className="w-14 h-14" src={vsCode} alt="Logo" />
            </figure>

            <h4 className="text-center font-bold text-gray-900">VS Code</h4>
          </div>

          <div className="bg-amber-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img className="w-14 h-14" src={git} alt="Logo" />
            </figure>

            <h4 className="text-center font-bold text-gray-900">Git</h4>
          </div>

          <div className="bg-gray-300 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img className="w-14 h-14 rounded-md" src={gitHub} alt="Logo" />
            </figure>

            <h4 className="text-center font-bold text-gray-900">Git Hub</h4>
          </div>

          <div className="bg-orange-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img className="w-14 h-14 rounded-md" src={postman} alt="Logo" />
            </figure>

            <h4 className="text-center font-bold text-gray-900">Postman</h4>
          </div>

          <div className="bg-purple-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
              <img className="w-14 h-14 rounded-md" src={Figma} alt="Logo" />
            </figure>

            <h4 className="text-center font-bold text-gray-900">Figma</h4>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
