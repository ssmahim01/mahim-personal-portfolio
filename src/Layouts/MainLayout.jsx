import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="bg-base-100">
            <Navbar />
            <div className="min-h-[calc(100vh-53px)]">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;