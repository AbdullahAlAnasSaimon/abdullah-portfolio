import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import Projects from "../Pages/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/projects',
        element: <Projects></Projects>,
        loader: () => fetch('http://localhost:5000/projects')
      },
      {
        path: '/project-details/:id',
        element: <ProjectDetails></ProjectDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/project-details/${params.id}`)
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])