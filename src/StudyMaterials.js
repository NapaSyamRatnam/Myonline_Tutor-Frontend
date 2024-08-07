// import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import './TutorDashboard.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// const StudyMaterials = () => {
//   const [fileEntity, setFileEntity] = useState({
//     fileName: '',
//     fileLink: '',
//     tutorName: '',
//     tutorId: '',
//     courseName: '',
//     date: '',
//     userId: '',
//   });
//   const [studyMaterials, setStudyMaterials] = useState([]);
//   const [tutorData, setTutorData] = useState(null);
//   const [courses, setCourses] = useState([]);
//   const id = 1;
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(intervalId); // Cleanup the interval
//   }, []);

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api-v1/${id}`)
//       .then(response => {
//         setTutorData(response.data);
//         // Set initial course name if available in tutor data
//         if (response.data.courseName) {
//           setFileEntity((prevData) => ({
//             ...prevData,
//             courseName: response.data.courseName,
//           }));
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching user details:', error);
//       });
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFileEntity((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileUpload = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/files/upload', fileEntity);
//       if (response.status === 200) {
//         alert('File uploaded successfully!');
//         fetchStudyMaterials();
//       }
//     } catch (error) {
//       alert('Error uploading file:', error.message);
//     }
//   };

//   const fetchStudyMaterials = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/files/show');
//       setStudyMaterials(response.data);
//     } catch (error) {
//       console.error('Error fetching study materials:', error);
//     }
//   };

//   useEffect(() => {
//     fetchStudyMaterials();
//   }, []);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);

//   return (
//     <>
//       <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//         <div className="Tutor">
//           {tutorData && (
//             <>
//               <div style={{fontSize:"20px"}}>Tutor ID: {tutorData.id}</div>
//               <div style={{fontSize:"20px"}}>Tutor Name: {tutorData.firstName} {tutorData.lastName}</div><br></br>
//               <p style={{ color:'white',fontSize:'25px'}}>{currentTime.toLocaleString()}</p>
//             </>
//           )}
//         </div>
//       </div>
//       <nav className="sidebarT">
//         <ul>
//           <li><Link to='/TutorDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
//           <li><Link to='/Liveclass'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
//           <li><Link to='/UserList'><FontAwesomeIcon icon={faUsers} /> UserList</Link></li>
//           <li><Link to='/Task'><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/StudyMaterials'><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/MyDiscussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/TutorSetting'><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
//         </ul>
//       </nav>
//       <div className="main" style={{marginLeft: "27%", marginTop: "7%"}}>
//         <div>
//           <div className="app" id='landingpage'> <br/>
//             <section className="home-section" style={{marginLeft: "3%"}}>
//               <Link to="/CreateFile" className="course-link">
//                 <div className="course-item">
//                   <img
//                     src="https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?w=900&t=st=1704865629~exp=1704866229~hmac=bf48f531d643d12a0a78e7649c08158b6f50f18913eb2ae8f59899328b19a6ff"
//                     alt=""
//                     className="course-image"
//                   />
//                   <h2> File</h2>
//                 </div>
//               </Link>

//               <Link to="/CreateVideo" className="course-link" style={{marginLeft: "5%"}}>
//                 <div className="course-item">
//                   <img
//                     src="https://img.freepik.com/premium-photo/happy-young-student-with-laptop-looking-his-classmate-sitting-front-him-during-discussion-consultation-lesson_274679-9699.jpg?w=900"
//                     alt=""
//                     className="course-image"
//                   />
//                   <h2> Video</h2>
//                 </div>
//               </Link>
//             </section>
//           </div>
//         </div>
//       </div> 
//       <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// };

// export default StudyMaterials;


import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
 import './TutorDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers,faUserCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const StudyMaterials = () => {
  const [tutorData, setTutorData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId); // Cleanup the interval
  }, []);

  useEffect(() => {
    // Fetch tutor details when the component mounts
    const tutorId = localStorage.getItem('tutorId');
    if (tutorId) {
      axios.get(`http://192.168.138.130:8080/api-v1/${tutorId}`)
        .then(response => {
          setTutorData(response.data);
        })
        .catch(error => {
          console.error('Error fetching tutor details:', error);
        });
    }
  }, []);

  return (
    <>
      <div className="header1">
        <label><h1>My Online Tutor</h1></label>
        <div className="Tutor">
          {tutorData && (
            <>
              <div style={{fontSize:"20px"}}>Tutor ID: {tutorData.id}</div>
              <div style={{fontSize:"20px"}}>Tutor Name: {tutorData.firstName} {tutorData.lastName}</div><br></br>
              <p style={{ color:'white',fontSize:'25px'}}>{currentTime.toLocaleString()}</p>
            </>
          )}
        </div>
      </div>
      <nav className="sidebarT">
        <ul>
          <li><Link to='/TutorDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to='/Liveclass'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
          <li><Link to='/UserList'><FontAwesomeIcon icon={faUsers} /> UserList</Link></li>
          <li><Link to='/Task'><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
          <li><Link to='/StudyMaterials'><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
          <li><Link to='/MyDiscussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
          <li><Link to='/Attendance' ><FontAwesomeIcon icon={faUserCheck} /> Attendance</Link></li>
          <li><Link to='/TutorSetting'><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>
      <div className="main" style={{marginLeft: "27%", marginTop: "7%"}}>
        <div>
          <div className="app" id='landingpage'> <br/>
            <section className="home-section" style={{marginLeft: "3%"}}>
              <Link to="/CreateFile" className="course-link">
                <div className="course-item">
                  <img
                    src="https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?w=900&t=st=1704865629~exp=1704866229~hmac=bf48f531d643d12a0a78e7649c08158b6f50f18913eb2ae8f59899328b19a6ff"
                    alt=""
                    className="course-image"
                  />
                  <h2> File</h2>
                </div>
              </Link>

              <Link to="/CreateVideo" className="course-link" style={{marginLeft: "5%"}}>
                <div className="course-item">
                  <img
                    src="https://img.freepik.com/premium-photo/happy-young-student-with-laptop-looking-his-classmate-sitting-front-him-during-discussion-consultation-lesson_274679-9699.jpg?w=900"
                    alt=""
                    className="course-image"
                  />
                  <h2> Video</h2>
                </div>
              </Link>
            </section>
          </div>
        </div>
      </div> 
      <div className="footer1">
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
};

export default StudyMaterials;
