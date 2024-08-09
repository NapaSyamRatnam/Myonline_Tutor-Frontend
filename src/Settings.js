
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Settings.css';
import AdminDashboard from "./AdminDashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Settings() {
  const [profileDetails, setProfileDetails] = useState({
    id: "",
    name: "",
    role: "",
    age: "",
    gender: "",
    dateOfJoining: "",
    phone: "",
    email: "",
    password: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getAdminDetails();
  }, []);

  const getAdminDetails = async () => {
    try {
      const adminId = localStorage.getItem('adminId');
      if (!adminId) {
        console.error("Admin ID not found in local storage");
        return;
      }
      
      const response = await axios.get(`http://3.7.14.21:8080/api/admin/profile/${adminId}`);

      if (response.status === 200) {
        setProfileDetails(response.data);
      } else {
        console.error("Failed to fetch admin details");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSaveProfile = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post(`http://3.7.14.21:8080/api/admin/update-profile/${profileDetails.id}`, profileDetails);

        if (response.status === 200) {
          toast.success("Profile details updated successfully");
          setIsEditing(false);
        } else {
          toast.error("Failed to update profile details");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleLogout = () => {
    console.log("Admin logged out");
  };

  const renderEditButton = () => {
    return (
      <button type="button" onClick={() => setIsEditing(true)} style={{width: "20%", marginLeft: "37%"}}>
        Edit
      </button>
    );
  };

  const renderSaveButton = () => {
    return (
      <button type="button" onClick={handleSaveProfile} style={{width: "20%", marginLeft: "37%"}}>
        Save
      </button>
    );
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Name validation
    if (!/^[a-zA-Z ]+$/.test(profileDetails.name)) {
      errors.name = "Name must contain only letters and spaces";
      isValid = false;
    }

    // Role validation
    if (!/^[a-zA-Z]+$/.test(profileDetails.role)) {
      errors.role = "Role must contain only letters";
      isValid = false;
    }

    // Age validation
    if (!/^\d+$/.test(profileDetails.age)) {
      errors.age = "Age must be a number";
      isValid = false;
    }

    // Gender validation
    if (!["male", "female", "other"].includes(profileDetails.gender.toLowerCase())) {
      errors.gender = "Gender must be male, female, or other";
      isValid = false;
    }

    // Date of Joining validation
    if (!profileDetails.dateOfJoining) {
      errors.dateOfJoining = "Date of Joining is required";
      isValid = false;
    }

    // Phone validation
    if (!/^\d{10}$/.test(profileDetails.phone)) {
      errors.phone = "Phone must be a 10-digit number";
      isValid = false;
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(profileDetails.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    // Password validation
    if (!profileDetails.password) {
      errors.password = "Password is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <>
    <AdminDashboard/>
    <ToastContainer/>
      {/* <div className="header1">
        <label><h1>My Online Tutor</h1></label>
      </div> */}
      <div className="settings-page" style={{marginTop:'-48%'}}>

        {/* Profile Section */}
        <div className="settings-section">
        <h2 style={{fontSize: "2.5rem", marginLeft: "35%"}}>Profile</h2>
          <form className="settings-form">
            <div style={{display:'flex'}}>
            <div className="form-group">
              
              <label>Name:</label>
              <input
                type="text"
                value={profileDetails.name}
                onChange={(e) => setProfileDetails({ ...profileDetails, name: e.target.value })}
                disabled={!isEditing}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Role:</label>
              <input
                type="text"
                value={profileDetails.role}
                onChange={(e) => setProfileDetails({ ...profileDetails, role: e.target.value })}
                disabled={!isEditing}
              />
              {errors.role && <span className="error">{errors.role}</span>}
            </div>
            </div>
             <div style={{display:'flex'}}>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="text"
                value={profileDetails.age}
                onChange={(e) => setProfileDetails({ ...profileDetails, age: e.target.value })}
                disabled={!isEditing}
              />
              {errors.age && <span className="error">{errors.age}</span>}
            </div>

            <div className="form-group">
              <label>Gender:</label>
              <input
                type="text"
                value={profileDetails.gender}
                onChange={(e) => setProfileDetails({ ...profileDetails, gender: e.target.value })}
                disabled={!isEditing}
              />
              {errors.gender && <span className="error">{errors.gender}</span>}
            </div>
            </div>
            <div style={{display:'flex'}}>
            <div className="form-group">
              <label>Date of Joining:</label>
              <input
                type="text"
                value={profileDetails.dateOfJoining}
                onChange={(e) => setProfileDetails({ ...profileDetails, dateOfJoining: e.target.value })}
                disabled={!isEditing}
              />
              {errors.dateOfJoining && <span className="error">{errors.dateOfJoining}</span>}
            </div>

            <div className="form-group">
              <label>Mobile Number:</label>
              <input
                type="text"
                value={profileDetails.phone}
                onChange={(e) => setProfileDetails({ ...profileDetails, phone: e.target.value })}
                disabled={!isEditing}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            </div>
                <div style={{display:'flex'}}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                value={profileDetails.email}
                onChange={(e) => setProfileDetails({ ...profileDetails, email: e.target.value })}
                disabled={!isEditing}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={profileDetails.password}
                onChange={(e) => setProfileDetails({ ...profileDetails, password: e.target.value })}
                disabled={!isEditing}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            </div>

            {isEditing ? renderSaveButton() : renderEditButton()}
            {/* <Link to="/AddNewAdmin.js"><button type="button">Add New Admin</button></Link> */}
          </form>
          {/* <Link to='/AdminDashboard'><button className="custom-button">Back</button></Link> */}
        </div>
        {/* Logout Section */}
        {/* <div className="settings-section logout-section">
       <Link to='/LoginAdmin'>  <button type="button" onClick={handleLogout}> 
            Logout
          </button></Link>
 
        </div> */}
      </div>
    </>
  );
}

export default Settings;
