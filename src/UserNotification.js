

// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// import './UserNotification.css';

// function UserNotification({ currentUser }) {
//   const [notifications, setNotifications] = useState([]);
//   const [userDetails, setUserDetails] = useState(null);
//   const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date().toLocaleString());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // Fetch notifications from the server when the component mounts
//     const fetchNotifications = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/admin/announcements/users");
//         if (response.status === 200) {
//           setNotifications(response.data);
//         } else {
//           console.error("Failed to fetch notifications");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchNotifications();
//   }, []); // Empty dependency array ensures the effect runs only once

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
//       <nav className="sidebar8" style={{ backgroundColor: 'white' }}>
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

//       <div></div>
//       <div className="currentdate">
//             <h3> {currentTime}</h3>
//           </div>

//       <div className="main-content8">
//         <div className="notifications-page course-item8 notification-card">
//           <h1>Notifications</h1>

//           <table className="notification-table ">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Message</th>
//               </tr>
//             </thead>
//             <tbody>
//               {notifications.map((notification) => (
//                 <tr key={notification.id} className="notification-row">
//                   <td>{notification.title}</td>
//                   <td>{notification.message}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="footer8">
//         <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </div>
//   );
// }

// export default UserNotification;
















import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import './UserNotification.css';

function UserNotification({ currentUser }) {
  const [notifications, setNotifications] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    // Fetch user details when currentUser changes
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

  useEffect(() => {
    // Fetch notifications when userDetails is available
    if (userDetails) {
      const fetchNotifications = async () => {
        try {
          const response = await axios.get(`http://192.168.138.130:8080/api/admin/api/admin/announcements/user/${userDetails.id}`);
          if (response.status === 200) {
            setNotifications(response.data);
          } else {
            console.error("Failed to fetch notifications");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
  
      fetchNotifications();
    }
  }, [userDetails]);

  useEffect(() => {
    // Update current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="header8">
        <label><h1>My Online Tutor</h1></label>

        {userDetails ? (
          <div className="user-details mahesh ">
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
          <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
          <li><Link to='/FileList' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
          <li><Link to='/UserTask' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
          <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
          <li><Link to='/UserSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>

      <div></div>
      <div className="currentdate">
        <h3> {currentTime}</h3>
      </div>

      <div className="main-content8">
        <div className="notifications-page course-item8 notification-card">
          <h1>Notifications</h1>

          <table className="notification-table ">
            <thead>
              <tr>
                <th>Title</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
  {notifications.map((notification) => (
    <tr key={notification.id} className="notification-row">
      <td>{notification.title}</td>
      <td>{notification.message}</td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>

      <div className="footer8">
        <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </div>
  );
}

export default UserNotification;
