import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Loader from "./Pages/Loader";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import ProjectPage from "./Pages/ProjectPage";
import SkillPage from "./Pages/SkillPage/SkillPage";
import CertificatePage from "./Pages/CertificatePage/CertificatePage";
import ServicePage from "./Pages/ServicePage/ServicePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    index: true,
    element: <Loader />,
  },
  {
    path: "/portfolio",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/portfolio/menu",
        element: <MenuPage />,
      },
      {
        path: "/portfolio/project",
        element: <ProjectPage />,
      },
      {
        path: "/portfolio/skills",
        element: <SkillPage />,
      },
      {
        path: "/portfolio/certificates",
        element: <CertificatePage />,
      },
      {
        path: "/portfolio/services",
        element: <ServicePage />,
      },
      {
        path: "/portfolio/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: {
            duration: 2000,
            style: {
              background: "rgba(7, 97, 37, 0.906)",
              color: "white",
            },
          },
          error: {
            duration: 1500,
            style: {
              background: "rgba(46, 7, 91, 0.911)",
              color: "white",
            },
          },
        }}
      />
    </>
  );
}

export default App;
