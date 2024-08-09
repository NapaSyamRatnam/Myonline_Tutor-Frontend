
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import './ProfessionalUserList.css';

// function PythonUserList() {
//   const { courseType } = useParams();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api/users/byCourse/Technical - Python`)
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error(`Error fetching ${courseType} course users:`, error);
//       });
//   }, [courseType]);

//   return (
//     <>
//       <div className="header1">
//     <label><h1>My Online Tutor</h1></label>
//     </div>
//       <div className="user-list-page">
//         <h1>{`${courseType} Course Users`}</h1>
//         {users.length > 0 ? (
//           <table className="user-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Email</th>
//                 {/* <th>Password</th> */}
//                 {/* <th>Confirm Password</th> */}
//                 <th>Phone Number</th>
//                 <th>Course</th>
//                 <th>Address</th>
//                 <th>Gender</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.firstName}</td>
//                   <td>{user.lastName}</td>
//                   <td>{user.email}</td>
//                   {/* <td>{user.password}</td> */}
//                   {/* <td>{user.confirmPassword}</td> */}
//                   <td>{user.phoneNumber}</td>
//                   <td>{user.course}</td>
//                   <td>{user.address}</td>
//                   <td>{user.gender}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No users found for the given course type.</p>
//         )}
//       </div>
//       <div className="AppFooter" style={{color:'white',  backgroundColor:' #4b7ec6'}}>Footer</div>
//     </>
//   );
// }

// export default PythonUserList;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProfessionalUserList.css";

function PythonUserList() {
  const { courseType } = useParams();
  const [tutorData, setTutorData] = useState([]);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    userId: "",
    tutorId: "",
    firstName: "", // Initialize as an empty string
    lastName: "", // Initialize as an empty string
    gender: "", // Initialize as an empty string
    email: "", // Initialize as an empty string
    password: "", // Initialize as an empty string
    confirmPassword: "", // Initialize as an empty string
    phoneNumber: "", // Initialize as an empty string
    courses: [], // Initialize as an empty string
    address: "", // Initialize as an empty string
    assignTutorname: ""
  });

  useEffect(() => {
    fetchData();
  }, [courseType]);

  const fetchData = () => {
    axios.get(`http://3.7.14.21:8080/api/users/by-course/Technical - Python`)
      .then(response => {
        setUsers(response.data); // Update users state with fetched data
      })
      .catch(error => {
        console.error(`Error fetching ${courseType} course users:`, error);
      });

    axios.get(`http://3.7.14.21:8080/api-v1/by-course/Python`)
      .then(response => {
        setTutorData(response.data);
      })
      .catch(error => {
        console.error(`Error fetching tutors:`, error);
      });
  };

  const handleAssignClick = () => {
    setShowAssignModal(true);
  };

  const handleTutorSelect = (tutor) => {
    setSelectedTutor(tutor);
    setFormData(prevState => ({
      ...prevState,
      tutorId: tutor.id,
      userId: prevState.userId // Preserve the userId field
    }));
  };

  const handleModalClose = () => {
    setShowAssignModal(false);
    setSelectedTutor(null);
  };

  const handleSubmit = () => {
    if (!selectedTutor) {
      console.error("No tutor selected");
      return;
    }
  
    // Construct the data object to send to the backend
    const postData = {
      ...formData,
      tutorId: selectedTutor.id, // Assign the selected tutor's ID
      assignTutorname: selectedTutor.firstName,
    };
  
    // Log postData for debugging
    console.log("Sending data to backend:", postData);
  
    axios.post("http://3.7.14.21:8080/admin/assign", postData)
      .then(response => {
        console.log(postData);
        console.log("Tutor assigned successfully");
        fetchData(); // Refresh user data after assignment
        handleModalClose(); // Close the modal
      })
      .catch(error => {
        console.error("Error assigning tutor:", error);
      });
  };
  
  

  const handleAssignUser = (user) => {
    setFormData({
      ...formData,
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
      phoneNumber: user.phoneNumber,
      courses: user.courses,
      address: user.address,
    });
    handleAssignClick();
  };

  return (
    <>
      <div className="header1">
        <label><h1>My Online Tutor</h1></label>
      </div>
      <div>
        <h2>{`${courseType} Tutors Skill List`}</h2>
      </div>
      {users.length > 0 ? (
        <div className="AcademicList_table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Confirm Password</th>
                <th>Course</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.confirmPassword}</td>
                  <td>{user.courses}</td>
                  <td>{user.address}</td>
                  <td>{user.gender}</td>
                  <td><button onClick={() => handleAssignUser(user)}>Assign</button></td>
                </tr>
              ))}
            </tbody>
          </table>

          {showAssignModal && (
            <div className="modal" style={{ display: showAssignModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
              <div className="modal-dialog col-8" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Assign Employee To</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={handleModalClose}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="managerSelect">Select Tutor:</label>
                      <select
                        id="managerSelect"
                        className="form-control"
                        value={selectedTutor ? selectedTutor.id : ''}
                        onChange={(e) => {
                          const selectedTutorId = e.target.value;
                          const selectedTutor = tutorData.find(
                            (tutor) => tutor.id === parseInt(selectedTutorId)
                          );
                          handleTutorSelect(selectedTutor);
                        }}
                      >
                        <option value="" disabled>Select a Tutor</option>
                        {tutorData.map((tutor, index) => (
                          <option key={index} value={tutor.id}>
                            {tutor.firstName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                      Close
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                      Assign
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="ErrorMessage">
          <p>No users found for the given course type.</p>
        </div>
      )}
      <div className="AppFooter" style={{color:'white',  backgroundColor:' #4b7ec6'}}>Footer</div>
    </>
  );
}

export default PythonUserList;
