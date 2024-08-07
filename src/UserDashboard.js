
// // import React from "react";
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './UserDashboard.css';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


// function UserDashboard() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [userDetails, setUserDetails] = useState(null);
//   const userId = 1; // Replace with the actual user ID you want to fetch
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

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
//     <>
//       <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//         <p style={{ color:'white',marginLeft:'700px',fontSize:'25px'}}>{currentTime.toLocaleString()}</p> 
//         {userDetails ? (
//           <div className="user-details">
//             <div className="profile-details12">
//               <p><strong>User ID:</strong> {userDetails.id}</p>
//               <p><strong>User Name:</strong> {userDetails.firstName}</p>
//             </div>
//           </div>
//         ) : (
//           <p>Loading user details...</p>
//         )}


//       </div>
//       <div>
// <nav className="sidebar8" >
//         <ul>
        
//           <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
//           <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
//           <li><Link to='/FileList' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/UserTask' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/UserSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>

//         </ul>
//       </nav>


//       </div>
//       <div className="back">
//         <h1>User Dashboard</h1>
//         <section className='home-section2'>
//           <Link to="/UserAcademic" className="course-link">
//             <div className="course-item2">
//               <img
//                 src="https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?w=900&t=st=1704865629~exp=1704866229~hmac=bf48f531d643d12a0a78e7649c08158b6f50f18913eb2ae8f59899328b19a6ff"
//                 alt=""
//                 className="course-image"
//               />
//               <h2>Academic courses</h2>
//             </div>
//           </Link>

//           <Link to="/UserTechnical" className="course-link">
//             <div className="course-item2">
//               <img
//                 src="https://img.freepik.com/premium-photo/happy-young-student-with-laptop-looking-his-classmate-sitting-front-him-during-discussion-consultation-lesson_274679-9699.jpg?w=900"
//                 alt=""
//                 className="course-image"
//               />
//               <h2>Technical courses</h2>
//             </div>
//           </Link>

//           <Link to="/UserProfessional" className="course-link">
//             <div className="course-item2">
//               <img
//                 src="https://img.freepik.com/free-photo/tailors-working_1098-15502.jpg?w=900&t=st=1704866085~exp=1704866685~hmac=2a579c0ddc8fa17d927942a0142f6fabeb54dc1872fabdc5e56739fdd9f42be2"
//                 alt=""
//                 className="course-image"
//               />
//               <h2>Professional/skilled</h2>
//             </div>
//           </Link>
//         </section>
//       </div>
//       <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default UserDashboard;





















// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './UserDashboard.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faBookOpen, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// function UserDashboard({ currentUser, handleLogout }) {
//   const navigate = useNavigate();
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
//     <>
//       <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//         {userDetails ? (
//           <div className="user-details mahesh ">
//             <div className="profile-details12">
//               <p><strong>User ID:</strong> {userDetails.id}</p>
//               <p><strong>User Name:</strong> {userDetails.firstName}</p>
//             </div>
//           </div>
//         ) : (
//           <p>Loading user details...</p>
//         )}
//       </div>
//       <div>
//         <nav className="sidebar8" >
//           <ul>
//             <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> <span>Home</span></Link></li>
//             <li><Link to='/Courses'><FontAwesomeIcon icon={faBookOpen} /> My Courses</Link></li>
//             <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> <span>Live Classes</span></Link></li>
//             <li><Link to='/FileList'><FontAwesomeIcon icon={faBook} /> <span>Study Materials</span></Link></li>
//             <li><Link to='/UserTask'><FontAwesomeIcon icon={faTasks} /> <span>Tasks</span></Link></li>
//             <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> <span>My Discussion</span></Link></li>
//             <li><Link to='/UserSetting'><FontAwesomeIcon icon={faCog} /> <span>Settings</span></Link></li>
//             <li><Link to='/' onClick={() => handleLogout()}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link></li>
//           </ul>
//         </nav>
//       </div>
//       <div>
//       <h1>User Dashboard</h1>
//         <section className='home-section2'>
//           <Link to="/UserAcademic" className="course-link">
//             <div className="course-item2">
//               <img
//                 src="https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?w=900&t=st=1704865629~exp=1704866229~hmac=bf48f531d643d12a0a78e7649c08158b6f50f18913eb2ae8f59899328b19a6ff"
//                 alt=""
//                 className="course-image"
//               />
//               <h2>Academic courses</h2>
//             </div>
//           </Link>

//           <Link to="/UserTechnical" className="course-link">
//             <div className="course-item2">
//               <img
//                 src="https://img.freepik.com/premium-photo/happy-young-student-with-laptop-looking-his-classmate-sitting-front-him-during-discussion-consultation-lesson_274679-9699.jpg?w=900"
//                 alt=""
//                 className="course-image"
//               />
//               <h2>Technical courses</h2>
//             </div>
//           </Link>

//           <Link to="/UserProfessional" className="course-link">
//             <div className="course-item2">
//               <img
//                 src="https://img.freepik.com/free-photo/tailors-working_1098-15502.jpg?w=900&t=st=1704866085~exp=1704866685~hmac=2a579c0ddc8fa17d927942a0142f6fabeb54dc1872fabdc5e56739fdd9f42be2"
//                 alt=""
//                 className="course-image"
//               />
//               <h2>Professional/skilled</h2>
//             </div>
//           </Link>
//         </section>
//       </div>
//       <div className="footer1">
//         <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default UserDashboard;














// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './UserDashboard.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faBookOpen, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// function UserDashboard({ currentUser, handleLogout }) {
//   const navigate = useNavigate();
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
//     <>
//       <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//         {userDetails ? (
//           <div className="user-details mahesh ">
//             <div className="profile-details12">
//               <p><strong>User ID:</strong> {userDetails.id}</p>
//               <p><strong>User Name:</strong> {userDetails.firstName}</p>
//             </div>
//           </div>
//         ) : (
//           <p>Loading user details...</p>
//         )}
//       </div>
//       <div>
//         <nav className="sidebar8" >
//           <ul>
//             <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> <span>Home</span></Link></li>
//             {/* <li><Link to='/Courses'><FontAwesomeIcon icon={faBookOpen} /> My Courses</Link></li> */}
//             <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> <span>Live Classes</span></Link></li>
//             <li><Link to='/FileList'><FontAwesomeIcon icon={faBook} /> <span>Study Materials</span></Link></li>
//             <li><Link to='/UserTask'><FontAwesomeIcon icon={faTasks} /> <span>Tasks</span></Link></li>
//             <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> <span>My Discussion</span></Link></li>
//             <li><Link to='/UserSetting'><FontAwesomeIcon icon={faCog} /> <span>Settings</span></Link></li>
//             <li><Link to='/' onClick={() => handleLogout()}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link></li>
//           </ul>
//         </nav>
//       </div>
//       <div>
//       <h1>User Dashboard</h1>
//         {/* <section className='home-section2'>
//           <Link to="/UserAcademic" className="course-link">
//             <div className="course-item">
//               <img
//                 src="https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?w=900&t=st=1704865629~exp=1704866229~hmac=bf48f531d643d12a0a78e7649c08158b6f50f18913eb2ae8f59899328b19a6ff"
//                 alt=""
//                 className="course-image11"
//               />
//               <h2>Academic courses</h2>
//             </div>
//           </Link>

//           <Link to="/UserTechnical" className="course-link">
//             <div className="course-item">
//               <img
//                 src="https://img.freepik.com/premium-photo/happy-young-student-with-laptop-looking-his-classmate-sitting-front-him-during-discussion-consultation-lesson_274679-9699.jpg?w=900"
//                 alt=""
//                 className="course-image11"
//               />
//               <h2>Technical courses</h2>
//             </div>
//           </Link>

//           <Link to="/UserProfessional" className="course-link">
//             <div className="course-item">
//               <img
//                 src="https://img.freepik.com/free-photo/tailors-working_1098-15502.jpg?w=900&t=st=1704866085~exp=1704866685~hmac=2a579c0ddc8fa17d927942a0142f6fabeb54dc1872fabdc5e56739fdd9f42be2"
//                 alt=""
//                 className="course-image11"
//               />
//               <h2>Professional/skilled</h2>
//             </div>
//           </Link>
//         </section> */}







// <div className="main-content8">
//         <h2> My Course</h2>
//         {userDetails ? (
//           <div className="user-details">
//             <div className="profile-details">
//               <p><strong>User ID:</strong> {userDetails.id}</p>
//               <p><strong>First Name:</strong> {userDetails.firstName}</p>
//               <p><strong>Last Name:</strong> {userDetails.lastName}</p>
//               <p><strong>Courses:</strong> {userDetails.courses ? userDetails.courses.join(', ') : ''}</p>
//             </div>
//           </div>
//         ) : (
//           <p>Loading user details...</p>
//         )}
//       </div>



//       </div>
//       <div className="footer1">
//         <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default UserDashboard;















// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './UserDashboard.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog,  faCode, faGraduationCap, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// import {} from '@fortawesome/free-solid-svg-icons';

// function UserDashboard({ currentUser, handleLogout }) {
//   const navigate = useNavigate();
//   const [userDetails, setUserDetails] = useState(null);
//   const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date().toLocaleString());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

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
//     <>
//       <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//         {/* {userDetails ? (
//           <div className="user-details mahesh ">
//             <div className="profile-details12">
//               <p><strong>User ID:</strong> {userDetails.id}</p>
//               <p><strong>User Name:</strong> {userDetails.firstName}</p>
//             </div>
//           </div>
//         ) : (
//           <p>Loading user details...</p>
//         )} */}


//           <div className="small-container">
//             <h3> {currentTime}</h3>
//           </div>
        
//       </div>
//       <div>
//         <nav className="sidebar8">
//           <ul>
//             <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> <span>Home</span></Link></li>
//             <li><Link to='/Courses'><FontAwesomeIcon icon={faCode} /> <span>My Courses</span></Link></li>

//             <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> <span>Live Classes</span></Link></li>
//             <li><Link to='/FileList'><FontAwesomeIcon icon={faBook} /> <span>Study Materials</span></Link></li>
           
//             <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> <span>My Discussion</span></Link></li>
//             <li><Link to='/UserSetting'><FontAwesomeIcon icon={faCog} /> <span>Settings</span></Link></li>
//             <li><Link to='/OtherCourses'><FontAwesomeIcon icon={faGraduationCap} /> <span>OtherCourses</span></Link></li>
//             <li><Link to='/' onClick={() => handleLogout()}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link></li>
//           </ul>
//         </nav>
//       </div>
//       <div>
//         <h1>User Dashboard </h1> 
        
        
//         <div>
      
//     </div>
//          <div className="main-content8">
  
//           {userDetails ? (
//             <div className="user-details user1123">
//               <div className="">
//                 <div>
//               {/* <h2>My Course - <span className='course-name'> {userDetails.courses ? userDetails.courses.join(', ') : ''}</span></h2> */}
//               </div>
//               <div>
//               <h3><strong>User ID:</strong> {userDetails.id}</h3></div>
//                 <h3><strong>Full Name:</strong> {userDetails.firstName} {userDetails.lastName}</h3>
                
//                </div>
//             </div>
//           ) : (
//             <p>Loading user details...</p>
//           )}
//         </div>
  
//       </div>

//                        <div className="head-title  ">
                        
//                              <ul className="box-info user1123">
//                              <a href="MyTutor">
//                               <li>
                                
//                             <img src="https://img.freepik.com/premium-photo/young-male-teacher-standing-with-book_488220-11333.jpg?w=900" className='bx bxs-calendar-check' ></img>
//                             <span className="text">
//                                  <h3>MyTutor</h3>  
//                             </span>
//                             </li>
//                         </a>


                     
//                     </ul>

//                     <ul className="box-info user1123">
//                              <a href="UserTask">
//                               <li>
                                
//                             <img src="https://img.freepik.com/free-vector/woman-checking-giant-check-list_23-2148099800.jpg?t=st=1711187667~exp=1711191267~hmac=d8311a6adf978fb03499bed3ff973a4ab76d43a0829cbff452d594449f9a4765&w=740" className='bx bxs-calendar-check' ></img>
//                             <span className="text">
//                                  <h3>MyTasks</h3>  
//                             </span>
//                             </li>
//                         </a>


                     
//                     </ul>





//                     <ul className="box-info user1123">
//                              <a href="UserAttendence">
//                               <li>
                                
//                             <img src="https://img.freepik.com/free-photo/sided-view-hand-typing-keyboard_23-2149445753.jpg?t=st=1711522023~exp=1711525623~hmac=aa7fa29940dab95cd4ce16fe08c24e17b7107d7483a0d8ea5e4791dac40d8d0f&w=900" className='bx bxs-calendar-check' ></img>
//                             <span className="text">
//                                  <h3>Attendance</h3>  
//                             </span>
//                             </li>
//                         </a>


                     
//                     </ul>

//                     </div>





//       <div className="footer1" style={{marginTop: "5%"}}>
//         <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default UserDashboard;






























import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UserDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog,  faCode, faGraduationCap, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import {} from '@fortawesome/free-solid-svg-icons';

function UserDashboard({ currentUser, handleLogout }) {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentUser) {
      axios.get(`http://192.168.138.130:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
        .then(response => {
          setUserDetails(response.data[0]); 
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [currentUser]);

  return (
    <>
      <div className="header1">
        <label><h1>My Online Tutor</h1></label>
<div className='user1123 box-info '>
        <a href="UserProfile  ">

        {userDetails ? (
          <div className="user-details mahesh  ">
            <div className="profile-details12">
              <p><strong>User ID:</strong> {userDetails.id}</p>
              <p><strong>User Name:</strong> {userDetails.firstName}</p>
            </div>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
 </a>

 </div>




        
      </div>
      <div>
        <nav className="sidebar8">
          <ul>
            <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> <span>Home</span></Link></li>
           

            <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> <span>Live Classes</span></Link></li>
            <li><Link to='/FileList'><FontAwesomeIcon icon={faBook} /> <span>Study Materials</span></Link></li>
           
            <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> <span>My Discussion</span></Link></li>
            <li><Link to='/UserSetting'><FontAwesomeIcon icon={faCog} /> <span>Settings</span></Link></li>
              <li><Link to='/' onClick={() => handleLogout()}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link></li>
          </ul>
        </nav>
      </div>
      <div>
        <h1>User Dashboard </h1> 
          <div className="currentdate">
            <h3> {currentTime}</h3>
          </div>
      </div>

                       <div className="head-title  ">
                        








                       <ul className="box-info user1123">
                             <a href="/Courses">
                              <li>
                                
                            <img src="https://img.freepik.com/free-photo/sided-view-hand-typing-keyboard_23-2149445753.jpg?t=st=1711522023~exp=1711525623~hmac=aa7fa29940dab95cd4ce16fe08c24e17b7107d7483a0d8ea5e4791dac40d8d0f&w=900" className='bx bxs-calendar-check' ></img>
                            <span className="text">
                                 <h3>MyCourse</h3>  
                            </span>
                            </li>
                        </a>


                     
                    </ul>




                             <ul className="box-info user1123">
                             <a href="MyTutor">
                              <li>
                                
                            <img src="https://img.freepik.com/premium-photo/young-male-teacher-standing-with-book_488220-11333.jpg?w=900" className='bx bxs-calendar-check' ></img>
                            <span className="text">
                                 <h3>MyTutor</h3>  
                            </span>
                            </li>
                        </a>


                     
                    </ul>

                    <ul className="box-info user1123">
                             <a href="UserTask">
                              <li>
                                
                            <img src="https://img.freepik.com/premium-photo/education-statistics-people-concept-group-students-with-books-notebooks-school-lesson-virtual-screens-with-charts_380164-173755.jpg?w=900                           " className='bx bxs-calendar-check' ></img>
                            <span className="text">
                                 <h3>MyTasks</h3>  
                            </span>
                            </li>
                        </a>


                     
                    </ul>





                    <ul className="box-info user1123">
                             <a href="UserAttendence">
                              <li>
                                
                            <img src="     https://img.freepik.com/free-vector/woman-checking-giant-check-list_23-2148099800.jpg?t=st=1711187667~exp=1711191267~hmac=d8311a6adf978fb03499bed3ff973a4ab76d43a0829cbff452d594449f9a4765&w=740   " className='bx bxs-calendar-check' ></img>
                            <span className="text">
                                 <h3>Attendance</h3>  
                            </span>
                            </li>
                        </a>


                     
                    </ul>









                    <ul className="box-info user1123">
                             <a href="OtherCourses">
                              <li>
                                
                            <img src="   https://img.freepik.com/free-vector/students-studying-talking_1262-21513.jpg?t=st=1713725180~exp=1713728780~hmac=ac8148c77f365942cbe8d2c51080bf9bc689af3c0606f32125939d3e1affa63f&w=996  " className='bx bxs-calendar-check' ></img>
                            <span className="text">
                                 <h3>OtherCourses</h3>  
                            </span>
                            </li>
                        </a>


                     
                    </ul>




                    </div>





      <div className="footer1" style={{marginTop: "5%"}}>
        <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default UserDashboard;












































