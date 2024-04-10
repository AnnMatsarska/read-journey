import React, { lazy } from "react";
import { Layout } from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/Register"));
const RecommendedPage = lazy(() => import("../pages/Recommended"));
const LibraryPage = lazy(() => import("../pages/Library"));
const ReadingPage = lazy(() => import("../pages/Reading"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="recommended" element={<RecommendedPage />} />
        <Route path="library" element={<LibraryPage />} />
        <Route path="reading" element={<ReadingPage />} />
      </Route>
    </Routes>
  );
};
