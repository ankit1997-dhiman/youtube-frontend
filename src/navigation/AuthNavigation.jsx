import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../screens/pages/Home.jsx";
import Login from "../screens/pages/Login.jsx";
import { COMMON_URLS } from "./routes.js";
import { Dashboard } from "../screens/dashboard/Dashboard.jsx";

function AuthNavigation() {
  return (
    <>
      <Routes>
        <Route path={COMMON_URLS.HOME} element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path={COMMON_URLS.LOGIN} element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}
export default AuthNavigation;
