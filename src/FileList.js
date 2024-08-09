// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import './FileList.css'; // Import your CSS file

// const FileList = ({ currentUser }) => {
//   const [files, setFiles] = useState([]);
//   const [userDetails, setUserDetails] = useState(null);
//   const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
//   const [tutorData, setTutorData] = useState(null); // State to store tutor data

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date().toLocaleString());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // Fetch tutor details from localStorage
//     const tutorId = localStorage.getItem('tutorId');
//     if (tutorId) {
//       axios.get(`http://localhost:8080/api-v1/${tutorId}`)
//         .then(response => {
//           setTutorData(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching tutor details:', error);
//         });
//     }
//   }, []);

//   useEffect(() => {
//     if (currentUser) {
//       const fetchUserDetails = async () => {
//         try {
//           const response = await axios.get(`http://localhost:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`);
//           setUserDetails(response.data[0]);
//           fetchFilesByUserId(response.data[0].id);
//         } catch (error) {
//           console.error('Error fetching user details:', error);
//         }
//       };

      
//       const fetchFilesByUserId = async (userId) => {
//         try {
//           const response = await axios.get(`http://localhost:8080/api/files/user/${userId}`);
//           setFiles(response.data);
//         } catch (error) {
//           console.error('Error fetching files by user ID:', error);
//         }
//       };

//       fetchUserDetails();
//     }
//   }, [currentUser]);

//   return (
//     <div>
//       <div className="header3">
//         <label><h1>My Online Tutor</h1></label>
//         {tutorData && ( // Check if tutorData is available
//           <div className="tutor-details">
//             <div className="profile-details12">
//               <p><strong>Tutor ID:</strong> {tutorData.id}</p>
//               <p><strong>Tutor Name:</strong> {tutorData.firstName} {tutorData.lastName}</p>
//             </div>
//           </div>
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
//       <div className="currentdate">
//         <h3> {currentTime}</h3>
//       </div>
//       <div className="main-content3">
//         <div className="card11">
//           <Link to='/ViewVideo'>
//             <div className="card-image11" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/student-online-cute-guy-checked-shirt-with-glasses-studying-computer-waving-hands_140725-164433.jpg')` }}></div>
//             <div className="card-content11">
//               <input value='Videos' type="button" className="profile-button11 course-item7" />
//             </div>
//           </Link>
//         </div>
//         <div className="card11">
//           <Link to='/ViewFile'>
//             <div className="card-image11" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/laptop-two-mountains-books_23-2147615125.jpg?t=st=1711173537~exp=1711177137~hmac=5260897d68651a200d057963f86d94f452d2a9bea2860794709a3bd4aa4b3ac6&w=900')` }}></div>
//             <div className="card-content11">
//               <input value='Files' type="button" className="help-button11 course-item7" />
//             </div>
//           </Link>
//         </div>
//       </div>
//       <div className="footer3">
//         <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default FileList;








// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import './FileList.css'; // Import your CSS file

// const FileList = ({ currentUser }) => {
//   const [files, setFiles] = useState([]);
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
//       const fetchUserDetails = async () => {
//         try {
//           const response = await axios.get(`http://localhost:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`);
//           setUserDetails(response.data[0]);
//           fetchFilesByUserId(response.data[0].id);
//         } catch (error) {
//           console.error('Error fetching user details:', error);
//         }
//       };

      
//       const fetchFilesByUserId = async (userId) => {
//         try {
//           const response = await axios.get(`http://localhost:8080/api/files/user/${userId}`);
//           setFiles(response.data);
//         } catch (error) {
//           console.error('Error fetching files by user ID:', error);
//         }
//       };

//       fetchUserDetails();
//     }
//   }, [currentUser]);

//   return (
//     <div>
//       <div className="header3">
//         <label><h1>My Online Tutor</h1></label>
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
//       <div className="currentdate">
//             <h3> {currentTime}</h3>
//           </div>
//       <div className="main-content3">
     
//         <div className="card11">
//           <Link to='/ViewVideo'>
//             <div className="card-image11" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/student-online-cute-guy-checked-shirt-with-glasses-studying-computer-waving-hands_140725-164433.jpg')` }}></div>
//             <div className="card-content11">
//               <input value='Videos' type="button" className="profile-button11 course-item7" />
//             </div>
//           </Link>
//         </div>
//         <div className="card11">
//           <Link to='/ViewFile'>
//             <div className="card-image11" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/laptop-two-mountains-books_23-2147615125.jpg?t=st=1711173537~exp=1711177137~hmac=5260897d68651a200d057963f86d94f452d2a9bea2860794709a3bd4aa4b3ac6&w=900')` }}></div>
//             <div className="card-content11">
//               <input value='Files' type="button" className="help-button11 course-item7" />
//             </div>
//           </Link>
//         </div>
//       </div>
//       <div className="footer3">
//         <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default FileList;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './FileList.css'; // Import your CSS file

const FileList = ({ currentUser }) => {
  const [tutorData, setTutorData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch tutor details from localStorage
    const tutorId = localStorage.getItem('tutorId');
    if (tutorId) {
      axios.get(`http://3.7.14.21:8080/api-v1/${tutorId}`)
        .then(response => {
          setTutorData(response.data);
        })
        .catch(error => {
          console.error('Error fetching tutor details:', error);
        });
    }
  }, []);

  return (
    <div>
      <div className="header3">
        <label><h1>My Online Tutor</h1></label>
        {tutorData && ( // Check if tutorData is available
          <div className="tutor-details">
            <div className="profile-details12">
              <p><strong>Tutor ID:</strong> {tutorData.id}</p>
              <p><strong>Tutor Name:</strong> {tutorData.firstName} {tutorData.lastName}</p>
            </div>
          </div>
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
      <div className="currentdate">
        <h3> {currentTime}</h3>
      </div>
      <div className="main-content3">
        <div className="card11">
          <Link to='/ViewVideo'>
            <div className="card-image11" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/student-online-cute-guy-checked-shirt-with-glasses-studying-computer-waving-hands_140725-164433.jpg')` }}></div>
            <div className="card-content11">
              <input value='Videos' type="button" className="profile-button11 course-item7" />
            </div>
          </Link>
        </div>
        <div className="card11">
          <Link to='/ViewFile'>
            <div className="card-image11" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/laptop-two-mountains-books_23-2147615125.jpg?t=st=1711173537~exp=1711177137~hmac=5260897d68651a200d057963f86d94f452d2a9bea2860794709a3bd4aa4b3ac6&w=900')` }}></div>
            <div className="card-content11">
              <input value='Files' type="button" className="help-button11 course-item7" />
            </div>
          </Link>
        </div>
      </div>
      <div className="footer3">
        <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FileList;

