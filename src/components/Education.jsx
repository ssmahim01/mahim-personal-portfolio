import Heading from "./Heading/Heading";
import colorBG from "../assets/color-bg.png";
import universityImg from "../assets/university.jpg";

const Education = () => {
  return (
    <div className="lg:w-4/5 w-11/12 mx-auto pt-20 lg:pb-0 pb-10">
      <Heading
        title={"My Education"}
        subHeading={"In here, I am currently studying"}
      />

      <div
        className="bg-cover bg-center border border-gray-200 shadow-md rounded-lg p-6"
        style={{
          backgroundImage: `url('${colorBG}')`,
        }}
      >
        <div className="flex lg:flex-row-reverse flex-col justify-between items-center gap-5">

            <figure className="w-full lg:w-1/2 md:block md:h-80 h-60">
                <img className="w-full h-full shadow-md rounded-xl" src={universityImg} alt="Image of University" />
            </figure>

          <div className="lg:w-1/2 space-y-4 lg:pl-4">
            <h2 className="md:text-4xl text-2xl md:text-left text-center font-bold mb-3">
              Educational Information
            </h2>

            <p className="text-gray-600 md:text-left text-center font-medium">I am a student of Honours second year. My studying location is Sylhet, Bangladesh.</p>

            <ul className="my-4 space-y-3 pl-4">
            <li className="list-disc"><p className="text-lg text-gray-800 font-bold">Subject Name: <span className="text-gray-600 font-semibold">English</span></p></li>

            <li className="list-disc"><p className="text-lg text-gray-800 font-bold">University Name: <span className="text-gray-600 font-semibold">Dakshin Surma Govt. College & University</span></p></li>

            <li className="list-disc"><p className="text-lg text-gray-800 font-bold">Year: <span className="text-gray-600 font-semibold">2025</span></p></li>

            <li className="list-disc"><p className="text-lg text-gray-800 font-bold">Studying Status: <span className="badge badge-warning p-3 mb-1 text-white font-medium">Running</span></p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
