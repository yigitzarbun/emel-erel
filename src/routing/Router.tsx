import { lazy, Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import PageLoading from "../components/loading/PageLoading";

import Paths from "./Paths";

const Home = lazy(() => import("../modules/home/Home"));
const About = lazy(() => import("../modules/about/About"));
const Services = lazy(() => import("../modules/services/Services"));
const Philosophy = lazy(() => import("../modules/philosophy/Philosophy"));
const Education = lazy(() => import("../modules/education/Education"));
const Specializations = lazy(
  () => import("../modules/specializations/Specializations")
);
const PracticeInfo = lazy(
  () => import("../modules/practice-info/PracticeInfo")
);
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
  { path: Paths.PHILOSOPHY, element: getRouteElement(Philosophy) },
  { path: Paths.EDUCATION, element: getRouteElement(Education) },
  { path: Paths.SPECIALIZATIONS, element: getRouteElement(Specializations) },
  { path: Paths.PRACTICE_INFO, element: getRouteElement(PracticeInfo) },
  { path: Paths.CONTACT, element: getRouteElement(Contact) },
];

export default createBrowserRouter(routes);
