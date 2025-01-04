import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects/Projects";
import Project from "../pages/Project/Project";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/project/:id",
                element: <Project />
            }
        ]
    }
]);

export default routes;