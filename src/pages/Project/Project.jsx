import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import Loading from "../../components/Loading";
import { FaLink } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const Project = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const projectData = data.find(
          (singleProject) => singleProject.id === parseInt(id)
        );
        setProject(projectData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the project:", error);
        setProject([]);
        setLoading(true);
      });
  }, [id]);

  if (loading) return <Loading />;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-center text-rose-500 font-bold">
          Project not found.
        </p>
      </div>
    );
  }

  return (
    <div className="py-20 lg:w-4/5 w-11/12 mx-auto">
      <Heading title={`${project.name}`} />

      <div className="flex flex-col border border-gray-200 bg-base-100 gap-4 shadow-sm rounded-lg">
        <img
          src={project.image}
          alt={project.name}
          className="w-full lg:h-96 md:h-72 h-52 object-cover rounded-t-lg mb-4"
        />

        <div className="lg:pr-14 pr-8 pl-5 pb-8 space-y-3">
          <h1 className="md:text-3xl text-2xl text-gray-900 font-bold mb-3">
            Project Name: <span className="text-gray-800">{project.name}</span>
          </h1>
          <p className="text-gray-500 font-medium">
            <strong className="text-gray-800 font-bold">Description:</strong>{" "}
            {project.briefDescription}
            {". "}
            {project.detailedDescription}
          </p>

          <div className="flex flex-col gap-1">
            <strong className="text-gray-800 font-bold">
              Main Technology Stack:
            </strong>{" "}
            <div>
              {project.mainTechStack &&
                project.mainTechStack.map((tech) => (
                  <p
                    key={tech}
                    className="my-1 ml-2 badge badge-outline text-gray-700 font-bold"
                  >
                    {tech}
                  </p>
                ))}
            </div>
          </div>

          <div className="text-gray-500 font-medium">
            <strong className="text-gray-800 font-bold">
              Facing Challenges:
            </strong>{" "}
            {project.challenges &&
              project.challenges.map((challenge) => (
                <ul key={challenge} className="ml-5">
                  <li className="list-disc">{challenge}</li>
                </ul>
              ))}
          </div>
          <div className="text-gray-500 font-medium">
            <strong className="text-gray-800 font-bold">Short Comings:</strong>{" "}
            {project.shortcomings &&
              project.shortcomings.map((short) => (
                <ul key={short} className="ml-5">
                  <li className="list-disc">{short}</li>
                </ul>
              ))}
          </div>
          <div className="text-gray-500 font-medium">
            <strong className="text-gray-800 font-bold">
              Planned Improvements:
            </strong>{" "}
            {project.plannedImprovements &&
              project.plannedImprovements.map((improvement) => (
                <ul key={improvement} className="ml-5">
                  <li className="list-disc">{improvement}</li>
                </ul>
              ))}
          </div>
          <div className="flex gap-4 items-center pt-4">
            <Link
              to={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center btn bg-neutral text-white md:text-lg font-bold md:px-8 px-4 rounded-full"
            >
              <FaLink className="text-lg" /> <span>Live Link</span>
            </Link>
            <Link
              to={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center btn bg-fuchsia-600 text-white md:text-lg font-bold md:px-8 px-4 rounded-full"
            >
              <ImGithub className="text-lg" /> <span>GitHub Link</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Link
          to="/projects"
          className="btn btn-outline border-2 border-teal-500 text-teal-500 hover:border-none font-bold hover:bg-teal-500 text-lg hover:text-white px-6"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default Project;
