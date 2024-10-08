import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { redirect, useNavigate } from "react-router-dom";
import ApiRequest from "../helper/ApiRequest";
import { showToast } from "../helper/toastHelper";
import { API_URL } from "../urls/apiUrl";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const existingToken = Cookies.get("access_token");

  const navigate = useNavigate();
  const loginUser = (values, redirect) => {
    setUser(values.user);
    Cookies.set("access_token", values.userAccessToken);
    Cookies.set("refresh_token", values.userRefereshToken);
    if (redirect) navigate("/dashboard");
  };

  const logoutUser = async () => {
    try {
      const response = await ApiRequest.post(`${API_URL}users/logout`);
      if (response) {
        setUser(null);
        Cookies.remove("access_token");
        navigate("/");
        showToast(response.message, "success");
      }
    } catch (error) {
      showToast(error.response.message, "error");
    }
  };

  const getRefreshToken = async () => {
    try {
      const response = await ApiRequest.post(`${API_URL}users/refresh-token`);
      if (response?.data?.data) {
        loginUser(response.data.data, false);
      }
    } catch (error) {
      showToast(error.message, "error");
      logoutUser();
    }
  };

  useEffect(() => {
    if (existingToken) {
      getRefreshToken();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
