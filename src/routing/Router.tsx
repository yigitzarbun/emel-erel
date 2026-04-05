import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import PageLoading from "../components/loading/PageLoading";
import Paths from "./Paths";

const Home = lazy(() => import("../modules/pages/Home/Home"));
const About = lazy(() => import("../modules/pages/About/About"));
const Services = lazy(() => import("../modules/pages/Services/Services"));
const Approach = lazy(() => import("../modules/pages/Approach/Approach"));
const Policy = lazy(() => import("../modules/pages/Policy/Policy"));
const CouplesTherapy = lazy(
  () => import("../modules/pages/CouplesTherapy/CouplesTherapy")
);
const Pmad = lazy(() => import("../modules/pages/Pmad/Pmad"));
const Contact = lazy(() => import("../modules/pages/Contact/Contact"));

const withSuspense = (Component: React.ElementType) => (
  <Suspense fallback={<PageLoading />}>
    <Component />
  </Suspense>
);

export default createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: Paths.HOME, element: withSuspense(Home) },
      { path: Paths.ABOUT, element: withSuspense(About) },
      { path: Paths.SERVICES, element: withSuspense(Services) },
      { path: Paths.APPROACH, element: withSuspense(Approach) },
      { path: Paths.POLICY, element: withSuspense(Policy) },
      { path: Paths.COUPLES_THERAPY, element: withSuspense(CouplesTherapy) },
      { path: Paths.PMAD, element: withSuspense(Pmad) },
      { path: Paths.CONTACT, element: withSuspense(Contact) },
    ],
  },
]);
