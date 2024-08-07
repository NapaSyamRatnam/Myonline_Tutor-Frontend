// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';
// import './Mytutor.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faBookOpen, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// const Courses = ({ currentUser }) => {
//     const [userDetails, setUserDetails] = useState(null);
//     const [tutors, setTutors] = useState([]);
//     const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());


//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCurrentTime(new Date().toLocaleString());
//       }, 1000);
  
//       return () => clearInterval(interval);
//     }, []);
  

//     useEffect(() => {
//         if (currentUser) {
//             axios.get(`http://localhost:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
//                 .then(response => {
//                     setUserDetails(response.data[0]); // Assuming the API returns a single user
//                 })
//                 .catch(error => {
//                     console.error('Error fetching user details:', error);
//                 });
//         }
//     }, [currentUser]);

//     useEffect(() => {
//         if (userDetails && userDetails.courses) {
//             const currentCourse = userDetails.courses[0]; // Assuming the user has only one course
//             const subCourse = currentCourse.split(' - ')[1]; // Assuming the course name format is "MainCourse - SubCourse"
//             axios.get(`http://localhost:8080/api-v1/by-course/${subCourse}`)
//                 .then(response => {
//                     const tutorsData = response.data.map(tutor => ({
//                         id: tutor.id,
//                         fullName: `${tutor.firstName} ${tutor.lastName}`,
//                         email: tutor.email,
//                         qualification: tutor.qualification,
//                         course: tutor.course,
//                     }));
//                     setTutors(tutorsData);
//                 })
//                 .catch(error => {
//                     console.error(`Error fetching tutors for ${subCourse} course:`, error);
//                 });
//         }
//     }, [userDetails]);

//     return (
//         <div>
//             <div className="header8">
//                 <h1>My Online Tutor</h1>
//                 {userDetails ? (
//                     <div className="user-details">
//                         <div className="profile-details12">
//                             <p><strong>User ID:</strong> {userDetails.id}</p>
//                             <p><strong>User Name:</strong> {userDetails.firstName} {userDetails.lastName}</p>
//                         </div>
//                     </div>
//                 ) : (
//                     <p>Loading user details...</p>
//                 )}
//             </div>
//             <nav className="sidebar8">
//                 <ul>
//                     <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                   
//                     <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
//                     <li><Link to='/FileList'><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//                     <li><Link to='/UserTask'><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//                     <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//                     <li><Link to='/UserSetting'><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//                     <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link></li>
//                 </ul>
//             </nav>
//             <div className="currentdate">
//             <h3> {currentTime}</h3>
//           </div>
//             <div className="main-content8   ">

//                     <div className='tutor-css'>
//                 <h2>Tutor for your Current Course</h2>
             
//                      <ul>
//                           {userDetails ? (
//                     <div className="">
//                         <div className="">
//                             <h3><strong>Course:</strong> {userDetails.courses ? userDetails.courses.join(', ') : ''}</h3>
//                         </div>
//                     </div>
//                 ) : (
//                     <p>Loading user details...</p>
//                 )}
                   
//                     {tutors.map(tutor => (
//                         <li key={tutor.id}>
//                             <div  className=" tutordetails  ">
//                             <h4><strong>Tutor ID:</strong> {tutor.id}</h4>
//                             <h4><strong>Full Name:</strong> {tutor.fullName}</h4>
//                             <h4><strong>Email:</strong> {tutor.email}</h4>
//                             <h4><strong>Qualification:</strong> {tutor.qualification}</h4>
                            

//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Courses;



























import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Mytutor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Courses = ({ currentUser }) => {
    const [userDetails, setUserDetails] = useState(null);
    const [tutor, setTutor] = useState(null);
    const [tutors, setTutors] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedTutor, setSelectedTutor] = useState(null);

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
                    fetchTutor(currentUser.email);
                })
                .catch(error => {
                    console.error('Error fetching user details:', error);
                });
        }
    }, [currentUser]);

    const fetchTutor = async (email) => {
        try {
            const response = await axios.get(`http://192.168.138.130:8080/admin/get/${email}`);
            setTutor(response.data);
            fetchTutors(response.data.assignTutorname);
        } catch (error) {
            console.error(error);
            setTutor(null);
        }
    };

    const fetchTutors = async (firstName) => {
        try {
            const response = await axios.get(`http://192.168.138.130:8080/api-v1/by-first-name/${firstName}`);
            setTutors(response.data);
        } catch (error) {
            console.error('Error fetching tutors:', error);
        }
    };

    const handleView = (tutor) => {
        setSelectedTutor(tutor);
        setIsCartOpen(true);
    };

    const handleCloseCart = () => {
        setSelectedTutor(null);
        setIsCartOpen(false);
    };

    return (
        <div>
            <div className="header8">
                <h1>My Online Tutor</h1>
                {userDetails ? (
                    <div className="user-details">
                        <div className="profile-details12">
                            <p><strong>User ID:</strong> {userDetails.id}</p>
                            <p><strong>User Name:</strong> {userDetails.firstName} {userDetails.lastName}</p>
                        </div>
                    </div>
                ) : (
                    <p>Loading user details...</p>
                )}
            </div>
            <nav className="sidebar8">
                <ul>
                    <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                    <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
                    <li><Link to='/FileList'><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
                    <li><Link to='/UserTask'><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
                    <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
                    <li><Link to='/UserSetting'><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
                    <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link></li>
                </ul>
            </nav>
            <div className="currentdate">
                <h3>{currentTime}</h3>
            </div>
{/* 
            <div>
                <h2>Assigned Tutor</h2>
                {tutor ? (
                    <div>
                        <h3>Tutor Details:</h3>
                        <p>Assign Tutor Name: {tutor.assignTutorname}</p>
                    </div>
                ) : (
                    <p>Loading tutor details...</p>
                )}
            </div> */}

            <div className='tutor-css'>
                <h2> Assigned Tutor</h2>
                <table className={isCartOpen ? 'blur' : ''}>
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Tutor ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Course</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tutors.map((tutor, index) => (
                            <tr key={tutor.id}>
                                <td>{index + 1}</td>
                                <td>{tutor.id}</td>
                                <td>{tutor.firstName} {tutor.lastName}</td>
                                <td>{tutor.email}</td>
                                <td>{tutor.courses.join(', ')}</td>
                                <td>
                                    <button onClick={() => handleView(tutor)}>View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isCartOpen && selectedTutor && (
                <div className="view-cart-overlay" onClick={handleCloseCart}></div>
            )}
            {isCartOpen && selectedTutor && (
                <div className="view-cart" style={{ width: "30%" }}>
                    <div className="view-cart-content">
                        {/* {/ <h2>Tutor Details</h2> /} */}
                        <p>Tutor ID: <span>{selectedTutor.id}</span></p>
                        <p>Name: <span>{selectedTutor.firstName} {selectedTutor.lastName}</span></p>
                        <p>Email: <span>{selectedTutor.email}</span></p>
                        <p>Course:<span> {selectedTutor.courses.join(', ')}</span></p>
                        <p>Mobile:<span>{selectedTutor.mobilenumber}</span></p>
                        <p>Qualification:<span>{selectedTutor.qualification},{selectedTutor.higherQualification}</span></p>
                       
                        <button onClick={handleCloseCart}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Courses;