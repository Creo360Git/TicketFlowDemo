import React, { lazy } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import IntroPage from "./pages/Intro";

//import pages as components
const Intro = lazy(() => import("./pages/Intro"));

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<IntroPage />} />
      <Route path="/download" element={<IntroPage />} />
    </Routes>
  );
  //   let Routes = useRoutes([
  //     {
  //       path: "/intro",
  //       element: <Intro />,
  //     },
  //     { path: "/", element: <Navigate to="intro" /> },
  //     { path: "*", element: <Navigate to="intro" /> },
  //   ]);
  //   //
  //   return Routes;
};

export default Router;
