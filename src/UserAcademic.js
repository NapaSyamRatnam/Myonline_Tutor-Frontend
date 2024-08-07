
import React from "react";
import { Link } from 'react-router-dom';
import './Academic.css';

function Academic() {


  const schoolSubjects = [
    { subjectName: "Mathematics", grade: "1st-5th", fees: "₹1000" },
    { subjectName: "Mathematics", grade: "6th-10th", fees: "₹2000" },
    { subjectName: "Science", grade: "1st-5th", fees: "₹1000" },
    { subjectName: "Science", grade: "6th-10th", fees: "₹2000" },
    { subjectName: "Hindi", grade: "1st-5th", fees: "₹800" },
    { subjectName: "Hindi", grade: "6th-10th", fees: "₹1500" },
    
  ];

  const collegeSubjects = [
    { subjectName: "Physics", class: "11", fees: "₹2500" },
    { subjectName: "Chemistry", class: "12", fees: "₹2500" },
    { subjectName: "Mathematics1", class: "11", fees: "₹2500" },
    { subjectName: "Mathematics2", class: "12", fees: "₹2500" },
    { subjectName: "Physics", class: "Class 12", fees: "₹3500" },
    { subjectName: "Biology", class: "Class 12", fees: "₹3500" },
    
    
  ];

  return (
    <>
     <div className="header1">
        <label><h1>My Online Tutor</h1></label>
      </div>
      {/* <div className="header1">
        <label><h1>My Online Tutor</h1></label>
      </div> */}
      <h1>Academic Courses</h1>
      <div className="main-content1">
      
        <div className="school-card">
          <h2>School</h2>
          <ul>
            {schoolSubjects.map((subject, index) => (
              <li key={index} className="subject-item    course-column  course-item1">
                <div className="subject-details">
                  <h3>{subject.subjectName}</h3>
                  <p>Grade: {subject.grade}</p>
                  <p>Fees: {subject.fees}</p>
                </div>
              <Link to='/Enroll'><button className="enroll-button">Enroll</button></Link> 
              </li>
            ))}
          </ul>
        </div>

        <div className="college-card">
          <h2>College</h2>
          <ul>
            {collegeSubjects.map((subject, index) => (
              <li key={index} className="subject-item  course-column  course-item1 ">
                <div className="subject-details">
                  <h3>{subject.subjectName}</h3>
                  <p>Class: {subject.class}</p>
                  <p>Fees: {subject.fees}</p>
                </div>
                <Link to='/Enroll'><button className="enroll-button">Enroll</button></Link> 
              </li>
            ))}
          </ul>
        </div>
        </div>
        <div className="footer1">
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>

      {/* <div className="footer">
      <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
        </div> */}
    </>
  );
}

export default Academic;
