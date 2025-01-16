import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Resume = ({center}) => {
    return (
        <>
            <Link to="https://docs.google.com/document/d/1tR3afz07hLf4-GofNgd-LrokH9YurxySxCecd6OyRfs/export?format=pdf" target="_blank">
            <button className={`btn btn-outline border-2 border-emerald-500 flex gap-x-2 items-center text-emerald-500 md:px-4 hover:bg-emerald-500 hover:border-none hover:text-white font-bold ${center && "block md:mx-0 mx-auto"}`}><FaDownload className="text-lg" /> <span className="md:block hidden">Download </span>Resume</button>
            </Link>
        </>
    );
};

export default Resume;