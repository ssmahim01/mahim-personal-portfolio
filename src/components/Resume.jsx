import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Resume = ({center}) => {
    return (
        <>
            <Link to="https://drive.google.com/file/d/10bWkUigDq7OFJj4MXAtf8bq31eGMS8-z/view?usp=sharing/export?format=pdf" target="_blank">
            <button className={`btn btn-outline border-2 border-emerald-500 flex gap-x-2 items-center text-emerald-500 md:px-4 hover:bg-emerald-500 hover:border-none hover:text-white font-bold ${center && "block md:mx-0 mx-auto"}`}><FaDownload className="text-lg" /> <span className="md:block hidden">Download </span>Resume</button>
            </Link>
        </>
    );
};

export default Resume;