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
import Heading from "./Heading/Heading";

const Skills = () => {
    return (
        <div className="w-11/12 mx-auto pt-20">
            <Heading title={"My Skills"} subHeading={"Skills and what i am learning"} />

             <Marquee className="bg-base-300 p-5 rounded-md" speed={100} pauseOnHover={true}>
            <div className="flex gap-8 items-center">
                <h2 className="text-xl font-bold flex gap-4 items-center ml-10"><span>Frontend</span> <span>|</span></h2>

            <div className="bg-orange-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
                  <img
                    className="w-14 h-14 rounded-lg"
                    src={HTML5}
                    alt="Logo"
                  />
              </figure>

              <h4 className="text-center font-bold">HTML5</h4>
            </div>
            
            <div className="bg-indigo-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
                  <img
                    className="w-14 h-14 rounded-lg"
                    src={CSS3}
                    alt="Logo"
                  />
              </figure>

              <h4 className="text-center font-bold">CSS3</h4>
            </div>

            <div className="bg-blue-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
                  <img
                    className="w-20 h-14 rounded-lg"
                    src={TailwindCSS}
                    alt="Logo"
                  />
              </figure>

              <h4 className="text-center font-bold">Tailwind CSS</h4>
            </div>

            <div className="bg-amber-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
                  <img
                    className="w-14 h-14 rounded-lg"
                    src={JS}
                    alt="Logo"
                  />
              </figure>

              <h4 className="text-center font-bold">JavaScript</h4>
            </div>

            <div className="bg-gray-300 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
                  <img
                    className="w-14 h-14 rounded-md"
                    src={NextJS}
                    alt="Logo"
                  />
              </figure>

              <h4 className="text-center font-bold">Next JS</h4>
            </div>

            <div className="bg-teal-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
                  <img
                    className="w-14 h-14"
                    src={React}
                    alt="Logo"
                  />
              </figure>

              <h4 className="text-center font-bold">React</h4>
            </div>

            <div className="bg-orange-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
                  <img
                    className="w-14 h-14 rounded-lg"
                    src={Firebase}
                    alt="Logo"
                  />
              </figure>

              <h4 className="text-center font-bold">Firebase</h4>
            </div>

            <h2 className="text-xl font-bold flex gap-4 items-center ml-10"><span>Backend</span> <span>|</span></h2>

            <div className="bg-lime-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
                  <img
                    className="w-14 h-14"
                    src={NodeJS}
                    alt="Logo"
                  />
              </figure>

              <h4 className="text-center font-bold">Node JS</h4>
            </div>

            <div className="bg-green-100 rounded-lg py-8 px-24 flex flex-col gap-4 justify-center items-center">
            <figure>
                  <img
                    className="w-14 h-14"
                    src={MongoDB}
                    alt="Logo"
                  />
              </figure>

              <h4 className="text-center font-bold">MongoDB</h4>
            </div>
            </div>
          </Marquee>
        </div>
    );
};

export default Skills;