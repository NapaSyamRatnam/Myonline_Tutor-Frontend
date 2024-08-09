// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
// import './TutorDashboard.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function TutorProfile() {
//   const [isEditing, setIsEditing] = useState(false); // State to control edit mode
//   const [editedData, setEditedData] = useState(null); // State to hold edited data
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [tutorData, setTutorData] = useState(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId); // Cleanup the interval on unmount
//   }, []);

//   useEffect(() => {
//     const tutorId = localStorage.getItem('tutorId');
//     if (tutorId) {
//       // Fetch tutor details based on the stored tutor ID
//       axios.get(`http://localhost:8080/api-v1/${tutorId}`)
//         .then(response => {
//           setTutorData(response.data);
//           // Initialize edited data with fetched data
//           setEditedData(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching tutor details:', error);
//         });
//     }
//   }, []); // Empty dependency array to run this effect only once when the component mounts

//   // Function to handle input change while editing
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedData({ ...editedData, [name]: value });
//   };

//   // Function to handle edit button click
//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   // Function to handle save button click
//   const handleSaveClick = () => {
//     // Update the backend with edited data
//     axios.put(`http://localhost:8080/api-v1/${tutorData.id}`, editedData)
//       .then(response => {
//         // Update the local state with the updated data
//         setTutorData(editedData);
//         setIsEditing(false);
//         // Show success toast
//         toast.success("Profile updated successfully");
//       })
//       .catch(error => {
//         console.error('Error updating tutor details:', error);
//         // Show error toast
//         toast.error("Failed to update profile. Please try again later.");
//       });
//   };


//   return (
//     <div>
//       <ToastContainer />
//       <div className="header1">
//         <label><h1 style={{color:'white'}}>My Online Tutor</h1></label>
//         <div className="Tutor1">
//           {tutorData && (
//             <>
//                <div style={{ fontSize: "20px" }}>Tutor ID: {tutorData.id}</div>
//               <div style={{ fontSize: "20px" }}>Tutor Name: {tutorData.firstName} {tutorData.lastName}</div><br></br>
//               <p style={{ color: 'white', fontSize: '25px' }}>{currentTime.toLocaleString()}</p>
//             </>
//           )}
//         </div>
//       </div>
//       <nav className="sidebarT">
//         <ul>
//           <li><Link to='/TutorDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
//           <li><Link to='/Liveclass'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
//           <li><Link to='/UserList' ><FontAwesomeIcon icon={faUsers} /> UserList</Link></li>
//           <li><Link to='/Task' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/StudyMaterials' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/MyDiscussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/TutorSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
//         </ul>
//       </nav>
//       <div className="main-content">
//         <h2 style={{fontSize: "2.3rem"}}>Profile</h2>
//         {tutorData ? (
//           <div className="tutor-details">
//             <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?w=740&t=st=1703916472~exp=1703917072~hmac=1176b5bbdf99831939c02ac78bec49aeaa8893cc388dcc6322197708ba6c669c" alt="Profile" className='profile-image5' />
//             {isEditing ? (
//               <div className="profile-details">
//                 <input type="text" name="firstName" value={editedData.firstName} onChange={handleInputChange} />
//                 <input type="text" name="lastName" value={editedData.lastName} onChange={handleInputChange} />
//                 <input type="email" name="email" value={editedData.email} onChange={handleInputChange} />
//                 <input type="qualification" name="qualification" value={editedData.qualification} onChange={handleInputChange} />
//                 <input type="higherQualification" name="higherQualification" value={editedData.higherQualification} onChange={handleInputChange} />
//                 <input type="courses" name="courses" value={editedData.courses} onChange={handleInputChange} />
//                 <input type="address" name="address" value={editedData.address} onChange={handleInputChange} />
//                 <input type="gender" name="gender" value={editedData.gender} onChange={handleInputChange} />
//                 <button onClick={handleSaveClick}>Save</button>
//               </div>
//             ) : (
//               <div className="profile-details">
//                 <p>TutorID: {tutorData.id}</p>
//                 <p>First Name: {tutorData.firstName}</p>
//                 <p>Last Name: {tutorData.lastName}</p>
//                 <p>Email: {tutorData.email}</p>
//                 <p>Qualification: {tutorData.qualification}</p>
//                 <p>HigherQualification: {tutorData.higherQualification}</p>
//                 <p>courses: {tutorData.courses}</p>
//                 <p>Address: {tutorData.address}</p>
//                 <p>Gender: {tutorData.gender}</p> <br/>
//                 <button onClick={handleEditClick} style={{ marginRight: "30px" }}>Edit</button>
//                 {/* <Link to='/TutorSetting'><button className="back-button">Back</button></Link> */}
//               </div>
//             )}
//           </div>
//         ) : (
//           <p>Loading Tutor details...</p>
//         )}
//       </div>
//     </div>
    
//   );
// }

// export default TutorProfile;

// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
// import './TutorDashboard.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function TutorProfile() {
//   const [isEditing, setIsEditing] = useState(false); // State to control edit mode
//   const [editedData, setEditedData] = useState(null); // State to hold edited data
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [tutorData, setTutorData] = useState(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId); // Cleanup the interval on unmount
//   }, []);

//   useEffect(() => {
//     const tutorId = localStorage.getItem('tutorId');
//     if (tutorId) {
//       // Fetch tutor details based on the stored tutor ID
//       axios.get(`http://localhost:8080/api-v1/${tutorId}`)
//         .then(response => {
//           setTutorData(response.data);
//           // Initialize edited data with fetched data
//           setEditedData(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching tutor details:', error);
//         });
//     }
//   }, []); // Empty dependency array to run this effect only once when the component mounts

//   // Function to handle input change while editing
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedData({ ...editedData, [name]: value });
//   };

//   // Function to handle edit button click
//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   // Function to handle save button click
//   const handleSaveClick = () => {
//     // Update the backend with edited data
//     axios.put(`http://localhost:8080/api-v1/${tutorData.id}`, editedData)
//       .then(response => {
//         // Update the local state with the updated data
//         setTutorData(editedData);
//         setIsEditing(false);
//         // Show success toast
//         toast.success("Profile updated successfully");
//       })
//       .catch(error => {
//         console.error('Error updating tutor details:', error);
//         // Show error toast
//         toast.error("Failed to update profile. Please try again later.");
//       });
//   };


//   return (
//     <div>
//       <ToastContainer />
//       <div className="header1">
//         <label><h1 style={{color:'white'}}>My Online Tutor</h1></label>
//         <div className="Tutor1">
//           {tutorData && (
//             <>
//                <div style={{ fontSize: "20px" }}>Tutor ID: {tutorData.id}</div>
//               <div style={{ fontSize: "20px" }}>Tutor Name: {tutorData.firstName} {tutorData.lastName}</div><br></br>
//               <p style={{ color: 'white', fontSize: '25px' }}>{currentTime.toLocaleString()}</p>
//             </>
//           )}
//         </div>
//       </div>
//       <nav className="sidebarT">
//         <ul>
//           <li><Link to='/TutorDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
//           <li><Link to='/Liveclass'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
//           <li><Link to='/UserList' ><FontAwesomeIcon icon={faUsers} /> UserList</Link></li>
//           <li><Link to='/Task' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/StudyMaterials' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/MyDiscussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/TutorSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
//         </ul>
//       </nav>
//       <div className="main-content">
//         <h2 style={{fontSize: "2.3rem"}}>Profile</h2>
//         {tutorData ? (
//           <div className="tutor-details">
//             <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?w=740&t=st=1703916472~exp=1703917072~hmac=1176b5bbdf99831939c02ac78bec49aeaa8893cc388dcc6322197708ba6c669c" alt="Profile" className='profile-image5' />
//             {isEditing ? (
//               <div className="profile-details">
//                 <input type="text" name="firstName" value={editedData.firstName} onChange={handleInputChange} />
//                 <input type="text" name="lastName" value={editedData.lastName} onChange={handleInputChange} />
//                 <input type="email" name="email" value={editedData.email} onChange={handleInputChange} />
//                 <input type="text" name="qualification" value={editedData.qualification} onChange={handleInputChange} />
//                 <input type="text" name="higherQualification" value={editedData.higherQualification} onChange={handleInputChange} />
//                 <input type="text" name="courses" value={editedData.courses} onChange={handleInputChange} />
//                 <input type="text" name="address" value={editedData.address} onChange={handleInputChange} />
//                 <input type="text" name="gender" value={editedData.gender} onChange={handleInputChange} />
//                 <button onClick={handleSaveClick}>Save</button>
//               </div>
//             ) : (
//               <div className="profile-details">
//                <label>Tutor ID:</label>
//                   <p>{tutorData.id}</p>
//                   <label>First Name:</label>
//                   <p>{tutorData.firstName}</p>
//                   <label>Last Name:</label>
//                   <p>{tutorData.lastName}</p>
//                   <label>Gender:</label>
//                   <p>{tutorData.gender}</p>
//                   <label>Email:</label>
//                   <p>{tutorData.email}</p>
//                   {/* <label>Phone Number:</label>
//                   <p>{tutorData.phoneNumber}</p> */}
//                   <label>Courses:</label>
//                   <p>{tutorData.courses ? tutorData.courses.join(', ') : ''}</p>
//                   <label>Address:</label>
//                   <p>{tutorData.address}</p>
//                 <button onClick={handleEditClick} style={{ marginRight: "30px" }}>Edit</button>
//                 {/* <Link to='/TutorSetting'><button className="back-button">Back</button></Link> */}
//               </div>
//             )}
//           </div>
//         ) : (
//           <p>Loading Tutor details...</p>
//         )}
//       </div>
//     </div>
    
//   );
// }

// export default TutorProfile;
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import './TutorDashboard.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TutorProfile() {
  const [isEditing, setIsEditing] = useState(false); // State to control edit mode
  const [editedData, setEditedData] = useState(null); // State to hold edited data
  const [currentTime, setCurrentTime] = useState(new Date());
  const [tutorData, setTutorData] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);

  useEffect(() => {
    const tutorId = localStorage.getItem('tutorId');
    if (tutorId) {
      // Fetch tutor details based on the stored tutor ID
      axios.get(`http://3.7.14.21:8080/api-v1/${tutorId}`)
        .then(response => {
          setTutorData(response.data);
          // Initialize edited data with fetched data
          setEditedData(response.data);
        })
        .catch(error => {
          console.error('Error fetching tutor details:', error);
        });
    }
  }, []); // Empty dependency array to run this effect only once when the component mounts

  // Function to handle input change while editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  // Function to handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Function to handle save button click
  const handleSaveClick = () => {
    // Update the backend with edited data
    axios.put(`http://3.7.14.21:8080/api-v1/${tutorData.id}`, editedData)
      .then(response => {
        // Update the local state with the updated data
        setTutorData(editedData);
        setIsEditing(false);
        // Show success toast
        toast.success("Profile updated successfully");
      })
      .catch(error => {
        console.error('Error updating tutor details:', error);
        // Show error toast
        toast.error("Failed to update profile. Please try again later.");
      });
  };


  return (
    <div>
      <ToastContainer />
      <div className="header1">
        <label><h1 style={{color:'white'}}>My Online Tutor</h1></label>
        <div className="Tutor1">
          {tutorData && (
            <>
               <div style={{ fontSize: "20px" }}>Tutor ID: {tutorData.id}</div>
              <div style={{ fontSize: "20px" }}>Tutor Name: {tutorData.firstName} {tutorData.lastName}</div><br></br>
              <p style={{ color: 'white', fontSize: '25px' }}>{currentTime.toLocaleString()}</p>
            </>
          )}
        </div>
      </div>
      <nav className="sidebarT">
        <ul>
          <li><Link to='/TutorDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to='/Liveclass'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
          <li><Link to='/UserList' ><FontAwesomeIcon icon={faUsers} /> UserList</Link></li>
          <li><Link to='/Task' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
          <li><Link to='/StudyMaterials' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
          <li><Link to='/MyDiscussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
          <li><Link to='/TutorSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <h2 style={{fontSize: "2.3rem"}}>Profile</h2>
        {tutorData ? (
          <div className="tutor-details">
            <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?w=740&t=st=1703916472~exp=1703917072~hmac=1176b5bbdf99831939c02ac78bec49aeaa8893cc388dcc6322197708ba6c669c" alt="Profile" className='profile-image5' />
            {isEditing ? (
              <div className="profile-details">
                <label>First Name:</label>
                <input type="text" name="firstName" value={editedData.firstName} onChange={handleInputChange} />
                <label>Last Name:</label>
                <input type="text" name="lastName" value={editedData.lastName} onChange={handleInputChange} />
                <label>Email:</label>
                <input type="email" name="email" value={editedData.email} onChange={handleInputChange} />
                <label>Qualification:</label>
                <input type="text" name="qualification" value={editedData.qualification} onChange={handleInputChange} />
                <label>Higher Qualification:</label>
                <input type="text" name="higherQualification" value={editedData.higherQualification} onChange={handleInputChange} />
                <label>Courses:</label>
                <input type="text" name="courses" value={editedData.courses} onChange={handleInputChange} />
                <label>Address:</label>
                <input type="text" name="address" value={editedData.address} onChange={handleInputChange} />
                <label>Gender:</label>
                <input type="text" name="gender" value={editedData.gender} onChange={handleInputChange} />
                <button onClick={handleSaveClick}>Save</button>
              </div>
            ) : (
              <div className="profile-details">
                <label>Tutor ID:</label>
                <p>{tutorData.id}</p>
                <label>First Name:</label>
                <p>{tutorData.firstName}</p>
                <label>Last Name:</label>
                <p>{tutorData.lastName}</p>
                <label>Gender:</label>
                <p>{tutorData.gender}</p>
                <label>Email:</label>
                <p>{tutorData.email}</p>
                <label>Qualification:</label>
                <p>{tutorData.qualification}</p>
                <label>Higher Qualification:</label>
                <p>{tutorData.higherQualification}</p>
                <label>Courses:</label>
                <p>{tutorData.courses ? tutorData.courses.join(', ') : ''}</p>
                <label>Address:</label>
                <p>{tutorData.address}</p>
                <button onClick={handleEditClick} style={{ marginRight: "30px" }}>Edit</button>
              </div>
            )}
          </div>
        ) : (
          <p>Loading Tutor details...</p>
        )}
      </div>
    </div>
    
  );
}

export default TutorProfile;

