
// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Dropdown from './Dropdown';
// import './UserRegistration.css';

// function SaveCourseForm({ currentUser }) {
//   const [course, setCourse] = useState('');
//   const [message, setMessage] = useState('');
//   const [selectedMainOption, setSelectedMainOption] = useState('');
//   const [selectedSubOption, setSelectedSubOption] = useState('');
//   const [formErrors, setFormErrors] = useState({});
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

//   const save = async (event) => {
//     event.preventDefault();



//     const validateForm = () => {
//       // Add validation logic here
//       return true; // Placeholder, replace with actual validation logic
//   };

//     if (validateForm()) {
//       try {
//         const selectedCourses = [];
//         if (selectedMainOption && selectedSubOption) {
//           selectedCourses.push(`${selectedMainOption} - ${selectedSubOption}`);
//         }

//         const response = await axios.post('http://localhost:8080/api/users/saveCourse', {
//           id: userDetails.id, // Use the current user's ID
//           courses: selectedCourses,
//         });

//         console.log(response)
//         setMessage(response.data); // Assuming the backend returns a message
//       } catch (error) {
//         setMessage('Failed to save course');
//       }
//     }
//   };

//   return (
//     <div>
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

//       <div className="currentdate">
//         <h3> {currentTime}</h3>
//       </div>

//       <div className="container mt-4" id='userRegistration' style={{ width: "60%", marginLeft: "20%" }}>
//         <h1 style={{ paddingTop: '30px' }}>Enroll For Another Course</h1>
//         <form onSubmit={save}>
//           <div className="form-group" style={{ marginLeft: "-30%" }}>
         
//           </div>

//           <div className="form-group" style={{ marginLeft: "30%" }}>
//             <Dropdown
//               onChange={(main, sub) => {
//                 setSelectedMainOption(main);
//                 setSelectedSubOption(sub);
//               }}
//             />
//             {formErrors.courses && <span className="error">{formErrors.courses}</span>}
//           </div>
//           <button type="submit">Enroll</button>
//         </form>
//       </div>

     
    
//       <p>{message}</p>
//     </div>
//   );
// };

// export default SaveCourseForm;















// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import Dropdown from './Dropdown';
// import './UserRegistration.css';

// function SaveCourseForm({ currentUser, history }) {
//   const [course, setCourse] = useState('');
//   const [message, setMessage] = useState('');
//   const [selectedMainOption, setSelectedMainOption] = useState('');
//   const [selectedSubOption, setSelectedSubOption] = useState('');
//   const [formErrors, setFormErrors] = useState({});
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

//   const save = async (event) => {
//     event.preventDefault();

//     const validateForm = () => {
//       // Add validation logic here
//       return true; // Placeholder, replace with actual validation logic
//     };

//     if (validateForm()) {
//       try {
//         const selectedCourses = [];
//         if (selectedMainOption && selectedSubOption) {
//           selectedCourses.push(`${selectedMainOption} - ${selectedSubOption}`);
//         }

//         const response = await axios.post('http://localhost:8080/api/users/saveCourse', {
//           id: userDetails.id, // Use the current user's ID
//           courses: selectedCourses,
//         });

//         setMessage(response.data); // Assuming the backend returns a message
//         window.alert(response.data);
//         history.push('/UserDashboard'); // Navigate to user dashboard
//       } catch (error) {
//         // setMessage('Failed to save course');
//       }
//     }
//   };

//   return (
//     <div>
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

//       <div className="currentdate">
//         <h3> {currentTime}</h3>
//       </div>

//       <div className="container mt-4" id='userRegistration' style={{ width: "60%", marginLeft: "20%" }}>
//         <h1 style={{ paddingTop: '30px' }}>Enroll For Another Course</h1>
//         <form onSubmit={save}>
//           <div className="form-group" style={{ marginLeft: "-30%" }}>
         
//           </div>

//           <div className="form-group" style={{ marginLeft: "30%" }}>
//             <Dropdown
//               onChange={(main, sub) => {
//                 setSelectedMainOption(main);
//                 setSelectedSubOption(sub);
//               }}
//             />
//             {formErrors.courses && <span className="error">{formErrors.courses}</span>}
//           </div>
//           <button type="submit">Enroll</button>
//         </form>
//       </div>

     
    
//       <p>{message}</p>
//     </div>
//   );
// };

// export default SaveCourseForm;

// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import Dropdown from './Dropdown';
// import './UserRegistration.css';

// function SaveCourseForm({ currentUser, history }) {
//   const [message, setMessage] = useState('');
//   const [selectedMainOption, setSelectedMainOption] = useState('');
//   const [selectedSubOption, setSelectedSubOption] = useState('');
//   const [formErrors, ] = useState({});
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

//   const save = async (event) => {
//     event.preventDefault();

//     const validateForm = () => {
//       // Add validation logic here
//       return true; // Placeholder, replace with actual validation logic
//     };

//     if (validateForm()) {
//       try {
//         const selectedCourses = [];
//         if (selectedMainOption && selectedSubOption) {
//           selectedCourses.push(`${selectedMainOption} - ${selectedSubOption}`);
//         }

//         const response = await axios.post('http://localhost:8080/api/users/saveCourse', {
//           id: userDetails.id, // Use the current user's ID
//           courses: selectedCourses,
//         });

//         setMessage(response.data); // Assuming the backend returns a message
//         window.alert(response.data);
//         history.push('/UserDashboard'); // Navigate to user dashboard
//       } catch (error) {
//         // setMessage('Failed to save course');
//       }
//     }
//   };

//   return (
//     <div>
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

//       <div className="currentdate">
//         <h3> {currentTime}</h3>
//       </div>

//       <div className="container mt-4" id='userRegistration' style={{ width: "60%", marginLeft: "20%" }}>
//         <h1 style={{ paddingTop: '30px' }}>Enroll For Another Course</h1>
//         <form onSubmit={save}>
//           <div className="form-group" style={{ marginLeft: "-30%" }}>
         
//           </div>

//           <div className="form-group" style={{ marginLeft: "30%" }}>
//             <Dropdown
//               onChange={(main, sub) => {
//                 setSelectedMainOption(main);
//                 setSelectedSubOption(sub);
//               }}
//             />
//             {formErrors.courses && <span className="error">{formErrors.courses}</span>}
//           </div>
//           <button type="submit">Enroll</button>
//         </form>
//       </div>

     
    
//       <p>{message}</p>
//     </div>
//   );
// };

// export default SaveCourseForm;





import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';
import './UserRegistration.css';

function Enroll({ currentUser }) {
  const [selectedMainOption, setSelectedMainOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [userDetails, setUserDetails] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const [loading, setLoading] = useState(false);
  const [courseExists, setCourseExists] = useState(false); // State to track if course exists
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentUser) {
      setLoading(true);
      axios.get(`http://192.168.138.130:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
        .then(response => {
          setUserDetails(response.data[0]);
          if (response.data[0]?.courses) {
            setEnrolledCourses(response.data[0].courses);
          }
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
          setLoading(false);
        });
    }
  }, [currentUser]);

  const validateForm = () => {
    // Add validation logic here
    return true; // Placeholder, replace with actual validation logic
  };

  const save = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        setLoading(true);
        const selectedCourses = [];
        if (selectedMainOption && selectedSubOption) {
          const selectedCourse = `${selectedMainOption} - ${selectedSubOption}`;
          if (enrolledCourses.includes(selectedCourse)) {
            setCourseExists(true); // Set state to true if course exists
            setLoading(false);
            return; // Do not proceed with saving if the course exists
          } else {
            selectedCourses.push(selectedCourse);
          }
        }

        await axios.post('http://192.168.138.130:8080/api/users/saveCourse', {
          id: userDetails.id,
          courses: selectedCourses,
          amount: selectedAmount,
        });

        setLoading(false);

        navigate('/PayOne', {
          state: {
            selectedCourses: selectedCourses,
            selectedAmount: selectedAmount,
          }
        });
      } catch (error) {
        console.error('Error saving course:', error);
        setLoading(false);
        window.alert('Failed to enroll in the course. Please try again.');
      }
    }
  };

  const handleDropdownChange = (main, sub, amount) => {
    setSelectedMainOption(main);
    setSelectedSubOption(sub);
    setSelectedAmount(amount);
  };

  return (
    <div>
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

      <div className="currentdate">
        <h3> {currentTime}</h3>
      </div>

      <div className="container mt-4" id='userRegistration' style={{ width: "60%", marginLeft: "20%" }}>
        <form onSubmit={save}>
          <h3 style={{ paddingTop: '30px' }}>Enroll For Another Course</h3>
          <div className="form-group" style={{ marginLeft: "30%" }}>
            <Dropdown onChange={handleDropdownChange} />
            {courseExists && <p className="error">This course is already enrolled. Please select another course.</p>}
            {formErrors.courses && <span className="error">{formErrors.courses}</span>}
          </div>
          <button type="submit" disabled={loading}>{loading ? 'Enrolling...' : 'Enroll'}</button>
        </form>
      </div>
    </div>
  );
}

export default Enroll;
