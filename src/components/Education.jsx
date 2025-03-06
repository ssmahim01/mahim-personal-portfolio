import Heading from "./Heading/Heading";
import collegeIcon from "../assets/college.png";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className="lg:w-4/5 w-11/12 mx-auto pt-20 lg:pb-0 pb-10">
      <Heading
        title={"My Education"}
        subHeading={"Information of academic qualifications"}
      />

      <section className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div className="bg-base-200 shadow-md hover:shadow-xl transition-all hover:translate-y-4 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div className="hover:translate-x-4 hover:drop-shadow-lg">
              <FaGraduationCap className="text-7xl" />
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-bold">Bachelor Of Arts in English</h4>
              <p className="text-sm font-medium flex gap-1 items-center">
                <span className="text-base">2023 -</span>{" "}
                <span className="badge bg-purple-500 pb-[2px] text-white font-medium">
                  Running
                </span>
              </p>
            </div>
          </div>

          <div className="pt-3">
            <p className="font-medium">
              I am currently pursuing a Bachelor of Arts at one of the top
              institutions in Sylhet, Bangladesh. While my academic background
              is in English, my passion for web development has driven me to
              explore programming alongside my studies. This blend of creativity
              and technology allows me to think critically and develop
              innovative solutions.
            </p>

            <ul className="pt-2 space-y-2 pl-4">
              <li className="list-disc">
                <p className="text-base font-bold">
                  Department: <span className="font-semibold">English</span>
                </p>
              </li>

              <li className="list-disc">
                <p className="text-base font-bold">
                  University Name:{" "}
                  <span className="font-semibold">
                    Dakshin Surma Govt. College & University
                  </span>
                </p>
              </li>

              <li className="list-disc">
                <p className="text-base font-bold">
                  Session: <span className="font-semibold">2023 - 2027</span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-base-200 shadow-md hover:shadow-xl transition-all hover:translate-y-4 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div className="hover:translate-x-4 hover:drop-shadow-lg">
              <img src={collegeIcon} className="w-14 h-14" alt="College Icon" />
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-bold">
                Higher Secondary Certificate (HSC)
              </h4>
              <p className="text-sm font-medium flex gap-1 items-center">
                <span className="badge badge-success pb-[2px] text-white font-medium">
                  Completed
                </span>
              </p>
            </div>
          </div>

          <div className="pt-3">
            <p className="font-medium">
              I completed my Higher Secondary studies with excellent grades. I was 
              gaining my knowledge in business and science. This period
              strengthened my analytical thinking, time management, and ability
              to meet deadlines. The 2.5-year journey provided valuable skills
              that support my academic and professional growth.
            </p>

            <ul className="pt-2 space-y-2 pl-4">
              <li className="list-disc">
                <p className="text-base font-bold">
                  College Name:{" "}
                  <span className="font-semibold">
                    Govt. Madan Mohan College
                  </span>
                </p>
              </li>

              <li className="list-disc">
                <p className="text-base font-bold">
                  Session: <span className="font-semibold">2020 - 2022</span>
                </p>
              </li>

              <li className="list-disc">
                <p className="text-base font-bold flex gap-1 items-center">
                  Grade: <span className="font-semibold">G.P.A - 4.42 <span className="badge badge-neutral text-white font-medium pb-[2px] text-sm">Out Of 5</span></span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
