import React, { useEffect, useState } from "react";
import ApiRequest from "../../../helper/ApiRequest";
import { API_URL } from "../../../urls/apiUrl";
import { showToast } from "../../../helper/toastHelper";
import { useAuthContext } from "../../../context/AuthContext";

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState();
  const { logoutUser } = useAuthContext();

  const fetchUserDetail = async () => {
    try {
      const response = await ApiRequest.get(`${API_URL}users/current-user`);
      setCurrentUser(response.data.data);
    } catch (error) {
      showToast("Somthing Went Wrong", "error");
    }
  };
  useEffect(() => {
    fetchUserDetail();
  }, [setCurrentUser]);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img
            src={currentUser ? currentUser.avatar : ""}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2 uppercase">
          User Name : {currentUser && currentUser?.userName}
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Email:{currentUser?.email}
        </p>
        <div className="flex flex-col items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Edit Profile
          </button>
          <button
            onClick={logoutUser}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mt-2 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
