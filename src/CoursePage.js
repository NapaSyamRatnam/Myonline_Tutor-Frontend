// // CoursePage.js
// import React from "react";

// function CoursePage({ course }) {
//   return (
//     <div>
//       <h2>{course.courseName}</h2>
//       <img src={course.imageUrl} alt={course.courseName} />
//       <p>{course.description}</p>
//       <p>Duration: {course.duration}</p>
      
//     </div>
//   );
// }

// export default CoursePage;


// CoursePage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

function CoursePage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://3.7.14.21:8080/api/admin/courses/1`);
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{course.courseName}</h2>
      <p>{course.description}</p>
      <p>Duration: {course.duration}</p>
      {/* Display additional course details as needed */}
      <Link to="/ViewCourses.js">Back to Courses</Link>
    </div>
  );
}

export default CoursePage;
