import { Link } from "react-router-dom";

const Resume = ({center}) => {
    return (
        <>
            <Link to="https://docs.google.com/document/d/1Q3oIz83BlmgCthF29Yfxqel7LpzgMcggq8cC_JR3Jq4/edit?usp=sharing" target="_blank">
            <button className={`btn btn-outline border-2 border-amber-500 text-amber-500 px-4 hover:bg-amber-500 hover:border-none hover:text-white font-bold ${center && "block md:mx-0 mx-auto"}`}>Download Resume</button>
            </Link>
        </>
    );
};

export default Resume;