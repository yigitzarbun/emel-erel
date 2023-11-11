import { lazy, Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import PageLoading from "../components/loading/PageLoading";

import Paths from "./Paths";

const Home = lazy(() => import("../modules/home/Home"));
const About = lazy(() => import("../modules/about/About"));
const Services = lazy(() => import("../modules/services/Services"));
const Orientation = lazy(() => import("../modules/orientation/Orientation"));
const Contact = lazy(() => import("../modules/contact/Contact"));

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
  <Suspense fallback={<PageLoading />}>
    <MainLayout>
      <Component />
    </MainLayout>
  </Suspense>
);

const routes: RouteObject[] = [
  { path: Paths.HOME, element: getRouteElement(Home) },
  { path: Paths.ABOUT, element: getRouteElement(About) },
  { path: Paths.SERVICES, element: getRouteElement(Services) },
  { path: Paths.ORIENTATION, element: getRouteElement(Orientation) },
  { path: Paths.CONTACT, element: getRouteElement(Contact) },
];

export default createBrowserRouter(routes);
