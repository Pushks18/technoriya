import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Career from "./Pages/Career";
import ELearning from "./Pages/ELearning";
import Gallery from "./Pages/Gallery";
import SAPConsultancy from "./Components/SAPConsultancy";
import WebDevelopment from "./Components/WebDevelopment";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/career",
      element: <Career />,
    },
    {
      path: "/eLearning",
      element: <ELearning />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/SAP",
      element: <SAPConsultancy />,
    },
    {
      path: "/webdev",
      element: <WebDevelopment />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
