
// import React from "react";
// import { Link } from 'react-router-dom';
// import './Courses.css';

// function Courses() {
  
//   const userData = {
//     username: "Sunil",
//     userId: "12345",
//     profileImage: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?w=740&t=st=1703916472~exp=1703917072~hmac=1176b5bbdf99831939c02ac78bec49aeaa8893cc388dcc6322197708ba6c669c",
//     enrolledCourses: [
//       { id: 1, name: "Java", tutor: " Smith" },
//       { id: 2, name: "Music", tutor: " Johnson" },
//       // Add more courses as needed
//     ],
//   };

//   return (
//     <>
//        <div className="header5">
       
//         <label><h1>My Online Tutor</h1></label>
//       </div>
//       <nav className="sidebar5">
//         <ul>
       
//           <li><Link to='/UserDashboard'><label>Home</label></Link></li>
//           <li><Link to='/UserLiveclasses'><label>Live Classes</label></Link></li>
//           <li><Link to='/FileLIst'><label>Study Materials</label></Link></li>
//           <li><Link to='/UserTask'><label>Tasks</label></Link></li>
//           <li><Link to='/Courses'><label>My Courses</label></Link></li>
//           <li><Link to='/Discussion'><label> My Discussion</label></Link></li>
//           <li><Link to='/UserSetting'><label>Settings</label></Link></li>
//         </ul>
//       </nav>
//       <h1>List Of Courses</h1>
//       <div className="main-content5  course-list5 ">
       
//         <ul className="course-list5">
//           {userData.enrolledCourses.map(course => (
//             <li key={course.id} className="course-item">
//               <h2>{course.name}</h2>
//               <p>Tutor: {course.tutor}</p>
              
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="footer5">hello @123</div>
//     </>
//   );
// }

// export default Courses;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './UserProfile.css';

// const Courses = () => {
//   const [userDetails, setUserDetails] = useState(null);
//   const userId = 1; // Replace with the actual user ID you want to fetch

//   useEffect(() => {
//     // Fetch user details when the component mounts
//     axios.get(`http://localhost:8080/api/users/${userId}`)
//       .then(response => {
//         setUserDetails(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user details:', error);
//       });
//   }, [userId]);

//   return (
    // <div>
    //   <div className="header8">
    //     <h1>My Online Tutor</h1>



    //     {userDetails ? (
    //       <div className="user-details">
    //         <div className="profile-details12">
    //           <p><strong>User ID:</strong> {userDetails.id}</p>
    //           <p><strong>User Name:</strong> {userDetails.firstName}</p>
    //         </div>
    //       </div>
    //     ) : (
    //       <p></p>
    //     )}


        
    //   </div>
    //   <nav className="sidebar8" style={{backgroundColor:'white'}}>
    //     <ul>
    //       <li><Link to='/Dashboard' style={{color:'black'}}>Home</Link></li>
    //       <li><Link to='/UserLiveclasses'style={{color:'black'}}>Live Classes</Link></li>
    //       <li><Link to='/FileList' style={{color:'black'}}>Study Materials</Link></li>
    //       <li><Link to='/UserTask'style={{color:'black'}}>Tasks</Link></li>
    //       <li><Link to='/Courses'style={{color:'black'}}>My Courses</Link></li>
    //       <li><Link to='/Discussion'style={{color:'black'}}>My Discussion</Link></li>
    //       <li><Link to='/UserSetting'style={{color:'black'}}>Settings</Link></li>
    //     </ul>
    //   </nav>
    //   <div className="main-content8">
    //     <h2>User Courses</h2>
    //     {userDetails ? (
    //       <div className="user-details">
    //         {/* <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?w=740&t=st=1703916472~exp=1703917072~hmac=1176b5bbdf99831939c02ac78bec49aeaa8893cc388dcc6322197708ba6c669c" alt="Profile" className='profile-image5' />
    //          */}
    //         <div className="profile-details">
    //           <p><strong>User ID:</strong> {userDetails.id}</p>
    //           <p><strong>First Name:</strong> {userDetails.firstName}</p>
    //           <p><strong>Last Name:</strong> {userDetails.lastName}</p>
    //           {/* <p><strong>Gender:</strong> {userDetails.gender}</p>
    //           <p><strong>Email:</strong> {userDetails.email}</p>
    //           <p><strong>Password:</strong> {userDetails.password}</p>
    //           <p><strong>Confirm Password:</strong> {userDetails.confirmPassword}</p>
    //           <p><strong>Phone Number:</strong> {userDetails.phoneNumber}</p> */}
    //           <p><strong>Courses:</strong> {userDetails.courses ? userDetails.courses.join(', ') : ''}</p>
    //           {/* <p><strong>Address:</strong> {userDetails.address}</p> */}
    //         </div>
    //       </div>
    //     ) : (
    //       <p>Loading user details...</p>
    //     )}
    //   </div>
    // </div>
//   );
// };

// export default Courses;






















// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './UserProfile.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faBookOpen, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


// const Courses = ({ currentUser }) => {
//   const [userDetails, setUserDetails] = useState(null);

//   useEffect(() => {
//     if (currentUser) {
//       axios.get(`http://localhost:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
//         .then(response => {
//           setUserDetails(response.data[0]); // Assuming the API returns a single user
//         })
//         .catch(error => {
//           console.error('Error fetching user details:', error);
//         });
//     }
//   }, [currentUser]);

//   return (
//     <div>
//       <div className="header8">
//         <h1>My Online Tutor</h1>
//         {userDetails ? (
//           <div className="user-details">
//             <div className="profile-details12">
//               <p><strong>User ID:</strong> {userDetails.id}</p>
//               <p><strong>User Name:</strong> {userDetails.firstName}</p>
//             </div>
//           </div>
//         ) : (
//           <p></p>
//         )}
//       </div>
//       <nav className="sidebar8" style={{ backgroundColor: 'white' }}>
//         <ul>
//            <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
//            <li><Link to='/Courses'><FontAwesomeIcon icon={faBookOpen} /> My Courses</Link></li>
//           <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
//           <li><Link to='/FileList'><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/UserTask'><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/UserSetting'><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
       
//         </ul>
//       </nav>
//       <div className="main-content8">
//         <h2>User Courses</h2>
//         <div>
//             <h2>My Course - <span className='course-name'> {userDetails.courses ? userDetails.courses.join(', ') : ''}</span></h2>
            
//             </div>
//         {userDetails ? (

          
//           <div className="user-details">
            
//             <div className="profile-details">
          
//               <p><strong>User ID:</strong> {userDetails.id}</p>
//               <p><strong>Full Name:</strong> {userDetails.firstName} {userDetails.lastName} </p>
            
//               <p><strong>Courses:</strong> {userDetails.courses ? userDetails.courses.join(', ') : ''}</p>
//             </div>
//           </div>
//         ) : (
//           <p>Loading user details...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Courses;














import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UserProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faBookOpen, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Courses = ({ currentUser }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading state when starting to fetch user details
    if (currentUser) {
      axios.get(`http://3.7.14.21:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
        .then(response => {
          setUserDetails(response.data[0]); // Assuming the API returns a single user
          setLoading(false); // Set loading to false after successful fetch
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
          setLoading(false); // Set loading to false in case of error
        });
    }
  }, [currentUser]);

  return (
    <div>
      <div className="header8">
        <h1>My Online Tutor</h1>
        {userDetails && (
          <div className="user-details">
            <div className="profile-details12">
              <p><strong>User ID:</strong> {userDetails.id}</p>
              <p><strong>User Name:</strong> {userDetails.firstName}</p>
            </div>
          </div>
        )}
      </div>
      <nav className="sidebar8" style={{ backgroundColor: 'white' }}>
        <ul>
          <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to='/Courses'><FontAwesomeIcon icon={faBookOpen} /> My Courses</Link></li>
          <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
          <li><Link to='/FileList'><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
          <li><Link to='/UserTask'><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
          <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
          <li><Link to='/UserSetting'><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link></li>
        </ul>
      </nav>
      <div className="main-content8">
        <h2>User Courses</h2>
        {loading ? (
          <p>Loading user details...</p>
        ) : (
          <div>
            <h2>My Course - <span className='course-name'> {userDetails ? userDetails.courses.join(', ') : ''}</span></h2>
          </div>
        )}
        {userDetails && (
          <div className="user-details">
            <div className="profile-details">
              <p><strong>User ID:</strong> {userDetails.id}</p>
              <p><strong>Full Name:</strong> {userDetails.firstName} {userDetails.lastName} </p>
              <p><strong>Courses:</strong> {userDetails.courses ? userDetails.courses.join(', ') : ''}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
