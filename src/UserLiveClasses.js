
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import './UserLiveClasses.css';

// function UserLiveClasses({ currentUser }) {
//   const [messages, setMessages] = useState([]);
//   const [userDetails, setUserDetails] = useState(null);
//   const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
//   const [courseName,setCourseName]=useState("")

//   useEffect(() => {
//     // Fetch user details when currentUser changes
//     if (currentUser) {
//       axios.get(`http://localhost:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
//         .then(response => {
//           setUserDetails(response.data[0]); // Assuming the API returns a single user
//           fetchMessagesByUserId(response.data[0].courses);
//           console.log(response.data[0].courses+"resp")
//           setCourseName(response.data[0].courses)
//         })
//         .catch(error => {
//           console.error('Error fetching user details:', error);
//         });
//     }
//   }, [currentUser]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date().toLocaleString());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);
//   // Function to fetch messages by user id
//   const fetchMessagesByUserId = async (courseName) => {
//     try {
//       console.log(courseName+"--")
//       const response = await axios.get(`http://localhost:8080/api/messages/message/${courseName}`);
//       setMessages(response.data);
     
//     } catch (error) {
//       console.error('Error fetching data by user id:', error);
//     }
//   };

//   return (
//     <>
//       <div className="header2">
//         <label>
//           <h1>My Online Tutor</h1>
//         </label>

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
//           <h2>UserDashboard</h2>
//           <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          

//           <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
//           <li><Link to='/FileList'><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/UserTask'><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/UserSetting'><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
//         </ul>
//       </nav>

//       <div className="body2">
//       <div className="currentdate">
//             <h3> {currentTime}</h3>
//           </div>
//         <div className="main-content">
          
//           <div className="course-item27">
            
//             <h1>Live classes</h1>
//             <table className="liveclass-table file-table">
//               <thead>
//                 <tr>
//                   <th>Tutor ID</th>
//                   <th>Live class link</th>
//                   <th>Date</th>
//                   <th>Course Name</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {messages.map((message) => (
//                   <tr key={message.id} className="liveclass-item">
//                     <td>{message.tutorId}</td>
//                     <td><a href={message.liveLink} target="_blank" rel="noopener noreferrer">{message.liveLink}</a></td>
//                     <td>{new Date(message.time).toLocaleString()}</td>
//                     <td>{message.courseName}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       <div className="footer2">
//         <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default UserLiveClasses;















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './UserLiveClasses.css';

function UserLiveClasses({ currentUser }) {
  const [messages, setMessages] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    // Fetch user details when currentUser changes
    if (currentUser) {
      axios.get(`http://3.7.14.21:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
        .then(response => {
          setUserDetails(response.data[0]); // Assuming the API returns a single user
          fetchMessagesByUserId(response.data[0].id);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [currentUser]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // Function to fetch messages by user id
  const fetchMessagesByUserId = async (userId) => {
    try {
      const response = await axios.get(`http://3.7.14.21:8080/api/messages/user/${userId}`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching data by user id:', error);
    }
  };

  return (
    <>
      <div className="header2">
        <label>
          <h1>My Online Tutor</h1>
        </label>

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
          <h2>UserDashboard</h2>
          <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
          <li><Link to='/FileList'><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
          <li><Link to='/UserTask'><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
          <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
          <li><Link to='/UserSetting'><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>

      <div className="body2">
      <div className="currentdate">
            <h3> {currentTime}</h3>
          </div>
        <div className="main-content">
          
          <div className="course-item27">
            
            <h1>Live classes</h1>
            <table className="liveclass-table file-table">
              <thead>
                <tr>
                  <th>Tutor ID</th>
                  <th>Live class link</th>
                  <th>Date</th>
                  <th>Course Name</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message) => (
                  <tr key={message.id} className="liveclass-item">
                    <td>{message.tutorId}</td>
                    <td><a href={message.liveLink} target="_blank" rel="noopener noreferrer">{message.liveLink}</a></td>
                    <td>{new Date(message.time).toLocaleString()}</td>
                    <td>{message.courseName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="footer2">
        <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default UserLiveClasses;
