// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import "./ProfessionalUserList.css"; 

// function ProfessionalTutorList(){
//     const { courseType } = useParams();
//     const [users, setUsers] = useState([]);
  
//     useEffect(() => {
    
//       axios.get(`http://localhost:8080/api/admin/users/${courseType}`)
//         .then(response => {
//           setUsers(response.data);
//         })
//         .catch(error => {
//           console.error(`Error fetching ${courseType} course users:`, error);
//         });
//     }, [courseType]);
  
//     return (
//       <>
//       <div className="AppHeader">
//         <h1>My Online Tutor</h1>
//       </div>
//         <div>
//           <h2>Professional Tutors </h2>
//         </div>
//         <div className="AcademicList_table">
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Email</th>
//                 <th>Password</th>
//                 <th>Confirm Password</th>
//                 <th>Qualification</th>
//                 <th>Higher Qualification</th>
//                 <th>Course</th>
//                 <th>Address</th>
//                 <th>Gender</th>
//               </tr>
//             </thead>
//             <tbody>
//             {[...Array(10)].map((_, index) => (
//               <tr key={index}>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//               </tr>
//             ))}
//           </tbody>
//           </table>
//         </div>
//         <div className="AppFooter">Footer</div>
//       </>
//     )

// }
// export default  ProfessionalTutorList;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import "./ProfessionalUserList.css"; 

// function TechnicalTutorList(){
//     const { courseType } = useParams();
//     const [users, setUsers] = useState([]);
  
//     useEffect(() => {
    
//       axios.get(`http://localhost:8080/api-v1/1`)
//         .then(response => {
//           setUsers(response.data);
//         })
//         .catch(error => {
//           console.error(`Error fetching ${courseType} course users:`, error);
//         });
//     }, [courseType]);
  
//     return (
//       <>
//       <div className="AppHeader">
//         <h1>My Online Tutor</h1>
//       </div>
//         <div>
//           <h2>Technical Tutors  List</h2>
//         </div>
//         <div className="AcademicList_table">
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Email</th>
//                 <th>Password</th>
//                 <th>Confirm Password</th>
//                 <th>Qualification</th>
//                 <th>Higher Qualification</th>
//                 <th>Course</th>
//                 <th>Address</th>
//                 <th>Gender</th>
//               </tr>
//             </thead>
//             <tbody>
//             {[...Array(10)].map((_, index) => (
//               <tr key={index}>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//                 <td>&nbsp;</td>
//               </tr>
//             ))}
//           </tbody>
//           </table>
//         </div>
//         <div className="AppFooter">Footer</div>
//       </>
//     )

// }
// export default  TechnicalTutorList;







// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import "./ProfessionalUserList.css";

// function ProfessionalTutorList() {
//   const { tutorId } = useParams();
//   const [tutor, setTutor] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api-v1/by-course/Professional`) 
//       .then(response => {
//         setTutor(response.data);
//       })
//       .catch(error => {
//         console.error(`Error fetching tutor with ID ${tutorId}:`, error);
//       });
//   }, [tutorId]);

//   return (
//     <>
//       <div className="AppHeader">
//         <h1>My Online Tutor</h1>
//       </div>
//       <div>
//         <h2>Professional Tutor Details</h2>
//       </div>
//       {tutor ? (
//         <div className="AcademicList_table">
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Email</th>
//                 <th>Password</th>
//                 <th>Qualification</th>
//                 <th>Higher Qualification</th>
//                 <th>Course</th>
//                 <th>Address</th>
//                 <th>Gender</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr key={tutor.id}>
//                 <td>{tutor.id}</td>
//                 <td>{tutor.firstName}</td>
//                 <td>{tutor.lastName}</td>
//                 <td>{tutor.email}</td>
//                 <td>{tutor.password}</td>
//                 <td>{tutor.qualification}</td>
//                 <td>{tutor.higherQualification}</td>
//                 <td>{tutor.course}</td>
//                 <td>{tutor.address}</td>
//                 <td>{tutor.gender}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div className="ErrorMessage">
//           <p>Tutor not found.</p>
//         </div>
//       )}
//       <div className="AppFooter">Footer</div>
//     </>
//   );
// }

// export default ProfessionalTutorList;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProfessionalUserList.css";

function ProfessionalTutorList() {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    axios.get(`http://3.7.14.21:8080/api-v1/by-course/Professional`)
      .then(response => {
        setTutors(response.data);
      })
      .catch(error => {
        console.error("Error fetching tutors:", error);
      });
  }, []);

  return (
    <>
        <div className="header1">
    <label><h1>My Online Tutor</h1></label>
    </div>
      <div>
        <h2>Professional Tutor Details</h2>
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
                <th>Password</th>
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
                  <td>{tutor.password}</td>
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

export default ProfessionalTutorList;
