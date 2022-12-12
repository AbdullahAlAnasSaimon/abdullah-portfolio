import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
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
        loader: () => fetch('https://abdullah-portfolio-server.vercel.app/projects')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/project-details/:id',
        element: <ProjectDetails></ProjectDetails>,
        loader: ({params}) => fetch(`https://abdullah-portfolio-server.vercel.app/project-details/${params.id}`)
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])