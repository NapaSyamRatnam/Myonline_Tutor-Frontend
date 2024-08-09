
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProfessionalUserList.css";

function AcadamicTutorList() {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    axios.get(`http://3.7.14.21:8080/api-v1/by-course/Academic`)
      .then(response => {
        setTutors(response.data);
      })
      .catch(error => {
        console.error("Error fetching tutors:", error);
      });
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <>
      <div className="header1">
    <label><h1>My Online Tutor</h1></label>
    </div>
         {/* <header><h2>My Online Tutor</h2></header> */}
      <div>
        <h2 style={{color:'Blue'}}>Academic Tutor Details</h2>
      </div>
      {tutors.length > 0 ? (
        <div className="AcademicList_table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                {/* <th>Password</th> */}
                <th>Qualification</th>
                <th>Higher Qualification</th>
                <th>Course</th>
                <th>Address</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {tutors.map(tutor => (
                <tr key={tutor.id}>
                  <td>{tutor.id}</td>
                  <td>{tutor.firstName}</td>
                  <td>{tutor.lastName}</td>
                  <td>{tutor.email}</td>
                  {/* <td>{tutor.password}</td> */}
                  <td>{tutor.qualification}</td>
                  <td>{tutor.higherQualification}</td>
                  <td>{tutor.course}</td>
                  <td>{tutor.address}</td>
                  <td>{tutor.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="ErrorMessage">
          <p>No tutors found for the given course.</p>
        </div>
      )}
      <div className="AppFooter" style={{color:'white',  backgroundColor:' #4b7ec6'}}>Footer</div>
    </>
  );
}

 export default AcadamicTutorList;
