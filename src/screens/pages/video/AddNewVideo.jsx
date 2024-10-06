import { useState } from "react";
import InputField from "../../../common/input/InputField";
import ApiRequest from "../../../helper/ApiRequest";
import { API_URL } from "../../../urls/apiUrl";
import { showToast } from "../../../helper/toastHelper";
import DashboardHeader from "../../dashboard/DashboardHeader";

const addNewVideoFormFields = {
  title: "",
  description: "",
  videoFile: "",
  thumbnail: "",
};

export const AddNewVideo = () => {
  const [addNewVideoForm, setAddNewVideoForm] = useState(addNewVideoFormFields);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];

    setAddNewVideoForm((prev) => ({
      ...prev,
      [name]: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append("title", addNewVideoForm.title);
    formData.append("description", addNewVideoForm.description);
    if (addNewVideoForm.videoFile) {
      formData.append("videoFile", addNewVideoForm.videoFile);
    }
    if (addNewVideoForm.thumbnail) {
      formData.append("thumbnail", addNewVideoForm.thumbnail);
    }

    try {
      setLoading(true);
      const response = await ApiRequest.post(`${API_URL}video/`, formData);
      setLoading(false);
    } catch (error) {
      showToast("Some Thing Went Wrong", "error");
      setLoading(false);
    }
  };
  console.log(loading);
  return (
    <>
      <DashboardHeader />
      <div className="bg-gray-100 pt-24 px-4">
        <form className="p-6" onSubmit={handleSubmit}>
          <InputField
            fieldName={"title"}
            setFieldState={setAddNewVideoForm}
            fieldState={addNewVideoForm.title}
            field_label="Title"
          />
          <InputField
            fieldName="description"
            setFieldState={setAddNewVideoForm}
            fieldState={addNewVideoForm.description}
            field_label="Description"
          />
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Upload a video</label>
            <input
              type="file"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="videoFile"
              onChange={handleFileChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Upload Thumbnail</label>
            <input
              type="file"
              name="thumbnail"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-3 mt-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {loading !== false ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

null;
