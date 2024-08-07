
// import React from "react";
// import { Link } from 'react-router-dom';
// import './UserSetting.css';

// const UserProfile = () => {
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

// function UserSetting() {
  
//   return (
//     <>
//       <div className="header7">
       
//         <label><h1>My Online Tutor</h1></label>



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
//       <nav className="sidebar7">
//         <ul>
         
//           <li><Link to='/UserDashboard'><label>Home</label></Link></li>
//           <li><Link to='/UserLiveclasses'><label>Live Classes</label></Link></li>
//           <li><Link to='/FileList'><label>Study Materials</label></Link></li>
//           <li><Link to='/UserTask'><label>Tasks</label></Link></li>
//           <li><Link to='/Courses'><label>My Courses</label></Link></li>
//           <li><Link to='/Discussion'><label> My Discussion</label></Link></li>
//           <li><Link to='/UserSetting'><label>Settings</label></Link></li>
//         </ul>
//       </nav>
//       <div className="back2"> 
//       <div className="main-content7">

//         <h1>Settings</h1>
      
       
//         <div className="settings-buttons">
        
//           <Link to='/UserProfile'><input value='Profile' type="button" className="profile-button course-item7" /></Link>
//           <Link to='/Help'><input value='Help/Support' type="button" className="help-button course-item7" /></Link>
//           <Link to='/UserNotification'><input value='Notifications' type="button" className="notifications-button course-item7" /></Link>
//           <Link to='/UserViewReports'><input value='Reports' type="button" className="reports-button course-item7" /></Link>
//          <Link to='/'><button className="logout-button course-item7">Logout</button></Link> 
//         </div>
//         </div>
//         </div>
    
      
//       <div className="footer7">
//       <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//         </div>
//     </>
//   );
// }


// export default UserSetting;














// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './UserSetting.css';

// const UserSetting = () => {
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
//     <>
//       <div className="header7">
//         <label><h1>My Online Tutor</h1></label>
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
//       <nav className="sidebar7">
//         <ul>
//           <li><Link to='/UserDashboard'><label>Home</label></Link></li>
//           <li><Link to='/UserLiveclasses'><label>Live Classes</label></Link></li>
//           <li><Link to='/FileList'><label>Study Materials</label></Link></li>
//           <li><Link to='/UserTask'><label>Tasks</label></Link></li>
//           {/* <li><Link to='/Courses'><label>My Courses</label></Link></li> */}
//           <li><Link to='/Discussion'><label>My Discussion</label></Link></li>
//           <li><Link to='/UserSetting'><label>Settings</label></Link></li>
//           <li><Link to='/'><label>Logout</label></Link></li>
//         </ul>
//       </nav>
//       <div className="back2"> 
//         <div className="main-content7">
//           <h1>Settings</h1>
//           <div className="settings-buttons">
//             <Link to='/UserProfile'><input value='Profile' type="button" className="profile-button course-item7" /></Link>
//             <Link to='/Help'><input value='Help/Support' type="button" className="help-button course-item7" /></Link>
//             <Link to='/UserNotification'><input value='Notifications' type="button" className="notifications-button course-item7" /></Link>
//             <Link to='/UserViewReports'><input value='Reports' type="button" className="reports-button course-item7" /></Link>
   
//           </div>
//         </div>
//       </div>
//       <div className="footer7">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default UserSetting;




















// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// import './UserSetting.css';

// const UserSetting = () => {
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
//     <>
//       <div className="header7">
//         <label><h1>My Online Tutor</h1></label>

        
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
 

// <nav className="sidebar8" style={{ backgroundColor: 'white' }}>
//         <ul>
//         <h2  >UserDashboard </h2>
//           <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
//           <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
//           <li><Link to='/FileList' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/UserTask' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/UserSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>

//         </ul>
//       </nav>

//       <div className="back2"> 
//         <div className="main-content7">
//           <h1>Settings</h1>
//           <div className="settings-buttons">
//             <Link to='/UserProfile'><input value='Profile' type="button" className="profile-button course-item7" /></Link>
//             <Link to='/Help'><input value='Help/Support' type="button" className="help-button course-item7" /></Link>
//             <Link to='/UserNotification'><input value='Notifications' type="button" className="notifications-button course-item7" /></Link>
//             <Link to='/UserViewReports'><input value='Reports' type="button" className="reports-button course-item7" /></Link>
   
//           </div>
//         </div>
//       </div>
//       <div className="footer7">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default UserSetting;
















// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// import './UserSetting.css';

// const UserSetting = ({ currentUser }) => {
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
//       <div className="header7">
//         <label><h1>My Online Tutor</h1></label>
        
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
 
//       <nav className="sidebar8" style={{ backgroundColor: 'white' }}>
//         <ul>
//           <h2>UserDashboard </h2>
//           <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
//           <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
//           <li><Link to='/FileList'><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/UserTask'><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/UserSetting'><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
//         </ul>
//       </nav>

//       <div className="back2"> 
//         <div className="main-content7">
//           <h1>Settings</h1>
//           <div className="settings-buttons">
//             <Link to='/UserProfile'><input value='Profile' type="button" className="profile-button course-item7" /></Link>
//             <Link to='/Help'><input value='Help/Support' type="button" className="help-button course-item7" /></Link>
//             <Link to='/UserNotification'><input value='Notifications' type="button" className="notifications-button course-item7" /></Link>
//             <Link to='/UserViewReports'><input value='Reports' type="button" className="reports-button course-item7" /></Link>
//           </div>
//         </div>
//       </div>
//       <div className="footer7">
//         <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default UserSetting;







import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import './UserSetting.css';

const UserSetting = ({ currentUser }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (currentUser) {
      axios.get(`http://192.168.138.130:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
        .then(response => {
          setUserDetails(response.data[0]); // Assuming the API returns a single user
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [currentUser]);

  return (
    <>
      <div className="header7">
        <label><h1>My Online Tutor</h1></label>
        
        {userDetails ? (
          <div className="user-details">
            <div className="profile-details12">
              <p><strong>User ID:</strong> {userDetails.id}</p>
              <p><strong>User Name:</strong> {userDetails.firstName}</p>
            </div>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>
 
      <nav className="sidebar8" style={{ backgroundColor: 'white' }}>
        <ul>
          <h2>UserDashboard </h2>
          <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
          <li><Link to='/FileList'><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
          <li><Link to='/UserTask'><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
          <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
          <li><Link to='/UserSetting'><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>

      <div className="back2"> 
        <div className="main-content7">
          <h1>Settings</h1>
          <div className="settings-buttons">
            <Link to='/UserProfile'><input value='Profile' type="button" className="profile-button course-item7" /></Link>
            <Link to='/Help'><input value='Help/Support' type="button" className="help-button course-item7" /></Link>
            <Link to='/UserNotification'><input value='Notifications' type="button" className="notifications-button course-item7" /></Link>
         <Link to='/Quiz'><input value='Take Test' type="button" className="notifications-button2 course-item7" /></Link>
            <Link to='/PaymentHistory'><input value='PaymentHistory' type="button" className="reports-button course-item7" /></Link>
          </div>
        </div>
      </div>
      <div className="footer7">
        <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default UserSetting;
