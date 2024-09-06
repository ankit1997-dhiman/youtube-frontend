import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../screens/pages/Home.jsx";
import Login from "../screens/pages/Login.jsx";
import { COMMON_URLS } from "./routes.js";

import NotFoundPage from "../screens/notFound/NotFoundPage.jsx";

function AuthNavigation() {
  return (
    <>
      <Routes>
        <Route path={COMMON_URLS.HOME} element={<Home />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        <Route path={COMMON_URLS.LOGIN} element={<Login />} />
      </Routes>
    </>
  );
}
export default AuthNavigation;
