import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/skills";

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
                    },
                    {
                        path: "/skills",
                        element: <Skills />
                    }
                ]
            }
        ]
    }
]);

export default routes;