

import React from "react";
import { Link } from 'react-router-dom';
 import './Technical.css';

function Technical() {
  

  const courses = [
    {
      title: "Java",
      description: "Learn Java programming language for building scalable and secure applications.",
      fees:  "3000",
    },
    {
      title: "AWS",
      description: "Explore cloud computing with Amazon Web Services (AWS) and build scalable and reliable solutions.",
      fees:  "2500",   
    },

    {
      title: "Python",
      description: "Dive into the world of Python programming language known for its simplicity and versatility.",
      fees:  "1500",
    },
    
    {
      title: "MySQL",
      description: "Master the fundamentals of MySQL for managing relational databases efficiently.",
      fees:  "2000", 
    },
  ];

  return (
    <>
     <div className="header1" style={{backgroundColor:"#0d47a1"}}>
        <label><h1>My Online Tutor</h1></label>
      </div>
      {/* <div className="header1">
        <label><h1>My Online Tutor</h1></label>
      </div> */}
      <h1>Technical Courses</h1>

      <div className="main-content">
        <div className="sunil">
          
          {courses.map((course, index) => (
            <div key={index} className="course-column course-item2 ">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <p>Fees: ₹{course.fees}</p>
              <Link to='/UserRegistration'><button className="enroll-button">Enroll</button></Link> 
            </div>
          ))}
        </div>
      </div>
      <div className="footer1"><p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p></div>
    </>
  );
}

export default Technical;

