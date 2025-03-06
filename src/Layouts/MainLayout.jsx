import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="md:min-h-[calc(100vh-52px)] min-h-[calc(100vh-72px)]">
            <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;