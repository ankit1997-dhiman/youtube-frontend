import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import ApiRequest from "../../helper/ApiRequest";
import { useAuthContext } from "../../context/AuthContext";
function Login() {
  const navigate = useNavigate();
  const fvalue = {
    email: "",
    password: "",
  };
  const [formValue, setFormValue] = useState(fvalue);
  const { loginUser } = useAuthContext();

  const login = async (formValue) => {
    try {
      const response = await ApiRequest.post(
        "http://localhost:4000/api/v1/users/login",
        formValue
      );
      if (response.data) {
        loginUser(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    console.log(fieldName, fieldValue, "here");

    setFormValue((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(formValue);
  };
  return (
    <>
      <div className="bg-gray-200 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label for="email" className="block text-gray-600 mb-2">
                Email
              </label>
              <input
                value={formValue.email}
                name="email"
                onChange={(e) => handleChange(e)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label for="password" className="block text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                value={formValue.password}
                name="password"
                onChange={(e) => handleChange(e)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
