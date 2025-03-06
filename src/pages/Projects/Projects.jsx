import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Loading from "../../components/Loading";
import { MdReadMore } from "react-icons/md";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    await axios.get("projects.json").then((res) => {
      setProjects(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="lg:w-4/5 w-11/12 mx-auto pt-20 pb-16">
      <h2 className="text-center md:text-4xl text-3xl mb-2 font-extrabold">
        <span className="text-fuchsia-600">
          <Typewriter
            words={["Latest", "Best", "Unique"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </span>{" "}
        Projects
      </h2>

      <p className="text-center font-semibold mb-6">
        Few projects, these has unique design
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card bg-base-100 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <img
              className="w-full h-52 rounded-t-lg"
              src={project.image}
              alt={project.name}
            />

            <div className="p-4 space-y-2">
              <h2 className="lg:text-xl text-lg font-bold">
                Project: <span>{project.name}</span>
              </h2>

              <p className="font-semibold">
                {project.detailedDescription.slice(0, 60)}...
              </p>

              <Link to={`/project/${project.id}`}>
                <button className="mt-5 btn bg-purple-600 rounded-none border-none text-white font-bold px-8 hover:text-white hover:bg-fuchsia-600 flex gap-2 items-center">
                  <span className="text-lg">View More</span>{" "}
                  <MdReadMore className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
