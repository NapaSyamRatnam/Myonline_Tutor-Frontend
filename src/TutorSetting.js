
// import React from "react";
// import { Link } from 'react-router-dom';
// import './TutorDashboard.css';
// import './Settings.css';

// function TutorSetting() {
//   return (
//     <>
//       <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//       </div>
//       <nav className="sidebarT">
//         <ul>
//         <li><Link to='/TutorDashboard'><label>Home</label></Link></li>
//           <li><Link to='/LiveClass'><label>Live Classes</label></Link></li>
//           <li><Link to='/Task'><label>Tasks</label></Link></li>
//           <li><Link to='/UserList'><label>UserList</label></Link></li>
//            <li><Link to='/MyDiscussion'><label>My Discussion</label></Link></li>
//           <li><Link to='/StudyMaterials'><label>StudyMaterials</label></Link></li>
//           <li><Link to='/TutorSetting'><label>Settings</label></Link></li>
//         </ul>
//       </nav>
//       <div className="main-content7 back2   ">
//         <h2 style={{color:"black"}}>Settings</h2>
//         <div className="row col-12">
//           <div className="col-3">
//           <Link to='/TutorProfile'><input value='Profile' type="button" className="profile-button course-item7"/></Link>
//           </div>
//           <div className="col-3">
//           <Link to='/TutorHelp'><input value='Help/Support' type="button" className="help-button course-item7"/></Link>
//           </div>
//         </div>
//         <div className="row col-12">
//           <div className="col-3">
//           <Link to='/CreateReport'><input value='Reports' type="button" className="reports-button course-item7"/></Link>
//           </div>
//           <div className="col-3">
//           <Link to='/Notifications'><input value='Notifications' type="button" className="notifications-button course-item7"/></Link>
//           </div>
//           <div className="col-3">
//           <Link to='/'><input value='Log Out' type="button" className="Settings linkButton"/></Link>
//           </div>
//         </div>
//       </div>
//       <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }
// export default TutorSetting;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers, faUser, faQuestionCircle, faChartBar, faBell,faUserCheck } from '@fortawesome/free-solid-svg-icons';
import './TutorDashboard.css';
import './Settings.css';

function TutorSetting() {
  const [tutorData, setTutorData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Fetch tutor details from localStorage
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
          <li><Link to='/Attendance' ><FontAwesomeIcon icon={faUserCheck} /> Attendance</Link></li>
          <li><Link to='/TutorSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>
      <div className="card-container">
        <div className="main-content7 back2" >
          <h2 style={{ color: "#0a50b4", fontSize: "2.3rem" }}>Settings</h2>
          <div className="row col-12" style={{ display: "flex" }}>
            <div className="col-3">
              <Link to='/TutorProfile'>
                <button value='Profile' type="button" className="profile-button course-item7">
                  <FontAwesomeIcon icon={faUser} /> Profile
                </button>
              </Link>
            </div>
            <div className="col-3">
              <Link to='/TutorHelp'>
                <button value='Help/Support' type="button" className="help-button course-item7">
                  <FontAwesomeIcon icon={faQuestionCircle} /> Help/Support
                </button>
              </Link>
            </div>
          </div>
          <div className="row col-12" style={{ display: "flex" }}>
            <div className="col-3">
              <Link to='/CreateReport'>
                <button value='Reports' type="button" className="reports-button course-item7">
                  <FontAwesomeIcon icon={faChartBar} /> Reports
                </button>
              </Link>
            </div>
            <div className="col-3">
              <Link to='/Notifications'>
                <button value='Notifications' type="button" className="notifications-button course-item7">
                  <FontAwesomeIcon icon={faBell} /> Notifications
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer1">
        <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default TutorSetting;
