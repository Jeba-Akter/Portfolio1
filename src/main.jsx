import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepages from './pages/Homepages';
import AboutPages from './pages/AboutPages';
import Projects from './pages/Projects';
import Experince from './pages/Experince';
import Contacts from './pages/Contacts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepages/>,
  },
  {
    path: "/about",
    element: <AboutPages></AboutPages>,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
  {
    path: "/experince",
    element: <Experince />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
