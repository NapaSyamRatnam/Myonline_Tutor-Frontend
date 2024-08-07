


// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import './Discussion.css';

// function Discussion() {
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

//   const [discussions, setDiscussions] = useState([]);
//   const [newDiscussion, setNewDiscussion] = useState({
//     tutorName: '',
//     tutorId: '',
//     userName: '',
//     userId: '',
//     message: '',
//     date: '',
//   });

//   // Validation states
//   const [validTutorName, setValidTutorName] = useState(true);
//   const [validUserName, setValidUserName] = useState(true);
//   const [validMessage, setValidMessage] = useState(true);
//   const [validTutorId, setValidTutorId] = useState(true);
//   const [validUserId, setValidUserId] = useState(true);

//   const validateFields = () => {
//     let valid = true;
//     if (!/^[a-zA-Z]+$/.test(newDiscussion.tutorName)) {
//       setValidTutorName(false);
//       valid = false;
//     } else {
//       setValidTutorName(true);
//     }

//     if (!/^[a-zA-Z]+$/.test(newDiscussion.userName)) {
//       setValidUserName(false);
//       valid = false;
//     } else {
//       setValidUserName(true);
//     }

//     if (newDiscussion.message.trim() === '') {
//       setValidMessage(false);
//       valid = false;
//     } else {
//       setValidMessage(true);
//     }

//     if (!/^\d+$/.test(newDiscussion.tutorId)) {
//       setValidTutorId(false);
//       valid = false;
//     } else {
//       setValidTutorId(true);
//     }

//     if (!/^\d+$/.test(newDiscussion.userId)) {
//       setValidUserId(false);
//       valid = false;
//     } else {
//       setValidUserId(true);
//     }

//     return valid;
//   };

//   const saveDiscussion = () => {
//     if (!validateFields()) {
//       return;
//     }

//     const currentDate = new Date();
//     const formattedDate = currentDate.toISOString(); // Format date to ISO string

//     console.log('Saving discussion:', newDiscussion);

//     const discussionData = {
//       ...newDiscussion,
//       date: formattedDate // Include current date and time in the discussion data
//     };

//     axios.post('http://localhost:8080/api/discussion/save', discussionData)
//       .then(response => {
//         console.log('Discussion saved successfully:', response.data);
//         setNewDiscussion({
//           tutorName: '',
//           tutorId: '',
//           userName: '',
//           userId: '',
//           message: '',
//           date: '', // Clear date after saving
//         });
//         fetchDiscussions(); // Fetch discussions after saving
//       })
//       .catch(error => console.error('Error saving discussion:', error));
//   };

//   useEffect(() => {
//     fetchDiscussions();
//   }, [userId]);

//   const fetchDiscussions = () => {
//     axios.get(`http://localhost:8080/api/discussion/user/${userId}`)
//       .then(response => setDiscussions(response.data))
//       .catch(error => console.error('Error fetching discussions:', error));
//   };

//   return (
//     <>
//       <div className="header6">
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

//       <div className="main-content6">
//         <h1>Interaction with the Tutors</h1>
//         <div className="discussion-app ">
//           <div className="discussion-list course-item6">
//             <h2>Discussions</h2>
//             <ul>
//               {discussions.map(discussion => (
//                 <li key={discussion.id} className="message">
//                   <span className="user">{discussion.userName}</span>
//                   <span className="separator"> to </span>
//                   <span className="user">{discussion.tutorName}</span>
//                   <span className="message-text">: {discussion.message}</span>
//                   <span className="date">({discussion.date})</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="new-discussion course-item6 ">
//             <h2>New Discussion</h2>
//             <form>
//               <div className="form-group">
//                 <label>Tutor Name:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.tutorName}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, tutorName: e.target.value })}
//                   className={!validTutorName ? 'invalid' : ''}
//                 />
//                 {!validTutorName && <span className="error-message">Tutor name should only contain alphabets</span>}
//               </div>

//               <div className="form-group">
//                 <label>Tutor ID:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.tutorId}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, tutorId: e.target.value })}
//                   className={!validTutorId ? 'invalid' : ''}
//                 />
//                 {!validTutorId && <span className="error-message">Tutor ID should only contain numbers</span>}
//               </div>

//               <div className="form-group">
//                 <label>User Name:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.userName}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, userName: e.target.value })}
//                   className={!validUserName ? 'invalid' : ''}
//                 />
//                 {!validUserName && <span className="error-message">User name should only contain alphabets</span>}
//               </div>

//               <div className="form-group">
//                 <label>User ID:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.userId}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, userId: e.target.value })}
//                   className={!validUserId ? 'invalid' : ''}
//                 />
//                 {!validUserId && <span className="error-message">User ID should only contain numbers</span>}
//               </div>

//               <div className="form-group">
//                 <label>Message:</label>
//                 <input
//                 type="text"
//                   value={newDiscussion.message}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, message: e.target.value })}
//                   className={!validMessage ? 'invalid' : ''}
//                 />
//                 {!validMessage && <span className="error-message">Message cannot be empty</span>}
//               </div>

//               <button type="button" onClick={saveDiscussion}>
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="footerd">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default Discussion;






























// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import './Discussion.css';

// function Discussion({ currentUser }) {
//   const [userDetails, setUserDetails] = useState(null);
//   const [discussions, setDiscussions] = useState([]);
//   const [newDiscussion, setNewDiscussion] = useState({
//     tutorName: '',
//     tutorId: '',
//     userName: '',
//     userId: '',
//     message: '',
//     date: '',
//   });

//   // Validation states
//   const [validTutorName, setValidTutorName] = useState(true);
//   const [validUserName, setValidUserName] = useState(true);
//   const [validMessage, setValidMessage] = useState(true);
//   const [validTutorId, setValidTutorId] = useState(true);
//   const [validUserId, setValidUserId] = useState(true);

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

//   useEffect(() => {
//     fetchDiscussions();
//   }, [userDetails]); // Fetch discussions when userDetails changes

//   const validateFields = () => {
//     let valid = true;
//     // Validation logic
//     return valid;
//   };

//   const saveDiscussion = () => {
//     if (!validateFields()) {
//       return;
//     }

//     const currentDate = new Date();
//     const formattedDate = currentDate.toISOString(); // Format date to ISO string

//     // Discussion data to be saved
//     const discussionData = {
//       ...newDiscussion,
//       date: formattedDate // Include current date and time in the discussion data
//     };

//     // Save discussion data
//     axios.post('http://localhost:8080/api/discussion/save', discussionData)
//       .then(response => {
//         console.log('Discussion saved successfully:', response.data);
//         setNewDiscussion({ // Clear new discussion fields after saving
//           tutorName: '',
//           tutorId: '',
//           userName: '',
//           userId: '',
//           message: '',
//           date: '', // Clear date after saving
//         });
//         fetchDiscussions(); // Fetch discussions after saving
//       })
//       .catch(error => console.error('Error saving discussion:', error));
//   };

//   const fetchDiscussions = () => {
//     if (!userDetails) return; // Exit if userDetails is null
//     // Fetch discussions for the current user
//     axios.get(`http://localhost:8080/api/discussion/getByUserId/${userDetails.id}`)
//       .then(response => setDiscussions(response.data))
//       .catch(error => console.error('Error fetching discussions:', error));
//   };

//   // JSX code for rendering component UI...
//   return (
//     <>
   
//       <div className="header6">
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
//           <li><Link to='/FileList' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/UserTask' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/UserSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
//         </ul>
//       </nav>

//       <div className="main-content6">
//         <h1>Interaction with the Tutors</h1>
       
//         <div className="discussion-app ">
//           <div className="discussion-list course-item6">
//             <h2>Discussions</h2>
//             <ul>
           
//               {discussions.map(discussion => (
//                 <li key={discussion.id} className="message">
                
//                   <span className="user">{discussion.userName}</span>
//                   <span className="separator"> to </span>
//                   <span className="user">{discussion.tutorName}</span>
//                   <span className="message-text">: {discussion.message}</span>
//                   <span className="date">({discussion.date})</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

     
//           <div className="new-discussion course-item6 ">
//             <h2>New Discussion</h2>
//             <form>
//               <div className="form-group">
//                 <label>Tutor Name:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.tutorName}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, tutorName: e.target.value })}
//                   className={!validTutorName ? 'invalid' : ''}
//                 />
//                 {!validTutorName && <span className="error-message">Tutor name should only contain alphabets</span>}
//               </div>

//               <div className="form-group">
//                 <label>Tutor ID:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.tutorId}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, tutorId: e.target.value })}
//                   className={!validTutorId ? 'invalid' : ''}
//                 />
//                 {!validTutorId && <span className="error-message">Tutor ID should only contain numbers</span>}
//               </div>

//               <div className="form-group">
//                 <label>User Name:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.userName}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, userName: e.target.value })}
//                   className={!validUserName ? 'invalid' : ''}
//                 />
//                 {!validUserName && <span className="error-message">User name should only contain alphabets</span>}
//               </div>

//               <div className="form-group">
//                 <label>User ID:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.userId}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, userId: e.target.value })}
//                   className={!validUserId ? 'invalid' : ''}
//                 />
//                 {!validUserId && <span className="error-message">User ID should only contain numbers</span>}
//               </div>

//               <div className="form-group">
//                 <label>Message:</label>
//                 <input
//                 type="text"
//                   value={newDiscussion.message}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, message: e.target.value })}
//                   className={!validMessage ? 'invalid' : ''}
//                 />
//                 {!validMessage && <span className="error-message">Message cannot be empty</span>}
//               </div>

//               <button type="button" onClick={saveDiscussion}>
//                 Submit
//               </button>
//             </form> 
//           </div>
//         </div>
//       </div>


//       <div className="footerd">
//         <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default Discussion;


















// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import './Discussion.css';



//   function Discussion({ currentUser }) {
//     const [userDetails, setUserDetails] = useState(null);
//     const [discussions, setDiscussions] = useState([]);
//     const [newDiscussion, setNewDiscussion] = useState({
//       tutorName: '',
//       tutorId: '',
//       userName: currentUser?.firstName || '',
//       userId: currentUser?.id || '',
//       message: '',
//       date: '',
//     });


  
//   // Validation states
//   const [validTutorName, setValidTutorName] = useState(true);
//   const [validUserName, setValidUserName] = useState(true);
//   const [validMessage, setValidMessage] = useState(true);
//   const [validTutorId, setValidTutorId] = useState(true);
//   const [validUserId, setValidUserId] = useState(true);

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

//   useEffect(() => {
//     fetchDiscussions();
//   }, [userDetails]); // Fetch discussions when userDetails changes

//   const validateFields = () => {
//     let valid = true;

//     // Validate tutor name (only alphabets)
//     if (!/^[a-zA-Z]+$/.test(newDiscussion.tutorName)) {
//       setValidTutorName(false);
//       valid = false;
//     } else {
//       setValidTutorName(true);
//     }

//     // Validate tutor ID (only numbers)
//     if (!/^\d+$/.test(newDiscussion.tutorId)) {
//       setValidTutorId(false);
//       valid = false;
//     } else {
//       setValidTutorId(true);
//     }

//     // Validate user name, user ID, and message as before
//     // ...

//     return valid;
//   };

//   const saveDiscussion = () => {
//     if (!validateFields()) {
//       return;
//     }

//     const currentDate = new Date();
//     const formattedDate = currentDate.toISOString(); // Format date to ISO string

//     // Discussion data to be saved
//     const discussionData = {
//       ...newDiscussion,
//       date: formattedDate // Include current date and time in the discussion data
//     };

//     // Save discussion data
//     axios.post('http://localhost:8080/api/discussion/save', discussionData)
//       .then(response => {
//         console.log('Discussion saved successfully:', response.data);
//         setNewDiscussion({ // Clear new discussion fields after saving
//           tutorName: '',
//           tutorId: '',
//           userName: currentUser.firstName || '',
//           userId: currentUser.id || '',
//           message: '',
//           date: '', // Clear date after saving
//         });
//         fetchDiscussions(); // Fetch discussions after saving
//       })
//       .catch(error => console.error('Error saving discussion:', error));
//   };

//   const fetchDiscussions = () => {
//     if (!userDetails) return; // Exit if userDetails is null
//     // Fetch discussions for the current user
//     axios.get(`http://localhost:8080/api/discussion/getByUserId/${userDetails.id}`)
//       .then(response => setDiscussions(response.data))
//       .catch(error => console.error('Error fetching discussions:', error));
//   };

//   // JSX code for rendering component UI...
//   return (
//     <>

//       <div className="header6">
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
//           <li><Link to='/FileList' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/UserTask' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/UserSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
//         </ul>
//       </nav>

   
//       <div className="main-content6">
//         <h1>Interaction with the Tutors</h1>
       
//         <div className="discussion-app ">
//           <div className="discussion-list course-item6">
//             <h2>Discussions</h2>
//             <ul>
           
//               {discussions.map(discussion => (
//                 <li key={discussion.id} className="message">
              
//                   <span className="user">{discussion.userName}</span>
//                   <span className="separator"> to </span>
//                   <span className="user">{discussion.tutorName}</span>
//                   <span className="message-text">: {discussion.message}</span>
                 
//                 </li>
//               ))}
//             </ul>
//           </div>

         
//           <div className="new-discussion course-item6 ">
//             <h2>New Discussion</h2>
//             <form>
//               <div className="form-group">
//                 <label>Tutor Name:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.tutorName}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, tutorName: e.target.value })}
//                   className={!validTutorName ? 'invalid' : ''}
//                 />
//                 {!validTutorName && <span className="error-message">Tutor name should only contain alphabets</span>}
//               </div>

//               <div className="form-group">
//                 <label>Tutor ID:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.tutorId}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, tutorId: e.target.value})}
//                   className={!validTutorId ? 'invalid' : ''}
//                 />
//                 {!validTutorId && <span className="error-message">Tutor ID should only contain numbers</span>}
//               </div>

//               <div className="form-group">
//                 <label>User Name:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.userName}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, userName: e.target.value })}
//                   className={!validUserName ? 'invalid' : ''}
//                   disabled // User name should not be editable
//                 />
//                 {!validUserName && <span className="error-message">User name should only contain alphabets</span>}
//               </div>

//               <div className="form-group">
//                 <label>User ID:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.userId}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, userId: e.target.value })}
//                   className={!validUserId ? 'invalid' : ''}
//                 />
//                 {!validUserId && <span className="error-message">User ID should only contain numbers</span>}
//               </div>

//               <div className="form-group">
//                 <label>Message:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.message}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, message: e.target.value })}
//                   className={!validMessage ? 'invalid' : ''}
//                 />
//                 {!validMessage && <span className="error-message">Message cannot be empty</span>}
//               </div>

//               <button type="button" onClick={saveDiscussion}>
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>


//       <div className="footerd">
//         <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default Discussion;


























// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import './Discussion.css';



//   function Discussion({ currentUser }) {
//     const [userDetails, setUserDetails] = useState(null);
//     const [discussions, setDiscussions] = useState([]);
//     const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
//     const [newDiscussion, setNewDiscussion] = useState({
      

//       tutorName: '',
//       tutorId: '',
//       userName: currentUser?.firstName || '',
//       userId: currentUser?.id || '',
//       message: '',
//       date: '',
//     });


  
//   // Validation states
//   const [validTutorName, setValidTutorName] = useState(true);
//   const [validUserName, setValidUserName] = useState(true);
//   const [validMessage, setValidMessage] = useState(true);
//   const [validTutorId, setValidTutorId] = useState(true);
//   const [validUserId, setValidUserId] = useState(true);

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




//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date().toLocaleString());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);
//   useEffect(() => {
//     fetchDiscussions();
//   }, [userDetails]); // Fetch discussions when userDetails changes

//   const validateFields = () => {
//     let valid = true;

//     // Validate tutor name (only alphabets)
//     if (!/^[a-zA-Z]+$/.test(newDiscussion.tutorName)) {
//       setValidTutorName(false);
//       valid = false;
//     } else {
//       setValidTutorName(true);
//     }

//     // Validate tutor ID (only numbers)
//     if (!/^\d+$/.test(newDiscussion.tutorId)) {
//       setValidTutorId(false);
//       valid = false;
//     } else {
//       setValidTutorId(true);
//     }

//     // Validate user name, user ID, and message as before
//     // ...

//     return valid;
//   };

//   const saveDiscussion = () => {
//     if (!validateFields()) {
//       return;
//     }

//     const currentDate = new Date();
//     const formattedDate = currentDate.toISOString(); // Format date to ISO string

//     // Discussion data to be saved
//     const discussionData = {
//       ...newDiscussion,
//       date: formattedDate // Include current date and time in the discussion data
//     };

//     // Save discussion data
//     axios.post('http://localhost:8080/api/discussion/save', discussionData)
//       .then(response => {
//         console.log('Discussion saved successfully:', response.data);
//         setNewDiscussion({ // Clear new discussion fields after saving
//           tutorName: '',
//           tutorId: '',
//           userName: currentUser.firstName || '',
//           userId: currentUser.id || '',
//           message: '',
//           date: '', // Clear date after saving
//         });
//         fetchDiscussions(); // Fetch discussions after saving
//       })
//       .catch(error => console.error('Error saving discussion:', error));
//   };

//   const fetchDiscussions = () => {
//     if (!userDetails) return; // Exit if userDetails is null
//     // Fetch discussions for the current user
//     axios.get(`http://localhost:8080/api/discussion/getByUserId/${userDetails.id}`)
//       .then(response => setDiscussions(response.data))
//       .catch(error => console.error('Error fetching discussions:', error));
//   };

//   // JSX code for rendering component UI...
//   return (
//     <>

//       <div className="header6">
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
//           <li><Link to='/FileList' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/UserTask' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/UserSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
//         </ul>
//       </nav>

//       <div className="currentdate">
//             <h3> {currentTime}</h3>
//           </div>

//       <div className="main-content6">
//         <h1>Interaction with the Tutors</h1>

//         <div className="discussion-app ">
//           <div className="discussion-list course-item6">
//             <h2>Discussions</h2>
//             <ul>
      
//               {discussions.map(discussion => (
//                 <li key={discussion.id} className="message">
  
//                   <span className="user">{discussion.userName}</span>
//                   <span className="separator"> to </span>
//                   <span className="user">{discussion.tutorName}</span>
//                   <span className="message-text">: {discussion.message}</span>
//                   {/* {/ <span className="date">({discussion.date})</span> /} */}
//                 </li>
//               ))}
//             </ul>
//           </div>

      
//           <div className="new-discussion course-item6 ">
//             <h2>New Discussion</h2>
//             <form>
//               <div className="form-group">
//                 <label>Tutor Name:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.tutorName}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, tutorName: e.target.value })}
//                   className={!validTutorName ? 'invalid' : ''}
//                 />
//                 {!validTutorName && <span className="error-message">Tutor name should only contain alphabets</span>}
//               </div>

//               <div className="form-group">
//                 <label>Tutor ID:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.tutorId}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, tutorId: e.target.value})}
//                   className={!validTutorId ? 'invalid' : ''}
//                 />
//                 {!validTutorId && <span className="error-message">Tutor ID should only contain numbers</span>}
//               </div>

//               <div className="form-group">
//                 <label>User Name:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.userName}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, userName: e.target.value })}
//                   className={!validUserName ? 'invalid' : ''}
//                   disabled // User name should not be editable
//                 />
//                 {!validUserName && <span className="error-message">User name should only contain alphabets</span>}
//               </div>

//               <div className="form-group">
//                 <label>User ID:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.userId}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, userId: e.target.value })}
//                   className={!validUserId ? 'invalid' : ''}
//                 />
//                 {!validUserId && <span className="error-message">User ID should only contain numbers</span>}
//               </div>

//               <div className="form-group">
//                 <label>Message:</label>
//                 <input
//                   type="text"
//                   value={newDiscussion.message}
//                   onChange={e => setNewDiscussion({ ...newDiscussion, message: e.target.value })}
//                   className={!validMessage ? 'invalid' : ''}
//                 />
//                 {!validMessage && <span className="error-message">Message cannot be empty</span>}
//               </div>

//               <button type="button" onClick={saveDiscussion}>
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

     
//       <div className="footerd">
//         <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default Discussion;























import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Discussion.css';



  function Discussion({ currentUser }) {
    const [userDetails, setUserDetails] = useState(null);
    const [discussions, setDiscussions] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
    const [newDiscussion, setNewDiscussion] = useState({
      

      tutorName: '',
      tutorId: '',
      userName: currentUser?.firstName || '',
      userId: currentUser?.id || '',
      message: '',
      date: '',
    });


  
  // Validation states
  const [validTutorName, setValidTutorName] = useState(true);
  const [validUserName, setValidUserName] = useState(true);
  const [validMessage, setValidMessage] = useState(true);
  const [validTutorId, setValidTutorId] = useState(true);
  const [validUserId, setValidUserId] = useState(true);

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




  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    fetchDiscussions();
  }, [userDetails]); // Fetch discussions when userDetails changes

  const validateFields = () => {
    let valid = true;

    // Validate tutor name (only alphabets)
    if (!/^[a-zA-Z]+$/.test(newDiscussion.tutorName)) {
      setValidTutorName(false);
      valid = false;
    } else {
      setValidTutorName(true);
    }

    // Validate tutor ID (only numbers)
    if (!/^\d+$/.test(newDiscussion.tutorId)) {
      setValidTutorId(false);
      valid = false;
    } else {
      setValidTutorId(true);
    }

    // Validate user name, user ID, and message as before
    // ...

    return valid;
  };




  // const saveDiscussion = () => {
  //   if (!validateFields()) {
  //     return;
  //   }

  //   const currentDate = new Date();
  //   const formattedDate = currentDate.toISOString(); // Format date to ISO string

  //   // Discussion data to be saved
  //   const discussionData = {
  //     ...newDiscussion,
  //     date: formattedDate // Include current date and time in the discussion data
  //   };

  //   // Save discussion data
  //   axios.post('http://localhost:8080/api/discussion/save', discussionData)
  //     .then(response => {
  //       console.log('Discussion saved successfully:', response.data);
  //       setNewDiscussion({ // Clear new discussion fields after saving
  //         tutorName: '',
  //         tutorId: '',
  //         userName: currentUser.firstName || '',
  //         userId: currentUser.id || '',
  //         message: '',
  //         date: '', // Clear date after saving
  //       });
  //       fetchDiscussions(); // Fetch discussions after saving
  //     })
  //     .catch(error => console.error('Error saving discussion:', error));
  // };




  const saveDiscussion = () => {
    if (!validateFields() || !newDiscussion.message.trim()) { // Add validation for message field
      if (!newDiscussion.message.trim()) {
        setValidMessage(false);
      }
      return;
    }
  
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString(); // Format date to ISO string
  
    // Discussion data to be saved
    const discussionData = {
      ...newDiscussion,
      date: formattedDate // Include current date and time in the discussion data
    };
  
    // Save discussion data
    axios.post('http://192.168.138.130:8080/api/discussion/save', discussionData)
      .then(response => {
        console.log('Discussion saved successfully:', response.data);
        setNewDiscussion({ // Clear new discussion fields after saving
          tutorName: '',
          tutorId: '',
          userName: currentUser.firstName || '',
          userId: currentUser.id || '',
          message: '',
          date: '', // Clear date after saving
        });
        setValidMessage(true); // Reset message validation state
        fetchDiscussions(); // Fetch discussions after saving
      })
      .catch(error => console.error('Error saving discussion:', error));
  };
  










  const fetchDiscussions = () => {
    if (!userDetails) return; // Exit if userDetails is null
    // Fetch discussions for the current user
    axios.get(`http://192.168.138.130:8080/api/discussion/getByUserId/${userDetails.id}`)
      .then(response => setDiscussions(response.data))
      .catch(error => console.error('Error fetching discussions:', error));
  };

  // JSX code for rendering component UI...
  return (
    <>
     
      <div className="header6">
        <label><h1>My Online Tutor</h1></label>
       
        {userDetails ? (
          <div className="user-details">
            <div className="profile-details12">
              <p><strong>User ID:</strong> {userDetails.id}</p>
              <p><strong>User Name:</strong> {userDetails.firstName}</p>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>

      <nav className="sidebar8" style={{ backgroundColor: 'white' }}>
        <ul>
        
          <h2>UserDashboard </h2>
          <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
          <li><Link to='/FileList' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
          <li><Link to='/UserTask' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
          <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
          <li><Link to='/UserSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>


      <div className="currentdate">
            <h3> {currentTime}</h3>
          </div>

      <div className="main-content6">
        <h1>Interaction with the Tutors</h1>
      
        <div className="discussion-app ">
          <div className="discussion-list course-item6">
            <h2>Discussions</h2>
            <ul>
             
              {discussions.map(discussion => (
                <li key={discussion.id} className="message">
             
                  <span className="user">{discussion.userName}</span>
                  <span className="separator"> to </span>
                  <span className="user">{discussion.tutorName}</span>
                  <span className="message-text">: {discussion.message}</span>
                  {/* {/ <span className="date">({discussion.date})</span> /} */}
                </li>
              ))}
            </ul>
          </div>

          <div className="new-discussion course-item6 ">
            <h2>New Discussion</h2>
            <form>
              <div className="form-group">
                <label>Tutor Name:</label>
                <input
                  type="text"
                  value={newDiscussion.tutorName}
                  onChange={e => setNewDiscussion({ ...newDiscussion, tutorName: e.target.value })}
                  className={!validTutorName ? 'invalid' : ''}
                />
                {!validTutorName && <span className="error-message">Tutor name should only contain alphabets</span>}
              </div>

              <div className="form-group">
                <label>Tutor ID:</label>
                <input
                  type="text"
                  value={newDiscussion.tutorId}
                  onChange={e => setNewDiscussion({ ...newDiscussion, tutorId: e.target.value})}
                  className={!validTutorId ? 'invalid' : ''}
                />
                {!validTutorId && <span className="error-message">Tutor ID should only contain numbers</span>}
              </div>

              <div className="form-group">
                <label>User Name:</label>
                <input
                  type="text"
                  value={newDiscussion.userName}
                  onChange={e => setNewDiscussion({ ...newDiscussion, userName: e.target.value })}
                  className={!validUserName ? 'invalid' : ''}
                  disabled // User name should not be editable
                />
                {!validUserName && <span className="error-message">User name should only contain alphabets</span>}
              </div>

              <div className="form-group">
                <label>User ID:</label>
                <input
                  type="text"
                  value={newDiscussion.userId}
                  onChange={e => setNewDiscussion({ ...newDiscussion, userId: e.target.value })}
                  className={!validUserId ? 'invalid' : ''}
                />
                {!validUserId && <span className="error-message">User ID should only contain numbers</span>}
              </div>

              <div className="form-group">
                <label>Message:</label>
                <input
                  type="text"
                  value={newDiscussion.message}
                  onChange={e => setNewDiscussion({ ...newDiscussion, message: e.target.value })}
                  className={!validMessage ? 'invalid' : ''}
                />
                {!validMessage && <span className="error-message">Message cannot be empty</span>}
              </div>

              <button type="button" onClick={saveDiscussion}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>


      <div className="footerd">
        <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default Discussion;

