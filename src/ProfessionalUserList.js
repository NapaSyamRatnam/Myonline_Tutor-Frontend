

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import "./ProfessionalUserList.css"; 

// function ProfessionalUserList() {
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

//   return (
//     <>
//       <div className="AppHeader">
//         <h1>My Online Tutor</h1>
//       </div>
//       <div>
//         <h2>Technical Tutors Skill List</h2>
//       </div>
//       <div className="AcademicList_table">
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Password</th>
//               <th>Confirm Password</th>
//               <th>Qualification</th>
//               <th>Higher Qualification</th>
//               <th>Course</th>
//               <th>Address</th>
//               <th>Gender</th>
//             </tr>
//           </thead>
//           <tbody>
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
//         </table>
//       </div>
//       <div className="AppFooter">Footer</div>
//     </>
//   );
// }

// export default ProfessionalUserList;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProfessionalUserList.css";

function ProfessionalUserList() {
  const { courseType } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://192.168.138.130:8080/api/users/byCourse/Professional`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(`Error fetching ${courseType} course users:`, error);
      });
  }, [courseType]);

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
                {/* <th>Qualification</th>
                <th>Higher Qualification</th> */}
                <th>Course</th>
                <th>Address</th>
                <th>Gender</th>
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
                  {/* <td>{user.qualification}</td>
                  <td>{user.higherQualification}</td> */}
                  <td>{user.course}</td>
                  <td>{user.address}</td>
                  <td>{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default ProfessionalUserList;
