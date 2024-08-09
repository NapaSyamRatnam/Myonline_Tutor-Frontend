import React, { useState } from "react";
import axios from "axios";
import './AddNewAdmin.css'; // Add your professional CSS for this page
import { Link } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

function AddNewAdmin() {
  const [newAdminDetails, setNewAdminDetails] = useState({
    name: "",
    role: "",
    age: "",
    gender: "",
    dateOfJoining: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword:"",
  });
  const [errors, setErrors] = useState({});

  const handleAddNewAdmin = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post("http://3.7.14.21:8080/api/admin/addadmin", newAdminDetails);

        if (response.status === 200) {
          console.log("New admin added successfully");
          // You can redirect to the Settings page or perform other actions here
          alert("New admin added successfully");
        } else {
          console.error("Failed to add new admin");
          alert("Failed to add new admin");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to add new admin");
      }
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!newAdminDetails.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!newAdminDetails.role.trim()) {
      errors.role = "Role is required";
      isValid = false;
    }

    if (!/^\d+$/.test(newAdminDetails.age.trim())) {
      errors.age = "Age must be a number";
      isValid = false;
    }

    if (!["male", "female", "other"].includes(newAdminDetails.gender.trim().toLowerCase())) {
      errors.gender = "Gender must be male, female, or other";
      isValid = false;
    }

    if (!newAdminDetails.dateOfJoining.trim()) {
      errors.dateOfJoining = "Date of Joining is required";
      isValid = false;
    }

    if (!/^\d{10}$/.test(newAdminDetails.phone.trim())) {
      errors.phone = "Phone must be a 10-digit number";
      isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(newAdminDetails.email.trim())) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    if (!newAdminDetails.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    }

    if (newAdminDetails.password !== newAdminDetails.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <>
      <AdminDashboard/> <br/> 
      <div className="add-new-admin-page" style={{marginTop:'-48%'}}>
        <h1>Add New Admin</h1>
        <form className="settings-form">
          <div style={{display: "flex"}}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={newAdminDetails.name}
                placeholder="Name" required
                onChange={(e) => setNewAdminDetails({ ...newAdminDetails, name: e.target.value })}
              />
              {errors.name && <span className="custom-error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Role:</label>
              <input
                type="text"
                placeholder="Role" required
                value={newAdminDetails.role}
                onChange={(e) => setNewAdminDetails({ ...newAdminDetails, role: e.target.value })}
              />
              {errors.role && <span className="custom-error-messageer">{errors.role}</span>}
            </div>
          </div>
          <div style={{display: "flex", marginTop: "-5%"}}>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="text"
                placeholder="Age" required
                value={newAdminDetails.age}
                onChange={(e) => setNewAdminDetails({ ...newAdminDetails, age: e.target.value })}
              />
              {errors.age && <span className="custom-error-message">{errors.age}</span>}
            </div>

            <div className="form-group">
              <label>Gender:</label>
              <input
                type="text"
                placeholder="Gender" required
                value={newAdminDetails.gender}
                onChange={(e) => setNewAdminDetails({ ...newAdminDetails, gender: e.target.value })}
              />
              {errors.gender && <span className="custom-error-message">{errors.gender}</span>}
            </div>
          </div>
          <div style={{display: "flex", marginTop: "-5%"}}>
            <div className="form-group">
              <label>Date of Joining:</label>
              <input
                type="text"
                placeholder="Date of Joining" required
                value={newAdminDetails.dateOfJoining}
                onChange={(e) => setNewAdminDetails({ ...newAdminDetails, dateOfJoining: e.target.value })}
              />
              {errors.dateOfJoining && <span className="custom-error-message">{errors.dateOfJoining}</span>}
            </div>

            <div className="form-group">
              <label>Phone:</label>
              <input
                type="text"
                placeholder="Mobile Number" required
                value={newAdminDetails.phone}
                onChange={(e) => setNewAdminDetails({ ...newAdminDetails, phone: e.target.value })}
              />
              {errors.phone && <span className="custom-error-message">{errors.phone}</span>}
            </div>
          </div>
          <div style={{display: "flex", marginTop: "-5%"}}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                placeholder="email" required
                value={newAdminDetails.email}
                onChange={(e) => setNewAdminDetails({ ...newAdminDetails, email: e.target.value })}
              />
              {errors.email && <span className="custom-error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                placeholder="password" required
                value={newAdminDetails.password}
                onChange={(e) => setNewAdminDetails({ ...newAdminDetails, password: e.target.value })}
              />
              {errors.password && <span className="custom-error-messageer">{errors.password}</span>}
            </div>
          </div>
          <div style={{display: "flex",  marginTop: "-5%"}}>
            <div className="form-group">
              <label style={{marginRight: "-20%"}}> Confirm Password:</label>
              <input
                type="password"
                placeholder=" confirm password" required
                value={newAdminDetails.confirmPassword}
                onChange={(e) => setNewAdminDetails({ ...newAdminDetails, confirmPassword: e.target.value })}
              />
              {errors.confirmPassword && <span className="custom-error-messageer">{errors.confirmPassword}</span>}
            </div>
          </div>
          <button type="button" onClick={handleAddNewAdmin} style={{width: "40%", marginLeft: "30%"}}>
            Add New Admin
          </button>
        </form><br />
      </div>
    </>
  );
}

export default AddNewAdmin;


// import React, { useState } from "react";
// import axios from "axios";
// import './AddNewAdmin.css'; // Add your professional CSS for this page
// import { Link } from "react-router-dom";
// import AdminDashboard from "./AdminDashboard";

// function AddNewAdmin() {
//   const [newAdminDetails, setNewAdminDetails] = useState({
//     name: "",
//     role: "",
//     age: "",
//     gender: "",
//     dateOfJoining: "",
//     phone: "",
//     email: "",
//     password: "",
//     confirmPassword:"",
//   });
//   const [errors, setErrors] = useState({});

//   const handleAddNewAdmin = async () => {
//     if (validateForm()) {
//       try {
//         const response = await axios.post("http://localhost:8080/api/admin/addadmin", newAdminDetails);

//         if (response.status === 200) {
//           console.log("New admin added successfully");
//           // You can redirect to the Settings page or perform other actions here
//           alert("New admin added successfully");
//         } else {
//           console.error("Failed to add new admin");
//           alert("Failed to add new admin");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Failed to add new admin");
//       }
//     }
//   };

//   const validateForm = () => {
//     let errors = {};
//     let isValid = true;

//     if (!newAdminDetails.name.trim()) {
//       errors.name = "Name is required";
//       isValid = false;
//     }

//     if (!newAdminDetails.role.trim()) {
//       errors.role = "Role is required";
//       isValid = false;
//     }

//     if (!/^\d+$/.test(newAdminDetails.age.trim())) {
//       errors.age = "Age must be a number";
//       isValid = false;
//     }

//     if (!["male", "female", "other"].includes(newAdminDetails.gender.trim().toLowerCase())) {
//       errors.gender = "Gender must be male, female, or other";
//       isValid = false;
//     }

//     if (!newAdminDetails.dateOfJoining.trim()) {
//       errors.dateOfJoining = "Date of Joining is required";
//       isValid = false;
//     }

//     if (!/^\d{10}$/.test(newAdminDetails.phone.trim())) {
//       errors.phone = "Phone must be a 10-digit number";
//       isValid = false;
//     }

//     if (!/^\S+@\S+\.\S+$/.test(newAdminDetails.email.trim())) {
//       errors.email = "Invalid email format";
//       isValid = false;
//     }

//     if (!newAdminDetails.password.trim()) {
//       errors.password = "Password is required";
//       isValid = false;
//     }

//     setErrors(errors);
//     return isValid;
//   };

//   return (
//     <>
//     <AdminDashboard/> <br/> 
//       {/* <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//       </div> */}
//       {/* <header><h2>My Online Tutor</h2></header> */}
//       <div className="add-new-admin-page" style={{marginTop:'-48%'}}>
//         <h1>Add New Admin</h1>
//         <form className="settings-form">
//           <div style={{display: "flex"}}>
//           <div className="form-group">
//             <label>Name:</label>
//             <input
//               type="text"
//               value={newAdminDetails.name}
//               placeholder="Name" required
//               onChange={(e) => setNewAdminDetails({ ...newAdminDetails, name: e.target.value })}
//             />
//             {errors.name && <span className="custom-error-message">{errors.name}</span>}
//           </div>

//           <div className="form-group">
//             <label>Role:</label>
//             <input
//               type="text"
//               placeholder="Role" required
//               value={newAdminDetails.role}
//               onChange={(e) => setNewAdminDetails({ ...newAdminDetails, role: e.target.value })}
//             />
//             {errors.role && <span className="custom-error-messageer">{errors.role}</span>}
//           </div>
//           </div>
//           <div style={{display: "flex", marginTop: "-5%"}}>
//           <div className="form-group">
//             <label>Age:</label>
//             <input
//               type="text"
//               placeholder="Age" required
//               value={newAdminDetails.age}
//               onChange={(e) => setNewAdminDetails({ ...newAdminDetails, age: e.target.value })}
//             />
//             {errors.age && <span className="custom-error-message">{errors.age}</span>}
//           </div>

//           <div className="form-group">
//             <label>Gender:</label>
//             <input
//               type="text"
//               placeholder="Gender" required
//               value={newAdminDetails.gender}
//               onChange={(e) => setNewAdminDetails({ ...newAdminDetails, gender: e.target.value })}
//             />
//             {errors.gender && <span className="custom-error-message">{errors.gender}</span>}
//           </div>
//         </div>
//         <div style={{display: "flex", marginTop: "-5%"}}>
//           <div className="form-group">
//             <label>Date of Joining:</label>
//             <input
//               type="text"
//               placeholder="Date of Joining" required
//               value={newAdminDetails.dateOfJoining}
//               onChange={(e) => setNewAdminDetails({ ...newAdminDetails, dateOfJoining: e.target.value })}
//             />
//             {errors.dateOfJoining && <span className="custom-error-message">{errors.dateOfJoining}</span>}
//           </div>

//           <div className="form-group">
//             <label>Phone:</label>
//             <input
//               type="text"
//               placeholder="Mobile Number" required
//               value={newAdminDetails.phone}
//               onChange={(e) => setNewAdminDetails({ ...newAdminDetails, phone: e.target.value })}
//             />
//             {errors.phone && <span className="custom-error-message">{errors.phone}</span>}
//           </div>
//           </div>
//           <div style={{display: "flex", marginTop: "-5%"}}>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="text"
//               placeholder="email" required
//               value={newAdminDetails.email}
//               onChange={(e) => setNewAdminDetails({ ...newAdminDetails, email: e.target.value })}
//             />
//             {errors.email && <span className="custom-error-message">{errors.email}</span>}
//           </div>

//           <div className="form-group">
//             <label>Password:</label>
//             <input
//               type="password"
//               placeholder="password" required
//               value={newAdminDetails.password}
//               onChange={(e) => setNewAdminDetails({ ...newAdminDetails, password: e.target.value })}
//             />
//             {errors.password && <span className="custom-error-messageer">{errors.password}</span>}
//           </div>
//           </div>
//           <div style={{display: "flex",  marginTop: "-5%"}}>
//           <div className="form-group">
//             <label style={{marginRight: "-20%"}}> Confirm Password:</label>
//             <input
//               type="password"
//               placeholder=" confirm password" required
//               value={newAdminDetails.confirmPassword}
//               onChange={(e) => setNewAdminDetails({ ...newAdminDetails, confirmPassword: e.target.value })}
//             />
//             {errors.confirmPassword && <span className="custom-error-messageer">{errors.confirmPassword}</span>}
//           </div>
//           </div>
//           <button type="button" onClick={handleAddNewAdmin} style={{width: "40%", marginLeft: "30%"}}>
//             Add New Admin
//           </button>
//         </form><br />
//       </div>
//     </>
//   );
// }

// export default AddNewAdmin;


