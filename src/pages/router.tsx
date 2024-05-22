import { createBrowserRouter } from "react-router-dom";

import HomePage from "./Home/index.tsx";
import AboutPage from "./About/index.tsx";
import ContactPage from "./Contact/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);
