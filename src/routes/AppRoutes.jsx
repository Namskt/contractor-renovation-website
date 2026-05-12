import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import MainLayout from "../layouts/MainLayout.jsx";

const AppRoutes = createBrowserRouter([
 {
  path: "/",
  element: <MainLayout />,
  children: [
   {
    index: true,
    element: <Home />,
   },
   {
    path: "tentang",
    element: <About />,
   },
   {
    path: "layanan",
    element: <Services />,
   },
   {
    path: "project",
    element: <Projects />,
   },
   {
    path: "kontak",
    element: <Contact />,
   },
  ],
 },
]);

export default AppRoutes;