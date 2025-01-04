import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logos/sayman-shakil-mahim(SSM).jpg";
import Resume from "../../../components/Resume";
import "./Navbar.css";

const Navbar = () => {
  const routes = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact-me">Contact Me</NavLink>
    </>
  );

  return (
    <div className="navbar justify-between shadow-md fixed z-10 bg-base-200 lg:px-16 px-6">
      <div className="navbar-start">
        <div className="flex gap-2 items-center">
          <img
            className="w-10 h-10 rounded-md"
            src={Logo}
            alt="Logo of SS Mahim"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="*:ml-5 menu menu-horizontal px-1 text-base *:text-gray-700 *:font-extrabold">
          {routes}
        </ul>
      </div>

      <div className="navbar-end">
      <Resume />
      </div>

      <div className="dropdown ml-3">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden bg-gray-500 text-white btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-black bg-opacity-60 rounded-xl z-[10] mt-3 w-80 p-3 right-2 space-y-3 shadow-md *:text-white/90 *:font-bold"
        >
          {routes}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;