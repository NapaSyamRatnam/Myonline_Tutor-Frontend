
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import './TutorDashboard.css';

function TutorDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [tutorData, setTutorData] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Fetch tutor details when the component mounts
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

  const handleLogout = () => {
    localStorage.removeItem('tutorId');
    localStorage.removeItem('tutorName');
    window.location.href = '/'; // Redirect to login page
  };

  return (
    <>
      <div className="header1">
        <label><h1 style={{color:'white'}}>My Online Tutor</h1></label>
        <div className="Tutor1">
          {tutorData && (
            <>
              <div style={{fontSize:"20px"}}>Tutor ID: {tutorData.id}</div>
              <div style={{ fontSize: "20px" }}>Tutor Name: {tutorData.firstName} {tutorData.lastName}</div><br></br>
              <p style={{ color:'white',fontSize:'25px'}}>{currentTime.toLocaleString()}</p> 
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
          <li style={{marginLeft: "10%"}}><button onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button></li>
        </ul>
      </nav>
      <div className="main">
        <div className="App"> <br/>
          <h2 style={{marginLeft:  "10%", fontSize: "2.3rem"}}>Welcome to Tutor Dashboard</h2>
          <img src='https://www.sageeducation.ae/admin/blog/online-tutoring.jpg' alt="Online Tutoring" className="course-image" style={{marginLeft: "5%", borderRadius: "2rem"}}/>
        </div>
      </div>
      <div className="footer1">
        <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default TutorDashboard;
