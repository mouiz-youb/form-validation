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
    <div className="App-container">
      <form action="">
        <div className="from-content">
          <legend>Form Submition</legend>
          <div className="input-contianer">
            <div className="input-first-line">
              <div>
                <input type="text" placeholder="Enter the username " />
              </div>
              <div>
                <input type="text" placeholder="Enter the age" />
              </div>
            </div>
            <div className="input-second-line">
              <input type="email" placeholder="Enter the email" />
            </div>
            <div className="input-last-line">
              <div>
                <input type="password" placeholder="Enter the password" />
              </div>
              <div>
                <input type="password" placeholder="Confirm the password " />
              </div>
            </div>
          </div>
          <div className="btn-container">
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </div>
        <div className="form-explenation"></div>
      </form>
    </div>
  );
}

export default App;
