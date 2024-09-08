import { Route, Routes } from "react-router-dom";
import Login from "../screens/pages/auth/Login.jsx";
import { AUTH_URLS } from "../urls/authUrls.jsx";
import { SignUp } from "../screens/pages/auth/SignUp.jsx";

function AuthNavigation() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path={AUTH_URLS.LOGIN} element={<Login />} />
        <Route path={AUTH_URLS.REGISTER} element={<SignUp />} />
      </Routes>
    </>
  );
}
export default AuthNavigation;
