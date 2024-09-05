import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const fvalue = {
    email: "",
    password: "",
  };
  const [formValue, setFormValue] = useState(fvalue);

  const login = (formValue) => {
    // Send POST request to backend
    fetch("http://localhost:4000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Ensure we send JSON
      },
      body: JSON.stringify(formValue), // Send form data in JSON format
    })
      .then((response) => response.json())
      .then((data) => {
        Cookies.set("access_token", data.data.userAccessToken);
        navigate("/dashboard");
        console.log(data); // Handle the response
      })
      .catch((error) => console.error("Error:", error));
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
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <br></br>
          <input
            value={formValue.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Password</label>
          <br></br>
          <input
            value={formValue.password}
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <button type="summit">Login</button>
        </div>
      </form>
    </>
  );
}
export default Login;
