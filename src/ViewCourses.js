
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import './ViewCourses.css'; 

// function ViewCourses() {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     // Fetch courses from the server
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/admin/courses");
//         setCourses(response.data);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <>
//         <header><h2>My Online Tutor</h2></header>
//         <div className="view-courses-page">
//         <h1>View Courses</h1>
//         <div className="courses-container">
//           {courses.map(course => (
//             <Link key={course.id} to={`/courses/${course.id}`}>
//               <div className="course-card">
//                 <img src={course.imageUrl} alt={course.courseName} />
//                 <div className="course-info">
//                   <h2>{course.courseName}</h2>
//                   <p>{course.description}</p>
//                   <p>Duration: {course.duration}</p>
//                   {/* Add more details as needed */}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
      
//     </>
//   );
// }

// export default ViewCourses;


import React, { useState, useEffect } from "react";
import axios from "axios";
import './ViewCourses.css'; // Import your CSS file for styling
import AdminDashboard from "./AdminDashboard";

function ViewCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the server
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://192.168.138.130:8080/api/admin/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <AdminDashboard/>
      <div className="view-courses-page" style={{marginLeft: "25%", marginTop: "-48%"}}>
        <h2 style={{color: ""}}>View Courses</h2>
        <div className="courses-container">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              {/* <img src={course.imageUrl} alt={course.courseName} /> */}
              <div className="course-info">
                <h2>Course:{course.courses}</h2>
                <p>Description:{course.description}</p>
                <p>Price: {course.price}</p>
                {/* Add more details as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default ViewCourses;