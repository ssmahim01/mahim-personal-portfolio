import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logos/sayman-shakil-mahim(SSM).jpg";
import NavBG from "../../../assets/color-bg.png";
import Resume from "../../../components/Resume";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [boxOpen, setBoxOpen] = useState(false);
  const dropdownRef = useRef(null);

  const routes = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-me">About Me</NavLink>
      <NavLink to="/skills">My Skills</NavLink>
      <NavLink to="/education">My Education</NavLink>
      <NavLink to="/projects">My Projects</NavLink>
      <NavLink to="/contact-me">Contact Me</NavLink>

      {/* <a href="/">Home</a>

      <a href="#about-me">About Me</a>
      <a href="#skills">My Skills</a>
      <a href="#education">My Education</a>
      <a href="#projects">My Projects</a>
      <a href="#contact-me">Contact Me</a> */}
    </>
  );

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setBoxOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="navbar justify-between shadow-sm fixed z-10 lg:px-16 px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url('${NavBG}')`,
      }}
    >
      <div className="navbar-start">
        <div className="flex gap-3 items-center">
          <img
            className="w-10 h-10 rounded-md"
            src={Logo}
            alt="Logo of SS Mahim"
          />

          <h2 className="md:block hidden text-3xl text-gray-900 font-extrabold">SS Mahim</h2>
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

      <div className="dropdown ml-3" ref={dropdownRef}>
        <button
          onClick={() => setBoxOpen(!boxOpen)}
          tabIndex={0}
          role="button"
          className="btn bg-neutral rounded-full border-none text-white lg:hidden mr-3 shadow-md"
        >
          {boxOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>
        {boxOpen && (
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black bg-opacity-90 rounded-xl z-[10] mt-3 w-80 p-4 right-2 space-y-3 shadow-md *:text-white/90 *:font-bold"
          >
            <div className="lg:hidden flex flex-col gap-y-4">
              <img src="me-with-laptop.jpg" className="w-20 h-20 rounded-md" alt="An image with laptop" />
              <p className="text-2xl font-serif text-cyan-500 font-bold">SS Mahim</p>
            </div>

            <div className="flex flex-col gap-3 font-bold">{routes}</div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;