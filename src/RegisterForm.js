// RegistrationForm.js
import React, { useState } from "react";
import axios from "axios";
import "./Signup.css"; // Import your CSS file for styling

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    familyName: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    placeOfBirth: "",
    time: "",
    address: "",
    nationality: "",
    mobile: "",
    email: "",
    profession: "",
    maritalStatus: "",
    disability: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "//localhost:8080/api/users/add",
        formData
      );
      console.log("Form submitted:", response.data);
      // Optionally, you can handle success here
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, you can handle errors here
    }
  };

  return (
    <div className="signcontainer">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Registration Form</h1>
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                name="familyName"
                placeholder="Family Name"
                value={formData.familyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field">
              <input
                type="text"
                name="dateOfBirth"
                placeholder="Date Of Birth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field">
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                name="placeOfBirth"
                placeholder="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="time"
                placeholder="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            </div>
            <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                name="address"
                placeholder="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="nationality"
                placeholder="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              />
            </div>
            </div>
            <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                name="mobile"
                placeholder="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            </div>
            <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                name="profession"
                placeholder="profession"
                value={formData.profession}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="maritalStatus"
                placeholder="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="input-field">
              <input
                type="text"
                name="disability"
                placeholder="disability"
                value={formData.disability}
                onChange={handleChange}
                required
              />
            </div>
            </div>

          </div>

       

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
