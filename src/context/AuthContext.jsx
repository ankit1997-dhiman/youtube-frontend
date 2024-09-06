import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import ApiRequest from "../helper/ApiRequest";

function checkInitToken() {
  return Cookies.get("access_token");
}
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const existingToken = checkInitToken();

  const navigate = useNavigate();

  const loginUser = (values) => {
    setUser(values.user);
    Cookies.set("access_token", values.userAccessToken);
    navigate("/dashboard");
  };

  const logoutUser = () => {
    setUser(null);
    Cookies.remove("access_token");
    navigate("/");
  };

  const getRefreshToken = async () => {
    try {
      const response = await ApiRequest.post(
        "http://localhost:4000/api/v1/users/refresh-token"
      );
      Cookies.set("access_token", response.data.data.userAccessToken);
      console.log(response);
      if (response.data.data) loginUser(response.data.data);
    } catch (error) {
      logoutUser();
    }
  };

  useEffect(() => {
    if (existingToken) {
      console.log("Iam here");
      getRefreshToken();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
