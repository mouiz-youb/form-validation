import React, { useState } from "react";
import "./App.css";
function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const handelchange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "username is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (/\S+@\S\.\S+/.test(formData.email)) {
      validationErrors.email = "email is required";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be al least 6 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "pasword not mutch";
    }
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert(`the form Submition successfuly`);
    }
  };
  return (
    <div className="form ">
      <form action="" onSubmit={handelSubmit}>
        <legend>Submition Form</legend>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter the Username"
            onChange={handelchange}
            name="username"
          />
          {error.username && <p style={{ color: "red" }}>{error.username}</p>}
          <input
            type="email"
            placeholder="Enter the Email"
            onChange={handelchange}
            name="email"
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
          <input
            type="password"
            placeholder="Enter the Password"
            onChange={handelchange}
            name="password"
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
          <input
            type="password"
            placeholder="comfirm the password "
            onChange={handelchange}
            name="confirmPassword"
          />
          {error.confirmPassword && (
            <p style={{ color: "red" }}>{error.confirmPassword}</p>
          )}
        </div>
        <div className="btn-container">
          <button
            type="submit"
            className="text-center text-2xl p-1 text-amber-400   relative  left-56"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
