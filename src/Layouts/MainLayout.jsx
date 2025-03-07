import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";

const MainLayout = () => {
     const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    
      useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      }, [theme]);
    
      const handleToggle = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
      };
    
    return (
        <>
            <Navbar theme={theme} handleToggle={handleToggle} />
            <div className={`${theme === "light" ? "custom-bg bg-center" : "bg-gray-900"} md:min-h-[calc(100vh-52px)] min-h-[calc(100vh-72px)]`}>
            <Outlet />
            </div>
            <Footer theme={theme} />
        </>
    );
};

export default MainLayout;