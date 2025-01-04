import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import AboutMe from "../components/AboutMe/AboutMe";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: "/about-me",
                        element: <AboutMe />
                    }
                ]
            }
        ]
    }
]);

export default routes;