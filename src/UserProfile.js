











// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import './UserProfile.css';

// const UserProfile = () => {
//   const [userDetails, setUserDetails] = useState(null);
//   const [editing, setEditing] = useState(false);
//   const [editedUser, setEditedUser] = useState({});
//   const userId = 1; // Replace with the actual user ID you want to fetch

//   useEffect(() => {
//     // Fetch user details when the component mounts
//     axios.get(`http://localhost:8080/api/users/${userId}`)
//       .then(response => {
//         setUserDetails(response.data);
//         setEditedUser({ // Initialize edited user details with specific fields
//           firstName: response.data.firstName,
//           lastName: response.data.lastName,
//           gender: response.data.gender,
//           email: response.data.email,
//           password: response.data.password,
//           phoneNumber: response.data.phoneNumber,
//           address: response.data.address,
//           courses: response.data.courses || []
//         });
//       })
//       .catch(error => {
//         console.error('Error fetching user details:', error);
//       });
//   }, [userId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // Input validation
//     if (name === 'firstName' || name === 'lastName') {
//       // Allow only alphabets and spaces
//       if (/^[a-zA-Z ]*$/.test(value)) {
//         setEditedUser({ ...editedUser, [name]: value });
//       }
//     } else if (name === 'phoneNumber') {
//       // Allow only 10 digit numbers
//       if (/^\d{0,10}$/.test(value)) {
//         setEditedUser({ ...editedUser, [name]: value });
//       }
//     } else if (name === 'email') {
//       // Allow only Gmail addresses
//       if (/^[a-zA-Z0-9._%+-]+@gmail.com$/.test(value)) {
//         setEditedUser({ ...editedUser, [name]: value });
//       }
//     } else {
//       setEditedUser({ ...editedUser, [name]: value });
//     }
//   };

//   const handleEdit = () => {
//     setEditing(true);
//   };

//   const handleSave = () => {
//     axios.put(`http://localhost:8080/api/users/${userId}`, editedUser)
//       .then(response => {
//         setUserDetails(response.data); // Update user details with the response from the server
//         setEditing(false); // Exit editing mode
//       })
//       .catch(error => {
//         console.error('Error updating user details:', error);
//       });
//   };

//   return (
//     <div>
//       <div className="header8">
//         <label><h1>My Online Tutor</h1></label>

//         {userDetails ? (
//   <div className="user-details">
//     <div className="profile-details12">
//       <p><strong>User ID:</strong> {userDetails.id}</p>
//       <p><strong>User Name:</strong> {userDetails.firstName}</p>
//     </div>    
//   </div>
// ) : (
//   <p></p>
// )}

//       </div>
//       <nav className="sidebar8" style={{ backgroundColor: 'white' }}>
//         <ul>
//           <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
//           <li><Link to='/UserLiveclasses' ><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
//           <li><Link to='/FileList' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/UserTask' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/UserSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
//         </ul>
//       </nav>

//       <div className="main-content8">
//         <h2>User Profile</h2>
//         <div className="user-profile-container">
//           <div className="user-details2">
//             {editing ? (
//               <div className="profile-details">
//                 <label>User ID:</label>
//                 <p>{editedUser.id}</p>
//                 <label>First Name:</label>
//                 <input type="text" name="firstName" value={editedUser.firstName} onChange={handleInputChange} />
//                 <label>Last Name:</label>
//                 <input type="text" name="lastName" value={editedUser.lastName} onChange={handleInputChange} />
//                 <label>Gender:</label>
//                 <input type="text" name="gender" value={editedUser.gender} onChange={handleInputChange} disabled />
//                 <label>Email:</label>
//                 <input type="email" name="email" value={editedUser.email} onChange={handleInputChange} />
//                 <label>Password:</label>
//                 <input type="password" name="password" value={editedUser.password} onChange={handleInputChange} disabled />
//                 <label>Phone Number:</label>
//                 <input type="text" name="phoneNumber" value={editedUser.phoneNumber} onChange={handleInputChange} />
//                 <label>Courses:</label>
//                 <input type="text" name="courses" value={editedUser.courses ? editedUser.courses.join(', ') : ''} onChange={handleInputChange} disabled />
//                 <label>Address:</label>
//                 <input type="text" name="address" value={editedUser.address} onChange={handleInputChange} />
//                 <button onClick={handleSave}>Save</button>
//               </div>
//             ) : (
//               userDetails ? (
//                 <div className="profile-details">
//                   <label>User ID:</label>
//                   <p>{userDetails.id}</p>
//                   <label>First Name:</label>
//                   <p>{userDetails.firstName}</p>
//                   <label>Last Name:</label>
//                   <p>{userDetails.lastName}</p>
//                   <label>Gender:</label>
//                   <p>{userDetails.gender}</p>
//                   <label>Email:</label>
//                   <p>{userDetails.email}</p>
//                   <label>Phone Number:</label>
//                   <p>{userDetails.phoneNumber}</p>
//                   <label>Courses:</label>
//                   <p>{userDetails.courses ? userDetails.courses.join(', ') : ''}</p>
//                   <label>Address:</label>
//                   <p>{userDetails.address}</p>
//                   <button className="edit-button" onClick={handleEdit}>Edit</button>
//                 </div>
//               ) : (
//                 <p>Loading user details...</p>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;





























import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = ({ currentUser }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  
  useEffect(() => {
    if (currentUser) {
      axios.get(`http://3.7.14.21:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
        .then(response => {
          setUserDetails(response.data[0]); // Assuming the API returns a single user
          setEditedUser({ // Initialize edited user details with specific fields
            firstName: response.data[0].firstName,
            lastName: response.data[0].lastName,
            gender: response.data[0].gender,
            email: response.data[0].email,
            password: response.data[0].password,
            phoneNumber: response.data[0].phoneNumber,
            address: response.data[0].address,
            courses: response.data[0].courses || []
          });
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Input validation
    if (name === 'firstName' || name === 'lastName') {
      // Allow only alphabets and spaces
      if (/^[a-zA-Z ]*$/.test(value)) {
        setEditedUser({ ...editedUser, [name]: value });
      }
    } else if (name === 'phoneNumber') {
      // Allow only 10 digit numbers
      if (/^\d{0,10}$/.test(value)) {
        setEditedUser({ ...editedUser, [name]: value });
      }
    } else if (name === 'email') {
      // Allow only Gmail addresses
      if (/^[a-zA-Z0-9._%+-]+@gmail.com$/.test(value)) {
        setEditedUser({ ...editedUser, [name]: value });
      }
    } else {
      setEditedUser({ ...editedUser, [name]: value });
    }
  };

  const handleEdit = () => {
    setEditing(true);
  };


  const handleSave = () => {
    axios.put(`http://3.7.14.21:8080/api/users/${userDetails.id}`, editedUser)
      .then(response => {
        setUserDetails(response.data); // Update user details with the response from the server
        setEditing(false); // Exit editing mode
        setEditedUser(response.data); 
        window.location.reload()// Update editedUser state with the response data
      })
      .catch(error => {
        console.error('Error updating user details:', error);
      });
  };
  

  return (
    <div>
      <div className="header8">
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
          <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to='/UserLiveclasses' ><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
          <li><Link to='/FileList' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
          <li><Link to='/UserTask' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
          <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
          <li><Link to='/UserSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>

      <div className="main-content8" style={{width: "80%"}}>
        <h2 style={{fontSize: "2.3rem"}}>User Profile</h2>
        <div className="user-profile-container" style={{width: "40%"}}>
          <div className="user-details2">
            {editing ? (
              <div className="profile-details">
                <label>User ID:</label>
                <p>{editedUser.id}</p>
                <label>First Name:</label>
                <input type="text" name="firstName" value={editedUser.firstName} onChange={handleInputChange} />
                <label>Last Name:</label>
                <input type="text" name="lastName" value={editedUser.lastName} onChange={handleInputChange} />
                <label>Gender:</label>
                <input type="text" name="gender" value={editedUser.gender} onChange={handleInputChange} disabled />
                <label>Email:</label>
                <input type="email" name="email" value={editedUser.email} onChange={handleInputChange} />
                <label>Password:</label>
                <input type="password" name="password" value={editedUser.password} onChange={handleInputChange} disabled />
                <label>Phone Number:</label>
                <input type="text" name="phoneNumber" value={editedUser.phoneNumber} onChange={handleInputChange} />
                <label>Courses:</label>
                <input type="text" name="courses" value={editedUser.courses ? editedUser.courses.join(', ') : ''} onChange={handleInputChange} disabled />
                <label>Address:</label>
                <input type="text" name="address" value={editedUser.address} onChange={handleInputChange} />
                <button onClick={handleSave}>Save</button>
              </div>
            ) : (
              userDetails ? (
                <div className="profile-details">
                  <label>User ID:</label>
                  <p>{userDetails.id}</p>
                  <label>First Name:</label>
                  <p>{userDetails.firstName}</p>
                  <label>Last Name:</label>
                  <p>{userDetails.lastName}</p>
                  <label>Gender:</label>
                  <p>{userDetails.gender}</p>
                  <label>Email:</label>
                  <p>{userDetails.email}</p>
                  <label>Phone Number:</label>
                  <p>{userDetails.phoneNumber}</p>
                  <label>Courses:</label>
                  <p>{userDetails.courses ? userDetails.courses.join(', ') : ''}</p>
                  <label>Address:</label>
                  <p>{userDetails.address}</p>
                  <button className="edit-button" onClick={handleEdit} >Edit</button>
                </div>
              ) : (
                <p>Loading user details...</p>
              )
            )}
          </div>
        </div> 
      </div>
    </div>
  );
};

export default UserProfile;
