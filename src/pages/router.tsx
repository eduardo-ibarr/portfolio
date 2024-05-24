import { createBrowserRouter } from "react-router-dom";

import AboutPage from "./About/index.tsx";
import ContactPage from "./Contact/index.tsx";
// import ProjectsPage from "./Projects/index.tsx";
import ExperiencePage from "./Experience/index.tsx";
import Hero from "../components/Hero/index.tsx";
import Layout from "./Layout/index.tsx";
import NotFoundPage from "./404/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Hero />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <ContactPage />
      </Layout>
    ),
  },
  // {
  //   path: "/projects",
  //   element: (
  //     <Layout>
  //       <ProjectsPage />
  //     </Layout>
  //   ),
  // },
  {
    path: "/experience",
    element: (
      <Layout>
        <ExperiencePage />
      </Layout>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
