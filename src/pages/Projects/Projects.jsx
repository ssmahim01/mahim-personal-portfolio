import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading/Heading";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("projects.json").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div className="lg:w-4/5 w-11/12 mx-auto py-20">
        <Heading title={"Latest Projects"} subHeading={"Few projects, these has unique design"} />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card bg-base-100 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <img
              className="w-full h-52 rounded-t-xl"
              src={project.image}
              alt={project.name}
            />

            <div className="p-4 space-y-2">
              <h2 className="lg:text-xl text-lg text-gray-900 font-bold">
                Project: <span className="text-gray-700">{project.name}</span>
              </h2>

              <p className="text-gray-500 font-semibold">{project.briefDescription.slice(0, 60)}...</p>
              
              <Link to={`/project/${project.id}`}><button className="mt-5 btn bg-violet-600 rounded-none border-none text-lg text-white font-bold px-8 hover:btn-neutral">View More</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
