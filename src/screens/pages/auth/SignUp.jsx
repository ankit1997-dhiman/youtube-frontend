import { useState } from "react";
import ApiRequest from "../../../helper/ApiRequest";
import { API_URL } from "../../../urls/apiUrl";
import { showToast } from "../../../helper/toastHelper";
import { Link } from "react-router-dom";
import { AUTH_URLS } from "../../../urls/authUrls";

export const SignUp = () => {
  const registerFormvalue = {
    fullName: "",
    email: "",
    password: "",
  };
  const [register_user, setRegisterUser] = useState(registerFormvalue);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setRegisterUser((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    regisetUser(register_user);
  };

  const regisetUser = async (formValue) => {
    try {
      formValue;
      const response = await ApiRequest.post(
        `${API_URL}users/register`,
        formValue
      );
      showToast("Registerd Successfully", "success");
    } catch (error) {
      showToast(error.response.message, "error");
    }
  };

  return (
    <>
      <div className="bg-gray-200 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">FullName</label>
              <input
                value={register_user.name}
                name="fullName"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                value={register_user.email}
                name="email"
                onChange={(e) => handleChange(e)}
                required
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Password</label>
              <input
                type="password"
                value={register_user.password}
                name="password"
                onChange={(e) => handleChange(e)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
            <div className="pt-6 text-center">
              <Link
                className="w-full  px-4 text-blue-500 text-center"
                to={AUTH_URLS.LOGIN}
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
